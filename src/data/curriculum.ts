export interface CurriculumItem {
  step: number
  period: string
  title: string
  description: string
}

export const curriculum: CurriculumItem[] = [
  {
    step: 1,
    period: "4~5월",
    title: "AI·IT 자유 탐색",
    description:
      "각자 관심 있는 AI 도구를 자유롭게 써보고, 발견한 것들을 스터디원들과 공유합니다. ChatGPT, Gemini, 바이브 코딩 등 무엇이든 좋아요.",
  },
  {
    step: 2,
    period: "6월",
    title: "AI 윤리·리스크 토론",
    description:
      "딥페이크, 프롬프트 인젝션 등 AI 리스크 사례를 함께 살펴보고 토론합니다. 안전하게 활용하는 방법을 같이 고민해요.",
  },
  {
    step: 3,
    period: "7~9월",
    title: "나만의 프로젝트",
    description:
      "자유 주제로 AI를 활용해 자신만의 결과물을 만들어 봅니다. 스터디원들과 서로 피드백하며 완성해 나가요.",
  },
  {
    step: 4,
    period: "10~11월",
    title: "김해시 연계 프로젝트",
    description:
      "김해 지역에 도움이 되는 아이디어를 함께 기획하고, 각자 AI로 프로토타입을 만듭니다. 12월 성과 공유회에서 발표해요.",
  },
]
