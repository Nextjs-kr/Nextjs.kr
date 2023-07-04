import { useAuth0 } from '@auth0/auth0-react'

type CommentFormProps = {
  text: string
  setText: Function
  onSubmit: (e: React.FormEvent) => Promise<void>
}

export default function CommentForm({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0()

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="flex max-h-40 w-full resize-y rounded bg-gray-200 p-3 text-gray-900 placeholder-gray-500"
        rows={2}
        placeholder={
          isAuthenticated
            ? `What are your thoughts?`
            : 'Please login to leave a comment'
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated}
      />

      <div className="mt-4 flex items-center">
        {isAuthenticated ? (
          <div className="flex items-center space-x-6">
            <button className="rounded bg-blue-600 py-2 px-4 text-white hover:bg-blue-700 disabled:opacity-40">
              Send
            </button>
            <button
              className="text-gray-500"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="rounded bg-blue-600 py-2 px-4 text-white hover:bg-blue-700 disabled:opacity-40"
            onClick={() => loginWithPopup()}
          >
            Log In
          </button>
        )}
      </div>
    </form>
  )
}
