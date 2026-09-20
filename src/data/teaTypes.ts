import { MomBtiInfo, MomBtiType } from '@/lib/types';

export const MOM_BTI_TYPES: Record<MomBtiType, MomBtiInfo> = {
  SUN: {
    type: 'SUN',
    name: '해온형',
    title: 'SUN (태양인)',
    tagline: '열정적인 나에게 잠시 쉼을',
    keywords: ['CALM', 'CLEAR', 'RELAX'],
    description: '자신의 에너지를 적극적으로 표현하고 명확하고 빠르게 결정하는 카리스마 넘치는 성향입니다. 상체와 머리 쪽으로 열감이 몰리기 쉬우므로, 기운을 차분히 가라앉히고 머리를 맑게 식혀주는 시원하고 평온한 기운의 꽃차가 잘 맞습니다.',
    color: '#E05A47',
    secondaryColor: '#FFEDD5',
    teaColor: '#F87171', // 맑고 투명한 붉은빛 수색
    recommendedTeas: [
      {
        id: 'cockscomb',
        name: '맨드라미꽃차',
        botanicalName: 'Celosia cristata',
        benefits: ['상체 열감 해소', '눈의 피로 완화', '혈행 개선'],
        flavorNotes: ['은은하고 달큰한 꽃향', '깔끔하고 맑은 뒷맛'],
        steepColor: '#EF4444', // 선명한 루비 레드
        steepTemp: '95℃',
        steepTime: '3분',
        description: '강렬하고 화사한 루비빛 수색이 매력적이며, 분주했던 마음에 차분한 휴식을 선물합니다.',
        imageUrl: '/teas/cockscomb.png'
      },
      {
        id: 'magnolia',
        name: '목련꽃차',
        botanicalName: 'Magnolia kobus',
        benefits: ['호흡기 및 비염 완화', '두통 완화', '기분 전환'],
        flavorNotes: ['달콤한 박하향', '알싸하면서도 산뜻한 매화향'],
        steepColor: '#FDE047', // 투명한 황금빛
        steepTemp: '90℃',
        steepTime: '2분 30초',
        description: '봄의 시작을 알리는 백목련 꽃봉오리로 만들어 은은한 매운 향과 달콤함이 머리를 상쾌하게 비워줍니다.',
        imageUrl: '/teas/magnolia.png'
      },
      {
        id: 'lindera',
        name: '생강나무꽃차',
        botanicalName: 'Lindera obtusiloba',
        benefits: ['산후통 및 어혈 완화', '근육 이완', '생기 순환'],
        flavorNotes: ['은은한 알싸함', '깊고 청량한 숲속 흙내음'],
        steepColor: '#FEF08A', // 맑은 연노랑
        steepTemp: '90℃',
        steepTime: '3분',
        description: '자연의 알싸하고 따스한 활력이 긴장된 상체를 풀어주고 경직된 몸을 부드럽게 이완시켜 줍니다.',
        imageUrl: '/teas/lindera.png'
      }
    ]
  },
  FOREST: {
    type: 'FOREST',
    name: '숲온형',
    title: 'FOREST (태음인)',
    tagline: '안정적인 나에게 산뜻한 움직임을',
    keywords: ['LIGHT', 'FRESH', 'REFRESH'],
    description: '우직하고 묵직한 포용력을 지니며, 편안하고 안정적인 일상의 리듬을 사랑하는 성향입니다. 체내에 노폐물이나 습담이 쌓이기 쉬워 몸이 무거워질 수 있으므로, 순환을 원활하게 돕고 가볍고 상쾌한 기운을 불어넣어 주는 차가 최적의 밸런스를 맞춰줍니다.',
    color: '#2F6B55',
    secondaryColor: '#DCFCE7',
    teaColor: '#84CC16', // 은은한 올리브 그린 수색
    recommendedTeas: [
      {
        id: 'lotus_leaf',
        name: '연잎차',
        botanicalName: 'Nelumbo nucifera',
        benefits: ['노폐물 배출', '체중 관리', '마음 안정'],
        flavorNotes: ['구수하고 포근한 볏짚향', '단아하고 깔끔한 맛'],
        steepColor: '#A3E635', // 청아한 연두빛
        steepTemp: '85℃',
        steepTime: '3분',
        description: '연못의 맑은 정기를 머금은 연잎이 묵직했던 몸과 마음을 깃털처럼 가볍게 정화해 줍니다.',
        imageUrl: '/teas/lotus_leaf.png'
      },
      {
        id: 'chrysanthemum',
        name: '국화차',
        botanicalName: 'Chrysanthemum morifolium',
        benefits: ['눈의 피로 회복', '두통 완화', '숙면 유도'],
        flavorNotes: ['그윽하고 청아한 국화향', '은은한 단맛'],
        steepColor: '#FBBF24', // 영롱한 앰버 옐로우
        steepTemp: '90℃',
        steepTime: '3분',
        description: '한 송이 활짝 피어나는 국화의 그윽한 향이 탁해진 기운을 정화하고 맑은 정신을 되찾아줍니다.',
        imageUrl: '/teas/chrysanthemum.png'
      },
      {
        id: 'green_tangerine',
        name: '청귤차',
        botanicalName: 'Citrus unshiu',
        benefits: ['비타민C 활력 보충', '피로 회복', '소화 촉진'],
        flavorNotes: ['싱그러운 시트러스 향', '톡 쏘는 상큼함'],
        steepColor: '#F59E0B', // 화사한 오렌지 골드
        steepTemp: '80℃',
        steepTime: '2분',
        description: '제주 청정 자연에서 자란 풋귤의 신선한 산미가 처진 기운을 깨우고 활력을 돋워줍니다.',
        imageUrl: '/teas/green_tangerine.png'
      },
      {
        id: 'burdock',
        name: '우엉차',
        botanicalName: 'Arctium lappa',
        benefits: ['사포닌 면역 강화', '장 건강 촉진', '붓기 완화'],
        flavorNotes: ['진하고 깊은 구수함', '달콤한 흙내음'],
        steepColor: '#B45309', // 깊은 브라운 골드
        steepTemp: '95℃',
        steepTime: '4분',
        description: '정성껏 덖어낸 우엉의 깊고 진한 구수함이 답답했던 속을 시원하게 순환시켜 줍니다.',
        imageUrl: '/teas/burdock.png'
      }
    ]
  },
  WIND: {
    type: 'WIND',
    name: '바람형',
    title: 'WIND (소양인)',
    tagline: '빠르게 움직이는 나에게 여유를',
    keywords: ['SOFT', 'RELAX', 'BALANCE'],
    description: '새로운 변화에 민첩하게 반응하고 반짝이는 아이디어를 행동으로 옮기는 감각적인 성향입니다. 열정이 넘치고 활동성이 높은 반면 쉽게 에너지를 소모하여 체내 수분이 마르거나 예민해지기 쉬우므로, 은은하게 열을 내려주고 깊은 여유와 수분을 채워주는 부드러운 차가 제격입니다.',
    color: '#3B82F6',
    secondaryColor: '#DBEAFE',
    teaColor: '#60A5FA', // 투명한 스카이 블루/허브 골드빛
    recommendedTeas: [
      {
        id: 'chamomile',
        name: '캐모마일꽃차',
        botanicalName: 'Matricaria chamomilla',
        benefits: ['불안 긴장 완화', '숙면 유도', '위장 안정'],
        flavorNotes: ['달콤한 사과향', '포근하고 부드러운 허브 내음'],
        steepColor: '#FACC15', // 따스한 레몬 골드
        steepTemp: '90℃',
        steepTime: '3분',
        description: '대지의 사과라는 별명처럼 지친 신경을 부드럽게 감싸 안고 깊고 편안한 숙면을 인도합니다.',
        imageUrl: '/teas/chamomile.png'
      },
      {
        id: 'goji',
        name: '구기자차',
        botanicalName: 'Lycium chinense',
        benefits: ['음기 보충 및 진액 생성', '눈의 피로 개선', '간 건강'],
        flavorNotes: ['달콤 쌉싸름한 베리향', '은은하고 묵직한 단맛'],
        steepColor: '#FB7185', // 은은한 코랄 핑크빛
        steepTemp: '95℃',
        steepTime: '5분',
        description: '붉은 보석 구기자가 빠르게 소모된 체내 진액과 수분을 깊숙이 촉촉하게 채워줍니다.',
        imageUrl: '/teas/goji.png'
      },
      {
        id: 'pansy',
        name: '팬지꽃차',
        botanicalName: 'Viola tricolor',
        benefits: ['항산화 안토시아닌 풍부', '피부 진정', '스트레스 해소'],
        flavorNotes: ['달착지근한 꿀향', '매혹적인 플로럴 노트'],
        steepColor: '#818CF8', // 신비로운 보랏빛/푸른빛
        steepTemp: '85℃',
        steepTime: '2분 30초',
        description: '신비롭고 몽환적인 수색이 눈을 즐겁게 하고, 날카로워진 신경을 유연하게 풀어줍니다.',
        imageUrl: '/teas/pansy.png'
      },
      {
        id: 'snapdragon',
        name: '금어초꽃차',
        botanicalName: 'Antirrhinum majus',
        benefits: ['기분 전환', '체내 열감 진정', '활력 회복'],
        flavorNotes: ['화사하고 싱그러운 꽃내음', '부드러운 목넘김'],
        steepColor: '#F472B6', // 로맨틱 핑크
        steepTemp: '85℃',
        steepTime: '2분',
        description: '살랑이는 바람처럼 화사한 꽃망울이 마음에 밝고 평온한 쉼표를 선사합니다.',
        imageUrl: '/teas/snapdragon.png'
      }
    ]
  },
  WARM: {
    type: 'WARM',
    name: '온담형',
    title: 'WARM (소음인)',
    tagline: '섬세한 나에게 따뜻한 온기를',
    keywords: ['WARM', 'COMFORT', 'ENERGY'],
    description: '사려 깊고 섬세하며 자신만의 아늑하고 익숙한 공간에서 고요한 리듬을 찾는 성향입니다. 소화기가 약하고 몸에 냉기가 돌기 쉬우며 기운이 쉽게 지칠 수 있으므로, 아랫배와 손발을 훈훈하게 데워주고 소화를 편안하게 돕는 따스한 꽃차가 최상의 짝꿍입니다.',
    color: '#D97706',
    secondaryColor: '#FEF3C7',
    teaColor: '#F59E0B', // 깊고 따뜻한 앰버 로즈빛
    recommendedTeas: [
      {
        id: 'rose',
        name: '장미꽃차',
        botanicalName: 'Rosa damascena',
        benefits: ['기혈 순환 촉진', '여성 호르몬 밸런스', '피부 보습'],
        flavorNotes: ['우아하고 깊은 장미향', '은은한 단맛과 산미'],
        steepColor: '#FB7185', // 고혹적인 로즈 핑크
        steepTemp: '85℃',
        steepTime: '3분',
        description: '여왕의 꽃 장미의 고결한 향기가 얼어붙은 몸을 훈훈하게 덥히고 기혈 순환을 돕습니다.',
        imageUrl: '/teas/rose.png'
      },
      {
        id: 'lemongrass',
        name: '레몬그라스잎차',
        botanicalName: 'Cymbopogon citratus',
        benefits: ['소화 불량 완화', '복부 팽만 개선', '심신 리프레시'],
        flavorNotes: ['싱그러운 레몬향', '청량하고 깔끔한 풍미'],
        steepColor: '#EAB308', // 투명한 맑은 옐로우
        steepTemp: '90℃',
        steepTime: '3분',
        description: '더부룩하고 냉했던 위장을 따스하게 감싸며, 맑은 레몬 향으로 속을 개운하게 비워줍니다.',
        imageUrl: '/teas/lemongrass.png'
      },
      {
        id: 'ginger',
        name: '생강꽃차 & 생강차',
        botanicalName: 'Zingiber officinale',
        benefits: ['냉증 개선 및 체온 상승', '소화기 강화', '면역력 증진'],
        flavorNotes: ['스파이시한 진저 노트', '깊은 훈기'],
        steepColor: '#D97706', // 짙은 황토 골드
        steepTemp: '95℃',
        steepTime: '4분',
        description: '알싸하고 진한 따스함이 몸 속 구석구석 퍼지며 추위와 피로를 단숨에 녹여줍니다.',
        imageUrl: '/teas/ginger.png'
      },
      {
        id: 'mugwort',
        name: '구절초꽃차 & 쑥차',
        botanicalName: 'Chrysanthemum zawadskii',
        benefits: ['손발 저림 완화', '부인과 건강', '피로 회복'],
        flavorNotes: ['쌉쌀하면서도 깊은 풀향', '달큰한 여운'],
        steepColor: '#CA8A04', // 짙은 가을 골드
        steepTemp: '90℃',
        steepTime: '3분 30초',
        description: '가을 들녘의 햇살을 머금은 구절초가 지친 아랫배를 편안하고 따스하게 품어줍니다.',
        imageUrl: '/teas/mugwort.png'
      }
    ]
  }
};
