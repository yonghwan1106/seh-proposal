'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function VisualPage() {
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-green-200 hover:text-white transition-colors mb-4">
            <span>←</span>
            <span className="text-sm">메인으로</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg">
              📊
            </div>
            <div>
              <p className="text-xs font-mono text-green-200 tracking-widest">VISUAL DATA</p>
              <h1 className="text-2xl font-black">시각 자료</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'comparison', label: '비교 분석' },
            { id: 'problems', label: '현황/문제점' },
            { id: 'systems', label: '3대 시스템' },
            { id: 'effects', label: '기대 효과' },
            { id: 'roadmap', label: '로드맵' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg'
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
            <h2 className="text-2xl font-black text-stone-900">기존 vs 스마트 공감 주택</h2>

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
                    { label: '스마트홈 적용률', value: '0.16%', bar: 0.16 },
                    { label: '커뮤니티 참여율', value: '10%', bar: 10 },
                    { label: '입주 만족도', value: '70점', bar: 70 },
                    { label: '에너지 효율', value: '기본', bar: 40 },
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
              </div>

              {/* After */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-green-500">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-bold text-green-700">스마트 공감 주택</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: '스마트홈 적용률', value: '100%', bar: 100 },
                    { label: '커뮤니티 참여율', value: '40%', bar: 40 },
                    { label: '입주 만족도', value: '85점', bar: 85 },
                    { label: '에너지 효율', value: '+30%', bar: 100 },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-stone-600">{item.label}</span>
                        <span className="font-bold text-green-600">{item.value}</span>
                      </div>
                      <div className="h-3 bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000"
                          style={{ width: `${item.bar}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-6 text-green-400">핵심 개선 지표</h3>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { label: '핵심 가치', from: '저렴한 가격', to: '따뜻한 공동체', icon: '💝' },
                  { label: '기술 수준', from: '기본 시설', to: 'AI 통합', icon: '🤖' },
                  { label: '커뮤니티', from: '단절/익명', to: '세대통합', icon: '🤝' },
                  { label: '관리 방식', from: '수동/민원', to: '자동/예측', icon: '⚙️' },
                  { label: '에너지', from: '개별 부담', to: '공동 절감', icon: '⚡' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <p className="text-xs text-stone-400 mb-2">{item.label}</p>
                    <p className="text-sm text-stone-500 line-through mb-1">{item.from}</p>
                    <p className="text-sm font-bold text-green-400">{item.to}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'problems' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-stone-900">현황 및 문제점</h2>

            {/* Tech Gap */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-xl">😔</span>
                기술 격차
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-stone-500 mb-3">공공주택 스마트홈 적용률</p>
                  <div className="relative h-8 bg-stone-100 rounded-full overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-[0.16%] bg-red-500 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-red-700">0.16% (2,759호 / 174만호)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-3">민간 아파트 스마트홈 적용률</p>
                  <div className="relative h-8 bg-stone-100 rounded-full overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-[70%] bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-stone-700">70% 이상</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-4 bg-red-50 px-6 py-3 rounded-full">
                  <span className="text-4xl font-black text-red-600">437배</span>
                  <span className="text-red-700">격차</span>
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
                  <div className="mt-3 h-24 flex items-end justify-center">
                    {[60, 75, 85, 95, 100].map((h, i) => (
                      <div
                        key={i}
                        className="w-8 bg-orange-400 mx-1 rounded-t"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                  <p className="text-xs text-orange-500 mt-2">연도별 증가 추세</p>
                </div>
                <div className="text-center bg-orange-50 rounded-xl p-6">
                  <div className="text-5xl font-black text-orange-600 mb-2">4.5일</div>
                  <p className="text-sm text-orange-700">발견까지 평균 기간</p>
                  <div className="mt-3 flex justify-center items-center h-24">
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 border-8 border-orange-200 rounded-full"></div>
                      <div
                        className="absolute inset-0 border-8 border-orange-500 rounded-full"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 64%, 0 64%)' }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="text-center bg-orange-50 rounded-xl p-6">
                  <div className="text-5xl font-black text-orange-600 mb-2">40%</div>
                  <p className="text-sm text-orange-700">1인 가구 비중</p>
                  <div className="mt-3 flex justify-center items-center h-24">
                    <div className="grid grid-cols-5 gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded ${i < 4 ? 'bg-orange-500' : 'bg-orange-200'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
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
                  <p className="text-sm text-stone-500 mb-2">2029년 전망</p>
                  <div className="text-5xl font-black text-red-600">261.9<span className="text-2xl">조</span></div>
                  <p className="text-xs text-red-500 mt-1">+101.8조 증가</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-4 justify-center">
                  <div className="flex items-end h-32 gap-2">
                    <div className="w-16 bg-yellow-400 rounded-t" style={{ height: '60%' }}>
                      <p className="text-xs text-center pt-2 text-yellow-900">2024</p>
                    </div>
                    <div className="w-16 bg-yellow-500 rounded-t" style={{ height: '70%' }}>
                      <p className="text-xs text-center pt-2 text-yellow-900">2025</p>
                    </div>
                    <div className="w-16 bg-orange-400 rounded-t" style={{ height: '80%' }}>
                      <p className="text-xs text-center pt-2 text-orange-900">2026</p>
                    </div>
                    <div className="w-16 bg-orange-500 rounded-t" style={{ height: '90%' }}>
                      <p className="text-xs text-center pt-2 text-orange-900">2027</p>
                    </div>
                    <div className="w-16 bg-red-500 rounded-t" style={{ height: '100%' }}>
                      <p className="text-xs text-center pt-2 text-white">2029</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'systems' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-stone-900">3대 혁신 시스템</h2>

            {/* System Overview */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg">
                    🤖
                  </div>
                  <p className="font-bold">AI 통합 관리</p>
                </div>
                <div className="flex items-center text-3xl text-stone-500">+</div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg">
                    🤝
                  </div>
                  <p className="font-bold">세대통합 커뮤니티</p>
                </div>
                <div className="flex items-center text-3xl text-stone-500">+</div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg">
                    🗳️
                  </div>
                  <p className="font-bold">주민 참여 거버넌스</p>
                </div>
              </div>
            </div>

            {/* System 1 Detail */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <span className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center text-2xl">🤖</span>
                시스템 1: AI 통합 관리 플랫폼
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: '스마트 에너지', desc: '태양광+ESS+AI 예측 관리', effect: '전기료 30% 절감', icon: '⚡' },
                  { title: '예측 유지보수', desc: 'IoT 센서로 고장 사전 감지', effect: '수리비 30% 절감', icon: '🔧' },
                  { title: '고독사 예방', desc: '활동 패턴 분석→이상 시 자동 대응', effect: '고독사 50% 감소', icon: '❤️' },
                  { title: '층간소음 관리', desc: 'AI 소음 감지→실시간 알림', effect: '민원 40% 감소', icon: '🔇' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">{item.title}</h4>
                      <p className="text-sm text-stone-600">{item.desc}</p>
                      <p className="text-sm font-bold text-blue-600 mt-1">{item.effect}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System 2 Detail */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-3">
                <span className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center text-2xl">🤝</span>
                시스템 2: 세대통합 커뮤니티
              </h3>
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-2">👨‍💻</div>
                    <p className="text-sm font-bold text-blue-800">청년</p>
                    <p className="text-xs text-stone-500">IT 도움</p>
                  </div>
                  <div className="text-2xl text-green-500">⇄</div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">🔄</div>
                    <p className="text-sm font-bold text-green-800">AI 매칭</p>
                    <p className="text-xs text-stone-500">시간은행</p>
                  </div>
                  <div className="text-2xl text-green-500">⇄</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-2">👴</div>
                    <p className="text-sm font-bold text-amber-800">시니어</p>
                    <p className="text-xs text-stone-500">경험 공유</p>
                  </div>
                  <div className="text-2xl text-green-500">⇄</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-2">👨‍👩‍👧</div>
                    <p className="text-sm font-bold text-pink-800">신혼</p>
                    <p className="text-xs text-stone-500">육아 도움</p>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl mb-2">🎯</p>
                  <p className="font-bold text-green-900">AI 이웃 매칭</p>
                  <p className="text-sm text-stone-600">라이프스타일 분석</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl mb-2">⏰</p>
                  <p className="font-bold text-green-900">돌봄 시간은행</p>
                  <p className="text-sm text-stone-600">도움 교환 크레딧</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl mb-2">🏠</p>
                  <p className="font-bold text-green-900">세대공유 공간</p>
                  <p className="text-sm text-stone-600">주방/사무실/키즈카페</p>
                </div>
              </div>
            </div>

            {/* System 3 Detail */}
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                <span className="w-12 h-12 bg-purple-500 text-white rounded-xl flex items-center justify-center text-2xl">🗳️</span>
                시스템 3: 주민 참여 거버넌스
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">📱</div>
                  <h4 className="font-bold text-purple-900 mb-2">디지털 투표</h4>
                  <p className="text-sm text-stone-600">앱으로 단지 운영<br/>의사결정 참여</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">💰</div>
                  <h4 className="font-bold text-purple-900 mb-2">커뮤니티 펀드</h4>
                  <p className="text-sm text-stone-600">주민 참여 예산 편성<br/>에너지 절감분 활용</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">👷</div>
                  <h4 className="font-bold text-purple-900 mb-2">일자리 연계</h4>
                  <p className="text-sm text-stone-600">돌봄·관리·교육<br/>입주민 우선 채용</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'effects' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-stone-900">기대 효과</h2>

            {/* Short Term */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-stone-900 mb-6">
                <span className="text-blue-600">단기</span> (Year 1-2): 시범 단지 성과
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { label: '에너지 비용', from: '월 10만원', to: '월 7만원', change: '-30%', color: 'blue' },
                  { label: '고독사', from: '연 30건', to: '연 15건', change: '-50%', color: 'green' },
                  { label: '주민 만족도', from: '70점', to: '85점', change: '+15점', color: 'purple' },
                  { label: '커뮤니티 참여', from: '10%', to: '40%', change: '+30%p', color: 'orange' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`bg-${item.color}-50 rounded-xl p-4 mb-3`}>
                      <p className="text-sm text-stone-500 line-through">{item.from}</p>
                      <p className={`text-2xl font-black text-${item.color}-600`}>{item.to}</p>
                    </div>
                    <p className="text-sm text-stone-600">{item.label}</p>
                    <p className={`text-lg font-bold text-${item.color}-600`}>{item.change}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Long Term */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-6">
                <span className="text-green-400">장기</span> (Year 5-10): 전국 100만 세대
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '3,600억', unit: '원', label: '연간 에너지 절감', icon: '💰' },
                  { value: '2,500', unit: '건', label: '고독사 예방', icon: '❤️' },
                  { value: '10:1', unit: '', label: '입주 경쟁률', icon: '🏠' },
                  { value: '1위', unit: '', label: '공공주택 브랜드', icon: '🏆' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center bg-white/10 rounded-xl p-6">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="text-3xl font-black text-white">
                      {item.value}<span className="text-lg text-stone-400">{item.unit}</span>
                    </div>
                    <p className="text-sm text-stone-300 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-stone-900 mb-6">투자 대비 효과 (ROI)</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-stone-700 mb-4">투자 (3개 시범단지)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-stone-50 rounded-lg p-3">
                      <span>AI 플랫폼 개발</span>
                      <span className="font-bold">50억원</span>
                    </div>
                    <div className="flex justify-between bg-stone-50 rounded-lg p-3">
                      <span>IoT 인프라 (1,500세대)</span>
                      <span className="font-bold">300억원</span>
                    </div>
                    <div className="flex justify-between bg-stone-50 rounded-lg p-3">
                      <span>앱/서비스 개발</span>
                      <span className="font-bold">20억원</span>
                    </div>
                    <div className="flex justify-between bg-stone-50 rounded-lg p-3">
                      <span>운영 인력 (1년)</span>
                      <span className="font-bold">50억원</span>
                    </div>
                    <div className="flex justify-between bg-stone-900 text-white rounded-lg p-3">
                      <span className="font-bold">총 투자</span>
                      <span className="font-bold">약 420억원</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-stone-700 mb-4">연간 효과 (100만 세대 확산 시)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between bg-green-50 rounded-lg p-3">
                      <span>에너지 절감</span>
                      <span className="font-bold text-green-600">3,600억원</span>
                    </div>
                    <div className="flex justify-between bg-green-50 rounded-lg p-3">
                      <span>유지보수비 절감</span>
                      <span className="font-bold text-green-600">500억원</span>
                    </div>
                    <div className="flex justify-between bg-green-50 rounded-lg p-3">
                      <span>사회적 비용 절감</span>
                      <span className="font-bold text-green-600">200억원</span>
                    </div>
                    <div className="flex justify-between bg-green-50 rounded-lg p-3">
                      <span>브랜드 가치 상승</span>
                      <span className="font-bold text-green-600">측정불가</span>
                    </div>
                    <div className="flex justify-between bg-green-600 text-white rounded-lg p-3">
                      <span className="font-bold">연간 효과</span>
                      <span className="font-bold">4,300억원+</span>
                    </div>
                  </div>
                </div>
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
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 hidden md:block"></div>

                {/* Phase 1 */}
                <div className="relative mb-12 md:pl-20">
                  <div className="absolute left-4 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold hidden md:flex">1</div>
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Phase 1</span>
                      <span className="text-blue-700 font-bold">Year 1: 파일럿 단지 구축</span>
                    </div>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        시범 단지 3개 선정 (1,500세대)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        AI 플랫폼 개발 및 설치
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        세대통합 프로그램 설계
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        커뮤니티 매니저 배치
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
                      <span className="text-green-700 font-bold">Year 2: 검증 및 개선</span>
                    </div>
                    <ul className="space-y-2 text-green-800">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        입주민 만족도 조사
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        시스템 고도화
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        운영 매뉴얼 확립
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        성과 지표 측정
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative mb-12 md:pl-20">
                  <div className="absolute left-4 top-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold hidden md:flex">3</div>
                  <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">Phase 3</span>
                      <span className="text-purple-700 font-bold">Year 3-5: 전국 확산</span>
                    </div>
                    <ul className="space-y-2 text-purple-800">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        신규 공공주택 전면 적용
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        기존 단지 리모델링 적용
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        100개 단지 (5만 세대) 확산
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        민간 확산 모델 개발
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="relative md:pl-20">
                  <div className="absolute left-4 top-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold hidden md:flex">4</div>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">Phase 4</span>
                      <span className="text-orange-700 font-bold">Year 5-10: 자생 생태계 구축</span>
                    </div>
                    <ul className="space-y-2 text-orange-800">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        전국 100만 세대 적용
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        연간 3,600억원 절감 달성
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        공공주택 브랜드 1위
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        해외 수출 모델 개발
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
