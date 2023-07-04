import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post._slug}
            title={post.title}
            coverImage={post.cover[0].cdn_files[0].url}
            date={post.date}
            author={post.author[0]}
            slug={post._slug}
            excerpt={post.summary}
          />
        ))}
      </div>
    </section>
  )
}
