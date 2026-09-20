# 🌿 플루니티 (Flunitea) [몸BTI] 웰니스 꽃차 솔루션

> **"사상체질의 전통적 관점에 영감을 받아 현대인의 일상, 신체 상태, 라이프스타일 및 차 취향을 결합해 개인에게 가장 잘 맞는 차를 페어링하는 웰니스 티 솔루션"**

---

## 🌟 핵심 컨셉 및 블렌딩 공식 (50:30:20)

나의 체질 유형(Base 50%) + 차 취향(Taste 30%) + 오늘의 컨디션(Wellness Point 20%)을 종합하여 세상에 단 하나뿐인 개인 시그니처 티를 직접 블렌딩할 수 있도록 추천합니다.

1. **01 MY BODY (나의 몸BTI - 50% 반영)**: 사상체질 설문(1~8번 문항) + 동점 시 결정적 보완 질문
2. **02 MY TASTE (내가 좋아하는 향과 맛 - 30% 반영)**: 아로마, 플레이버, 차의 우선 가치 설문
3. **03 TODAY (오늘 나에게 필요한 한 가지 - 20% 반영)**: 실시간 웹캠 및 사진 업로드를 통한 AI 안색/피로도 스캔 분석

---

## 🍵 사상체질 4대 몸BTI 유형 및 추천 꽃차

- **해온형 (SUN 태양인)**: *열정적인 나에게 잠시 쉼을 (CALM, CLEAR, RELAX)*
  - 특징: 자신의 에너지를 적극적으로 표현하고 빠르게 결정하는 성향
  - 추천 차: **맨드라미꽃차, 목련꽃차, 생강나무꽃차**
- **숲온형 (FOREST 태음인)**: *안정적인 나에게 산뜻한 움직임을 (LIGHT, FRESH, REFRESH)*
  - 특징: 안정적이고 편안한 리듬을 좋아하는 성향
  - 추천 차: **연잎차, 국화차, 청귤차, 진피차, 겨우살이차, 우엉차**
- **바람형 (WIND 소양인)**: *빠르게 움직이는 나에게 여유를 (SOFT, RELAX, BALANCE)*
  - 특징: 새로운 것을 좋아하고 변화에 빠르게 반응하는 감각적인 성향
  - 추천 차: **캐모마일꽃차, 구기자차, 금어초꽃차, 팬지꽃차**
- **온담형 (WARM 소음인)**: *섬세한 나에게 따뜻한 온기를 (WARM, COMFORT, ENERGY)*
  - 특징: 신중하고 섬세하며 익숙한 환경에서 리듬을 찾는 성향
  - 추천 차: **장미꽃차, 레몬그라스잎차, 비트차, 도라지차, 구절초꽃차, 천일홍꽃차, 생강차, 쑥차**

---

## 🚀 주요 기능

1. **몸BTI 진단 테스트**:
   - 신체 상태와 일상 습관(1~8번 문항) 분석
   - 동점 결과 발생 시 보완 질문 자동 팝업 (예: A 2개, C 3개, D 3개 시 식습관 및 체온 비교 질문을 통해 최종 유형 판정)
2. **차 취향 & 얼굴 안색 분석**:
   - 9~11번 취향 설문 (꽃향, 청량한 맛 등)
   - 웹캠/사진 업로드 실시간 스캔 애니메이션을 통한 컨디션 지표 도출
3. **나만을 위한 차 추천 & 시그니처 블렌딩 카드**:
   - 3단 티 레이어 수색(Color) 그라데이션 인터랙션
   - 최적의 추출 온도, 시간, 테이스팅 노트 및 레시피 카드 인쇄/공유
4. **온라인 구매·구독 및 방문 예약**:
   - 네이버 스마트스토어 즉시 구매 및 정기구독 서비스 연계
   - 오프라인 매장(플루니티 성수 아틀리에) 원데이 블렌딩 클래스 사전 예약 폼
5. **회원가입 (국가 선택 필수)**:
   - 한국 및 전 세계 국가 선택 드롭다운
   - 연령대, 성별, 건강 고민 맞춤 수집

---

## 📊 구글 스프레드시트(Google Sheets) 데이터베이스 연동

본 프로젝트는 구글 스프레드시트를 클라우드 DB로 활용합니다.

### 1단계: Google Apps Script 배포
1. 본인의 구글 드라이브에서 새 [구글 스프레드시트]를 생성합니다.
2. 상단 메뉴에서 `확장 프로그램` -> `Apps Script`를 클릭합니다.
3. 아래 코드를 붙여넣고 저장합니다:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var postData = JSON.parse(e.postData.contents);
    var action = postData.action;
    var data = postData.data;
    
    var targetSheet = sheet.getSheetByName(action) || sheet.insertSheet(action);
    
    // 첫 행이 비어있으면 헤더 작성
    if (targetSheet.getLastRow() === 0) {
      var headers = Object.keys(data);
      headers.unshift("등록일시");
      targetSheet.appendRow(headers);
    }
    
    var row = [new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })];
    for (var key in data) {
      var val = data[key];
      if (typeof val === 'object') val = JSON.stringify(val);
      row.push(val);
    }
    
    targetSheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success", row: row }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. 우측 상단 `배포` -> `새 배포` 클릭:
   - 유형: **웹 앱**
   - 다음 사용자로 실행: **나**
   - 액세스 권한: **모든 사용자 (Anyone)**
5. 발급된 웹 앱 URL(`https://script.google.com/macros/s/.../exec`)을 복사합니다.

### 2단계: 환경 변수 등록
`.env.local` 또는 Vercel 환경 변수(Environment Variables)에 등록합니다:
```env
GOOGLE_SHEET_WEBAPP_URL="https://script.google.com/macros/s/발급받은_URL/exec"
```
*(미등록 시에도 브라우저 로컬스토리지 백업 모드로 사이트가 안전하게 작동합니다.)*

---

## 🌐 깃허브(GitHub) 및 버셀(Vercel) 배포 방법

### 1. 깃허브 푸시
```bash
git init
git add .
git commit -m "feat: Flunitea MomBTI wellness tea solution"
git branch -M main
git remote add origin https://github.com/당신의계정/flunitea-mombbti.git
git push -u origin main
```

### 2. 버셀(Vercel) 배포
1. [Vercel](https://vercel.com) 로그인 후 `Add New Project` 클릭
2. 방금 푸시한 GitHub 저장소 `flunitea-mombbti` 선택
3. `Environment Variables`에 `GOOGLE_SHEET_WEBAPP_URL` 추가 (선택 사항)
4. `Deploy` 버튼 클릭 -> 1분 내 글로벌 배포 완료!
