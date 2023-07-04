import './globals.css'

import Link from 'next/link'

import { graphql } from '../gql'
import { grafbase } from '../lib/grafbase'

export const revalidate = 0

const GetAllPostsDocument = graphql(/* GraphQL */ `
  query GetAllPosts($first: Int!) {
    postCollection(first: $first) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`)

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { postCollection } = await grafbase.request(GetAllPostsDocument, {
    first: 50,
  })

  return (
    <html lang="en">
      <head>
        <title>Grafbase + Next.js 13</title>
      </head>
      <body>
        <div className="flex">
          <nav className="flex h-screen w-[350px] flex-col justify-between overflow-y-auto bg-gray-100">
            <ul className="space-y-2 p-8">
              <li className="mb-6">
                <Link
                  href="/"
                  className="block rounded-md bg-white py-2 px-3 text-gray-600 shadow-sm transition hover:text-gray-800"
                >
                  Home
                </Link>
              </li>
              <li className="px-3 py-2 text-xs font-semibold uppercase text-gray-800">
                Posts
              </li>
              {postCollection?.edges?.map((edge) =>
                edge?.node ? (
                  <li key={edge.node.id}>
                    <Link
                      href={`/posts/${edge.node.slug}`}
                      className="block rounded-md bg-white py-2 px-3 text-gray-600 shadow-sm transition hover:text-gray-800"
                    >
                      {edge.node.title}
                    </Link>
                  </li>
                ) : null
              )}
              <li>
                <Link
                  href="/posts/not-found"
                  className="block rounded-md bg-white py-2 px-3 text-gray-600 shadow-sm transition hover:text-gray-800"
                >
                  Show 404 page
                </Link>
              </li>
            </ul>
          </nav>
          <main className="flex-1 p-6 md:p-24">
            <div className="mx-auto max-w-3xl">
              <div className="prose max-w-none">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
