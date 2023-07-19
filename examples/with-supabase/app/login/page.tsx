'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [view, setView] = useState('sign-in')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    setView('check-email')
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log({ data, error })
    router.push('/')
  }

  return (
    <div className="flex w-full max-w-sm flex-1 flex-col justify-center gap-2">
      {view === 'check-email' ? (
        <p className="text-center text-gray-400">
          Check <span className="font-bold text-white">{email}</span> to
          continue signing up
        </p>
      ) : (
        <form
          className="flex w-full max-w-sm flex-1 flex-col justify-center gap-2"
          onSubmit={view === 'sign-in' ? handleSignIn : handleSignUp}
        >
          <label className="text-md text-gray-400" htmlFor="email">
            Email
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="you@example.com"
          />
          <label className="text-md text-gray-400" htmlFor="password">
            Password
          </label>
          <input
            className="mb-6 rounded-md border bg-inherit px-4 py-2"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="••••••••"
          />
          {view === 'sign-in' ? (
            <>
              <button className="mb-6 rounded bg-green-700 px-4 py-2 text-gray-200">
                Sign In
              </button>
              <p className="text-center text-sm text-gray-500">
                Don't have an account?
                <button
                  className="ml-1 text-white underline"
                  onClick={() => setView('sign-up')}
                >
                  Sign Up Now
                </button>
              </p>
            </>
          ) : null}
          {view === 'sign-up' ? (
            <>
              <button className="mb-6 rounded bg-green-700 px-4 py-2 text-gray-200">
                Sign Up
              </button>
              <p className="text-center text-sm text-gray-500">
                Already have an account?
                <button
                  className="ml-1 text-white underline"
                  onClick={() => setView('sign-in')}
                >
                  Sign In Now
                </button>
              </p>
            </>
          ) : null}
        </form>
      )}
    </div>
  )
}
