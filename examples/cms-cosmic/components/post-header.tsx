import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import { AuthorType, ImgixType } from 'interfaces'

type PostHeaderProps = {
  title: string
  coverImage: ImgixType
  date: string
  author: AuthorType
}

const PostHeader = (props: PostHeaderProps) => {
  const { title, coverImage, date, author } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        <Avatar
          name={author.title}
          picture={author.metadata.picture.imgix_url}
        />
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} url={coverImage.imgix_url} slug={''} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <Avatar
            name={author.title}
            picture={author.metadata.picture.imgix_url}
          />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
