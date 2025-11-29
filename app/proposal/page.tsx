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
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
              📋
            </div>
            <div>
              <p className="text-xs font-mono text-blue-400 tracking-widest">PROPOSAL</p>
              <h1 className="text-2xl font-black">제안서 전문</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            <div className="relative z-10">
              <p className="text-sm font-mono text-blue-200 tracking-widest mb-4">① 제목</p>
              <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                AI가 연결하는 따뜻한 이웃,<br/>
                스마트 공감 주택
              </h2>
              <p className="text-xl text-blue-100 font-medium">
                Smart Empathy Housing Platform (SEH)
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
                  <span className="text-blue-600 font-medium">소속:</span> Creative Nexus
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-blue-600 font-medium">연락처:</span> 010-7939-3123
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
              <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-6 py-3 rounded-full">
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
              본 제안은 공공주택을 <strong className="text-blue-600">&apos;저렴한 집&apos;에서 &apos;AI로 연결된 따뜻한 공동체&apos;</strong>로 재정의하여,
              기술 혁신과 세대통합을 통해 &quot;살고 싶은 공공주택&quot;을 실현하는 혁신 모델입니다.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
              <p className="font-bold text-stone-900 mb-3">핵심 컨셉:</p>
              <p className="text-stone-700">
                AI·IoT 기반 <strong>스마트 통합 플랫폼</strong>과 <strong>세대통합 커뮤니티 시스템</strong>을 결합하여,
                청년-신혼-고령층이 서로 돌보고 연결되는 새로운 공공주택 생태계를 조성합니다.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 mb-8">
            <div className="bg-stone-900 text-white p-4">
              <h5 className="font-bold">차별화 포인트</h5>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="p-4 text-left font-bold text-stone-700">구분</th>
                    <th className="p-4 text-center font-bold text-stone-500">기존 공공주택</th>
                    <th className="p-4 text-center font-bold text-blue-700 bg-blue-50">스마트 공감 주택</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['핵심 가치', '저렴한 가격', '따뜻한 공동체'],
                    ['기술 수준', '기본 시설', 'AI 통합 플랫폼'],
                    ['커뮤니티', '단절/익명', '세대통합/매칭'],
                    ['관리 방식', '수동/민원', '자동/예측'],
                    ['에너지', '개별 부담', '공동 생산/절감'],
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-stone-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-stone-700">{row[0]}</td>
                      <td className="p-4 text-center text-stone-500">{row[1]}</td>
                      <td className="p-4 text-center text-blue-700 font-medium bg-blue-50/50">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Expected Effects */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h5 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <span className="text-lg">📊</span> 단기 효과 (3개 시범단지)
              </h5>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  에너지 30% 절감
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  고독사 50% 감소
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  1,500세대 시범 적용
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h5 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="text-lg">🚀</span> 장기 효과 (100만 세대)
              </h5>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  연 3,600억원 절감
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  공공주택 브랜드 가치 혁신
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  입주 경쟁률 10:1 상승
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
              <h5 className="text-xl font-bold text-red-900">문제 1: 낙인 효과와 기술 격차</h5>
            </div>
            <p className="text-red-800 mb-4">
              현재 공공주택은 &quot;저소득층 주거 = 저품질&quot;이라는 사회적 낙인에 시달리고 있습니다.
              민간 아파트는 AI 홈오토메이션, 스마트 보안, 에너지 관리 시스템을 기본 제공하는 반면,
              공공주택의 스마트홈 적용률은 <strong>전체 174만호 중 2,759호(0.16%)</strong>에 불과합니다.
            </p>
            <div className="bg-white rounded-xl p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-red-100">
                    <th className="py-2 text-left text-red-700">구분</th>
                    <th className="py-2 text-center text-red-700">민간 아파트</th>
                    <th className="py-2 text-center text-red-700">공공주택</th>
                  </tr>
                </thead>
                <tbody className="text-red-800">
                  <tr className="border-b border-red-50">
                    <td className="py-2">스마트홈 적용</td>
                    <td className="py-2 text-center">70% 이상</td>
                    <td className="py-2 text-center font-bold">0.16%</td>
                  </tr>
                  <tr className="border-b border-red-50">
                    <td className="py-2">AI 가전 연동</td>
                    <td className="py-2 text-center">일반화</td>
                    <td className="py-2 text-center font-bold">극히 제한</td>
                  </tr>
                  <tr>
                    <td className="py-2">에너지 관리</td>
                    <td className="py-2 text-center">실시간 모니터링</td>
                    <td className="py-2 text-center font-bold">수동 검침</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">😢</span>
              <h5 className="text-xl font-bold text-orange-900">문제 2: 커뮤니티 단절과 사회적 고립</h5>
            </div>
            <p className="text-orange-800 mb-4">
              공공주택 입주민의 약 40%가 1인 가구이며, 이웃 간 교류 프로그램이 부재하여 사회적 고립이 심화되고 있습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-orange-700">500+</p>
                <p className="text-sm text-orange-600">연간 고독사 (건)</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-orange-700">4.5일</p>
                <p className="text-sm text-orange-600">발견까지 평균 기간</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-orange-700">40%</p>
                <p className="text-sm text-orange-600">1인 가구 비중</p>
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-xl">💸</span>
              <h5 className="text-xl font-bold text-yellow-900">문제 3: LH의 재정적 한계</h5>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-yellow-700">160.1조</p>
                <p className="text-sm text-yellow-600">2024년 부채</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-yellow-700">222%</p>
                <p className="text-sm text-yellow-600">부채비율</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-yellow-700">261.9조</p>
                <p className="text-sm text-yellow-600">2029년 전망</p>
              </div>
            </div>
            <p className="text-yellow-800 mt-4 text-sm">
              * 단순 물량 공급 중심의 기존 모델로는 지속가능하지 않으며, 기술 혁신을 통한 운영 효율화가 필수적입니다.
            </p>
          </div>

          {/* Global Cases */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100">
            <h5 className="text-xl font-bold text-stone-900 mb-6">해외·국내 성공 사례의 교훈</h5>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-5">
                <p className="text-2xl mb-2">🇳🇱</p>
                <h6 className="font-bold text-blue-900 mb-2">네덜란드 City-Zen</h6>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• 1만 가구 스마트그리드</li>
                  <li>• CO2 59,000톤 감축</li>
                  <li>• 시민 참여형 리빙랩</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-5">
                <p className="text-2xl mb-2">🇸🇬</p>
                <h6 className="font-bold text-green-900 mb-2">싱가포르 HDB</h6>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• IoT 센서 노인 돌봄</li>
                  <li>• 에너지 비용 30% 절감</li>
                  <li>• 스마트 타운 모델</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-5">
                <p className="text-2xl mb-2">🇰🇷</p>
                <h6 className="font-bold text-purple-900 mb-2">서울시 홈쉐어</h6>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• 청년-노인 동거</li>
                  <li>• 주거비 절감</li>
                  <li>• 세대 간 돌봄 실증</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-stone-100 rounded-xl p-4 text-center">
              <p className="font-bold text-stone-700">공통점: 기술 혁신 + 커뮤니티 연결 + 주민 참여</p>
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
            <h5 className="text-lg font-bold mb-4">핵심 컨셉: &quot;스마트 공감 주택 플랫폼&quot;</h5>
            <div className="flex items-center justify-center gap-4 text-center">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-sm text-stone-400 mb-1">기존</p>
                <p className="font-bold">공급자 중심의 &quot;저렴한 집&quot;</p>
              </div>
              <div className="text-3xl">→</div>
              <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-xl p-4 border border-green-400/30">
                <p className="text-sm text-green-400 mb-1">제안</p>
                <p className="font-bold">입주민 중심의 &quot;AI로 연결된 공동체&quot;</p>
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
                <h5 className="text-xl font-bold text-blue-900">AI 통합 관리 플랫폼</h5>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-4 text-left text-blue-800">기능</th>
                    <th className="p-4 text-left text-blue-800">내용</th>
                    <th className="p-4 text-left text-blue-800">효과</th>
                  </tr>
                </thead>
                <tbody className="text-blue-900">
                  <tr className="border-b border-blue-50">
                    <td className="p-4 font-medium">스마트 에너지</td>
                    <td className="p-4">태양광+ESS+AI 예측 관리</td>
                    <td className="p-4 font-bold text-blue-600">전기료 30% 절감</td>
                  </tr>
                  <tr className="border-b border-blue-50">
                    <td className="p-4 font-medium">예측 유지보수</td>
                    <td className="p-4">IoT 센서로 고장 사전 감지</td>
                    <td className="p-4 font-bold text-blue-600">수리비 30% 절감</td>
                  </tr>
                  <tr className="border-b border-blue-50">
                    <td className="p-4 font-medium">고독사 예방</td>
                    <td className="p-4">활동 패턴 분석→이상 시 자동 대응</td>
                    <td className="p-4 font-bold text-blue-600">고독사 50% 감소</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">층간소음 관리</td>
                    <td className="p-4">AI 소음 감지→실시간 알림</td>
                    <td className="p-4 font-bold text-blue-600">민원 40% 감소</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* System 2 */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg">
                🤝
              </div>
              <div>
                <p className="text-sm font-mono text-green-600 tracking-widest">SYSTEM 2</p>
                <h5 className="text-xl font-bold text-green-900">세대통합 커뮤니티</h5>
              </div>
            </div>

            {/* Flow Diagram */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-4 text-center mb-6">
                <div className="bg-blue-100 rounded-xl p-4">
                  <p className="text-2xl mb-2">👨‍💻</p>
                  <p className="font-bold text-blue-900">청년 (20~30대)</p>
                  <p className="text-sm text-blue-700">IT 도움 제공</p>
                </div>
                <div className="bg-pink-100 rounded-xl p-4">
                  <p className="text-2xl mb-2">👨‍👩‍👧</p>
                  <p className="font-bold text-pink-900">신혼 (30~40대)</p>
                  <p className="text-sm text-pink-700">육아 도움 요청</p>
                </div>
                <div className="bg-amber-100 rounded-xl p-4">
                  <p className="text-2xl mb-2">👴</p>
                  <p className="font-bold text-amber-900">시니어 (60대+)</p>
                  <p className="text-sm text-amber-700">경험/시간 제공</p>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-green-100 rounded-full px-6 py-3">
                  <span className="text-xl">🔄</span>
                  <span className="font-bold text-green-800">AI 매칭 시스템 + 돌봄 시간은행</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 text-green-800">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-sm font-bold text-green-800 shrink-0 mt-0.5">1</span>
                <div>
                  <strong>AI 이웃 매칭:</strong> 라이프스타일·관심사 분석 → 호환 이웃 추천
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-sm font-bold text-green-800 shrink-0 mt-0.5">2</span>
                <div>
                  <strong>돌봄 시간은행:</strong> 청년(IT 도움) ↔ 시니어(경험 공유) ↔ 신혼(육아 도움)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-sm font-bold text-green-800 shrink-0 mt-0.5">3</span>
                <div>
                  <strong>세대공유 공간:</strong> 공유 주방, 공유 사무실, 키즈카페
                </div>
              </li>
            </ul>
          </div>

          {/* System 3 */}
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg">
                🗳️
              </div>
              <div>
                <p className="text-sm font-mono text-purple-600 tracking-widest">SYSTEM 3</p>
                <h5 className="text-xl font-bold text-purple-900">주민 참여 거버넌스</h5>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5">
                <p className="text-2xl mb-2">📱</p>
                <h6 className="font-bold text-purple-900 mb-2">디지털 투표</h6>
                <p className="text-sm text-purple-700">앱으로 단지 운영 의사결정</p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <p className="text-2xl mb-2">💰</p>
                <h6 className="font-bold text-purple-900 mb-2">커뮤니티 펀드</h6>
                <p className="text-sm text-purple-700">주민 참여 예산 편성<br/>(에너지 절감분 일부 활용)</p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <p className="text-2xl mb-2">👷</p>
                <h6 className="font-bold text-purple-900 mb-2">일자리 연계</h6>
                <p className="text-sm text-purple-700">단지 내 돌봄·관리·교육<br/>입주민 우선 채용</p>
              </div>
            </div>
          </div>

          {/* Investment Required */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100">
            <h5 className="text-xl font-bold text-stone-900 mb-6">필요 자원</h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h6 className="font-bold text-stone-700 mb-4">기술 개발</h6>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-stone-50 rounded-lg p-3">
                    <span>AI 플랫폼 개발</span>
                    <span className="font-bold text-blue-600">50억원</span>
                  </div>
                  <div className="flex justify-between items-center bg-stone-50 rounded-lg p-3">
                    <span>IoT 인프라 (세대당)</span>
                    <span className="font-bold text-blue-600">200만원</span>
                  </div>
                  <div className="flex justify-between items-center bg-stone-50 rounded-lg p-3">
                    <span>앱/서비스 개발</span>
                    <span className="font-bold text-blue-600">20억원</span>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="font-bold text-stone-700 mb-4">인력 (단지당)</h6>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-stone-50 rounded-lg p-3">
                    <span>커뮤니티 매니저</span>
                    <span className="font-bold text-green-600">3명</span>
                  </div>
                  <div className="flex justify-between items-center bg-stone-50 rounded-lg p-3">
                    <span>돌봄 코디네이터</span>
                    <span className="font-bold text-green-600">2명</span>
                  </div>
                  <div className="flex justify-between items-center bg-stone-50 rounded-lg p-3">
                    <span>기술 지원</span>
                    <span className="font-bold text-green-600">1명</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-6 text-center">
              <p className="text-sm text-stone-600 mb-2">파일럿 총 투자 (3개 단지, 1,500세대 기준)</p>
              <p className="text-3xl font-black text-stone-900">약 420억원</p>
              <p className="text-sm text-stone-500 mt-2">* LH 기존 예산 재배치 + 정부 스마트시티 예산 연계 가능</p>
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

          {/* Quantitative Effects */}
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white mb-8">
            <h5 className="text-lg font-bold mb-6 text-green-400">정량적 효과</h5>

            <div className="mb-8">
              <p className="text-sm text-stone-400 mb-4">단기 (Year 1-2): 시범 단지 성과</p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-blue-400">30%</p>
                  <p className="text-sm text-stone-300">에너지 비용 절감</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-green-400">50%</p>
                  <p className="text-sm text-stone-300">고독사 감소</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-purple-400">+15점</p>
                  <p className="text-sm text-stone-300">주민 만족도 상승</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-orange-400">40%</p>
                  <p className="text-sm text-stone-300">커뮤니티 참여율</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-stone-400 mb-4">장기 (Year 5-10): 전국 100만 세대</p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-blue-400">3,600억</p>
                  <p className="text-sm text-stone-300">연간 에너지 절감</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-green-400">2,500건</p>
                  <p className="text-sm text-stone-300">고독사 예방</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-purple-400">10:1</p>
                  <p className="text-sm text-stone-300">입주 경쟁률</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-orange-400">1위</p>
                  <p className="text-sm text-stone-300">공공주택 브랜드</p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualitative Effects */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <p className="text-2xl mb-3">🏠</p>
              <h6 className="font-bold text-blue-900 mb-3">입주민 차원</h6>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• 고품질 스마트홈 서비스</li>
                <li>• 세대 간 교류로 외로움 해소</li>
                <li>• 돌봄 교환으로 부담 경감</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <p className="text-2xl mb-3">🏢</p>
              <h6 className="font-bold text-green-900 mb-3">LH 차원</h6>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• 기술 혁신 이미지로 신뢰 회복</li>
                <li>• 운영 효율화로 재정 부담 완화</li>
                <li>• 기술 수출 신규 수익원</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <p className="text-2xl mb-3">🇰🇷</p>
              <h6 className="font-bold text-purple-900 mb-3">국가 차원</h6>
              <ul className="text-sm text-purple-800 space-y-2">
                <li>• 고독사·고령화 선제 대응</li>
                <li>• 공공주택 정책 패러다임 전환</li>
                <li>• 스마트시티 기술 경쟁력 강화</li>
              </ul>
            </div>
          </div>

          {/* Policy Alignment */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100">
            <h5 className="text-xl font-bold text-stone-900 mb-6">정책 취지 부합</h5>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['「주거기본법」', '국민의 주거권 보장, 주거 품질 향상'],
                ['「스마트도시법」', '스마트 기술 활용 생활 편의 증진'],
                ['「고독사 예방법」', '1인 가구 고독사 예방 및 대응'],
                ['LH 개혁 방향', '기술 혁신, 투명 경영, 국민 신뢰 회복'],
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
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10">
              <h3 className="text-sm font-mono text-blue-200 tracking-widest mb-4">CONCLUSION</h3>
              <h4 className="text-3xl font-black mb-6">결론</h4>

              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                본 제안은 <strong className="text-white">공공주택을 &apos;가격 경쟁&apos;에서 &apos;가치 경쟁&apos;으로 전환하는 패러다임 혁신</strong>을 제시합니다.
                AI 기술과 세대통합 커뮤니티를 결합하여 세 가지를 동시에 달성합니다:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-3xl mb-3">🏠</p>
                  <h5 className="font-bold text-lg mb-2">기술 혁신</h5>
                  <p className="text-blue-100 text-sm">민간보다 앞선 스마트홈</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-3xl mb-3">🤝</p>
                  <h5 className="font-bold text-lg mb-2">사회 혁신</h5>
                  <p className="text-blue-100 text-sm">세대 간 연결과 돌봄</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-3xl mb-3">💰</p>
                  <h5 className="font-bold text-lg mb-2">재정 혁신</h5>
                  <p className="text-blue-100 text-sm">효율화를 통한 비용 절감</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-black mb-2">&quot;AI가 연결하는 따뜻한 이웃&quot;</p>
                <p className="text-blue-200">이것이 국민이 살고 싶은 새로운 공공주택의 모습입니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t-2 border-stone-200 pt-8 text-center">
          <p className="text-sm text-stone-500">
            ※ 본 제안서는 국토교통부 주거실태조사(2024), LH 스마트홈 현황자료, 서울시 고독사 예방사업 성과,
            암스테르담 City-Zen 프로젝트 등 공개된 정부 통계 및 연구자료에 기반하여 작성되었습니다.
          </p>
        </div>
      </div>
    </main>
  );
}
