'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Flower2,
  Camera,
  Layers,
  ArrowRight,
  ShoppingBag,
  CalendarCheck,
  CheckCircle2,
  Droplets,
  Heart,
  Flame,
  Wind
} from 'lucide-react';
import { MOM_BTI_TYPES } from '@/data/teaTypes';
import { I18N_MOM_BTI_TYPES } from '@/data/teaTypesI18n';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { MomBtiType } from '@/lib/types';

export default function HomePage() {
  const { language, t } = useLanguage();
  const typeKeys: MomBtiType[] = ['SUN', 'FOREST', 'WIND', 'WARM'];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero 섹션 */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center overflow-hidden">
        {/* 은은한 배경 그라데이션 블러 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-tea-forest/10 via-amber-200/20 to-rose-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-tea-sand shadow-sm text-xs font-semibold text-tea-forest mb-6 animate-in fade-in slide-from-top-3 duration-500">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>{t('heroBadge')}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-tea-dark tracking-tight leading-[1.2] mb-6">
          {t('heroTitle1')}<br />
          <span className="text-tea-forest">{t('heroTitle2')}</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-tea-dark/70 leading-relaxed mb-10 font-normal">
          {t('heroSubtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/test"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-tea-forest hover:bg-tea-forest/90 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{t('heroCtaTest')}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/types"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-tea-dark font-semibold text-sm px-7 py-4 rounded-full border border-tea-sand shadow-sm transition-all"
          >
            <span>{t('heroCtaTypes')}</span>
          </Link>
        </div>

        {/* 3대 핵심 블렌딩 공식 배지 */}
        <div className="mt-14 max-w-3xl mx-auto p-4 sm:p-5 rounded-3xl bg-white/70 backdrop-blur-md border border-tea-sand/80 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <div className="p-3 rounded-2xl bg-tea-cream/60 border border-tea-sand/40">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-tea-forest text-white">50% BASE</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-tea-dark mt-1.5">{t('ratioBase')}</h4>
            <p className="text-[11px] text-tea-dark/60 mt-0.5">{t('ratioBaseDesc')}</p>
          </div>
          <div className="p-3 rounded-2xl bg-pink-50/50 border border-pink-200/40">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-500 text-white">30% TASTE</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-tea-dark mt-1.5">{t('ratioTaste')}</h4>
            <p className="text-[11px] text-tea-dark/60 mt-0.5">{t('ratioTasteDesc')}</p>
          </div>
          <div className="p-3 rounded-2xl bg-amber-50/50 border border-amber-200/40">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">20% TODAY</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-tea-dark mt-1.5">{t('ratioCondition')}</h4>
            <p className="text-[11px] text-tea-dark/60 mt-0.5">{t('ratioConditionDesc')}</p>
          </div>
        </div>
      </section>

      {/* 2. 솔루션 주요 기능 안내 3-CARD */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-tea-forest tracking-wider uppercase">{t('coreFeaturesBadge')}</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tea-dark mt-1 mb-2">
            {t('coreFeaturesTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-tea-dark/60">
            {t('coreFeaturesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 기능 1: 몸BTI 진단 테스트 & 동점 보완 질문 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-tea-sand/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-tea-forest/10 text-tea-forest flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-tea-dark mb-2">
                {t('feat1Title')}
              </h3>
              <p className="text-xs text-tea-dark/70 leading-relaxed mb-4">
                {t('feat1Desc')}
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-tea-forest font-medium pt-4 border-t border-tea-sand/60">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> {t('feat1Check1')}
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> {t('feat1Check2')}
              </li>
            </ul>
          </div>

          {/* 기능 2: 나만을 위한 차 추천 & 상세 안내 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-tea-sand/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-tea-dark mb-2">
                {t('feat2Title')}
              </h3>
              <p className="text-xs text-tea-dark/70 leading-relaxed mb-4">
                {t('feat2Desc')}
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-amber-700 font-medium pt-4 border-t border-tea-sand/60">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> {t('feat2Check1')}
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> {t('feat2Check2')}
              </li>
            </ul>
          </div>

          {/* 기능 3: 온라인 구매·구독 및 방문 예약 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-tea-sand/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-tea-dark mb-2">
                {t('feat3Title')}
              </h3>
              <p className="text-xs text-tea-dark/70 leading-relaxed mb-4">
                {t('feat3Desc')}
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-blue-700 font-medium pt-4 border-t border-tea-sand/60">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> {t('feat3Check1')}
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> {t('feat3Check2')}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 4대 몸BTI 유형 프리뷰 섹션 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-tea-forest tracking-wider uppercase">{t('archetypesBadge')}</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tea-dark mt-1 mb-2">
            {t('archetypesTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-tea-dark/60">
            {t('archetypesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {typeKeys.map((typeKey) => {
            const baseInfo = MOM_BTI_TYPES[typeKey];
            const i18nInfo = I18N_MOM_BTI_TYPES[typeKey];
            const name = i18nInfo?.name[language] || baseInfo.name;
            const title = i18nInfo?.title[language] || baseInfo.title;
            const tagline = i18nInfo?.tagline[language] || baseInfo.tagline;
            const desc = i18nInfo?.description[language] || baseInfo.description;
            const teas = i18nInfo?.recommendedTeas || baseInfo.recommendedTeas;

            return (
              <div
                key={typeKey}
                className="bg-white rounded-3xl p-6 border border-tea-sand/80 shadow-sm flex flex-col justify-between group hover:border-tea-forest transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="w-3.5 h-3.5 rounded-full"
                      style={{ backgroundColor: baseInfo.color }}
                    />
                    <span className="text-[11px] font-bold text-tea-dark/60">
                      {title}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-tea-dark mb-1">
                    {name}
                  </h3>
                  <p className="text-xs text-tea-forest font-semibold mb-3">
                    {tagline}
                  </p>
                  <p className="text-xs text-tea-dark/70 leading-relaxed mb-4">
                    {desc.slice(0, 75)}...
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-tea-dark/50 block mb-1.5 uppercase">
                    {t('mainTeasLabel')}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {teas.slice(0, 2).map((tea) => {
                      const teaName = typeof tea.name === 'object'
                        ? (tea.name[language] || tea.name['ko'])
                        : tea.name;
                      return (
                        <span
                          key={tea.id}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-tea-sand/50 text-tea-dark/80 font-medium"
                        >
                          {teaName}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. 하단 참여 유도 배너 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-tea-forest to-emerald-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            {t('ctaBannerBadge')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            {t('ctaBannerTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-lg mx-auto leading-relaxed mb-8">
            {t('ctaBannerSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/test"
              className="bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg transition-all"
            >
              {t('ctaStartTest')}
            </Link>
            <Link
              href="/auth"
              className="bg-emerald-800/80 hover:bg-emerald-800 text-white font-medium text-xs sm:text-sm px-7 py-3.5 rounded-full border border-emerald-500/40 transition-all"
            >
              {t('ctaRegister')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
