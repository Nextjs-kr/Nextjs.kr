import DotCmsImage from './dotcms-image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center ">
      <div className="relative mr-4 h-12 w-12">
        {picture?.idPath ? (
          <DotCmsImage
            src={picture?.idPath}
            layout="fill"
            className="rounded-full"
            alt={name}
          />
        ) : null}
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
