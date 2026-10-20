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
        category: 'BASE',
        botanicalName: 'Celosia cristata',
        benefits: ['상체 열감 해소', '눈의 피로 완화', '혈행 개선'],
        flavorNotes: ['은은하고 달큰한 꽃향', '깔끔하고 맑은 뒷맛'],
        steepColor: '#EF4444', // 선명한 루비 레드
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '강렬하고 화사한 루비빛 수색이 매력적이며, 분주했던 마음에 차분한 휴식을 선물합니다.',
        imageUrl: '/teas/cockscomb.png'
      },
      {
        id: 'chamomile_sun',
        name: '캐모마일꽃차',
        category: 'BASE',
        botanicalName: 'Matricaria chamomilla',
        benefits: ['심신 안정 및 긴장 완화', '상체 화기 진정', '숙면 유도'],
        flavorNotes: ['달콤한 사과향', '포근하고 부드러운 허브 내음'],
        steepColor: '#FACC15', // 따스한 레몬 골드
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '달콤한 사과향이 머리 쪽으로 몰린 긴장과 열기를 부드럽게 가라앉혀 줍니다.',
        imageUrl: '/teas/chamomile.png'
      },
      {
        id: 'rose_sun',
        name: '장미꽃차',
        category: 'BASE',
        botanicalName: 'Rosa damascena',
        benefits: ['울체된 기운 해소', '항산화 및 피부 생기', '기분 전환'],
        flavorNotes: ['우아하고 깊은 장미향', '산뜻하고 맑은 여운'],
        steepColor: '#FB7185', // 고혹적인 로즈 핑크
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '화사한 장미 아로마가 답답하게 뭉친 가슴과 상체의 기운을 시원하고 우아하게 풀어줍니다.',
        imageUrl: '/teas/rose.png'
      },
      {
        id: 'pansy_sun',
        name: '팬지꽃차',
        category: 'BASE',
        botanicalName: 'Viola tricolor',
        benefits: ['안토시아닌 항산화', '열감 진정', '시각적 힐링'],
        flavorNotes: ['산뜻하고 맑은 풀꽃향', '은은한 단맛'],
        steepColor: '#818CF8', // 신비로운 보랏빛/푸른빛
        steepTemp: '90~100℃',
        steepTime: '2분 30초',
        description: '맑고 영롱한 수색이 시각적인 청량감을 주며, 달아오른 컨디션을 차분하게 식혀줍니다.',
        imageUrl: '/teas/pansy.png'
      },
      {
        id: 'lemongrass_sun',
        name: '레몬그라스차',
        category: 'BLENDING',
        botanicalName: 'Cymbopogon citratus',
        benefits: ['머리를 맑게 리프레시', '소화 및 순환 보조', '집중력 향상'],
        flavorNotes: ['싱그러운 레몬 시트러스향', '청량하고 깔끔한 뒷맛'],
        steepColor: '#FDE047', // 투명한 황금빛
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '상쾌한 레몬 향기가 복잡한 머릿속을 맑게 비워내고 산뜻한 활력을 더해줍니다.',
        imageUrl: '/teas/lemongrass.png'
      },
      {
        id: 'lotus_leaf_sun',
        name: '연잎차',
        category: 'BLENDING',
        botanicalName: 'Nelumbo nucifera',
        benefits: ['체내 열독 및 갈증 해소', '마음 안정', '맑은 순환'],
        flavorNotes: ['은은하고 구수한 연잎향', '담백하고 깔끔한 목넘김'],
        steepColor: '#FEF08A', // 맑은 연노랑
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '연못의 청아한 기운을 담은 연잎이 상체의 열감을 차분하게 내려주고 갈증을 해소합니다.',
        imageUrl: '/teas/lotus_leaf.png'
      },
      {
        id: 'beet_sun',
        name: '비트차',
        category: 'BLENDING',
        botanicalName: 'Beta vulgaris',
        benefits: ['혈행 및 순환 개선', '항산화 베타인 풍부', '생기 충전'],
        flavorNotes: ['달큰하고 구수한 뿌리채소 풍미', '깔끔한 바디감'],
        steepColor: '#E11D48', // 깊은 루비 레드
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '선명한 루비빛 비트가 맑은 혈행을 돕고 해온형의 역동적인 에너지를 건강하게 균형 잡아줍니다.',
        imageUrl: '/teas/beet.png'
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
        id: 'magnolia_forest',
        name: '목련꽃차',
        category: 'BASE',
        botanicalName: 'Magnolia kobus',
        benefits: ['기관지 및 호흡기 케어', '비염 완화', '상쾌한 기분 전환'],
        flavorNotes: ['달콤한 박하향', '알싸하고 산뜻한 꽃향'],
        steepColor: '#FDE047', // 투명한 황금빛
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '봄의 시작을 알리는 백목련 꽃봉오리의 청량한 기운이 답답한 호흡기와 몸을 가볍게 깨워줍니다.',
        imageUrl: '/teas/magnolia.png'
      },
      {
        id: 'chrysanthemum',
        name: '국화차',
        category: 'BASE',
        botanicalName: 'Chrysanthemum morifolium',
        benefits: ['눈의 피로 회복', '두통 완화', '숙면 유도'],
        flavorNotes: ['그윽하고 청아한 국화향', '은은한 단맛'],
        steepColor: '#FBBF24', // 영롱한 앰버 옐로우
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '한 송이 활짝 피어나는 국화의 그윽한 향이 탁해진 기운을 정화하고 맑은 정신을 되찾아줍니다.',
        imageUrl: '/teas/chrysanthemum.png'
      },
      {
        id: 'lindera_forest',
        name: '생강나무꽃차',
        category: 'BASE',
        botanicalName: 'Lindera obtusiloba',
        benefits: ['기혈 및 대사 순환', '근육 이완', '몸의 무거움 해소'],
        flavorNotes: ['은은한 알싸함', '깊고 청량한 숲속 내음'],
        steepColor: '#A3E635', // 청아한 연두빛
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '숲속의 싱그러운 알싸함을 품은 생강나무꽃이 정체된 기운을 산뜻하게 순환시켜 줍니다.',
        imageUrl: '/teas/lindera.png'
      },
      {
        id: 'gujeolcho_forest',
        name: '구절초꽃차',
        category: 'BASE',
        botanicalName: 'Chrysanthemum zawadskii',
        benefits: ['체내 노폐물 정화', '면역 밸런스', '피로 회복'],
        flavorNotes: ['깊고 그윽한 가을 들꽃향', '담백하고 쌉싸름한 단맛'],
        steepColor: '#CA8A04', // 짙은 가을 골드
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '가을 햇살을 머금은 구절초의 맑은 향기가 묵직해진 몸과 마음에 산뜻한 활력을 불어넣습니다.',
        imageUrl: '/teas/gujeolcho.png'
      },
      {
        id: 'bellflower_forest',
        name: '도라지차',
        category: 'BLENDING',
        botanicalName: 'Platycodon grandiflorus',
        benefits: ['폐·기관지 보호', '사포닌 순환 촉진', '목 건강 케어'],
        flavorNotes: ['구수하고 진한 덖음 풍미', '은은한 단맛과 깔끔한 뒷맛'],
        steepColor: '#B45309', // 깊은 브라운 골드
        steepTemp: '90~100℃',
        steepTime: '3분 30초',
        description: '숲온형에게 특히 이로운 도라지의 사포닌 성분이 호흡기를 보호하고 답답한 속을 개운하게 풀어줍니다.',
        imageUrl: '/teas/bellflower.png'
      },
      {
        id: 'green_tangerine',
        name: '청귤차',
        category: 'BLENDING',
        botanicalName: 'Citrus unshiu',
        benefits: ['비타민C 활력 보충', '피로 회복', '소화 촉진'],
        flavorNotes: ['싱그러운 시트러스 향', '톡 쏘는 상큼함'],
        steepColor: '#F59E0B', // 화사한 오렌지 골드
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '청정 자연에서 자란 청귤의 신선한 산미가 처진 기운을 깨우고 산뜻한 리듬을 만들어줍니다.',
        imageUrl: '/teas/green_tangerine.png'
      },
      {
        id: 'tangerine_peel_forest',
        name: '진피차',
        category: 'BLENDING',
        botanicalName: 'Citrus reticulata',
        benefits: ['습담 및 붓기 완화', '소화 순환 촉진', '가벼운 바디감'],
        flavorNotes: ['그윽한 시트러스 아로마', '달콤쌉싸름하고 개운한 맛'],
        steepColor: '#D97706', // 앰버 오렌지
        steepTemp: '90~100℃',
        steepTime: '3분 30초',
        description: '잘 말린 귤피의 향긋한 기운이 정체된 수분과 노폐물 순환을 도와 몸을 한결 가볍게 해줍니다.',
        imageUrl: '/teas/tangerine_peel.png'
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
        id: 'marigold_wind',
        name: '메리골드꽃차',
        category: 'BASE',
        botanicalName: 'Tagetes erecta',
        benefits: ['루테인 눈 피로 케어', '신경 긴장 완화', '은은한 열감 진정'],
        flavorNotes: ['화사하고 부드러운 풀꽃향', '담백하고 편안한 단맛'],
        steepColor: '#FACC15', // 따스한 레몬 골드
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '황금빛 메리골드가 빠르게 움직이며 지친 눈과 신경에 포근한 여유를 선물합니다.',
        imageUrl: '/teas/marigold.png'
      },
      {
        id: 'snapdragon',
        name: '금어초꽃차',
        category: 'BASE',
        botanicalName: 'Antirrhinum majus',
        benefits: ['기분 전환', '체내 열감 진정', '활력 회복'],
        flavorNotes: ['화사하고 싱그러운 꽃내음', '부드러운 목넘김'],
        steepColor: '#F472B6', // 로맨틱 핑크
        steepTemp: '90~100℃',
        steepTime: '2분 30초',
        description: '살랑이는 바람처럼 화사한 꽃망울이 마음에 밝고 평온한 쉼표를 선사합니다.',
        imageUrl: '/teas/snapdragon.png'
      },
      {
        id: 'cockscomb_wind',
        name: '맨드라미꽃차',
        category: 'BASE',
        botanicalName: 'Celosia cristata',
        benefits: ['상체 열감 완화', '안정감 부여', '맑은 컨디션 회복'],
        flavorNotes: ['은은하고 달큰한 꽃향', '깔끔하고 맑은 뒷맛'],
        steepColor: '#EF4444', // 루비 레드
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '투명한 루비빛 수색이 들뜬 기운을 차분하게 갈무리하고 고요한 밸런스를 찾아줍니다.',
        imageUrl: '/teas/cockscomb.png'
      },
      {
        id: 'pansy',
        name: '팬지꽃차',
        category: 'BASE',
        botanicalName: 'Viola tricolor',
        benefits: ['항산화 안토시아닌 풍부', '피부 진정', '스트레스 해소'],
        flavorNotes: ['달착지근한 꿀향', '매혹적인 플로럴 노트'],
        steepColor: '#818CF8', // 신비로운 보랏빛/푸른빛
        steepTemp: '90~100℃',
        steepTime: '2분 30초',
        description: '신비롭고 몽환적인 수색이 눈을 즐겁게 하고, 날카로워진 신경을 유연하게 풀어줍니다.',
        imageUrl: '/teas/pansy.png'
      },
      {
        id: 'goji',
        name: '구기자차',
        category: 'BLENDING',
        botanicalName: 'Lycium chinense',
        benefits: ['음기 보충 및 진액 생성', '눈의 피로 개선', '간 건강'],
        flavorNotes: ['달콤 쌉싸름한 베리향', '은은하고 묵직한 단맛'],
        steepColor: '#FB7185', // 은은한 코랄 핑크빛
        steepTemp: '90~100℃',
        steepTime: '4분',
        description: '붉은 보석 구기자가 빠르게 소모된 체내 진액과 수분을 깊숙이 촉촉하게 채워줍니다.',
        imageUrl: '/teas/goji.png'
      },
      {
        id: 'lemongrass_wind',
        name: '레몬그라스차',
        category: 'BLENDING',
        botanicalName: 'Cymbopogon citratus',
        benefits: ['긴장 이완 및 리프레시', '소화 정돈', '기분 전환'],
        flavorNotes: ['상쾌한 레몬 허브향', '깔끔하고 맑은 피니시'],
        steepColor: '#FDE047', // 밝은 옐로우
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '싱그러운 레몬그라스 노트가 과열된 사고의 템포를 산뜻하고 부드럽게 정돈해 줍니다.',
        imageUrl: '/teas/lemongrass.png'
      },
      {
        id: 'burdock_wind',
        name: '우엉차',
        category: 'BLENDING',
        botanicalName: 'Arctium lappa',
        benefits: ['하체 중심 기운 안정', '열감 완화 및 정화', '장 건강 케어'],
        flavorNotes: ['구수하고 깊은 덖음 풍미', '은은한 대지의 단맛'],
        steepColor: '#B45309', // 깊은 브라운 골드
        steepTemp: '90~100℃',
        steepTime: '4분',
        description: '대지의 기운을 품은 구수한 우엉차가 바람형의 가벼워지기 쉬운 에너지를 차분하게 잡아줍니다.',
        imageUrl: '/teas/burdock.png'
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
        id: 'gujeolcho_warm',
        name: '구절초꽃차',
        category: 'BASE',
        botanicalName: 'Chrysanthemum zawadskii',
        benefits: ['손발 및 아랫배 온기 보충', '소화기 안정', '피로 회복'],
        flavorNotes: ['쌉쌀하면서도 깊은 가을 들꽃향', '따스하고 달큰한 여운'],
        steepColor: '#CA8A04', // 짙은 가을 골드
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '가을 들녘의 햇살을 머금은 구절초가 차가워지기 쉬운 아랫배를 편안하고 따스하게 품어줍니다.',
        imageUrl: '/teas/gujeolcho.png'
      },
      {
        id: 'magnolia_warm',
        name: '목련꽃차',
        category: 'BASE',
        botanicalName: 'Magnolia kobus',
        benefits: ['따뜻한 기운 순환', '코와 호흡기 보호', '냉기 완화'],
        flavorNotes: ['은은한 알싸함과 단맛', '포근한 꽃내음'],
        steepColor: '#FDE047', // 따뜻한 골드 옐로우
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '따스한 성질의 백목련 꽃봉오리가 움츠러든 몸에 은은한 온기와 활력을 불어넣습니다.',
        imageUrl: '/teas/magnolia.png'
      },
      {
        id: 'chamomile_warm',
        name: '캐모마일꽃차',
        category: 'BASE',
        botanicalName: 'Matricaria chamomilla',
        benefits: ['예민한 위장 보호', '심신 이완 및 숙면', '포근한 안정감'],
        flavorNotes: ['달콤한 사과향', '부드럽고 따뜻한 바디감'],
        steepColor: '#FACC15', // 레몬 골드
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '부드러운 사과향의 캐모마일이 섬세하고 예민한 소화기와 마음을 따뜻하게 다독여줍니다.',
        imageUrl: '/teas/chamomile.png'
      },
      {
        id: 'plum_blossom_warm',
        name: '매화차',
        category: 'BASE',
        botanicalName: 'Prunus mume',
        benefits: ['체기 및 소화 불량 완화', '기분 정화', '맑은 생기 충전'],
        flavorNotes: ['고결하고 은은한 매화향', '산뜻하고 부드러운 단맛'],
        steepColor: '#FEF08A', // 맑은 아이보리 골드
        steepTemp: '90~100℃',
        steepTime: '3분',
        description: '추위를 이기고 피어난 매화의 향기로운 기운이 막힌 속을 부드럽게 풀어주고 생기를 채워줍니다.',
        imageUrl: '/teas/plum_blossom.png'
      },
      {
        id: 'ginger',
        name: '생강차',
        category: 'BLENDING',
        botanicalName: 'Zingiber officinale',
        benefits: ['냉증 개선 및 체온 상승', '소화기 강화', '면역력 증진'],
        flavorNotes: ['스파이시한 진저 노트', '깊고 훈훈한 온기'],
        steepColor: '#D97706', // 짙은 황토 골드
        steepTemp: '90~100℃',
        steepTime: '4분',
        description: '알싸하고 진한 따스함이 몸 속 구석구석 퍼지며 추위와 피로를 단숨에 녹여줍니다.',
        imageUrl: '/teas/ginger.png'
      },
      {
        id: 'mugwort',
        name: '쑥차',
        category: 'BLENDING',
        botanicalName: 'Artemisia princeps',
        benefits: ['하복부 냉증 개선', '혈행 및 기력 보충', '속을 데우는 온기'],
        flavorNotes: ['구수하고 향긋한 쑥향', '포근하고 깊은 여운'],
        steepColor: '#84CC16', // 따스한 쑥빛 그린 골드
        steepTemp: '90~100℃',
        steepTime: '3분 30초',
        description: '봄 햇살을 머금은 쑥의 깊은 온기가 손발 끝까지 따뜻한 혈색이 돌도록 도와줍니다.',
        imageUrl: '/teas/mugwort.png'
      },
      {
        id: 'mistletoe_warm',
        name: '겨우살이차',
        category: 'BLENDING',
        botanicalName: 'Viscum album',
        benefits: ['기력 회복 및 면역 강화', '근골격 및 혈행 보강', '심신 안정'],
        flavorNotes: ['구수하고 은은한 나무 내음', '부드럽고 깊은 감칠맛'],
        steepColor: '#B45309', // 깊은 앰버 브라운
        steepTemp: '90~100℃',
        steepTime: '4분',
        description: '한겨울에도 푸르름을 잃지 않는 겨우살이의 강인한 생명력이 쉽게 지치는 온담형의 기력을 든든하게 채워줍니다.',
        imageUrl: '/teas/mistletoe.png'
      }
    ]
  }
};
