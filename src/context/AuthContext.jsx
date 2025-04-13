import { createContext, useState, useEffect, useContext } from "react"
import { checkAuthStatus, logout } from "../services/api"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      verifyAuth()
    } else {
      setLoading(false)
    }
  }, [])

  const verifyAuth = async () => {
    try {
      setLoading(true)
      const response = await checkAuthStatus()

      if (response.success && response.isLoggedIn) {
        setUser({
          userId: response.userId,
          username: response.username,
          profilePicture: response.profilePicture,
        })
        setIsAuthenticated(true)
      } else {
        handleLogout()
      }
    } catch (error) {
      console.error("Auth verification error:", error)
      handleLogout()
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (token, userData) => {
    localStorage.setItem("token", token)

    setUser(userData)
    setIsAuthenticated(true)
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      localStorage.removeItem("token")
      setUser(null)
      setIsAuthenticated(false)
    }
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    login: handleLogin,
    logout: handleLogout,
    refreshUser: verifyAuth,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
