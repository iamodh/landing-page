export interface CaseItem {
  id: string
  title: string
  bullets: string[]
  source: string
}

export const cases: CaseItem[] = [
  {
    id: "lawyer",
    title: "🏗️ 변호사가 만든 건축 허가 검토 도구",
    bullets: [
      "캘리포니아 상해 전문 변호사가 개발",
      "건축 허가 신청의 90%가 반려되는 문제를 해결",
      "친구의 현실적인 고통을 목격한 뒤 직접 제작",
    ],
    source: "Anthropic Claude Code 해커톤 금상 🥇",
  },
  {
    id: "father",
    title: "👨‍👧 아빠가 딸을 위해 만든 코딩 교육 앱",
    bullets: [
      "12살 딸이 블록을 조합하면 AI가 실제 코드를 작성",
      "프로그래밍 경험 없는 아버지가 직접 제작",
      "첫 번째 사용자는 그의 딸",
    ],
    source: "Anthropic Claude Code 해커톤 은상 🥈",
  },
  {
    id: "doctor",
    title: "🩺 심장내과 의사가 만든 환자 안내 서비스",
    bullets: [
      "벨기에 심장내과 과장이 직접 개발",
      "환자가 진료 후에도 자신의 진단 내용을 쉽게 이해",
      "진료 기록 기반 개인 맞춤 건강 안내 제공",
    ],
    source: "Anthropic Claude Code 해커톤 동상 🥉",
  },
]
