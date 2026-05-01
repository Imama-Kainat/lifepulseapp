import React from 'react'
import './QuestionTypes.css'

export default function EmojiScaleQuestion({ question, value, onChange }) {
  return (
    <div className="q-emoji-row">
      {question.options.map((emoji, i) => (
        <button
          key={i}
          className={`q-emoji-btn ${value === i ? 'q-emoji-btn--active' : ''}`}
          onClick={() => onChange(i)}
          type="button"
        >
          <span className="q-emoji">{emoji}</span>
          <span className="q-emoji-label">{question.labels[i]}</span>
        </button>
      ))}
    </div>
  )
}
