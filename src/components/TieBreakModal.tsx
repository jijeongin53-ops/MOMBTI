'use client';

import React from 'react';
import { Sparkles, HelpCircle, Check } from 'lucide-react';
import { MomBtiType } from '@/lib/types';
import { TIE_BREAKER_QUESTIONS } from '@/data/questions';
import { I18N_TIE_BREAKER } from '@/data/questionsI18n';
import { MOM_BTI_TYPES } from '@/data/teaTypes';
import { I18N_MOM_BTI_TYPES } from '@/data/teaTypesI18n';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface TieBreakModalProps {
  isOpen: boolean;
  competingTypes: MomBtiType[];
  onSelectFinalType: (type: MomBtiType, detail?: { question: string; selectedOption: string }) => void;
}

export default function TieBreakModal({
  isOpen,
  competingTypes,
  onSelectFinalType
}: TieBreakModalProps) {
  const { language, t } = useLanguage();

  if (!isOpen || competingTypes.length < 2) return null;

  // 동점 조합 키 판별 (예: WIND와 WARM이 동점인 경우)
  const isWindWarm = competingTypes.includes('WIND') && competingTypes.includes('WARM');
  const i18nData = isWindWarm ? I18N_TIE_BREAKER['WIND_WARM'] : null;
  const questionData = isWindWarm
    ? TIE_BREAKER_QUESTIONS['WIND_WARM']
    : TIE_BREAKER_QUESTIONS['DEFAULT_TIE'];

  // 현재 동점인 타입에 해당하는 선택지만 필터링
  const relevantOptions = questionData.options.filter((opt) =>
    competingTypes.includes(opt.type)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-tea-sand/80 transform animate-in zoom-in-95 duration-200">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {t('tieModalTitle')}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-tea-dark mb-2">
            {t('tieModalTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-tea-dark/70 leading-relaxed">
            {t('tieModalDesc')}
          </p>
        </div>

        {/* 보완 질문 제목 */}
        <div className="bg-tea-cream p-4 rounded-2xl border border-tea-sand mb-6">
          <p className="text-sm font-bold text-tea-dark text-center leading-snug">
            {i18nData ? (i18nData.question[language] || i18nData.question['ko']) : questionData.question}
          </p>
          <p className="text-xs text-tea-dark/60 text-center mt-1">
            {i18nData ? (i18nData.subtitle[language] || i18nData.subtitle['ko']) : questionData.subtitle}
          </p>
        </div>

        {/* 선택지 목록 */}
        <div className="space-y-3">
          {relevantOptions.map((opt) => {
            const typeInfo = MOM_BTI_TYPES[opt.type];
            const i18nOpt = i18nData?.options.find((o) => o.type === opt.type);
            const optText = i18nOpt ? (i18nOpt.text[language] || i18nOpt.text['ko']) : opt.text;
            const optDetail = i18nOpt ? (i18nOpt.detail[language] || i18nOpt.detail['ko']) : opt.detail;
            const questionText = i18nData ? (i18nData.question[language] || i18nData.question['ko']) : questionData.question;

            return (
              <button
                key={opt.type}
                type="button"
                onClick={() => onSelectFinalType(opt.type, {
                  question: questionText,
                  selectedOption: `[${opt.label}] ${optText} (${optDetail})`
                })}
                className="w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-tea-sand hover:border-tea-forest hover:bg-tea-forest/5 transition-all group flex items-start gap-3.5 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-tea-sand/70 text-tea-dark font-bold text-sm flex items-center justify-center flex-shrink-0 group-hover:bg-tea-forest group-hover:text-white transition-colors">
                  {opt.label}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-sm sm:text-base text-tea-dark group-hover:text-tea-forest transition-colors">
                      {I18N_MOM_BTI_TYPES[opt.type]?.name[language] || typeInfo.name} ({I18N_MOM_BTI_TYPES[opt.type]?.title[language] || typeInfo.title})
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-tea-sand/50 text-tea-dark/70 font-medium">
                      {opt.type}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-tea-dark/80 leading-relaxed mb-1.5">
                    {optText}
                  </p>
                  <p className="text-[11px] text-tea-forest/90 font-medium">
                    → {optDetail}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-center text-[11px] text-tea-dark/40 mt-5">
          {t('tieModalNote')}
        </p>
      </div>
    </div>
  );
}
