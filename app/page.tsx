import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 via-blue-50/30 to-green-50/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, #1a1a1a 60px, #1a1a1a 61px),
                           repeating-linear-gradient(90deg, transparent, transparent 60px, #1a1a1a 60px, #1a1a1a 61px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header Badge */}
        <div className="mb-12 pt-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-3 rounded-full shadow-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold tracking-wider">국민과 함께 만드는 새로운 LH</span>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <span className="text-xs opacity-75">2025</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-20">
          <div className="relative">
            {/* Accent Elements */}
            <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>

            <div className="pl-4">
              <p className="text-sm font-mono text-blue-600 mb-4 tracking-widest">SMART EMPATHY HOUSING</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 mb-6 leading-tight tracking-tight">
                AI가 연결하는<br/>
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">따뜻한 이웃</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 font-medium leading-relaxed max-w-2xl">
                스마트 공감 주택 플랫폼으로<br/>
                공공주택을 &apos;저렴한 집&apos;에서 &apos;살고 싶은 공동체&apos;로
              </p>
            </div>
          </div>

          {/* Hero Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                  🏠
                </div>
                <div>
                  <p className="text-xs font-mono text-blue-600 tracking-widest">VISION</p>
                  <h3 className="text-xl font-bold text-stone-900">공공주택의 재정의</h3>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed">
                AI·IoT 기술과 세대통합 커뮤니티를 결합하여<br/>
                청년-신혼-고령층이 서로 돌보는 새로운 주거 생태계
              </p>
            </div>

            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center text-stone-900 text-2xl shadow-lg">
                  🤖
                </div>
                <div>
                  <p className="text-xs font-mono text-green-400 tracking-widest">PLATFORM</p>
                  <h3 className="text-xl font-bold text-white">3대 혁신 시스템</h3>
                </div>
              </div>
              <p className="text-stone-300 leading-relaxed">
                AI 통합 관리 + 세대통합 커뮤니티 + 주민 참여 거버넌스로<br/>
                지속가능한 공공주택 운영 모델 구축
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <Link
            href="/proposal"
            className="group relative bg-white rounded-2xl border-2 border-stone-200 hover:border-blue-400 transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  📋
                </div>
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <span className="text-stone-600 group-hover:text-white text-lg transition-colors">→</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-mono text-blue-600 mb-2 tracking-widest">01 — PROPOSAL</p>
                <h2 className="text-2xl font-black text-stone-900">제안서</h2>
              </div>

              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                스마트 공감 주택 플랫폼의<br/>
                핵심 개념과 실행 전략
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold rounded-full">전체 내용</span>
                <span className="bg-stone-100 text-stone-600 px-3 py-1 text-xs font-bold rounded-full">7 섹션</span>
              </div>
            </div>
          </Link>

          <Link
            href="/visual"
            className="group relative bg-gradient-to-br from-green-600 to-green-700 rounded-2xl transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>

            <div className="relative p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl">
                  📊
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <span className="text-white group-hover:text-green-600 text-lg transition-colors">→</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-mono text-green-200 mb-2 tracking-widest">02 — VISUAL DATA</p>
                <h2 className="text-2xl font-black text-white">시각 자료</h2>
              </div>

              <p className="text-green-100 text-sm mb-6 leading-relaxed">
                인터랙티브 차트와<br/>
                핵심 데이터 시각화
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 text-white px-3 py-1 text-xs font-bold rounded-full">인터랙티브</span>
                <span className="bg-white/10 text-green-100 px-3 py-1 text-xs font-bold rounded-full">차트</span>
              </div>
            </div>
          </Link>

          <Link
            href="/research"
            className="group relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl transition-all duration-300 overflow-hidden hover:shadow-xl hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>

            <div className="relative p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl">
                  🔬
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <span className="text-white group-hover:text-purple-600 text-lg transition-colors">→</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-mono text-purple-200 mb-2 tracking-widest">03 — RESEARCH</p>
                <h2 className="text-2xl font-black text-white">리서치</h2>
              </div>

              <p className="text-purple-100 text-sm mb-6 leading-relaxed">
                해외 사례 및 국내 현황<br/>
                심층 분석 인사이트
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 text-white px-3 py-1 text-xs font-bold rounded-full">사례 분석</span>
                <span className="bg-white/10 text-purple-100 px-3 py-1 text-xs font-bold rounded-full">데이터</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Problem & Solution Overview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-mono text-stone-500 tracking-widest mb-3">WHY WE NEED CHANGE</p>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">공공주택, 무엇이 문제인가?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                😔
              </div>
              <h3 className="text-lg font-bold text-red-900 mb-2">기술 격차</h3>
              <p className="text-red-700 text-sm leading-relaxed">
                스마트홈 적용률 <span className="font-bold">0.16%</span><br/>
                (174만호 중 2,759호만 적용)
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                😢
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">사회적 고립</h3>
              <p className="text-orange-700 text-sm leading-relaxed">
                연간 고독사 <span className="font-bold">500건+</span><br/>
                발견까지 평균 4.5일
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                💸
              </div>
              <h3 className="text-lg font-bold text-yellow-900 mb-2">재정 위기</h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                LH 부채 <span className="font-bold">160.1조원</span><br/>
                부채비율 222%
              </p>
            </div>
          </div>

          {/* Solution Arrow */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg">
              ↓ 스마트 공감 주택으로 해결 ↓
            </div>
          </div>

          {/* 3 Systems */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg">
                🤖
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">AI 통합 관리</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  스마트 에너지 관리 (30% 절감)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  예측 유지보수 시스템
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  고독사 예방 모니터링
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg">
                🤝
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">세대통합 커뮤니티</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  AI 이웃 매칭 시스템
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  돌봄 시간은행
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  세대공유 공간 운영
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg">
                🗳️
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">주민 참여 거버넌스</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  디지털 투표 시스템
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  커뮤니티 펀드 운영
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  단지 내 일자리 연계
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expected Results */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-10 md:p-14 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}></div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="mb-10">
              <p className="text-sm font-mono text-green-400 tracking-widest mb-3">EXPECTED RESULTS</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">기대 효과</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-white mb-2">
                  30<span className="text-2xl text-blue-400">%</span>
                </div>
                <div className="h-1 w-16 bg-blue-400 mx-auto mb-3 rounded-full"></div>
                <p className="text-stone-300 font-medium">에너지 비용 절감</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-white mb-2">
                  50<span className="text-2xl text-green-400">%</span>
                </div>
                <div className="h-1 w-16 bg-green-400 mx-auto mb-3 rounded-full"></div>
                <p className="text-stone-300 font-medium">고독사 감소</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-white mb-2">
                  3,600<span className="text-2xl text-orange-400">억</span>
                </div>
                <div className="h-1 w-16 bg-orange-400 mx-auto mb-3 rounded-full"></div>
                <p className="text-stone-300 font-medium">연간 절감 (100만 세대)</p>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-white mb-2">
                  10:1
                </div>
                <div className="h-1 w-16 bg-purple-400 mx-auto mb-3 rounded-full"></div>
                <p className="text-stone-300 font-medium">입주 경쟁률 상승</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm font-mono text-stone-500 tracking-widest mb-3">BEFORE & AFTER</p>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">기존 vs 스마트 공감 주택</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
            <div className="grid grid-cols-3 bg-stone-100">
              <div className="p-4 font-bold text-stone-700 text-center">구분</div>
              <div className="p-4 font-bold text-stone-500 text-center bg-stone-200">기존 공공주택</div>
              <div className="p-4 font-bold text-blue-700 text-center bg-blue-50">스마트 공감 주택</div>
            </div>

            {[
              { label: '핵심 가치', old: '저렴한 가격', new: '따뜻한 공동체' },
              { label: '기술 수준', old: '기본 시설', new: 'AI 통합 플랫폼' },
              { label: '커뮤니티', old: '단절/익명', new: '세대통합/매칭' },
              { label: '관리 방식', old: '수동/민원', new: '자동/예측' },
              { label: '에너지', old: '개별 부담', new: '공동 생산/절감' },
            ].map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-stone-50' : 'bg-white'}`}>
                <div className="p-4 font-medium text-stone-700 text-center border-r border-stone-100">{row.label}</div>
                <div className="p-4 text-stone-500 text-center border-r border-stone-100">{row.old}</div>
                <div className="p-4 text-blue-700 font-medium text-center">{row.new}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-stone-200 pt-8 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-sm font-bold text-stone-900">「국민과 함께 만드는 새로운 LH」 공모전</p>
              <p className="text-xs text-stone-600 mt-1 font-mono">분야: 내가 살고 싶은 공공주택</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-bold text-stone-900">제안자</p>
              <p className="text-sm text-stone-700 mt-1">박용환 (Creative Nexus)</p>
              <p className="text-xs text-stone-500 mt-1 font-mono">010-7939-3123</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-stone-900">제출 기한</p>
              <p className="text-lg font-black bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                2025.11.30 (토) 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
