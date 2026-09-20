'use client';

import React from 'react';
import { Sparkles, Thermometer, Clock, CheckCircle2 } from 'lucide-react';
import { RecommendedTea } from '@/lib/types';

interface TeaCardProps {
  tea: RecommendedTea;
  isPrimary?: boolean;
}

export default function TeaCard({ tea, isPrimary = false }: TeaCardProps) {
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
          Primary Pair
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
              {tea.name}
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
          {tea.description}
        </p>

        {/* 효능 태그 */}
        <div className="mb-4">
          <span className="text-[11px] font-semibold text-tea-dark/80 block mb-1.5">
            🌿 건강 효능
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tea.benefits.map((benefit, idx) => (
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
            ✨ 향과 맛
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tea.flavorNotes.map((flavor, idx) => (
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
          <span>{tea.steepTime}</span>
        </div>
      </div>
    </div>
  );
}
