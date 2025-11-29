import Link from 'next/link';

export default function ProposalPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors mb-4">
            <span>←</span>
            <span className="text-sm">메인으로</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
              📋
            </div>
            <div>
              <p className="text-xs font-mono text-amber-400 tracking-widest">PROPOSAL</p>
              <h1 className="text-2xl font-black">제안서 전문</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            <div className="relative z-10">
              <p className="text-sm font-mono text-amber-200 tracking-widest mb-4">① 제목</p>
              <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                &quot;살면서 내 집 되는 공공주택&quot;
              </h2>
              <p className="text-xl text-amber-100 font-medium">
                AI 기반 주거자산형성 플랫폼
              </p>
            </div>
          </div>
        </section>

        {/* Applicant */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-white text-2xl font-black shrink-0">
              ②
            </div>
            <div>
              <h3 className="text-sm font-mono text-stone-500 tracking-widest mb-2">신청자</h3>
              <p className="text-2xl font-bold text-stone-900">박용환</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-stone-600">
                <span className="flex items-center gap-2">
                  <span className="text-amber-600 font-medium">소속:</span> Creative Nexus
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-amber-600 font-medium">연락처:</span> 010-7939-3123
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Field */}
        <section className="mb-16">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-white text-2xl font-black shrink-0">
              ③
            </div>
            <div>
              <h3 className="text-sm font-mono text-stone-500 tracking-widest mb-2">분야</h3>
              <div className="inline-flex items-center gap-3 bg-amber-100 text-amber-800 px-6 py-3 rounded-full">
                <span className="text-xl">☑</span>
                <span className="font-bold text-lg">내가 살고 싶은 공공주택</span>
              </div>
              <p className="text-stone-600 mt-3">공공주택 개편 방향, 주거복지 확대 등</p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-white text-2xl font-black shrink-0">
              ④
            </div>
            <div>
              <h3 className="text-sm font-mono text-stone-500 tracking-widest mb-2">개요</h3>
              <h4 className="text-2xl font-bold text-stone-900">핵심 아이디어</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100 mb-8">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              본 제안은 공공주택을 <strong className="text-amber-600">&apos;임시 거처&apos;에서 &apos;내 집 마련의 디딤돌&apos;</strong>로 전환하는 혁신 모델입니다.
            </p>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
              <p className="font-bold text-stone-900 mb-3">핵심 컨셉:</p>
              <p className="text-stone-700">
                AI·IoT 기반 스마트 관리로 <strong>운영비를 절감</strong>하고, 절감액을 입주민의 <strong>&apos;주거자산계좌&apos;에 적립</strong>하여
                <strong> 분양전환·청약 재원으로 활용</strong>하게 합니다. 동시에 세대통합 커뮤니티를 통해 <strong>돌봄 활동을 점수화</strong>하여 추가 혜택을 제공합니다.
              </p>
            </div>
          </div>

          {/* Key Message Box */}
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-6 text-white mb-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇸🇬</span>
              <div>
                <p className="text-lg font-bold text-amber-400">싱가포르는 공공주택으로 국민 80%가 자가를 보유합니다.</p>
                <p className="text-stone-300">대한민국도 할 수 있습니다.</p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 mb-8">
            <div className="bg-stone-900 text-white p-4">
              <h5 className="font-bold">기존 공공주택 vs 제안 모델</h5>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="p-4 text-left font-bold text-stone-700">구분</th>
                    <th className="p-4 text-center font-bold text-stone-500">기존 공공주택</th>
                    <th className="p-4 text-center font-bold text-amber-700 bg-amber-50">주거자산형성 모델</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['핵심 가치', '저렴한 임대', '자산 형성 지원'],
                    ['에너지 절감분', 'LH 귀속', '입주민 계좌 적립'],
                    ['커뮤니티 활동', '자발적/무보상', '주거신용점수로 혜택'],
                    ['분양전환', '일괄 추첨', '활동 기여도 반영'],
                    ['LH 역할', '공급자', '자산형성 파트너'],
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-stone-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-stone-700">{row[0]}</td>
                      <td className="p-4 text-center text-stone-500">{row[1]}</td>
                      <td className="p-4 text-center text-amber-700 font-medium bg-amber-50/50">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Expected Effects */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h5 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                <span className="text-lg">🏠</span> 입주민 효과
              </h5>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  5년 거주 시 <strong>180만원</strong> 적립
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  분양전환 계약금으로 활용
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  주거신용점수로 추가 혜택
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h5 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <span className="text-lg">🏢</span> LH 효과
              </h5>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  민간 협력으로 <strong>투자 부담 Zero</strong>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  연간 <strong>550억원</strong> 운영수익
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  공공주택 브랜드 혁신
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h5 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="text-lg">🌍</span> 사회적 효과
              </h5>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  고독사 <strong>50% 감소</strong>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  입주 경쟁률 <strong>15:1</strong> 상승
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  공공주택 낙인 해소
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-white text-2xl font-black shrink-0">
              ⑤
            </div>
            <div>
              <h3 className="text-sm font-mono text-stone-500 tracking-widest mb-2">현황 및 문제점</h3>
              <h4 className="text-2xl font-bold text-stone-900">공공주택의 구조적 한계</h4>
            </div>
          </div>

          {/* Problem 1 */}
          <div className="bg-red-50 rounded-2xl p-8 border border-red-100 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-xl">😔</span>
              <h5 className="text-xl font-bold text-red-900">문제 1: 서민의 자산 형성 기회 부재</h5>
            </div>
            <p className="text-red-800 mb-4">
              현재 공공주택은 &quot;저렴한 임대&quot;에 머물러, 입주민이 아무리 오래 살아도 <strong>자산이 형성되지 않습니다.</strong>
              분양전환은 추첨에 의존 → 10년 거주해도 &quot;운&quot;에 따라 결정됩니다.
            </p>
            <div className="bg-white rounded-xl p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-red-100">
                    <th className="py-2 text-left text-red-700">구분</th>
                    <th className="py-2 text-center text-red-700">민간 전세</th>
                    <th className="py-2 text-center text-red-700">공공임대</th>
                  </tr>
                </thead>
                <tbody className="text-red-800">
                  <tr className="border-b border-red-50">
                    <td className="py-2">10년 거주 후</td>
                    <td className="py-2 text-center">전세금 회수 (자산)</td>
                    <td className="py-2 text-center font-bold">없음</td>
                  </tr>
                  <tr className="border-b border-red-50">
                    <td className="py-2">분양전환 기회</td>
                    <td className="py-2 text-center">-</td>
                    <td className="py-2 text-center font-bold">추첨 (운 의존)</td>
                  </tr>
                  <tr>
                    <td className="py-2">실질 자산 형성</td>
                    <td className="py-2 text-center">가능</td>
                    <td className="py-2 text-center font-bold">불가능</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-red-700 mt-4 text-sm font-medium">
              → 공공주택 입주민은 주거 안정은 얻지만, <strong>&quot;주거 사다리&quot;의 막다른 골목</strong>에 갇힘
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-xl">💸</span>
              <h5 className="text-xl font-bold text-yellow-900">문제 2: LH 재정 위기와 운영 비효율</h5>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-yellow-700">160.1조</p>
                <p className="text-sm text-yellow-600">2024년 부채</p>
                <p className="text-xs text-yellow-500">(비금융 공기업 1위)</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-yellow-700">222%</p>
                <p className="text-sm text-yellow-600">부채비율</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-red-600">0.16%</p>
                <p className="text-sm text-yellow-600">스마트홈 적용률</p>
                <p className="text-xs text-yellow-500">(민간 대비 437배 격차)</p>
              </div>
            </div>
            <p className="text-yellow-800 text-sm">
              * 단순 물량 공급 모델의 한계, 기술 도입을 통한 효율화 시급
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">😢</span>
              <h5 className="text-xl font-bold text-orange-900">문제 3: 커뮤니티 단절과 사회적 고립</h5>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-orange-700">40%</p>
                <p className="text-sm text-orange-600">1인 가구 비중</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-orange-700">500+</p>
                <p className="text-sm text-orange-600">연간 고독사 (건)</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-orange-700">4.5일</p>
                <p className="text-sm text-orange-600">발견까지 평균 기간</p>
              </div>
            </div>
          </div>

          {/* Global Cases */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100">
            <h5 className="text-xl font-bold text-stone-900 mb-6">해외 성공 사례의 교훈</h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🇸🇬</span>
                  <h6 className="font-bold text-green-900">싱가포르 HDB</h6>
                </div>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• 국민 80%가 공공주택 통해 자가 보유</li>
                  <li>• 공공주택이 <strong>자산 형성 통로</strong></li>
                  <li>• CPF(연금) 활용한 분양 시스템</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🇳🇱</span>
                  <h6 className="font-bold text-blue-900">네덜란드 City-Zen</h6>
                </div>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• 1만 가구 스마트그리드</li>
                  <li>• <strong>에너지 절감분 입주민 환원</strong></li>
                  <li>• 시민 참여형 리빙랩</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-stone-100 rounded-xl p-4 text-center">
              <p className="font-bold text-stone-700">공통점: 공공주택을 &quot;비용&quot;이 아닌 &quot;투자&quot;로 전환, 입주민에게 실질적 혜택 제공</p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-white text-2xl font-black shrink-0">
              ⑥
            </div>
            <div>
              <h3 className="text-sm font-mono text-stone-500 tracking-widest mb-2">개선방안</h3>
              <h4 className="text-2xl font-bold text-stone-900">3대 혁신 시스템</h4>
            </div>
          </div>

          {/* Concept Change */}
          <div className="bg-gradient-to-r from-stone-800 to-stone-900 rounded-2xl p-8 text-white mb-8">
            <h5 className="text-lg font-bold mb-4">핵심 컨셉: &quot;살면서 내 집 되는 공공주택&quot;</h5>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="bg-white/10 rounded-xl p-4 w-full md:w-auto">
                <p className="text-sm text-stone-400 mb-1">기존</p>
                <p className="font-bold">임대료 납부 → LH 수익 → 입주민은 그대로</p>
              </div>
              <div className="text-3xl">→</div>
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-4 border border-amber-400/30 w-full md:w-auto">
                <p className="text-sm text-amber-400 mb-1">제안</p>
                <p className="font-bold">에너지 절감 + 커뮤니티 활동 → 입주민 자산 적립</p>
              </div>
            </div>
          </div>

          {/* System 1 */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg">
                🤖
              </div>
              <div>
                <p className="text-sm font-mono text-blue-600 tracking-widest">SYSTEM 1</p>
                <h5 className="text-xl font-bold text-blue-900">AI 스마트 관리 플랫폼 (민간 협력)</h5>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-4 text-left text-blue-800">기능</th>
                    <th className="p-4 text-left text-blue-800">내용</th>
                    <th className="p-4 text-left text-blue-800">비용 부담</th>
                    <th className="p-4 text-left text-blue-800">절감 효과</th>
                  </tr>
                </thead>
                <tbody className="text-blue-900">
                  <tr className="border-b border-blue-50">
                    <td className="p-4 font-medium">태양광+ESS</td>
                    <td className="p-4">공용부 전력 자급</td>
                    <td className="p-4">민간 PPA</td>
                    <td className="p-4 font-bold text-blue-600">전기료 30%↓</td>
                  </tr>
                  <tr className="border-b border-blue-50">
                    <td className="p-4 font-medium">AI 예측 유지보수</td>
                    <td className="p-4">IoT 센서 사전 감지</td>
                    <td className="p-4">플랫폼 기업</td>
                    <td className="p-4 font-bold text-blue-600">수리비 30%↓</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">스마트 검침</td>
                    <td className="p-4">실시간 에너지 관리</td>
                    <td className="p-4">통신사 협력</td>
                    <td className="p-4 font-bold text-blue-600">관리비 20%↓</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-100 rounded-xl p-4 text-center">
              <p className="font-bold text-blue-800">LH 투자 부담: Zero (민간 기업이 투자, 절감분으로 회수)</p>
            </div>
          </div>

          {/* System 2 */}
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg">
                💰
              </div>
              <div>
                <p className="text-sm font-mono text-amber-600 tracking-widest">SYSTEM 2</p>
                <h5 className="text-xl font-bold text-amber-900">주거자산계좌 (Housing Asset Account)</h5>
              </div>
            </div>

            {/* Distribution Structure */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <h6 className="font-bold text-amber-900 mb-4">절감액 배분 구조</h6>
              <div className="bg-stone-100 rounded-lg p-4 mb-4">
                <p className="text-center text-stone-700 font-medium">에너지 절감분 (가구당 월 3만원 = 연 36만원)</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-amber-100 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-amber-700">50%</p>
                  <p className="text-sm text-amber-600">입주민 주거자산계좌</p>
                  <p className="text-xs text-amber-500">연 18만원</p>
                </div>
                <div className="bg-blue-100 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-blue-700">30%</p>
                  <p className="text-sm text-blue-600">LH 운영수익</p>
                  <p className="text-xs text-blue-500">연 10.8만원</p>
                </div>
                <div className="bg-green-100 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-green-700">20%</p>
                  <p className="text-sm text-green-600">민간 투자회수</p>
                  <p className="text-xs text-green-500">연 7.2만원</p>
                </div>
              </div>
            </div>

            {/* Accumulation Example */}
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6">
              <h6 className="font-bold text-amber-900 mb-3">5년 거주 시 적립액</h6>
              <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                <div className="bg-white rounded-lg px-4 py-2">
                  <p className="text-sm text-stone-600">에너지 절감분</p>
                  <p className="text-xl font-bold text-amber-700">90만원</p>
                </div>
                <span className="text-2xl text-amber-600">+</span>
                <div className="bg-white rounded-lg px-4 py-2">
                  <p className="text-sm text-stone-600">주거신용점수 보너스</p>
                  <p className="text-xl font-bold text-amber-700">최대 90만원</p>
                </div>
                <span className="text-2xl text-amber-600">=</span>
                <div className="bg-amber-500 text-white rounded-lg px-4 py-2">
                  <p className="text-sm">총 적립액</p>
                  <p className="text-2xl font-black">최대 180만원</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3 text-center">
                <p className="text-sm text-stone-600">분양전환 시</p>
                <p className="font-bold text-amber-700">계약금 활용</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <p className="text-sm text-stone-600">청약저축</p>
                <p className="font-bold text-amber-700">대체 인정</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center">
                <p className="text-sm text-stone-600">타 공공주택 이주 시</p>
                <p className="font-bold text-amber-700">이전 가능</p>
              </div>
            </div>
          </div>

          {/* System 3 */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg">
                ⭐
              </div>
              <div>
                <p className="text-sm font-mono text-green-600 tracking-widest">SYSTEM 3</p>
                <h5 className="text-xl font-bold text-green-900">주거신용점수 (Housing Credit Score)</h5>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden">
                <thead className="bg-green-100">
                  <tr>
                    <th className="p-4 text-left text-green-800">활동</th>
                    <th className="p-4 text-center text-green-800">월 점수</th>
                    <th className="p-4 text-left text-green-800">혜택</th>
                  </tr>
                </thead>
                <tbody className="text-green-900">
                  <tr className="border-b border-green-50">
                    <td className="p-4 font-medium">에너지 절약 (목표 대비)</td>
                    <td className="p-4 text-center font-bold">+10</td>
                    <td className="p-4 text-green-700" rowSpan={4}>
                      <ul className="space-y-1">
                        <li><strong>500점+</strong>: 분양전환 우선권 (1순위)</li>
                        <li><strong>300점+</strong>: 임대료 5% 감면</li>
                        <li><strong>100점+</strong>: 주거자산계좌 보너스 적립</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-green-50">
                    <td className="p-4 font-medium">이웃 돌봄 활동</td>
                    <td className="p-4 text-center font-bold">+20</td>
                  </tr>
                  <tr className="border-b border-green-50">
                    <td className="p-4 font-medium">커뮤니티 프로그램 참여</td>
                    <td className="p-4 text-center font-bold">+10</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">시설 관리 협조</td>
                    <td className="p-4 text-center font-bold">+5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Roadmap & Resources */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Roadmap */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <h5 className="font-bold text-stone-900 mb-4">실행 로드맵</h5>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">1</div>
                  <div>
                    <p className="font-bold text-blue-800">Phase 1 (Year 1)</p>
                    <p className="text-sm text-stone-600">시범 단지 3개소 (1,500세대)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">2</div>
                  <div>
                    <p className="font-bold text-green-800">Phase 2 (Year 2-3)</p>
                    <p className="text-sm text-stone-600">5만 세대 확대, 법령 개정</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">3</div>
                  <div>
                    <p className="font-bold text-amber-800">Phase 3 (Year 4-10)</p>
                    <p className="text-sm text-stone-600">100만 세대 전국 확산</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <h5 className="font-bold text-stone-900 mb-4">필요 자원</h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-stone-50 rounded-lg p-3">
                  <span>AI 플랫폼 개발</span>
                  <span className="font-bold text-blue-600">30억원</span>
                </div>
                <div className="flex justify-between items-center bg-stone-50 rounded-lg p-3">
                  <span>IoT 인프라</span>
                  <span className="font-bold text-green-600">0원 (민간 PPA)</span>
                </div>
                <div className="flex justify-between items-center bg-stone-50 rounded-lg p-3">
                  <span>주거자산계좌 시스템</span>
                  <span className="font-bold text-blue-600">10억원</span>
                </div>
                <div className="flex justify-between items-center bg-amber-100 rounded-lg p-3">
                  <span className="font-bold">LH 순부담</span>
                  <span className="font-bold text-amber-700">40억원</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expected Effects */}
        <section className="mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-white text-2xl font-black shrink-0">
              ⑦
            </div>
            <div>
              <h3 className="text-sm font-mono text-stone-500 tracking-widest mb-2">기대효과</h3>
              <h4 className="text-2xl font-bold text-stone-900">정량적·정성적 효과</h4>
            </div>
          </div>

          {/* Citizen Effect */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white mb-8">
            <h5 className="text-lg font-bold mb-6">서민 주거 안정 효과 (정책 취지 직접 부합)</h5>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-sm text-amber-100 mb-2">입주민 자산 적립 (10년)</p>
                <p className="text-4xl font-black">180만원</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-sm text-amber-100 mb-2">분양전환 성공률</p>
                <p className="text-4xl font-black">70%</p>
                <p className="text-sm text-amber-200">(현재 30%)</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-sm text-amber-100 mb-2">청약 가점 효과</p>
                <p className="text-4xl font-black">+10점</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl font-bold">&quot;공공주택이 내 집 마련의 시작점이 됩니다&quot;</p>
            </div>
          </div>

          {/* LH & Social Effects */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* LH Effect */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <h5 className="font-bold text-stone-900 mb-4">LH 재정 개선 효과 (연간, 100만 세대)</h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-stone-700">에너지 절감 (LH 몫 30%)</span>
                  <span className="font-bold text-green-600">360억원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-stone-700">유지보수비 절감</span>
                  <span className="font-bold text-green-600">150억원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-stone-700">민원처리 비용 감소</span>
                  <span className="font-bold text-green-600">40억원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-600 rounded-lg text-white">
                  <span className="font-bold">총 연간 효과</span>
                  <span className="font-bold">550억원</span>
                </div>
              </div>
              <div className="mt-4 text-center bg-stone-100 rounded-lg p-3">
                <p className="text-sm text-stone-600">투자 40억원 → 연간 수익 550억원</p>
                <p className="text-xl font-black text-amber-600">ROI 1,375%</p>
              </div>
            </div>

            {/* Social Effect */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <h5 className="font-bold text-stone-900 mb-4">사회적 효과</h5>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">❤️</div>
                  <div>
                    <p className="text-stone-600">공공임대 내 고독사</p>
                    <p className="font-bold">연 500건 → <span className="text-green-600">250건 (50%↓)</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">😊</div>
                  <div>
                    <p className="text-stone-600">주민 만족도</p>
                    <p className="font-bold">70점 → <span className="text-green-600">85점</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">🏠</div>
                  <div>
                    <p className="text-stone-600">입주 경쟁률</p>
                    <p className="font-bold">5:1 → <span className="text-green-600">15:1</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <p className="text-stone-600">공공주택 선호도</p>
                    <p className="font-bold">하위 30% → <span className="text-green-600">상위 50%</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Alignment */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100">
            <h5 className="text-xl font-bold text-stone-900 mb-6">정책 취지 부합</h5>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['「주거기본법」', '주거권 보장 + 자산형성권 신설'],
                ['「공공주택 특별법」', '입주자 관리 → 입주자 자산형성 지원'],
                ['국정과제 \"주거사다리 복원\"', '공공주택을 사다리의 첫 단추로'],
                ['LH 개혁 방향', '공급자 → 서민 자산형성 파트너'],
              ].map(([title, desc], idx) => (
                <div key={idx} className="flex items-start gap-3 bg-stone-50 rounded-xl p-4">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                  <div>
                    <p className="font-bold text-stone-900">{title}</p>
                    <p className="text-sm text-stone-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10">
              <h3 className="text-sm font-mono text-amber-200 tracking-widest mb-4">CONCLUSION</h3>
              <h4 className="text-3xl font-black mb-6">결론</h4>

              <p className="text-lg text-amber-100 mb-8 leading-relaxed">
                본 제안의 핵심은 <strong className="text-white">&quot;기술&quot;이 아니라 &quot;서민의 자산&quot;</strong>입니다.
                AI·IoT는 수단이고, <strong className="text-white">목적은 공공주택 입주민이 &quot;살면서 내 집 마련 재원을 모을 수 있는 구조&quot;</strong>를 만드는 것입니다.
              </p>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 text-center">
                <p className="text-lg mb-2">🇸🇬 싱가포르는 공공주택으로 국민 80%가 자가를 보유합니다.</p>
                <p className="text-2xl font-black">대한민국도 할 수 있습니다.</p>
              </div>

              <div className="text-center">
                <p className="text-xl font-black mb-2">공공주택을 &apos;임시 거처&apos;에서 &apos;자산 형성의 출발점&apos;으로 바꾸는 것,</p>
                <p className="text-amber-200">이것이 국민이 진정으로 살고 싶은 새로운 LH의 모습입니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t-2 border-stone-200 pt-8 text-center">
          <p className="text-sm text-stone-500">
            ※ 본 제안서는 국토교통부 주거실태조사(2024), LH 경영공시자료, 싱가포르 HDB 연차보고서,
            암스테르담 City-Zen 프로젝트 성과보고서 등 공개 자료에 기반하여 작성되었습니다.
          </p>
        </div>
      </div>
    </main>
  );
}
