import { absoluteURL } from '../lib/api'
import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-16 md:gap-32 lg:gap-32">
        {posts.map((node) => (
          <PostPreview
            key={node.id}
            title={node.title}
            coverImage={{
              sourceUrl: absoluteURL(node.field_image.uri.url),
            }}
            date={node.created}
            author={{
              name: node.uid.field_name,
              avatar: {
                url: absoluteURL(node.uid.user_picture.uri.url),
              },
            }}
            slug={node.path.alias}
            excerpt={node.body.summary}
          />
        ))}
      </div>
    </section>
  )
}
