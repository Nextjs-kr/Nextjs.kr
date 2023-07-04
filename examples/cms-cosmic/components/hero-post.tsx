import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { AuthorType, ImgixType } from 'interfaces'

type HeroPostProps = {
  title: string
  coverImage: ImgixType
  date: string
  excerpt: string
  author: AuthorType
  slug: string
}

const HeroPost = (props: HeroPostProps) => {
  const { title, coverImage, date, excerpt, author, slug } = props

  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} url={coverImage.imgix_url} slug={slug} />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar
            name={author.title}
            picture={author.metadata.picture.imgix_url}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
