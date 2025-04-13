import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import LoadingSpinner from "../components/ui/LoadingSpinner"

const AuthSuccessPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { login } = useAuth()
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    const processAuth = () => {
      const token = searchParams.get("token")
      const userId = searchParams.get("userId")

      if (token && userId && !isProcessing) {
        setIsProcessing(true)

        login(token, { userId })

        const timer = setTimeout(() => {
          navigate("/profile")
        }, 1500)

        return () => clearTimeout(timer)
      } else if (!token || !userId) {
        navigate("/")
      }
    }

    processAuth()
  }, [searchParams, login, navigate, isProcessing])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-6">
          <LoadingSpinner size="large" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Authentication Successful!</h1>
        <p className="text-gray-600 mb-4">You've successfully connected your Instagram account.</p>
        <p className="text-gray-500">Redirecting you to your profile...</p>
      </div>
    </div>
  )
}

export default AuthSuccessPage
