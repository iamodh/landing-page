import { cases } from "../../data/cases"
import Card from "../ui/Card"

export default function CasesSection() {
  return (
    <section id="cases" className="px-6 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center">
          비전공자도 만들었습니다
        </h2>
        <p className="text-gray-500 text-center mt-2 text-sm">
          코딩을 몰랐던 사람들의 실제 사례
        </p>
        <div className="mt-8 space-y-5">
          {cases.map((item) => (
            <Card key={item.id}>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-600 text-sm flex gap-2">
                    <span className="text-brand-orange shrink-0">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-3">{item.source}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
