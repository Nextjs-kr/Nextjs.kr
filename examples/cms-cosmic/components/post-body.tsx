import markdownStyles from './markdown-styles.module.css'

type PostBodyProps = {
  content: string
}

const PostBody = (props: PostBodyProps) => {
  const { content } = props
  return (
    <div className="mx-auto max-w-2xl">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
