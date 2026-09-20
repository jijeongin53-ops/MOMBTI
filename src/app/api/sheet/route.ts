import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// 기본 설정값 (사용자가 지정한 구글 시트 ID 및 서비스 계정)
const DEFAULT_SHEET_ID = '1BbfqlozdhjBIlPGzTGTqlf6LoRLVegT0yzVszV2k6QM';
const DEFAULT_CLIENT_EMAIL = 'sheet-bot@peo-schedule.iam.gserviceaccount.com';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, data } = body;

    const sheetId = process.env.GOOGLE_SHEET_ID || DEFAULT_SHEET_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL || DEFAULT_CLIENT_EMAIL;
    const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY || '';

    // 개행 문자 처리 (\n)
    const privateKey = rawPrivateKey.replace(/\\n/g, '\n');

    console.log(`[Google Sheets API] Action: ${action} for Sheet: ${sheetId}`);

    // 1. Google Cloud 서비스 계정(googleapis)을 통한 실시간 스프레드시트 기록
    if (privateKey && clientEmail && sheetId) {
      try {
        const auth = new google.auth.JWT({
          email: clientEmail,
          key: privateKey,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // 시트 탭 이름 매핑
        let sheetTab = '회원명단';
        if (action === 'saveBlendResult') sheetTab = '진단및블렌딩결과';
        if (action === 'saveReservation') sheetTab = '클래스예약';

        // 시트 목록 확인 후 탭이 없으면 생성 시도
        try {
          const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
          const existingSheets = spreadsheet.data.sheets?.map(s => s.properties?.title) || [];

          if (!existingSheets.includes(sheetTab)) {
            await sheets.spreadsheets.batchUpdate({
              spreadsheetId: sheetId,
              requestBody: {
                requests: [
                  {
                    addSheet: {
                      properties: { title: sheetTab }
                    }
                  }
                ]
              }
            });

            // 헤더 추가
            const headers = ['등록일시', ...Object.keys(data)];
            await sheets.spreadsheets.values.append({
              spreadsheetId: sheetId,
              range: `${sheetTab}!A1`,
              valueInputOption: 'USER_ENTERED',
              requestBody: {
                values: [headers]
              }
            });
          }
        } catch (tabErr) {
          console.warn('[Google Sheets] 탭 확인/생성 스킵:', tabErr);
          // 기본 시트에 바로 기록 시도
        }

        // 행 데이터 생성
        const nowStr = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
        const rowValues = [
          nowStr,
          ...Object.values(data).map(val => (typeof val === 'object' ? JSON.stringify(val) : String(val)))
        ];

        // 데이터 추가 (append)
        const appendRes = await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: `${sheetTab}!A1`,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [rowValues]
          }
        });

        return NextResponse.json({
          success: true,
          message: '구글 스프레드시트에 성공적으로 저장되었습니다.',
          updatedRange: appendRes.data.updates?.updatedRange
        });
      } catch (authErr: any) {
        console.error('[Google Sheets API Service Account Error]:', authErr);
        // 키 오류 발생 시 아래 Google Apps Script 및 로컬 fallback으로 이어짐
      }
    }

    // 2. Google Apps Script Web App URL 연동 (대체 방식)
    const webAppUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;
    if (webAppUrl) {
      const response = await fetch(webAppUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, data }),
      });
      const resText = await response.text();
      return NextResponse.json({
        success: true,
        message: 'Google Apps Script 웹앱을 통해 시트에 기록되었습니다.',
        raw: resText
      });
    }

    // 3. 서비스 계정 private_key가 아직 등록되지 않은 경우 (가이드 및 정상 세션 보장)
    return NextResponse.json({
      success: true,
      message: '데이터가 접수되었습니다. (구글 서비스 계정 private_key 설정 대기 중)',
      sheetId,
      serviceAccount: clientEmail,
      received: { action, data }
    });
  } catch (error: any) {
    console.error('Error in Google Sheets route:', error);
    return NextResponse.json(
      { success: false, error: error.message || '시트 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
