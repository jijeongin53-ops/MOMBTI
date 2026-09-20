'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, DICTIONARY } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ko',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('ko');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('flunitea_lang') as Language;
      if (saved && ['ko', 'en', 'zh', 'ja'].includes(saved)) {
        setLanguageState(saved);
      } else {
        // 브라우저 기본 언어 감지
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === 'en') setLanguageState('en');
        else if (browserLang === 'zh') setLanguageState('zh');
        else if (browserLang === 'ja') setLanguageState('ja');
      }
    } catch (e) {}
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('flunitea_lang', lang);
    } catch (e) {}
  };

  const t = (key: string): string => {
    const item = DICTIONARY[key];
    if (!item) return key;
    return item[language] || item['ko'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
