'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Users, X, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { sendToGoogleSheets } from '@/lib/googleSheets';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMomBti?: string;
}

export default function ReservationModal({
  isOpen,
  onClose,
  defaultMomBti = '바람형'
}: ReservationModalProps) {
  const [formData, setFormData] = useState({
    userName: '',
    phone: '',
    email: '',
    partySize: 1,
    preferredDate: '',
    preferredTime: '14:00',
    momBtiType: defaultMomBti,
    specialRequests: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await sendToGoogleSheets({
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-tea-sand/80 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-tea-dark/40 hover:text-tea-dark transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-tea-dark mb-2">
              클래스 사전 예약이 완료되었습니다!
            </h3>
            <p className="text-sm text-tea-dark/70 max-w-sm mx-auto mb-6 leading-relaxed">
              플루니티 부산 아틀리에 티 마스터가 안내 메시지를 발송해 드립니다.
              나만의 몸BTI 시그니처 티를 직접 손으로 덖고 블렌딩해보세요.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-tea-forest text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-tea-forest/90 transition-all"
            >
              확인
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tea-forest/10 text-tea-forest text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-tea-forest" />
                원데이 블렌딩 클래스 사전 예약
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-tea-dark">
                플루니티 오프라인 아틀리에
              </h3>
              <p className="text-xs text-tea-dark/70 mt-1">
                전문 티 소믈리에와 함께 나의 체질에 맞는 찻잎을 만지고 조합하는 프라이빗 체험
              </p>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-tea-dark mb-1">
                  예약자 성함
                </label>
                <input
                  type="text"
                  required
                  placeholder="홍길동"
                  value={formData.userName}
                  onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/40 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-tea-dark mb-1">
                    연락처
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-tea-dark mb-1">
                    인원수
                  </label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/40 focus:outline-none bg-white"
                  >
                    <option value={1}>1인 (개인)</option>
                    <option value={2}>2인 (페어)</option>
                    <option value={3}>3인</option>
                    <option value={4}>4인 (소그룹)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-tea-dark mb-1">
                    희망 날짜
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-tea-dark mb-1">
                    희망 시간
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/40 focus:outline-none bg-white"
                  >
                    <option value="11:00">오전 11:00 타임</option>
                    <option value="14:00">오후 02:00 타임</option>
                    <option value="16:30">오후 04:30 타임</option>
                    <option value="19:00">저녁 07:00 타임</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-tea-dark mb-1">
                  이메일 (예약 확정 알림)
                </label>
                <input
                  type="email"
                  required
                  placeholder="flunitea@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/40 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-tea-dark mb-1">
                  진단된 몸BTI 유형
                </label>
                <input
                  type="text"
                  value={formData.momBtiType}
                  onChange={(e) => setFormData({ ...formData, momBtiType: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-tea-sand text-xs focus:ring-2 focus:ring-tea-forest/40 focus:outline-none bg-tea-cream/50 font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-tea-forest hover:bg-tea-forest/90 text-white font-semibold py-3 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 text-xs"
            >
              <Send className="w-4 h-4" />
              {loading ? '예약 접수 중...' : '클래스 예약 신청하기 (구글 시트 연동)'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
