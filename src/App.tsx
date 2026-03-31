import HeroSection from "./components/sections/HeroSection"
import CasesSection from "./components/sections/CasesSection"
import CurriculumSection from "./components/sections/CurriculumSection"
import FaqSection from "./components/sections/FaqSection"
import CtaSection from "./components/sections/CtaSection"

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <HeroSection />
      <main>
        <CasesSection />
        <CurriculumSection />
        <FaqSection />
        <CtaSection />
      </main>
    </div>
  )
}

export default App
