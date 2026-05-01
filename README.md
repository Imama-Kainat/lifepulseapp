# LifePulse 🫀

<div align="center">

```
██╗     ██╗███████╗███████╗██████╗ ██╗   ██╗██╗     ███████╗███████╗
██║     ██║██╔════╝██╔════╝██╔══██╗██║   ██║██║     ██╔════╝██╔════╝
██║     ██║█████╗  █████╗  ██████╔╝██║   ██║██║     ███████╗█████╗  
██║     ██║██╔══╝  ██╔══╝  ██╔═══╝ ██║   ██║██║     ╚════██║██╔══╝  
███████╗██║██║     ███████╗██║     ╚██████╔╝███████╗███████║███████╗
╚══════╝╚═╝╚═╝     ╚══════╝╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝
```

### *"Know yourself across 6 dimensions of life"*

<br/>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

<br/>

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

<br/>

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-purple?style=flat-square)
![PRs](https://img.shields.io/badge/PRs-Welcome-blue?style=flat-square)
![University](https://img.shields.io/badge/FAST--NUCES-Lab_13-orange?style=flat-square)

</div>

---

<div align="center">

> 🔐 **Secure** &nbsp;·&nbsp; 🎨 **Generative Art** &nbsp;·&nbsp; 📊 **Visual Results** &nbsp;·&nbsp; 💾 **Persistent** &nbsp;·&nbsp; ⚡ **Fast**

</div>

---

## 🧬 What Is LifePulse?

LifePulse is a **full-stack MERN application** where users securely register, log in, and complete a **60-question interactive survey** across 6 dimensions of their life. Every page features **live generative CSS art** via `css-doodle`. After answering, users unlock a **visual results dashboard** with radar and bar charts of their life balance.

```
📝 Register ──► 🔐 Login ──► 📋 Survey (60 Qs) ──► 📊 Results
      │               │              │                    │
  bcrypt hash     JWT token      6 pages ×           Radar chart
  stored in       stored in      10 questions         Bar chart
  MongoDB         localStorage   per category         per category
```

---

## ✨ Feature Highlights

```
╔══════════════════════════════════════════════════════════════╗
║  🔐  JWT Authentication     bcrypt salt 12 · 7-day tokens   ║
║  🎨  css-doodle Art         Unique pattern on every page     ║
║  📋  60 Questions           6 categories · 5 input types     ║
║  📊  Visual Dashboard       Radar + Bar chart (Recharts)     ║
║  💾  MongoDB Upsert         Retake = Update, never duplicate  ║
║  🛡️  Input Validation       express-validator on all routes  ║
║  ⚡  Vite Dev Server        Hot reload · Works on Windows    ║
║  🔄  Global Auth State      useReducer + Context API         ║
╚══════════════════════════════════════════════════════════════╝
```

---

## 🗂️ Project Structure

```
lifepulseapp/
│
├── 🗄️  server/
│   ├── config/
│   │   └── db.js                  ← Mongoose connection
│   ├── middleware/
│   │   └── auth.js                ← JWT verification
│   ├── models/
│   │   ├── User.js                ← Schema + bcrypt pre-save hook
│   │   └── Response.js            ← Survey answers (Map type)
│   ├── routes/
│   │   ├── auth.js                ← /register  /login
│   │   └── survey.js              ← /submit  /me
│   ├── .env.example
│   └── index.js
│
└── ⚛️  client/
    └── src/
        ├── context/
        │   └── AuthContext.jsx    ← ⭐ useReducer global store
        ├── components/
        │   ├── PrivateRoute.jsx   ← JWT-gated route wrapper
        │   └── QuestionTypes/
        │       ├── SliderQuestion.jsx
        │       ├── RangeQuestion.jsx
        │       ├── EmojiScaleQuestion.jsx
        │       ├── ImageChoiceQuestion.jsx
        │       └── MCQQuestion.jsx
        ├── data/
        │   └── questions.js       ← All 60 questions
        ├── pages/
        │   ├── LoginPage.jsx      ← 🔷 Geometric css-doodle
        │   ├── RegisterPage.jsx   ← 🌊 Organic css-doodle
        │   ├── SurveyPage.jsx     ← 📄 Paginated + progress bar
        │   └── ResultsPage.jsx    ← 📊 Charts dashboard
        └── utils/
            └── axiosInstance.js   ← Axios + auto JWT header
```

---

## 🚀 Quick Start

### Prerequisites

![Node](https://img.shields.io/badge/Node.js-≥16-339933?style=flat-square&logo=nodedotjs)
![MongoDB](https://img.shields.io/badge/MongoDB-Local_or_Atlas-47A248?style=flat-square&logo=mongodb)

### 1️⃣ Clone

```bash
git clone https://github.com/yourusername/lifepulse-mern.git
cd lifepulse-mern/lifepulseapp
```

### 2️⃣ Configure Environment

```bash
cd server
cp .env.example .env
```

```env
# server/.env
MONGO_URI=mongodb://127.0.0.1:27017/lifepulse
JWT_SECRET=your_super_secret_key_minimum_32_chars_long
JWT_EXPIRES_IN=7d
PORT=5000
```

> ⚠️ Never commit `.env` to GitHub. It's already in `.gitignore`.

### 3️⃣ Install & Run

**Terminal 1 — Backend**
```bash
cd server
npm install
node index.js

# ✅ MongoDB connected: 127.0.0.1
# 🚀 Server on port 5000
```

**Terminal 2 — Frontend**
```bash
cd client
npm install
npx vite

# ➜  Local: http://localhost:3000
```

---

## 🔐 Authentication Flow

```
┌─────────────┐    POST /api/auth/register     ┌──────────────────┐
│   Register  │ ──────────────────────────►   │ express-validator │
│    Form     │  { name, email, password }      └────────┬─────────┘
└─────────────┘                                          │ valid
                                                         ▼
                                                ┌─────────────────┐
                                                │ bcrypt.hash()   │
                                                │ salt rounds: 12 │
                                                └────────┬────────┘
                                                         │
                                                         ▼
                                                ┌─────────────────┐
                                                │    MongoDB      │
                                                │ (hashed only)   │
                                                └────────┬────────┘
                                                         │
                                                         ▼
                                                ┌─────────────────┐
                                                │  JWT signed     │◄── JWT_SECRET
                                                │  expires: 7d    │
                                                └────────┬────────┘
                                                         │
                                             ┌───────────▼────────────┐
                                             │ localStorage + Context  │
                                             │ Axios interceptor       │
                                             │ PrivateRoute unlocked   │
                                             └────────────────────────┘
```

---

## 📡 API Reference

| Method | Endpoint | 🔒 Auth | Body | Returns |
|:---:|---|:---:|---|---|
| `POST` | `/api/auth/register` | ❌ | `name, email, password` | `token, user` |
| `POST` | `/api/auth/login` | ❌ | `email, password` | `token, user` |
| `POST` | `/api/survey/submit` | ✅ | `{ answers: { id: val } }` | `success, response` |
| `GET` | `/api/survey/me` | ✅ | — | `{ answers }` |

**Protected route header:**
```
Authorization: Bearer <your_jwt_token>
```

| Code | Meaning |
|:---:|---|
| `400` | Validation failed |
| `401` | Invalid / missing token |
| `500` | Server error |

---

## 📋 Survey — 60 Questions Across 6 Life Aspects

| # | Category | Icon | Topics | Input Types |
|:---:|---|:---:|---|---|
| 1–10 | Social | 👥 | Conversations, comfort, peer pressure, leadership | slider · emoji-scale · mcq · range · image-choice |
| 11–20 | Educational | 📚 | Study hours, learning style, stress, career clarity | slider · image-choice · mcq · range · emoji-scale |
| 21–30 | Emotional | 💛 | Wellbeing, stress triggers, sleep, optimism | emoji-scale · mcq · range · slider · image-choice |
| 31–40 | Cultural | 🌍 | Cultural pride, traditions, media, travel | image-choice · mcq · slider · range · emoji-scale |
| 41–50 | Digital/Tech | 💻 | Screen time, social media, AI, gaming | slider · emoji-scale · range · mcq · image-choice |
| 51–60 | Environmental | 🌱 | Eco habits, recycling, climate, carbon | slider · range · mcq · image-choice · emoji-scale |

**5 Interactive Input Types:**

```
🎚️  Slider        drag to set a numeric value  (e.g. hours of sleep)
📏  Range         select a scale position       (e.g. stress 1–10)
😊  Emoji Scale   tap the emoji that fits       (e.g. 😔 → 😄)
🖼️  Image Choice  pick the image that fits you  (e.g. city vs nature)
🔘  MCQ           pick one from a list          (e.g. learning style)
```

---

## 🎨 css-doodle Backgrounds

Every page has a **unique generative CSS animation** — no two pages look the same.

```
Login Page      🔷  Geometric polygons  rotating at random angles
Register Page   🌊  Organic blob shapes with radial gradients flowing
Survey Page 1   🔺  Triangle clip-paths with hue rotation per cell
Survey Page 2   🔵  Radial circles pulsing in and out with scale
Survey Page 3   🟦  Rotated squares layered in cool blue hues
Survey Page 4   🟣  Gradient blobs fading in purple tones
Survey Page 5   🌈  Dense grid with per-cell hue-index mapping
Survey Page 6   ⭕  Circle clips at fully randomized positions
```

> The survey banner **automatically switches pattern** on every page navigation by passing a new `key` prop that forces css-doodle to remount with a different pattern string.

---

## 🗄️ Data Models

**User**
```js
{
  name:      String,   // required, trimmed
  email:     String,   // unique, lowercase
  password:  String,   // bcrypt hash ONLY — plaintext never stored
  createdAt: Date      // auto-generated
}
```

**Response**
```js
{
  user:        ObjectId,  // ref: User — unique, one per user
  answers:     Map,       // { "s01": 5, "em01": 2, "d03": 8 ... }
  submittedAt: Date
}
```

> `Map<String, Mixed>` — any question ID as key, any value type. No schema migrations needed if questions change.

---

## ⚙️ Tech Stack Decisions

| Choice | Why |
|---|---|
| **Vite** over Create React App | CRA is deprecated since 2022. Vite is 10× faster, zero Windows issues |
| **useReducer + Context** over Redux | Auth state = 3 fields. Redux adds 50KB+ overhead for no gain here |
| **bcrypt salt rounds: 12** | Each extra round doubles attack cost. 12 ≈ 300ms per hash — comfortable for users, painful for attackers |
| **Map type in MongoDB** | Flexible schema — no migration if question IDs change |
| **Upsert on submit** | `findOneAndUpdate + upsert: true` — one document per user, re-submit updates it |
| **Generic auth errors** | Never reveal if an email is registered — prevents user enumeration attacks |

---

## 🧠 State Management Reflection

**Problem:** Auth state (`user`, `token`, `loading`) needed to be accessible across Login, Register, Survey, Results, and PrivateRoute — all unrelated components with no shared parent. Prop drilling would mean passing through every layer of the component tree.

**Solution:** A single `AuthProvider` wraps the entire `<App>`. Any component calls `useAuth()` and gets the store. Dispatching `LOGIN_SUCCESS` instantly updates headers, unlocks routes, and populates the results page — one action, global effect.

**Trade-off observed:** JWT in `localStorage` is simple but vulnerable to XSS. The production-safe alternative is an `httpOnly` cookie — JavaScript cannot access it at all. For production: use cookies. For this lab: localStorage is acceptable.

---

## 📜 License

```
MIT License
Built for SL3003 Web Engineering · Lab 13 · Week 13
National University of Computer & Emerging Sciences — Chiniot-Faisalabad Campus
Instructor: Zaki Akram
```

---

<div align="center">

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=yourusername.lifepulse-mern)
&nbsp;
![Stars](https://img.shields.io/github/stars/yourusername/lifepulse-mern?style=social)

<br/>

⭐ **Star this repo if it helped you** ⭐

<br/>

*"Hope is something you give yourself —*
*that is the meaning of inner strength."*

**~ Uncle Iroh · Avatar: The Last Airbender**

<br/>

`SL3003` &nbsp;·&nbsp; `FAST-NUCES` &nbsp;·&nbsp; `Web Engineering` &nbsp;·&nbsp; `Lab 13` &nbsp;·&nbsp; `Zaki Akram`

</div>
