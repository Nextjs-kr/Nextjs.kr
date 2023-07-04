import type { ReactNode } from 'react'

export function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-5 border-l-4 pl-3 text-gray-500 dark:border-gray-600 dark:text-gray-400">
      {children}
    </blockquote>
  )
}
