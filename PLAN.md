# AI-아이 모집 랜딩페이지 PLAN

---

### Milestone 1: 프로젝트 초기화

**목표:** Vite + React + TypeScript + Tailwind CSS 환경 구성 및 브랜드 토큰 설정

> 📖 TECHSPEC 섹션 4.1, 7.4 참조

**Checklist**

- [x] `npm run dev` 실행 시 브라우저에서 localhost 접근 가능
- [x] Tailwind `brand-orange`, `brand-navy` 클래스가 화면에 정상 적용됨
- [x] TypeScript 컴파일 에러 없음 (`npm run build` 성공)

**완료 조건:** `npm run build` 성공 + 브라우저에서 브랜드 컬러 확인

- Commits: `d3eacee`, `4e24ab3`, `96dff62`

---

### Milestone 2: 데이터 레이어

**목표:** 섹션별 콘텐츠를 TypeScript 상수 파일로 분리

> 📖 TECHSPEC 섹션 6 참조

**완료 조건:** 각 파일 import 시 TypeScript 타입 에러 없음 (`npm run typecheck` 통과)

- Commits: `d07cfc1`, `3eeb9c0`

---

### Milestone 3: 공통 UI 컴포넌트

**목표:** `Button`, `Card`, `Accordion` 기본 컴포넌트 구현

> 📖 TECHSPEC 섹션 4.2, 7.1 참조

**Checklist**

- [x] `Button` — `href` prop 있을 때 `<a target="_blank" rel="noopener noreferrer">` 렌더링
- [x] `Accordion` — 항목 클릭 시 열림/닫힘 토글 동작
- [x] `Accordion` — 하나 열면 나머지 닫힘 (단일 선택)

**완료 조건:** 브라우저에서 각 컴포넌트 수동 동작 확인

- Commits: `7ab07ab`

---

### Milestone 4: 섹션 1 — 히어로

**목표:** 첫인상 훅 카피, 동아리 소개, 운영 기간, CTA 버튼 구현

> 📖 TECHSPEC 섹션 1.1, 5 참조

**Checklist**

- [x] 375px에서 카피 텍스트 잘림 없음
- [x] CTA 버튼 클릭 시 `#apply` 앵커로 부드러운 스크롤 이동
- [x] 동아리명, 운영 기간(2026년 4월 ~ 12월) 텍스트 노출

**완료 조건:** 모바일(375px) 기준 히어로 섹션 레이아웃 완성

- Commits: `6bcda75`

---

### Milestone 5: 섹션 2 — 결과물 미리보기

**목표:** 바이브 코딩 결과물 플레이스홀더 카드 3개 구현

> 📖 TECHSPEC 섹션 7.2 참조

**Checklist**

- [x] 플레이스홀더 3개가 16:9 비율로 렌더링
- [x] 이미지 없이도 레이아웃 무너지지 않음 **(P0)**
- [x] "이 페이지도 AI로 만들었습니다" 메타 메시지 노출

**완료 조건:** 이미지 파일 없는 상태에서 레이아웃 정상

- Commits: `f81db70`

---

### Milestone 6: 섹션 3 — 커리큘럼 타임라인

**목표:** 4단계 커리큘럼을 타임라인/스텝 형태로 시각화

> 📖 TECHSPEC 섹션 1.1, 데이터 `curriculum.ts` 참조

**Checklist**

- [x] 4단계 모두 렌더링 (1단계~4단계)
- [x] 각 단계에 기간, 제목, 설명 표시
- [x] 375px에서 타임라인 레이아웃 깨짐 없음

**완료 조건:** 모바일에서 4단계 타임라인 스크롤 없이 파악 가능

- Commits: `3385cba`

---

### Milestone 7: 섹션 4 — 사례 카드

**목표:** 비전공자 성공 사례 3건을 카드 UI로 구현

> 📖 TECHSPEC 섹션 1.1, 데이터 `cases.ts` 참조

**Checklist**

- [x] 사례 3건 모두 렌더링
- [x] 각 카드에 제목, 불릿 목록, 출처 표시
- [x] 375px에서 카드 세로 스택 레이아웃

**완료 조건:** 3개 카드 모바일 기준 정상 렌더링

- Commits: `3b82787`

---

### Milestone 8: 섹션 5 — FAQ 아코디언

**목표:** 6개 질문/답변 아코디언 구현

> 📖 TECHSPEC 섹션 1.1, 7.1, 데이터 `faq.ts` 참조

**Checklist**

- [x] 6개 항목 렌더링
- [x] 항목 클릭 시 답변 열림/닫힘 **(P0)**
- [x] 동시에 두 개 열리지 않음 **(P0)**
- [x] 375px에서 긴 답변 텍스트 잘림 없음

**완료 조건:** 모바일에서 FAQ 6개 토글 동작 확인

- Commits: `3ca8580`

---

### Milestone 9: 섹션 6 — 신청 CTA

**목표:** 외부 신청 링크 버튼, 마감일, 문의처 구현

> 📖 TECHSPEC 섹션 1.1, 1.3, 7.3 참조

**Checklist**

- [x] 신청 버튼 클릭 시 새 탭으로 외부 URL 이동 **(P0)**
- [x] `rel="noopener noreferrer"` 속성 포함
- [x] 마감일 텍스트 노출 (TODO 상태면 플레이스홀더)
- [x] 문의처 텍스트 노출 (TODO 상태면 플레이스홀더)

**완료 조건:** 신청 버튼 → 새 탭 이동 동작 확인

- Commits: `3ddb405`

---

### Milestone 10: 첫 배포

**목표:** Vercel 연결 및 프로덕션 빌드 배포

> 📖 TECHSPEC 섹션 4.3 참조

**Checklist**

- [x] `npm run build` 로컬 성공
- [x] Vercel 빌드 로그 에러 없음
- [x] 배포 URL에서 모든 섹션 로딩 확인
- [x] HTTPS 접근 가능

**완료 조건:** Vercel 배포 URL 공유 가능한 상태

- Commits: Vercel 대시보드에서 연결 완료

---

### Milestone 11: 반응형 QA

**목표:** 375px / 768px / 1280px 및 인앱 브라우저 검증

> 📖 TECHSPEC 섹션 8 참조

**Checklist**

- [ ] 375px — 전체 섹션 레이아웃 깨짐 없음 **(P0)**
- [ ] 768px — 레이아웃 확인
- [ ] 1280px — 레이아웃 확인
- [ ] 카카오톡 인앱 브라우저 렌더링 확인
- [ ] 인스타그램 인앱 브라우저 렌더링 확인
- [ ] Lighthouse 모바일 성능 점수 90+

**완료 조건:** P0 항목 전체 통과

- Commits:
  - `fix: responsive layout adjustments`

---

## 🧪 P0 테스트 체크리스트

| 마일스톤 | 테스트 | 상태 |
|---------|--------|------|
| M5 | 이미지 없이도 ShowcaseSection 레이아웃 무너지지 않음 | [ ] |
| M8 | FAQ 항목 클릭 시 열림/닫힘 토글 동작 | [ ] |
| M8 | FAQ 두 개 항목 동시에 열리지 않음 | [ ] |
| M9 | 신청 버튼 클릭 시 새 탭으로 외부 URL 이동 | [ ] |
| M11 | 375px 기준 전체 섹션 레이아웃 깨짐 없음 | [ ] |
