const showcases = [
  { title: "동네 맛집 추천 웹앱", description: "AI에게 말로 설명해서 만든 첫 번째 결과물" },
  { title: "우리 동아리 소개 페이지", description: "디자인 감각 없이도 완성한 웹페이지" },
  { title: "김해 관광 가이드", description: "지역 정보를 담은 인터랙티브 페이지" },
]

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="px-6 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center">
          이런 걸 만들 수 있어요
        </h2>
        <p className="text-gray-500 text-center mt-2 text-sm">
          바이브 코딩으로 만든 결과물 예시
        </p>
        <div className="mt-8 space-y-6">
          {showcases.map((item, index) => (
            <div key={index}>
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-gray-400 text-sm">스크린샷 준비 중</span>
              </div>
              <p className="font-semibold mt-3">{item.title}</p>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs mt-10">
          * 이 페이지도 AI로 만들었습니다
        </p>
      </div>
    </section>
  )
}
