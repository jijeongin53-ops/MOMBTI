'use client';

import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Share2, X } from 'lucide-react';

export default function SnsBar() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-tea-forest text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all flex items-center justify-center"
        title="플루니티 샵 & SNS 바로가기"
      >
        <ShoppingBag className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-tea-sand/80 flex flex-col gap-2 min-w-[200px] animate-in fade-in slide-in-from-bottom-3 duration-300">
        <div className="flex items-center justify-between pb-2 border-b border-tea-sand/60">
          <span className="text-[11px] font-bold text-tea-dark/70 tracking-wider">
            FLUNITEA CONNECT
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-tea-dark/40 hover:text-tea-dark transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 네이버 스마트스토어 바로가기 */}
        <a
          href="https://smartstore.naver.com/fl88"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100/80 transition-colors text-xs font-medium group"
        >
          <div className="w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
            <ShoppingBag className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-emerald-950">스마트스토어 구매</span>
            <span className="text-[10px] text-emerald-700/80">정기구독 및 꽃차 구매</span>
          </div>
        </a>

        {/* 인스타그램 바로가기 */}
        <a
          href="https://www.instagram.com/flunitea/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-pink-50 text-pink-800 hover:bg-pink-100/80 transition-colors text-xs font-medium"
        >
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-pink-950">공식 인스타그램</span>
            <span className="text-[10px] text-pink-700/80">@flunitea</span>
          </div>
        </a>

        {/* 카카오톡 상담 채널 */}
        <a
          href="https://open.kakao.com/o/sP3AeIUe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-amber-50 text-amber-900 hover:bg-amber-100/80 transition-colors text-xs font-medium"
        >
          <div className="w-6 h-6 rounded-lg bg-[#FEE500] text-[#3C1E1E] flex items-center justify-center flex-shrink-0 font-bold text-xs">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-amber-950">카카오 1:1 상담</span>
            <span className="text-[10px] text-amber-800/80">클래스 및 단체 문의</span>
          </div>
        </a>
      </div>
    </div>
  );
}
