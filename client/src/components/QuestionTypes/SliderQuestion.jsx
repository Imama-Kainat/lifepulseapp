import React from 'react'
import './QuestionTypes.css'

export default function SliderQuestion({ question, value, onChange }) {
  const val = value ?? question.min
  return (
    <div className="q-container">
      <div className="q-value-display">
        <span className="q-value">{val}</span>
        <span className="q-unit">{question.unit}</span>
      </div>
      <input
        type="range"
        className="q-slider"
        min={question.min}
        max={question.max}
        step={question.step}
        value={val}
        onChange={e => onChange(Number(e.target.value))}
      />
      <div className="q-range-labels">
        <span>{question.min}</span>
        <span>{question.max}</span>
      </div>
    </div>
  )
}
