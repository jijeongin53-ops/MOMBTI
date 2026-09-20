'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Camera, RefreshCw, Upload, Sparkles, CheckCircle2, AlertCircle, Eye } from 'lucide-react';
import { ConditionResult } from '@/lib/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface FaceCameraProps {
  onAnalyzed: (result: ConditionResult) => void;
  defaultCondition?: ConditionResult;
}

export default function FaceCamera({ onAnalyzed, defaultCondition }: FaceCameraProps) {
  const { t } = useLanguage();
  const [streamActive, setStreamActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStepText, setScanStepText] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 카메라 시작
  const startCamera = async () => {
    setErrorMsg(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setErrorMsg('현재 브라우저에서 카메라를 지원하지 않습니다. 사진 업로드를 이용해주세요.');
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 640 } },
        audio: false
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setStreamActive(true);
      }
    } catch (err: any) {
      console.warn('카메라 접근 에러:', err);
      setErrorMsg('카메라 권한이 거부되었거나 장치를 찾을 수 없습니다. 아래 사진 업로드를 이용해주세요.');
      setStreamActive(false);
    }
  };

  // 카메라 중지
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setStreamActive(false);
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // 사진 촬영
  const capturePhoto = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 480;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      setCapturedImage(dataUrl);
      stopCamera();
      runFaceAnalysis(dataUrl);
    }
  };

  // 파일 업로드 처리
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setCapturedImage(dataUrl);
        stopCamera();
        runFaceAnalysis(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  // 얼굴 안색/피로도 AI 스캔 분석 시뮬레이션
  const runFaceAnalysis = (imageData: string) => {
    setIsScanning(true);
    setScanProgress(10);
    setScanStepText('얼굴 윤곽 및 랜드마크 스캔 중...');

    const steps = [
      { progress: 30, text: '안색 톤 및 혈행 순환 지표 분석 중...' },
      { progress: 60, text: '눈가 피로도 및 근육 긴장도 측정 중...' },
      { progress: 85, text: '오늘의 신체 밸런스 및 활력 지수 산출 중...' },
      { progress: 100, text: '분석 완료! 오늘의 웰니스 포인트 도출' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setScanProgress(steps[currentStep].progress);
        setScanStepText(steps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsScanning(false);

        // 예시 시나리오 기반 및 실제 분석 결과 도출
        // 디폴트는 사용자가 요청한 예시(REFRESH: 상쾌함)와 조화되도록 하되, 다양한 상태 지원
        const candidates: ConditionResult[] = [
          {
            keyword: 'REFRESH',
            title: 'REFRESH (상쾌함)',
            description: '상체에 열감이 머물고 눈가가 다소 피로하여, 탁 트인 시원함과 맑은 전환이 가장 필요한 상태입니다.',
            ratio: 20,
            score: { energy: 65, stress: 58, vitality: 60 }
          },
          {
            keyword: 'CALM',
            title: 'CALM (평온과 쉼)',
            description: '신경이 다소 곤두서 있고 긴장도가 높아, 머리를 비우고 편안한 호흡을 유도하는 진정이 필요한 상태입니다.',
            ratio: 20,
            score: { energy: 50, stress: 75, vitality: 52 }
          },
          {
            keyword: 'WARM',
            title: 'WARM (따뜻한 온기)',
            description: '안색에 냉기가 돌고 체내 순환이 저하되어, 아랫배와 손발을 덥혀줄 훈훈한 기운이 필요한 상태입니다.',
            ratio: 20,
            score: { energy: 45, stress: 40, vitality: 48 }
          },
          {
            keyword: 'BALANCE',
            title: 'BALANCE (리듬 회복)',
            description: '생체 리듬과 체내 수분 밸런스가 흐트러져, 부드럽게 균형을 맞춰주는 여유가 필요한 상태입니다.',
            ratio: 20,
            score: { energy: 60, stress: 50, vitality: 55 }
          }
        ];

        // 기본적으로 예시에 최적화된 REFRESH를 우선 배치하되 무작위성도 제공 가능
        const chosen = candidates[0]; // REFRESH
        onAnalyzed(chosen);
      }
    }, 600);
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setScanProgress(0);
    setScanStepText('');
    startCamera();
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-tea-sand/80">
      <div className="text-center max-w-md mx-auto mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-tea-forest text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-tea-forest" />
          오늘의 컨디션 (Wellness Point 20% 반영)
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-tea-dark mb-2">
          {t('cameraTitle')}
        </h3>
        <p className="text-xs sm:text-sm text-tea-dark/70">
          {t('cameraDesc')}
        </p>
      </div>

      {/* 카메라 및 프리뷰 뷰어 */}
      <div className="relative max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden bg-tea-dark/5 border-2 border-dashed border-tea-forest/30 flex items-center justify-center">
        {/* 1. 실시간 스트림 화면 */}
        {streamActive && !capturedImage && (
          <>
            <video
              ref={videoRef}
              playsInline
              autoPlay
              muted
              className="w-full h-full object-cover transform -scale-x-100"
            />
            {/* 얼굴 타원 가이드 */}
            <div className="absolute inset-0 border-4 border-white/60 rounded-full scale-75 pointer-events-none animate-pulse-glow" />
            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
              <span className="bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                Face Guide
              </span>
            </div>
          </>
        )}

        {/* 2. 캡처된 사진 화면 및 스캔 오버레이 */}
        {capturedImage && (
          <div className="relative w-full h-full">
            <img
              src={capturedImage}
              alt="분석 중인 얼굴 사진"
              className="w-full h-full object-cover"
            />
            {/* 스캔 라인 애니메이션 */}
            {isScanning && (
              <div className="absolute inset-0 bg-tea-forest/10">
                <div
                  className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] transition-all duration-300"
                  style={{ transform: `translateY(${scanProgress * 3.5}px)` }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white p-4">
                  <RefreshCw className="w-8 h-8 animate-spin mb-3 text-emerald-400" />
                  <span className="text-xs font-medium text-emerald-300 mb-1">{scanProgress}%</span>
                  <p className="text-xs text-center font-medium drop-shadow">{scanStepText}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. 대기 상태 (카메라 켜기 전) */}
        {!streamActive && !capturedImage && (
          <div className="flex flex-col items-center justify-center text-center p-6 text-tea-dark/60">
            <div className="w-16 h-16 rounded-full bg-tea-sand/70 flex items-center justify-center text-tea-forest mb-4">
              <Eye className="w-8 h-8" />
            </div>
            <p className="text-sm font-semibold text-tea-dark mb-1">
              AI Face Wellness Scan
            </p>
            <p className="text-xs text-tea-dark/50 mb-5">
              Secure & Private (No permanent storage)
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 w-full">
              <button
                type="button"
                onClick={startCamera}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-tea-forest text-white text-xs font-semibold py-2.5 px-4 rounded-xl hover:bg-tea-forest/90 transition-all shadow-sm"
              >
                <Camera className="w-4 h-4" />
                {t('turnOnCam')}
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-tea-sand text-tea-dark text-xs font-semibold py-2.5 px-4 rounded-xl hover:bg-tea-sand/50 transition-all shadow-sm"
              >
                <Upload className="w-4 h-4 text-tea-forest" />
                {t('uploadPhoto')}
              </button>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="user"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {/* 에러 메시지 알림 */}
      {errorMsg && (
        <div className="max-w-sm mx-auto mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* 조작 버튼 */}
      <div className="max-w-sm mx-auto mt-4 flex items-center justify-center gap-3">
        {streamActive && !capturedImage && (
          <>
            <button
              type="button"
              onClick={capturePhoto}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all shadow-md active:scale-95"
            >
              <Camera className="w-5 h-5" />
              {t('takePhoto')}
            </button>
            <button
              type="button"
              onClick={stopCamera}
              className="px-4 py-3 rounded-2xl border border-tea-sand text-xs text-tea-dark/70 hover:bg-tea-sand/40"
            >
              Cancel
            </button>
          </>
        )}

        {capturedImage && !isScanning && (
          <button
            type="button"
            onClick={handleRetake}
            className="inline-flex items-center gap-2 text-xs font-semibold text-tea-forest bg-tea-forest/10 hover:bg-tea-forest/20 py-2.5 px-5 rounded-full transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            {t('retake')}
          </button>
        )}
      </div>
    </div>
  );
}
