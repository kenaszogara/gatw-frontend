import Head from 'next/head'

import { getAllArticlesForHome } from './../lib/articles'
import Navigation from './../components/navigation'
import Hero from './../components/hero'
import Showcase from './../components/showcase'
import Footer from './../components/footer'

export default function Home({ allArticles }) {
  return (
    <>

      <Head>
        <title>GATW</title>
      </Head>

      <Navigation />

      <Hero />

      <Showcase articles={allArticles} />

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const allArticles = (await getAllArticlesForHome()) || []
  return {
    props: {
      allArticles
    },
    unstable_revalidate: 1,
  }
}

