'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Wand2, ShieldAlert } from 'lucide-react';
import { MOM_BTI_QUESTIONS, TASTE_QUESTIONS, TODAY_CONDITION_QUESTION } from '@/data/questions';
import { I18N_QUESTIONS, I18N_TASTE_QUESTIONS } from '@/data/questionsI18n';
import { MomBtiType, TasteSelection, ConditionResult } from '@/lib/types';
import { calculateMomBtiScore, createSignatureBlend } from '@/lib/mbtiLogic';
import { sendToGoogleSheets } from '@/lib/googleSheets';
import TieBreakModal from '@/components/TieBreakModal';
import FaceCamera from '@/components/FaceCamera';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function MomBtiTestPage() {
  const router = useRouter();
  const { language, t } = useLanguage();

  // 단계 관리: 1: 체질 문항 (1~8번), 2: 취향 문항 (9~11번), 3: 얼굴 분석 (오늘의 컨디션 20%)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  // 1~8번 체질 문항 답변 (key: questionId, value: MomBtiType)
  const [bodyAnswers, setBodyAnswers] = useState<Record<number, MomBtiType>>({});
  // 1~8번 각 문항의 질문 및 사용자가 선택한 라벨/텍스트 상세 기록
  const [bodyAnswerDetails, setBodyAnswerDetails] = useState<Record<number, { title: string; label: string; text: string; type: MomBtiType }>>({});
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

  // 동점 처리 상태
  const [isTieModalOpen, setIsTieModalOpen] = useState(false);
  const [competingTypes, setCompetingTypes] = useState<MomBtiType[]>([]);
  const [resolvedType, setResolvedType] = useState<MomBtiType | null>(null);
  const [tieBreakRecord, setTieBreakRecord] = useState<{
    occurred: boolean;
    competing: string;
    question: string;
    selectedOption: string;
  }>({
    occurred: false,
    competing: '',
    question: '',
    selectedOption: ''
  });

  // 9~11번 취향 답변
  const [tasteAnswers, setTasteAnswers] = useState<TasteSelection>({
    scent: 'FLORAL',     // 꽃향
    flavor: 'CLEAR',    // 깔끔하고 청량한 맛
    priority: 'SCENT'   // 향
  });

  // 얼굴 분석 컨디션 결과 (디폴트 REFRESH)
  const [conditionResult, setConditionResult] = useState<ConditionResult>({
    keyword: 'REFRESH',
    title: 'REFRESH (상쾌함)',
    description: '상체에 열감이 머물고 눈가가 다소 피로하여, 탁 트인 시원함과 맑은 전환이 가장 필요한 상태입니다.',
    ratio: 20,
    score: { energy: 65, stress: 58, vitality: 60 }
  });

  // 회원 정보 확인
  const [userName, setUserName] = useState<string>('회원');
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('flunitea_user');
      if (savedUser) {
        const u = JSON.parse(savedUser);
        if (u.name) setUserName(u.name);
        if (u.email) setUserEmail(u.email);
      }
    } catch (e) {
      // 로컬스토리지 미지원 환경 무시
    }
  }, []);

  // 참고 예시 시나리오 빠른 채우기 (데모 지원 기능)
  const loadExampleScenario = () => {
    // 예시: 01 C, 02 D, 03 C, 04 D, 05 A, 06 A, 07 D, 08 C
    // 집계: A: 2개, B: 0개, C: 3개, D: 3개 -> 동점!
    const exampleAnswers: Record<number, MomBtiType> = {
      1: 'WIND', // C (활동하면 금방 더워지는 편이다)
      2: 'WARM', // D (천천히 움직이며 무리하면 쉽게 지친다)
      3: 'WIND', // C (마음이 급해지고 예민해진다)
      4: 'WARM', // D (속이 예민하거나 더부룩함을 느끼는 편이다)
      5: 'SUN',  // A (시원하고 탁 트인 곳)
      6: 'SUN',  // A (머리나 상체가 답답하다)
      7: 'WARM', // D (신중하게 생각한 후 움직인다)
      8: 'WIND'  // C (긴장이 풀리고 편안해지는 것)
    };
    setBodyAnswers(exampleAnswers);

    const exampleDetails: Record<number, { title: string; label: string; text: string; type: MomBtiType }> = {};
    MOM_BTI_QUESTIONS.forEach((q) => {
      const chosenType = exampleAnswers[q.id];
      const opt = q.options.find((o) => o.type === chosenType);
      if (opt) {
        exampleDetails[q.id] = {
          title: q.title,
          label: opt.label,
          text: opt.text,
          type: opt.type
        };
      }
    });
    setBodyAnswerDetails(exampleDetails);
    setCurrentQuestionIdx(7); // 마지막 문항 위치로

    // 취향 기본 설정
    setTasteAnswers({
      scent: 'FLORAL',
      flavor: 'CLEAR',
      priority: 'SCENT'
    });
  };

  // 1~8번 문항 옵션 선택 시
  const handleSelectBodyOption = (type: MomBtiType, label: string, text: string) => {
    const currentQ = MOM_BTI_QUESTIONS[currentQuestionIdx];
    const qId = currentQ.id;

    const newAnswers = { ...bodyAnswers, [qId]: type };
    setBodyAnswers(newAnswers);

    const newDetails = {
      ...bodyAnswerDetails,
      [qId]: {
        title: currentQ.title,
        label,
        text,
        type
      }
    };
    setBodyAnswerDetails(newDetails);

    if (currentQuestionIdx < MOM_BTI_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      // 8문항 모두 완료 -> 점수 집계 및 동점 여부 확인
      evaluateBodyScore(newAnswers);
    }
  };

  // 점수 집계 및 동점 여부 평가
  const evaluateBodyScore = (answers: Record<number, MomBtiType>) => {
    const result = calculateMomBtiScore(answers);

    if (result.isTie) {
      // 동점 발생: 보완 질문 팝업 오픈
      setCompetingTypes(result.competingTypes);
      setTieBreakRecord((prev) => ({
        ...prev,
        occurred: true,
        competing: result.competingTypes.join(' vs ')
      }));
      setIsTieModalOpen(true);
    } else {
      // 단독 1위 확정
      setResolvedType(result.topType);
      setTieBreakRecord({
        occurred: false,
        competing: 'None',
        question: '-',
        selectedOption: '-'
      });
      setCurrentStep(2); // 2단계 취향 문항으로 이동
    }
  };

  // 보완 질문에서 최종 유형 선택 시
  const handleFinalTypeSelected = (type: MomBtiType, detail?: { question: string; selectedOption: string }) => {
    setResolvedType(type);
    if (detail) {
      setTieBreakRecord((prev) => ({
        ...prev,
        question: detail.question,
        selectedOption: detail.selectedOption
      }));
    }
    setIsTieModalOpen(false);
    setCurrentStep(2); // 2단계 취향 문항으로 이동
  };

  // 얼굴 분석 완료 시 최종 결과 페이지로 이동
  const handleFaceAnalyzed = (res: ConditionResult) => {
    setConditionResult(res);
    finalizeTest(res);
  };

  // 최종 조합 생성 및 페이지 이동
  const finalizeTest = async (finalCondition: ConditionResult) => {
    const finalBodyType = resolvedType || 'WIND';
    const blendResult = createSignatureBlend(
      finalBodyType,
      tasteAnswers,
      finalCondition,
      userName
    );

    // 로컬 스토리지에 결과 저장
    try {
      localStorage.setItem('flunitea_blend_result', JSON.stringify(blendResult));
      localStorage.setItem('flunitea_body_type', finalBodyType);
    } catch (e) {}

    // 점수 집계 결과 계산
    const scoreSummary = calculateMomBtiScore(bodyAnswers);

    // 9~11번 취향 설문 라벨 및 텍스트 매핑
    const chosenScent = TASTE_QUESTIONS.scent.options.find((o) => o.value === tasteAnswers.scent);
    const chosenFlavor = TASTE_QUESTIONS.flavor.options.find((o) => o.value === tasteAnswers.flavor);
    const chosenPriority = TASTE_QUESTIONS.priority.options.find((o) => o.value === tasteAnswers.priority);

    // 체질 정보
    const momBtiNames: Record<MomBtiType, { name: string; title: string }> = {
      SUN: { name: '해온형', title: 'SUN (태양인)' },
      FOREST: { name: '숲온형', title: 'FOREST (태음인)' },
      WIND: { name: '바람형', title: 'WIND (소양인)' },
      WARM: { name: '온담형', title: 'WARM (소음인)' }
    };

    // 구글 시트에 1~8번 개별 문항 + 취향 + 얼굴 분석 + 50:30:20 블렌딩 결과 전송
    await sendToGoogleSheets({
      action: 'saveBlendResult',
      data: {
        userName,
        userEmail: userEmail || '비회원',
        language: language.toUpperCase(),
        finalMomBtiName: momBtiNames[finalBodyType].name,
        finalSasangCode: momBtiNames[finalBodyType].title,
        
        // 사상체질 점수 득표 현황
        scoreA_SUN: scoreSummary.scores.SUN,
        scoreB_FOREST: scoreSummary.scores.FOREST,
        scoreC_WIND: scoreSummary.scores.WIND,
        scoreD_WARM: scoreSummary.scores.WARM,

        // 동점 처리 내역
        isTie: tieBreakRecord.occurred ? 'Y' : 'N',
        competingTypes: tieBreakRecord.competing || 'None',
        tieQuestion: tieBreakRecord.question || '-',
        tieAnswer: tieBreakRecord.selectedOption || '-',

        // 1~8번 개별 문항 질문 및 응답
        q1_question: MOM_BTI_QUESTIONS[0].title,
        q1_answer: bodyAnswerDetails[1] ? `[${bodyAnswerDetails[1].label}] ${bodyAnswerDetails[1].text}` : '-',
        q2_question: MOM_BTI_QUESTIONS[1].title,
        q2_answer: bodyAnswerDetails[2] ? `[${bodyAnswerDetails[2].label}] ${bodyAnswerDetails[2].text}` : '-',
        q3_question: MOM_BTI_QUESTIONS[2].title,
        q3_answer: bodyAnswerDetails[3] ? `[${bodyAnswerDetails[3].label}] ${bodyAnswerDetails[3].text}` : '-',
        q4_question: MOM_BTI_QUESTIONS[3].title,
        q4_answer: bodyAnswerDetails[4] ? `[${bodyAnswerDetails[4].label}] ${bodyAnswerDetails[4].text}` : '-',
        q5_question: MOM_BTI_QUESTIONS[4].title,
        q5_answer: bodyAnswerDetails[5] ? `[${bodyAnswerDetails[5].label}] ${bodyAnswerDetails[5].text}` : '-',
        q6_question: MOM_BTI_QUESTIONS[5].title,
        q6_answer: bodyAnswerDetails[6] ? `[${bodyAnswerDetails[6].label}] ${bodyAnswerDetails[6].text}` : '-',
        q7_question: MOM_BTI_QUESTIONS[6].title,
        q7_answer: bodyAnswerDetails[7] ? `[${bodyAnswerDetails[7].label}] ${bodyAnswerDetails[7].text}` : '-',
        q8_question: MOM_BTI_QUESTIONS[7].title,
        q8_answer: bodyAnswerDetails[8] ? `[${bodyAnswerDetails[8].label}] ${bodyAnswerDetails[8].text}` : '-',

        // 9~11번 취향 문항 질문 및 응답
        q9_scent_question: TASTE_QUESTIONS.scent.title,
        q9_scent_answer: chosenScent ? `[${chosenScent.label}] ${chosenScent.description}` : tasteAnswers.scent,
        q10_flavor_question: TASTE_QUESTIONS.flavor.title,
        q10_flavor_answer: chosenFlavor ? `[${chosenFlavor.label}] ${chosenFlavor.description}` : tasteAnswers.flavor,
        q11_priority_question: TASTE_QUESTIONS.priority.title,
        q11_priority_answer: chosenPriority ? `[${chosenPriority.label}] ${chosenPriority.description}` : tasteAnswers.priority,

        // 얼굴 안색 AI 분석 결과
        conditionKeyword: finalCondition.keyword,
        faceEnergy: finalCondition.score.energy,
        faceStress: finalCondition.score.stress,
        faceVitality: finalCondition.score.vitality,

        // 최종 50:30:20 시그니처 블렌딩 결과
        signatureTeaName: blendResult.finalTeaName,
        baseTea50: `${blendResult.baseTea} (50%)`,
        tasteTea30: `${blendResult.tasteTea} (30%)`,
        conditionTea20: `${blendResult.conditionTea} (20%)`,
        teaSteepColor: blendResult.finalColor,
        teaBenefits: blendResult.finalDescription,

        completedAt: new Date().toISOString()
      }
    });

    router.push('/result');
  };

  const currentI18nQ = I18N_QUESTIONS[currentQuestionIdx];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* 상단 프로그레스 및 안내 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-tea-forest text-white">
              STEP {currentStep} / 3
            </span>
            <span className="text-xs font-semibold text-tea-dark/70">
              {currentStep === 1 && t('step1Title')}
              {currentStep === 2 && t('step2Title')}
              {currentStep === 3 && t('step3Title')}
            </span>
          </div>

          {/* 빠른 참고 예시 채우기 버튼 */}
          <button
            type="button"
            onClick={loadExampleScenario}
            className="inline-flex items-center gap-1.5 text-xs text-tea-forest/80 hover:text-tea-forest hover:bg-tea-forest/10 px-2.5 py-1 rounded-lg transition-colors"
            title="사용자 요청 예시(WIND vs WARM 동점 시나리오)를 자동 입력합니다."
          >
            <Wand2 className="w-3.5 h-3.5" />
            {t('demoFill')}
          </button>
        </div>

        {/* 진행 바 */}
        <div className="w-full h-2 bg-tea-sand/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-tea-forest transition-all duration-500 rounded-full"
            style={{
              width:
                currentStep === 1
                  ? `${((currentQuestionIdx + 1) / MOM_BTI_QUESTIONS.length) * 45}%`
                  : currentStep === 2
                  ? '75%'
                  : '100%'
            }}
          />
        </div>
      </div>

      {/* 1단계: 몸으로 알아보는 나 & 생활 속 나의 모습 (1~8번) */}
      {currentStep === 1 && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-tea-sand/80 animate-in fade-in duration-300">
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-tea-forest font-semibold mb-2">
              <span>
                {currentI18nQ.category === 'BODY'
                  ? '1) MY BODY'
                  : '2) LIFESTYLE'}
              </span>
              <span>
                {currentQuestionIdx + 1} / {I18N_QUESTIONS.length}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tea-dark mb-2">
              {currentI18nQ.title[language] || currentI18nQ.title['ko']}
            </h2>
            <p className="text-xs sm:text-sm text-tea-dark/60">
              {currentI18nQ.subtitle[language] || currentI18nQ.subtitle['ko']}
            </p>
          </div>

          {/* 선택지 목록 */}
          <div className="space-y-3.5">
            {currentI18nQ.options.map((opt) => {
              const isSelected =
                bodyAnswers[currentI18nQ.id] === opt.type;
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => handleSelectBodyOption(opt.type, opt.label, opt.text[language] || opt.text['ko'])}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-4 group ${
                    isSelected
                      ? 'border-tea-forest bg-tea-forest/5 shadow-sm'
                      : 'border-tea-sand/70 hover:border-tea-forest/60 hover:bg-tea-cream/40'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-tea-forest text-white'
                        : 'bg-tea-sand/60 text-tea-dark group-hover:bg-tea-forest group-hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-xs sm:text-sm font-medium text-tea-dark leading-relaxed">
                      {opt.text[language] || opt.text['ko']}
                    </p>
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-tea-forest flex-shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>

          {/* 하단 이전/다음 버튼 */}
          <div className="mt-8 pt-6 border-t border-tea-sand/60 flex items-center justify-between">
            <button
              type="button"
              disabled={currentQuestionIdx === 0}
              onClick={() => setCurrentQuestionIdx(currentQuestionIdx - 1)}
              className="inline-flex items-center gap-1.5 text-xs text-tea-dark/60 hover:text-tea-dark disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {t('prevQuestion')}
            </button>

            {bodyAnswers[MOM_BTI_QUESTIONS[currentQuestionIdx].id] &&
              currentQuestionIdx < MOM_BTI_QUESTIONS.length - 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIdx(currentQuestionIdx + 1)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-tea-forest hover:text-tea-forest/80"
                >
                  {t('nextQuestion')}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
          </div>
        </div>
      )}

      {/* 2단계: 차 취향으로 알아보는 나 (9~11번) */}
      {currentStep === 2 && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-tea-sand/80 animate-in fade-in duration-300 space-y-8">
          <div>
            <span className="text-xs text-tea-forest font-semibold block mb-1">
              {t('step2Title')}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tea-dark mb-2">
              {t('step2Subtitle')}
            </h2>
            <p className="text-xs sm:text-sm text-tea-dark/60">
              {t('step2Guide')}
            </p>
          </div>

          {/* 09. 가장 끌리는 향 */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-tea-dark">
              09 {I18N_TASTE_QUESTIONS.scent.title[language] || I18N_TASTE_QUESTIONS.scent.title['ko']}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {I18N_TASTE_QUESTIONS.scent.options.map((opt) => {
                const isSelected = tasteAnswers.scent === opt.value;
                const optLabel = opt.label[language] || opt.label['ko'];
                const optDesc = opt.description[language] || opt.description['ko'];
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTasteAnswers({ ...tasteAnswers, scent: opt.value as any })}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                      isSelected
                        ? 'border-pink-500 bg-pink-50/50 shadow-sm'
                        : 'border-tea-sand/80 hover:border-pink-300'
                    }`}
                  >
                    <span className="font-serif font-bold text-xs sm:text-sm text-tea-dark block">
                      {optLabel}
                    </span>
                    <span className="text-[11px] text-tea-dark/60 mt-0.5 block">
                      {optDesc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 10. 좋아하는 차의 맛 */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-tea-dark">
              10 {I18N_TASTE_QUESTIONS.flavor.title[language] || I18N_TASTE_QUESTIONS.flavor.title['ko']}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {I18N_TASTE_QUESTIONS.flavor.options.map((opt) => {
                const isSelected = tasteAnswers.flavor === opt.value;
                const optLabel = opt.label[language] || opt.label['ko'];
                const optDesc = opt.description[language] || opt.description['ko'];
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTasteAnswers({ ...tasteAnswers, flavor: opt.value as any })}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                      isSelected
                        ? 'border-tea-forest bg-tea-forest/5 shadow-sm'
                        : 'border-tea-sand/80 hover:border-tea-forest/40'
                    }`}
                  >
                    <span className="font-serif font-bold text-xs sm:text-sm text-tea-dark block">
                      {optLabel}
                    </span>
                    <span className="text-[11px] text-tea-dark/60 mt-0.5 block">
                      {optDesc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 11. 가장 중요하게 생각하는 것 */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-tea-dark">
              11 {I18N_TASTE_QUESTIONS.priority.title[language] || I18N_TASTE_QUESTIONS.priority.title['ko']}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {I18N_TASTE_QUESTIONS.priority.options.map((opt) => {
                const isSelected = tasteAnswers.priority === opt.value;
                const optLabel = opt.label[language] || opt.label['ko'];
                const optDesc = opt.description[language] || opt.description['ko'];
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTasteAnswers({ ...tasteAnswers, priority: opt.value as any })}
                    className={`p-3 rounded-2xl border-2 text-center transition-all ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/50 shadow-sm'
                        : 'border-tea-sand/80 hover:border-amber-300'
                    }`}
                  >
                    <span className="font-serif font-bold text-xs text-tea-dark block">
                      {optLabel}
                    </span>
                    <span className="text-[10px] text-tea-dark/60 mt-1 block leading-tight">
                      {optDesc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="text-xs text-tea-dark/60 hover:text-tea-dark flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              {t('prevQuestion')}
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="bg-tea-forest hover:bg-tea-forest/90 text-white font-semibold text-xs py-3 px-6 rounded-2xl transition-all shadow-md flex items-center gap-2"
            >
              <span>{t('goToStep3')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 3단계: 얼굴 촬영 분석 및 오늘의 컨디션 도출 (20%) */}
      {currentStep === 3 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <FaceCamera
            defaultCondition={conditionResult}
            onAnalyzed={handleFaceAnalyzed}
          />

          {/* 수동 키워드 선택 또는 건너뛰기 보조 옵션 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-tea-sand/80">
            <h4 className="font-serif text-sm font-bold text-tea-dark mb-2">
              직접 오늘의 키워드를 선택할 수도 있습니다:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TODAY_CONDITION_QUESTION.options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() =>
                    finalizeTest({
                      keyword: opt.value as any,
                      title: opt.label,
                      description: opt.description,
                      ratio: 20,
                      score: { energy: 70, stress: 50, vitality: 65 }
                    })
                  }
                  className="p-3 rounded-2xl border border-tea-sand text-left hover:border-tea-forest hover:bg-tea-forest/5 transition-all text-xs"
                >
                  <span className="font-bold text-tea-dark block mb-0.5">{opt.label}</span>
                  <span className="text-[10px] text-tea-dark/60 leading-tight block">{opt.description}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 동점 보완 질문 팝업 모달 */}
      <TieBreakModal
        isOpen={isTieModalOpen}
        competingTypes={competingTypes}
        onSelectFinalType={handleFinalTypeSelected}
      />
    </div>
  );
}
