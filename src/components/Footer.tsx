'use client';

import Link from 'next/link';
import { Flower2, ShoppingBag, MessageCircle, ExternalLink, ShieldAlert } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#1C1A18] text-tea-sand/80 pt-16 pb-12 border-t border-tea-dark/20 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* 브랜드 소개 */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-tea-forest/20 text-tea-forest flex items-center justify-center">
                <Flower2 className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                FLUNITEA
              </span>
            </div>
            <p className="text-tea-sand/70 max-w-md leading-relaxed text-xs sm:text-sm">
              {t('footerDesc')}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://smartstore.naver.com/fl88"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 text-xs hover:bg-emerald-900/60 transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                {t('snsStoreTitle')}
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.instagram.com/flunitea/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-950/60 text-pink-400 border border-pink-500/30 text-xs hover:bg-pink-900/60 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                {t('snsInstaTitle')}
              </a>
              <a
                href="https://open.kakao.com/o/sP3AeIUe"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-950/60 text-amber-400 border border-amber-500/30 text-xs hover:bg-amber-900/60 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {t('snsKakaoTitle')}
              </a>
            </div>
          </div>

          {/* 주요 메뉴 링크 */}
          <div>
            <h4 className="text-white font-semibold mb-3 tracking-wide">{t('footerExplore')}</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-tea-sand/70">
              <li>
                <Link href="/test" className="hover:text-emerald-400 transition-colors">
                  {t('navTest')}
                </Link>
              </li>
              <li>
                <Link href="/types" className="hover:text-emerald-400 transition-colors">
                  {t('navTypes')}
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-emerald-400 transition-colors">
                  {t('navReservation')}
                </Link>
              </li>
              <li>
                <Link href="/auth" className="hover:text-emerald-400 transition-colors">
                  {t('navLogin')}
                </Link>
              </li>
            </ul>
          </div>

          {/* 오프라인 스튜디오 안내 */}
          <div>
            <h4 className="text-white font-semibold mb-3 tracking-wide">{t('footerStudio')}</h4>
            <p className="text-xs text-tea-sand/70 leading-relaxed">
              {t('footerAddress')}<br />
              {t('footerHours')}<br />
              {t('footerContact')}<br />
              {t('footerBusinessNo')}
            </p>
          </div>
        </div>

        {/* 의학적 진단 면책 안내 */}
        <div className="mt-8 pt-6 flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-tea-sand/60">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t('disclaimer')}
          </p>
        </div>

        <div className="mt-8 text-center text-xs text-tea-sand/40">
          © {new Date().getFullYear()} FLUNITEA Inc. All rights reserved. Designed for your inner wellness.
        </div>
      </div>
    </footer>
  );
}
