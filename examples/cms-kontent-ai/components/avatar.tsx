import Image from './image'

type AvatarProps = {
  name: string
  picture: string
}

export default function Avatar({ name, picture }: AvatarProps) {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={picture}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
