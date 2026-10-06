'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Flower2, CalendarCheck, User, LogOut, ShoppingBag, Globe } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Language } from '@/lib/i18n/translations';

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // 세션 스토리지 또는 로컬 스토리지에서 회원 정보 확인
    const checkUser = () => {
      try {
        const saved = localStorage.getItem('flunitea_user');
        if (saved) {
          setCurrentUser(JSON.parse(saved));
        } else {
          setCurrentUser(null);
        }
      } catch (e) {
        setCurrentUser(null);
      }
    };
    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('flunitea_user');
    setCurrentUser(null);
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-50 glass-tea border-b border-tea-sand/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* 브랜드 로고 */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-tea-forest/10 flex items-center justify-center text-tea-forest group-hover:bg-tea-forest group-hover:text-white transition-all shadow-sm">
            <Flower2 className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-wider text-tea-dark block leading-none">
              FLUNITEA
            </span>
            <span className="text-[11px] font-medium tracking-widest text-tea-forest uppercase">
              {t('brandTagline')}
            </span>
          </div>
        </Link>

        {/* 내비게이션 메뉴 */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-tea-dark/80">
          <Link
            href="/test"
            className={`flex items-center gap-1.5 transition-colors hover:text-tea-forest ${
              pathname === '/test' ? 'text-tea-forest font-semibold' : ''
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            {t('navTest')}
          </Link>
          <Link
            href="/types"
            className={`transition-colors hover:text-tea-forest ${
              pathname === '/types' ? 'text-tea-forest font-semibold' : ''
            }`}
          >
            {t('navTypes')}
          </Link>
          <Link
            href="/reservation"
            className={`flex items-center gap-1.5 transition-colors hover:text-tea-forest ${
              pathname === '/reservation' ? 'text-tea-forest font-semibold' : ''
            }`}
          >
            <CalendarCheck className="w-4 h-4 text-tea-forest" />
            {t('navReservation')}
          </Link>
          <a
            href="https://smartstore.naver.com/fl88"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1 text-tea-warm hover:text-amber-700 transition-colors font-semibold"
          >
            <ShoppingBag className="w-4 h-4" />
            {t('navStore')}
          </a>
        </nav>

        {/* 우측 도구: 언어 선택기 + 유저 상태 + CTA */}
        <div className="flex items-center gap-2.5">
          {/* 다국어 언어 전환 드롭다운 */}
          <div className="relative flex items-center gap-1 bg-white/80 border border-tea-sand px-2 py-1.5 rounded-full shadow-sm">
            <Globe className="w-3.5 h-3.5 text-tea-forest" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-xs font-semibold text-tea-dark focus:outline-none cursor-pointer pr-1"
              aria-label="Select Language"
            >
              <option value="ko">🇰🇷 한국어</option>
              <option value="en">🇺🇸 English</option>
              <option value="zh">🇨🇳 中文</option>
              <option value="ja">🇯🇵 日本語</option>
            </select>
          </div>

          {currentUser ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 bg-tea-sand/60 px-3 py-1.5 rounded-full text-xs text-tea-dark font-medium border border-tea-sand">
                <User className="w-3.5 h-3.5 text-tea-forest" />
                <span>{currentUser.name} ({currentUser.country})</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs text-tea-dark/60 hover:text-tea-dark p-1.5"
                title={t('navLogout')}
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <Link
              href="/auth"
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-tea-forest/40 text-tea-forest hover:bg-tea-forest hover:text-white transition-all shadow-sm"
            >
              {t('navLogin')}
            </Link>
          )}

          <Link
            href="/test"
            className="hidden lg:inline-flex items-center gap-1.5 bg-tea-forest text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-tea-forest/90 transition-all shadow-sm hover:shadow"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t('navFindTea')}
          </Link>
        </div>
      </div>
    </header>
  );
}
