import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        <Avatar author={author} />
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}
