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
  navLogout: {
    ko: '로그아웃',
    en: 'Log Out',
    zh: '退出登录',
    ja: 'ログアウト'
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
  step2Subtitle: {
    ko: '나의 오감을 사로잡는 차의 매력',
    en: 'Sensory Appeal of Your Personalized Tea',
    zh: '捕捉五感之美的专属茶韵',
    ja: '五感を魅了するお茶の魅力'
  },
  step2Guide: {
    ko: '확정된 체질 베이스(50%)에 조화롭게 녹아들 나만의 아로마와 맛을 선택해주세요.',
    en: 'Select the aroma and flavor profile that harmonize with your 50% constitution base.',
    zh: '请选择与您50%体质基底完美交融的专属香气与口感。',
    ja: '50%の体質ベースと調和する、お好みの香りと味わいをお選びください。'
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
  tieModalNote: {
    ko: '* 보완 질문 응답 시 나의 50% 베이스 체질 유형이 최종 확정됩니다.',
    en: '* Answering this tie-breaker will finalize your 50% Base Archetype.',
    zh: '* 回答此补充题后将最终确立您的50%体质核心基底。',
    ja: '* この補完質問にお答えいただくと、50%のベース体質が確定します。'
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
  resultMasterNote: {
    ko: '티 마스터 수기 메모',
    en: 'Tea Master Hand-written Note',
    zh: '茶艺师手札批注',
    ja: 'ティーマスター直筆メモ'
  },
  resultSuitsMe: {
    ko: '이 나한테 맞다',
    en: 'suits me best',
    zh: '最适合我',
    ja: 'が私に合っている'
  },
  resultLineupTitle: {
    ko: '체질을 위한 플루니티 추천 꽃차 라인업',
    en: 'Flunitea Recommended Teas for Your Archetype',
    zh: '体质专属 Flunitea 精选花茶系列',
    ja: '体質のためのFluniteaおすすめ花茶ラインナップ'
  },
  resultBuyTitle: {
    ko: '나만의 시그니처 티 구매 & 정기구독',
    en: 'Signature Tea Purchase & Monthly Subscription',
    zh: '定制专属签名茶与定期订购',
    ja: '自分だけのシグニチャー茶購入＆定期便'
  },
  resultBuyDesc: {
    ko: '오늘 진단된 맞춤 비율(50:30:20)로 정성껏 블렌딩된 차를 바로 구매하거나, 매달 신선하게 집으로 배송받는 정기구독을 시작해보세요.',
    en: 'Purchase your freshly handcrafted tea based on your golden ratio (50:30:20), or subscribe to receive monthly deliveries.',
    zh: '直接购买按今日50:30:20黄金比例精心调配的花茶，或开启每月直达您家的定期订阅服务。',
    ja: '本日診断された黄金比率(50:30:20)でブレンドされたお茶を購入、または毎月ご自宅に届く定期便をお楽しみください。'
  },
  resultAtelierTitle: {
    ko: '플루니티 부산 아틀리에 원데이 클래스',
    en: 'Flunitea Busan Atelier Workshop',
    zh: 'Flunitea 釜山工坊一日体验课',
    ja: 'Flunitea 釜山アトリエ ワンデイクラス'
  },
  resultAtelierDesc: {
    ko: '부산 영도 아틀리에에서 전문 티 소믈리에와 함께 나만의 맞춤 꽃차를 직접 블렌딩해보는 프라이빗 70분 클래스입니다.',
    en: 'A private 70-minute hands-on tea blending experience with our master sommelier at Busan Yeongdo Atelier.',
    zh: '在釜山影岛工坊与专业茶艺师一同体验70分钟私享手工拼配茶课程。',
    ja: '釜山影島アトリエにて、ティーソムリエと一緒に自分だけの花茶を調合する70分間のプライベート体験。'
  },
  visualizerGoldenRatio: {
    ko: '체질 균형(50%) + 개인 취향(30%) + 오늘의 안색 웰니스(20%)의 황금 비율',
    en: 'Golden ratio: Body Archetype (50%) + Flavor Preference (30%) + Today Wellness (20%)',
    zh: '体质平衡(50%) + 个人偏好(30%) + 今日面色调养(20%)的黄金法则',
    ja: '体質バランス(50%) + 個人の好み(30%) + 今日の血色ウェルネス(20%)の黄金比率'
  },
  visualizerMasterBlend: {
    ko: '플루니티 마스터 블렌드',
    en: 'Flunitea Master Blend',
    zh: 'Flunitea 特调签名配方',
    ja: 'Flunitea マスターブレンド'
  },
  visualizerColorGradation: {
    ko: '천연 꽃차의 투명하고 우아한 수색(Color) 그라데이션',
    en: 'Luminous and elegant tea color gradation handcrafted from natural flowers',
    zh: '天然花茶所晕染出的通透雅致茶汤水色渐变',
    ja: '天然の花茶が織りなす透明で優雅な水色のグラデーション'
  },
  visualizerBaseLabel: {
    ko: '체질 중심 바탕',
    en: 'Constitution Base',
    zh: '体质核心基底',
    ja: '体質の中心ベース'
  },
  visualizerTasteLabel: {
    ko: '아로마 & 플레이버',
    en: 'Aroma & Flavor',
    zh: '芳香与口感',
    ja: 'アロマ＆フレーバー'
  },
  visualizerConditionLabel: {
    ko: '스마트 안색 케어',
    en: 'Smart Facial Care',
    zh: '智能面色调理',
    ja: 'スマート血色ケア'
  },
  visualizerBrewTemp: {
    ko: '최적 추출 온도',
    en: 'Brewing Temp',
    zh: '最佳水温',
    ja: '最適抽出温度'
  },
  visualizerBrewTime: {
    ko: '우리는 시간',
    en: 'Steeping Time',
    zh: '冲泡时间',
    ja: '抽出時間'
  },
  visualizerBrewAmount: {
    ko: '권장 음용량',
    en: 'Water Amount',
    zh: '建议水量',
    ja: 'おすすめの湯量'
  },
  visualizerBrewTiming: {
    ko: '추천 음용 시간',
    en: 'Best Timing',
    zh: '推荐品饮时间',
    ja: 'おすすめの時間帯'
  },
  visualizerTimingVal: {
    ko: '오후 3시 또는 취침 1시간 전',
    en: '3:00 PM or 1 hr before bedtime',
    zh: '下午3点或睡前1小时',
    ja: '午後3時、または就寝1時間前'
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
  },

  // 메인 페이지 - 핵심 기능 3-Card
  coreFeaturesBadge: {
    ko: 'CORE FEATURES',
    en: 'CORE FEATURES',
    zh: '核心功能',
    ja: '主な機能'
  },
  coreFeaturesTitle: {
    ko: '플루니티 몸BTI의 핵심 솔루션',
    en: 'Flunitea MomBTI Core Solutions',
    zh: 'Flunitea 体质BTI 核心解决方案',
    ja: 'Flunitea 体質BTIのコアソリューション'
  },
  coreFeaturesSubtitle: {
    ko: '체질 진단부터 맞춤 블렌딩, 구매·정기구독과 오프라인 체험까지 한 번에',
    en: 'From body typing and bespoke blending to online subscription and studio workshops',
    zh: '从体质诊断、个性调配到在线订阅与线下工坊体验，一站式达成',
    ja: '体質診断からカスタム調合、定期購入、オフライン体験までワンストップで'
  },
  feat1Title: {
    ko: '1. 몸BTI 체질 진단 & 동점 보완',
    en: '1. MomBTI Diagnosis & Tie-Breaker',
    zh: '1. 体质BTI诊断与同分判定',
    ja: '1. 体質BTI診断＆同点補完'
  },
  feat1Desc: {
    ko: '신체 상태와 일상 습관을 점검하는 1~8번 문항으로 4대 체질을 분석합니다. 점수가 팽팽하게 맞서는 동점(A/C/D 동점 등) 발생 시, 식습관과 체온을 묻는 보완 질문을 즉시 제시하여 확실한 유형을 도출합니다.',
    en: 'Analyze 4 body archetypes via Questions 1-8. If scores tie (e.g. A vs C vs D), a decisive follow-up question on diet and temperature ensures an accurate archetype determination.',
    zh: '通过第1~8题分析四大体质。当出现同分（如A与C同分）时，即刻呈现针对饮食与体温的补充问答，精准确定最终体质。',
    ja: '身体状態や日常の習慣をみる1~8問で4大体質を分析。同点（AやCの同点など）の際は、食習慣や体温を問う補完設問で明確なタイプを導き出します。'
  },
  feat1Check1: {
    ko: '8문항 정밀 체질 집계',
    en: '8-Question Precision Body Typing',
    zh: '8道题精准体质测评',
    ja: '8問の精密体質スコアリング'
  },
  feat1Check2: {
    ko: '동점 시 1:1 결정적 보완 문항',
    en: '1:1 Decisive Tie-Breaker Logic',
    zh: '同分时1对1关键补充问答',
    ja: '同点時の1:1決定的補完設問'
  },
  feat2Title: {
    ko: '2. 맞춤 꽃차 추천 & 상세 도감',
    en: '2. Bespoke Tea Pairing & Flora Archive',
    zh: '2. 专属花茶推荐与详尽图鉴',
    ja: '2. オーダーメイド花茶推薦＆詳細図鑑'
  },
  feat2Desc: {
    ko: '진단된 몸BTI 유형에 맞춘 최적의 꽃차를 상세히 안내합니다. 내 몸에 어디가 좋은지(건강 효능), 우리는 차의 색깔(수색), 은은한 향과 맛의 노트를 인터랙티브 카드로 탐색할 수 있습니다.',
    en: 'Explore tailored floral teas paired with your diagnosed body archetype. Discover health benefits, steep liquor hue, and aroma/flavor notes through interactive tea cards.',
    zh: '深度解析符合您体质的最佳花茶。通过互动卡片，探索健康益处、茶汤水色以及细腻的香气与口感层次。',
    ja: '診断された体質に最適な花茶をご案内。健康効能、抽出した茶の水色、上品な香りと味わいをインタラクティブカードでご覧いただけます。'
  },
  feat2Check1: {
    ko: '영롱한 수색(Color) 그라데이션',
    en: 'Vibrant Steep Hue Visuals',
    zh: '澄澈水色渐变呈现',
    ja: '透き通る美しい水色グラデーション'
  },
  feat2Check2: {
    ko: '효능, 향미 및 우리는 법 안내',
    en: 'Wellness Benefits & Brewing Guide',
    zh: '功效、风味及冲泡指南',
    ja: '効能・風味・淹れ方ガイド'
  },
  feat3Title: {
    ko: '3. 온라인 구매·구독 & 클래스 예약',
    en: '3. Online Purchase, Subscription & Studio Booking',
    zh: '3. 在线购买、订阅与工坊预约',
    ja: '3. オンライン購入・定期購読＆クラス予約'
  },
  feat3Desc: {
    ko: '추천받은 맞춤 차를 네이버 스마트스토어에서 바로 구매하거나 집으로 매달 배송받는 정기구독 서비스로 연계됩니다. 플루니티 아틀리에 원데이 클래스 사전 예약도 간편하게 신청할 수 있습니다.',
    en: 'Purchase your recommended blend directly on our online store or set up monthly home delivery. Easily reserve a private one-day blending workshop at the Flunitea Busan Atelier.',
    zh: '可在官方商城直接购买定制茶品，或申请月度配送订阅。还可便捷预约在釜山Flunitea工坊开展的一日调茶体验课。',
    ja: 'おすすめのお茶をオンラインストアですぐに購入したり、毎月届く定期購入サービスをご利用いただけます。釜山アトリエでのワンデイクラスも簡単予約。'
  },
  feat3Check1: {
    ko: '스마트스토어 & 정기배송 연계',
    en: 'Online Store & Monthly Delivery',
    zh: '商城直购与定期订购配送',
    ja: 'ストア直結＆定期配送サービス'
  },
  feat3Check2: {
    ko: '구글 시트 연동 원데이 예약',
    en: 'Google Sheets Synced Workshop Booking',
    zh: '云端同步的一日体验课预约',
    ja: 'クラウド自動連携ワンデイ予約'
  },

  // 메인 페이지 - 4대 체질 섹션
  archetypesBadge: {
    ko: 'MOM-BTI 4 ARCHETYPES',
    en: 'MOM-BTI 4 ARCHETYPES',
    zh: '四大体质原型',
    ja: '四大体質アーキタイプ'
  },
  archetypesTitle: {
    ko: '사상체질로 만나는 4가지 웰니스 유형',
    en: '4 Wellness Archetypes via Sasang Constitution',
    zh: '通过四象体质相遇的四大养生类型',
    ja: '四象体質から紐解く4つのウェルネスタイプ'
  },
  archetypesSubtitle: {
    ko: '당신의 일상과 체질에는 어떤 꽃차의 기운이 가장 필요할까요?',
    en: 'Which floral energy does your daily lifestyle and body truly need?',
    zh: '您的日常生活与体质，最需要哪种花茶的滋养能量？',
    ja: 'あなたの毎日と体質には、どんな花茶のエネルギーが必要でしょうか？'
  },
  mainTeasLabel: {
    ko: '대표 꽃차',
    en: 'Key Floral Teas',
    zh: '代表花茶',
    ja: '代表花茶'
  },

  // 메인 페이지 - 하단 CTA 배너
  ctaBannerBadge: {
    ko: '3분 만에 찾는 나만의 인생 꽃차',
    en: 'Discover Your Life Tea in 3 Minutes',
    zh: '3分钟遇见您的本命花茶',
    ja: '3分で見つかる私の人生茶'
  },
  ctaBannerTitle: {
    ko: '지금, 나에게 맞는 꽃차를 만나보세요',
    en: 'Meet the Bespoke Tea Tailored Just for You',
    zh: '立即探索专属于您的契合花茶',
    ja: '今、あなたにぴったりの花茶と出会う'
  },
  ctaBannerSubtitle: {
    ko: '회원가입 후 설문과 얼굴 촬영을 마치면, 플루니티 전문 티 마스터의 50:30:20 개인 맞춤 블렌딩 레시피가 즉시 생성됩니다.',
    en: 'Complete the survey and facial scan to instantly receive your 50:30:20 signature recipe crafted by Flunitea tea masters.',
    zh: '注册并完成问卷与面部扫描，Flunitea茶艺大师的50:30:20个人专属拼配配方即刻为您呈现。',
    ja: '会員登録後に問診と顔撮影を行うと、Fluniteaティーマスター監修の50:30:20特製ブレンドレシピがすぐに完成します。'
  },
  ctaStartTest: {
    ko: '몸BTI 진단 시작하기',
    en: 'Start MomBTI Diagnosis',
    zh: '开始体质BTI诊断',
    ja: '体質BTI診断を始める'
  },
  ctaRegister: {
    ko: '회원가입 (국가 선택)',
    en: 'Sign Up (Choose Country)',
    zh: '注册会员 (选择国家)',
    ja: '会員登録 (国を選択)'
  },

  // 체질 도감 페이지 (/types)
  typesBadge: {
    ko: '사상체질 4대 유형 & 추천 꽃차 도감',
    en: '4 Body Archetypes & Recommended Tea Encyclopedia',
    zh: '四大四象体质与推荐花茶图鉴',
    ja: '四象体質4大タイプ＆おすすめ花茶図鑑'
  },
  typesTitle: {
    ko: '나를 닮은 자연의 한 잔, 4대 몸BTI',
    en: 'A Nature Sip Reflecting You: 4 MomBTI Archetypes',
    zh: '如您本真的自然茶饮：四大体质BTI',
    ja: '私に似た自然の一杯、4大体質BTI'
  },
  typesSubtitle: {
    ko: '자연의 네 가지 계절과 기운에 빗대어 풀어낸 사상체질의 현대적 재해석. 각 체질이 가진 고유한 매력과 에너지를 조화롭게 북돋워 주는 꽃차들을 만나보세요.',
    en: 'Modern reinterpretation of Sasang medicine through the four seasons and natural energies. Meet the floral teas that balance and nourish your intrinsic traits.',
    zh: '以四季与自然气息重新诠释四象传统。探访温和滋养各体质独特魅力的专属花茶。',
    ja: '四季と大自然の気に例えて紐解く、四象体質の現代的再解釈。各体質本来の魅力を健やかに育む花茶をご紹介します。'
  },
  recommendedTeasTitle: {
    ko: '추천 시그니처 꽃차 라인업',
    en: 'Recommended Signature Floral Teas',
    zh: '推荐专属花茶系列',
    ja: 'おすすめシグネチャー花茶ラインナップ'
  },
  steepTempLabel: {
    ko: '우리는 온도',
    en: 'Water Temp',
    zh: '冲泡水温',
    ja: '適温'
  },
  steepTimeLabel: {
    ko: '우리는 시간',
    en: 'Steeping Time',
    zh: '冲泡时间',
    ja: '抽出時間'
  },
  benefitsLabel: {
    ko: '건강 웰니스 효능',
    en: 'Wellness Benefits',
    zh: '养生功效',
    ja: 'ウェルネス効能'
  },
  flavorLabel: {
    ko: '향과 맛 노트',
    en: 'Aroma & Flavor Notes',
    zh: '风味香气特点',
    ja: '香りと味わい'
  },
  brewingGuide: {
    ko: '브루잉 가이드',
    en: 'Brewing Guide',
    zh: '冲泡指南',
    ja: '淹れ方ガイド'
  },

  // 예약 페이지 (/reservation)
  resBadge: {
    ko: '플루니티 오프라인 아틀리에 체험 예약',
    en: 'Flunitea Studio Workshop Reservation',
    zh: 'Flunitea 釜山线下工坊预约',
    ja: 'Flunitea アトリエ体験予約'
  },
  resTitle: {
    ko: '나만의 시그니처 꽃차 원데이 블렌딩 클래스',
    en: 'Bespoke Signature Tea One-Day Blending Class',
    zh: '专属独创花茶一日拼配体验课',
    ja: '私だけのシグネチャー花茶ワンデーブレンドクラス'
  },
  resSubtitle: {
    ko: '향기로운 꽃잎을 직접 덖고 조향하는 프라이빗 웰니스 티 타임. 사상체질 티 마스터와 함께 세상에 하나뿐인 나만의 블렌딩 티를 완성해 보세요.',
    en: 'A private wellness tea session crafting and roasting fragrant petals with our Sasang tea masters.',
    zh: '与专业茶艺师一同炒制芳香花瓣、品鉴调香，完成专属您的世上唯一定制茶。',
    ja: '芳しい花びらを自ら炒り、香りを調合するプライベートな時間。ティーマスターと世界に一つのブレンドを完成させましょう。'
  },
  resCurriculumTitle: {
    ko: '클래스 커리큘럼 (총 70분)',
    en: 'Class Curriculum (Total 70 Mins)',
    zh: '课程内容 (共70分钟)',
    ja: 'クラスカリキュラム (計70分)'
  },
  resStep1Title: {
    ko: '웰컴 티 & 몸BTI 정밀 상담 (15분)',
    en: 'Welcome Tea & In-depth MomBTI Consultation (15m)',
    zh: '迎宾茶与体质精细咨询 (15分钟)',
    ja: 'ウェルカムティー＆体質精密カウンセリング (15分)'
  },
  resStep1Desc: {
    ko: '체질별 체감 온도와 소화 기운을 점검하고 웰컴 티를 음용합니다.',
    en: 'Examine body temperature and digestive energy over a warm welcome cup.',
    zh: '品尝迎宾茶的同时，诊断分析个人体温感与脾胃能量。',
    ja: '体感温度や消化器の調子をチェックしながらウェルカムティーを味わいます。'
  },
  resStep2Title: {
    ko: '계절 꽃차 시음 & 플레이버 테이스팅 (25분)',
    en: 'Seasonal Flora Cupping & Flavor Tasting (25m)',
    zh: '当季花茶品鉴与风味评测 (25分钟)',
    ja: '季節の花茶の試飲＆フレーバーテイスティング (25分)'
  },
  resStep2Desc: {
    ko: '4대 체질에 맞는 12가지 꽃차를 시음하며 나만의 취향 노트를 기록합니다.',
    en: 'Taste 12 floral varieties matched to archetypes and record your aroma notes.',
    zh: '品尝四大体质适宜的12款花茶，记录属于您的香气品鉴笔记。',
    ja: '4大体質に合わせた12種類の花茶をテイスティングし、好みノートを作成。'
  },
  resStep3Title: {
    ko: '50:30:20 시그니처 조향 & 틴케이스 패키징 (30분)',
    en: '50:30:20 Blending & Tin Case Packaging (30m)',
    zh: '50:30:20 配比调配与精美铁盒包装 (30分钟)',
    ja: '50:30:20 調合＆特製缶パッケージング (30分)'
  },
  resStep3Desc: {
    ko: '전문 티 소믈리에의 지도 아래 직접 덖은 찻잎을 조화롭게 블렌딩하여 완성합니다.',
    en: 'Blend roasted blossoms harmoniously under sommelier guidance and take home in a tin.',
    zh: '在侍茶师指导下亲手配制花茶，封入专属金属罐带回家。',
    ja: 'ティーソムリエの案内のもと花びらをバランスよくブレンドし、専用缶に詰めてお持ち帰り。'
  },
  resFormTitle: {
    ko: '원데이 클래스 사전 예약 신청',
    en: 'Workshop Reservation Form',
    zh: '一日体验课预约登记',
    ja: 'ワンデイクラス予約フォーム'
  },
  resNameLabel: {
    ko: '예약자 성함 *',
    en: 'Name *',
    zh: '预约人姓名 *',
    ja: 'お名前 *'
  },
  resPhoneLabel: {
    ko: '연락처 (휴대폰) *',
    en: 'Phone Number *',
    zh: '联系电话 *',
    ja: 'お電話番号 *'
  },
  resEmailLabel: {
    ko: '안내 이메일 주소 *',
    en: 'Email Address *',
    zh: '确认邮箱 *',
    ja: 'ご連絡先メール *'
  },
  resPartySizeLabel: {
    ko: '참가 인원 *',
    en: 'Number of Guests *',
    zh: '参加人数 *',
    ja: '参加人数 *'
  },
  resDateLabel: {
    ko: '희망 일자 *',
    en: 'Preferred Date *',
    zh: '期望日期 *',
    ja: 'ご希望日 *'
  },
  resTimeLabel: {
    ko: '희망 시간대 *',
    en: 'Preferred Time *',
    zh: '期望时段 *',
    ja: 'ご希望時間 *'
  },
  resBtiLabel: {
    ko: '나의 몸BTI 체질 (선택)',
    en: 'Diagnosed MomBTI (Optional)',
    zh: '您的体质BTI (选填)',
    ja: '私の体質BTI (任意)'
  },
  resSpecialLabel: {
    ko: '특별 요청 사항 (알레르기, 기념일 등)',
    en: 'Special Requests (Allergies, Occasions)',
    zh: '特别要求 (过敏原、纪念日等)',
    ja: '特別なご要望 (アレルギー、記念日など)'
  },
  resSubmitBtn: {
    ko: '클래스 예약 신청 완료',
    en: 'Submit Reservation',
    zh: '提交体验课预约',
    ja: '予約を申し込む'
  },
  resSuccessTitle: {
    ko: '클래스 사전 예약이 완료되었습니다!',
    en: 'Your Reservation Has Been Received!',
    zh: '体验课预约已成功提交！',
    ja: 'クラスの事前予約が完了しました！'
  },
  resSuccessDesc: {
    ko: '플루니티 부산 아틀리에 티 마스터(sho0051@naver.com, jguy12@hanmail.net)에게 예약 내역이 안전하게 접수되었습니다. 확인 후 안내 메시지를 발송해 드립니다.',
    en: 'Your reservation has been received by Flunitea atelier masters (sho0051@naver.com, jguy12@hanmail.net). Confirmation details will be sent shortly.',
    zh: '您的预约信息已成功提交至 Flunitea 釜山工坊专属管理团队 (sho0051@naver.com, jguy12@hanmail.net)。我们将尽快向您发送确认信息。',
    ja: '釜山アトリエの担当マスター (sho0051@naver.com, jguy12@hanmail.net) に予約が安全に受付されました。まもなく確認案内をお送りいたします。'
  },
  resSchedule: {
    ko: '월~토 / 10:30, 13:30, 15:30, 17:00 (일요일 휴무)',
    en: 'Mon-Sat / 10:30, 13:30, 15:30, 17:00 (Closed on Sundays)',
    zh: '周一~周六 / 10:30, 13:30, 15:30, 17:00 (周日休息)',
    ja: '月~土 / 10:30, 13:30, 15:30, 17:00 (日曜定休)'
  },
  resMaxGuests: {
    ko: '타임당 최대 4인 프라이빗 진행',
    en: 'Private session: up to 4 guests per time slot',
    zh: '每时段最多4人私享体验',
    ja: '各回最大4名様のプライベートセッション'
  },
  resFormSubtitle: {
    ko: '입력하신 예약 정보는 구글 시트 데이터베이스에 실시간으로 기록됩니다.',
    en: 'Your reservation details are saved directly into our secure database.',
    zh: '您填写的预约信息将实时录入预约系统数据库。',
    ja: 'ご入力いただいた予約情報はデータベースにリアルタイムで安全に記録されます。'
  },
  resNamePlaceholder: {
    ko: '예: 홍길동',
    en: 'e.g. Jane Doe',
    zh: '例：王晓明',
    ja: '例：山田 太郎'
  },
  resSpecialPlaceholder: {
    ko: '특정 꽃 알레르기나 선호하시는 취향을 남겨주시면 수업에 미리 반영해 드립니다.',
    en: 'Let us know any floral allergies or preferences in advance.',
    zh: '如有花粉过敏或特别偏好，请在此备注以便提前准备。',
    ja: 'アレルギーやお好みがございましたら事前にお知らせください。'
  },
  resConfirmBtn: {
    ko: '확인',
    en: 'OK',
    zh: '确定',
    ja: '確認'
  },
  resUnsureBti: {
    ko: '미진단 (현장에서 진단 희망)',
    en: 'Not yet diagnosed (Test on-site)',
    zh: '尚未测试 (现场测定)',
    ja: '未診断 (現地での診断を希望)'
  },

  // 푸터 & SNS
  footerDesc: {
    ko: '플루니티는 사상체질의 전통적 관점에 현대인의 라이프스타일과 감각을 더해, 당신의 신체 밸런스에 꼭 맞는 세상에 단 하나뿐인 꽃차를 제안하는 웰니스 티 솔루션입니다.',
    en: 'Flunitea blends traditional Sasang wisdom with modern lifestyle sensibilities, presenting bespoke floral teas tailored to your bodily balance.',
    zh: 'Flunitea 融汇传统四象智慧与现代生活美学，为您的身体平衡奉上世间唯一的专属花茶方案。',
    ja: 'Fluniteaは四象体質の伝統に現代の感性を重ね、あなたの心身の調和に寄り添う世界でひとつだけの花茶をお届けします。'
  },
  footerExplore: {
    ko: '솔루션 둘러보기',
    en: 'Explore Solutions',
    zh: '浏览方案',
    ja: 'ソリューション'
  },
  footerStudio: {
    ko: '플루니티 스튜디오',
    en: 'Flunitea Atelier',
    zh: 'Flunitea 釜山工坊',
    ja: 'Flunitea アトリエ'
  },
  footerAddress: {
    ko: '부산시 영도구 번영길8, 2층 (플루니티)',
    en: '2F, 8, Beon-yeong-gil, Yeongdo-gu, Busan, South Korea',
    zh: '韩国釜山广域市影岛区繁荣路8号 2楼 (Flunitea)',
    ja: '釜山広域市影島区繁栄路8, 2階 (Flunitea), 韓国'
  },
  footerHours: {
    ko: '운영시간: 월~토 10:00 - 18:00 (일요일 휴무)',
    en: 'Hours: Mon-Sat 10:00 - 18:00 (Closed on Sundays)',
    zh: '营业时间: 周一~周六 10:00 - 18:00 (周日休息)',
    ja: '営業時間: 月~土 10:00 - 18:00 (日曜定休)'
  },
  footerContact: {
    ko: '문의: sho0051@naver.com | 010.4632.0051',
    en: 'Contact: sho0051@naver.com | +82 10-4632-0051',
    zh: '联系方式: sho0051@naver.com | 010.4632.0051',
    ja: 'お問い合わせ: sho0051@naver.com | 010.4632.0051'
  },
  footerBusinessNo: {
    ko: '사업자등록번호: 292-81-02945',
    en: 'Business Reg: 292-81-02945',
    zh: '商业登记号: 292-81-02945',
    ja: '事業者登録番号: 292-81-02945'
  },
  snsConnectTitle: {
    ko: 'FLUNITEA CONNECT',
    en: 'FLUNITEA CONNECT',
    zh: '官方直连',
    ja: '公式リンク'
  },
  snsStoreTitle: {
    ko: '스마트스토어 구매',
    en: 'Naver SmartStore',
    zh: '官方在线商城',
    ja: 'スマートストア購入'
  },
  snsStoreDesc: {
    ko: '정기구독 및 꽃차 구매',
    en: 'Subscriptions & Floral Teas',
    zh: '花茶直购与定期订购',
    ja: '定期便＆花茶のご購入'
  },
  snsInstaTitle: {
    ko: '공식 인스타그램',
    en: 'Official Instagram',
    zh: '官方 Instagram',
    ja: '公式 Instagram'
  },
  snsInstaDesc: {
    ko: '@flunitea',
    en: '@flunitea',
    zh: '@flunitea',
    ja: '@flunitea'
  },
  snsKakaoTitle: {
    ko: '카카오 1:1 상담',
    en: 'Kakao 1:1 Consultation',
    zh: 'KakaoTalk 在线客服',
    ja: 'Kakao 1:1 相談チャット'
  },
  snsKakaoDesc: {
    ko: '클래스 및 단체 문의',
    en: 'Classes & Bulk Inquiries',
    zh: '体验课及团体合作咨询',
    ja: 'クラス・団体のお問い合わせ'
  }
};
