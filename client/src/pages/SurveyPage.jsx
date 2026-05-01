import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import questions, { CATEGORIES } from '../data/questions.js'
import SliderQuestion from '../components/QuestionTypes/SliderQuestion.jsx'
import RangeQuestion from '../components/QuestionTypes/RangeQuestion.jsx'
import EmojiScaleQuestion from '../components/QuestionTypes/EmojiScaleQuestion.jsx'
import ImageChoiceQuestion from '../components/QuestionTypes/ImageChoiceQuestion.jsx'
import MCQQuestion from '../components/QuestionTypes/MCQQuestion.jsx'
import api from '../utils/axiosInstance.js'
import { useAuth } from '../context/AuthContext.jsx'
import './SurveyPage.css'

const QUESTIONS_PER_PAGE = 10
const TOTAL_PAGES = 6

const DOODLE_PATTERNS = [
  `:doodle { @grid: 10 / 100% 120px; } background: hsl(@calc(@index*37%360),70%,@r(20,40)%); clip-path: polygon(50% 0%,100% 100%,0% 100%); opacity:@r(.2,.6);`,
  `:doodle { @grid: 8 / 100% 120px; } border-radius: 50%; background: radial-gradient(circle, hsl(@r(200,280),80%,50%), transparent); opacity:@r(.1,.5); animation: pulse @r(2s,4s) infinite alternate;@keyframes pulse{to{transform:scale(@r(.5,1.5));}}`,
  `:doodle { @grid: 12 / 100% 120px; } background: hsl(@r(120,200),@r(60,90)%,@r(20,40)%); transform: rotate(@r(45deg)); opacity:@r(.1,.4);`,
  `:doodle { @grid: 6 / 100% 120px; } background: linear-gradient(hsl(@r(280,360),70%,30%), transparent); border-radius: @r(50%); opacity:@r(.2,.5);`,
  `:doodle { @grid: 15 / 100% 120px; } background: hsl(@calc(@index*24%360),@r(50,80)%,@r(15,35)%); transform: scale(@r(.5,1.5)); opacity:@r(.1,.4);`,
  `:doodle { @grid: 10 / 100% 120px; } background: hsl(@r(60,160),80%,@r(20,45)%); clip-path: circle(@r(30%,50%) at @r(100)% @r(100)%); opacity:@r(.2,.5);`,
]

function renderQuestion(q, value, onChange) {
  switch (q.type) {
    case 'slider': return <SliderQuestion question={q} value={value} onChange={onChange} />
    case 'range': return <RangeQuestion question={q} value={value} onChange={onChange} />
    case 'emoji-scale': return <EmojiScaleQuestion question={q} value={value} onChange={onChange} />
    case 'image-choice': return <ImageChoiceQuestion question={q} value={value} onChange={onChange} />
    case 'mcq': return <MCQQuestion question={q} value={value} onChange={onChange} />
    default: return null
  }
}

export default function SurveyPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [page, setPage] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [doodleKey, setDoodleKey] = useState(0)

  useEffect(() => {
    api.get('/survey/me').then(res => { if (res.data.answers) setAnswers(res.data.answers) }).catch(() => {})
  }, [])

  const pageQuestions = questions.slice(page * QUESTIONS_PER_PAGE, (page + 1) * QUESTIONS_PER_PAGE)
  const answeredCount = Object.keys(answers).length
  const progressPct = Math.round((answeredCount / questions.length) * 100)
  const category = CATEGORIES[page]

  const handleNav = (dir) => {
    setPage(p => p + dir)
    setDoodleKey(k => k + 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      await api.post('/survey/submit', { answers })
      navigate('/results')
    } catch { setSubmitting(false) }
  }

  return (
    <div className="survey-page">
      {/* Header with changing css-doodle pattern per page */}
      <div className="survey-header">
        <css-doodle key={doodleKey} aria-hidden="true">{DOODLE_PATTERNS[page]}</css-doodle>
        <div className="survey-header-content">
          <div className="survey-header-top">
            <span className="survey-logo">LifePulse</span>
            <button className="btn-logout" onClick={logout}>Logout</button>
          </div>
          <h1>{category.icon} {category.label}</h1>
          <p>Page {page + 1} of {TOTAL_PAGES} — {pageQuestions.length} questions</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="survey-progress-wrap">
        <div className="survey-progress-bar">
          <div className="survey-progress-fill" style={{ width: `${progressPct}%`, background: category.color }} />
        </div>
        <span className="survey-progress-label">{progressPct}% complete ({answeredCount}/{questions.length})</span>
      </div>

      {/* Questions */}
      <div className="survey-questions">
        {pageQuestions.map((q, i) => (
          <div key={q.id} className={`survey-q-card ${answers[q.id] !== undefined ? 'survey-q-card--answered' : ''}`}>
            <div className="survey-q-number" style={{ background: category.color }}>
              {page * QUESTIONS_PER_PAGE + i + 1}
            </div>
            <p className="survey-q-text">{q.text}</p>
            {renderQuestion(q, answers[q.id], val => setAnswers(prev => ({ ...prev, [q.id]: val })))}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="survey-nav">
        {page > 0 && <button className="btn-nav" onClick={() => handleNav(-1)}>← Previous</button>}
        {page < TOTAL_PAGES - 1
          ? <button className="btn-nav btn-nav--next" onClick={() => handleNav(1)}>Next →</button>
          : <button className="btn-nav btn-nav--submit" onClick={handleSubmit} disabled={submitting}>
              {submitting ? 'Submitting...' : '🎉 Submit Survey'}
            </button>
        }
      </div>
    </div>
  )
}
