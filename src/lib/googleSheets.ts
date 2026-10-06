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
    var action = postData.action || "general";
    var tabName = postData.tabName || action || "데이터기록";
    var headers = postData.headers;
    var rowValues = postData.rowValues;
    var data = postData.data || {};
    
    // 1. 해당 탭에 시트 행 추가
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

    // 2. 클래스 예약(saveReservation)인 경우 관리자 2명에게 즉시 이메일 발송
    if (action === "saveReservation") {
      var adminEmails = "sho0051@naver.com, jguy12@hanmail.net";
      var subject = "[플루니티] 새로운 원데이 클래스 예약이 접수되었습니다! (" + (data.userName || "고객") + " 님)";
      
      var htmlBody = ""
        + "<div style='font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #e0d7c7; border-radius: 16px; background-color: #faf8f5;'>"
        + "  <h2 style='color: #2F6B55; margin-top: 0;'>🌿 플루니티(Flunitea) 클래스 신규 예약 알림</h2>"
        + "  <p style='color: #555; font-size: 14px;'>홈페이지에서 새로운 원데이 블렌딩 클래스 사전 예약이 접수되었습니다.</p>"
        + "  <hr style='border: none; border-top: 1px solid #e5dfd3; margin: 16px 0;' />"
        + "  <table style='width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.8;'>"
        + "    <tr><td style='padding: 6px 0; color: #888; width: 110px;'><b>예약자 성함</b></td><td style='color: #222;'><b>" + (data.userName || "-") + "</b></td></tr>"
        + "    <tr><td style='padding: 6px 0; color: #888;'><b>연락처</b></td><td style='color: #222;'>" + (data.phone || "-") + "</td></tr>"
        + "    <tr><td style='padding: 6px 0; color: #888;'><b>이메일</b></td><td style='color: #222;'>" + (data.email || "-") + "</td></tr>"
        + "    <tr><td style='padding: 6px 0; color: #888;'><b>참가 인원</b></td><td style='color: #222;'>" + (data.partySize || "1") + "인</td></tr>"
        + "    <tr><td style='padding: 6px 0; color: #888;'><b>희망 일자</b></td><td style='color: #2F6B55; font-weight: bold; font-size: 15px;'>" + (data.preferredDate || "-") + "</td></tr>"
        + "    <tr><td style='padding: 6px 0; color: #888;'><b>희망 시간대</b></td><td style='color: #2F6B55; font-weight: bold; font-size: 15px;'>" + (data.preferredTime || "-") + "</td></tr>"
        + "    <tr><td style='padding: 6px 0; color: #888;'><b>몸BTI 체질</b></td><td style='color: #222;'>" + (data.momBtiType || "-") + "</td></tr>"
        + "    <tr><td style='padding: 6px 0; color: #888;'><b>특별 요청사항</b></td><td style='color: #555;'>" + (data.specialRequests || "없음") + "</td></tr>"
        + "    <tr><td style='padding: 6px 0; color: #888;'><b>접수 일시</b></td><td style='color: #888;'>" + new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }) + "</td></tr>"
        + "  </table>"
        + "  <hr style='border: none; border-top: 1px solid #e5dfd3; margin: 16px 0;' />"
        + "  <p style='font-size: 12px; color: #999; margin-bottom: 0;'>본 메일은 플루니티(Flunitea) 예약 관리 시스템에서 자동 발송되었습니다.</p>"
        + "</div>";

      MailApp.sendEmail({
        to: adminEmails,
        subject: subject,
        htmlBody: htmlBody
      });

      // 예약 신청 고객에게도 확인 메일 발송
      if (data.email && data.email.indexOf("@") > -1) {
        try {
          MailApp.sendEmail({
            to: data.email,
            subject: "[플루니티] " + data.userName + " 님의 원데이 클래스 예약이 접수되었습니다.",
            htmlBody: htmlBody
          });
        } catch (clientMailErr) {}
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success", tab: tabName }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`;
