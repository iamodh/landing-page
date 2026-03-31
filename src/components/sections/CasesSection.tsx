import { cases } from "../../data/cases"

export default function CasesSection() {
  return (
    <section id="cases" className="px-6 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center">
          자기만의 문제를 풀어낸 사람들
        </h2>
        <p className="text-gray-500 text-center mt-2 text-sm">
          각자의 이유로, 각자의 방식으로 만든 실제 사례
        </p>
        <div className="mt-8 space-y-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* 스크린샷 플레이스홀더 */}
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">
                    스크린샷 준비 중
                  </span>
                )}
              </div>
              {/* 카드 본문 */}
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.emoji}</span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="text-brand-orange font-semibold shrink-0">
                      누가
                    </dt>
                    <dd className="text-gray-600">{item.who}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-brand-orange font-semibold shrink-0">
                      왜
                    </dt>
                    <dd className="text-gray-600">{item.problem}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-brand-orange font-semibold shrink-0">
                      결과
                    </dt>
                    <dd className="text-gray-600">{item.result}</dd>
                  </div>
                </dl>
                <p className="text-xs text-gray-400 mt-3">{item.source}</p>
              </div>
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
