import Head from 'next/head'

import { getSortedArticles } from './../lib/articles'
import Navigation from './../components/navigation'
import Hero from './../components/hero'
import Showcase from './../components/showcase'

export default function Home({ allArticles }) {
  return (
    <div>
      <Head>
        <title>GATW</title>
      </Head>

      <Navigation />

      <Hero />

      <Showcase articles={allArticles} />

    </div>
  )
}

export async function getStaticProps() {
  const allArticles = getSortedArticles()
  return {
    props: {
      allArticles
    }
  }
}
