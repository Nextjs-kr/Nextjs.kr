import { Caption } from './caption'

export const Snippet = ({ children, scroll = true, caption = null }) => (
  <div className="my-6">
    <pre
      className={`
      bg-gray-800
      p-4
      text-sm text-white
      dark:bg-[#222] dark:text-gray-300

      ${
        scroll
          ? 'overflow-scroll'
          : 'overflow-hidden whitespace-pre-wrap break-all'
      }
    `}
    >
      <code>{children}</code>
    </pre>

    {caption != null ? <Caption>{caption}</Caption> : null}
  </div>
)
