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
  const { title, excerpt, published_at, author, content, ogImage, coverImage } = article

  const router = useRouter()
  if (!router.isFallback && !article.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Navigation />

      {/** cover image */}
      <img
        src={`${coverImage.url.startsWith('/') ? process.env.NEXT_PUBLIC_API_URL : ''}${coverImage.url}`}
        style={{ marginTop: '5rem', objectFit: 'cover', height: '700px', width: '100%'}}
      />
      
      <LayoutPost>
        <Head>
          <title>{title}</title>
          {/** some meta for Google SEO ini nanti aja */}
          <meta
            name={title}
            content={excerpt}
          />
          <meta name="og:title" content={title} />
          <meta property="og:image" content={ogImage.url} />
        </Head>

        <article>
          <h1 className={utilStyles.headingLg}>{title}</h1>
          <div className={utilStyles.altText} style={{ display: 'flex' }}>
            <div>
              <img 
                src={`${author.picture.url.startsWith('/') ? process.env.NEXT_PUBLIC_API_URL : ''}${author.picture.url}`} 
                style={{ marginRight: '0.6rem', borderRadius: '50%', height: '33px', width: '33px' }}
              />
            </div>
            <span style={{ marginRight: '1em', color: 'black' }}>By {author.name} </span>
            <Date dateString={published_at}/>
          </div>
          
          <ReactMarkdown source={content} style={{ lineHeight: '1.8rem' }} />
        </article>

      </LayoutPost>
      <Footer />
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
