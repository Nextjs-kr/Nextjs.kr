export type PostTitleProps = {
  title: string
}

export default function PostTitle({ title }: PostTitleProps) {
  return (
    <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
      {title}
    </h1>
  )
}
