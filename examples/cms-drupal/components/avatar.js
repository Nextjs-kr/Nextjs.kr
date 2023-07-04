import Image from 'next/image'

export default function Avatar({ author }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

  return (
    <>
      {author && (
        <div className="flex items-center">
          <div className="relative mr-4 h-12 w-12">
            <Image
              src={author.avatar.url}
              layout="fill"
              className="mr-4 h-12 w-12 rounded-full"
              alt={name}
            />
          </div>
          <div className="text-xl font-bold">{name}</div>
        </div>
      )}
    </>
  )
}
