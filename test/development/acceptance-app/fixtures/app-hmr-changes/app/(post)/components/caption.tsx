import Balancer from 'react-wrap-balancer'
import type { ReactNode } from 'react'

export function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="my-3 text-center font-mono text-xs leading-normal text-gray-500">
      <Balancer>
        <span className="[&>a]:post-link">{children}</span>
      </Balancer>
    </p>
  )
}
