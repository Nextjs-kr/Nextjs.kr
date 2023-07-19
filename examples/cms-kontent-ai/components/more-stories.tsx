import { Post } from '@/viewmodels/post'
import PostPreview from './post-preview'

type MoreStoriesProps = { posts: Array<Post> }

export default function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
