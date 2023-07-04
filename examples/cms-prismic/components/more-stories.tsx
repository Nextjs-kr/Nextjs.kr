import { Content } from '@prismicio/client'

import PostPreview from '../components/post-preview'

type MoreStoriesProps = {
  posts: Content.PostDocument[]
}

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.uid}
            href={post.url}
            title={post.data.title}
            coverImage={post.data.cover_image}
            date={post.data.date}
            author={post.data.author}
            excerpt={post.data.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
