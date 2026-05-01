# LifePulse — Full-Stack Auth & Interactive Questionnaire
### SL3003 Web Engineering · Lab 13 · Week 13

**Stack:** MongoDB · Express · React 18 · Node.js · JWT · bcryptjs · css-doodle · Recharts · Vite

---

## API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | /api/auth/register | No | Register new user |
| POST | /api/auth/login | No | Login, returns JWT |
| POST | /api/survey/submit | Yes | Upsert survey answers |
| GET | /api/survey/me | Yes | Get saved answers |

---

## Setup

```bash
# 1. Server
cd server
cp .env.example .env      # fill in JWT_SECRET
npm install
node index.js

# 2. Client (new terminal)
cd client
npm install
npm start
```

Open http://localhost:3000

---

## Features
- JWT Authentication (register/login/protected routes)
- 60 Questions across 6 life aspects (10 per category)
- 5 interactive input types: slider, range, emoji-scale, image-choice, mcq
- css-doodle animated backgrounds (geometric on login, organic on register, changing pattern per survey page)
- Results page with Radar chart + Bar chart (Recharts)
- MongoDB persistence with upsert on re-submit
- React Context + useReducer for global auth state
