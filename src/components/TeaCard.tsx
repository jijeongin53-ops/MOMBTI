'use client';

import React from 'react';
import { Sparkles, Thermometer, Clock, CheckCircle2 } from 'lucide-react';
import { RecommendedTea } from '@/lib/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface TeaCardProps {
  tea: any;
  isPrimary?: boolean;
}

export default function TeaCard({ tea, isPrimary = false }: TeaCardProps) {
  const { language, t } = useLanguage();

  const name = typeof tea.name === 'object' ? (tea.name[language] || tea.name['ko']) : tea.name;
  const description = typeof tea.description === 'object' ? (tea.description[language] || tea.description['ko']) : tea.description;
  const benefits = typeof tea.benefits === 'object' && !Array.isArray(tea.benefits)
    ? (tea.benefits[language] || tea.benefits['ko'] || [])
    : (Array.isArray(tea.benefits) ? tea.benefits : []);
  const flavorNotes = typeof tea.flavorNotes === 'object' && !Array.isArray(tea.flavorNotes)
    ? (tea.flavorNotes[language] || tea.flavorNotes['ko'] || [])
    : (Array.isArray(tea.flavorNotes) ? tea.flavorNotes : []);
  const steepTime = typeof tea.steepTime === 'object' ? (tea.steepTime[language] || tea.steepTime['ko']) : tea.steepTime;

  return (
    <div
      className={`rounded-3xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
        isPrimary
          ? 'bg-white shadow-xl border-2 border-tea-forest/40 ring-4 ring-tea-forest/5'
          : 'bg-white/90 shadow-sm hover:shadow-md border border-tea-sand/80'
      }`}
    >
      {/* 대표 추천 뱃지 */}
      {isPrimary && (
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 bg-tea-forest text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3 h-3" />
          PRIMARY
        </div>
      )}

      <div>
        {/* 상단: 수색 표시 및 차 타이틀 */}
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-2xl shadow-inner border border-white/60 flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: tea.steepColor }}
            title={`수색: ${tea.steepColor}`}
          >
            <div className="w-3 h-3 rounded-full bg-white/40 blur-[1px]" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-tea-dark leading-tight">
              {name}
            </h4>
            {tea.botanicalName && (
              <span className="text-[11px] italic text-tea-dark/50 font-serif">
                {tea.botanicalName}
              </span>
            )}
          </div>
        </div>

        {/* 차 설명 */}
        <p className="text-xs text-tea-dark/70 leading-relaxed mb-4">
          {description}
        </p>

        {/* 효능 태그 */}
        <div className="mb-4">
          <span className="text-[11px] font-semibold text-tea-dark/80 block mb-1.5">
            🌿 {t('benefitsLabel')}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {benefits.map((benefit: string, idx: number) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-tea-forest/10 text-tea-forest text-[11px] font-medium"
              >
                <CheckCircle2 className="w-3 h-3" />
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* 향과 맛 (플레이버 노트) */}
        <div className="mb-4">
          <span className="text-[11px] font-semibold text-tea-dark/80 block mb-1.5">
            ✨ {t('flavorLabel')}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {flavorNotes.map((flavor: string, idx: number) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-lg bg-tea-sand/50 text-tea-dark/80 text-[11px] font-medium border border-tea-sand"
              >
                {flavor}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 우리는 가이드 */}
      <div className="pt-3 border-t border-tea-sand/60 flex items-center justify-between text-xs text-tea-dark/60 font-medium">
        <div className="flex items-center gap-1">
          <Thermometer className="w-3.5 h-3.5 text-amber-600" />
          <span>{tea.steepTemp}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          <span>{steepTime}</span>
        </div>
      </div>
    </div>
  );
}
