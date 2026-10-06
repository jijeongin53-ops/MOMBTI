// 플루니티 몸BTI 문항 4개 국어(한국어, 영어, 중국어, 일본어) 다국어 데이터 지원
import { Language } from '@/lib/i18n/translations';
import { MomBtiType } from '@/lib/types';

export interface I18nQuestionOption {
  type: MomBtiType;
  label: string;
  text: Record<Language, string>;
}

export interface I18nQuestion {
  id: number;
  category: 'BODY' | 'LIFESTYLE';
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  options: I18nQuestionOption[];
}

export const I18N_QUESTIONS: I18nQuestion[] = [
  {
    id: 1,
    category: 'BODY',
    title: {
      ko: '평소 체감 온도는 어떤 편인가요?',
      en: 'How do you usually perceive body temperature?',
      zh: '您平时的体感温度是怎样的？',
      ja: '普段の体感温度はどのような傾向ですか？'
    },
    subtitle: {
      ko: '일상에서 체온에 대한 나의 자연스러운 반응을 골라주세요.',
      en: 'Choose your natural reaction to temperature in daily life.',
      zh: '请选择您在日常生活中对温度的自然反应。',
      ja: '日常での体温に対する自然な傾向をお選びください。'
    },
    options: [
      {
        type: 'SUN',
        label: 'A',
        text: {
          ko: '더위를 많이 타고 상체에 열이 자주 오르는 편이다.',
          en: 'Sensitive to heat; heat frequently rises to upper body.',
          zh: '比较怕热，上身常有燥热感。',
          ja: '暑がりで、上半身に熱がこもりやすい。'
        }
      },
      {
        type: 'FOREST',
        label: 'B',
        text: {
          ko: '땀이 잘 나는 편이며, 추위와 더위 모두 무난히 견딘다.',
          en: 'Sweats easily; tolerates both heat and cold relatively well.',
          zh: '容易出汗，冷热都能较好适应。',
          ja: '汗をかきやすく、寒暖どちらも比較的適応できる。'
        }
      },
      {
        type: 'WIND',
        label: 'C',
        text: {
          ko: '활동하면 금방 더워지는 편이다.',
          en: 'Quickly feels warm when moving or active.',
          zh: '活动时很快会感到发热。',
          ja: '活動するとすぐに体が温まりやすい。'
        }
      },
      {
        type: 'WARM',
        label: 'D',
        text: {
          ko: '손발이 차고 추위를 많이 타며 찬바람에 민감하다.',
          en: 'Hands and feet are cold; sensitive to chills and cold wind.',
          zh: '手脚冰凉，比较怕冷，对冷风敏感。',
          ja: '手足が冷えやすく、寒がりで冷たい風に敏感。'
        }
      }
    ]
  },
  {
    id: 2,
    category: 'BODY',
    title: {
      ko: '평소 나의 에너지 수준은 어떤가요?',
      en: 'What is your typical energy pattern throughout the day?',
      zh: '您平时的精力水平是怎样的？',
      ja: '普段のエネルギーレベルはどのようなタイプですか？'
    },
    subtitle: {
      ko: '하루 동안 에너지가 소모되고 채워지는 패턴을 살펴보세요.',
      en: 'Observe how your body drains and restores energy.',
      zh: '观察您一天中精力的消耗与恢复规律。',
      ja: '一日の中でエネルギーが消費・回復するパターンを見つめてみてください。'
    },
    options: [
      {
        type: 'SUN',
        label: 'A',
        text: {
          ko: '에너지가 넘치고 거침없는 추진력을 발휘한다.',
          en: 'Overflowing with energy and strong forward drive.',
          zh: '精力充沛，拥有很强的决断与行动力。',
          ja: 'エネルギーにあふれ、力強い推進力を発揮する。'
        }
      },
      {
        type: 'FOREST',
        label: 'B',
        text: {
          ko: '지구력과 끈기는 좋지만 한번 지치면 몸이 묵직해진다.',
          en: 'Great stamina, but body feels very heavy once exhausted.',
          zh: '耐力极佳，但一旦劳累身体便感觉格外沉重。',
          ja: '持久力はあるが、一度疲れると体が重くなりやすい。'
        }
      },
      {
        type: 'WIND',
        label: 'C',
        text: {
          ko: '순간 집중력과 반응이 빠르지만 에너지를 쉽게 소진한다.',
          en: 'Quick burst of focus, but drains stamina rapidly.',
          zh: '瞬间专注与反应迅速，但精力消耗较快。',
          ja: '瞬発的な集中力は高いが、エネルギーを消耗しやすい。'
        }
      },
      {
        type: 'WARM',
        label: 'D',
        text: {
          ko: '천천히 움직이며 무리하면 쉽게 지친다.',
          en: 'Moves gently and fatigues easily when overexerted.',
          zh: '节奏沉稳温和，稍加过度劳累便易感倦怠。',
          ja: 'ゆっくり動き、無理をすると疲れが出やすい。'
        }
      }
    ]
  },
  {
    id: 3,
    category: 'BODY',
    title: {
      ko: '스트레스를 받으면 어떤 반응이 나타나나요?',
      en: 'How does your body typically react to stress?',
      zh: '面对压力时，您身体通常有何反应？',
      ja: 'ストレスを感じると、どのような反応が出ますか？'
    },
    subtitle: {
      ko: '긴장이나 압박을 느낄 때 내 몸과 마음의 신호입니다.',
      en: 'Physical signals from mind and body under pressure.',
      zh: '压力或紧张时身心释放的信号。',
      ja: '緊張やプレッシャーを感じたときの心身のサインです。'
    },
    options: [
      {
        type: 'SUN',
        label: 'A',
        text: {
          ko: '불같이 감정이 솟구치거나 가슴 윗부분이 답답해진다.',
          en: 'Emotions flare up or tightness in upper chest.',
          zh: '情绪容易冲动，胸口上方有憋闷感。',
          ja: '感情が高ぶりやすく、胸の上あたりが詰まりやすい。'
        }
      },
      {
        type: 'FOREST',
        label: 'B',
        text: {
          ko: '속으로 삭이며 묵묵해지거나 단것이나 음식이 당긴다.',
          en: 'Holds it inside, stays quiet, or craves comfort food.',
          zh: '习惯忍耐沉默，或渴望甜食与丰盛饮食。',
          ja: '内に溜め込み無口になるか、甘い物や食事を欲する。'
        }
      },
      {
        type: 'WIND',
        label: 'C',
        text: {
          ko: '마음이 급해지고 예민해진다.',
          en: 'Becomes impatient, agitated, and sensitive.',
          zh: '心情急躁，情绪敏感警觉。',
          ja: '気がせいて神経過敏になりやすい。'
        }
      },
      {
        type: 'WARM',
        label: 'D',
        text: {
          ko: '걱정이 많아지고 속이 쓰리거나 기운이 가라앉는다.',
          en: 'Overthinks, experiences stomach ache or low vitality.',
          zh: '思虑繁多，胃部不适或元气低沉。',
          ja: '心配事が増え、胃腸が重くなったり元気が沈みやすい。'
        }
      }
    ]
  },
  {
    id: 4,
    category: 'BODY',
    title: {
      ko: '식사 후 주로 어떤 상태인가요?',
      en: 'How do you usually feel after a meal?',
      zh: '用餐后通常处于什么状态？',
      ja: '食後は主にどのような状態になりますか？'
    },
    subtitle: {
      ko: '평소 소화 기능과 위장의 편안함을 점검해봅니다.',
      en: 'Checks your digestive function and gastric comfort.',
      zh: '评估您平时的消化机能与胃部舒适度。',
      ja: '普段の消化機能と胃腸の心地よさを確認します。'
    },
    options: [
      {
        type: 'SUN',
        label: 'A',
        text: {
          ko: '소화는 금방 되는 편이나 가끔 속에서 열감이 느껴진다.',
          en: 'Digests fast, but occasionally feels heat in stomach.',
          zh: '消化较快，但偶尔会感到胃中有灼热感。',
          ja: '消化は早いが、時折胃に熱っぽさを感じる。'
        }
      },
      {
        type: 'FOREST',
        label: 'B',
        text: {
          ko: '잘 먹는 편이나 과식하기 쉽고 식후에 나른함이 크게 밀려온다.',
          en: 'Eats heartily, prone to overeating, feels sleepy.',
          zh: '胃口好易过饱，餐后常有较强困倦感。',
          ja: 'よく食べるが食べ過ぎやすく、食後に強い眠気が来る。'
        }
      },
      {
        type: 'WIND',
        label: 'C',
        text: {
          ko: '식사를 빠르게 마치는 편이고 찬 물이나 음료를 찾는다.',
          en: 'Eats swiftly and frequently craves cold water/drinks.',
          zh: '进食速度快，偏好冷水或冰饮。',
          ja: '食べるペースが早く、冷たい水や飲み物を欲する。'
        }
      },
      {
        type: 'WARM',
        label: 'D',
        text: {
          ko: '속이 예민하거나 더부룩함을 느끼는 편이다.',
          en: 'Sensitive digestion; easily feels bloated or full.',
          zh: '肠胃敏感，容易感到胀气或消化不良。',
          ja: '胃腸がデリケートで、もたれやすさを感じる。'
        }
      }
    ]
  },
  {
    id: 5,
    category: 'BODY',
    title: {
      ko: '가장 편안하게 느껴지는 환경은 무엇인가요?',
      en: 'Which environment feels most restorative to you?',
      zh: '让您感觉最舒适惬意的环境是？',
      ja: '最も心地よくリラックスできる環境はどれですか？'
    },
    subtitle: {
      ko: '몸의 긴장이 풀리고 나다운 쉼을 찾을 수 있는 공간입니다.',
      en: 'A sanctuary where physical tension dissolves naturally.',
      zh: '能让身体彻底放松、找回宁静的治愈空间。',
      ja: '体の緊張がほどけ、本来の安らぎを取り戻せる場所です。'
    },
    options: [
      {
        type: 'SUN',
        label: 'A',
        text: {
          ko: '시원하고 탁 트인 곳',
          en: 'Cool, spacious, and open scenic vistas.',
          zh: '清凉开阔、视野辽阔的所在。',
          ja: '涼しく開放的で見晴らしの良い場所。'
        }
      },
      {
        type: 'FOREST',
        label: 'B',
        text: {
          ko: '안정되고 포근하며 느긋하게 머무를 수 있는 곳',
          en: 'Stable, cozy, and tranquil spaces for slow rest.',
          zh: '稳重温暖、可以悠然停留的温馨居所。',
          ja: '安定感があり温かく、のんびり滞在できる場所。'
        }
      },
      {
        type: 'WIND',
        label: 'C',
        text: {
          ko: '경쾌하고 감각적인 자극이 살아있는 산뜻한 공간',
          en: 'Fresh, vibrant spaces with sensory delight.',
          zh: '欢快清新、富有感官灵感与活力的空间。',
          ja: '軽やかで感覚的な刺激がある、爽やかな空間。'
        }
      },
      {
        type: 'WARM',
        label: 'D',
        text: {
          ko: '온기가 있고 조용하며 나만의 아늑함이 보장되는 곳',
          en: 'Warm, quiet, and intimately peaceful private nooks.',
          zh: '温暖静谧、拥有专属私密与治愈感的小天地。',
          ja: '温もりがあり静かで、自分だけの安心感が守られる場所。'
        }
      }
    ]
  },
  {
    id: 6,
    category: 'BODY',
    title: {
      ko: '피곤할 때 가장 먼저 나타나는 증상은 무엇인가요?',
      en: 'What is your primary warning sign when fatigued?',
      zh: '疲劳时身体最先出现的求救信号是？',
      ja: '疲れたときに真っ先に現れる身体のサインはどれですか？'
    },
    subtitle: {
      ko: '지쳤을 때 몸이 보내는 가장 솔직한 SOS 신호입니다.',
      en: 'The very first SOS signal your body sounds.',
      zh: '身心疲惫时身体发出的最初预警。',
      ja: '限界が近づいたときに体が発する最も正直なSOSサインです。'
    },
    options: [
      {
        type: 'SUN',
        label: 'A',
        text: {
          ko: '머리나 상체가 답답하다.',
          en: 'Head feels congested or upper body feels tight.',
          zh: '头部胀闷或上半身气闷沉重。',
          ja: '頭や上半身が重く詰まるような感覚。'
        }
      },
      {
        type: 'FOREST',
        label: 'B',
        text: {
          ko: '몸 전체가 찌뿌둥하게 무겁고 붓기가 느껴진다.',
          en: 'Whole body feels sluggish, heavy, or puffy.',
          zh: '浑身酸沉沉重，并伴有水肿浮胀感。',
          ja: '全身がだるく重くなり、むくみを感じやすい。'
        }
      },
      {
        type: 'WIND',
        label: 'C',
        text: {
          ko: '눈이 뻑뻑하고 신경이 곤두서며 안정이 안 된다.',
          en: 'Dry eyes, heightened nerves, restless state.',
          zh: '双眼干涩、神经紧绷难以放松平静。',
          ja: '目がしょぼつき、神経が過敏になって落ち着かない。'
        }
      },
      {
        type: 'WARM',
        label: 'D',
        text: {
          ko: '손발이 얼음처럼 차가워지고 속이 메스껍거나 체한다.',
          en: 'Icy cold hands/feet, nausea, or upset stomach.',
          zh: '手脚冰冷，伴随反胃或食滞积食感。',
          ja: '手足が氷のように冷え、胃がムカムカしたり消化不良になる。'
        }
      }
    ]
  },
  {
    id: 7,
    category: 'LIFESTYLE',
    title: {
      ko: '평소 나의 행동 스타일은 어떤가요?',
      en: 'How would you describe your everyday behavioral pace?',
      zh: '日常生活中，您的行动风格通常是？',
      ja: '普段の行動スタイルはどのようなペースですか？'
    },
    subtitle: {
      ko: '일상과 대인관계에서 드러나는 나의 주된 템포입니다.',
      en: 'Your signature cadence in social interactions and tasks.',
      zh: '日常处事与人际交往中所展现的基调。',
      ja: '日常や対人関係で現れる、あなたの主なテンポです。'
    },
    options: [
      {
        type: 'SUN',
        label: 'A',
        text: {
          ko: '적극적으로 의사를 밝히고 주도적으로 리드한다.',
          en: 'Assertive, expressive, and takes initiative.',
          zh: '积极表达主见，主动引领大局。',
          ja: '積極的に意見を伝え、主導的にリードする。'
        }
      },
      {
        type: 'FOREST',
        label: 'B',
        text: {
          ko: '묵직하게 상황을 관망하며 꾸준한 페이스를 지킨다.',
          en: 'Observes composedly, holding a reliable steady pace.',
          zh: '沉着稳重，观望周全并保持恒定节奏。',
          ja: 'どっしりと状況を見守り、着実なペースを守る。'
        }
      },
      {
        type: 'WIND',
        label: 'C',
        text: {
          ko: '새로운 것에 호기심이 많고 재치 있게 순발력을 발휘한다.',
          en: 'Curious about novelty, witty, and spontaneous.',
          zh: '充满好奇心，机敏敏捷，随机应变。',
          ja: '新しいことに好奇心が強く、機転と瞬発力を発揮する。'
        }
      },
      {
        type: 'WARM',
        label: 'D',
        text: {
          ko: '신중하게 생각한 후 움직인다.',
          en: 'Deliberates thoughtfully before taking steps.',
          zh: '审慎深思熟虑后方才付诸行动。',
          ja: '慎重に考えてから行動に移す。'
        }
      }
    ]
  },
  {
    id: 8,
    category: 'LIFESTYLE',
    title: {
      ko: '휴식할 때 가장 원하는 것은 무엇인가요?',
      en: 'What do you desire most when unwinding with tea?',
      zh: '在茶憩放松时，您最期盼获得的是？',
      ja: 'お茶を飲みながら休息するとき、最も求めるものは何ですか？'
    },
    subtitle: {
      ko: '차 한 잔과 함께 온전히 채우고 싶은 회복의 형태입니다.',
      en: 'The ideal form of rejuvenation in your teacup.',
      zh: '愿随一杯香茗完全获得的疗愈体验。',
      ja: '一杯のお茶とともに満たしたい回復のかたちです。'
    },
    options: [
      {
        type: 'SUN',
        label: 'A',
        text: {
          ko: '과열된 생각과 복잡한 머리를 시원하게 비우는 것',
          en: 'Cooling down overheated thoughts and mental clutter.',
          zh: '清空过载思绪，令头脑重获清明宁静。',
          ja: '過熱した思考や頭の雑念をすっきりと空っぽにすること。'
        }
      },
      {
        type: 'FOREST',
        label: 'B',
        text: {
          ko: '무거워진 몸을 가볍게 정화하고 산뜻한 생기를 얻는 것',
          en: 'Purifying heavy sluggishness and reviving light vitality.',
          zh: '净化沉重身躯，焕发轻盈通畅的生机。',
          ja: '重くなった体を軽く浄化し、すっきりとした生気を得ること。'
        }
      },
      {
        type: 'WIND',
        label: 'C',
        text: {
          ko: '긴장이 풀리고 편안해지는 것',
          en: 'Dissolving nervous tension and finding gentle ease.',
          zh: '卸下紧绷防备，享受由内而外的柔软舒缓。',
          ja: '緊張がほどけ、心がゆるやかに安らぐこと。'
        }
      },
      {
        type: 'WARM',
        label: 'D',
        text: {
          ko: '차갑게 식은 몸과 마음에 따스한 온기를 불어넣는 것',
          en: 'Infusing comforting warmth into cold body and spirit.',
          zh: '为发凉的身心注入融融暖意与内在元气。',
          ja: '冷えた心と体に温かいぬくもりを吹き込むこと。'
        }
      }
    ]
  }
];

// 동점 보완 질문 4개 언어 데이터
export const I18N_TIE_BREAKER: Record<string, {
  question: Record<Language, string>;
  subtitle: Record<Language, string>;
  options: {
    type: MomBtiType;
    label: string;
    text: Record<Language, string>;
    detail: Record<Language, string>;
  }[];
}> = {
  WIND_WARM: {
    question: {
      ko: '평소 내 몸에 더 편안하게 맞는 음식과 온도는 어느 쪽에 더 가깝나요?',
      en: 'Which food and temperature profile naturally comforts your body better?',
      zh: '从平时饮食和温度偏好来看，哪种更贴合您的身体感受？',
      ja: '普段、ご自身の身体により心地よく合う食べ物や温度はどちらに近いですか？'
    },
    subtitle: {
      ko: '바람형(소양인)과 온담형(소음인)의 기운을 가르는 결정적 신체 특성입니다.',
      en: 'The decisive metabolic trait distinguishing Wind (Soyangin) and Warm (Soeumin).',
      zh: '区分风型（少阳人）与温型（少阴人）体质能量的关键体感指征。',
      ja: '風型（少陽人）と温型（少陰人）のエネルギーを見極める決定的な身体的特徴です。'
    },
    options: [
      {
        type: 'WIND',
        label: 'C',
        text: {
          ko: '돼지고기나 시원한 해산물이 잘 맞고, 속 열감이 있어 서늘한 바람이나 시원한 차를 마셨을 때 속이 편하다.',
          en: 'Pork and refreshing seafood suit well; cool air or chilled tea soothes internal heat comfortably.',
          zh: '偏好猪肉或清爽海鲜，常有内热感，吹凉风或饮凉润茶水时肠胃感觉通透舒适。',
          ja: '豚肉やさっぱりした海鮮が合い、体内に熱感があるため、涼しい風やお茶を飲んだときに胃腸が落ち着く。'
        },
        detail: {
          ko: '신체에 내열이 많고 수분 소모가 빠른 바람형(WIND) 성향',
          en: 'Wind (WIND) archetype: Fast moisture depletion, needs calming hydration',
          zh: '风型（WIND）：体内偏燥热，需要滋阴与柔和舒缓',
          ja: '風型（WIND）：内熱が多く水分消費が早いため、穏やかな潤いが必要'
        }
      },
      {
        type: 'WARM',
        label: 'D',
        text: {
          ko: '닭고기, 생강, 따뜻한 국물이 속을 편하게 해주고, 찬 음식이나 찬 음료를 마시면 배탈이 나기 쉽다.',
          en: 'Poultry, ginger, and warm broths comfort the stomach; cold items easily trigger gastric trouble.',
          zh: '鸡肉、生姜及温热汤水令肠胃舒适，食用寒凉冰饮易引起腹痛不适。',
          ja: '鶏肉、生姜、温かいスープが胃腸を休め、冷たい食べ物や冷たい飲み物は不調を起こしやすい。'
        },
        detail: {
          ko: '소화기가 차갑고 온기가 필요한 온담형(WARM) 성향',
          en: 'Warm (WARM) archetype: Cold digestive system, needs restorative warmth',
          zh: '温型（WARM）：胃肠偏虚寒，需要温煦滋补与脾胃养护',
          ja: '温型（WARM）：消化器が冷えやすく、心地よい温もりが必要'
        }
      }
    ]
  }
};

// 3) 차 취향으로 알아보는 나 (9~11번) 다국어 데이터
export const I18N_TASTE_QUESTIONS = {
  scent: {
    id: 9,
    title: {
      ko: '가장 끌리는 향은 무엇인가요?',
      en: 'Which aroma attracts you the most?',
      zh: '哪种香气最吸引您？',
      ja: '最も惹かれる香りはどれですか？'
    },
    subtitle: {
      ko: '찻잔을 코끝에 가져갔을 때 기분을 좋게 만드는 향기입니다.',
      en: 'The scent that uplifts your mood the moment you bring the cup close.',
      zh: '当茶杯凑近鼻尖时，最能令您心情舒畅的香气。',
      ja: '茶杯を鼻に近づけたとき、心を弾ませる香りです。'
    },
    options: [
      {
        value: 'FLORAL',
        label: { ko: '꽃향', en: 'Floral', zh: '花香', ja: '花の香り' },
        description: {
          ko: '화사하고 매혹적인 만개한 생화의 향기',
          en: 'Vibrant, enchanting aroma of blooming fresh flowers',
          zh: '明媚迷人的盛开鲜花芬芳',
          ja: '華やかで魅惑的な咲き誇る生花の香り'
        }
      },
      {
        value: 'HERBAL',
        label: { ko: '허브 & 풀향', en: 'Herbal & Green', zh: '草本与清草香', ja: 'ハーブ＆草の香り' },
        description: {
          ko: '푸르른 숲과 싱그러운 허브의 청량한 향기',
          en: 'Refreshing scent of lush green forests and brisk herbs',
          zh: '茂密森林与新鲜草本的清爽气息',
          ja: '青々とした森と瑞々しいハーブの爽やかな香り'
        }
      },
      {
        value: 'CITRUS',
        label: { ko: '시트러스 & 과일향', en: 'Citrus & Fruity', zh: '柑橘果香', ja: 'シトラス＆果実香' },
        description: {
          ko: '톡 쏘는 상큼함과 달콤한 과즙의 향기',
          en: 'Tangy zest and sweet floral-fruit juice essence',
          zh: '沁爽酸甜的明快鲜果气息',
          ja: '弾ける爽快感と甘い果汁の香り'
        }
      },
      {
        value: 'GRAIN',
        label: { ko: '구수한 곡물 & 우디향', en: 'Toasted Grain & Woody', zh: '浓香谷物与木质香', ja: '香ばしい穀物＆ウッディ' },
        description: {
          ko: '마음을 편안하게 감싸는 깊은 덖음 향기',
          en: 'Deeply roasted notes that warmly ground and comfort the mind',
          zh: '抚慰心神的深邃焙烤与大地木质清香',
          ja: '心を穏やかに包み込む深い焙煎の香り'
        }
      }
    ]
  },
  flavor: {
    id: 10,
    title: {
      ko: '좋아하는 차의 맛은 어떤가요?',
      en: 'What flavor profile do you prefer most in tea?',
      zh: '您最喜欢怎样的茶饮口感？',
      ja: '好みの味の傾向はどのようなものですか？'
    },
    subtitle: {
      ko: '입안에 머금었을 때 가장 만족스러운 미각 프로필입니다.',
      en: 'The taste profile you find most pleasurable on your palate.',
      zh: '含入口中时最令您身心满足的味觉体验。',
      ja: '口に含んだときに最も心地よい味覚プロファイルです。'
    },
    options: [
      {
        value: 'CLEAR',
        label: { ko: '깔끔하고 청량한 맛', en: 'Crisp & Clean', zh: '清爽通透', ja: '爽快ですっきりした味' },
        description: {
          ko: '텁텁함 없이 시원하고 맑게 넘어가는 맛',
          en: 'Smooth, light, and wonderfully crisp with no lingering dryness',
          zh: '毫不滞涩，入口清润纯净、回甘透澈',
          ja: '渋みがなく、清らかで喉越しのよい爽やかな味わい'
        }
      },
      {
        value: 'SWEET',
        label: { ko: '은은하고 부드러운 단맛', en: 'Subtle Sweetness', zh: '温润微甜', ja: 'ほんのり優しい甘み' },
        description: {
          ko: '자연스러운 꿀과 꽃의 부드러운 감미',
          en: 'Gentle, natural honey and delicate floral sweetness',
          zh: '天然花蜜般绵长柔和的甘甜滋味',
          ja: '自然な蜂蜜や花がもたらす柔らかな甘み'
        }
      },
      {
        value: 'DEEP',
        label: { ko: '깊고 묵직한 구수한 맛', en: 'Deep & Savory', zh: '醇厚回甘', ja: '深みのある香ばしさ' },
        description: {
          ko: '속을 든든하게 받쳐주는 풍부한 바디감',
          en: 'Rich, comforting body that grounds and satisfies deeply',
          zh: '饱满温厚，为身体带来踏实的充盈感',
          ja: '胃腸を穏やかに支える豊かなコクとボディ感'
        }
      },
      {
        value: 'SPICY',
        label: { ko: '알싸하고 따뜻한 풍미', en: 'Warm & Zesty', zh: '辛香温热', ja: 'スパイシーな温かみ' },
        description: {
          ko: '스파이시한 진저 노트와 은은한 활력',
          en: 'Gentle spicy ginger notes infusing restorative warmth',
          zh: '微辛姜香与温煦草本带来的内在活力',
          ja: 'ほのかな生姜の刺激と心地よい活力のニュアンス'
        }
      }
    ]
  },
  priority: {
    id: 11,
    title: {
      ko: '차 한 잔에서 가장 중요하게 생각하는 것은 무엇인가요?',
      en: 'What matters most to you in a cup of tea?',
      zh: '在一杯好茶中，您最看重的是什么？',
      ja: '一杯のお茶で最も大切にしたいことは何ですか？'
    },
    subtitle: {
      ko: '플루니티 티 타임에서 당신이 추구하는 핵심 가치입니다.',
      en: 'The core sensory value you cherish most during tea time.',
      zh: '在 Flunitea 品茗时光中您追求的核心美学与价值。',
      ja: 'Fluniteaのティータイムであなたが求める大切な価値です。'
    },
    options: [
      {
        value: 'SCENT',
        label: { ko: '향 (Aroma)', en: 'Aroma', zh: '香气 (Aroma)', ja: '香り (Aroma)' },
        description: {
          ko: '기분을 단숨에 전환해주는 매력적인 아로마',
          en: 'Captivating fragrance that instantly resets mood and mind',
          zh: '瞬间转换心境的迷人馥郁香气',
          ja: '瞬時に気分を切り替えてくれる魅力的なアロマ'
        }
      },
      {
        value: 'COLOR',
        label: { ko: '수색 (Color)', en: 'Tea Color', zh: '茶汤水色 (Color)', ja: '水色 (Color)' },
        description: {
          ko: '투명한 유리잔에 번지는 영롱하고 맑은 색채',
          en: 'Luminous, clear visual hues blooming in transparent glass',
          zh: '透明玻璃杯中流转晕染的明澈色彩',
          ja: '透明なガラスに広がる澄んだ美しい色合い'
        }
      },
      {
        value: 'TASTE',
        label: { ko: '맛과 목넘김 (Taste)', en: 'Taste & Finish', zh: '口感与余韵 (Taste)', ja: '味わいとのど越し (Taste)' },
        description: {
          ko: '입안 가득 번지는 섬세하고 조화로운 밸런스',
          en: 'Delicate harmony and smooth balance spreading on the palate',
          zh: '充盈口中、回味悠长的细腻平衡感',
          ja: '口いっぱいに広がる繊細で調和のとれたバランス'
        }
      },
      {
        value: 'BENEFIT',
        label: { ko: '웰니스 효능 (Wellness)', en: 'Wellness Benefit', zh: '养生功效 (Wellness)', ja: 'ウェルネス効能 (Wellness)' },
        description: {
          ko: '내 몸의 컨디션을 회복시켜주는 건강한 변화',
          en: 'Wholesome restoration that actively balances physical energy',
          zh: '调养身心状态、重塑身体机能的健康助力',
          ja: '心身のコンディションを整える健康的な好変化'
        }
      }
    ]
  }
};
