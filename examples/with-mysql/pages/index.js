import Head from 'next/head'
import Product from '../components/Product'
import prisma from '../lib/prisma'

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>PlanetScale Next.js Quickstart</title>
        <meta name="description" content="PlanetScale Quickstart for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-4xl p-10">
        <h1 className="mb-4 text-center text-6xl font-bold">Next.js Starter</h1>
        <p className="mb-20 text-center text-xl">
          🔥 Shop from the hottest items in the world 🔥
        </p>
        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2  md:grid-cols-3">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const data = await prisma.product.findMany({
    include: {
      category: true,
    },
  })

  //convert decimal value to string to pass through as json
  const products = data.map((product) => ({
    ...product,
    price: product.price.toString(),
  }))
  return {
    props: { products },
  }
}
