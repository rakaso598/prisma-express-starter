## Express + Prisma (sqlite)

- 반복적으로 사용하기에 만든 기본 틀.

- 타입: `commonjs`

---

### 프로젝트 초기화

- `git clone` 이후 `npm install` 진행.

- `npm run dev` 실행 확인하고, `.http` 에서 `Health-Check` 요청해보세요.

- 그리고 콘솔 응답 `OK`가 나오는지 확인하세요.

---

### .env (git ignored, 직접 추가하세요.)

- `DATABASE_URL="file:./dev.db"`

---

### CLI : 실행 명령어입니다.

- `npm init` : node 프로젝트 초기화.
- `npm i express cors` : 웹 프레임워크, CORS 처리 미들웨어 설치.
- `npm i -D @types/express nodemon` : TypeScript 타입 정의 파일, 서버 자동 재시작 도구 설치.

---

### package.json : 필요 시 추가 및 교체하세요.

- `npm run dev로 nodemon 실행하도록 만듦` :

"scripts": {
"dev": "nodemon ./src/app.js"
}

- `프리즈마 경로를 바꿨을 시 추가` :

"prisma": {
"schema": "./src/db/prisma/schema.prisma"
}

---

### schema.prisma (sqlite 사용 시)

- `npm install typescript tsx @types/node --save-dev`

- `npm install prisma --save-dev`

- `npx prisma migrate dev`

- `npx prisma studio`

- `npx prisma migrate reset` : 데이터베이스 리셋 명령어.

- 다음은 스키마 테스트를 위한 예시 모델입니다.

model User {
id Int @id @default(autoincrement())
email String @unique
name String?
}

---
