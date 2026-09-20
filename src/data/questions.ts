import { Question, MomBtiType } from '@/lib/types';

// 몸BTI 1~8번 체질 진단 문항
export const MOM_BTI_QUESTIONS: Question[] = [
  // 1) 몸으로 알아보는 나
  {
    id: 1,
    category: 'BODY',
    title: '평소 체감 온도는 어떤 편인가요?',
    subtitle: '일상에서 체온에 대한 나의 자연스러운 반응을 골라주세요.',
    options: [
      { type: 'SUN', label: 'A', text: '더위를 많이 타고 상체에 열이 자주 오르는 편이다.' },
      { type: 'FOREST', label: 'B', text: '땀이 잘 나는 편이며, 추위와 더위 모두 무난히 견딘다.' },
      { type: 'WIND', label: 'C', text: '활동하면 금방 더워지는 편이다.' },
      { type: 'WARM', label: 'D', text: '손발이 차고 추위를 많이 타며 찬바람에 민감하다.' }
    ]
  },
  {
    id: 2,
    category: 'BODY',
    title: '평소 나의 에너지 수준은 어떤가요?',
    subtitle: '하루 동안 에너지가 소모되고 채워지는 패턴을 살펴보세요.',
    options: [
      { type: 'SUN', label: 'A', text: '에너지가 넘치고 거침없는 추진력을 발휘한다.' },
      { type: 'FOREST', label: 'B', text: '지구력과 끈기는 좋지만 한번 지치면 몸이 묵직해진다.' },
      { type: 'WIND', label: 'C', text: '순간 집중력과 반응이 빠르지만 에너지를 쉽게 소진한다.' },
      { type: 'WARM', label: 'D', text: '천천히 움직이며 무리하면 쉽게 지친다.' }
    ]
  },
  {
    id: 3,
    category: 'BODY',
    title: '스트레스를 받으면 어떤 반응이 나타나나요?',
    subtitle: '긴장이나 압박을 느낄 때 내 몸과 마음의 신호입니다.',
    options: [
      { type: 'SUN', label: 'A', text: '불같이 감정이 솟구치거나 가슴 윗부분이 답답해진다.' },
      { type: 'FOREST', label: 'B', text: '속으로 삭이며 묵묵해지거나 단것이나 음식이 당긴다.' },
      { type: 'WIND', label: 'C', text: '마음이 급해지고 예민해진다.' },
      { type: 'WARM', label: 'D', text: '걱정이 많아지고 속이 쓰리거나 기운이 가라앉는다.' }
    ]
  },
  {
    id: 4,
    category: 'BODY',
    title: '식사 후 주로 어떤 상태인가요?',
    subtitle: '평소 소화 기능과 위장의 편안함을 점검해봅니다.',
    options: [
      { type: 'SUN', label: 'A', text: '소화는 금방 되는 편이나 가끔 속에서 열감이 느껴진다.' },
      { type: 'FOREST', label: 'B', text: '잘 먹는 편이나 과식하기 쉽고 식후에 나른함이 크게 밀려온다.' },
      { type: 'WIND', label: 'C', text: '식사를 빠르게 마치는 편이고 찬 물이나 음료를 찾는다.' },
      { type: 'WARM', label: 'D', text: '속이 예민하거나 더부룩함을 느끼는 편이다.' }
    ]
  },
  {
    id: 5,
    category: 'BODY',
    title: '가장 편안하게 느껴지는 환경은 무엇인가요?',
    subtitle: '몸의 긴장이 풀리고 나다운 쉼을 찾을 수 있는 공간입니다.',
    options: [
      { type: 'SUN', label: 'A', text: '시원하고 탁 트인 곳' },
      { type: 'FOREST', label: 'B', text: '안정되고 포근하며 느긋하게 머무를 수 있는 곳' },
      { type: 'WIND', label: 'C', text: '경쾌하고 감각적인 자극이 살아있는 산뜻한 공간' },
      { type: 'WARM', label: 'D', text: '온기가 있고 조용하며 나만의 아늑함이 보장되는 곳' }
    ]
  },
  {
    id: 6,
    category: 'BODY',
    title: '피곤할 때 가장 먼저 나타나는 증상은 무엇인가요?',
    subtitle: '지쳤을 때 몸이 보내는 가장 솔직한 SOS 신호입니다.',
    options: [
      { type: 'SUN', label: 'A', text: '머리나 상체가 답답하다.' },
      { type: 'FOREST', label: 'B', text: '몸 전체가 찌뿌둥하게 무겁고 붓기가 느껴진다.' },
      { type: 'WIND', label: 'C', text: '눈이 뻑뻑하고 신경이 곤두서며 안정이 안 된다.' },
      { type: 'WARM', label: 'D', text: '손발이 얼음처럼 차가워지고 속이 메스껍거나 체한다.' }
    ]
  },

  // 2) 생활 속 나의 모습
  {
    id: 7,
    category: 'LIFESTYLE',
    title: '평소 나의 행동 스타일은 어떤가요?',
    subtitle: '일상과 대인관계에서 드러나는 나의 주된 템포입니다.',
    options: [
      { type: 'SUN', label: 'A', text: '적극적으로 의사를 밝히고 주도적으로 리드한다.' },
      { type: 'FOREST', label: 'B', text: '묵직하게 상황을 관망하며 꾸준한 페이스를 지킨다.' },
      { type: 'WIND', label: 'C', text: '새로운 것에 호기심이 많고 재치 있게 순발력을 발휘한다.' },
      { type: 'WARM', label: 'D', text: '신중하게 생각한 후 움직인다.' }
    ]
  },
  {
    id: 8,
    category: 'LIFESTYLE',
    title: '휴식할 때 가장 원하는 것은 무엇인가요?',
    subtitle: '차 한 잔과 함께 온전히 채우고 싶은 회복의 형태입니다.',
    options: [
      { type: 'SUN', label: 'A', text: '과열된 생각과 복잡한 머리를 시원하게 비우는 것' },
      { type: 'FOREST', label: 'B', text: '무거워진 몸을 가볍게 정화하고 산뜻한 생기를 얻는 것' },
      { type: 'WIND', label: 'C', text: '긴장이 풀리고 편안해지는 것' },
      { type: 'WARM', label: 'D', text: '차갑게 식은 몸과 마음에 따스한 온기를 불어넣는 것' }
    ]
  }
];

// 동점 보완 질문 (동점 발생 시 확실한 유형 결정을 위한 맞춤 추가 문항들)
export interface TieBreakerQuestion {
  competingTypes: MomBtiType[];
  question: string;
  subtitle: string;
  options: {
    type: MomBtiType;
    label: string;
    text: string;
    detail: string;
  }[];
}

export const TIE_BREAKER_QUESTIONS: Record<string, TieBreakerQuestion> = {
  // 예: WIND(C) vs WARM(D) 동점인 경우 (참고 예시: A 2개, B 0개, C 3개, D 3개)
  'WIND_WARM': {
    competingTypes: ['WIND', 'WARM'],
    question: '평소 내 몸에 더 편안하게 맞는 음식과 온도는 어느 쪽에 더 가깝나요?',
    subtitle: '바람형(소양인)과 온담형(소음인)의 기운을 가르는 결정적 신체 특성입니다.',
    options: [
      {
        type: 'WIND',
        label: 'C',
        text: '돼지고기나 시원한 해산물이 잘 맞고, 속 열감이 있어 서늘한 바람이나 시원한 차를 마셨을 때 속이 편하다.',
        detail: '신체에 내열이 많고 수분 소모가 빠른 바람형(WIND) 성향'
      },
      {
        type: 'WARM',
        label: 'D',
        text: '닭고기, 생강, 따뜻한 국물이 속을 편하게 해주고, 찬 음식이나 찬 음료를 마시면 배탈이 나기 쉽다.',
        detail: '소화기가 차갑고 온기가 필요한 온담형(WARM) 성향'
      }
    ]
  },
  // 범용 동점 보완 질문 (그 외 동점 조합에 유연하게 대응)
  'DEFAULT_TIE': {
    competingTypes: ['SUN', 'FOREST', 'WIND', 'WARM'],
    question: '평소 내 체형의 무게중심과 소화 및 신체 에너지 경향에 가장 가까운 것은 무엇인가요?',
    subtitle: '체질의 근본적인 기운 흐름을 판단하여 최종 유형을 정확히 확정합니다.',
    options: [
      {
        type: 'SUN',
        label: 'A',
        text: '상체와 어깨가 발달하고 목덜미에 힘이 넘치며, 시원한 기운을 받을 때 활력이 솟는다.',
        detail: '해온형(SUN, 태양인) - 열정을 식히고 이완이 필요'
      },
      {
        type: 'FOREST',
        label: 'B',
        text: '허리와 골격이 튼튼하고 묵직한 체형이며, 땀을 흘리고 율무나 차를 마시면 몸이 개운하다.',
        detail: '숲온형(FOREST, 태음인) - 무거움을 비우고 순환이 필요'
      },
      {
        type: 'WIND',
        label: 'C',
        text: '가슴과 상체가 발달한 편이며 걸음걸이가 경쾌하고, 신장에 진액이 부족해 쉽게 건조해진다.',
        detail: '바람형(WIND, 소양인) - 부드러운 여유와 음기 보충 필요'
      },
      {
        type: 'WARM',
        label: 'D',
        text: '엉덩이와 하체가 발달하고 상체가 가녀린 편이며, 아랫배를 따뜻하게 유지해야 소화가 잘된다.',
        detail: '온담형(WARM, 소음인) - 포근한 온기와 위장 보호 필요'
      }
    ]
  }
};

// 3) 차 취향으로 알아보는 나 (9~11번)
export const TASTE_QUESTIONS = {
  scent: {
    id: 9,
    title: '가장 끌리는 향은 무엇인가요?',
    subtitle: '찻잔을 코끝에 가져갔을 때 기분을 좋게 만드는 향기입니다.',
    options: [
      { value: 'FLORAL', label: '꽃향', description: '화사하고 매혹적인 만개한 생화의 향기' },
      { value: 'HERBAL', label: '허브 & 풀향', description: '푸르른 숲과 싱그러운 허브의 청량한 향기' },
      { value: 'CITRUS', label: '시트러스 & 과일향', description: '톡 쏘는 상큼함과 달콤한 과즙의 향기' },
      { value: 'GRAIN', label: '구수한 곡물 & 우디향', description: '마음을 편안하게 감싸는 깊은 덖음 향기' }
    ]
  },
  flavor: {
    id: 10,
    title: '좋아하는 차의 맛은 어떤가요?',
    subtitle: '입안에 머금었을 때 가장 만족스러운 미각 프로필입니다.',
    options: [
      { value: 'CLEAR', label: '깔끔하고 청량한 맛', description: '텁텁함 없이 시원하고 맑게 넘어가는 맛' },
      { value: 'SWEET', label: '은은하고 부드러운 단맛', description: '자연스러운 꿀과 꽃의 부드러운 감미' },
      { value: 'DEEP', label: '깊고 묵직한 구수한 맛', description: '속을 든든하게 받쳐주는 풍부한 바디감' },
      { value: 'SPICY', label: '알싸하고 따뜻한 풍미', description: '스파이시한 진저 노트와 은은한 활력' }
    ]
  },
  priority: {
    id: 11,
    title: '차 한 잔에서 가장 중요하게 생각하는 것은 무엇인가요?',
    subtitle: '플루니티 티 타임에서 당신이 추구하는 핵심 가치입니다.',
    options: [
      { value: 'SCENT', label: '향 (Aroma)', description: '기분을 단숨에 전환해주는 매력적인 아로마' },
      { value: 'COLOR', label: '수색 (Color)', description: '투명한 유리잔에 번지는 영롱하고 맑은 색채' },
      { value: 'TASTE', label: '맛과 목넘김 (Taste)', description: '입안 가득 번지는 섬세하고 조화로운 밸런스' },
      { value: 'BENEFIT', label: '웰니스 효능 (Wellness)', description: '내 몸의 컨디션을 회복시켜주는 건강한 변화' }
    ]
  }
};

// 4) 오늘의 나에게 (12번 문항 - 보조 선택용)
export const TODAY_CONDITION_QUESTION = {
  id: 12,
  title: '오늘 나에게 가장 필요한 것은 무엇인가요?',
  subtitle: '얼굴 분석과 함께 반영되는 오늘의 웰니스 키워드입니다.',
  options: [
    { value: 'REFRESH', label: 'REFRESH 상쾌함', description: '답답함과 피로를 털어내고 새로운 에너지를' },
    { value: 'CALM', label: 'CALM 차분한 쉼', description: '과열된 생각과 마음을 고요히 가라앉히는 여유' },
    { value: 'WARM', label: 'WARM 따뜻한 온기', description: '차갑게 식은 몸과 위장에 생기를 채우는 따스함' },
    { value: 'BALANCE', label: 'BALANCE 편안한 균형', description: '흐트러진 생체 리듬과 신경의 밸런스 회복' }
  ]
};
