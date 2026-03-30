import Button from "./components/ui/Button"
import Card from "./components/ui/Card"
import Accordion from "./components/ui/Accordion"
import { faq } from "./data/faq"

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <header className="bg-brand-navy text-white p-8 text-center">
        <h1 className="text-3xl font-bold">AI-아이</h1>
        <p className="text-brand-gold mt-2">김해 청년 AI 동아리</p>
      </header>
      <main className="max-w-md mx-auto p-6 space-y-8">
        <section>
          <h2 className="text-xl font-bold mb-4">Button</h2>
          <div className="space-y-3">
            <Button href="https://example.com">외부 링크 버튼</Button>
            <div>
              <Button variant="secondary" onClick={() => alert("clicked")}>
                일반 버튼
              </Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Card</h2>
          <Card>
            <p className="font-semibold">카드 제목</p>
            <p className="text-gray-600 mt-2">카드 본문 내용입니다.</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Accordion (FAQ)</h2>
          <Accordion items={faq} />
        </section>
      </main>
    </div>
  )
}

export default App
