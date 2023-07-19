import Image from 'next/image'
import AuthorType from '../types/authorType'

type Props = {
  author: AuthorType
}

export default function Avatar({ author }: Props) {
  const name: string = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={author.avatar.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
