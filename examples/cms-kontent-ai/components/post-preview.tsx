import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Post } from '@/viewmodels/post'

type PostPreviewProps = {
  post: Post
}

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={post.slug} title={post.title} src={post.coverImage} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={post.date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{post.excerpt}</p>
      <Avatar name={post.author.name} picture={post.author.picture} />
    </div>
  )
}
