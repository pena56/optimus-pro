import Hero from '@/components/Hero'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Optimus Pro</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Hero text='Welcome to Optimus Pro Inc.' />
      </Layout>
    </div>
  )
}
