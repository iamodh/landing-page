export interface CaseItem {
  id: string
  emoji: string
  title: string
  who: string
  problem: string
  result: string
  source: string
  image?: string
}

export const cases: CaseItem[] = [
  {
    id: "lawyer",
    emoji: "🏗️",
    title: "건축 허가 검토 도구",
    who: "캘리포니아 상해 전문 변호사",
    problem: "건축 허가 신청의 90%가 반려되는 친구의 고통을 목격",
    result: "AI로 허가 요건을 자동 검토하는 도구를 직접 제작",
    image: "/case-lawyer.png",
    source: "Anthropic Claude Code 해커톤 금상 🥇",
  },
  {
    id: "father",
    emoji: "👨‍👧",
    title: "딸을 위한 코딩 교육 앱",
    who: "프로그래밍 경험 없는 아버지",
    problem: "12살 딸에게 코딩을 재미있게 알려주고 싶었음",
    result: "블록을 조합하면 AI가 실제 코드를 작성하는 앱 완성",
    image: "/case-father-short.gif",
    source: "Anthropic Claude Code 해커톤 은상 🥈",
  },
  {
    id: "doctor",
    emoji: "🩺",
    title: "환자 맞춤 건강 안내 서비스",
    who: "벨기에 심장내과 과장",
    problem: "환자가 진료 후 자신의 진단 내용을 이해하기 어려움",
    result: "진료 기록 기반 개인 맞춤 건강 안내 서비스 개발",
    image: "/case-doctor.gif",
    source: "Anthropic Claude Code 해커톤 동상 🥉",
  },
]
