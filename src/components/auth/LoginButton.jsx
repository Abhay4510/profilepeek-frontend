import { useState } from "react"
import { Instagram } from "react-feather"
import { getInstagramAuthUrl } from "../../services/api"
import LoadingSpinner from "../ui/LoadingSpinner"

const LoginButton = () => {
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      const response = await getInstagramAuthUrl()

      if (response.success && response.authUrl) {
        window.location.href = response.authUrl
      }
    } catch (error) {
      console.error("Failed to get Instagram auth URL:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleLogin}
      disabled={loading}
      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70"
    >
      {loading ? <LoadingSpinner size="small" color="white" /> : <Instagram className="w-5 h-5" />}
      <span>Login with Instagram</span>
    </button>
  )
}

export default LoginButton
