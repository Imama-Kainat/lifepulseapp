import React from 'react'
import './QuestionTypes.css'

export default function ImageChoiceQuestion({ question, value, onChange }) {
  return (
    <div className="q-image-grid">
      {question.options.map((opt, i) => (
        <button
          key={i}
          className={`q-image-card ${value === i ? 'q-image-card--active' : ''}`}
          onClick={() => onChange(i)}
          type="button"
        >
          <img src={opt.img} alt={opt.label} onError={e => { e.target.style.display='none' }} />
          <span>{opt.label}</span>
        </button>
      ))}
    </div>
  )
}
