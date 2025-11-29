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

        {/* Hero Section - Updated */}
        <div className="mb-20">
          <div className="relative">
            {/* Accent Elements */}
            <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>

            <div className="pl-4">
              <p className="text-sm font-mono text-blue-600 mb-4 tracking-widest">HOUSING ASSET PLATFORM</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 mb-6 leading-tight tracking-tight">
                살면서<br/>
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">내 집 되는</span><br/>
                공공주택
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 font-medium leading-relaxed max-w-2xl">
                AI 기반 주거자산형성 플랫폼으로<br/>
                공공주택을 &apos;임시 거처&apos;에서 &apos;내 집 마련의 디딤돌&apos;로
              </p>
            </div>
          </div>

          {/* Hero Cards - Updated */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                  🏠
                </div>
                <div>
                  <p className="text-xs font-mono text-blue-600 tracking-widest">CORE CONCEPT</p>
                  <h3 className="text-xl font-bold text-stone-900">주거자산계좌</h3>
                </div>
              </div>
              <p className="text-stone-600 leading-relaxed">
                에너지 절감분을 입주민 계좌에 적립<br/>
                <strong className="text-blue-600">5년 거주 시 최대 180만원</strong> 자산 형성
              </p>
            </div>

            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center text-stone-900 text-2xl shadow-lg">
                  ⭐
                </div>
                <div>
                  <p className="text-xs font-mono text-green-400 tracking-widest">INNOVATION</p>
                  <h3 className="text-xl font-bold text-white">주거신용점수</h3>
                </div>
              </div>
              <p className="text-stone-300 leading-relaxed">
                커뮤니티 활동 → 점수화 → 분양전환 우선권<br/>
                <strong className="text-green-400">공공주택이 내 집 마련의 시작점</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Key Message Banner */}
        <div className="mb-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 text-center">
            <p className="text-blue-100 text-sm font-mono tracking-widest mb-4">SINGAPORE MODEL FOR KOREA</p>
            <p className="text-2xl md:text-3xl font-black mb-4">
              &quot;싱가포르는 공공주택으로 국민 80%가 자가를 보유합니다&quot;
            </p>
            <p className="text-xl text-blue-100">
              대한민국도 할 수 있습니다.
            </p>
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
                주거자산형성 플랫폼의<br/>
                핵심 개념과 실행 전략
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold rounded-full">5매 요약</span>
                <span className="bg-stone-100 text-stone-600 px-3 py-1 text-xs font-bold rounded-full">대상 수상용</span>
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
                ROI 분석, 자산적립 시뮬레이션<br/>
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
                싱가포르 HDB, 네덜란드 사례<br/>
                정책 근거 분석
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 text-white px-3 py-1 text-xs font-bold rounded-full">해외 사례</span>
                <span className="bg-white/10 text-purple-100 px-3 py-1 text-xs font-bold rounded-full">법적 근거</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Problem Section - Updated */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-mono text-stone-500 tracking-widest mb-3">CRITICAL PROBLEMS</p>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">왜 공공주택에서 자산이 안 모이나?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🚫
              </div>
              <h3 className="text-lg font-bold text-red-900 mb-2">자산 형성 불가</h3>
              <p className="text-red-700 text-sm leading-relaxed">
                10년 거주해도 <span className="font-bold">자산 0원</span><br/>
                분양전환은 &quot;운&quot;에 의존
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                💸
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-2">LH 부채 위기</h3>
              <p className="text-orange-700 text-sm leading-relaxed">
                부채 <span className="font-bold">160.1조원</span><br/>
                스마트홈 적용률 0.16%
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                😢
              </div>
              <h3 className="text-lg font-bold text-yellow-900 mb-2">사회적 낙인</h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                &quot;공공주택 = 막다른 골목&quot;<br/>
                주거사다리 단절
              </p>
            </div>
          </div>

          {/* Solution Arrow */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg">
              ↓ 주거자산형성 플랫폼으로 해결 ↓
            </div>
          </div>

          {/* 3 Systems - Updated */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg">
                🤖
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">AI 스마트 관리</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  민간 PPA로 LH 부담 Zero
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  에너지 30% 절감
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  절감분 → 입주민 계좌 적립
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg">
                💰
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">주거자산계좌</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  연 18만원 자동 적립
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  5년 = 90만원 + 보너스
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  분양전환 재원으로 활용
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">주거신용점수</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  커뮤니티 활동 → 점수화
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  500점+ 분양전환 우선권
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  추가 보너스 적립
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expected Results - Updated */}
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
              <p className="text-sm font-mono text-green-400 tracking-widest mb-3">WIN-WIN-WIN EFFECTS</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">기대 효과</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white/10 rounded-2xl p-6">
                <p className="text-blue-400 font-mono text-sm mb-2">FOR RESIDENTS</p>
                <div className="text-4xl font-black text-white mb-2">180<span className="text-xl">만원</span></div>
                <p className="text-stone-300">5년 거주 시 자산 적립</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <p className="text-green-400 font-mono text-sm mb-2">FOR LH</p>
                <div className="text-4xl font-black text-white mb-2">550<span className="text-xl">억/년</span></div>
                <p className="text-stone-300">연간 운영수익 (100만세대)</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <p className="text-purple-400 font-mono text-sm mb-2">FOR SOCIETY</p>
                <div className="text-4xl font-black text-white mb-2">50<span className="text-xl">%</span></div>
                <p className="text-stone-300">고독사 감소율</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 text-center">
              <p className="text-stone-400 text-sm mb-2">투자 대비 효과 (ROI)</p>
              <p className="text-3xl font-black text-green-400">1,375%</p>
              <p className="text-stone-400 text-sm mt-2">투자 40억원 → 연간 수익 550억원</p>
            </div>
          </div>
        </div>

        {/* Comparison Table - Updated */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-sm font-mono text-stone-500 tracking-widest mb-3">PARADIGM SHIFT</p>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">기존 vs 주거자산형성 모델</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
            <div className="grid grid-cols-3 bg-stone-100">
              <div className="p-4 font-bold text-stone-700 text-center">구분</div>
              <div className="p-4 font-bold text-stone-500 text-center bg-stone-200">기존 공공주택</div>
              <div className="p-4 font-bold text-blue-700 text-center bg-blue-50">제안 모델</div>
            </div>

            {[
              { label: '핵심 가치', old: '저렴한 임대', new: '자산 형성 지원' },
              { label: '에너지 절감분', old: 'LH 귀속', new: '입주민 계좌 적립' },
              { label: '커뮤니티 활동', old: '무보상', new: '주거신용점수 혜택' },
              { label: '분양전환', old: '추첨 (운)', new: '기여도 반영 (노력)' },
              { label: 'LH 역할', old: '공급자', new: '자산형성 파트너' },
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
              <p className="text-sm font-bold text-stone-900">제출일</p>
              <p className="text-lg font-black bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                2025.11.30
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
