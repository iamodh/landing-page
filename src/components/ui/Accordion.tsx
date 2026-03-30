import { useState } from "react"

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
          >
            <span>{item.question}</span>
            <span
              className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            >
              ▾
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
