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
        name: {
          ko: '맨드라미꽃차',
          en: 'Cockscomb Flower Tea',
          zh: '鸡冠花茶',
          ja: 'ケイトウ花茶'
        },
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
        steepTemp: '95℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '강렬하고 화사한 루비빛 수색이 매력적이며, 분주했던 마음에 차분한 휴식을 선물합니다.',
          en: 'Its vivid ruby hue is captivating, offering serene relaxation to a busy mind.',
          zh: '艳丽剔透的红宝石色茶汤，为忙碌的心灵带来宁静的休歇。',
          ja: '鮮やかなルビー色の水色が美しく、忙しい心に静かな休息を届けます。'
        }
      },
      {
        id: 'magnolia',
        name: {
          ko: '목련꽃차',
          en: 'Magnolia Flower Tea',
          zh: '辛夷木莲花茶',
          ja: 'モクレン花茶'
        },
        benefits: {
          ko: ['호흡기 및 비염 완화', '두통 완화', '기분 전환'],
          en: ['Respiratory relief', 'Eases tension headaches', 'Mood refresher'],
          zh: ['舒缓呼吸道与鼻炎', '缓解头痛', '提神醒脑'],
          ja: ['呼吸器と鼻のケア', '頭痛の緩和', '気分転換']
        },
        flavorNotes: {
          ko: ['달콤한 박하향', '알싸하면서도 산뜻한 매화향'],
          en: ['Sweet minty note', 'Subtly spiced crisp plum aroma'],
          zh: ['微甜薄荷香', '辛香清冽的梅花风味'],
          ja: ['甘いミントの香り', 'ピリッと爽やかな花の香り']
        },
        steepColor: '#FDE047',
        steepTemp: '90℃',
        steepTime: { ko: '2분 30초', en: '2.5 mins', zh: '2分30秒', ja: '2分30秒' },
        description: {
          ko: '봄의 시작을 알리는 백목련 꽃봉오리로 만들어 은은한 매운 향과 달콤함이 머리를 상쾌하게 비워줍니다.',
          en: 'Crafted from early spring magnolia buds, its gentle spice and sweetness clear and refresh the head.',
          zh: '选用初春白木莲花蕾，淡淡的辛香与甘甜让头脑顿感清爽。',
          ja: '春を告げる白木蓮の蕾で作られ、ほのかなスパイシーさと甘みで頭をすっきりとリフレッシュします。'
        }
      },
      {
        id: 'lindera',
        name: {
          ko: '생강나무꽃차',
          en: 'Lindera Flower Tea',
          zh: '山胡椒花茶',
          ja: 'ダンコウバイ花茶'
        },
        benefits: {
          ko: ['산후통 및 어혈 완화', '근육 이완', '생기 순환'],
          en: ['Relieves stiffness', 'Muscle relaxation', 'Vitality booster'],
          zh: ['活血舒经', '肌肉放松', '恢复活力'],
          ja: ['こわばりの緩和', '筋肉の弛緩', '巡りのサポート']
        },
        flavorNotes: {
          ko: ['은은한 알싸함', '깊고 청량한 숲속 흙내음'],
          en: ['Gentle warm spice', 'Deep refreshing forest earthiness'],
          zh: ['温和辛香', '深邃清新的森林气息'],
          ja: ['ほのかなスパイシー感', '清々しい森林の香り']
        },
        steepColor: '#FEF08A',
        steepTemp: '90℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '자연의 알싸하고 따스한 활력이 긴장된 상체를 풀어주고 경직된 몸을 부드럽게 이완시켜 줍니다.',
          en: 'Natural gentle heat and vitality soothe a tense upper body and relax stiff muscles.',
          zh: '天然的微温活力舒缓紧绷的上身，温柔放松僵硬的身体。',
          ja: '自然の温かな活力が緊張した上半身をほぐし、こわばった身体を心地よく緩めます。'
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
        id: 'lotus_leaf',
        name: {
          ko: '연잎차',
          en: 'Lotus Leaf Tea',
          zh: '荷叶茶',
          ja: '蓮の葉茶'
        },
        benefits: {
          ko: ['체내 독소 및 붓기 배출', '마음 진정', '갈증 해소'],
          en: ['Detoxification & debloating', 'Mind settling', 'Quenches thirst'],
          zh: ['清热祛湿排浮肿', '宁心静神', '生津止渴'],
          ja: ['むくみ解消・デトックス', '心の安定', '渇きを癒す']
        },
        flavorNotes: {
          ko: ['은은한 덖음향', '맑고 싱그러운 풀내음'],
          en: ['Gentle roasted aroma', 'Crisp green earthy note'],
          zh: ['醇和炒香', '清香自然的草本风味'],
          ja: ['香ばしい焙煎香', '爽やかな青葉の香り']
        },
        steepColor: '#A7F3D0',
        steepTemp: '85℃',
        steepTime: { ko: '2분', en: '2 mins', zh: '2分钟', ja: '2分' },
        description: {
          ko: '진흙 속에서 피어난 연잎의 순수한 기운이 몸속 묵직함을 가볍게 털어내 줍니다.',
          en: 'Pure essence from lotus leaves clears away sluggishness and renews bodily lightness.',
          zh: '出水荷叶的天然纯净能量，轻柔涤荡身体的沉重与滞留。',
          ja: '泥の中から清らかに咲く蓮の葉が、体の重だるさを軽やかに整えます。'
        }
      },
      {
        id: 'chrysanthemum',
        name: {
          ko: '국화꽃차',
          en: 'Chrysanthemum Tea',
          zh: '金丝皇菊茶',
          ja: '菊花茶'
        },
        benefits: {
          ko: ['눈의 피로 회복', '머리를 맑게 함', '간열 해소'],
          en: ['Relieves eye fatigue', 'Clears mental fog', 'Soothes inner heat'],
          zh: ['清肝明目', '清醒头脑', '散风解热'],
          ja: ['目の疲れを癒す', '頭部をすっきり整える', '体の熱を鎮める']
        },
        flavorNotes: {
          ko: ['그윽한 가을 국화향', '입안 가득 번지는 청아한 단맛'],
          en: ['Deep autumn floral note', 'Clean lingering sweetness'],
          zh: ['悠远幽雅的菊香', '满口回甘的清润'],
          ja: ['奥深い秋菊の香り', '口いっぱいに広がる清らかな甘み']
        },
        steepColor: '#FDE68A',
        steepTemp: '90℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '황금빛 꽃송이가 피어오르며 침침했던 시야와 무거웠던 머리를 시원하게 열어줍니다.',
          en: 'Golden blossoms unfurl in hot water, refreshing blurry eyes and clearing mental fog.',
          zh: '金色花瓣在茶水中缓缓绽放，瞬间澄清双眼与沉重的思绪。',
          ja: '黄金の花びらが咲き誇り、かすみがちな瞳と重い頭をすっきりと晴れやかにします。'
        }
      },
      {
        id: 'tangerine_peel',
        name: {
          ko: '진피차 (말린 귤껍질)',
          en: 'Aged Tangerine Peel Tea (Chenpi)',
          zh: '陈皮茶',
          ja: '陳皮茶 (みかんの皮)'
        },
        benefits: {
          ko: ['소화 촉진', '가래 및 기관지 완화', '생기 활력'],
          en: ['Aids digestion', 'Respiratory ease', 'Energizing wellness'],
          zh: ['理气健脾助消化', '润燥化痰', '振奋精神'],
          ja: ['消化促進', '喉・気管支のケア', '元気チャージ']
        },
        flavorNotes: {
          ko: ['그윽한 시트러스 향', '달콤쌉싸름하고 부드러운 목넘김'],
          en: ['Aged citrus aroma', 'Bittersweet mellow body'],
          zh: ['醇厚柑橘香', '微甘微涩的顺滑口感'],
          ja: ['奥深い柑橘の香り', '甘酸っぱくまろやかなのど越し']
        },
        steepColor: '#FDBA74',
        steepTemp: '95℃',
        steepTime: { ko: '4분', en: '4 mins', zh: '4分钟', ja: '4分' },
        description: {
          ko: '오랜 시간 숙성된 귤피의 따스한 아로마가 막힌 속을 편안하게 뚫어줍니다.',
          en: 'Mellow aged citrus aroma gently unclogs indigestion and breathes warmth throughout.',
          zh: '时光沉淀的陈皮陈香，温和疏解胃腹积滞，令身心通畅。',
          ja: 'じっくり熟成された柑橘の温かなアロマが、つかえたお腹を心地よく整えます。'
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
        id: 'chamomile',
        name: {
          ko: '캐모마일꽃차',
          en: 'Chamomile Flower Tea',
          zh: '洋甘菊花茶',
          ja: 'カモミール花茶'
        },
        benefits: {
          ko: ['심신 안정 및 불안 완화', '숙면 유도', '위장 긴장 완화'],
          en: ['Stress relief & relaxation', 'Supports sound sleep', 'Soothes stomach cramps'],
          zh: ['平复心绪缓解焦虑', '助眠安神', '舒缓胃肠痉挛'],
          ja: ['リラックス・不安緩和', '安眠サポート', '胃腸の緊張緩和']
        },
        flavorNotes: {
          ko: ['은은한 사과향', '포근하고 부드러운 바디감'],
          en: ['Gentle sweet apple note', 'Warm, velvety mouthfeel'],
          zh: ['清淡甜美的苹果香', '温润柔和的茶韵'],
          ja: ['やさしいリンゴの香り', 'まろやかで温かな口当たり']
        },
        steepColor: '#FEF08A',
        steepTemp: '90℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '달콤한 사과향이 곤두선 신경을 포근하게 감싸 안으며 평온한 밤을 선물합니다.',
          en: 'Sweet apple aroma warmly embraces frayed nerves, delivering peaceful serenity.',
          zh: '甘甜的苹果花香如温暖拥抱，抚慰紧绷神经，带给您宁静祥和的夜晚。',
          ja: '甘いリンゴの香りが張り詰めた神経をやさしく包み込み、安らかな夜を贈ります。'
        }
      },
      {
        id: 'goji',
        name: {
          ko: '구기자차',
          en: 'Goji Berry Tea',
          zh: '枸杞茶',
          ja: 'クコの実茶'
        },
        benefits: {
          ko: ['신장 및 진액 보충', '눈의 건조 완화', '노화 방지'],
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
        steepTemp: '95℃',
        steepTime: { ko: '4분', en: '4 mins', zh: '4分钟', ja: '4分' },
        description: {
          ko: '열정적으로 소모된 몸의 진액을 달콤하게 채워 생기 있는 촉촉함을 되찾아줍니다.',
          en: 'Replenishes expended bodily fluids with subtle sweetness, restoring vibrant moisture.',
          zh: '甘美滋养身体消耗的津液，重现水润活力生机。',
          ja: '日々の活動で失われがちな潤いを甘やかに満たし、みずみずしい元気をチャージします。'
        }
      },
      {
        id: 'pansy',
        name: {
          ko: '팬지꽃차',
          en: 'Pansy Flower Tea',
          zh: '三色堇花茶',
          ja: 'パンジー花茶'
        },
        benefits: {
          ko: ['피부 진정', '기관지 보호', '시각적 힐링'],
          en: ['Skin soothing', 'Throat comfort', 'Visual relaxation'],
          zh: ['舒缓肌肤', '润护咽喉', '赏心悦目的视觉疗愈'],
          ja: ['肌の鎮静', '喉の保護', '美しい色彩の癒やし']
        },
        flavorNotes: {
          ko: ['산뜻하고 맑은 풀꽃향', '은은한 단맛'],
          en: ['Crisp wild blossom scent', 'Delicate mild sweetness'],
          zh: ['清新旷野花香', '恬淡回甘'],
          ja: ['清々しい野花の香り', 'ほのかな甘み']
        },
        steepColor: '#818CF8',
        steepTemp: '85℃',
        steepTime: { ko: '2분', en: '2 mins', zh: '2分钟', ja: '2分' },
        description: {
          ko: '우아한 보랏빛 수색이 찻잔 속에 번지며 지친 마음에 화사한 영감을 채워줍니다.',
          en: 'An elegant violet infusion swirls in your cup, sparking fresh creative inspiration.',
          zh: '优雅的紫罗兰色茶汤在杯中漾开，为疲惫的心灵注入灵感。',
          ja: '優美なバイオレットの水色が広がり、疲れた心に華やかなインスピレーションを灯します。'
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
        id: 'rose',
        name: {
          ko: '장미꽃차',
          en: 'Rose Blossom Tea',
          zh: '玫瑰花茶',
          ja: 'バラ花茶'
        },
        benefits: {
          ko: ['기혈 순환 촉진', '여성 호르몬 밸런스', '피부 생기'],
          en: ['Boosts energy & blood flow', 'Hormonal balance', 'Radiant skin complexion'],
          zh: ['疏肝理气活血', '调节女性内分泌', '润泽红润气色'],
          ja: ['巡りの促進', '女性のリズムサポート', '素肌の透明感']
        },
        flavorNotes: {
          ko: ['고혹적이고 풍성한 장미향', '우아하고 부드러운 산미'],
          en: ['Enchanting full rose scent', 'Elegant delicate tang'],
          zh: ['馥郁高贵的玫瑰花香', '优雅柔和的微酸回甘'],
          ja: ['魅惑的で芳醇なバラの香り', '上品でほのかな酸味']
        },
        steepColor: '#FB7185',
        steepTemp: '90℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '붉은 꽃잎이 전하는 따스한 에너지가 굳어있던 몸을 녹이고 화사한 생기를 불어넣습니다.',
          en: 'Warm energy radiating from red petals gently melts chilliness and restores a youthful glow.',
          zh: '红艳花瓣传递的温润能量，融化体内寒气，绽放迷人好气色。',
          ja: '紅の花びらがもたらす温かなエナジーが、冷えた体を芯から温め華やかな元気を呼び覚まします。'
        }
      },
      {
        id: 'ginger',
        name: {
          ko: '생강꽃차 / 생각차',
          en: 'Ginger Flower & Root Tea',
          zh: '姜花暖身茶',
          ja: '生姜花茶 / ジンジャーティー'
        },
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
        steepTemp: '95℃',
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
        name: {
          ko: '강화 쑥차',
          en: 'Korean Mugwort Tea (Ssuk)',
          zh: '江华艾草茶',
          ja: '江華よもぎ茶'
        },
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
        steepTemp: '90℃',
        steepTime: { ko: '3분', en: '3 mins', zh: '3分钟', ja: '3分' },
        description: {
          ko: '해풍을 맞고 자란 토종 쑥의 깊은 온기가 손발 끝까지 따스한 혈색을 돌게 해줍니다.',
          en: 'Nurtured by sea breezes, wild mugwort radiates deep thermal vitality to the fingertips and toes.',
          zh: '沐浴海风生长的道地艾草，将醇厚暖意送至指尖足底，带来健康红润。',
          ja: '潮風に育まれたよもぎの深い温もりが、指先や足先まで温かな血色を巡らせます。'
        }
      }
    ]
  }
};
