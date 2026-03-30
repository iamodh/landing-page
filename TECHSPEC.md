# AI-아이 모집 랜딩페이지 TECHSPEC

## 1. 구현

### 1.1 방문자 기능

| 기능 | 설명 |
|------|------|
| 히어로 섹션 | 카피, 동아리 소개, 운영 기간, CTA 버튼 |
| 결과물 미리보기 | 바이브 코딩 결과물 예시 (플레이스홀더 포함) |
| 커리큘럼 타임라인 | 4단계 스텝 시각화 |
| 사례 카드 | 비전공자 성공 사례 3건 (카드 UI) |
| FAQ 아코디언 | 6개 질문/답변 토글 |
| 신청 CTA | 외부 신청 링크(구글 폼 or 카카오 오픈채팅) 버튼, 마감일, 문의처 |

### 1.2 관리자 기능

없음 (정적 콘텐츠)

### 1.3 비즈니스 규칙

| 규칙 | 상세 |
|------|------|
| 신청 링크 | 외부 URL로 `target="_blank"` 이동. 페이지 내 폼 없음 |
| 모집 대상 | 김해 거주·직장·학교 재학 19~45세 청년 (텍스트로만 안내) |
| 마감일 | TODO: 확정 후 하드코딩 |
| 문의처 | TODO: 확정 후 하드코딩 |

### 1.4 에러 처리

랜딩페이지는 정적 콘텐츠만 제공하므로 런타임 API 에러 없음.

| 상황 | 처리 방식 | 사용자 메시지 |
|------|-----------|--------------|
| 외부 신청 링크 불통 | 링크 유효성은 배포 전 수동 확인 | — |
| 이미지/플레이스홀더 로딩 실패 | `alt` 텍스트로 폴백 | (alt 텍스트 표시) |
| 404 (잘못된 경로 직접 접근) | Vercel 기본 404 페이지 | — |

---

## 2. 목적

### 2.1 이 프로젝트를 통해 이루고자 하는 목적

카카오톡·인스타그램 링크로 유입된 비전공자 청년이 모바일에서 스크롤 한 번으로
"나도 AI로 뭔가 만들 수 있겠다"는 확신을 갖고 신청 버튼을 누르게 한다.

- PPT 발표 자료 대용으로 활용 가능한 접근성 높은 웹 페이지
- 페이지 자체가 "바이브 코딩으로 만들었다"는 메타 메시지 전달

### 2.2 2단계 구현 항목

- 결과물 미리보기 섹션에 실제 스크린샷/GIF 교체 (플레이스홀더 → 실물)
- OG 태그 / 카카오 공유 미리보기 최적화
- 모집 마감 후 페이지 내용 업데이트 (모집 종료 안내 등)

---

## 3. 작업 목록

- [ ] 프로젝트 초기 세팅 (Vite + React + TypeScript + Tailwind CSS)
- [ ] 공통: 브랜드 컬러 토큰, 폰트 설정
- [ ] 공통: 모바일 퍼스트 레이아웃 컨테이너
- [ ] 섹션 1: 히어로 (카피, CTA 버튼)
- [ ] 섹션 2: 결과물 미리보기 (플레이스홀더 카드 3개)
- [ ] 섹션 3: 커리큘럼 타임라인 (4단계)
- [ ] 섹션 4: 사례 카드 (3개)
- [ ] 섹션 5: FAQ 아코디언
- [ ] 섹션 6: 신청 CTA (외부 링크 버튼, 마감일, 문의처)
- [ ] 반응형 검수 (375px / 768px / 1280px)
- [ ] Vercel 배포 설정

---

## 4. 아키텍처

### 4.1 개발 환경 (기술 스택)

| 구분 | 선택 | 비고 |
|------|------|------|
| 번들러 | Vite 8 | — |
| UI 프레임워크 | React 19 | — |
| 언어 | TypeScript 5.9 | — |
| 스타일링 | Tailwind CSS v4 | `@tailwindcss/vite` 플러그인, CSS `@theme` 블록으로 토큰 정의 |
| 패키지 매니저 | npm | — |
| 배포 | Vercel | Git push → 자동 배포 |
| 코드 포매터 | Prettier | — |

### 4.2 애플리케이션 아키텍처

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ShowcaseSection.tsx      # 결과물 미리보기
│   │   ├── CurriculumSection.tsx
│   │   ├── CasesSection.tsx         # 사례 카드
│   │   ├── FaqSection.tsx
│   │   └── CtaSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Accordion.tsx
├── data/
│   ├── cases.ts                     # 사례 데이터
│   ├── curriculum.ts                # 커리큘럼 데이터
│   └── faq.ts                       # FAQ 데이터
├── App.tsx                          # 섹션 순서 조합
├── main.tsx
└── index.css                        # Tailwind 베이스
```

콘텐츠 데이터는 `data/` 디렉토리에 분리하여 텍스트 수정 시 컴포넌트 코드 변경 불필요.

### 4.3 배포 아키텍처

```
GitHub repo → Vercel (main 브랜치 push → 자동 빌드/배포)
빌드 결과물: 정적 파일 (HTML + CSS + JS)
CDN: Vercel Edge Network
```

---

## 5. 라우트 설계

단일 페이지(SPA). 라우터 없음.

| 경로 | 설명 |
|------|------|
| `/` | 랜딩페이지 전체 |

섹션 간 이동은 `#id` 앵커 스크롤로 처리.

| 앵커 ID | 대상 섹션 |
|---------|-----------|
| `#hero` | 히어로 |
| `#showcase` | 결과물 미리보기 |
| `#curriculum` | 커리큘럼 |
| `#cases` | 사례 카드 |
| `#faq` | FAQ |
| `#apply` | 신청 CTA |

---

## 6. 데이터베이스 스키마

없음 (정적 콘텐츠, DB 불필요)

콘텐츠는 `src/data/*.ts` TypeScript 상수로 관리.

**cases.ts 구조 예시**

| 필드 | 타입 | 설명 |
|------|------|------|
| `id` | `string` | 식별자 |
| `title` | `string` | 사례 제목 |
| `bullets` | `string[]` | 세부 내용 목록 |
| `source` | `string` | 출처 |

**curriculum.ts 구조 예시**

| 필드 | 타입 | 설명 |
|------|------|------|
| `step` | `number` | 단계 번호 (1~4) |
| `period` | `string` | 기간 (예: "4~5월") |
| `title` | `string` | 단계명 |
| `description` | `string` | 설명 |

---

## 7. 핵심 구현 로직

### 7.1 FAQ 아코디언

```tsx
// 하나만 열리는 단일 선택 아코디언
const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggle = (index: number) => {
  setOpenIndex(prev => (prev === index ? null : index));
};
```

### 7.2 결과물 미리보기 플레이스홀더

실제 이미지가 없는 동안 비율 고정 박스로 표시.

```tsx
// 16:9 비율 플레이스홀더
<div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
  <span className="text-gray-400 text-sm">스크린샷 준비 중</span>
</div>
```

### 7.3 CTA 버튼 (외부 링크)

```tsx
<a
  href={APPLY_URL}           // TODO: 확정된 구글 폼 or 카카오 오픈채팅 URL
  target="_blank"
  rel="noopener noreferrer"
>
  지금 신청하기
</a>
```

### 7.4 브랜드 컬러 Tailwind 토큰

```css
/* src/index.css — Tailwind v4 @theme 방식 */
@import "tailwindcss";

@theme {
  --color-brand-orange: #E07830;
  --color-brand-gold: #DDB84E;
  --color-brand-navy: #2D4356;
  --color-brand-bg: #F2F7F7;
  --color-brand-text: #2A2A2A;
}
```

사용 예: `bg-brand-orange`, `text-brand-navy`

---

## 8. 테스트 전략

### 8.1 필수 검증 항목 (P0)

- [ ] 375px(iPhone SE) 기준 모든 섹션 레이아웃 깨짐 없음
- [ ] CTA 버튼 → 외부 링크 정상 이동 (새 탭)
- [ ] FAQ 아코디언 토글 정상 작동
- [ ] 이미지 없이도 레이아웃 무너지지 않음 (플레이스홀더 폴백)

### 8.2 추가 검증 항목 (P1)

- [ ] 768px(태블릿), 1280px(데스크탑) 레이아웃
- [ ] 카카오톡 인앱 브라우저에서 렌더링 확인
- [ ] 인스타그램 인앱 브라우저에서 렌더링 확인
- [ ] Lighthouse 성능 점수 90+ (모바일 기준)

### 8.3 테스트 도구

| 도구 | 용도 |
|------|------|
| Chrome DevTools | 반응형 레이아웃 확인 |
| Lighthouse | 성능·접근성 점수 측정 |
| 실기기(iPhone/Android) | 인앱 브라우저 렌더링 검증 |
