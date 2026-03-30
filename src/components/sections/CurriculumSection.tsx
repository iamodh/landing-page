import { curriculum } from "../../data/curriculum"

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="px-6 py-16 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center">
          9개월, 이렇게 배워요
        </h2>
        <div className="mt-10 relative">
          {/* 타임라인 세로선 */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-orange/20" />

          <div className="space-y-8">
            {curriculum.map((item) => (
              <div key={item.step} className="relative pl-12">
                {/* 스텝 원 */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-orange text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <p className="text-brand-orange text-sm font-semibold">
                  {item.period}
                </p>
                <h3 className="font-bold text-lg mt-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
