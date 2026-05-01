import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(form.email, form.password)
      navigate('/survey')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-wrapper">
      {/* Geometric/grid css-doodle pattern for Login */}
      <css-doodle aria-hidden="true">{`
        :doodle {
          @grid: 15 / 100vw 100vh;
        }
        background: hsl(@calc(@index * 13 % 360), 60%, @r(15,30)%);
        clip-path: polygon(@r(0,50)% 0, 100% @r(0,50)%, @r(50,100)% 100%, 0 @r(50,100)%);
        opacity: @r(.1,.4);
        animation: geo @r(4s,8s) @r(0s,4s) infinite alternate;
        @keyframes geo {
          to { clip-path: polygon(@r(0,50)% 0, 100% @r(0,50)%, @r(50,100)% 100%, 0 @r(50,100)%); opacity: @r(.1,.5); }
        }
      `}</css-doodle>

      <div className="auth-card">
        <h1>Welcome Back 👋</h1>
        <p>Sign in to continue your LifePulse journey</p>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" value={form.password}
              onChange={e => setForm(p => ({ ...p, password: e.target.value }))} required />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="link-text">Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}
