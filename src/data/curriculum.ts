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
    title: "AI·IT 사례 탐색",
    description:
      "일상 속 AI·IT 활용 사례를 찾고, 직접 써보며 감을 잡는 단계. ChatGPT, Gemini 등 무료 도구를 체험하고 바이브 코딩도 맛봅니다.",
  },
  {
    step: 2,
    period: "6월",
    title: "AI 윤리·리스크 학습",
    description:
      "딥페이크, 프롬프트 인젝션 등 AI 악용 사례를 통해 비판적 시각을 기르고, 안전한 사용법을 익힙니다.",
  },
  {
    step: 3,
    period: "7~9월",
    title: "바이브 코딩 실습",
    description:
      "AI 코딩 도구로 직접 무언가를 만들어보는 단계. 자유 주제로 프로젝트를 선정하고, 서로 QA하며 완성합니다.",
  },
  {
    step: 4,
    period: "10~11월",
    title: "김해시 연계 프로젝트",
    description:
      "김해 지역에 도움이 되는 아이디어를 기획하고 AI로 프로토타입을 제작합니다. 12월 성과 공유회에서 발표합니다.",
  },
]
