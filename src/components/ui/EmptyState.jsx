import { Instagram } from "react-feather"

const EmptyState = ({ title, message, actionText, onAction }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-pink-100 p-4 rounded-full mb-4">
        <Instagram className="w-10 h-10 text-pink-500" />
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-md">{message}</p>
      {actionText && onAction && (
        <button onClick={onAction} className="btn-primary">
          {actionText}
        </button>
      )}
    </div>
  )
}

export default EmptyState
