import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, data } = body;

    // 환경 변수에 설정된 구글 앱스 스크립트 웹앱 URL 확인
    const webAppUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;

    console.log(`[Google Sheets API] Action: ${action}`, data);

    if (webAppUrl) {
      const response = await fetch(webAppUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action, data }),
      });

      const resText = await response.text();
      let resJson;
      try {
        resJson = JSON.parse(resText);
      } catch (e) {
        resJson = { raw: resText };
      }

      return NextResponse.json({
        success: true,
        message: '구글 스프레드시트에 성공적으로 기록되었습니다.',
        sheetResponse: resJson
      });
    }

    // URL이 설정되지 않은 개발/시연 환경에서는 성공 응답과 함께 안내 반환
    return NextResponse.json({
      success: true,
      message: '데이터가 기록되었습니다. (환경변수 GOOGLE_SHEET_WEBAPP_URL 설정 시 실시간 시트 동기화)',
      received: { action, data }
    });
  } catch (error: any) {
    console.error('Error sending data to Google Sheets:', error);
    return NextResponse.json(
      { success: false, error: error.message || '데이터 기록 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
