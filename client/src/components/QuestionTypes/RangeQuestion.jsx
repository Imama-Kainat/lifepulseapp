import React from 'react'
import './QuestionTypes.css'

export default function RangeQuestion({ question, value, onChange }) {
  const val = value ?? Math.round((question.min + question.max) / 2)
  return (
    <div className="q-container">
      <div className="q-value-display">
        <span className="q-value">{val}</span>
        <span className="q-unit">{question.unit}</span>
      </div>
      <input
        type="range"
        className="q-slider q-slider--range"
        min={question.min}
        max={question.max}
        step={question.step}
        value={val}
        onChange={e => onChange(Number(e.target.value))}
      />
      <div className="q-range-labels">
        <span>{question.min} (Low)</span>
        <span>{question.max} (High)</span>
      </div>
    </div>
  )
}
