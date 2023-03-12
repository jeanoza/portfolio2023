import Layout from '@/components/layout'
import Seo from '@/components/seo'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>
    </Layout>
  )
}
