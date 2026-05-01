import React, { createContext, useContext, useReducer, useEffect } from 'react'
import api from '../utils/axiosInstance'

const AuthContext = createContext(null)

const initialState = { user: null, token: localStorage.getItem('token'), loading: true }

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token)
      return { ...state, user: action.payload.user, token: action.payload.token, loading: false }
    case 'LOGOUT':
      localStorage.removeItem('token')
      return { ...state, user: null, token: null, loading: false }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    // Validate token on mount
    if (state.token) {
      api.get('/auth/me').catch(() => dispatch({ type: 'LOGOUT' })).finally(() => dispatch({ type: 'SET_LOADING', payload: false }))
    } else {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }, [])

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password })
    dispatch({ type: 'LOGIN_SUCCESS', payload: data })
  }

  const register = async (name, email, password) => {
    const { data } = await api.post('/auth/register', { name, email, password })
    dispatch({ type: 'LOGIN_SUCCESS', payload: data })
  }

  const logout = () => dispatch({ type: 'LOGOUT' })

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
