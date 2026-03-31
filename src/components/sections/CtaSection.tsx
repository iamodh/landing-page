import Button from "../ui/Button"

const APPLY_URL = "#" // TODO: 확정된 구글 폼 or 카카오 오픈채팅 URL

export default function CtaSection() {
  return (
    <section id="apply" className="px-6 py-16 bg-brand-navy text-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold">같이 탐색하고, 나눠볼까요?</h2>
        <p className="text-gray-300 mt-3 leading-relaxed">
          자유롭게 AI를 활용해 보고,
          <br />
          서로의 경험을 나누는 스터디입니다.
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
