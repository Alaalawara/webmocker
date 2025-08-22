// src/context/UserContext.jsx
import { createContext, useEffect, useState, useCallback } from 'react'
import { getMe } from '../components/Api'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const refreshUser = useCallback(async () => {
    try {
      const data = await getMe()
      setUser(data?.user || null)
      localStorage.setItem('user-info', JSON.stringify(data?.user || null))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    // Load from server session on mount
    refreshUser()
  }, [refreshUser])

  return (
    <UserContext.Provider value={{ user, setUser, loading, refreshUser }}>
      {children}
    </UserContext.Provider>
  )
}
