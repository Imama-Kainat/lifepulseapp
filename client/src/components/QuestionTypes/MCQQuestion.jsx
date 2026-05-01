import React from 'react'
import './QuestionTypes.css'

export default function MCQQuestion({ question, value, onChange }) {
  return (
    <div className="q-mcq-list">
      {question.options.map((opt, i) => (
        <label key={i} className={`q-mcq-option ${value === i ? 'q-mcq-option--active' : ''}`}>
          <input type="radio" name={question.id} checked={value === i} onChange={() => onChange(i)} />
          <span>{opt}</span>
        </label>
      ))}
    </div>
  )
}
