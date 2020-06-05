import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import LayoutPost from '../../components/layoutPost'
import Navigation from '../../components/navigation'
import Date from '../../components/date'
import Footer from '../../components/footer'
import { getAllArticlesWithSlug, getArticle } from '../../lib/articles'
import utilStyles from './../../styles/utils.module.css'

export default function Articles({ article }) {
  const router = useRouter()
  if (!router.isFallback && article.length == 0) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Navigation />
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {/** cover image */}
          <img
            src={`${article.coverImage.url.startsWith('/') ? process.env.NEXT_PUBLIC_API_URL : ''}${article.coverImage.url}`}
            style={{ marginTop: '5rem', objectFit: 'cover', height: '700px', width: '100%' }}
          />

          <LayoutPost>
            <Head>
              <title>{article.title}</title>
              {/** some meta for Google SEO ini nanti aja */}
              <meta
                name={article.title}
                content={article.excerpt}
              />
              <meta name="og:title" content={article.title} />
              <meta property="og:image" content={article.ogImage.url} />
            </Head>

            <article>
              <h1 className={utilStyles.headingLg}>{article.title}</h1>
              <div className={utilStyles.altText} style={{ display: 'flex' }}>
                <div>
                  <img
                    src={`${article.author.picture.url.startsWith('/') ? process.env.NEXT_PUBLIC_API_URL : ''}${article.author.picture.url}`}
                    style={{ marginRight: '0.6rem', borderRadius: '50%', height: '33px', width: '33px' }}
                  />
                </div>
                <span style={{ marginRight: '1em', color: 'black' }}>By {article.author.name} </span>
                <Date dateString={article.published_at} />
              </div>

              <ReactMarkdown source={article.content} style={{ lineHeight: '1.8rem' }} />
            </article>

          </LayoutPost>
          <Footer />
        </>
      )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const article = await getArticle(params.slug)
  return {
    props: {
      article: article,
    },
    unstable_revalidate: 1,
  }
}

export async function getStaticPaths() {
  const allArticles = await getAllArticlesWithSlug()
  return {
    paths: allArticles ? allArticles.map((article) => `/articles/${article.slug}`) : [],
    fallback: true,
  }
}
