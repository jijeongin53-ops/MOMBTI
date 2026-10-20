// 플루니티(Flunitea) 몸BTI 진단 및 50:30:20 시그니처 블렌딩 추천 알고리즘
import { MomBtiType, SignatureTeaBlend, TasteSelection, ConditionResult } from './types';
import { MOM_BTI_TYPES } from '@/data/teaTypes';

export interface MomBtiScoreResult {
  scores: Record<MomBtiType, number>;
  topType: MomBtiType | null;
  isTie: boolean;
  competingTypes: MomBtiType[];
}

/**
 * 1~8번 문항 답변을 집계하여 유형별 점수 및 동점 여부를 판단합니다.
 * @param answers Map 또는 객체 형태의 답변 (key: questionId, value: MomBtiType)
 */
export function calculateMomBtiScore(answers: Record<number, MomBtiType>): MomBtiScoreResult {
  const scores: Record<MomBtiType, number> = {
    SUN: 0,
    FOREST: 0,
    WIND: 0,
    WARM: 0
  };

  // 1번부터 8번까지의 답변 점수 합산
  for (let i = 1; i <= 8; i++) {
    const selected = answers[i];
    if (selected && scores[selected] !== undefined) {
      scores[selected]++;
    }
  }

  // 최고 점수 계산
  const maxScore = Math.max(...Object.values(scores));
  const competingTypes = (Object.keys(scores) as MomBtiType[]).filter(
    (type) => scores[type] === maxScore && maxScore > 0
  );

  // 동점 여부 판단: 최고 점수를 얻은 유형이 2개 이상인 경우
  const isTie = competingTypes.length > 1;

  return {
    scores,
    topType: isTie ? null : competingTypes[0] || 'WIND',
    isTie,
    competingTypes
  };
}

/**
 * 3가지 요소(체질 50% + 취향 30% + 컨디션 20%)를 융합하여 시그니처 티 블렌딩을 생성합니다.
 * 각 파트별로 2~3개의 맞춤 추천차를 구성합니다.
 */
export function createSignatureBlend(
  bodyType: MomBtiType,
  taste: TasteSelection,
  condition: ConditionResult,
  userName: string = '회원'
): SignatureTeaBlend {
  const bodyInfo = MOM_BTI_TYPES[bodyType];

  // 1. Base (50%) - 체질에 따른 기본 중심 재료 (각 체질별 Base 꽃차 2종 + Blending 차 1종, 총 3개 추천)
  let baseTeas: string[] = ['캐모마일꽃차', '맨드라미꽃차', '레몬그라스차'];
  switch (bodyType) {
    case 'SUN':
      baseTeas = ['맨드라미꽃차 (Base)', '캐모마일꽃차 (Base)', '레몬그라스차 (Blending)'];
      break;
    case 'FOREST':
      baseTeas = ['목련꽃차 (Base)', '국화차 (Base)', '도라지차 (Blending)'];
      break;
    case 'WIND':
      baseTeas = ['메리골드꽃차 (Base)', '금어초꽃차 (Base)', '구기자차 (Blending)'];
      break;
    case 'WARM':
      baseTeas = ['구절초꽃차 (Base)', '목련꽃차 (Base)', '생강차 (Blending)'];
      break;
  }
  const baseTea = baseTeas.join(', ');

  // 2. Taste (30%) - 취향 향/맛에 따른 덖음 보조 재료 (2~3개 추천)
  let tasteTeas: string[] = ['팬지꽃차', '금어초꽃차', '장미꽃차'];
  if (taste.scent === 'FLORAL') {
    tasteTeas =
      taste.flavor === 'SWEET'
        ? ['장미꽃차', '팬지꽃차', '매화차']
        : ['팬지꽃차', '금어초꽃차', '장미꽃차'];
  } else if (taste.scent === 'HERBAL') {
    tasteTeas =
      taste.flavor === 'SPICY'
        ? ['생강나무꽃차', '레몬그라스차', '목련꽃차']
        : ['캐모마일꽃차', '레몬그라스차', '연잎차'];
  } else if (taste.scent === 'CITRUS') {
    tasteTeas = ['청귤차', '진피차', '매화차'];
  } else {
    tasteTeas = ['우엉차', '도라지차', '겨우살이차'];
  }
  const tasteTea = tasteTeas.join(', ');

  // 3. Condition (20%) - 얼굴 분석 및 오늘의 컨디션 웰니스 포인트 재료 (2~3개 추천)
  let conditionTeas: string[] = ['레몬그라스차', '청귤차', '목련꽃차'];
  let keywordName = 'REFRESH';
  if (condition.keyword === 'CALM') {
    conditionTeas = ['캐모마일꽃차', '팬지꽃차', '연잎차'];
    keywordName = 'CALM';
  } else if (condition.keyword === 'WARM') {
    conditionTeas = ['생강차', '쑥차', '구절초꽃차'];
    keywordName = 'WARM';
  } else if (condition.keyword === 'BALANCE') {
    conditionTeas = ['구기자차', '비트차', '도라지차'];
    keywordName = 'BALANCE';
  } else {
    conditionTeas = ['레몬그라스차', '청귤차', '목련꽃차'];
    keywordName = 'REFRESH';
  }
  const conditionTea = conditionTeas.join(', ');

  // 시그니처 티의 상징적 명칭 조합
  const tasteLabel = taste.scent === 'FLORAL' ? '플로럴' : taste.scent === 'CITRUS' ? '시트러스' : taste.scent === 'HERBAL' ? '포레스트' : '클래식';
  const finalTeaName = `플루니티 [${bodyInfo.name}] ${tasteLabel} ${keywordName} 시그니처 티`;

  // 수색 블렌딩 컬러 (체질 대표색과 취향의 조화)
  let finalColor = bodyInfo.teaColor;
  if (bodyType === 'WIND') {
    finalColor = taste.scent === 'FLORAL' ? '#F472B6' : '#60A5FA';
  } else if (bodyType === 'SUN') {
    finalColor = '#EF4444';
  } else if (bodyType === 'FOREST') {
    finalColor = '#A3E635';
  } else if (bodyType === 'WARM') {
    finalColor = '#F59E0B';
  }

  const finalDescription = `${userName} 님의 ${bodyInfo.title} 체질 기운(50%: ${baseTea})을 든든하게 받치고, 선호하시는 ${taste.scent === 'FLORAL' ? '꽃향' : '싱그러운 아로마'} 취향(30%: ${tasteTea})과 오늘 얼굴 분석으로 도출된 ${keywordName} 에너지(20%: ${conditionTea})를 각 파트별 3종씩 조화롭게 완성한 세상에 단 하나뿐인 블렌딩입니다.`;

  return {
    userName,
    createdAt: new Date().toISOString(),
    baseType: bodyType,
    baseTea,
    baseTeas,
    baseRatio: 50,
    tasteScent: taste.scent,
    tasteFlavor: taste.flavor,
    tasteTea,
    tasteTeas,
    tasteRatio: 30,
    conditionKeyword: keywordName,
    conditionTea,
    conditionTeas,
    conditionRatio: 20,
    finalTeaName,
    finalColor,
    finalDescription
  };
}
