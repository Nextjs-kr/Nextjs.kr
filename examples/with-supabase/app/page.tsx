import {
  createServerActionClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const resources = [
  {
    title: 'Cookie-based Auth and the Next.js App Router',
    subtitle:
      'This free course by Jon Meyers, shows you how to configure Supabase Auth to use cookies, and steps through some common patterns.',
    url: 'https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF',
  },
  {
    title: 'Supabase Auth Helpers Docs',
    subtitle:
      'This template has configured Supabase Auth to use cookies for you, but the docs are a great place to learn more.',
    url: 'https://supabase.com/docs/guides/auth/auth-helpers/nextjs',
  },
  {
    title: 'Supabase Next.js App Router Example',
    subtitle:
      'Want to see a code example containing some common patterns with Next.js and Supabase? Check out this repo!',
    url: 'https://github.com/supabase/supabase/tree/master/examples/auth/nextjs',
  },
]

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // This is a Protected Route that can only be accessed by authenticated users
  // users who are not signed in will be redirected to the `/login` route
  if (!user) {
    redirect('/login')
  }

  const signOut = async () => {
    'use server'
    const supabase = createServerActionClient({ cookies })
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <div className="mt-72 flex max-w-3xl flex-1 flex-col">
      <h1 className="mb-2 flex justify-between text-2xl">
        Hey, {user.email}
        <form action={signOut} className="ml-2 inline">
          <button className="text-sm text-gray-400">Logout</button>
        </form>
      </h1>

      <hr />

      <p className="mt-16 mb-16 text-gray-300">
        Here are some helpful resources to get you started! 👇
      </p>

      <div className="mb-16 flex h-60 gap-4">
        {resources.map(({ title, subtitle, url }) => (
          <a
            className="flex-1 rounded-md border border-gray-400 p-6 hover:bg-gray-800"
            href={url}
          >
            <h2 className="mb-2 font-bold">{title}</h2>
            <p className="text-sm text-gray-400">{subtitle}</p>
          </a>
        ))}
      </div>

      <p className="mb-16 text-gray-300">
        Ready to build your app? Head over to `app/page.tsx` 👉
      </p>

      <div className="rounded-md bg-gray-800 p-8 text-gray-300">
        <p className="mb-2 font-semibold text-gray-200">
          We have also included examples for creating a Supabase client in:
        </p>
        <ul className="ml-8 list-disc">
          <li>Client Components - `app/client-component-example/page.tsx`</li>
          <li>Server Components - `app/server-component-example/page.tsx`</li>
          <li>Server Actions - `app/server-action-example/page.tsx`</li>
          <li>Route Handlers - `app/route-handler-example/route.ts`</li>
          <li>Middleware - `middleware.ts`</li>
        </ul>
      </div>
    </div>
  )
}
