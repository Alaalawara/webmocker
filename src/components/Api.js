// src/components/Api.js
const API_BASE = import.meta.env.VITE_API_BASE

export async function getMe() {
  const res = await fetch(`${API_BASE}/api/me`, { credentials: 'include' })
  return res.json()
}

export async function logout() {
  const res = await fetch(`${API_BASE}/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  })
  return res.json()
}
