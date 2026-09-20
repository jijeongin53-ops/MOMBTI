'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShoppingBag,
  CalendarCheck,
  Share2,
  Download,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  Droplets,
  HeartHandshake,
  ShieldCheck,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOM_BTI_TYPES } from '@/data/teaTypes';
import { MomBtiType, SignatureTeaBlend } from '@/lib/types';
import BlendingVisualizer from '@/components/BlendingVisualizer';
import TeaCard from '@/components/TeaCard';
import ReservationModal from '@/components/ReservationModal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ResultPage() {
  const { t } = useLanguage();
  const [blend, setBlend] = useState<SignatureTeaBlend | null>(null);
  const [bodyType, setBodyType] = useState<MomBtiType>('WIND');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // 폭죽 효과 연출
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#2F6B55', '#E05A47', '#3B82F6', '#D97706', '#F472B6']
      });
    } catch (e) {}

    // 로컬 스토리지에서 저장된 결과 확인
    try {
      const savedBlend = localStorage.getItem('flunitea_blend_result');
      const savedType = localStorage.getItem('flunitea_body_type') as MomBtiType;

      if (savedBlend) {
        setBlend(JSON.parse(savedBlend));
      } else {
        // 기본 예시 데이터 (참고 예시: 20대 여성, 바람형 소양인, FLORAL 꽃향, REFRESH 상쾌함)
        setBlend({
          userName: '이지우',
          createdAt: new Date().toISOString(),
          baseType: 'WIND',
          baseTea: '캐모마일꽃차 & 구기자열매차',
          baseRatio: 50,
          tasteScent: 'FLORAL',
          tasteFlavor: 'CLEAR',
          tasteTea: '만개한 팬지꽃차 & 금어초 플로럴 블렌드',
          tasteRatio: 30,
          conditionKeyword: 'REFRESH',
          conditionTea: '맑고 청량한 페퍼민트 & 청귤 포인트',
          conditionRatio: 20,
          finalTeaName: '플루니티 [바람형] 플로럴 REFRESH 시그니처 티',
          finalColor: '#F472B6',
          finalDescription:
            '이지우 님의 WIND (소양인) 체질 기운(50%)을 든든하게 받치고, 선호하시는 꽃향(30%)과 오늘 얼굴 분석으로 도출된 REFRESH 상쾌함 에너지(20%)를 조화롭게 완성한 세상에 단 하나뿐인 블렌딩입니다.'
        });
      }

      if (savedType && MOM_BTI_TYPES[savedType]) {
        setBodyType(savedType);
      } else {
        setBodyType('WIND');
      }
    } catch (e) {
      setBodyType('WIND');
    }
  }, []);

  if (!blend) return null;

  const currentTypeInfo = MOM_BTI_TYPES[bodyType];

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `플루니티 [몸BTI] ${blend.finalTeaName}`,
          text: `나에게 가장 잘 맞는 맞춤 꽃차 블렌딩을 확인해보세요!`,
          url: window.location.href
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-5xl mx-auto space-y-12">
      {/* 1. 상단 인트로 & 축하 헤더 */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tea-forest/10 text-tea-forest text-xs font-bold mb-4">
          <Sparkles className="w-4 h-4 text-tea-forest" />
          {t('resultReportBadge')}
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-tea-dark mb-3">
          {blend.userName || 'Member'} {t('resultTitleSuffix')}
        </h1>
        <p className="text-xs sm:text-sm text-tea-dark/70 leading-relaxed">
          {blend.finalDescription}
        </p>
      </div>

      {/* 2. 핵심 블렌딩 시각화 (50:30:20 Blending Visualizer) */}
      <BlendingVisualizer blend={blend} />

      {/* 3. 진단된 체질 유형 상세 카드 (예: WIND 소양인 - 바람형) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-tea-sand/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-tea-sand">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-tea-forest block mb-1">
              01 MY BODY DIAGNOSIS
            </span>
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-tea-dark">
                {currentTypeInfo.name} ({currentTypeInfo.title})
              </h3>
              <div className="flex gap-1">
                {currentTypeInfo.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-tea-sand/60 text-tea-dark"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-tea-forest font-semibold mt-1">
              &quot;{currentTypeInfo.tagline}&quot;
            </p>
          </div>

          {/* 수기 메모 감성 뱃지 */}
          <div className="bg-amber-50/80 border-2 border-dashed border-amber-300 px-4 py-3 rounded-2xl transform rotate-1 flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <div className="text-xs">
              <span className="font-serif font-bold text-amber-900 block leading-tight">
                티 마스터 수기 메모
              </span>
              <span className="text-amber-800 text-[11px]">
                &quot;{currentTypeInfo.name}이 나한테 맞다&quot;
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-tea-dark/80 leading-relaxed my-6 font-medium">
          {currentTypeInfo.description}
        </p>

        {/* 체질 맞춤 추천 꽃차 도감 그리드 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif text-base sm:text-lg font-bold text-tea-dark flex items-center gap-2">
              <Droplets className="w-4 h-4 text-tea-forest" />
              {currentTypeInfo.name} 체질을 위한 플루니티 추천 꽃차 라인업
            </h4>
            <span className="text-xs text-tea-dark/50">
              총 {currentTypeInfo.recommendedTeas.length}종 수록
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentTypeInfo.recommendedTeas.map((tea, idx) => (
              <TeaCard key={tea.id} tea={tea} isPrimary={idx === 0} />
            ))}
          </div>
        </div>
      </div>

      {/* 4. 온라인 구매 & 정기구독 및 원데이 클래스 예약 CTA 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 네이버 스마트스토어 온라인 구매 & 구독 */}
        <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3 border border-emerald-500/30">
              <ShoppingBag className="w-3.5 h-3.5" />
              ONLINE STORE & SUBSCRIPTION
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">
              나만의 시그니처 티 구매 & 정기구독
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed mb-6">
              오늘 진단된 맞춤 비율(50:30:20)로 정성껏 블렌딩된 차를 바로 구매하거나,
              매달 신선하게 집으로 배송받는 정기구독을 시작해보세요.
            </p>
          </div>

          <div className="space-y-2.5">
            <a
              href="https://smartstore.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 px-6 rounded-2xl transition-all shadow-lg text-xs sm:text-sm active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              {t('buyOnStore')}
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-emerald-200/50 text-center">
              * Official online order & recurring monthly delivery
            </p>
          </div>
        </div>

        {/* 오프라인 원데이 클래스 체험 예약 */}
        <div className="bg-gradient-to-br from-[#2D2A26] to-[#1C1A18] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-500/30">
              <CalendarCheck className="w-3.5 h-3.5" />
              OFFLINE ATELIER CLASS
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">
              Flunitea Tea Atelier Experience
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/70 leading-relaxed mb-6">
              Private 70-minute tea blending class with master sommelier in Seongsu atelier.
            </p>
          </div>

          <div className="space-y-2.5">
            <button
              type="button"
              onClick={() => setIsReservationOpen(true)}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-2xl transition-all shadow-lg text-xs sm:text-sm active:scale-95"
            >
              <CalendarCheck className="w-4 h-4" />
              {t('bookClass')}
            </button>
            <p className="text-[11px] text-amber-200/50 text-center">
              * Private small-group reservation
            </p>
          </div>
        </div>
      </div>

      {/* 5. 하단 공유, 출력 및 재검사 조작 바 */}
      <div className="bg-tea-cream/80 border border-tea-sand p-6 rounded-3xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 bg-white border border-tea-sand hover:bg-tea-sand/50 text-tea-dark font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5 text-tea-forest" />
            {copied ? 'Copied!' : t('shareResult')}
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 bg-white border border-tea-sand hover:bg-tea-sand/50 text-tea-dark font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-tea-forest" />
            {t('printRecipe')}
          </button>
        </div>

        <Link
          href="/test"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-tea-dark/70 hover:text-tea-forest transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {t('retakeTest')}
        </Link>
      </div>

      {/* 예약 모달 */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        defaultMomBti={currentTypeInfo.name}
      />
    </div>
  );
}
