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
  FileText,
  MessageSquare,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOM_BTI_TYPES } from '@/data/teaTypes';
import { I18N_MOM_BTI_TYPES } from '@/data/teaTypesI18n';
import { MomBtiType, SignatureTeaBlend } from '@/lib/types';
import BlendingVisualizer from '@/components/BlendingVisualizer';
import TeaCard from '@/components/TeaCard';
import ReservationModal from '@/components/ReservationModal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ResultPage() {
  const { language, t } = useLanguage();
  const [blend, setBlend] = useState<SignatureTeaBlend | null>(null);
  const [bodyType, setBodyType] = useState<MomBtiType>('WIND');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareNotice, setShareNotice] = useState<string | null>(null);

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
          baseTea: '메리골드꽃차 (Base), 금어초꽃차 (Base), 구기자차 (Blending)',
          baseTeas: ['메리골드꽃차 (Base)', '금어초꽃차 (Base)', '구기자차 (Blending)'],
          baseRatio: 50,
          tasteScent: 'FLORAL',
          tasteFlavor: 'CLEAR',
          tasteTea: '팬지꽃차, 금어초꽃차, 장미꽃차',
          tasteTeas: ['팬지꽃차', '금어초꽃차', '장미꽃차'],
          tasteRatio: 30,
          conditionKeyword: 'REFRESH',
          conditionTea: '레몬그라스차, 청귤차, 목련꽃차',
          conditionTeas: ['레몬그라스차', '청귤차', '목련꽃차'],
          conditionRatio: 20,
          finalTeaName: '플루니티 [바람형] 플로럴 REFRESH 시그니처 티',
          finalColor: '#F472B6',
          finalDescription:
            '이지우 님의 WIND (소양인) 체질 기운(50%)을 든든하게 받치고, 선호하시는 꽃향(30%)과 오늘 얼굴 분석으로 도출된 REFRESH 상쾌함 에너지(20%)를 각 파트별 3종씩 조화롭게 완성한 세상에 단 하나뿐인 블렌딩입니다.'
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
  const i18nType = I18N_MOM_BTI_TYPES[bodyType];
  const typeName = i18nType?.name[language] || currentTypeInfo.name;
  const typeTitle = i18nType?.title[language] || currentTypeInfo.title;
  const typeTagline = i18nType?.tagline[language] || currentTypeInfo.tagline;
  const typeDesc = i18nType?.description[language] || currentTypeInfo.description;
  const typeTeas = i18nType?.recommendedTeas || currentTypeInfo.recommendedTeas;

  // 문자(SMS) 및 카카오톡 공유용 요약 텍스트 생성
  const buildShareText = () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.origin : '';
    return [
      `🌿 [FLUNITEA 몸BTI 진단 결과]`,
      `Discover Your Body Type, Find Your Tea!`,
      ``,
      `👤 ${blend.userName || '회원'}님의 시그니처 티:`,
      `✨ ${blend.finalTeaName}`,
      ``,
      `1️⃣ 체질 추천차 (50% - ${typeName}):`,
      `• ${blend.baseTea}`,
      `2️⃣ 취향 추천차 (30% - ${blend.tasteScent}):`,
      `• ${blend.tasteTea}`,
      `3️⃣ 컨디션 추천차 (20% - ${blend.conditionKeyword}):`,
      `• ${blend.conditionTea}`,
      ``,
      `🌡️ 권장 우림 온도: 90~100℃ (3분)`,
      `🔗 나만의 꽃차 진단하기: ${shareUrl}`
    ].join('\n');
  };

  // 문자(SMS)로 결과 공유
  const handleShareSms = () => {
    const text = buildShareText();
    try {
      navigator.clipboard.writeText(text);
    } catch (e) {}
    const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const separator = isIOS ? '&' : '?';
    window.location.href = `sms:${separator}body=${encodeURIComponent(text)}`;
    setShareNotice('문자(SMS) 앱을 실행하고 진단 결과 텍스트를 복사했습니다.');
    setTimeout(() => setShareNotice(null), 4000);
  };

  // 카카오톡으로 결과 공유 (모바일 Web Share 연동 + 클립보드 자동 복사)
  const handleShareKakao = async () => {
    const text = buildShareText();
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {}

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `[FLUNITEA 몸BTI] ${blend.finalTeaName}`,
          text,
          url: window.location.origin
        });
        return;
      } catch (e) {
        // 사용자가 공유 창을 닫은 경우 클립보드 안내로 폴백
      }
    }

    setShareNotice('카카오톡 공유용 진단 결과가 복사되었습니다! 카카오톡 채팅방에 붙여넣기(Ctrl+V) 해주세요.');
    setTimeout(() => setShareNotice(null), 5000);
  };

  const handleShare = () => {
    const text = buildShareText();
    if (navigator.share) {
      navigator
        .share({
          title: `FLUNITEA [MomBTI] ${blend.finalTeaName}`,
          text,
          url: window.location.href
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tea-forest/10 text-tea-forest text-xs font-bold mb-3">
          <Sparkles className="w-4 h-4 text-tea-forest" />
          {t('resultReportBadge')}
        </div>
        <p className="text-xs font-serif font-bold tracking-wider text-tea-forest uppercase mb-2">
          Discover Your Body Type, Find Your Tea!
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-tea-dark mb-3">
          {blend.userName || 'Member'} {t('resultTitleSuffix')}
        </h1>
        <p className="text-xs sm:text-sm text-tea-dark/70 leading-relaxed">
          {blend.finalDescription}
        </p>

        {/* 상단 빠른 문자 & 카카오톡 공유 버튼 바 */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={handleShareKakao}
            className="inline-flex items-center gap-2 bg-[#FEE500] hover:bg-[#FDD800] text-[#191919] font-bold text-xs px-5 py-3 rounded-full shadow-sm transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            카카오톡으로 결과 공유
          </button>
          <button
            type="button"
            onClick={handleShareSms}
            className="inline-flex items-center gap-2 bg-tea-forest hover:bg-tea-forest/90 text-white font-bold text-xs px-5 py-3 rounded-full shadow-sm transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            문자(SMS)로 결과 전송
          </button>
        </div>

        {shareNotice && (
          <div className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{shareNotice}</span>
          </div>
        )}
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
                {typeName} ({typeTitle})
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
              &quot;{typeTagline}&quot;
            </p>
          </div>

          {/* 수기 메모 감성 뱃지 */}
          <div className="bg-amber-50/80 border-2 border-dashed border-amber-300 px-4 py-3 rounded-2xl transform rotate-1 flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <div className="text-xs">
              <span className="font-serif font-bold text-amber-900 block leading-tight">
                {t('resultMasterNote')}
              </span>
              <span className="text-amber-800 text-[11px]">
                &quot;{typeName} {t('resultSuitsMe')}&quot;
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-tea-dark/80 leading-relaxed my-6 font-medium">
          {typeDesc}
        </p>

        {/* 체질 맞춤 추천 꽃차 도감 그리드 (Base 꽃차 4종 & Blending 차 3종) */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif text-base sm:text-lg font-bold text-tea-dark flex items-center gap-2">
                <Droplets className="w-4 h-4 text-tea-forest" />
                {typeName} Base 꽃차 (중심 베이스 꽃차)
              </h4>
              <span className="text-xs font-semibold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                우림 온도 90~100℃
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {typeTeas
                .filter((tea: any) => !tea.category || tea.category === 'BASE')
                .map((tea: any, idx: number) => (
                  <TeaCard key={tea.id} tea={tea} isPrimary={idx < 2} />
                ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif text-base sm:text-lg font-bold text-tea-dark flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                {typeName} Blending 차 (밸런스 블렌딩 차)
              </h4>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                우림 온도 90~100℃
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {typeTeas
                .filter((tea: any) => tea.category === 'BLENDING')
                .map((tea: any, idx: number) => (
                  <TeaCard key={tea.id} tea={tea} isPrimary={idx === 0} />
                ))}
            </div>
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
              {t('resultBuyTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed mb-6">
              {t('resultBuyDesc')}
            </p>
          </div>

          <div className="space-y-2.5">
            <a
              href="https://smartstore.naver.com/fl88"
              target="_blank"
              rel="noopener"
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
              {t('resultAtelierTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/70 leading-relaxed mb-6">
              {t('resultAtelierDesc')}
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
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleShareKakao}
            className="inline-flex items-center gap-1.5 bg-[#FEE500] hover:bg-[#FDD800] text-[#191919] font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            카카오톡 공유
          </button>
          <button
            type="button"
            onClick={handleShareSms}
            className="inline-flex items-center gap-1.5 bg-tea-forest hover:bg-tea-forest/90 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            문자(SMS) 공유
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 bg-white border border-tea-sand hover:bg-tea-sand/50 text-tea-dark font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5 text-tea-forest" />
            {copied ? '복사 완료!' : t('shareResult')}
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
