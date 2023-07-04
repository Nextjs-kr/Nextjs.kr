import PostPreview from '../components/post-preview'

export default function MoreStories({ title, posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        {title}
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

// The data returned here will be send as `props` to the component
MoreStories.getCustomInitialProps = async function ({
  client,
  item,
  pageInSitemap,
}) {
  const postToExcludeContentID = pageInSitemap.contentID ?? -1
  const posts = await client.getPostsForMoreStories({ postToExcludeContentID })

  return {
    title: item.fields.title,
    posts,
  }
}
