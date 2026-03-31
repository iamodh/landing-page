import { values } from "../../data/values"

export default function ValuesSection() {
  return (
    <section className="px-6 py-14 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-brand-navy">
          우리의 약속
        </h2>
        <ul className="mt-8 space-y-5">
          {values.map((v) => (
            <li key={v.title} className="flex items-start gap-4">
              <span className="text-2xl leading-none mt-0.5">{v.emoji}</span>
              <div>
                <h3 className="font-bold text-brand-navy">{v.title}</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {v.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
