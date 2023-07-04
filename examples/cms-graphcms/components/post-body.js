import postStyles from './post-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div
      className={`post mx-auto max-w-2xl ${postStyles.post}`}
      dangerouslySetInnerHTML={{ __html: content?.html }}
    />
  )
}
