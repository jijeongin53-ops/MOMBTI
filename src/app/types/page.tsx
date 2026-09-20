'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Flower2, ArrowRight } from 'lucide-react';
import { MOM_BTI_TYPES } from '@/data/teaTypes';
import { MomBtiType } from '@/lib/types';
import TeaCard from '@/components/TeaCard';

export default function TypesGuidePage() {
  const [activeType, setActiveType] = useState<MomBtiType>('WIND');
  const typeKeys: MomBtiType[] = ['SUN', 'FOREST', 'WIND', 'WARM'];

  const currentInfo = MOM_BTI_TYPES[activeType];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
      {/* 상단 헤더 */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-tea-forest/10 text-tea-forest text-xs font-semibold mb-3">
          <Flower2 className="w-3.5 h-3.5" />
          사상체질 4대 유형 & 추천 꽃차 도감
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-tea-dark mb-3">
          나를 닮은 자연의 한 잔, 4대 몸BTI
        </h1>
        <p className="text-xs sm:text-sm text-tea-dark/70 leading-relaxed">
          자연의 네 가지 계절과 기운에 빗대어 풀어낸 사상체질의 현대적 재해석.
          각 체질이 가진 고유한 매력과 에너지를 조화롭게 북돋워 주는 꽃차들을 만나보세요.
        </p>
      </div>

      {/* 4대 유형 선택 탭 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {typeKeys.map((typeKey) => {
          const item = MOM_BTI_TYPES[typeKey];
          const isSelected = activeType === typeKey;
          return (
            <button
              key={typeKey}
              onClick={() => setActiveType(typeKey)}
              className={`p-4 rounded-2xl text-center transition-all border-2 flex flex-col items-center justify-center ${
                isSelected
                  ? 'border-tea-forest bg-white shadow-md scale-105'
                  : 'border-tea-sand/80 bg-tea-sand/20 hover:bg-white hover:border-tea-sand'
              }`}
            >
              <div
                className="w-3 h-3 rounded-full mb-2 shadow-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-serif font-bold text-sm sm:text-base text-tea-dark block leading-none mb-1">
                {item.name}
              </span>
              <span className="text-[11px] text-tea-dark/60 font-medium">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* 선택된 유형 상세 안내 섹션 */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-tea-sand/80">
        <div className="pb-8 border-b border-tea-sand flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: currentInfo.color }}
              />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tea-dark">
                {currentInfo.name} ({currentInfo.title})
              </h2>
            </div>
            <p className="text-sm font-semibold text-tea-forest">
              &quot;{currentInfo.tagline}&quot;
            </p>
          </div>

          <div className="flex gap-1.5 flex-wrap">
            {currentInfo.keywords.map((kw) => (
              <span
                key={kw}
                className="text-xs font-bold px-3 py-1 rounded-full bg-tea-sand/60 text-tea-dark"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        <div className="py-6">
          <p className="text-xs sm:text-sm text-tea-dark/80 leading-relaxed font-medium">
            {currentInfo.description}
          </p>
        </div>

        {/* 추천 꽃차 리스트 */}
        <div className="pt-4">
          <h3 className="font-serif text-lg font-bold text-tea-dark mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            {currentInfo.name} 맞춤 추천 꽃차 도감
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentInfo.recommendedTeas.map((tea, idx) => (
              <TeaCard key={tea.id} tea={tea} isPrimary={idx === 0} />
            ))}
          </div>
        </div>
      </div>

      {/* 하단 진단 유도 배너 */}
      <div className="bg-tea-cream/80 border border-tea-sand rounded-3xl p-8 text-center max-w-xl mx-auto space-y-4">
        <h3 className="font-serif text-xl font-bold text-tea-dark">
          나는 4가지 중 어떤 유형에 속할까요?
        </h3>
        <p className="text-xs sm:text-sm text-tea-dark/70 leading-relaxed">
          8가지 몸BTI 문항과 얼굴 안색 분석을 통해 나만의 50:30:20 시그니처 블렌딩을 지금 확인해보세요.
        </p>
        <Link
          href="/test"
          className="inline-flex items-center gap-2 bg-tea-forest text-white font-semibold text-xs py-3 px-6 rounded-full hover:bg-tea-forest/90 transition-all shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          몸BTI 무료 진단 시작하기
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
