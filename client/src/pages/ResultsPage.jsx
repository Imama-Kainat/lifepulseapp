import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts'
import api from '../utils/axiosInstance.js'
import questions, { CATEGORIES } from '../data/questions.js'
import { useAuth } from '../context/AuthContext.jsx'
import './ResultsPage.css'

function computeScore(answers, category) {
  const qs = questions.filter(q => q.category === category)
  if (!qs.length) return 0
  let total = 0, count = 0
  qs.forEach(q => {
    const val = answers[q.id]
    if (val === undefined) return
    const max = q.max ?? (q.options?.length - 1) ?? 10
    const min = q.min ?? 0
    const norm = Math.round(((val - min) / (max - min)) * 10)
    total += norm
    count++
  })
  return count ? Math.round(total / count) : 0
}

export default function ResultsPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [answers, setAnswers] = useState(null)

  useEffect(() => {
    api.get('/survey/me').then(res => setAnswers(res.data.answers || {})).catch(() => setAnswers({}))
  }, [])

  if (!answers) return <div className="results-loading"><div className="spinner"/>Loading your results...</div>

  const scores = CATEGORIES.map(cat => ({
    category: cat.label,
    icon: cat.icon,
    score: computeScore(answers, cat.key),
    color: cat.color,
    fullMark: 10,
  }))

  return (
    <div className="results-page">
      <div className="results-header">
        <div>
          <h1>Your LifePulse Results 🌟</h1>
          <p>Hello {user?.name} — here's a snapshot of your life across 6 dimensions</p>
        </div>
        <div className="results-header-btns">
          <button className="btn-outline" onClick={() => navigate('/survey')}>Retake Survey</button>
          <button className="btn-logout" onClick={logout}>Logout</button>
        </div>
      </div>

      <div className="results-charts">
        {/* Radar chart */}
        <div className="results-chart-card">
          <h2>Life Balance Radar</h2>
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={scores}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="category" tick={{ fill: '#a78bfa', fontSize: 12 }} />
              <Radar name="Score" dataKey="score" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Bar chart */}
        <div className="results-chart-card">
          <h2>Score per Category</h2>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={scores} layout="vertical" margin={{ left: 20 }}>
              <XAxis type="number" domain={[0, 10]} tick={{ fill: '#a78bfa', fontSize: 11 }} />
              <YAxis type="category" dataKey="category" tick={{ fill: '#cbd5e1', fontSize: 11 }} width={110} />
              <Tooltip contentStyle={{ background: '#1e1e35', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }} />
              <Bar dataKey="score" radius={[0, 6, 6, 0]}>
                {scores.map((s, i) => <Cell key={i} fill={s.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Score cards */}
      <div className="results-cards">
        {scores.map(s => (
          <div key={s.category} className="results-score-card">
            <span className="results-icon">{s.icon}</span>
            <h3>{s.category}</h3>
            <div className="results-score-bar">
              <div className="results-score-fill" style={{ width: `${s.score * 10}%`, background: s.color }} />
            </div>
            <span className="results-score-value" style={{ color: s.color }}>{s.score}/10</span>
          </div>
        ))}
      </div>

      <p className="results-footer">Results saved to your account. You can retake the survey anytime.</p>
    </div>
  )
}
