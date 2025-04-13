import { useState } from "react"
import { Send } from "react-feather"
import { addComment } from "../../services/api"
import CommentItem from "./CommentItem"
import toast from "react-hot-toast"

const CommentSection = ({ mediaId, comments, onRefresh }) => {
  const [newComment, setNewComment] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!newComment.trim()) return

    try {
      setSubmitting(true)
      const response = await addComment(mediaId, newComment)

      if (response.success) {
        setNewComment("")
        toast.success("Comment added successfully")

        if (onRefresh) {
          await onRefresh()
        }
      }
    } catch (error) {
      console.error("Failed to add comment:", error)
      toast.error("Failed to add comment")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="p-4">
      <h3 className="font-medium mb-4">Comments</h3>

      {comments.length === 0 ? (
        <p className="text-gray-500 text-sm mb-4">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-4 mb-4 max-h-80 overflow-y-auto">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} onRefresh={onRefresh} />
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
          disabled={submitting}
        />
        <button
          type="submit"
          className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full disabled:opacity-50"
          disabled={submitting || !newComment.trim()}
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}

export default CommentSection
