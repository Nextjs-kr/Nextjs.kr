import markdownStyles from './markdown-styles.module.css'

type PostBodyProps = {
  content: string
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
