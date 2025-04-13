import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { User, ExternalLink, Edit2 } from "react-feather"
import { getUserProfile, updateUserProfile } from "../services/api"
import { useAuth } from "../context/AuthContext"
import LoadingSpinner from "../components/ui/LoadingSpinner"
import toast from "react-hot-toast"

const ProfilePage = () => {
  const {  refreshUser } = useAuth()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    bio: "",
    website: "",
  })

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      setLoading(true)
      const response = await getUserProfile()

      if (response.success) {
        setProfile(response.data)
        setEditForm({
          bio: response.data.bio || "",
          website: response.data.website || "",
        })
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error)
      toast.error("Failed to load profile data")
    } finally {
      setLoading(false)
    }
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditForm({
      ...editForm,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await updateUserProfile(editForm)

      if (response.success) {
        setProfile({
          ...profile,
          bio: editForm.bio,
          website: editForm.website,
        })
        setIsEditing(false)
        toast.success("Profile updated successfully")
        refreshUser()
      }
    } catch (error) {
      console.error("Failed to update profile:", error)
      toast.error("Failed to update profile")
    }
  }

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Failed to load profile data</p>
          <button onClick={fetchProfile} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0 flex justify-center md:justify-start p-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pink-500">
                {profile.profilePicture ? (
                  <img
                    src={profile.profilePicture || "/placeholder.svg"}
                    alt={profile.username}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 md:p-8 flex-1">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl md:text-3xl font-bold">@{profile.username}</h1>
                <button
                  onClick={handleEditToggle}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-pink-600"
                >
                  <Edit2 className="w-4 h-4" />
                  {isEditing ? "Cancel" : "Edit Profile"}
                </button>
              </div>

              {profile.fullName && <p className="text-lg font-medium mb-2">{profile.fullName}</p>}

              {isEditing ? (
                <form onSubmit={handleSubmit} className="mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Bio</label>
                    <textarea
                      name="bio"
                      value={editForm.bio}
                      onChange={handleInputChange}
                      className="input-field"
                      rows="3"
                      placeholder="Write something about yourself"
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Website</label>
                    <input
                      type="text"
                      name="website"
                      value={editForm.website}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    Save Changes
                  </button>
                </form>
              ) : (
                <>
                  {profile.bio && <p className="text-gray-700 mb-4">{profile.bio}</p>}

                  {profile.website && (
                    <a
                      href={profile.website.startsWith("http") ? profile.website : `https://${profile.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline mb-4"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {profile.website}
                    </a>
                  )}
                </>
              )}

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-800">{profile.mediaCount || 0}</p>
                  <p className="text-sm text-gray-600">Posts</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-800">{profile.followers || 0}</p>
                  <p className="text-sm text-gray-600">Followers</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-800">{profile.follows || 0}</p>
                  <p className="text-sm text-gray-600">Following</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 p-6">
          <h2 className="text-xl font-bold mb-4">Account Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Username</p>
              <p className="font-medium">{profile.username}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Account Type</p>
              <p className="font-medium capitalize">{profile.accountType || "Standard"}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Instagram ID</p>
              <p className="font-medium">{profile.id}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-md overflow-hidden mb-8 p-6 text-white">
          <h2 className="text-xl font-bold mb-2">View Your Media Feed</h2>
          <p className="mb-4">Check out your posts, view comments, and interact with your content.</p>
          <Link
            to="/feed"
            className="inline-block px-6 py-2 bg-white text-pink-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Go to Feed
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
