import Link from 'next/link'
import { DateField, ImageField, TitleField } from '@prismicio/types'
import { PrismicText } from '@prismicio/react'
import { asText, isFilled } from '@prismicio/helpers'

import { AuthorContentRelationshipField } from '../lib/types'

import Avatar from '../components/avatar'
import Date from '../components/date'

import CoverImage from './cover-image'

type PostPreviewProps = {
  title: TitleField
  coverImage: ImageField
  date: DateField
  excerpt: string
  author: AuthorContentRelationshipField
  href: string
}

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  href,
}: PostPreviewProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={asText(title)} href={href} image={coverImage} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={href} className="hover:underline">
          <PrismicText field={title} />
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateField={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      {isFilled.contentRelationship(author) && (
        <Avatar name={asText(author.data.name)} picture={author.data.picture} />
      )}
    </div>
  )
}
