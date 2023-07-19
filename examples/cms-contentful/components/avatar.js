import ContentfulImage from './contentful-image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <ContentfulImage
          src={picture.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
