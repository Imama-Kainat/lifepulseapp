import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await register(form.name, form.email, form.password)
      navigate('/survey')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-wrapper">
      {/* Organic/flowing css-doodle pattern for Register */}
      <css-doodle aria-hidden="true">{`
        :doodle {
          @grid: 8 / 100vw 100vh;
        }
        background: radial-gradient(circle at @r(20%,80%) @r(20%,80%),
          hsl(@r(200,300), @r(50,80)%, @r(20,40)%),
          transparent @r(40%,70%));
        border-radius: @r(30%,70%) @r(30%,70%) @r(30%,70%) @r(30%,70%) / @r(30%,70%) @r(30%,70%) @r(30%,70%) @r(30%,70%);
        opacity: @r(.2,.6);
        animation: blob @r(5s,10s) @r(0s,5s) infinite alternate ease-in-out;
        @keyframes blob {
          to {
            border-radius: @r(30%,70%) @r(30%,70%) @r(30%,70%) @r(30%,70%) / @r(30%,70%) @r(30%,70%) @r(30%,70%) @r(30%,70%);
            transform: scale(@r(.8,1.3)) translate(@r(-20px,20px), @r(-20px,20px));
          }
        }
      `}</css-doodle>

      <div className="auth-card">
        <h1>Join LifePulse ✨</h1>
        <p>Create your account and discover yourself</p>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Your name" value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Min 8 characters" value={form.password}
              onChange={e => setForm(p => ({ ...p, password: e.target.value }))} required minLength={8} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="link-text">Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
    </div>
  )
}
