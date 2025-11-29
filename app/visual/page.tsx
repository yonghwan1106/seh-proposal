'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function VisualPage() {
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors mb-4">
            <span>←</span>
            <span className="text-sm">메인으로</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg">
              📊
            </div>
            <div>
              <p className="text-xs font-mono text-amber-200 tracking-widest">VISUAL DATA</p>
              <h1 className="text-2xl font-black">시각 자료</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'comparison', label: '모델 비교' },
            { id: 'asset', label: '자산 적립 구조' },
            { id: 'problems', label: '현황/문제점' },
            { id: 'effects', label: '기대 효과' },
            { id: 'roadmap', label: '로드맵' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-white text-stone-600 hover:bg-stone-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'comparison' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-stone-900">기존 공공주택 vs 주거자산형성 모델</h2>

            {/* Visual Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-stone-400">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full mb-4">
                    <span className="w-3 h-3 bg-stone-400 rounded-full"></span>
                    <span className="font-bold text-stone-600">기존 공공주택</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: '자산 형성 기회', value: '없음', bar: 0 },
                    { label: '분양전환 결정', value: '추첨', bar: 20 },
                    { label: '에너지 절감 혜택', value: 'LH 귀속', bar: 0 },
                    { label: '커뮤니티 참여 인센티브', value: '없음', bar: 0 },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-stone-600">{item.label}</span>
                        <span className="font-bold text-stone-700">{item.value}</span>
                      </div>
                      <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-stone-400 rounded-full transition-all duration-1000"
                          style={{ width: `${item.bar}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center text-stone-500">
                  <p className="text-sm">10년 거주 후</p>
                  <p className="text-2xl font-black">자산: 0원</p>
                </div>
              </div>

              {/* After */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-amber-500">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
                    <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
                    <span className="font-bold text-amber-700">주거자산형성 모델</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: '자산 형성 기회', value: '최대 180만원/5년', bar: 100 },
                    { label: '분양전환 결정', value: '기여도 반영', bar: 80 },
                    { label: '에너지 절감 혜택', value: '50% 입주민', bar: 50 },
                    { label: '커뮤니티 참여 인센티브', value: '주거신용점수', bar: 70 },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-stone-600">{item.label}</span>
                        <span className="font-bold text-amber-600">{item.value}</span>
                      </div>
                      <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-1000"
                          style={{ width: `${item.bar}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center text-amber-700">
                  <p className="text-sm">10년 거주 후</p>
                  <p className="text-2xl font-black">자산: 최대 360만원</p>
                </div>
              </div>
            </div>

            {/* Key Changes */}
            <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-6 text-amber-400">핵심 변화 포인트</h3>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { label: '핵심 가치', from: '저렴한 임대', to: '자산 형성', icon: '💰' },
                  { label: '에너지 절감분', from: 'LH 귀속', to: '입주민 적립', icon: '⚡' },
                  { label: '분양전환', from: '추첨', to: '기여도 반영', icon: '🏠' },
                  { label: 'LH 역할', from: '공급자', to: '파트너', icon: '🤝' },
                  { label: '투자 부담', from: 'LH 전액', to: '민간 협력', icon: '📈' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <p className="text-xs text-stone-400 mb-2">{item.label}</p>
                    <p className="text-sm text-stone-500 line-through mb-1">{item.from}</p>
                    <p className="text-sm font-bold text-amber-400">{item.to}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Singapore Comparison */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🇸🇬</span>
                <div>
                  <h3 className="text-xl font-bold text-green-900">싱가포르 HDB 모델 비교</h3>
                  <p className="text-sm text-green-600">공공주택을 통한 자가 보유의 성공 사례</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-5 text-center">
                  <p className="text-4xl font-black text-green-600 mb-2">80%</p>
                  <p className="text-sm text-green-700">싱가포르 국민 자가 보유율</p>
                  <p className="text-xs text-stone-500">공공주택(HDB) 통해 달성</p>
                </div>
                <div className="bg-white rounded-xl p-5 text-center">
                  <p className="text-4xl font-black text-green-600 mb-2">CPF</p>
                  <p className="text-sm text-green-700">연금 활용 분양</p>
                  <p className="text-xs text-stone-500">자산 형성 시스템</p>
                </div>
                <div className="bg-white rounded-xl p-5 text-center">
                  <p className="text-4xl font-black text-green-600 mb-2">99년</p>
                  <p className="text-sm text-green-700">장기 임대 후 소유권</p>
                  <p className="text-xs text-stone-500">주거 사다리 실현</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'asset' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-stone-900">주거자산 적립 구조</h2>

            {/* Flow Diagram */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-stone-900 mb-6">자산 적립 흐름도</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="bg-blue-100 rounded-xl p-6 text-center w-full md:w-48">
                  <p className="text-3xl mb-2">🏠</p>
                  <p className="font-bold text-blue-800">AI 스마트 관리</p>
                  <p className="text-sm text-blue-600">에너지 30% 절감</p>
                </div>
                <div className="text-3xl text-amber-500">→</div>
                <div className="bg-amber-100 rounded-xl p-6 text-center w-full md:w-48">
                  <p className="text-3xl mb-2">💰</p>
                  <p className="font-bold text-amber-800">절감분 배분</p>
                  <p className="text-sm text-amber-600">가구당 월 3만원</p>
                </div>
                <div className="text-3xl text-amber-500">→</div>
                <div className="bg-green-100 rounded-xl p-6 text-center w-full md:w-48">
                  <p className="text-3xl mb-2">📈</p>
                  <p className="font-bold text-green-800">주거자산계좌</p>
                  <p className="text-sm text-green-600">50% 입주민 적립</p>
                </div>
                <div className="text-3xl text-amber-500">→</div>
                <div className="bg-purple-100 rounded-xl p-6 text-center w-full md:w-48">
                  <p className="text-3xl mb-2">🏡</p>
                  <p className="font-bold text-purple-800">분양전환 재원</p>
                  <p className="text-sm text-purple-600">내 집 마련</p>
                </div>
              </div>
            </div>

            {/* Distribution Structure */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="font-bold mb-6">절감액 배분 구조 (가구당 월 3만원 = 연 36만원)</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="white" strokeOpacity="0.3" strokeWidth="8" fill="none"/>
                      <circle cx="48" cy="48" r="40" stroke="white" strokeWidth="8" fill="none"
                        strokeDasharray="251.2" strokeDashoffset="125.6"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-black">50%</span>
                    </div>
                  </div>
                  <p className="font-bold text-lg">입주민 주거자산계좌</p>
                  <p className="text-amber-200">연 18만원</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="white" strokeOpacity="0.3" strokeWidth="8" fill="none"/>
                      <circle cx="48" cy="48" r="40" stroke="white" strokeWidth="8" fill="none"
                        strokeDasharray="251.2" strokeDashoffset="175.8"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-black">30%</span>
                    </div>
                  </div>
                  <p className="font-bold text-lg">LH 운영수익</p>
                  <p className="text-amber-200">연 10.8만원</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="white" strokeOpacity="0.3" strokeWidth="8" fill="none"/>
                      <circle cx="48" cy="48" r="40" stroke="white" strokeWidth="8" fill="none"
                        strokeDasharray="251.2" strokeDashoffset="200.96"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-black">20%</span>
                    </div>
                  </div>
                  <p className="font-bold text-lg">민간 투자회수</p>
                  <p className="text-amber-200">연 7.2만원</p>
                </div>
              </div>
            </div>

            {/* Accumulation Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-stone-900 mb-6">거주 기간별 자산 적립 예상</h3>
              <div className="space-y-6">
                {[
                  { year: '1년', base: 18, bonus: 18, total: 36, percent: 10 },
                  { year: '3년', base: 54, bonus: 54, total: 108, percent: 30 },
                  { year: '5년', base: 90, bonus: 90, total: 180, percent: 50 },
                  { year: '10년', base: 180, bonus: 180, total: 360, percent: 100 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-20 text-right">
                      <span className="font-bold text-stone-700">{item.year}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-1 h-8 rounded-full overflow-hidden">
                        <div
                          className="bg-amber-400 flex items-center justify-center text-xs text-white font-bold"
                          style={{ width: `${item.percent / 2}%` }}
                        >
                          {item.base}만
                        </div>
                        <div
                          className="bg-green-500 flex items-center justify-center text-xs text-white font-bold"
                          style={{ width: `${item.percent / 2}%` }}
                        >
                          +{item.bonus}만
                        </div>
                      </div>
                    </div>
                    <div className="w-28 text-left">
                      <span className="font-black text-amber-600">{item.total}만원</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-amber-400 rounded"></div>
                  <span className="text-sm text-stone-600">에너지 절감분</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-stone-600">주거신용점수 보너스</span>
                </div>
              </div>
            </div>

            {/* Housing Credit Score */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">⭐</span>
                주거신용점수 시스템
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-800 mb-4">점수 획득 방법</h4>
                  <div className="space-y-3">
                    {[
                      { activity: '에너지 절약 (목표 대비)', score: '+10', icon: '⚡' },
                      { activity: '이웃 돌봄 활동', score: '+20', icon: '🤝' },
                      { activity: '커뮤니티 프로그램 참여', score: '+10', icon: '👥' },
                      { activity: '시설 관리 협조', score: '+5', icon: '🔧' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="flex-1 text-green-800">{item.activity}</span>
                        <span className="font-bold text-green-600">{item.score}/월</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-green-800 mb-4">점수별 혜택</h4>
                  <div className="space-y-3">
                    {[
                      { score: '500점+', benefit: '분양전환 1순위', color: 'bg-amber-100 text-amber-800' },
                      { score: '300점+', benefit: '임대료 5% 감면', color: 'bg-green-100 text-green-800' },
                      { score: '100점+', benefit: '보너스 적립', color: 'bg-blue-100 text-blue-800' },
                    ].map((item, idx) => (
                      <div key={idx} className={`${item.color} rounded-lg p-4 flex justify-between items-center`}>
                        <span className="font-bold">{item.score}</span>
                        <span>{item.benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'problems' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-stone-900">현황 및 문제점</h2>

            {/* Asset Formation Gap */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-xl">😔</span>
                자산 형성 기회 부재
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-stone-500 mb-3">민간 전세 10년 거주</p>
                  <div className="relative h-8 bg-stone-100 rounded-full overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-[80%] bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">전세금 회수 = 자산</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-3">공공임대 10년 거주</p>
                  <div className="relative h-8 bg-stone-100 rounded-full overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-[0%] bg-red-500 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-red-600">자산 0원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-4 bg-red-50 px-6 py-3 rounded-full">
                  <span className="text-sm text-red-700">공공주택 입주민은</span>
                  <span className="text-xl font-black text-red-600">&quot;주거 사다리의 막다른 골목&quot;</span>
                  <span className="text-sm text-red-700">에 갇힘</span>
                </div>
              </div>
            </div>

            {/* LH Debt */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-yellow-700 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-xl">💸</span>
                LH 재정 위기
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-sm text-stone-500 mb-2">2024년 부채</p>
                  <div className="text-5xl font-black text-yellow-600">160.1<span className="text-2xl">조</span></div>
                  <p className="text-xs text-stone-400 mt-1">비금융 공기업 1위</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-stone-500 mb-2">부채비율</p>
                  <div className="text-5xl font-black text-yellow-600">222<span className="text-2xl">%</span></div>
                  <p className="text-xs text-red-500 mt-1">재무위험기관 지정</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-stone-500 mb-2">스마트홈 적용률</p>
                  <div className="text-5xl font-black text-red-600">0.16<span className="text-2xl">%</span></div>
                  <p className="text-xs text-red-500 mt-1">민간 대비 437배 격차</p>
                </div>
              </div>
            </div>

            {/* Social Isolation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">😢</span>
                사회적 고립
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-orange-50 rounded-xl p-6">
                  <div className="text-5xl font-black text-orange-600 mb-2">500+</div>
                  <p className="text-sm text-orange-700">연간 고독사 (건)</p>
                </div>
                <div className="text-center bg-orange-50 rounded-xl p-6">
                  <div className="text-5xl font-black text-orange-600 mb-2">4.5일</div>
                  <p className="text-sm text-orange-700">발견까지 평균 기간</p>
                </div>
                <div className="text-center bg-orange-50 rounded-xl p-6">
                  <div className="text-5xl font-black text-orange-600 mb-2">40%</div>
                  <p className="text-sm text-orange-700">1인 가구 비중</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'effects' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-stone-900">기대 효과</h2>

            {/* Citizen Effect */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-6">서민 주거 안정 효과</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: '입주민 자산 적립 (5년)', value: '180만원', icon: '💰' },
                  { label: '분양전환 성공률', value: '30%→70%', icon: '🏠' },
                  { label: '청약 가점 효과', value: '+10점', icon: '📈' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center bg-white/20 rounded-xl p-6">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="text-3xl font-black">{item.value}</div>
                    <p className="text-sm text-amber-100 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* LH Effect */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-stone-900 mb-6">LH 재정 개선 효과 (100만 세대 적용 시)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-stone-700 mb-4">연간 수익</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-green-50 rounded-lg p-3">
                      <span>에너지 절감 (LH 몫 30%)</span>
                      <span className="font-bold text-green-600">360억원</span>
                    </div>
                    <div className="flex justify-between bg-green-50 rounded-lg p-3">
                      <span>유지보수비 절감</span>
                      <span className="font-bold text-green-600">150억원</span>
                    </div>
                    <div className="flex justify-between bg-green-50 rounded-lg p-3">
                      <span>민원처리 비용 감소</span>
                      <span className="font-bold text-green-600">40억원</span>
                    </div>
                    <div className="flex justify-between bg-green-600 text-white rounded-lg p-3">
                      <span className="font-bold">총 연간 효과</span>
                      <span className="font-bold">550억원</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-amber-50 rounded-xl p-6">
                  <p className="text-sm text-amber-600 mb-2">투자 대비 수익률</p>
                  <div className="text-6xl font-black text-amber-600">1,375%</div>
                  <p className="text-sm text-amber-600 mt-2">투자 40억원 → 연간 550억원</p>
                </div>
              </div>
            </div>

            {/* Social Effect */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-6 text-green-400">사회적 효과</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: '고독사 감소', from: '연 500건', to: '250건', change: '-50%', icon: '❤️' },
                  { label: '주민 만족도', from: '70점', to: '85점', change: '+15점', icon: '😊' },
                  { label: '입주 경쟁률', from: '5:1', to: '15:1', change: '3배↑', icon: '🏠' },
                  { label: '공공주택 선호도', from: '하위 30%', to: '상위 50%', change: '혁신', icon: '⭐' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center bg-white/10 rounded-xl p-6">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <p className="text-xs text-stone-400 line-through">{item.from}</p>
                    <p className="text-xl font-black text-white">{item.to}</p>
                    <p className="text-sm text-green-400 mt-1">{item.change}</p>
                    <p className="text-xs text-stone-400 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-stone-900">실행 로드맵</h2>

            {/* Timeline */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-amber-500 hidden md:block"></div>

                {/* Phase 1 */}
                <div className="relative mb-12 md:pl-20">
                  <div className="absolute left-4 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold hidden md:flex">1</div>
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Phase 1</span>
                      <span className="text-blue-700 font-bold">Year 1: 시범 단지 구축</span>
                    </div>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        시범 단지 3개 선정 (1,500세대)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        민간 컨소시엄 구성 (에너지기업 + IT기업 + 통신사)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        주거자산계좌 시스템 개발
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        주거신용점수 제도 설계
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative mb-12 md:pl-20">
                  <div className="absolute left-4 top-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold hidden md:flex">2</div>
                  <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">Phase 2</span>
                      <span className="text-green-700 font-bold">Year 2-3: 검증 및 확대</span>
                    </div>
                    <ul className="space-y-2 text-green-800">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        신규 공급 단지 설계 반영
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        「공공주택 특별법」 시행령 개정
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        5만 세대 확대 적용
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        성과 측정 및 시스템 고도화
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative md:pl-20">
                  <div className="absolute left-4 top-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold hidden md:flex">3</div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">Phase 3</span>
                      <span className="text-amber-700 font-bold">Year 4-10: 전국 확산</span>
                    </div>
                    <ul className="space-y-2 text-amber-800">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        100만 세대 전국 확산
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        민간 확산 모델 개발
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        &quot;LH 자산주택&quot; 브랜드 론칭
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                        연간 550억원 운영수익 달성
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment */}
            <div className="bg-stone-900 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-lg mb-6">필요 자원 (LH 순부담 최소화)</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 rounded-xl p-5 text-center">
                  <p className="text-sm text-stone-400 mb-2">AI 플랫폼 개발</p>
                  <p className="text-2xl font-black text-blue-400">30억원</p>
                  <p className="text-xs text-stone-500">스마트시티 R&D</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5 text-center">
                  <p className="text-sm text-stone-400 mb-2">IoT 인프라</p>
                  <p className="text-2xl font-black text-green-400">0원</p>
                  <p className="text-xs text-stone-500">민간 PPA 투자</p>
                </div>
                <div className="bg-white/10 rounded-xl p-5 text-center">
                  <p className="text-sm text-stone-400 mb-2">주거자산계좌</p>
                  <p className="text-2xl font-black text-blue-400">10억원</p>
                  <p className="text-xs text-stone-500">주택도시기금</p>
                </div>
                <div className="bg-amber-500 rounded-xl p-5 text-center">
                  <p className="text-sm text-amber-100 mb-2">LH 순부담</p>
                  <p className="text-2xl font-black">40억원</p>
                  <p className="text-xs text-amber-200">기존 예산 전환</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
