# 🖥️ 새 PC에서 작업 시작하기

이 문서는 처음 사용하는 PC에서 영국학생비자센터 사이트 작업을 이어가는 단계별 가이드입니다.
**Claude Code 대화 히스토리는 PC별 로컬 저장이라 동기화되지 않지만**, 이 가이드와 `CLAUDE.md` 파일이 있으면 어느 PC에서든 같은 컨텍스트로 작업할 수 있습니다.

## 📋 1회만 설치하면 되는 프로그램

### 1. Node.js (필수)
- 다운로드: https://nodejs.org → **LTS 버전** 설치
- 설치 확인:
  ```bash
  node --version    # v18 이상이어야 함
  npm --version
  ```

### 2. Git (필수)
- 다운로드: https://git-scm.com/downloads
- 설치 확인: `git --version`

### 3. Claude Code (필수)
- 설치 가이드: https://docs.anthropic.com/claude/docs/claude-code
- 로그인까지 완료해 두기

### 4. VS Code 또는 다른 코드 에디터 (선택)
- https://code.visualstudio.com/

## 🚀 프로젝트 가져오기

```bash
# 1. 원하는 작업 폴더로 이동 (예: 홈)
cd ~

# 2. GitHub에서 리포 복제
git clone https://github.com/uksinchon/UK-VISA-Free.git
cd UK-VISA-Free

# 3. 의존성 설치 (첫 1회만)
npm install
```

## 🤖 Claude Code 세션 시작

```bash
# 프로젝트 폴더 안에서 claude 실행
cd ~/UK-VISA-Free
claude
```

→ Claude Code가 자동으로 `CLAUDE.md`를 읽어 프로젝트 컨텍스트(파일 구조·디자인 톤·자주 하는 작업 등)를 파악합니다.

### 첫 메시지 예시

```
CLAUDE.md 읽고 현재 프로젝트 상태 요약해줘
```

또는 바로 작업을 시작하셔도 됩니다:

```
비자 가격 수정하려고 해. 비파트너 학생비자 가격을 200,000원으로 바꿔줘
```

→ Claude가 `src/data/visas.ts`를 찾아서 알아서 수정합니다.

## 🛠️ 자주 쓰는 명령어

```bash
# 로컬에서 사이트 미리보기
npm run dev          # http://localhost:3000

# 정적 빌드 (배포 전 확인용)
npm run build        # out/ 폴더에 빌드 결과 생성

# 변경사항 배포
git add -A
git commit -m "수정 내용 요약"
git push origin main
# → 2~3분 후 ukvisa.kr 자동 업데이트
```

## 📨 폼 메일 받는 주소 변경

Formspree 대시보드(https://formspree.io/forms)에서 endpoint(`xqaqagrk`) 설정 변경.
코드 수정 불필요.

## 🔐 GitHub 인증 (첫 push 시)

- Windows: Git Credential Manager가 자동 처리. 브라우저 로그인 1회만 하면 캐시됨
- Mac: SSH 키 등록 권장 (https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## 🚨 문제 발생 시

| 증상 | 해결 |
|------|------|
| `npm install` 에러 | Node.js 18 이상 확인, `npm cache clean --force` 후 재시도 |
| `git push` 권한 거부 | GitHub 로그인 재시도, 또는 토큰 재발급 |
| 로컬 사이트 빈 화면 | `rm -rf .next` 후 `npm run dev` 재실행 |
| Claude Code가 CLAUDE.md를 못 찾음 | 반드시 프로젝트 루트 (`UK-VISA-Free` 폴더 안)에서 `claude` 실행 |

## 💾 PC 간 추가 동기화 (선택)

Claude Code의 대화 히스토리는 `~/.claude/projects/` 에 저장됩니다 (PC별 로컬).
**굳이 동기화하지 않아도** 위의 `CLAUDE.md` + GitHub 리포 조합이면 어디서든 같은 작업을 이어갈 수 있습니다.

만약 대화 히스토리까지 살리고 싶다면:
- Mac/Win iCloud Drive · OneDrive · Google Drive 등에 `~/.claude` 폴더 심볼릭 링크 (고급)
- 또는 매번 새 세션을 시작 (Claude가 `CLAUDE.md`로 컨텍스트 파악 가능)

## 🔗 핵심 링크

- 사이트: https://ukvisa.kr
- 리포: https://github.com/uksinchon/UK-VISA-Free
- 배포 상태: https://github.com/uksinchon/UK-VISA-Free/actions
- Formspree: https://formspree.io/forms
- Google Search Console: https://search.google.com/search-console
- Naver 웹마스터: https://searchadvisor.naver.com

---

**막히는 부분이 있으면 Claude에게 그냥 그대로 말씀하세요.** 예:
- "Settings → Pages에서 GitHub Actions 옵션이 안 보여"
- "git push가 거부됐어"
- "npm run dev가 에러나"

Claude가 진단해서 해결 방법을 안내해 드립니다.
