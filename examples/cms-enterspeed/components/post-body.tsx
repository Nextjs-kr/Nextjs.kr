import styles from './post-body.module.css'

type Props = {
  content: string
}

export default function PostBody({ content }: Props) {
  return (
    <div className="mx-auto max-w-2xl">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
