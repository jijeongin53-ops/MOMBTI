// 플루니티(Flunitea) 4대 체질 및 꽃차 도감 다국어(ko, en, zh, ja) 데이터
import { MomBtiType } from '@/lib/types';
import { Language } from '@/lib/i18n/translations';

export interface I18nTeaInfo {
  name: Record<Language, string>;
  title: Record<Language, string>;
  tagline: Record<Language, string>;
  description: Record<Language, string>;
  keywords: string[];
  color: string;
  secondaryColor: string;
  teaColor: string;
  recommendedTeas: {
    id: string;
    category?: 'BASE' | 'BLENDING';
    name: Record<Language, string>;
    benefits: Record<Language, string[]>;
    flavorNotes: Record<Language, string[]>;
    steepColor: string;
    steepTemp: string;
    steepTime: Record<Language, string>;
    description: Record<Language, string>;
  }[];
}

export const I18N_MOM_BTI_TYPES: Record<MomBtiType, I18nTeaInfo> = {
  SUN: {
    name: {
      ko: '해온형',
      en: 'Sun Type (Hae-on)',
      zh: '太阳型 (海温型)',
      ja: '太陽型 (ヘオン型)'
    },
    title: {
      ko: 'SUN (태양인)',
      en: 'SUN (Taeyang-in)',
      zh: 'SUN (太阳人)',
      ja: 'SUN (太陽人)'
    },
    tagline: {
      ko: '열정적인 나에게 잠시 쉼을',
      en: 'A soothing pause for my passionate self',
      zh: '为充满热情的我带来片刻宁静',
      ja: '情熱的な私に、ひとときの安らぎを'
    },
    keywords: ['CALM', 'CLEAR', 'RELAX'],
    description: {
      ko: '자신의 에너지를 적극적으로 표현하고 명확하고 빠르게 결정하는 카리스마 넘치는 성향입니다. 상체와 머리 쪽으로 열감이 몰리기 쉬우므로, 기운을 차분히 가라앉히고 머리를 맑게 식혀주는 시원하고 평온한 기운의 꽃차가 잘 맞습니다.',
      en: 'Charismatic and decisive, actively expressing vibrant energy. Tending to gather heat in the upper body and head, calming and cooling floral teas that clear the mind provide the ideal balance.',
      zh: '充满魅力且决断迅速，积极展现生命活力。上身与头部易聚集热气，适合清凉宁心、澄清思绪的花茶，以达致身心平衡。',
      ja: 'エネルギッシュで決断力に富むカリスマタイプ。上半身や頭部に熱がこもりやすいため、気を静めて頭をすっきりと冷ます清らかな花茶が調和をもたらします。'
    },
    color: '#E05A47',
    secondaryColor: '#FFEDD5',
    teaColor: '#F87171',
    recommendedTeas: [
      {
        id: 'cockscomb',
        category: 'BASE',
        name: { ko: '맨드라미꽃차', en: 'Cockscomb Flower Tea', zh: '鸡冠花茶', ja: 'ケイトウ花茶' },
        benefits: {
          ko: ['상체 열감 해소', '눈의 피로 완화', '혈행 개선'],
          en: ['Relieves upper heat', 'Eases eye strain', 'Improves circulation'],
          zh: ['消除上身燥热', '缓解眼部疲劳', '促进血液循环'],
          ja: ['上半身の熱を緩和', '目の疲労回復', '血行促進']
        },
        flavorNotes: {
          ko: ['은은하고 달큰한 꽃향', '깔끔하고 맑은 뒷맛'],
          en: ['Subtle, sweet floral aroma', 'Clean, refreshing finish'],
          zh: ['清雅微甜的花香', '纯净爽口的余韵'],
          ja: ['ほのかな甘い花の香り', 'すっきり爽やかな後味']
        },
        steepColor: '#EF4444',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '강렬하고 화사한 루비빛 수색이 매력적이며, 분주했던 마음에 차분한 휴식을 선물합니다.',
          en: 'Its vivid ruby hue is captivating, offering serene relaxation to a busy mind.',
          zh: '艳丽剔透的红宝石色茶汤，为忙碌的心灵带来宁静的休歇。',
          ja: '鮮やかなルビー色の水色が美しく、忙しい心に静かな休息を届けます。'
        }
      },
      {
        id: 'chamomile_sun',
        category: 'BASE',
        name: { ko: '캐모마일꽃차', en: 'Chamomile Flower Tea', zh: '洋甘菊花茶', ja: 'カモミール花茶' },
        benefits: {
          ko: ['심신 안정 및 긴장 완화', '상체 화기 진정', '숙면 유도'],
          en: ['Stress relief & calm', 'Soothes upper heat', 'Supports sound sleep'],
          zh: ['平复心绪缓解紧张', '清降上身火气', '助眠安神'],
          ja: ['リラックス・緊張緩和', '上半身の熱を鎮める', '安眠サポート']
        },
        flavorNotes: {
          ko: ['달콤한 사과향', '포근하고 부드러운 허브 내음'],
          en: ['Gentle sweet apple note', 'Warm, velvety herbal aroma'],
          zh: ['清甜苹果花香', '温润柔和的草本韵味'],
          ja: ['やさしいリンゴの香り', 'まろやかで温かなハーブの香り']
        },
        steepColor: '#FACC15',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '달콤한 사과향이 머리 쪽으로 몰린 긴장과 열기를 부드럽게 가라앉혀 줍니다.',
          en: 'Sweet apple aroma gently settles tension and heat gathered in the upper body.',
          zh: '甘甜的苹果香气轻柔平复聚集在头部的紧张与燥热。',
          ja: '甘いリンゴの香りが頭部に集まった緊張と熱をやさしく鎮めます。'
        }
      },
      {
        id: 'rose_sun',
        category: 'BASE',
        name: { ko: '장미꽃차', en: 'Rose Blossom Tea', zh: '玫瑰花茶', ja: 'バラ花茶' },
        benefits: {
          ko: ['울체된 기운 해소', '항산화 및 피부 생기', '기분 전환'],
          en: ['Releases stagnant energy', 'Antioxidant & skin glow', 'Mood refresher'],
          zh: ['疏肝解郁理气', '抗氧化焕亮肌肤', '愉悦心情'],
          ja: ['滞った気の巡りを解消', '抗酸化・美肌ケア', '気分転換']
        },
        flavorNotes: {
          ko: ['우아하고 깊은 장미향', '산뜻하고 맑은 여운'],
          en: ['Elegant deep rose scent', 'Crisp, clean finish'],
          zh: ['馥郁优雅的玫瑰香', '清爽纯净的余韵'],
          ja: ['上品で芳醇なバラの香り', 'すっきり清らかな余韻']
        },
        steepColor: '#FB7185',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '화사한 장미 아로마가 답답하게 뭉친 가슴과 상체의 기운을 시원하고 우아하게 풀어줍니다.',
          en: 'Radiant rose aroma gracefully releases tightness in the chest and upper body.',
          zh: '芬芳的玫瑰香气优雅疏解胸口与上身的郁结之气。',
          ja: '華やかなバラのアロマが胸や上半身の詰まりを優雅に解きほぐします。'
        }
      },
      {
        id: 'pansy_sun',
        category: 'BASE',
        name: { ko: '팬지꽃차', en: 'Pansy Flower Tea', zh: '三色堇花茶', ja: 'パンジー花茶' },
        benefits: {
          ko: ['안토시아닌 항산화', '열감 진정', '시각적 힐링'],
          en: ['Anthocyanin antioxidant', 'Soothes heat', 'Visual relaxation'],
          zh: ['花青素抗氧化', '清热舒缓', '视觉疗愈'],
          ja: ['アントシアニン抗酸化', '熱感の鎮静', '美しい色彩の癒やし']
        },
        flavorNotes: {
          ko: ['산뜻하고 맑은 풀꽃향', '은은한 단맛'],
          en: ['Crisp wild blossom scent', 'Delicate mild sweetness'],
          zh: ['清新旷野花香', '恬淡回甘'],
          ja: ['清々しい野花の香り', 'ほのかな甘み']
        },
        steepColor: '#818CF8',
        steepTemp: '90~100℃',
        steepTime: { ko: '2분 30초', en: '2.5 mins', zh: '2分30秒', ja: '2分30秒' },
        description: {
          ko: '맑고 영롱한 수색이 시각적인 청량감을 주며, 달아오른 컨디션을 차분하게 식혀줍니다.',
          en: 'Luminous violet infusion brings visual coolness and calms overheated energy.',
          zh: '澄澈剔透的茶汤带来视觉清凉感，温和抚平燥热状态。',
          ja: '透き通る美しい水色が涼やかさを届け、ほてった心身を静かに冷まします。'
        }
      },
      {
        id: 'lemongrass_sun',
        category: 'BLENDING',
        name: { ko: '레몬그라스차', en: 'Lemongrass Tea', zh: '柠檬草茶', ja: 'レモングラス茶' },
        benefits: {
          ko: ['머리를 맑게 리프레시', '소화 및 순환 보조', '집중력 향상'],
          en: ['Clears & refreshes mind', 'Aids digestion & flow', 'Enhances focus'],
          zh: ['清新醒脑', '辅助消化与循环', '提升专注力'],
          ja: ['頭をすっきりリフレッシュ', '消化と巡りのサポート', '集中力アップ']
        },
        flavorNotes: {
          ko: ['싱그러운 레몬 시트러스향', '청량하고 깔끔한 뒷맛'],
          en: ['Zesty lemon citrus note', 'Crisp, clean aftertaste'],
          zh: ['清新的柠檬柑橘香', '清爽干净的余味'],
          ja: ['爽やかなレモンシトラスの香り', '清涼ですっきりした後味']
        },
        steepColor: '#FDE047',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '상쾌한 레몬 향기가 복잡한 머릿속을 맑게 비워내고 산뜻한 활력을 더해줍니다.',
          en: 'Refreshing lemon aroma clears a crowded mind and adds crisp vitality.',
          zh: '清爽的柠檬香气澄澈思绪，注入轻盈活力。',
          ja: '爽快なレモンの香りが頭の中をクリアにし、軽やかな活力を与えます。'
        }
      },
      {
        id: 'lotus_leaf_sun',
        category: 'BLENDING',
        name: { ko: '연잎차', en: 'Lotus Leaf Tea', zh: '荷叶茶', ja: '蓮の葉茶' },
        benefits: {
          ko: ['체내 열독 및 갈증 해소', '마음 안정', '맑은 순환'],
          en: ['Clears heat & thirst', 'Calms the mind', 'Pure circulation'],
          zh: ['清热解毒生津', '宁心安神', '清畅循环'],
          ja: ['体の熱と渇きを癒す', '心の安定', '清らかな巡り']
        },
        flavorNotes: {
          ko: ['은은하고 구수한 연잎향', '담백하고 깔끔한 목넘김'],
          en: ['Subtle roasted lotus leaf note', 'Clean, light body'],
          zh: ['淡雅醇和的荷叶香', '清爽顺滑的口感'],
          ja: ['ほのかで香ばしい蓮の葉の香り', '淡白ですっきりしたのど越し']
        },
        steepColor: '#FEF08A',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '연못의 청아한 기운을 담은 연잎이 상체의 열감을 차분하게 내려주고 갈증을 해소합니다.',
          en: 'Pure lotus leaf essence calmly lowers upper-body heat and quenches thirst.',
          zh: '蕴含池塘清气的荷叶温和降下上身燥热，生津止渴。',
          ja: '清らかな蓮の葉の気が上半身の熱を静かに下げ、渇きを潤します。'
        }
      },
      {
        id: 'beet_sun',
        category: 'BLENDING',
        name: { ko: '비트차', en: 'Red Beet Tea', zh: '甜菜根茶', ja: 'ビーツ茶' },
        benefits: {
          ko: ['혈행 및 순환 개선', '항산화 베타인 풍부', '생기 충전'],
          en: ['Improves blood flow', 'Rich in betaine antioxidants', 'Vitality boost'],
          zh: ['促进血液循环', '富含甜菜碱抗氧化', '补充活力'],
          ja: ['血行と巡りの改善', '抗酸化ベタイン豊富', '活力チャージ']
        },
        flavorNotes: {
          ko: ['달큰하고 구수한 뿌리채소 풍미', '깔끔한 바디감'],
          en: ['Sweet, earthy roasted note', 'Clean, smooth body'],
          zh: ['甘甜醇厚的根茎风味', '清爽顺口'],
          ja: ['ほんのり甘く香ばしい風味', 'すっきりとしたコク']
        },
        steepColor: '#E11D48',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '선명한 루비빛 비트가 맑은 혈행을 돕고 해온형의 역동적인 에너지를 건강하게 균형 잡아줍니다.',
          en: 'Vivid ruby beet supports healthy circulation and balances dynamic energy.',
          zh: '鲜亮红宝石色的甜菜根助益健康循环，平衡充沛能量。',
          ja: '鮮やかなルビー色のビーツが健やかな巡りを助け、エネルギーの調和を保ちます。'
        }
      }
    ]
  },
  FOREST: {
    name: {
      ko: '숲온형',
      en: 'Forest Type (Soop-on)',
      zh: '森林型 (森温型)',
      ja: '森林型 (スポン型)'
    },
    title: {
      ko: 'FOREST (태음인)',
      en: 'FOREST (Taeum-in)',
      zh: 'FOREST (太阴人)',
      ja: 'FOREST (太陰人)'
    },
    tagline: {
      ko: '안정적인 나에게 산뜻한 움직임을',
      en: 'A refreshing momentum for my steady rhythm',
      zh: '为沉稳的我注入轻盈活力',
      ja: '穏やかな私に、軽やかな巡りを'
    },
    keywords: ['LIGHT', 'FRESH', 'REFRESH'],
    description: {
      ko: '우직하고 묵직한 포용력을 지니며, 편안하고 안정적인 일상의 리듬을 사랑하는 성향입니다. 체내에 노폐물이나 습담이 쌓이기 쉬워 몸이 무거워질 수 있으므로, 순환을 원활하게 돕고 가볍고 상쾌한 기운을 불어넣어 주는 차가 최적의 밸런스를 맞춰줍니다.',
      en: 'Deeply grounded and tolerant, cherishing a stable daily rhythm. Prone to heaviness from sluggish metabolism, teas that promote circulation and add a light, invigorating touch offer optimal wellness.',
      zh: '沉稳包容，喜爱安稳的生活节奏。体内易滞留湿气使身体感到沉重，适宜饮用促进代谢循环、带来轻盈畅爽气息的花茶。',
      ja: 'どっしりと寛容で、安らぎと安定したリズムを好むタイプ。代謝が滞り体が重くなりやすいため、巡りを促し軽快な爽快感を与える花茶が最適です。'
    },
    color: '#2F6B55',
    secondaryColor: '#D1FAE5',
    teaColor: '#6EE7B7',
    recommendedTeas: [
      {
        id: 'magnolia_forest',
        category: 'BASE',
        name: { ko: '목련꽃차', en: 'Magnolia Flower Tea', zh: '辛夷木莲花茶', ja: 'モクレン花茶' },
        benefits: {
          ko: ['기관지 및 호흡기 케어', '비염 완화', '상쾌한 기분 전환'],
          en: ['Respiratory & sinus care', 'Clears nasal passages', 'Refreshing mood lift'],
          zh: ['呵护支气管与呼吸道', '舒缓鼻炎', '清爽提神'],
          ja: ['気管支・呼吸器ケア', '鼻炎の緩和', '爽快な気分転換']
        },
        flavorNotes: {
          ko: ['달콤한 박하향', '알싸하고 산뜻한 꽃향'],
          en: ['Sweet minty note', 'Subtly spiced crisp floral aroma'],
          zh: ['微甜薄荷感', '辛香清冽的花香'],
          ja: ['甘いミント感', 'ピリッと爽やかな花の香り']
        },
        steepColor: '#FDE047',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '봄의 시작을 알리는 백목련 꽃봉오리의 청량한 기운이 답답한 호흡기와 몸을 가볍게 깨워줍니다.',
          en: 'Early spring magnolia buds awaken sluggish breathing and lighten the body.',
          zh: '初春白木莲花蕾的清冽气息，轻盈唤醒呼吸与身体。',
          ja: '春を告げる白木蓮の蕾の清涼な気が、呼吸と身体を軽やかに目覚めさせます。'
        }
      },
      {
        id: 'chrysanthemum',
        category: 'BASE',
        name: { ko: '국화차', en: 'Chrysanthemum Tea', zh: '菊花茶', ja: '菊花茶' },
        benefits: {
          ko: ['눈의 피로 회복', '두통 완화', '숙면 유도'],
          en: ['Relieves eye fatigue', 'Eases headaches', 'Supports restful sleep'],
          zh: ['清肝明目', '缓解头痛', '安神助眠'],
          ja: ['目の疲れを癒す', '頭痛の緩和', '安眠サポート']
        },
        flavorNotes: {
          ko: ['그윽하고 청아한 국화향', '은은한 단맛'],
          en: ['Deep autumn floral note', 'Clean lingering sweetness'],
          zh: ['悠远幽雅的菊香', '满口回甘的清润'],
          ja: ['奥深い秋菊の香り', '清らかな甘み']
        },
        steepColor: '#FDE68A',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '한 송이 활짝 피어나는 국화의 그윽한 향이 탁해진 기운을 정화하고 맑은 정신을 되찾아줍니다.',
          en: 'Golden blossoms unfurl in hot water, refreshing blurry eyes and clearing mental fog.',
          zh: '金色花瓣在茶水中缓缓绽放，瞬间澄清双眼与沉重的思绪。',
          ja: '黄金の花びらが咲き誇り、かすみがちな瞳と重い頭をすっきりと晴れやかにします。'
        }
      },
      {
        id: 'lindera_forest',
        category: 'BASE',
        name: { ko: '생강나무꽃차', en: 'Lindera Flower Tea', zh: '山胡椒花茶', ja: 'ダンコウバイ花茶' },
        benefits: {
          ko: ['기혈 및 대사 순환', '근육 이완', '몸의 무거움 해소'],
          en: ['Boosts metabolism & flow', 'Muscle relaxation', 'Relieves bodily heaviness'],
          zh: ['促进气血与代谢循环', '放松肌肉', '消除身体沉重感'],
          ja: ['代謝と巡りの促進', '筋肉の弛緩', '体の重だるさ解消']
        },
        flavorNotes: {
          ko: ['은은한 알싸함', '깊고 청량한 숲속 내음'],
          en: ['Gentle warm spice', 'Deep refreshing forest scent'],
          zh: ['温和辛香', '深邃清新的森林气息'],
          ja: ['ほのかなスパイシー感', '清々しい森林の香り']
        },
        steepColor: '#A3E635',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '숲속의 싱그러운 알싸함을 품은 생강나무꽃이 정체된 기운을 산뜻하게 순환시켜 줍니다.',
          en: 'Forest-fresh lindera blossoms gently circulate stagnant energy for a lighter body.',
          zh: '蕴含森林清新辛香的山胡椒花，轻快疏通滞留能量。',
          ja: '森の爽やかな香りを持つダンコウバイの花が、滞った気を軽やかに巡らせます。'
        }
      },
      {
        id: 'gujeolcho_forest',
        category: 'BASE',
        name: { ko: '구절초꽃차', en: 'Korean Dendranthema Tea (Gujeolcho)', zh: '九节草花茶', ja: '九節草(クジョルチョ)花茶' },
        benefits: {
          ko: ['체내 노폐물 정화', '면역 밸런스', '피로 회복'],
          en: ['Internal cleansing', 'Immune balance', 'Fatigue recovery'],
          zh: ['净化体内浊气', '平衡免疫力', '恢复疲劳'],
          ja: ['体内クレンズ', '免疫バランス', '疲労回復']
        },
        flavorNotes: {
          ko: ['깊고 그윽한 가을 들꽃향', '담백하고 쌉싸름한 단맛'],
          en: ['Deep autumn wildflower aroma', 'Clean bittersweet finish'],
          zh: ['深邃幽雅的秋日野花香', '醇净微苦回甘'],
          ja: ['奥深い秋の野花の香り', 'ほろ苦く清らかな甘み']
        },
        steepColor: '#CA8A04',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '가을 햇살을 머금은 구절초의 맑은 향기가 묵직해진 몸과 마음에 산뜻한 활력을 불어넣습니다.',
          en: 'Sun-kissed autumn wildflowers breathe fresh vitality into a heavy body and mind.',
          zh: '沐浴秋日阳光的九节草清香，为沉重的身心注入清爽活力。',
          ja: '秋の日差しを浴びた九節草の清らかな香りが、重くなった心身に爽やかな活力を吹き込みます。'
        }
      },
      {
        id: 'bellflower_forest',
        category: 'BLENDING',
        name: { ko: '도라지차', en: 'Bellflower Root Tea (Doraji)', zh: '桔梗茶', ja: 'キキョウ根茶 (トラジ茶)' },
        benefits: {
          ko: ['폐·기관지 보호', '사포닌 순환 촉진', '목 건강 케어'],
          en: ['Protects lungs & bronchi', 'Saponin circulation boost', 'Throat comfort'],
          zh: ['润肺护嗓', '皂苷促进循环', '舒缓咽喉'],
          ja: ['肺・気管支の保護', 'サポニンで巡り促進', '喉のケア']
        },
        flavorNotes: {
          ko: ['구수하고 진한 덖음 풍미', '은은한 단맛과 깔끔한 뒷맛'],
          en: ['Rich nutty roasted flavor', 'Mild sweetness & clean finish'],
          zh: ['浓郁醇香的烘焙风味', '淡雅回甘与清爽尾韵'],
          ja: ['香ばしく深い焙煎風味', 'ほのかな甘みとすっきりした後味']
        },
        steepColor: '#B45309',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분 30초', en: '3.5 mins', zh: '3分30秒', ja: '3分30秒' },
        description: {
          ko: '숲온형에게 특히 이로운 도라지의 사포닌 성분이 호흡기를 보호하고 답답한 속을 개운하게 풀어줍니다.',
          en: 'Rich in saponins ideal for Forest types, protecting the respiratory system and refreshing the chest.',
          zh: '富含对森林型尤佳的桔梗皂苷，呵护呼吸道并畅快胸臆。',
          ja: '森林型に特に良いキキョウのサポニンが呼吸器を守り、胸元をすっきりと整えます。'
        }
      },
      {
        id: 'green_tangerine',
        category: 'BLENDING',
        name: { ko: '청귤차', en: 'Green Tangerine Tea', zh: '青橘茶', ja: '青みかん茶 (青橘茶)' },
        benefits: {
          ko: ['비타민C 활력 보충', '피로 회복', '소화 촉진'],
          en: ['Vitamin C vitality boost', 'Fatigue relief', 'Aids digestion'],
          zh: ['补充维C活力', '消除疲劳', '促进消化'],
          ja: ['ビタミンC活力補給', '疲労回復', '消化促進']
        },
        flavorNotes: {
          ko: ['싱그러운 시트러스 향', '톡 쏘는 상큼함'],
          en: ['Fresh green citrus aroma', 'Bright tangy zest'],
          zh: ['清新柑橘果香', '酸甜爽口'],
          ja: ['爽やかなシトラスの香り', 'フレッシュな酸味']
        },
        steepColor: '#F59E0B',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '청정 자연에서 자란 청귤의 신선한 산미가 처진 기운을 깨우고 산뜻한 리듬을 만들어줍니다.',
          en: 'Crisp acidity of green tangerines awakens sluggish energy and creates a lively rhythm.',
          zh: '纯净青橘的新鲜果酸唤醒疲倦能量，带来轻快节奏。',
          ja: '清らかな自然で育った青みかんの爽やかな酸味が、沈んだ気を呼び覚まします。'
        }
      },
      {
        id: 'tangerine_peel_forest',
        category: 'BLENDING',
        name: { ko: '진피차', en: 'Aged Tangerine Peel Tea (Chenpi)', zh: '陈皮茶', ja: '陳皮茶' },
        benefits: {
          ko: ['습담 및 붓기 완화', '소화 순환 촉진', '가벼운 바디감'],
          en: ['Relieves bloating & heaviness', 'Aids digestion & flow', 'Lightens the body'],
          zh: ['理气祛湿消浮肿', '健脾助消化', '令身体轻盈'],
          ja: ['むくみ・重だるさ緩和', '消化と巡りの促進', '軽やかな身体へ']
        },
        flavorNotes: {
          ko: ['그윽한 시트러스 향', '달콤쌉싸름하고 부드러운 목넘김'],
          en: ['Aged citrus aroma', 'Bittersweet mellow body'],
          zh: ['醇厚柑橘香', '微甘微涩的顺滑口感'],
          ja: ['奥深い柑橘の香り', '甘酸っぱくまろやかなのど越し']
        },
        steepColor: '#FDBA74',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분 30초', en: '3.5 mins', zh: '3分30秒', ja: '3分30秒' },
        description: {
          ko: '잘 말린 귤피의 향긋한 기운이 정체된 수분과 노폐물 순환을 도와 몸을 한결 가볍게 해줍니다.',
          en: 'Mellow aged citrus aroma gently unclogs indigestion and lightens bodily stagnation.',
          zh: '时光沉淀的陈皮清香，温和疏解积滞，令身心轻盈通畅。',
          ja: '熟成された柑橘の温かなアロマが巡りを助け、身体を一段と軽やかに整えます。'
        }
      }
    ]
  },
  WIND: {
    name: {
      ko: '바람형',
      en: 'Wind Type (Baram)',
      zh: '清风型 (风型)',
      ja: '風型 (バラム型)'
    },
    title: {
      ko: 'WIND (소양인)',
      en: 'WIND (Soyang-in)',
      zh: 'WIND (少阳人)',
      ja: 'WIND (少陽人)'
    },
    tagline: {
      ko: '빠르게 움직이는 나에게 여유를',
      en: 'A gentle serenity for my swift rhythm',
      zh: '为快节奏的我带来柔和悠然',
      ja: '軽快に駆け抜ける私に、穏やかなゆとりを'
    },
    keywords: ['SOFT', 'RELAX', 'BALANCE'],
    description: {
      ko: '새로운 것을 두려워하지 않고 변화에 빠르게 적응하는 감각적인 성향입니다. 행동과 사고의 템포가 빠른 만큼 진액이 마르고 신경이 과민해지기 쉬우므로, 차분하게 긴장을 녹이고 부드러운 수분과 음기를 보충해 주는 꽃차가 완벽한 짝입니다.',
      en: 'Creative and intuitive, swiftly adapting to change with sharp senses. Because your tempo is high, you expend hydration and nerve energy quickly; gentle, soothing teas that restore calm and moisture are your ideal match.',
      zh: '直觉敏锐，热爱新奇事物，应变迅速。节奏较快容易消耗津液与精力，适合柔和温润、安抚神经、滋阴润燥的舒缓花茶。',
      ja: '好奇心旺盛で感性豊か、変化に素早く対応するスマートなタイプ。テンポが速いぶん潤いが不足し神経が高ぶりやすいため、緊張をやさしく解き潤いを補う花茶が最適です。'
    },
    color: '#3B82F6',
    secondaryColor: '#DBEAFE',
    teaColor: '#93C5FD',
    recommendedTeas: [
      {
        id: 'marigold_wind',
        category: 'BASE',
        name: { ko: '메리골드꽃차', en: 'Marigold Flower Tea', zh: '万寿菊花茶', ja: 'マリーゴールド花茶' },
        benefits: {
          ko: ['루테인 눈 피로 케어', '신경 긴장 완화', '은은한 열감 진정'],
          en: ['Lutein eye strain care', 'Soothes nervous tension', 'Calms subtle heat'],
          zh: ['叶黄素护眼明目', '舒缓神经紧张', '温和清热'],
          ja: ['ルテインで目の疲労ケア', '神経の緊張緩和', 'ほのかな熱を鎮める']
        },
        flavorNotes: {
          ko: ['화사하고 부드러운 풀꽃향', '담백하고 편안한 단맛'],
          en: ['Bright, soft floral note', 'Mild, comforting sweetness'],
          zh: ['明媚柔和的草花香', '恬淡舒适的回甘'],
          ja: ['華やかでやさしい草花の香り', '穏やかで心地よい甘み']
        },
        steepColor: '#FACC15',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '황금빛 메리골드가 빠르게 움직이며 지친 눈과 신경에 포근한 여유를 선물합니다.',
          en: 'Golden marigold blossoms bring cozy relaxation to tired eyes and fast-paced nerves.',
          zh: '金黄万寿菊为快节奏下疲惫的双眼与神经送上温柔闲适。',
          ja: '黄金色のマリーゴールドが、忙しく働く目と神経に穏やかなゆとりを届けます。'
        }
      },
      {
        id: 'snapdragon',
        category: 'BASE',
        name: { ko: '금어초꽃차', en: 'Snapdragon Flower Tea', zh: '金鱼草花茶', ja: 'キンギョソウ花茶' },
        benefits: {
          ko: ['기분 전환', '체내 열감 진정', '활력 회복'],
          en: ['Mood elevation', 'Calms internal heat', 'Restores vitality'],
          zh: ['愉悦转换心情', '平复体内燥热', '恢复生机'],
          ja: ['気分リフレッシュ', '体内の熱を鎮める', '活力回復']
        },
        flavorNotes: {
          ko: ['화사하고 싱그러운 꽃내음', '부드러운 목넘김'],
          en: ['Vibrant, fresh blossom aroma', 'Silky smooth finish'],
          zh: ['明丽清新的花香', '柔滑顺口的茶感'],
          ja: ['華やかで瑞々しい花の香り', 'なめらかなのど越し']
        },
        steepColor: '#F472B6',
        steepTemp: '90~100℃',
        steepTime: { ko: '2분 30초', en: '2.5 mins', zh: '2分30秒', ja: '2分30秒' },
        description: {
          ko: '살랑이는 바람처럼 화사한 꽃망울이 마음에 밝고 평온한 쉼표를 선사합니다.',
          en: 'Like a gentle breeze, radiant blossoms offer a bright and peaceful pause.',
          zh: '如微风拂面般娇艳的花朵，为心灵带来明亮平和的休止符。',
          ja: 'そよ風のように華やかな花びらが、心に明るく穏やかな休息を贈ります。'
        }
      },
      {
        id: 'cockscomb_wind',
        category: 'BASE',
        name: { ko: '맨드라미꽃차', en: 'Cockscomb Flower Tea', zh: '鸡冠花茶', ja: 'ケイトウ花茶' },
        benefits: {
          ko: ['상체 열감 완화', '안정감 부여', '맑은 컨디션 회복'],
          en: ['Eases upper heat', 'Provides grounding calm', 'Restores clear condition'],
          zh: ['缓解上身燥热', '赋予安定感', '恢复清爽状态'],
          ja: ['上半身の熱を緩和', '安定感をもたらす', 'クリアな調子へ']
        },
        flavorNotes: {
          ko: ['은은하고 달큰한 꽃향', '깔끔하고 맑은 뒷맛'],
          en: ['Subtle sweet floral scent', 'Clean, crisp finish'],
          zh: ['清雅微甜花香', '纯净清爽尾韵'],
          ja: ['ほのかに甘い花の香り', 'すっきり清らかな後味']
        },
        steepColor: '#EF4444',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '투명한 루비빛 수색이 들뜬 기운을 차분하게 갈무리하고 고요한 밸런스를 찾아줍니다.',
          en: 'Clear ruby infusion settles restless energy and restores tranquil balance.',
          zh: '通透的红宝石茶汤平复浮躁气息，找回静谧平衡。',
          ja: '透明なルビー色の水色が高ぶった気を静め、穏やかなバランスを取り戻します。'
        }
      },
      {
        id: 'pansy',
        category: 'BASE',
        name: { ko: '팬지꽃차', en: 'Pansy Flower Tea', zh: '三色堇花茶', ja: 'パンジー花茶' },
        benefits: {
          ko: ['항산화 안토시아닌 풍부', '피부 진정', '스트레스 해소'],
          en: ['Rich in anthocyanins', 'Skin soothing', 'Stress relief'],
          zh: ['富含抗氧化花青素', '舒缓肌肤', '释放压力'],
          ja: ['抗酸化アントシアニン豊富', '肌の鎮静', 'ストレス解消']
        },
        flavorNotes: {
          ko: ['달착지근한 꿀향', '매혹적인 플로럴 노트'],
          en: ['Delicate honey sweetness', 'Enchanting floral note'],
          zh: ['清甜蜜香', '迷人的花香层次'],
          ja: ['ほのかな蜂蜜の香り', '魅惑的なフローラルノート']
        },
        steepColor: '#818CF8',
        steepTemp: '90~100℃',
        steepTime: { ko: '2분 30초', en: '2.5 mins', zh: '2分30秒', ja: '2分30秒' },
        description: {
          ko: '신비롭고 몽환적인 수색이 눈을 즐겁게 하고, 날카로워진 신경을 유연하게 풀어줍니다.',
          en: 'An elegant violet infusion swirls in your cup, softening sharp nerves with creative calm.',
          zh: '优雅梦幻的紫罗兰茶汤赏心悦目，温柔抚平紧绷神经。',
          ja: '幻想的なバイオレットの水色が目を楽しませ、過敏になった神経をやさしく解きほぐします。'
        }
      },
      {
        id: 'goji',
        category: 'BLENDING',
        name: { ko: '구기자차', en: 'Goji Berry Tea', zh: '枸杞茶', ja: 'クコの実茶' },
        benefits: {
          ko: ['음기 보충 및 진액 생성', '눈의 피로 개선', '간 건강'],
          en: ['Replenishes vitality & fluids', 'Eases dry eyes', 'Antioxidant boost'],
          zh: ['滋补肝肾生津液', '缓解眼部干涩', '抗氧化滋养'],
          ja: ['潤いと気力の補給', '目の乾燥ケア', 'エイジングケア']
        },
        flavorNotes: {
          ko: ['자연스러운 단맛', '구수하고 깊은 덖음 풍미'],
          en: ['Natural delicate sweetness', 'Deep roasted nutty finish'],
          zh: ['自然甘甜', '醇厚焙烤风味'],
          ja: ['自然な優しい甘み', '香ばしく奥深いコク']
        },
        steepColor: '#F97316',
        steepTemp: '90~100℃',
        steepTime: { ko: '4분', en: '4 mins', zh: '4分钟', ja: '4分' },
        description: {
          ko: '열정적으로 소모된 몸의 진액을 달콤하게 채워 생기 있는 촉촉함을 되찾아줍니다.',
          en: 'Replenishes expended bodily fluids with subtle sweetness, restoring vibrant moisture.',
          zh: '甘美滋养身体消耗的津液，重现水润活力生机。',
          ja: '日々の活動で失われがちな潤いを甘やかに満たし、みずみずしい元気をチャージします。'
        }
      },
      {
        id: 'lemongrass_wind',
        category: 'BLENDING',
        name: { ko: '레몬그라스차', en: 'Lemongrass Tea', zh: '柠檬草茶', ja: 'レモングラス茶' },
        benefits: {
          ko: ['긴장 이완 및 리프레시', '소화 정돈', '기분 전환'],
          en: ['Relaxes tension & refreshes', 'Soothes digestion', 'Mood reset'],
          zh: ['放松紧绷与清新醒神', '调理消化', '愉悦心情'],
          ja: ['緊張緩和＆リフレッシュ', '消化を整える', '気分転換']
        },
        flavorNotes: {
          ko: ['상쾌한 레몬 허브향', '깔끔하고 맑은 피니시'],
          en: ['Crisp lemon herbal scent', 'Clean, bright finish'],
          zh: ['清爽柠檬草本香', '干净澄澈的回味'],
          ja: ['爽やかなレモンハーブ香', 'すっきりクリアな後味']
        },
        steepColor: '#FDE047',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '싱그러운 레몬그라스 노트가 과열된 사고의 템포를 산뜻하고 부드럽게 정돈해 줍니다.',
          en: 'Fresh lemongrass notes gently organize and cool a fast-spinning mind.',
          zh: '清新的柠檬草香气温和梳理过快运转的思绪。',
          ja: '瑞々しいレモングラスの香りが、速くなった思考のテンポを心地よく整えます。'
        }
      },
      {
        id: 'burdock_wind',
        category: 'BLENDING',
        name: { ko: '우엉차', en: 'Roasted Burdock Root Tea', zh: '牛蒡茶', ja: 'ごぼう茶' },
        benefits: {
          ko: ['하체 중심 기운 안정', '열감 완화 및 정화', '장 건강 케어'],
          en: ['Grounds lower-body energy', 'Cools & purifies', 'Digestive wellness'],
          zh: ['稳固下焦能量', '清热净化', '呵护肠道健康'],
          ja: ['下半身の気を安定させる', '熱感の緩和と浄化', '腸内ケア']
        },
        flavorNotes: {
          ko: ['구수하고 깊은 덖음 풍미', '은은한 대지의 단맛'],
          en: ['Deep, nutty roasted aroma', 'Earthy natural sweetness'],
          zh: ['醇厚浓郁的烘焙香气', '大地般的自然甘甜'],
          ja: ['香ばしく深い焙煎の風味', '大地のほのかな甘み']
        },
        steepColor: '#B45309',
        steepTemp: '90~100℃',
        steepTime: { ko: '4분', en: '4 mins', zh: '4分钟', ja: '4分' },
        description: {
          ko: '대지의 기운을 품은 구수한 우엉차가 바람형의 가벼워지기 쉬운 에너지를 차분하게 잡아줍니다.',
          en: 'Earthy roasted burdock anchors the swift, airy energy of Wind types.',
          zh: '蕴含大地能量的醇香牛蒡茶，稳稳涵养清风型易浮动的气机。',
          ja: '大地の恵みを宿した香ばしいごぼう茶が、風型の浮きやすいエネルギーを落ち着かせます。'
        }
      }
    ]
  },
  WARM: {
    name: {
      ko: '온담형',
      en: 'Warm Type (On-dam)',
      zh: '暖蕴型 (温淡型)',
      ja: '温胆型 (オンダム型)'
    },
    title: {
      ko: 'WARM (소음인)',
      en: 'WARM (Soeum-in)',
      zh: 'WARM (少阴人)',
      ja: 'WARM (少陰人)'
    },
    tagline: {
      ko: '섬세한 나에게 따뜻한 온기를',
      en: 'Gentle warmth for my delicate soul',
      zh: '为细腻的我送去融融暖意',
      ja: '繊細な私に、包み込むような温もりを'
    },
    keywords: ['WARM', 'COMFORT', 'ENERGY'],
    description: {
      ko: '신중하고 섬세하며 익숙한 환경에서 나만의 리듬을 찾는 사려 깊은 성향입니다. 소화기가 약하고 손발이 쉽게 차가워질 수 있으므로, 굳어진 속을 부드럽게 데워주고 몸 안 가득 온기를 채워주는 따스한 성질의 꽃차가 큰 위로가 됩니다.',
      en: 'Thoughtful, meticulous, and attuned to comfortable routines. Prone to a cold digestive system and chilly hands/feet, teas with warming qualities that comfort the stomach and kindle vitality are your best friends.',
      zh: '心思细腻、深思熟虑，在熟悉的环境中更能从容自在。脾胃偏寒且易手足冰凉，温中散寒、护胃暖身的温性花茶最能抚慰您的身心。',
      ja: '思慮深く繊細で、慣れ親しんだ環境で心地よいペースを保つタイプ。胃腸が冷えやすく手足の冷えが気になるため、お腹を温めて巡りを促すポカポカ花茶が最高の味方です。'
    },
    color: '#D97706',
    secondaryColor: '#FEF3C7',
    teaColor: '#FBBF24',
    recommendedTeas: [
      {
        id: 'gujeolcho_warm',
        category: 'BASE',
        name: { ko: '구절초꽃차', en: 'Korean Dendranthema Tea (Gujeolcho)', zh: '九节草花茶', ja: '九節草(クジョルチョ)花茶' },
        benefits: {
          ko: ['손발 및 아랫배 온기 보충', '소화기 안정', '피로 회복'],
          en: ['Warms hands, feet & abdomen', 'Comforts digestion', 'Fatigue recovery'],
          zh: ['温暖手足与下腹', '温和护胃', '恢复疲劳'],
          ja: ['手足とお腹の温活', '胃腸の安定', '疲労回復']
        },
        flavorNotes: {
          ko: ['쌉쌀하면서도 깊은 가을 들꽃향', '따스하고 달큰한 여운'],
          en: ['Deep bittersweet wildflower aroma', 'Warm, sweet lingering finish'],
          zh: ['微苦深邃的秋日野花香', '温润甘甜的余韵'],
          ja: ['ほろ苦く奥深い秋の野花の香り', '温かく甘い余韻']
        },
        steepColor: '#CA8A04',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '가을 들녘의 햇살을 머금은 구절초가 차가워지기 쉬운 아랫배를 편안하고 따스하게 품어줍니다.',
          en: 'Autumn sun-soaked blossoms warmly embrace a chilly abdomen and soothe the body.',
          zh: '饱含秋日暖阳的九节草，温柔呵护易凉的小腹。',
          ja: '秋の日差しを宿した九節草が、冷えやすいお腹を心地よく温めます。'
        }
      },
      {
        id: 'magnolia_warm',
        category: 'BASE',
        name: { ko: '목련꽃차', en: 'Magnolia Flower Tea', zh: '辛夷木莲花茶', ja: 'モクレン花茶' },
        benefits: {
          ko: ['따뜻한 기운 순환', '코와 호흡기 보호', '냉기 완화'],
          en: ['Warm energy circulation', 'Nasal & respiratory care', 'Eases chilliness'],
          zh: ['温和疏通气血', '呵护鼻腔与呼吸道', '驱散寒意'],
          ja: ['温かな気の巡り', '鼻と呼吸器の保護', '冷えの緩和']
        },
        flavorNotes: {
          ko: ['은은한 알싸함과 단맛', '포근한 꽃내음'],
          en: ['Subtle warm spice & sweetness', 'Cozy floral aroma'],
          zh: ['淡淡辛香与回甘', '温柔馥郁的花香'],
          ja: ['ほのかな辛みと甘み', '包み込むような花の香り']
        },
        steepColor: '#FDE047',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '따스한 성질의 백목련 꽃봉오리가 움츠러든 몸에 은은한 온기와 활력을 불어넣습니다.',
          en: 'Warm-natured white magnolia buds breathe gentle heat and vitality into a chilled body.',
          zh: '温性的白木莲花蕾为畏寒的身体注入融融暖意与生机。',
          ja: '温かい性質を持つ白木蓮の蕾が、縮こまった身体に穏やかな温もりと活力を与えます。'
        }
      },
      {
        id: 'chamomile_warm',
        category: 'BASE',
        name: { ko: '캐모마일꽃차', en: 'Chamomile Flower Tea', zh: '洋甘菊花茶', ja: 'カモミール花茶' },
        benefits: {
          ko: ['예민한 위장 보호', '심신 이완 및 숙면', '포근한 안정감'],
          en: ['Soothes sensitive stomach', 'Deep relaxation & sleep', 'Cozy emotional calm'],
          zh: ['呵护敏感肠胃', '放松身心助眠', '带来温暖安心感'],
          ja: ['デリケートな胃腸をケア', '心身の緩和と安眠', 'ほっとする安心感']
        },
        flavorNotes: {
          ko: ['달콤한 사과향', '부드럽고 따뜻한 바디감'],
          en: ['Sweet apple aroma', 'Soft, comforting warm body'],
          zh: ['香甜苹果风味', '柔和温暖的茶汤质感'],
          ja: ['甘いリンゴの香り', 'やわらかく温かい口当たり']
        },
        steepColor: '#FACC15',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '부드러운 사과향의 캐모마일이 섬세하고 예민한 소화기와 마음을 따뜻하게 다독여줍니다.',
          en: 'Gentle apple-scented chamomile warmly comforts delicate digestion and a sensitive heart.',
          zh: '散发柔和苹果香的洋甘菊，温暖抚慰细腻敏感的肠胃与心灵。',
          ja: 'やさしいリンゴ香るカモミールが、繊細な胃腸と心を温かくいたわります。'
        }
      },
      {
        id: 'plum_blossom_warm',
        category: 'BASE',
        name: { ko: '매화차', en: 'Plum Blossom Tea (Maehwa)', zh: '梅花茶', ja: '梅花茶 (ウメの花茶)' },
        benefits: {
          ko: ['체기 및 소화 불량 완화', '기분 정화', '맑은 생기 충전'],
          en: ['Relieves indigestion', 'Refreshes mood', 'Restores clear vitality'],
          zh: ['舒缓积食与消化不良', '澄净心绪', '焕发清新活力'],
          ja: ['消化不良の緩和', '気分の浄化', '清らかな生気チャージ']
        },
        flavorNotes: {
          ko: ['고결하고 은은한 매화향', '산뜻하고 부드러운 단맛'],
          en: ['Noble, delicate plum blossom scent', 'Crisp, smooth sweetness'],
          zh: ['清雅高洁的梅花幽香', '清爽柔润的甘甜'],
          ja: ['気高くほのかな梅花の香り', '爽やかでやさしい甘み']
        },
        steepColor: '#FEF08A',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '추위를 이기고 피어난 매화의 향기로운 기운이 막힌 속을 부드럽게 풀어주고 생기를 채워줍니다.',
          en: 'Blossoming through winter chill, fragrant plum flowers gently ease digestion and awaken vitality.',
          zh: '傲雪绽放的梅花芬芳，温柔疏解肠胃郁结，充盈生机。',
          ja: '寒さを乗り越えて咲く梅の芳しい気が、つかえたお腹をやさしく解きほぐします。'
        }
      },
      {
        id: 'ginger',
        category: 'BLENDING',
        name: { ko: '생강차', en: 'Ginger Tea', zh: '生姜茶', ja: '生姜茶 (ジンジャーティー)' },
        benefits: {
          ko: ['체온 상승', '소화 기능 강화', '면역력 증진'],
          en: ['Elevates body temperature', 'Fortifies digestive fire', 'Immune defense'],
          zh: ['温中散寒升体温', '健胃消食', '提高免疫力'],
          ja: ['体温アップ', '消化サポート', '免疫力の向上']
        },
        flavorNotes: {
          ko: ['알싸하고 깊은 진저 스파이스', '달콤하게 감싸는 잔향'],
          en: ['Warm piquant ginger spice', 'Comforting sweet undertone'],
          zh: ['辛香醇厚的生姜风味', '甘温柔和的余香'],
          ja: ['ピリリと心地よい生姜の刺激', '甘く温かい余韻']
        },
        steepColor: '#FDE047',
        steepTemp: '90~100℃',
        steepTime: { ko: '4분', en: '4 mins', zh: '4分钟', ja: '4分' },
        description: {
          ko: '한 모금 머금는 순간 가슴속부터 아랫배까지 따스한 온도가 차오르며 속이 편안해집니다.',
          en: 'A single sip warms the chest down to the abdomen, instantly comforting chilly digestion.',
          zh: '初啜一口，融融暖意从心口涌向小腹，令肠胃顿感舒适。',
          ja: '一口飲むたびに胸からお腹の底までポカポカと温まり、内側からほっと安らぎます。'
        }
      },
      {
        id: 'mugwort',
        category: 'BLENDING',
        name: { ko: '쑥차', en: 'Korean Mugwort Tea (Ssuk)', zh: '艾草茶', ja: 'よもぎ茶' },
        benefits: {
          ko: ['하복부 냉증 개선', '여성 건강 케어', '체내 정화'],
          en: ['Relieves cold lower abdomen', 'Female wellness care', 'Gentle internal detox'],
          zh: ['温经散寒暖下腹', '呵护女性健康', '排毒净体'],
          ja: ['下腹部の冷え改善', '女性の温活ケア', '体内クレンズ']
        },
        flavorNotes: {
          ko: ['구수하고 쌉싸름한 야생 쑥향', '깊은 숲의 바디감'],
          en: ['Nutty, bittersweet wild herbal scent', 'Deep earthy richness'],
          zh: ['浓郁醇苦的野生艾香', '沉稳厚实的本草韵味'],
          ja: ['香ばしくほろ苦い野草の香り', '奥深い大地のコク']
        },
        steepColor: '#86EFAC',
        steepTemp: '90~100℃',
        steepTime: { ko: '3분 30초', en: '3.5 mins', zh: '3分30秒', ja: '3分30秒' },
        description: {
          ko: '해풍을 맞고 자란 토종 쑥의 깊은 온기가 손발 끝까지 따스한 혈색을 돌게 해줍니다.',
          en: 'Nurtured by sea breezes, wild mugwort radiates deep thermal vitality to the fingertips and toes.',
          zh: '沐浴海风生长的道地艾草，将醇厚暖意送至指尖足底，带来健康红润。',
          ja: '潮風に育まれたよもぎの深い温もりが、指先や足先まで温かな血色を巡らせます。'
        }
      },
      {
        id: 'mistletoe_warm',
        category: 'BLENDING',
        name: { ko: '겨우살이차', en: 'Mistletoe Tea', zh: '槲寄生茶', ja: 'ヤドリギ茶' },
        benefits: {
          ko: ['기력 회복 및 면역 강화', '근골격 및 혈행 보강', '심신 안정'],
          en: ['Restores stamina & immunity', 'Supports circulation & joints', 'Calms mind & body'],
          zh: ['恢复元气增强免疫', '强筋健骨活血', '安神定志'],
          ja: ['気力回復・免疫力強化', '巡りと身体のサポート', '心身の安定']
        },
        flavorNotes: {
          ko: ['구수하고 은은한 나무 내음', '부드럽고 깊은 감칠맛'],
          en: ['Subtle roasted woody aroma', 'Smooth, deep savory finish'],
          zh: ['醇和淡雅的木质清香', '柔顺深邃的回甘'],
          ja: ['香ばしくほのかな木の香り', 'まろやかで深い旨み']
        },
        steepColor: '#B45309',
        steepTemp: '90~100℃',
        steepTime: { ko: '4분', en: '4 mins', zh: '4分钟', ja: '4分' },
        description: {
          ko: '한겨울에도 푸르름을 잃지 않는 겨우살이의 강인한 생명력이 쉽게 지치는 온담형의 기력을 든든하게 채워줍니다.',
          en: 'Evergreen mistletoe vitalizes easily fatigued Warm types with enduring winter resilience.',
          zh: '严冬亦常青的槲寄生蕴含充沛生命力，稳稳补充暖蕴型易消耗的元气。',
          ja: '真冬でも緑を保つヤドリギの力強い生命力が、疲れやすい温胆型の気力をしっかりと満たします。'
        }
      }
    ]
  }
};
