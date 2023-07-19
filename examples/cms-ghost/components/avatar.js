import Image from 'next/image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        {picture && (
          <Image
            src={`${picture}?auto=format,compress,enhance&w=100&h=100`}
            layout="fill"
            className="rounded-full"
            alt={name}
          />
        )}
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
