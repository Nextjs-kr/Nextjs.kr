import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { AuthorType, ImgixType } from 'interfaces'

type PostPreviewProps = {
  title: string
  coverImage: ImgixType
  date: string
  excerpt: string
  author: AuthorType
  slug: string
}

const PostPreview = (props: PostPreviewProps) => {
  const { title, coverImage, date, excerpt, author, slug } = props

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.imgix_url} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.title} picture={author.metadata.picture.imgix_url} />
    </div>
  )
}

export default PostPreview
