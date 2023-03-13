import Layout from '@/components/layout'
import Seo from '@/components/seo'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <Link href="about">
        <main className='h-screen flex justify-center items-center'>
          <div className="px-2 w-400 md:w-2/3 lg:w-1/3 border-4 border-accent">
            <h1 className="text-3xl mt-6 text-center text-accent-content">Kyubong CHOI</h1>
            <div className='my-6 flex flex-col mx-auto text-center'>
              <span className='text-xl'>Développeur Fullstack Junior</span>
              <span className='text-lg'>TypeScript | React | Next | Express | Nest</span>
            </div>
          </div>
        </main>
      </Link>
      <style jsx>{`
        main {
          background-image: url(https://miro.medium.com/max/12000/1*p9qBMe9Wql3Vx0f3tpcPOA.jpeg);
          background-size: cover;
          background-position: center center;
        }
      `}</style>
    </>
  )
}
