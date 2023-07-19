import Avatar from '@components/avatar'
import CoverImage from '@components/cover-image'
import PostTitle from '@components/post-title'

export default function PostHeader({ title, coverImage, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        {author.length ? (
          <Avatar
            name={`${author[0].firstName} ${author[0].lastName}`}
            picture={author[0].profilePhoto}
          />
        ) : null}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage
          title={title}
          width={2000}
          height={1000}
          src={coverImage.idPath}
          objectFit="cover"
          layout={'intrinsic'}
        />
      </div>
    </>
  )
}
