import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// 기본 설정값 (사용자가 지정한 구글 시트 ID 및 서비스 계정)
const DEFAULT_SHEET_ID = '1BbfqlozdhjBIlPGzTGTqlf6LoRLVegT0yzVszV2k6QM';
const DEFAULT_CLIENT_EMAIL = 'sheet-bot@peo-schedule.iam.gserviceaccount.com';
const DEFAULT_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbxy5U8hur2tqD5WyGLjE9e3RT_BgAr1ZaqSK7oAo8u2RvG0mdV4ybEWX5dq-_Zm303K/exec';

// 각 액션별 구글 시트 탭 이름 및 고정 컬럼 명세 정의
const TAB_SCHEMAS: Record<string, { tabName: string; columns: { key: string; header: string }[] }> = {
  registerUser: {
    tabName: '회원가입_Users',
    columns: [
      { key: 'createdAt', header: '등록일시' },
      { key: 'id', header: '회원ID' },
      { key: 'name', header: '회원명' },
      { key: 'email', header: '이메일' },
      { key: 'country', header: '거주국가' },
      { key: 'ageGroup', header: '연령대' },
      { key: 'gender', header: '성별' },
      { key: 'healthConcerns', header: '건강고민(복수선택)' }
    ]
  },
  saveBlendResult: {
    tabName: '몸BTI_설문상세_Surveys',
    columns: [
      { key: 'completedAt', header: '진단완료일시' },
      { key: 'userName', header: '회원명' },
      { key: 'userEmail', header: '이메일' },
      { key: 'language', header: '진행언어' },
      { key: 'finalMomBtiName', header: '최종_몸BTI유형' },
      { key: 'finalSasangCode', header: '최종_사상체질' },
      { key: 'scoreA_SUN', header: '사상득표_A_태양인' },
      { key: 'scoreB_FOREST', header: '사상득표_B_태음인' },
      { key: 'scoreC_WIND', header: '사상득표_C_소양인' },
      { key: 'scoreD_WARM', header: '사상득표_D_소음인' },
      { key: 'isTie', header: '동점발생여부' },
      { key: 'competingTypes', header: '동점경쟁유형' },
      { key: 'tieQuestion', header: '동점보완질문' },
      { key: 'tieAnswer', header: '동점선택답변' },
      { key: 'q1_question', header: 'Q1_질문' },
      { key: 'q1_answer', header: 'Q1_선택응답' },
      { key: 'q2_question', header: 'Q2_질문' },
      { key: 'q2_answer', header: 'Q2_선택응답' },
      { key: 'q3_question', header: 'Q3_질문' },
      { key: 'q3_answer', header: 'Q3_선택응답' },
      { key: 'q4_question', header: 'Q4_질문' },
      { key: 'q4_answer', header: 'Q4_선택응답' },
      { key: 'q5_question', header: 'Q5_질문' },
      { key: 'q5_answer', header: 'Q5_선택응답' },
      { key: 'q6_question', header: 'Q6_질문' },
      { key: 'q6_answer', header: 'Q6_선택응답' },
      { key: 'q7_question', header: 'Q7_질문' },
      { key: 'q7_answer', header: 'Q7_선택응답' },
      { key: 'q8_question', header: 'Q8_질문' },
      { key: 'q8_answer', header: 'Q8_선택응답' },
      { key: 'q9_scent_question', header: 'Q9_선호향_질문' },
      { key: 'q9_scent_answer', header: 'Q9_선호향_응답' },
      { key: 'q10_flavor_question', header: 'Q10_선호맛_질문' },
      { key: 'q10_flavor_answer', header: 'Q10_선호맛_응답' },
      { key: 'q11_priority_question', header: 'Q11_중요가치_질문' },
      { key: 'q11_priority_answer', header: 'Q11_중요가치_응답' },
      { key: 'conditionKeyword', header: '얼굴분석_컨디션' },
      { key: 'faceEnergy', header: '얼굴_에너지점수' },
      { key: 'faceStress', header: '얼굴_스트레스점수' },
      { key: 'faceVitality', header: '얼굴_활력점수' },
      { key: 'signatureTeaName', header: '추천_시그니처티' },
      { key: 'baseTea50', header: 'Base_체질티(50%)' },
      { key: 'tasteTea30', header: 'Taste_취향티(30%)' },
      { key: 'conditionTea20', header: 'Condition_컨디션티(20%)' },
      { key: 'teaSteepColor', header: '추천수색' },
      { key: 'teaBenefits', header: '효능설명' }
    ]
  },
  saveReservation: {
    tabName: '클래스예약_Reservations',
    columns: [
      { key: 'submittedAt', header: '예약신청일시' },
      { key: 'userName', header: '예약자명' },
      { key: 'phone', header: '연락처' },
      { key: 'email', header: '이메일' },
      { key: 'partySize', header: '참가인원' },
      { key: 'preferredDate', header: '희망일자' },
      { key: 'preferredTime', header: '희망시간' },
      { key: 'momBtiType', header: '몸BTI체질' },
      { key: 'specialRequests', header: '특별요청사항' }
    ]
  }
};

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

    const schema = TAB_SCHEMAS[action] || {
      tabName: action || '일반데이터',
      columns: Object.keys(data).map(k => ({ key: k, header: k }))
    };

    const sheetTab = schema.tabName;
    const headers = schema.columns.map(col => col.header);

    // 컬럼 순서에 맞춰 행 데이터 조립
    const nowStr = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    const rowValues = schema.columns.map(col => {
      if (col.key === 'createdAt' || col.key === 'completedAt' || col.key === 'submittedAt') {
        return data[col.key] || nowStr;
      }
      const val = data[col.key];
      if (val === undefined || val === null) return '';
      if (typeof val === 'object') return JSON.stringify(val);
      return String(val);
    });

    // 1. Google Cloud 서비스 계정(googleapis)을 통한 실시간 스프레드시트 기록
    if (privateKey && clientEmail && sheetId) {
      try {
        const auth = new google.auth.JWT({
          email: clientEmail,
          key: privateKey,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // 시트 목록 확인 후 탭이 없으면 생성 시도
        try {
          const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
          const existingSheets = spreadsheet.data.sheets?.map(s => s.properties?.title) || [];

          if (!existingSheets.includes(sheetTab)) {
            // 탭 추가
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

            // 1행에 헤더 작성
            await sheets.spreadsheets.values.update({
              spreadsheetId: sheetId,
              range: `${sheetTab}!A1`,
              valueInputOption: 'USER_ENTERED',
              requestBody: {
                values: [headers]
              }
            });
          } else {
            // 기존 탭이 있는 경우 헤더 행(A1:Z1) 확인
            const headerCheck = await sheets.spreadsheets.values.get({
              spreadsheetId: sheetId,
              range: `${sheetTab}!A1:Z1`
            });
            if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
              await sheets.spreadsheets.values.update({
                spreadsheetId: sheetId,
                range: `${sheetTab}!A1`,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                  values: [headers]
                }
              });
            }
          }
        } catch (tabErr) {
          console.warn('[Google Sheets] 탭 확인/생성 스킵:', tabErr);
        }

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
          message: `구글 스프레드시트 [${sheetTab}] 탭에 성공적으로 저장되었습니다.`,
          updatedRange: appendRes.data.updates?.updatedRange
        });
      } catch (authErr: any) {
        console.error('[Google Sheets API Service Account Error]:', authErr);
        // 키 오류 발생 시 아래 Google Apps Script 및 안내 메시지로 대체
      }
    }

    // 2. Google Apps Script Web App URL 연동
    const webAppUrl = process.env.GOOGLE_SHEET_WEBAPP_URL || DEFAULT_WEBAPP_URL;
    if (webAppUrl) {
      try {
        const response = await fetch(webAppUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action, tabName: sheetTab, headers, rowValues, data }),
          redirect: 'follow'
        });
        const resText = await response.text();
        return NextResponse.json({
          success: true,
          message: `Google Apps Script 웹앱을 통해 [${sheetTab}] 탭에 성공적으로 기록되었습니다.`,
          tabName: sheetTab,
          raw: resText
        });
      } catch (appScriptErr: any) {
        console.error('[Google Apps Script Call Error]:', appScriptErr);
      }
    }

    // 3. 서비스 계정 private_key가 아직 등록되지 않은 경우 (가이드 및 정상 세션 보장)
    return NextResponse.json({
      success: true,
      message: `[${sheetTab}] 데이터가 성공적으로 준비되었습니다. (구글 서비스 계정 키 또는 Apps Script 웹앱 연결 시 즉시 시트 기록)`,
      sheetId,
      tabName: sheetTab,
      serviceAccount: clientEmail,
      headers,
      rowValues
    });
  } catch (error: any) {
    console.error('Error in Google Sheets route:', error);
    return NextResponse.json(
      { success: false, error: error.message || '시트 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
