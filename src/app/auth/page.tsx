'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Globe, Heart, Shield, Sparkles, Check, ArrowRight } from 'lucide-react';
import { COUNTRIES } from '@/data/countries';
import { sendToGoogleSheets } from '@/lib/googleSheets';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AuthPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'KR', // 국가 선택 필수 (기본값 KR)
    ageGroup: '20대',
    gender: '여성',
    healthConcerns: ['면역력 저하', '수면의 질'] as string[]
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const availableConcerns = [
    '면역력 저하',
    '수면의 질 / 불면',
    '만성 피로',
    '상체 열감 / 상열감',
    '소화 불량 / 속 더부룩함',
    '손발 차가움 / 수족냉증',
    '눈의 피로 / 건조함',
    '체중 관리 / 붓기',
    '스트레스 / 긴장감'
  ];

  const toggleConcern = (concern: string) => {
    if (formData.healthConcerns.includes(concern)) {
      setFormData({
        ...formData,
        healthConcerns: formData.healthConcerns.filter((c) => c !== concern)
      });
    } else {
      setFormData({
        ...formData,
        healthConcerns: [...formData.healthConcerns, concern]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.country) {
      alert('Please select your country.');
      return;
    }

    setLoading(true);

    const userProfile = {
      id: 'USER-' + Date.now(),
      name: formData.name,
      email: formData.email,
      country: formData.country,
      ageGroup: formData.ageGroup,
      gender: formData.gender,
      healthConcerns: formData.healthConcerns,
      createdAt: new Date().toISOString()
    };

    // 로컬 스토리지에 회원 정보 저장
    localStorage.setItem('flunitea_user', JSON.stringify(userProfile));

    // 구글 시트로 회원 데이터 전송
    await sendToGoogleSheets({
      action: 'registerUser',
      data: userProfile
    });

    setLoading(false);
    setSuccess(true);

    // 잠시 후 테스트 페이지로 이동
    setTimeout(() => {
      router.push('/test');
    }, 1200);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-tea-forest/10 text-tea-forest text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Flunitea Wellness Membership
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-tea-dark mb-3">
          {t('authTitle')}
        </h1>
        <p className="text-xs sm:text-sm text-tea-dark/70 leading-relaxed max-w-md mx-auto">
          {t('authSubtitle')}
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-tea-sand/80 relative">
        {success ? (
          <div className="text-center py-12 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-tea-dark mb-2">
              Welcome, {formData.name}!
            </h3>
            <p className="text-xs sm:text-sm text-tea-dark/70 mb-4">
              Registered successfully to Google Sheets database.
            </p>
            <div className="inline-flex items-center gap-1 text-xs text-tea-forest font-semibold animate-pulse">
              <span>Redirecting to MomBTI Diagnosis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 기본 인적사항 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1.5">
                  {t('nameLabel')}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1.5">
                  {t('emailLabel')}
                </label>
                <input
                  type="email"
                  required
                  placeholder="tea@flunitea.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none"
                />
              </div>
            </div>

            {/* 국가 선택 필수 */}
            <div>
              <label className="block text-xs font-bold text-tea-dark mb-1.5 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-tea-forest" />
                {t('countryLabel')}
              </label>
              <select
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-tea-sand text-xs font-medium focus:ring-2 focus:ring-tea-forest/30 focus:outline-none bg-white"
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.nativeName} ({c.name})
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-tea-dark/50 mt-1">
                글로벌 배송 및 지역별 맞춤 허브 조달을 위해 거주 국가 선택이 필요합니다.
              </p>
            </div>

            {/* 연령대 및 성별 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1.5">
                  연령대 *
                </label>
                <select
                  value={formData.ageGroup}
                  onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none bg-white"
                >
                  <option value="10대">10대</option>
                  <option value="20대">20대</option>
                  <option value="30대">30대</option>
                  <option value="40대">40대</option>
                  <option value="50대 이상">50대 이상</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1.5">
                  성별 *
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none bg-white"
                >
                  <option value="여성">여성</option>
                  <option value="남성">남성</option>
                  <option value="기타">선택 안 함</option>
                </select>
              </div>
            </div>

            {/* 건강 고민 다중 선택 */}
            <div>
              <label className="block text-xs font-bold text-tea-dark mb-2 flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500" />
                현재 가장 신경 쓰이는 건강 고민 (다중 선택 가능)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableConcerns.map((concern) => {
                  const isChecked = formData.healthConcerns.includes(concern);
                  return (
                    <button
                      key={concern}
                      type="button"
                      onClick={() => toggleConcern(concern)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-tea-forest bg-tea-forest/10 text-tea-forest font-semibold'
                          : 'border-tea-sand/80 text-tea-dark/70 hover:bg-tea-sand/30'
                      }`}
                    >
                      <span>{concern}</span>
                      {isChecked && <Check className="w-3 h-3 text-tea-forest" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 안내 및 동의 */}
            <div className="bg-tea-cream/70 p-3.5 rounded-2xl border border-tea-sand/70 text-[11px] text-tea-dark/70 space-y-1">
              <p className="flex items-center gap-1 font-semibold text-tea-dark">
                <Shield className="w-3.5 h-3.5 text-tea-forest" />
                개인정보 보호 및 구글 시트 안전 연동
              </p>
              <p>
                입력하신 정보는 플루니티 맞춤 꽃차 블렌딩 분석 및 주문 관리 목적의 구글 시트 데이터베이스에 안전하게 기록됩니다.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-tea-forest hover:bg-tea-forest/90 text-white font-semibold py-3.5 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 text-sm active:scale-[0.99]"
            >
              {loading ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <span>{t('authSubmit')}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
