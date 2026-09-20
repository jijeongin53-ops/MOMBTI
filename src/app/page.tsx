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

export default function HomePage() {
  const types = Object.values(MOM_BTI_TYPES);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero 섹션 */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center overflow-hidden">
        {/* 은은한 배경 그라데이션 블러 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-tea-forest/10 via-amber-200/20 to-rose-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-tea-sand shadow-sm text-xs font-semibold text-tea-forest mb-6 animate-in fade-in slide-in-from-top-3 duration-500">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>사상체질과 현대 라이프스타일의 만남 · 플루니티</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-tea-dark tracking-tight leading-[1.2] mb-6">
          내 몸의 기운과 취향을 닮은<br />
          <span className="text-tea-forest">세상에 단 하나뿐인 꽃차 블렌딩</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-tea-dark/70 leading-relaxed mb-10 font-normal">
          사상체질의 전통적 관점에 영감을 받아 현대인의 일상, 신체 상태, 라이프스타일 및 차 취향을 결합한 웰니스 티 솔루션.<br className="hidden sm:inline" />
          나의 체질 유형(50%) + 차 취향(30%) + 오늘의 얼굴 안색 컨디션(20%)으로 완성하는 나만의 시그니처 티를 지금 만나보세요.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/test"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-tea-forest hover:bg-tea-forest/90 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>나의 몸BTI 진단 시작하기</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/types"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-tea-dark font-semibold text-sm px-7 py-4 rounded-full border border-tea-sand shadow-sm transition-all"
          >
            <span>4대 체질 및 꽃차 도감 보기</span>
          </Link>
        </div>

        {/* 3대 핵심 블렌딩 공식 배지 */}
        <div className="mt-14 max-w-3xl mx-auto p-4 sm:p-5 rounded-3xl bg-white/70 backdrop-blur-md border border-tea-sand/80 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <div className="p-3 rounded-2xl bg-tea-cream/60 border border-tea-sand/40">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-tea-forest text-white">50% BASE</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-tea-dark mt-1.5">나의 사상체질</h4>
            <p className="text-[11px] text-tea-dark/60 mt-0.5">1~8번 문항 + 동점 보완 질문으로 확정</p>
          </div>
          <div className="p-3 rounded-2xl bg-pink-50/50 border border-pink-200/40">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-500 text-white">30% TASTE</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-tea-dark mt-1.5">나의 차 취향</h4>
            <p className="text-[11px] text-tea-dark/60 mt-0.5">선호하는 꽃향, 산뜻한 맛과 아로마</p>
          </div>
          <div className="p-3 rounded-2xl bg-amber-50/50 border border-amber-200/40">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">20% TODAY</span>
            <h4 className="font-serif font-bold text-xs sm:text-sm text-tea-dark mt-1.5">오늘의 안색 컨디션</h4>
            <p className="text-[11px] text-tea-dark/60 mt-0.5">카메라 얼굴 스캔 기반 웰니스 키워드</p>
          </div>
        </div>
      </section>

      {/* 2. 솔루션 주요 기능 안내 3-CARD */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-tea-forest tracking-wider uppercase">CORE FEATURES</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tea-dark mt-1 mb-2">
            플루니티 몸BTI의 핵심 솔루션
          </h2>
          <p className="text-xs sm:text-sm text-tea-dark/60">
            체질 진단부터 맞춤 블렌딩, 구매·정기구독과 오프라인 체험까지 한 번에
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
                1. 몸BTI 체질 진단 & 동점 보완
              </h3>
              <p className="text-xs text-tea-dark/70 leading-relaxed mb-4">
                신체 상태와 일상 습관을 점검하는 1~8번 문항으로 4대 체질을 분석합니다.
                점수가 팽팽하게 맞서는 동점(A/C/D 동점 등) 발생 시, 식습관과 체온을 묻는 보완 질문을 즉시 제시하여 확실한 유형을 도출합니다.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-tea-forest font-medium pt-4 border-t border-tea-sand/60">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 8문항 정밀 체질 집계
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 동점 시 1:1 결정적 보완 문항
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
                2. 맞춤 꽃차 추천 & 상세 도감
              </h3>
              <p className="text-xs text-tea-dark/70 leading-relaxed mb-4">
                진단된 몸BTI 유형에 맞춘 최적의 꽃차를 상세히 안내합니다.
                내 몸에 어디가 좋은지(건강 효능), 우리는 차의 색깔(수색), 은은한 향과 맛의 노트를 인터랙티브 카드로 탐색할 수 있습니다.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-amber-700 font-medium pt-4 border-t border-tea-sand/60">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 영롱한 수색(Color) 그라데이션
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 효능, 향미 및 우리는 법 안내
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
                3. 온라인 구매·구독 & 클래스 예약
              </h3>
              <p className="text-xs text-tea-dark/70 leading-relaxed mb-4">
                추천받은 맞춤 차를 네이버 스마트스토어에서 바로 구매하거나 집으로 매달 배송받는 정기구독 서비스로 연계됩니다.
                플루니티 아틀리에 원데이 클래스 사전 예약도 간편하게 신청할 수 있습니다.
              </p>
            </div>
            <ul className="space-y-1.5 text-xs text-blue-700 font-medium pt-4 border-t border-tea-sand/60">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 스마트스토어 & 정기배송
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 구글 시트 연동 원데이 예약
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. 4대 몸BTI 유형 프리뷰 섹션 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-tea-forest tracking-wider uppercase">MOM-BTI 4 ARCHETYPES</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tea-dark mt-1 mb-2">
            사상체질로 만나는 4가지 웰니스 유형
          </h2>
          <p className="text-xs sm:text-sm text-tea-dark/60">
            당신의 일상과 체질에는 어떤 꽃차의 기운이 가장 필요할까요?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {types.map((t) => (
            <div
              key={t.type}
              className="bg-white rounded-3xl p-6 border border-tea-sand/80 shadow-sm flex flex-col justify-between group hover:border-tea-forest transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: t.color }}
                  />
                  <span className="text-[11px] font-bold text-tea-dark/60">
                    {t.title}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-tea-dark mb-1">
                  {t.name}
                </h3>
                <p className="text-xs text-tea-forest font-semibold mb-3">
                  {t.tagline}
                </p>
                <p className="text-xs text-tea-dark/70 leading-relaxed mb-4">
                  {t.description.slice(0, 70)}...
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-tea-dark/50 block mb-1.5 uppercase">
                  대표 꽃차
                </span>
                <div className="flex flex-wrap gap-1">
                  {t.recommendedTeas.slice(0, 2).map((tea) => (
                    <span
                      key={tea.id}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-tea-sand/50 text-tea-dark/80 font-medium"
                    >
                      {tea.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 하단 참여 유도 배너 */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-tea-forest to-emerald-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            3분 만에 찾는 나만의 인생 꽃차
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            지금, 나에게 맞는 꽃차를 만나보세요
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-lg mx-auto leading-relaxed mb-8">
            회원가입 후 설문과 얼굴 촬영을 마치면, 플루니티 전문 티 마스터의
            50:30:20 개인 맞춤 블렌딩 레시피가 즉시 생성됩니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/test"
              className="bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-lg transition-all"
            >
              몸BTI 진단 시작하기
            </Link>
            <Link
              href="/auth"
              className="bg-emerald-800/80 hover:bg-emerald-800 text-white font-medium text-xs sm:text-sm px-7 py-3.5 rounded-full border border-emerald-500/40 transition-all"
            >
              회원가입 (국가 선택)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
