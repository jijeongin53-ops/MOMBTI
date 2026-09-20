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
 */
export function createSignatureBlend(
  bodyType: MomBtiType,
  taste: TasteSelection,
  condition: ConditionResult,
  userName: string = '회원'
): SignatureTeaBlend {
  const bodyInfo = MOM_BTI_TYPES[bodyType];

  // 1. Base (50%) - 체질에 따른 기본 중심 재료
  let baseTea = '캐모마일꽃차';
  switch (bodyType) {
    case 'SUN':
      baseTea = '맨드라미꽃차 & 목련꽃차';
      break;
    case 'FOREST':
      baseTea = '유기농 연잎차 & 국화꽃차';
      break;
    case 'WIND':
      baseTea = '캐모마일꽃차 & 구기자열매차';
      break;
    case 'WARM':
      baseTea = '붉은 장미꽃차 & 레몬그라스';
      break;
  }

  // 2. Taste (30%) - 취향 향/맛에 따른 덖음 보조 재료
  let tasteTea = '팬지꽃차 & 금어초';
  if (taste.scent === 'FLORAL') {
    tasteTea = '만개한 팬지꽃차 & 금어초 플로럴 블렌드';
  } else if (taste.scent === 'HERBAL') {
    tasteTea = '청량한 제주 청귤잎 & 페퍼민트 허브 블렌드';
  } else if (taste.scent === 'CITRUS') {
    tasteTea = '햇살 머금은 청귤 & 진피 시트러스 블렌드';
  } else {
    tasteTea = '덖은 우엉 & 둥굴레 구수한 우디 블렌드';
  }

  // 3. Condition (20%) - 얼굴 분석 및 오늘의 컨디션 웰니스 포인트 재료
  let conditionTea = '싱그러운 페퍼민트 & 청귤 포인트';
  let keywordName = 'REFRESH';
  if (condition.keyword === 'CALM') {
    conditionTea = '마음을 비워주는 백목련 & 라벤더 포인트';
    keywordName = 'CALM';
  } else if (condition.keyword === 'WARM') {
    conditionTea = '훈훈한 생강나무꽃 & 계피 포인트';
    keywordName = 'WARM';
  } else if (condition.keyword === 'BALANCE') {
    conditionTea = '생기를 정돈하는 비트 & 도라지 포인트';
    keywordName = 'BALANCE';
  } else {
    conditionTea = '맑고 청량한 페퍼민트 & 청귤 포인트';
    keywordName = 'REFRESH';
  }

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

  const finalDescription = `${userName} 님의 ${bodyInfo.title} 체질 기운(50%)을 든든하게 받치고, 선호하시는 ${taste.scent === 'FLORAL' ? '꽃향' : '싱그러운 아로마'}(30%)와 오늘 얼굴 분석으로 도출된 ${keywordName} 에너지(20%)를 조화롭게 완성한 세상에 단 하나뿐인 블렌딩입니다.`;

  return {
    userName,
    createdAt: new Date().toISOString(),
    baseType: bodyType,
    baseTea,
    baseRatio: 50,
    tasteScent: taste.scent,
    tasteFlavor: taste.flavor,
    tasteTea,
    tasteRatio: 30,
    conditionKeyword: keywordName,
    conditionTea,
    conditionRatio: 20,
    finalTeaName,
    finalColor,
    finalDescription
  };
}
