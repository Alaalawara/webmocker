// src/ProtectedRoute.jsx
import { useContext, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { UserContext } from './context/UserContext'

export default function ProtectedRoute() {
  const { user, loading, refreshUser } = useContext(UserContext)
  const location = useLocation()

  useEffect(() => {
    if (!user) refreshUser()
  }, []) // eslint-disable-line

  if (loading) return <div className="p-8">Loading…</div>
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />
  return <Outlet />
}
