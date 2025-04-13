import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { MessageCircle, Heart } from "react-feather"
import { addReply } from "../../services/api"
import toast from "react-hot-toast"

const CommentItem = ({ comment, onRefresh }) => {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [replyText, setReplyText] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [showReplies, setShowReplies] = useState(false)

  const formatTimestamp = (timestamp) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
    } catch (error) {
      return "some time ago"
    }
  }

  const handleReplySubmit = async (e) => {
    e.preventDefault()

    if (!replyText.trim()) return

    try {
      setSubmitting(true)
      const response = await addReply(comment.id, replyText)

      if (response.success) {
        setReplyText("")
        setShowReplyForm(false)
        toast.success("Reply added successfully")

        setShowReplies(true)

        if (onRefresh) {
          await onRefresh()
        }
      }
    } catch (error) {
      console.error("Failed to add reply:", error)
      toast.error("Failed to add reply")
    } finally {
      setSubmitting(false)
    }
  }

  const toggleReplyForm = () => {
    setShowReplyForm(!showReplyForm)
    if (!showReplyForm) {
      setReplyText("")
    }
  }

  const toggleReplies = () => {
    setShowReplies(!showReplies)
  }

  const hasReplies = comment.replies && comment.replies.data && comment.replies.data.length > 0

  const renderAvatar = (username) => {
    return (
      <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
        {username ? username.charAt(0).toUpperCase() : "U"}
      </div>
    )
  }

  return (
    <div className="comment-item">
      <div className="flex items-start gap-2">
        {renderAvatar(comment.username)}

        <div className="flex-1">
          <div className="bg-gray-100 rounded-lg px-3 py-2">
            <p className="font-medium text-sm">{comment.username}</p>
            <p className="text-sm">{comment.text}</p>
          </div>

          <div className="flex items-center gap-4 mt-1 ml-1 text-xs text-gray-500">
            {comment.timestamp && <span>{formatTimestamp(comment.timestamp)}</span>}

            <button onClick={toggleReplyForm} className="font-medium hover:text-gray-700">
              Reply
            </button>

            {comment.like_count > 0 && (
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                <span>{comment.like_count}</span>
              </div>
            )}
          </div>

          {showReplyForm && (
            <form onSubmit={handleReplySubmit} className="mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder={`Reply to ${comment.username}...`}
                  className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                  disabled={submitting}
                />
                <button
                  type="submit"
                  className="px-3 py-1 text-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full disabled:opacity-50"
                  disabled={submitting || !replyText.trim()}
                >
                  Post
                </button>
              </div>
            </form>
          )}

          {hasReplies && (
            <button
              onClick={toggleReplies}
              className="flex items-center gap-1 mt-2 text-xs text-gray-500 hover:text-gray-700"
            >
              <MessageCircle className="w-3 h-3" />
              <span>
                {showReplies ? "Hide" : "View"} {comment.replies.data.length}{" "}
                {comment.replies.data.length === 1 ? "reply" : "replies"}
              </span>
            </button>
          )}

          {showReplies && hasReplies && (
            <div className="mt-2 ml-4 space-y-2">
              {comment.replies.data.map((reply) => (
                <div key={reply.id} className="flex items-start gap-2">
                  {renderAvatar(reply.username)}

                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg px-3 py-2">
                      <p className="font-medium text-xs">{reply.username}</p>
                      <p className="text-xs">{reply.text}</p>
                    </div>

                    <div className="flex items-center gap-4 mt-1 ml-1 text-xs text-gray-500">
                      {reply.timestamp && <span>{formatTimestamp(reply.timestamp)}</span>}

                      {reply.like_count > 0 && (
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{reply.like_count}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommentItem
