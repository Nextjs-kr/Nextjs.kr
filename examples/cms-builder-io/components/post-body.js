import { BUILDER_CONFIG } from '@/lib/constants'
import { BuilderComponent } from '@builder.io/react'
export default function PostBody({ content }) {
  return (
    <div className="mx-auto max-w-2xl">
      <BuilderComponent
        options={{ includeRefs: true }}
        model={BUILDER_CONFIG.postsModel}
        content={content}
      />
    </div>
  )
}
