import { useState, useEffect } from "react"
import { getMediaFeed } from "../services/api"
import LoadingSpinner from "../components/ui/LoadingSpinner"
import MediaCard from "../components/feed/MediaCard"
import toast from "react-hot-toast"

const FeedPage = () => {
  const [mediaItems, setMediaItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMediaFeed()
  }, [])

  const fetchMediaFeed = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await getMediaFeed()

      if (response.success && response.data && response.data.data) {
        setMediaItems(response.data.data)
      } else {
        throw new Error("Failed to fetch media feed")
      }
    } catch (error) {
      console.error("Media feed error:", error)
      setError("Failed to load your media feed. Please try again.")
      toast.error("Failed to load media feed")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">{error}</p>
          <button onClick={fetchMediaFeed} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (mediaItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold mb-2">No Media Found</h2>
          <p className="text-gray-600 mb-4">
            We couldn't find any posts in your Instagram feed. This could be because you haven't posted anything yet or
            because of API limitations.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Your Instagram Feed</h1>

        <div className="grid gap-8">
          {mediaItems.map((item) => (
            <MediaCard key={item.id} media={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeedPage
