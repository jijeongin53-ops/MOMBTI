// 플루니티(Flunitea) 몸BTI 핵심 타입 정의

// 4가지 사상체질 기반 몸BTI 유형
export type MomBtiType = 'SUN' | 'FOREST' | 'WIND' | 'WARM';

export interface MomBtiInfo {
  type: MomBtiType;
  name: string;          // 예: 바람형
  title: string;         // 예: WIND (소양인)
  tagline: string;       // 예: 빠르게 움직이는 나에게 여유를
  keywords: string[];    // ['SOFT', 'RELAX', 'BALANCE']
  description: string;   // 성향 상세 설명
  color: string;         // 대표 컬러 헥스코드
  secondaryColor: string;
  teaColor: string;      // 수색 (차를 우렸을 때의 색상)
  recommendedTeas: RecommendedTea[];
}

export interface RecommendedTea {
  id: string;
  name: string;          // 예: 캐모마일꽃차
  botanicalName?: string;
  benefits: string[];    // 효능 (예: 심신 안정, 숙면 유도, 소화 촉진)
  flavorNotes: string[]; // 향과 맛 (예: 달콤한 사과향, 부드러운 목넘김)
  steepColor: string;    // 수색 헥스코드/그라데이션
  steepTemp: string;     // 우리는 온도 (예: 90℃)
  steepTime: string;     // 우리는 시간 (예: 3분)
  description: string;
  imageUrl?: string;
}

// 1~8번 설문 문항 및 동점 보완 문항 타입
export interface QuestionOption {
  type: MomBtiType;
  label: string;
  text: string;
}

export interface Question {
  id: number;
  category: 'BODY' | 'LIFESTYLE' | 'TASTE' | 'CONDITION' | 'TIEBREAKER';
  title: string;
  subtitle?: string;
  options: QuestionOption[];
}

// 취향 및 컨디션 선택지
export interface TasteSelection {
  scent: string;      // 가장 끌리는 향 (꽃향, 과일향, 허브향, 풀향 등)
  flavor: string;     // 좋아하는 차의 맛 (깔끔하고 청량한 맛, 구수한 맛, 달콤한 맛 등)
  priority: string;   // 차에서 가장 중요한 것 (향, 수색, 맛, 힐링/효능 등)
}

export interface ConditionResult {
  keyword: 'REFRESH' | 'CALM' | 'WARM' | 'BALANCE';
  title: string;
  description: string;
  ratio: number; // 20%
  score: {
    energy: number;
    stress: number;
    vitality: number;
  };
}

// 시그니처 티 블렌딩 결과 (Base 50% + Taste 30% + Condition 20%)
export interface SignatureTeaBlend {
  userId?: string;
  userName?: string;
  createdAt: string;
  // 1. Base (50%)
  baseType: MomBtiType;
  baseTea: string;
  baseRatio: number; // 50%
  // 2. Taste (30%)
  tasteScent: string;
  tasteFlavor: string;
  tasteTea: string;
  tasteRatio: number; // 30%
  // 3. Condition (20%)
  conditionKeyword: string;
  conditionTea: string;
  conditionRatio: number; // 20%
  // 종합 브루잉 가이드 및 수색
  finalTeaName: string;
  finalColor: string;
  finalDescription: string;
}

// 회원 프로필 타입 (국가 선택 필수)
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  country: string;       // 국가 필수
  ageGroup: string;      // 20대, 30대 등
  gender: string;        // 여성, 남성 등
  healthConcerns: string[]; // 면역력 저하, 수면의 질 등
  createdAt: string;
}

// 원데이 클래스 예약 데이터
export interface ClassReservation {
  id?: string;
  userName: string;
  phone: string;
  email: string;
  partySize: number;
  preferredDate: string;
  preferredTime: string;
  momBtiType?: string;
  specialRequests?: string;
  createdAt?: string;
}
