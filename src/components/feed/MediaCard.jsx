import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "react-feather"
import { getMediaComments } from "../../services/api"
import CommentSection from "./CommentSection"
import LoadingSpinner from "../ui/LoadingSpinner"

const MediaCard = ({ media }) => {
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([])
  const [loadingComments, setLoadingComments] = useState(false)

  const toggleComments = async () => {
    if (!showComments && comments.length === 0) {
      await fetchComments()
    }
    setShowComments(!showComments)
  }

  const fetchComments = async () => {
    try {
      setLoadingComments(true)
      const response = await getMediaComments(media.id)

      if (response.success && response.data) {
        setComments(response.data)
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error)
    } finally {
      setLoadingComments(false)
    }
  }

  const refreshComments = async () => {
    await fetchComments()
  }

  const formatTimestamp = (timestamp) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
    } catch (error) {
      return "some time ago"
    }
  }

  const renderMediaContent = () => {
    if (media.media_type === "VIDEO") {
      return (
        <div className="relative pb-[100%] bg-black">
          {media.thumbnail_url ? (
            <img
              src={media.thumbnail_url || "/placeholder.svg"}
              alt={media.caption || "Instagram video thumbnail"}
              className="absolute inset-0 w-full h-full object-contain"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white">Video content</div>
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <img
          src={media.media_url || "/placeholder.svg"}
          alt={media.caption || "Instagram post"}
          className="w-full h-auto"
        />
      )
    }
  }

  const renderProfileImage = () => {
    return (
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
        {media.username ? media.username.charAt(0).toUpperCase() : "U"}
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-4 flex items-center">
        {renderProfileImage()}
        <div className="ml-3">
          <p className="font-medium">{media.username}</p>
          {media.timestamp && <p className="text-xs text-gray-500">{formatTimestamp(media.timestamp)}</p>}
        </div>
        <button className="ml-auto text-gray-500 hover:text-gray-700">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="relative">
        {renderMediaContent()}

        {media.permalink && (
          <a
            href={media.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded"
          >
            View on Instagram
          </a>
        )}
      </div>

      <div className="p-4 flex items-center border-b border-gray-100">
        <button className="text-gray-700 hover:text-red-500 transition-colors mr-4">
          <Heart className="w-6 h-6" />
        </button>
        <button className="text-gray-700 hover:text-blue-500 transition-colors mr-4" onClick={toggleComments}>
          <MessageCircle className="w-6 h-6" />
        </button>
        <button className="text-gray-700 hover:text-green-500 transition-colors">
          <Share2 className="w-6 h-6" />
        </button>
        <button className="text-gray-700 hover:text-yellow-500 transition-colors ml-auto">
          <Bookmark className="w-6 h-6" />
        </button>
      </div>

      {media.like_count > 0 && (
        <div className="px-4 py-2">
          <p className="font-medium">{media.like_count} likes</p>
        </div>
      )}

      {media.caption && (
        <div className="px-4 py-2">
          <p>
            <span className="font-medium mr-2">{media.username}</span>
            {media.caption}
          </p>
        </div>
      )}

      {media.comments_count > 0 && !showComments && (
        <button className="px-4 py-2 text-gray-500 text-sm hover:text-gray-700" onClick={toggleComments}>
          View all {media.comments_count} comments
        </button>
      )}

      {showComments && (
        <div className="border-t border-gray-100">
          {loadingComments ? (
            <div className="p-4 flex justify-center">
              <LoadingSpinner size="small" color="gray" />
            </div>
          ) : (
            <CommentSection mediaId={media.id} comments={comments} onRefresh={refreshComments} />
          )}
        </div>
      )}
    </div>
  )
}

export default MediaCard
