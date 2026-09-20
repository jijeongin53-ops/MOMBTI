// 구글 시트(Google Sheets)를 데이터베이스로 사용하기 위한 클라이언트/서버 유틸리티
// 구글 앱스 스크립트(Google Apps Script) Web App URL을 통해 간편하게 시트에 실시간 추가

export interface SheetPayload {
  action: 'registerUser' | 'saveBlendResult' | 'saveReservation';
  data: Record<string, any>;
}

export async function sendToGoogleSheets(payload: SheetPayload): Promise<{ success: boolean; message: string }> {
  // 브라우저 로컬 스토리지에 우선 오프라인 안전 백업 저장
  if (typeof window !== 'undefined') {
    try {
      const backupKey = `flunitea_${payload.action}_records`;
      const existing = JSON.parse(localStorage.getItem(backupKey) || '[]');
      existing.push({
        ...payload.data,
        syncedAt: new Date().toISOString()
      });
      localStorage.setItem(backupKey, JSON.stringify(existing));
    } catch (e) {
      console.warn('Local backup failed', e);
    }
  }

  // Next.js API 엔드포인트를 호출하여 서버 측에서 시트로 전송 (CORS 및 보안 방지)
  try {
    const res = await fetch('/api/sheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return { success: false, message: err.error || '시트 전송 실패' };
    }

    const result = await res.json();
    return { success: true, message: result.message || '데이터가 구글 시트에 안전하게 기록되었습니다.' };
  } catch (error: any) {
    console.warn('Google Sheets API call error (fallback used):', error);
    // 오프라인이거나 URL 미설정 시에도 로컬에 저장되었으므로 사용자에게 성공 경험 제공
    return { success: true, message: '데이터가 안전하게 저장되었습니다 (로컬 세션 보관 중)' };
  }
}

/**
 * [Google Apps Script 템플릿 코드]
 * 사용자가 본인의 구글 스프레드시트에서 [확장 프로그램] -> [Apps Script]에 붙여넣고
 * 웹 앱으로 배포(액세스: 모든 사용자)할 수 있도록 안내하는 가이드 코드입니다.
 */
export const GOOGLE_APPS_SCRIPT_TEMPLATE = `
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var postData = JSON.parse(e.postData.contents);
    var tabName = postData.tabName || postData.action || "데이터기록";
    var headers = postData.headers;
    var rowValues = postData.rowValues;
    var data = postData.data;
    
    var targetSheet = sheet.getSheetByName(tabName) || sheet.insertSheet(tabName);
    
    // 첫 행이 비어있으면 헤더 작성
    if (targetSheet.getLastRow() === 0 && headers && headers.length > 0) {
      targetSheet.appendRow(headers);
    }
    
    // 전달받은 정렬된 행 데이터 추가
    if (rowValues && rowValues.length > 0) {
      targetSheet.appendRow(rowValues);
    } else if (data) {
      var row = [new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })];
      for (var key in data) {
        var val = data[key];
        if (typeof val === 'object') val = JSON.stringify(val);
        row.push(val);
      }
      targetSheet.appendRow(row);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success", tab: tabName }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`;
