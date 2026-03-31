# AI-아이 모집 랜딩페이지

김해 청년 AI 동아리 **AI-아이** 스터디원 모집을 위한 랜딩페이지입니다.

> AI로 나만의 방법을 찾고, 만들고, 함께 나누는 곳

## 기술 스택

- React 19 + TypeScript
- Tailwind CSS v4
- Vite 8
- Vercel 배포

## 시작하기

```bash
npm install
npm run dev
```

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run typecheck` | TypeScript 타입 체크 |
| `npm run lint` | ESLint 실행 |
| `npm run preview` | 빌드 결과 미리보기 |

## 프로젝트 구조

```
src/
├── components/
│   ├── sections/     # 페이지 섹션 컴포넌트
│   └── ui/           # 공통 UI 컴포넌트
├── data/             # 콘텐츠 데이터 (커리큘럼, 사례, FAQ)
├── App.tsx
├── main.tsx
└── index.css
```

## 섹션 구성

1. **히어로** — 메인 카피 + 신청 CTA
2. **사례** — 비전공자 성공 사례 3건 (스크린샷/GIF 포함)
3. **커리큘럼** — 9개월 4단계 타임라인
4. **FAQ** — 자주 묻는 질문 아코디언
5. **신청 CTA** — 외부 신청 링크

## 콘텐츠 수정

텍스트 데이터는 `src/data/` 디렉토리에 분리되어 있어 컴포넌트 수정 없이 내용을 변경할 수 있습니다.

- `src/data/cases.ts` — 사례 데이터
- `src/data/curriculum.ts` — 커리큘럼 데이터
- `src/data/faq.ts` — FAQ 데이터
