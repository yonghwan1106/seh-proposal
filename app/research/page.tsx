import Link from 'next/link';

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-600 text-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-200 hover:text-white transition-colors mb-4">
            <span>←</span>
            <span className="text-sm">메인으로</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg">
              🔬
            </div>
            <div>
              <p className="text-xs font-mono text-purple-200 tracking-widest">RESEARCH</p>
              <h1 className="text-2xl font-black">리서치 인사이트</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* LH Current Status */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-xl">📊</div>
            <h2 className="text-2xl font-black text-stone-900">LH 공공주택 현황 분석</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4">스마트홈 현황 (2024)</h3>
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
                  <strong>Home Z 사업:</strong> LH 스마트홈 브랜드로 AI 스피커, IoT 가전 연동 등 제공하나
                  적용 범위가 극히 제한적
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4">재정 현황</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-xl">
                  <span>2024년 부채</span>
                  <span className="text-2xl font-black text-yellow-700">160.1조원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-xl">
                  <span>부채비율</span>
                  <span className="text-2xl font-black text-orange-700">222%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-xl">
                  <span>2029년 전망</span>
                  <span className="text-2xl font-black text-red-700">261.9조원</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-stone-600">
                * 비금융 공기업 부채 1위, 재무위험기관 지정
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-6 text-white">
            <h3 className="font-bold mb-4 text-yellow-400">시사점</h3>
            <p className="text-stone-300 leading-relaxed">
              단순 물량 공급 중심의 기존 모델로는 지속가능하지 않습니다.
              <strong className="text-white"> 기술 혁신을 통한 운영 효율화</strong>와
              <strong className="text-white"> 브랜드 가치 제고</strong>가 필수적입니다.
            </p>
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
            <h3 className="font-bold text-stone-900 mb-4">고독사 예방 기술 현황</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-stone-700 mb-3">IoT 기반 모니터링</h4>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></span>
                    전기·가스·수도 사용량 실시간 모니터링
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></span>
                    문 개폐 센서를 통한 외출/귀가 감지
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></span>
                    서울시: 스마트 플러그로 32시간 미사용 시 알림
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></span>
                    대전시: AI 돌봄 로봇 &apos;다솜이&apos; 배포
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-stone-700 mb-3">사례 효과</h4>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                    서울시 스마트 플러그: 발견 시간 72시간→24시간 단축
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                    AI 음성 대화: 우울감 20% 감소 효과
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                    정기 방문 + IoT 병행: 고독사 50% 감소
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Cases */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">🌍</div>
            <h2 className="text-2xl font-black text-stone-900">해외 성공 사례</h2>
          </div>

          <div className="space-y-6">
            {/* Netherlands */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🇳🇱</span>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">네덜란드 암스테르담 City-Zen</h3>
                  <p className="text-sm text-blue-600">EU Horizon 2020 프로젝트</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-blue-800 mb-3">핵심 내용</h4>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• 1만 가구 스마트그리드 시스템 구축</li>
                    <li>• 시민 참여형 리빙랩으로 기술 검증</li>
                    <li>• 태양광 + ESS + 스마트 미터 통합</li>
                    <li>• P2P 에너지 거래 플랫폼</li>
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
            </div>

            {/* Singapore */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🇸🇬</span>
                <div>
                  <h3 className="text-xl font-bold text-green-900">싱가포르 HDB 스마트타운</h3>
                  <p className="text-sm text-green-600">Tengah Eco Town (2024 입주)</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-800 mb-3">핵심 내용</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• 4.2만 세대 친환경 스마트타운</li>
                    <li>• 지역냉방 시스템 (District Cooling)</li>
                    <li>• IoT 센서 네트워크로 노인 돌봄</li>
                    <li>• 자율주행 셔틀 + 무인 배송</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-800 mb-3">성과</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-black text-green-600">30%</p>
                      <p className="text-xs text-green-500">에너지 비용 절감</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-black text-green-600">50%</p>
                      <p className="text-xs text-green-500">녹지 비율 확보</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Finland */}
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">🇫🇮</span>
                <div>
                  <h3 className="text-xl font-bold text-purple-900">핀란드 헬싱키 Kalasatama</h3>
                  <p className="text-sm text-purple-600">스마트 주거단지 리빙랩</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-purple-800 mb-3">핵심 내용</h4>
                  <ul className="space-y-2 text-sm text-purple-700">
                    <li>• 2.5만 주민 대상 스마트시티 실험</li>
                    <li>• 주민 주도 서비스 개발 (Co-creation)</li>
                    <li>• 디지털 트윈 기반 도시 관리</li>
                    <li>• 하루 1시간 시간 절약 목표</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-800 mb-3">성과</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-black text-purple-600">90%</p>
                      <p className="text-xs text-purple-500">주민 만족도</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center">
                      <p className="text-2xl font-black text-purple-600">30분</p>
                      <p className="text-xs text-purple-500">일평균 시간 절약</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domestic Cases */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl">🇰🇷</div>
            <h2 className="text-2xl font-black text-stone-900">국내 세대통합 사례</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4">서울시 홈쉐어 사업</h3>
              <div className="space-y-3 text-sm text-stone-600 mb-4">
                <p>청년-어르신 동거 지원 프로그램</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></span>
                    청년: 저렴한 주거비 (월 20만원 수준)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></span>
                    어르신: 외로움 해소 + 일상 도움
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5"></span>
                    누적 매칭: 1,500쌍 이상
                  </li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-xl p-4">
                <p className="text-sm text-indigo-700">
                  <strong>효과:</strong> 청년 주거비 50% 절감, 어르신 외로움 지수 30% 감소
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100">
              <h3 className="font-bold text-stone-900 mb-4">시간은행 사례</h3>
              <div className="space-y-3 text-sm text-stone-600 mb-4">
                <p>도움 교환 시간을 크레딧으로 적립</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                    광진구: 회원 8,000명, 연 5만 시간 교환
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                    서비스: 가사, 돌봄, 교육, IT 도움 등
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span>
                    블록체인 기반 신뢰 시스템 도입
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-sm text-green-700">
                  <strong>효과:</strong> 사회적 자본 형성, 돌봄 비용 30% 절감
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy & Technology */}
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
            <h3 className="font-bold mb-4">적용 시 예상 절감액</h3>
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
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">기술 혁신 필요성</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">✓</span>
                  공공주택 스마트홈 적용률 0.16%는 민간 대비 437배 격차
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">✓</span>
                  해외 사례 입증: 스마트홈 도입 시 30~50% 비용 절감
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">✓</span>
                  LH 부채 160조 상황에서 효율화는 선택이 아닌 필수
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">커뮤니티 연결 필요성</h3>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  공공주택 1인 가구 40%, 고독사 연 500건 이상
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  세대통합 주거 실험: 외로움 30% 감소, 돌봄 비용 절감
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300">✓</span>
                  기술 + 커뮤니티 병행 시 시너지 효과 극대화
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-stone-900 rounded-2xl p-6 text-center text-white">
            <p className="text-lg font-medium text-stone-300 mb-2">결론</p>
            <p className="text-xl font-bold">
              <span className="text-blue-400">AI 기술</span>과
              <span className="text-green-400"> 세대통합 커뮤니티</span>의 결합이
              <span className="text-yellow-400"> 공공주택 혁신</span>의 핵심입니다.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
