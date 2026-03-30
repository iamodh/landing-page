import HeroSection from "./components/sections/HeroSection"
import ShowcaseSection from "./components/sections/ShowcaseSection"
import CurriculumSection from "./components/sections/CurriculumSection"
import CasesSection from "./components/sections/CasesSection"
import FaqSection from "./components/sections/FaqSection"
import CtaSection from "./components/sections/CtaSection"

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <HeroSection />
      <main>
        <ShowcaseSection />
        <CurriculumSection />
        <CasesSection />
        <FaqSection />
        <CtaSection />
      </main>
    </div>
  )
}

export default App
