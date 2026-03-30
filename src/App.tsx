import HeroSection from "./components/sections/HeroSection"
import ShowcaseSection from "./components/sections/ShowcaseSection"
import CurriculumSection from "./components/sections/CurriculumSection"

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <HeroSection />
      <main>
        <ShowcaseSection />
        <CurriculumSection />
        <section id="apply" className="px-6 py-16 text-center">
          <p className="text-xl font-bold">신청 CTA 섹션 (M9에서 구현 예정)</p>
        </section>
      </main>
    </div>
  )
}

export default App
