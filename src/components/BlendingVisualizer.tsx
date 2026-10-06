'use client';

import React from 'react';
import { Sparkles, Droplets, Flame, Clock, Heart, Award } from 'lucide-react';
import { SignatureTeaBlend } from '@/lib/types';
import { MOM_BTI_TYPES } from '@/data/teaTypes';
import { I18N_MOM_BTI_TYPES } from '@/data/teaTypesI18n';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface BlendingVisualizerProps {
  blend: SignatureTeaBlend;
}

export default function BlendingVisualizer({ blend }: BlendingVisualizerProps) {
  const { language, t } = useLanguage();
  const bodyInfo = MOM_BTI_TYPES[blend.baseType];
  const i18nBody = I18N_MOM_BTI_TYPES[blend.baseType];
  const currentBodyName = i18nBody?.name[language] || bodyInfo.name;
  const currentBodyTitle = i18nBody?.title[language] || bodyInfo.title;
  const currentBodyDesc = i18nBody?.description[language] || bodyInfo.description;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-tea-sand/80 relative overflow-hidden">
      {/* 상단 엠블럼 */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-tea-sand">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tea-forest/10 text-tea-forest text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-tea-forest" />
            MY SIGNATURE TEA RECIPE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tea-dark">
            {blend.finalTeaName}
          </h2>
          <p className="text-xs sm:text-sm text-tea-dark/70 mt-1">
            {t('visualizerGoldenRatio')}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-tea-cream px-4 py-2 rounded-2xl border border-tea-sand">
          <Award className="w-5 h-5 text-amber-600" />
          <div className="text-right">
            <span className="text-[10px] text-tea-dark/60 block leading-none">{t('visualizerMasterBlend')}</span>
            <span className="text-xs font-bold text-tea-dark">No. FL-{(Math.random() * 8999 + 1000).toFixed(0)}</span>
          </div>
        </div>
      </div>

      {/* 중앙: 3단 블렌딩 시각화 & 찻잔 수색 뷰어 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-center">
        {/* 좌측: 찻잔 수색 시각화 */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* 찻잔 받침 그림자 */}
            <div className="absolute bottom-4 w-48 h-8 bg-tea-dark/10 rounded-full blur-md" />

            {/* 투명 유리 찻잔 본체 */}
            <div className="relative w-48 h-56 rounded-b-[4rem] rounded-t-lg border-4 border-white/80 bg-white/30 backdrop-blur-md shadow-2xl overflow-hidden flex flex-col justify-end p-2">
              {/* 스팀 아로마 효과 */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-2 animate-aroma pointer-events-none opacity-60">
                <div className="w-2 h-10 bg-gradient-to-t from-white/40 to-transparent rounded-full blur-[1px]" />
                <div className="w-2.5 h-14 bg-gradient-to-t from-white/60 to-transparent rounded-full blur-[1px] -mt-2" />
                <div className="w-2 h-8 bg-gradient-to-t from-white/40 to-transparent rounded-full blur-[1px]" />
              </div>

              {/* 3단 블렌딩 티 레이어 */}
              <div className="w-full flex flex-col gap-0.5 rounded-b-[3.5rem] overflow-hidden transition-all duration-700">
                {/* 3. Condition Layer (20%) */}
                <div
                  className="w-full h-10 flex items-center justify-center text-[10px] font-bold text-white shadow-inner transition-all hover:brightness-110"
                  style={{ backgroundColor: '#F59E0B' }}
                  title={`20% ${blend.conditionKeyword}`}
                >
                  <span className="drop-shadow">20% {blend.conditionKeyword}</span>
                </div>

                {/* 2. Taste Layer (30%) */}
                <div
                  className="w-full h-14 flex items-center justify-center text-[10px] font-bold text-white shadow-inner transition-all hover:brightness-110"
                  style={{ backgroundColor: blend.tasteScent === 'FLORAL' ? '#EC4899' : '#3B82F6' }}
                  title={`30% ${blend.tasteScent}`}
                >
                  <span className="drop-shadow">30% {blend.tasteScent}</span>
                </div>

                {/* 1. Base Body Layer (50%) */}
                <div
                  className="w-full h-24 flex flex-col items-center justify-center text-xs font-bold text-white shadow-inner transition-all hover:brightness-110"
                  style={{ backgroundColor: bodyInfo.color }}
                  title={`50% ${currentBodyName}`}
                >
                  <span className="drop-shadow text-[11px]">50% BASE</span>
                  <span className="drop-shadow text-[9px] opacity-90">{currentBodyName}</span>
                </div>
              </div>

              {/* 유리잔 반사광 */}
              <div className="absolute top-2 left-3 w-3 h-40 bg-gradient-to-b from-white/60 to-transparent rounded-full pointer-events-none" />
            </div>
          </div>

          <p className="text-xs text-tea-dark/60 text-center mt-2 flex items-center gap-1">
            <Droplets className="w-3.5 h-3.5 text-tea-forest" />
            {t('visualizerColorGradation')}
          </p>
        </div>

        {/* 우측: 3요소 비율 카드 및 설명 */}
        <div className="lg:col-span-7 space-y-4">
          {/* 1. Base 50% */}
          <div className="p-4 rounded-2xl border-2 border-tea-forest/20 bg-tea-cream/60 flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl text-white font-bold flex flex-col items-center justify-center flex-shrink-0 shadow-sm"
              style={{ backgroundColor: bodyInfo.color }}
            >
              <span className="text-xs">BASE</span>
              <span className="text-sm leading-none">50%</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-sm text-tea-dark">
                  01 MY BODY: {currentBodyName} ({currentBodyTitle})
                </h4>
                <span className="text-[11px] font-semibold text-tea-forest">{t('visualizerBaseLabel')}</span>
              </div>
              <p className="text-xs text-tea-dark/80 mt-1 font-medium">
                {t('ratioBaseDesc')}: <strong className="text-tea-dark">{blend.baseTea}</strong>
              </p>
              <p className="text-[11px] text-tea-dark/60 mt-0.5">
                {currentBodyDesc.slice(0, 75)}...
              </p>
            </div>
          </div>

          {/* 2. Taste 30% */}
          <div className="p-4 rounded-2xl border-2 border-pink-200 bg-pink-50/40 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 text-white font-bold flex flex-col items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-xs">TASTE</span>
              <span className="text-sm leading-none">30%</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-sm text-tea-dark">
                  02 MY TASTE: {blend.tasteScent} ({blend.tasteFlavor})
                </h4>
                <span className="text-[11px] font-semibold text-rose-600">{t('visualizerTasteLabel')}</span>
              </div>
              <p className="text-xs text-tea-dark/80 mt-1 font-medium">
                {t('ratioTasteDesc')}: <strong className="text-tea-dark">{blend.tasteTea}</strong>
              </p>
            </div>
          </div>

          {/* 3. Condition 20% */}
          <div className="p-4 rounded-2xl border-2 border-amber-200 bg-amber-50/40 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 text-white font-bold flex flex-col items-center justify-center flex-shrink-0 shadow-sm">
              <span className="text-xs">TODAY</span>
              <span className="text-sm leading-none">20%</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-sm text-tea-dark">
                  03 TODAY: {blend.conditionKeyword}
                </h4>
                <span className="text-[11px] font-semibold text-amber-700">{t('visualizerConditionLabel')}</span>
              </div>
              <p className="text-xs text-tea-dark/80 mt-1 font-medium">
                {t('ratioConditionDesc')}: <strong className="text-tea-dark">{blend.conditionTea}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단: 브루잉 가이드 */}
      <div className="mt-4 pt-6 border-t border-tea-sand grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-3 bg-tea-sand/30 rounded-2xl">
          <Flame className="w-4 h-4 text-amber-600 mx-auto mb-1" />
          <span className="text-[11px] text-tea-dark/60 block">{t('visualizerBrewTemp')}</span>
          <span className="text-xs font-bold text-tea-dark">90℃ ~ 95℃</span>
        </div>
        <div className="p-3 bg-tea-sand/30 rounded-2xl">
          <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
          <span className="text-[11px] text-tea-dark/60 block">{t('visualizerBrewTime')}</span>
          <span className="text-xs font-bold text-tea-dark">3분 ~ 3분 30초</span>
        </div>
        <div className="p-3 bg-tea-sand/30 rounded-2xl">
          <Droplets className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
          <span className="text-[11px] text-tea-dark/60 block">{t('visualizerBrewAmount')}</span>
          <span className="text-xs font-bold text-tea-dark">250~300ml</span>
        </div>
        <div className="p-3 bg-tea-sand/30 rounded-2xl">
          <Heart className="w-4 h-4 text-rose-600 mx-auto mb-1" />
          <span className="text-[11px] text-tea-dark/60 block">{t('visualizerBrewTiming')}</span>
          <span className="text-xs font-bold text-tea-dark">{t('visualizerTimingVal')}</span>
        </div>
      </div>
    </div>
  );
}
