// 플루니티(Flunitea) 4개 국어(한국어, 영어, 중국어, 일본어) i18n 번역 사전

export type Language = 'ko' | 'en' | 'zh' | 'ja';

export interface Translations {
  [key: string]: {
    ko: string;
    en: string;
    zh: string;
    ja: string;
  };
}

export const DICTIONARY: Translations = {
  // 내비게이션 & 브랜드
  brandTagline: {
    ko: '플루니티 · 몸BTI',
    en: 'Flunitea · MomBTI',
    zh: 'Flunitea · 体质BTI',
    ja: 'Flunitea · 体質BTI'
  },
  navTest: {
    ko: '몸BTI 진단하기',
    en: 'Take MomBTI Test',
    zh: '体质BTI测试',
    ja: '体質BTI診断'
  },
  navTypes: {
    ko: '4대 체질 & 꽃차 도감',
    en: '4 Body Types & Teas',
    zh: '四大体质与花茶图鉴',
    ja: '四大体質＆花茶図鑑'
  },
  navReservation: {
    ko: '원데이 클래스 예약',
    en: 'Book Class',
    zh: '预约体验课',
    ja: 'クラス予約'
  },
  navStore: {
    ko: '스마트스토어',
    en: 'Online Store',
    zh: '在线商城',
    ja: 'オンラインストア'
  },
  navLogin: {
    ko: '회원가입 / 로그인',
    en: 'Sign Up / Log In',
    zh: '注册 / 登录',
    ja: '会員登録 / ログイン'
  },
  navFindTea: {
    ko: '나만의 차 찾기',
    en: 'Find My Tea',
    zh: '定制专属茶',
    ja: '自分専用の茶を探す'
  },

  // 홈 Hero 섹션
  heroBadge: {
    ko: '사상체질과 현대 라이프스타일의 만남 · 플루니티',
    en: 'Sasang Constitution Meets Modern Wellness · Flunitea',
    zh: '四象体质与现代健康生活的结合 · Flunitea',
    ja: '四象体質と現代ウェルネスの融合 · Flunitea'
  },
  heroTitle1: {
    ko: '내 몸의 기운과 취향을 닮은',
    en: 'Reflecting Your Body & Taste,',
    zh: '契合您身体能量与喜好的',
    ja: '身体のバランスと好みに寄り添う'
  },
  heroTitle2: {
    ko: '세상에 단 하나뿐인 꽃차 블렌딩',
    en: 'Your One-of-a-Kind Signature Tea',
    zh: '世上独一无二的专属花茶拼配',
    ja: '世界に一つだけのシグネチャー花茶'
  },
  heroSubtitle: {
    ko: '사상체질의 전통적 관점에 영감을 받아 현대인의 일상, 신체 상태, 라이프스타일 및 차 취향을 결합한 웰니스 티 솔루션. 체질(50%) + 취향(30%) + 안색 컨디션(20%)으로 완성하는 나만의 차를 만나보세요.',
    en: 'Inspired by traditional Sasang Constitution medicine, we blend body archetype (50%) + taste preferences (30%) + facial wellness scan (20%) into your bespoke tea blend.',
    zh: '灵感源自传统四象体质哲学，结合现代生活方式与茶饮偏好。体质(50%) + 偏好(30%) + 今日面色状态(20%)，为您打造专属健康花茶。',
    ja: '四象体質の伝統的な知恵に着想を得て、体質(50%) + 好み(30%) + 顔のコンディション分析(20%)を融合した、世界であなただけのオーダーメイド花茶ソリューション。'
  },
  heroCtaTest: {
    ko: '나의 몸BTI 진단 시작하기',
    en: 'Start MomBTI Diagnosis',
    zh: '开始我的体质BTI测试',
    ja: '体質BTI診断を始める'
  },
  heroCtaTypes: {
    ko: '4대 체질 및 꽃차 도감 보기',
    en: 'Explore 4 Archetypes',
    zh: '查看四大体质与茶图鉴',
    ja: '四大体質と花茶図鑑を見る'
  },

  // 3대 비율 배너
  ratioBase: {
    ko: '50% BASE 체질 유형',
    en: '50% BASE Body Type',
    zh: '50% BASE 四象体质',
    ja: '50% BASE 体質タイプ'
  },
  ratioBaseDesc: {
    ko: '1~8번 문항 + 동점 보완 질문',
    en: 'Questions 1~8 + Tie-breaker logic',
    zh: '第1~8题及同分补充问答',
    ja: '1~8問設問＋同点補完ロジック'
  },
  ratioTaste: {
    ko: '30% TASTE 차 취향',
    en: '30% TASTE Preference',
    zh: '30% TASTE 茶饮偏好',
    ja: '30% TASTE お茶の好み'
  },
  ratioTasteDesc: {
    ko: '선호하는 향과 맛, 아로마 노트',
    en: 'Floral, herbal, citrus & flavor profile',
    zh: '钟爱的花香、果香与清爽口感',
    ja: 'お好みの香りや爽やかな味わい'
  },
  ratioCondition: {
    ko: '20% TODAY 오늘의 컨디션',
    en: '20% TODAY Wellness Point',
    zh: '20% TODAY 今日面色状态',
    ja: '20% TODAY 今日のコンディション'
  },
  ratioConditionDesc: {
    ko: '얼굴 촬영 기반 AI 안색 스캔',
    en: 'AI facial scan & fatigue analysis',
    zh: '基于面部摄像头的AI面色扫描',
    ja: '顔撮影AIによる血色・疲労度スキャン'
  },

  // 테스트 페이지 관련
  step1Title: {
    ko: '01 MY BODY: 체질 진단 (Base 50%)',
    en: '01 MY BODY: Body Archetype (Base 50%)',
    zh: '01 MY BODY: 体质诊断 (Base 50%)',
    ja: '01 MY BODY: 体質診断 (Base 50%)'
  },
  step2Title: {
    ko: '02 MY TASTE: 차 취향 분석 (Taste 30%)',
    en: '02 MY TASTE: Tea Preferences (Taste 30%)',
    zh: '02 MY TASTE: 茶饮偏好 (Taste 30%)',
    ja: '02 MY TASTE: お茶の好み (Taste 30%)'
  },
  step3Title: {
    ko: '03 TODAY: 얼굴 안색 분석 (Wellness 20%)',
    en: '03 TODAY: Face Wellness Scan (Wellness 20%)',
    zh: '03 TODAY: 面部AI面色扫描 (Wellness 20%)',
    ja: '03 TODAY: 顔血色スキャン (Wellness 20%)'
  },
  demoFill: {
    ko: '예시 데이터 채우기',
    en: 'Auto-fill Demo Data',
    zh: '填充示例数据',
    ja: 'デモ例を自動入力'
  },
  prevQuestion: {
    ko: '이전 질문',
    en: 'Previous',
    zh: '上一题',
    ja: '前の質問'
  },
  nextQuestion: {
    ko: '다음 질문',
    en: 'Next',
    zh: '下一题',
    ja: '次の質問'
  },
  goToStep3: {
    ko: '얼굴 안색 분석 (3단계) 이동',
    en: 'Proceed to Face Scan (Step 3)',
    zh: '前往面部扫描 (第3步)',
    ja: '顔血色スキャン(ステップ3)へ'
  },

  // 얼굴 분석 컴포넌트
  cameraTitle: {
    ko: '얼굴 촬영 기반 컨디션 안색 분석',
    en: 'Facial Scan & Wellness Analysis',
    zh: '基于面部拍摄的状态分析',
    ja: '顔撮影による血色・状態分析'
  },
  cameraDesc: {
    ko: '카메라를 정면으로 응시해주세요. 표정, 안색, 눈가 긴장도를 스캔하여 오늘 가장 필요한 치유 포인트(20%)를 도출합니다.',
    en: 'Look straight at the camera. We scan facial tone and fatigue levels to find your 20% wellness pairing.',
    zh: '请面向摄像头。通过扫描面色、神态与眼部疲劳度，得出您今日最需要的20%调理点。',
    ja: 'カメラを正面から見つめてください。顔色や目元の疲労感をスキャンし、今最も必要な20%のウェルネスポイントを導き出します。'
  },
  turnOnCam: {
    ko: '웹캠 켜기',
    en: 'Turn on Camera',
    zh: '打开摄像头',
    ja: 'カメラを起動'
  },
  uploadPhoto: {
    ko: '사진 업로드',
    en: 'Upload Photo',
    zh: '上传照片',
    ja: '写真をアップロード'
  },
  takePhoto: {
    ko: '컨디션 분석 촬영',
    en: 'Capture & Analyze',
    zh: '拍照分析',
    ja: '撮影して分析'
  },
  retake: {
    ko: '다시 촬영하기',
    en: 'Retake',
    zh: '重新拍摄',
    ja: 'もう一度撮影'
  },

  // 동점 보완 질문 모달
  tieModalTitle: {
    ko: '동점 발생 · 정밀 보완 문항',
    en: 'Tie-Breaker: Precision Diagnosis',
    zh: '出现同分 · 精准补充分类',
    ja: '同点発生・精密補完診断'
  },
  tieModalDesc: {
    ko: '신체 성향 점수가 팽팽하게 나타났습니다. 몸에 더 편안한 본연의 상태를 선택해주세요.',
    en: 'Your archetype scores tied. Please choose which state better suits your daily comfort.',
    zh: '您的体质得分相同。请选择您身体感觉最舒适自然的状态。',
    ja: '体質の傾向が同点で並びました。より身体に自然で心地よい方をお選びください。'
  },

  // 결과 페이지
  resultReportBadge: {
    ko: '몸BTI 웰니스 티 솔루션 진단 결과 리포트',
    en: 'MomBTI Wellness Tea Diagnosis Report',
    zh: '体质BTI健康茶配方诊断报告',
    ja: '体質BTIウェルネス茶診断結果レポート'
  },
  resultTitleSuffix: {
    ko: '님을 위한 세상에 단 하나뿐인 시그니처 티',
    en: "'s One-and-Only Bespoke Signature Tea",
    zh: '专属独一无二的花茶配方',
    ja: '様専用の世界に一つだけのシグネチャー花茶'
  },
  buyOnStore: {
    ko: '네이버 스마트스토어에서 바로 구매',
    en: 'Buy Now on Online Store',
    zh: '立即在线购买',
    ja: 'オンラインストアで購入'
  },
  bookClass: {
    ko: '원데이 클래스 사전 예약하기',
    en: 'Book One-Day Blending Class',
    zh: '预约一日调茶体验课',
    ja: 'ワンデイクラスを予約する'
  },
  shareResult: {
    ko: '결과 공유하기',
    en: 'Share Result',
    zh: '分享结果',
    ja: '結果をシェア'
  },
  printRecipe: {
    ko: '레시피 카드 인쇄',
    en: 'Print Recipe Card',
    zh: '打印配方卡',
    ja: 'レシピカードを印刷'
  },
  retakeTest: {
    ko: '몸BTI 다시 진단하기',
    en: 'Retake MomBTI Test',
    zh: '重新测试体质BTI',
    ja: 'もう一度診断する'
  },

  // 회원가입 페이지
  authTitle: {
    ko: '나만의 꽃차 여정을 시작하세요',
    en: 'Begin Your Bespoke Tea Journey',
    zh: '开启您的专属茶饮之旅',
    ja: 'あなただけの花茶の旅を始めましょう'
  },
  authSubtitle: {
    ko: '국가 선택 필수 · 진단 결과 영구 보관 및 글로벌 구독 혜택',
    en: 'Country selection required · Save diagnosis & enjoy subscription benefits',
    zh: '必选国家 · 永久保存测试结果并享受订阅礼遇',
    ja: '国選択必須 · 診断結果の保存と定期購入特典'
  },
  nameLabel: {
    ko: '이름 / 닉네임 *',
    en: 'Name / Nickname *',
    zh: '姓名 / 昵称 *',
    ja: 'お名前 / ニックネーム *'
  },
  emailLabel: {
    ko: '이메일 주소 *',
    en: 'Email Address *',
    zh: '电子邮箱 *',
    ja: 'メールアドレス *'
  },
  countryLabel: {
    ko: '거주 국가 선택 (Country) * [필수]',
    en: 'Country / Region * [Required]',
    zh: '居住国家/地区 * [必填]',
    ja: '居住国を選択 (Country) * [必須]'
  },
  ageLabel: {
    ko: '연령대 *',
    en: 'Age Group *',
    zh: '年龄段 *',
    ja: '年齢層 *'
  },
  genderLabel: {
    ko: '성별 *',
    en: 'Gender *',
    zh: '性别 *',
    ja: '性別 *'
  },
  healthLabel: {
    ko: '현재 가장 신경 쓰이는 건강 고민 (다중 선택)',
    en: 'Current Wellness Concerns (Multiple Selection)',
    zh: '目前最关心的健康问题 (可多选)',
    ja: '現在気になっている健康のお悩み (複数選択可)'
  },
  authSubmit: {
    ko: '회원가입 완료하고 몸BTI 진단 시작하기',
    en: 'Complete Sign Up & Start MomBTI',
    zh: '完成注册并开始体质诊断',
    ja: '登録を完了して体質診断を始める'
  },

  // 면책 안내
  disclaimer: {
    ko: '안내 사항: 본 몸BTI 진단 및 맞춤 차 추천 프로그램은 사상체질의 전통적 관점에 영감을 받은 웰니스 티 체험용이며, 의학적 진단을 목적으로 하지 않습니다.',
    en: 'Disclaimer: This MomBTI wellness tea program is inspired by traditional Sasang medicine for tea appreciation and lifestyle wellness; it is not intended for medical diagnosis or treatment.',
    zh: '注意事项：本“体质BTI”花茶定制推荐系统灵感源自传统四象体质学说，旨在提供日常养生茶饮体验，不作为医疗诊断或治疗依据。',
    ja: 'ご案内：本「体質BTI」お茶提案プログラムは、四象体質の伝統的な観点に着想を得たウェルネスティー体験用であり、医療診断や治療を目的とするものではありません。'
  }
};
