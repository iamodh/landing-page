const showcases = [
  { title: "동네 맛집 추천 웹앱", description: "관심 있는 주제로 직접 만들어 본 결과물" },
  { title: "우리 동아리 소개 페이지", description: "각자의 방식으로 완성한 웹페이지" },
  { title: "김해 관광 가이드", description: "지역 이야기를 담아 자유롭게 만든 페이지" },
]

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="px-6 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center">
          스터디원들이 만든 것들
        </h2>
        <p className="text-gray-500 text-center mt-2 text-sm">
          각자의 관심사로 자유롭게 만든 결과물
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
