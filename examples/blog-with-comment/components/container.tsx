type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="container m-auto max-w-2xl px-4">{children}</div>
}
