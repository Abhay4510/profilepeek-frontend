import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8800/api"

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

export const getInstagramAuthUrl = async () => {
  const response = await api.get("/auth/instagram/url")
  return response.data
}

export const handleInstagramCallback = async (code) => {
  const response = await api.post("/auth/instagram/callback", { code })
  return response.data
}

export const checkAuthStatus = async () => {
  const response = await api.get("/auth/status")
  return response.data
}

export const logout = async () => {
  const response = await api.post("/auth/logout")
  return response.data
}

export const getUserProfile = async () => {
  const response = await api.get("/profile")
  return response.data
}

export const updateUserProfile = async (profileData) => {
  const response = await api.put("/profile", profileData)
  return response.data
}

export const getMediaFeed = async () => {
  const response = await api.get("/media/feed")
  return response.data
}

export const getMediaComments = async (mediaId) => {
  const response = await api.get(`/media/comments/${mediaId}`)
  return response.data
}

export const addComment = async (mediaId, text) => {
  const response = await api.post(`/media/add/${mediaId}/reply`, { text })
  return response.data
}

export const addReply = async (parentCommentId, text) => {
  const response = await api.post("/media/comments/reply", { parentCommentId, text })
  return response.data
}

export default api
