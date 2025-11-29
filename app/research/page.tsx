import Link from 'next/link';

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-green-200 hover:text-white transition-colors mb-4">
            <span>←</span>
            <span className="text-sm">메인으로</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg">
              🔬
            </div>
            <div>
              <p className="text-xs font-mono text-green-200 tracking-widest">RESEARCH</p>
              <h1 className="text-2xl font-black">리서치 인사이트</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Core Insight Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🇸🇬</span>
              <div>
                <h2 className="text-2xl font-black">싱가포르 HDB의 교훈</h2>
                <p className="text-amber-100">공공주택을 통한 자산 형성의 성공 모델</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 text-center">
                <p className="text-4xl font-black mb-2">80%</p>
                <p className="text-amber-100">싱가포르 국민 자가 보유율</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 text-center">
                <p className="text-4xl font-black mb-2">HDB</p>
                <p className="text-amber-100">공공주택이 자산 형성 통로</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 text-center">
                <p className="text-4xl font-black mb-2">CPF</p>
                <p className="text-amber-100">연금 활용 분양 시스템</p>
              </div>
            </div>
          </div>
        </section>

        {/* Singapore HDB Detail */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">🏠</div>
            <h2 className="text-2xl font-black text-stone-900">싱가포르 HDB 시스템 분석</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 mb-6">
            <h3 className="font-bold text-stone-900 mb-4">핵심 성공 요인</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-green-700 mb-3">자산 형성 구조</h4>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                    <strong>CPF(Central Provident Fund)</strong> 연금을 주택 구입에 활용
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                    99년 장기 임대 후 <strong>소유권 전환</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                    공공주택 거주 = <strong>자산 축적</strong>의 시작
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                    5년 후 시장 매각 가능 → <strong>시세 차익 실현</strong>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-green-700 mb-3">정책적 시사점</h4>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5"></span>
                    공공주택 = &quot;비용&quot;이 아닌 <strong>&quot;투자&quot;</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5"></span>
                    국민의 자산 형성을 <strong>정책 목표</strong>로 설정
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5"></span>
                    주거 = 복지 + <strong>경제적 기회</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5"></span>
                    정부-국민 <strong>Win-Win</strong> 구조
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <h3 className="font-bold text-green-900 mb-4">한국 적용 방안</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">💰</p>
                <p className="font-bold text-green-900">주거자산계좌</p>
                <p className="text-sm text-stone-600">CPF와 유사한 자산 적립 시스템</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">⭐</p>
                <p className="font-bold text-green-900">주거신용점수</p>
                <p className="text-sm text-stone-600">기여도 기반 분양전환 우선권</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">🏠</p>
                <p className="font-bold text-green-900">분양전환 연계</p>
                <p className="text-sm text-stone-600">적립금 활용 내 집 마련</p>
              </div>
            </div>
          </div>
        </section>

        {/* Netherlands City-Zen */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">🇳🇱</div>
            <h2 className="text-2xl font-black text-stone-900">네덜란드 City-Zen 프로젝트</h2>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">⚡</span>
              <div>
                <h3 className="text-xl font-bold text-blue-900">에너지 절감분 입주민 환원 모델</h3>
                <p className="text-sm text-blue-600">EU Horizon 2020 프로젝트 (암스테르담)</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-800 mb-3">핵심 내용</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• 1만 가구 스마트그리드 시스템 구축</li>
                  <li>• 시민 참여형 리빙랩으로 기술 검증</li>
                  <li>• 태양광 + ESS + 스마트 미터 통합</li>
                  <li>• <strong>에너지 절감분을 입주민에게 환원</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-3">성과</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3 text-center">
                    <p className="text-2xl font-black text-blue-600">59,000톤</p>
                    <p className="text-xs text-blue-500">CO2 연간 감축</p>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center">
                    <p className="text-2xl font-black text-blue-600">40%</p>
                    <p className="text-xs text-blue-500">에너지 비용 절감</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-blue-100 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>핵심 인사이트:</strong> 에너지 절감을 통한 비용 감소분을 입주민에게 직접 환원함으로써,
                에너지 절약에 대한 <strong>경제적 인센티브</strong>를 제공하고 주민 참여율을 높임
              </p>
            </div>
          </div>
        </section>

        {/* LH Current Status */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-xl">📊</div>
            <h2 className="text-2xl font-black text-stone-900">LH 공공주택 현황 분석</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4">자산 형성 기회 현황</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="text-sm text-red-700 mb-2">10년 거주 후 자산</p>
                  <p className="text-3xl font-black text-red-600">0원</p>
                  <p className="text-xs text-red-500 mt-1">민간 전세와 달리 자산 형성 불가</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="text-sm text-red-700 mb-2">분양전환 결정 방식</p>
                  <p className="text-3xl font-black text-red-600">추첨</p>
                  <p className="text-xs text-red-500 mt-1">10년 거주해도 &quot;운&quot;에 의존</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4">기술 적용 현황</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>전체 공공임대주택</span>
                    <span className="font-bold">174만호</span>
                  </div>
                  <div className="h-4 bg-stone-100 rounded-full"></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>스마트홈 적용</span>
                    <span className="font-bold text-red-600">2,759호 (0.16%)</span>
                  </div>
                  <div className="h-4 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full w-[0.16%] bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-red-50 rounded-xl">
                <p className="text-sm text-red-700">
                  <strong>격차:</strong> 민간 아파트 스마트홈 적용률 70% 대비 <strong>437배 차이</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
            <h3 className="font-bold text-stone-900 mb-4">재정 현황</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-yellow-50 rounded-xl p-4 text-center">
                <p className="text-sm text-yellow-700 mb-1">2024년 부채</p>
                <p className="text-3xl font-black text-yellow-600">160.1조</p>
                <p className="text-xs text-yellow-500">비금융 공기업 1위</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 text-center">
                <p className="text-sm text-orange-700 mb-1">부채비율</p>
                <p className="text-3xl font-black text-orange-600">222%</p>
                <p className="text-xs text-orange-500">재무위험기관 지정</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <p className="text-sm text-red-700 mb-1">2029년 전망</p>
                <p className="text-3xl font-black text-red-600">261.9조</p>
                <p className="text-xs text-red-500">+101.8조 증가</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Isolation Issue */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">😢</div>
            <h2 className="text-2xl font-black text-stone-900">사회적 고립 문제</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 text-center">
              <div className="text-5xl font-black text-orange-600 mb-2">500+</div>
              <p className="text-orange-800 font-medium">연간 공공임대 내 고독사</p>
              <p className="text-sm text-orange-600 mt-2">전체 고독사 3,600건의 약 14%</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 text-center">
              <div className="text-5xl font-black text-orange-600 mb-2">4.5일</div>
              <p className="text-orange-800 font-medium">발견까지 평균 기간</p>
              <p className="text-sm text-orange-600 mt-2">65세 이상 사망자 기준</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 text-center">
              <div className="text-5xl font-black text-orange-600 mb-2">40%</div>
              <p className="text-orange-800 font-medium">공공주택 1인 가구 비중</p>
              <p className="text-sm text-orange-600 mt-2">지속적으로 증가 추세</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
            <h3 className="font-bold text-stone-900 mb-4">커뮤니티 연결의 필요성</h3>
            <p className="text-stone-600 mb-4">
              세대통합 커뮤니티를 통해 이웃 간 돌봄 네트워크를 구축하고,
              <strong> 주거신용점수</strong>를 통해 커뮤니티 참여에 <strong>경제적 인센티브</strong>를 부여함으로써
              고독사 문제와 사회적 고립을 해결할 수 있습니다.
            </p>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-green-700">
                <strong>예상 효과:</strong> 정기 방문 + IoT 모니터링 + 커뮤니티 활동 병행 시 <strong>고독사 50% 감소</strong> 가능
              </p>
            </div>
          </div>
        </section>

        {/* Energy Technology */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-xl">⚡</div>
            <h2 className="text-2xl font-black text-stone-900">에너지 절감 기술</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 mb-6">
            <h3 className="font-bold text-stone-900 mb-4">태양광 + ESS + 스마트그리드 효과</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="p-3 text-left">기술</th>
                    <th className="p-3 text-center">절감률</th>
                    <th className="p-3 text-left">비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-100">
                    <td className="p-3">태양광 단독</td>
                    <td className="p-3 text-center font-bold text-yellow-600">15~20%</td>
                    <td className="p-3 text-stone-500">주간 발전만 활용</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3">태양광 + ESS</td>
                    <td className="p-3 text-center font-bold text-orange-600">35~40%</td>
                    <td className="p-3 text-stone-500">심야 전력 활용</td>
                  </tr>
                  <tr className="border-b border-stone-100">
                    <td className="p-3">태양광 + ESS + AI 예측</td>
                    <td className="p-3 text-center font-bold text-green-600">45~53%</td>
                    <td className="p-3 text-stone-500">날씨/사용 패턴 예측</td>
                  </tr>
                  <tr>
                    <td className="p-3">+ P2P 거래 + 요금 최적화</td>
                    <td className="p-3 text-center font-bold text-blue-600">50~60%</td>
                    <td className="p-3 text-stone-500">잉여 전력 판매</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-4">적용 시 예상 절감액 (보수적 추정 30%)</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 rounded-xl p-4 text-center">
                <p className="text-sm text-green-100">가구당 월 절감</p>
                <p className="text-3xl font-black">3만원</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4 text-center">
                <p className="text-sm text-green-100">1,500세대 연간</p>
                <p className="text-3xl font-black">5.4억원</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4 text-center">
                <p className="text-sm text-green-100">100만 세대 연간</p>
                <p className="text-3xl font-black">3,600억원</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center text-xl text-white">💡</div>
            <h2 className="text-2xl font-black text-stone-900">핵심 인사이트</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">자산 형성이 핵심</h3>
              <ul className="space-y-3 text-amber-100">
                <li className="flex items-start gap-2">
                  <span className="text-amber-300">✓</span>
                  싱가포르 HDB: 공공주택을 통해 <strong>국민 80% 자가 보유</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300">✓</span>
                  한국 공공임대: 10년 거주해도 <strong>자산 0원</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300">✓</span>
                  패러다임 전환: &quot;저렴한 임대&quot; → <strong>&quot;자산 형성 지원&quot;</strong>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">민간 협력이 열쇠</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">✓</span>
                  LH 부채 160조 상황에서 <strong>직접 투자 한계</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">✓</span>
                  민간 PPA(Power Purchase Agreement)로 <strong>투자 부담 Zero</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">✓</span>
                  절감분 공유로 <strong>Win-Win 구조</strong> 창출
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-stone-900 rounded-2xl p-6 text-center text-white">
            <p className="text-lg font-medium text-stone-300 mb-2">결론</p>
            <p className="text-xl font-bold">
              <span className="text-amber-400">&quot;살면서 내 집 되는 공공주택&quot;</span>은
              <span className="text-green-400"> 싱가포르 HDB</span>와
              <span className="text-blue-400"> 네덜란드 City-Zen</span>의
              교훈을 결합한 <span className="text-white">한국형 주거 혁신 모델</span>입니다.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
