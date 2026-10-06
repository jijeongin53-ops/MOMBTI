'use client';

import React, { useState } from 'react';
import { CalendarCheck, MapPin, Clock, Users, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { sendToGoogleSheets } from '@/lib/googleSheets';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ReservationPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    userName: '',
    phone: '',
    email: '',
    partySize: 1,
    preferredDate: '',
    preferredTime: '13:30',
    momBtiType: '바람형 (WIND)',
    specialRequests: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await sendToGoogleSheets({
      action: 'saveReservation',
      data: {
        ...formData,
        adminNotificationEmails: 'sho0051@naver.com, jguy12@hanmail.net',
        recipientEmails: ['sho0051@naver.com', 'jguy12@hanmail.net'],
        submittedAt: new Date().toISOString()
      }
    });

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
      {/* 상단 헤더 */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
          <CalendarCheck className="w-3.5 h-3.5 text-amber-700" />
          {t('resBadge')}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-tea-dark mb-3">
          {t('resTitle')}
        </h1>
        <p className="text-xs sm:text-sm text-tea-dark/70 leading-relaxed">
          {t('resSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 좌측: 클래스 소개 안내 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-tea-sand/80 space-y-4">
            <h3 className="font-serif text-lg font-bold text-tea-dark">
              {t('resCurriculumTitle')}
            </h3>
            <ul className="space-y-3 text-xs text-tea-dark/80">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-tea-forest/10 text-tea-forest flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <strong className="block text-tea-dark">{t('resStep1Title')}</strong>
                  {t('resStep1Desc')}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-tea-forest/10 text-tea-forest flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <strong className="block text-tea-dark">{t('resStep2Title')}</strong>
                  {t('resStep2Desc')}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-tea-forest/10 text-tea-forest flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <strong className="block text-tea-dark">{t('resStep3Title')}</strong>
                  {t('resStep3Desc')}
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-tea-sand/60 space-y-2 text-xs text-tea-dark/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-tea-forest flex-shrink-0" />
                <span>{t('footerAddress')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{t('resSchedule')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>{t('resMaxGuests')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 우측: 예약 신청 폼 */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-tea-sand/80">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-tea-dark mb-2">
                {t('resSuccessTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-tea-dark/70 max-w-sm mx-auto mb-6 leading-relaxed">
                {t('resSuccessDesc')}
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="bg-tea-forest text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-tea-forest/90 transition-all"
              >
                {t('resConfirmBtn')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-tea-sand pb-4">
                <h3 className="font-serif text-xl font-bold text-tea-dark">
                  {t('resFormTitle')}
                </h3>
                <p className="text-xs text-tea-dark/60 mt-0.5">
                  {t('resFormSubtitle')}
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1">
                  {t('resNameLabel')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('resNamePlaceholder')}
                  value={formData.userName}
                  onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-tea-dark mb-1">
                    {t('resPhoneLabel')}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-tea-dark mb-1">
                    {t('resPartySizeLabel')}
                  </label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none bg-white"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-tea-dark mb-1">
                    {t('resDateLabel')}
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-tea-dark mb-1">
                    {t('resTimeLabel')}
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none bg-white"
                  >
                    <option value="10:30">10:30</option>
                    <option value="13:30">13:30</option>
                    <option value="15:30">15:30</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1">
                  {t('resEmailLabel')}
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1">
                  {t('resBtiLabel')}
                </label>
                <select
                  value={formData.momBtiType}
                  onChange={(e) => setFormData({ ...formData, momBtiType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none bg-white font-medium"
                >
                  <option value="해온형 (SUN 태양인)">해온형 (SUN 태양인)</option>
                  <option value="숲온형 (FOREST 태음인)">숲온형 (FOREST 태음인)</option>
                  <option value="바람형 (WIND 소양인)">바람형 (WIND 소양인)</option>
                  <option value="온담형 (WARM 소음인)">온담형 (WARM 소음인)</option>
                  <option value="미진단 (현장에서 진단 희망)">{t('resUnsureBti')}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1">
                  {t('resSpecialLabel')}
                </label>
                <textarea
                  rows={2}
                  placeholder={t('resSpecialPlaceholder')}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-tea-forest hover:bg-tea-forest/90 text-white font-semibold py-3.5 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 text-xs active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                {loading ? '...' : t('resSubmitBtn')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
