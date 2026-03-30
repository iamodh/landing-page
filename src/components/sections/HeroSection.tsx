export default function HeroSection() {
  const scrollToApply = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="bg-brand-navy text-white px-6 py-16">
      <div className="max-w-md mx-auto text-center">
        <p className="text-brand-gold font-semibold text-sm tracking-wide">
          김해 청년 AI 동아리
        </p>
        <h1 className="text-3xl font-bold mt-3 leading-tight">
          코딩 몰라도 괜찮아,
          <br />
          AI가 대신 만들어 줄게
        </h1>
        <p className="text-gray-300 mt-4 leading-relaxed">
          말로 설명하면 결과물이 나오는 <strong className="text-white">바이브 코딩</strong>으로
          <br />
          나만의 웹페이지를 만들어 보세요.
        </p>
        <p className="text-brand-gold/80 text-sm mt-6">
          2026년 4월 ~ 12월 · AI-아이
        </p>
        <button
          onClick={scrollToApply}
          className="mt-8 inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-brand-orange/90 transition-colors"
        >
          지금 신청하기
        </button>
      </div>
    </section>
  )
}
