import Link from 'next/link'

const Index = () => (
  <div className="bg-primary page container">
    <h1>Hello, world!</h1>
    <Link href="/about" className="btn btn-light">
      About us
    </Link>
  </div>
)

export default Index
