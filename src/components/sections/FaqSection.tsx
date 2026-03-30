import { faq } from "../../data/faq"
import Accordion from "../ui/Accordion"

export default function FaqSection() {
  return (
    <section id="faq" className="px-6 py-16 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center">
          자주 묻는 질문
        </h2>
        <div className="mt-8">
          <Accordion items={faq} />
        </div>
      </div>
    </section>
  )
}
