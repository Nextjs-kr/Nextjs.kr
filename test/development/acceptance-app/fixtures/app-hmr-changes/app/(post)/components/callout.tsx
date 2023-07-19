export const Callout = ({ emoji = null, text }) => (
  <div className="my-6 flex items-start bg-gray-200 p-3 text-base dark:bg-[#333] dark:text-gray-300">
    <span className="mr-2 block w-6 text-center text-xl">{emoji}</span>
    <span className="block grow">{text}</span>
  </div>
)
