import Button from "../ui/Button"

const APPLY_URL = "#" // TODO: 확정된 구글 폼 or 카카오 오픈채팅 URL

export default function CtaSection() {
  return (
    <section id="apply" className="px-6 py-16 bg-brand-navy text-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold">함께 만들어 볼까요?</h2>
        <p className="text-gray-300 mt-3 leading-relaxed">
          코딩 경험이 없어도 괜찮습니다.
          <br />
          AI와 함께라면 누구나 만들 수 있어요.
        </p>
        <div className="mt-8">
          <Button href={APPLY_URL}>지금 신청하기</Button>
        </div>
        <div className="mt-8 space-y-2 text-sm text-gray-400">
          <p>마감일: 추후 공지 예정</p>
          <p>문의: 추후 공지 예정</p>
        </div>
      </div>
    </section>
  )
}
