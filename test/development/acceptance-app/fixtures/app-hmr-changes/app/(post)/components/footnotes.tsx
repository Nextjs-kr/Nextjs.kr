import { A } from './a'
import { P } from './p'

export const FootNotes = ({ children }) => (
  <div className="before:content[''] text-base before:m-auto before:my-10 before:block before:w-[200px] before:border-t before:border-gray-300 dark:before:border-[#444]">
    {children}
  </div>
)

export const Ref = ({ id }) => (
  <a
    href={`#f${id}`}
    id={`s${id}`}
    className="relative top-[-5px] text-xs no-underline"
  >
    [{id}]
  </a>
)

export const FootNote = ({ id, children }) => (
  <P>
    {id}.{' '}
    <A href={`#s${id}`} id={`f${id}`} className="no-underline">
      ^
    </A>{' '}
    {children}
  </P>
)
