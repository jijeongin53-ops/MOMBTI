'use client';

import React, { useState } from 'react';
import { CalendarCheck, MapPin, Clock, Users, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { sendToGoogleSheets } from '@/lib/googleSheets';

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    userName: '',
    phone: '',
    email: '',
    partySize: 1,
    preferredDate: '',
    preferredTime: '14:00',
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
          플루니티 오프라인 아틀리에 체험 예약
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-tea-dark mb-3">
          나만의 시그니처 꽃차 원데이 블렌딩 클래스
        </h1>
        <p className="text-xs sm:text-sm text-tea-dark/70 leading-relaxed">
          향기로운 꽃잎을 직접 덖고 조향하는 프라이빗 웰니스 티 타임.
          사상체질 티 마스터와 함께 세상에 하나뿐인 나만의 블렌딩 티를 완성해 보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 좌측: 클래스 소개 안내 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-tea-sand/80 space-y-4">
            <h3 className="font-serif text-lg font-bold text-tea-dark">
              클래스 커리큘럼 (총 70분)
            </h3>
            <ul className="space-y-3 text-xs text-tea-dark/80">
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-tea-forest/10 text-tea-forest flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <strong className="block text-tea-dark">웰컴 티 & 몸BTI 정밀 상담 (15분)</strong>
                  체질별 체감 온도와 소화 기운을 점검하고 웰컴 티를 음용합니다.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-tea-forest/10 text-tea-forest flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <strong className="block text-tea-dark">사계절 유기농 꽃차 테이스팅 (25분)</strong>
                  맨드라미, 목련, 국화, 연잎, 캐모마일, 장미 등 12종의 수색과 향을 감상합니다.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-tea-forest/10 text-tea-forest flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <strong className="block text-tea-dark">50:30:20 시그니처 티 조향 & 패키징 (30분)</strong>
                  나의 체질과 취향에 맞춘 황금 배합으로 유리 티 캐니스터에 직접 담아갑니다.
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-tea-sand/60 space-y-2 text-xs text-tea-dark/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-tea-forest flex-shrink-0" />
                <span>서울 성동구 성수이로 플루니티 아틀리에 2층</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>화~일 / 11:00, 14:00, 16:30, 19:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>타임당 최대 4인 프라이빗 진행</span>
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
                클래스 예약이 정상 접수되었습니다!
              </h3>
              <p className="text-xs sm:text-sm text-tea-dark/70 max-w-sm mx-auto mb-6 leading-relaxed">
                접수 내역이 구글 시트에 안전하게 전송되었습니다. 티 마스터가 24시간 이내에
                안내 문자와 이메일을 보내드립니다.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="bg-tea-forest text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-tea-forest/90 transition-all"
              >
                다른 날짜 추가 예약하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-tea-sand pb-4">
                <h3 className="font-serif text-xl font-bold text-tea-dark">
                  클래스 예약 신청서
                </h3>
                <p className="text-xs text-tea-dark/60 mt-0.5">
                  입력하신 예약 정보는 구글 시트 데이터베이스에 실시간으로 기록됩니다.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1">
                  예약자 성함 *
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 홍길동"
                  value={formData.userName}
                  onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-tea-dark mb-1">
                    연락처 (휴대폰) *
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
                    인원수 *
                  </label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none bg-white"
                  >
                    <option value={1}>1인 (나를 위한 힐링 티타임)</option>
                    <option value={2}>2인 (연인 / 친구 페어링)</option>
                    <option value={3}>3인</option>
                    <option value={4}>4인 (프라이빗 대관)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-tea-dark mb-1">
                    희망 예약 날짜 *
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
                    희망 클래스 시간 *
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/30 focus:outline-none bg-white"
                  >
                    <option value="11:00">오전 11:00 타임 (모닝 웰니스)</option>
                    <option value="14:00">오후 02:00 타임 (애프터눈 티)</option>
                    <option value="16:30">오후 04:30 타임 (선셋 블렌딩)</option>
                    <option value="19:00">저녁 07:00 타임 (나이트 릴렉스)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1">
                  이메일 주소 *
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
                  진단받은 나의 몸BTI 유형
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
                  <option value="미진단 (현장에서 진단 희망)">미진단 (현장에서 진단 희망)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-tea-dark mb-1">
                  요청 사항 및 특별히 피하고 싶은 원료
                </label>
                <textarea
                  rows={2}
                  placeholder="특정 꽃 알레르기나 선호하시는 취향을 남겨주시면 수업에 미리 반영해 드립니다."
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
                {loading ? '구글 시트 전송 중...' : '원데이 클래스 사전 예약 신청하기'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
