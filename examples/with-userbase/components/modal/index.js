import { useState, useEffect } from 'react'
import userbase from 'userbase-js'

function LoginModal({ toggle, modalType, setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    setError('')
  }, [modalType])

  async function handleSignUp(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const user = await userbase.signUp({
        username,
        password,
        rememberMe: 'none',
      })
      setUser(user)
      setLoading(false)
      toggle(false)
    } catch (e) {
      setLoading(false)
      setError(e.message)
    }
  }

  async function handleLogIn(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const user = await userbase.signIn({
        username,
        password,
        rememberMe: 'none',
      })
      setUser(user)
      setLoading(false)
      toggle(false)
    } catch (e) {
      setLoading(false)
      setError(e.message)
    }
  }

  return (
    <form className="rounded bg-white p-8 shadow-md">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-purple-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-purple-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          id="password"
          type="password"
          placeholder="*******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <span
          className="cursor-pointer font-bold"
          onClick={() => toggle(false)}
        >
          Cancel
        </span>
        {modalType === 'logIn' ? (
          <button
            disabled={loading}
            className="btn-yellow"
            onClick={handleLogIn}
          >
            {loading ? 'Logging In ...' : 'Log In'}
          </button>
        ) : (
          <button
            disabled={loading}
            className="btn-yellow"
            onClick={handleSignUp}
          >
            {loading ? 'Signing up ...' : 'Sign Up'}
          </button>
        )}
      </div>
      <p className="font-bold text-red-500">{error}</p>
    </form>
  )
}

export default LoginModal
