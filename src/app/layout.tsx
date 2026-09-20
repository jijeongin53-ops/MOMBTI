import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SnsBar from '@/components/SnsBar';

export const metadata: Metadata = {
  title: '플루니티 (Flunitea) | 몸BTI 사상체질 맞춤 꽃차 솔루션',
  description:
    '사상체질의 전통적 관점과 개인 취향, 얼굴 분석 웰니스 포인트를 결합하여 세상에 단 하나뿐인 개인 시그니처 티를 블렌딩해 드립니다.',
  keywords: [
    '플루니티',
    'Flunitea',
    '몸BTI',
    '사상체질',
    '꽃차',
    '꽃차추천',
    '티블렌딩',
    '소양인',
    '태음인',
    '소음인',
    '태양인',
    '웰니스티'
  ]
};

import { LanguageProvider } from '@/lib/i18n/LanguageContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;700;900&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-tea-forest/20 selection:text-tea-forest">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <SnsBar />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
