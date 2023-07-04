import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import { Author } from '@/viewmodels/author'

type PostHeaderType = {
  title: string
  coverImage: string
  date: string | null
  author: Author
}

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
}: PostHeaderType) {
  return (
    <>
      <PostTitle title={title} />
      <div className="hidden md:mb-12 md:block">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="-mx-5 mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
