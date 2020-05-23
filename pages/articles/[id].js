import Head from 'next/head'
import LayoutPost from './../../components/layoutPost'
import Navigation from './../../components/navigation'
import Date from './../../components/date'
import Footer from './../../components/footer'
import { getArticlesPathId, getArticleBySlug, getAuthor } from './../../lib/articles'
import utilStyles from './../../styles/utils.module.css'

export default function Articles({ article, author }) {
  const { title, acf, date, content } = article
  const { name, avatar_urls } = author
  return (
    <>
      <Navigation />
      <LayoutPost>
        <Head>
          <title>{title.rendered}</title>
          {/** some meta for Google SEO ini nanti aja */}
          <meta
            name={title.rendered}
            content={acf.excerpt}
          />
          <meta name="og:title" content={title.rendered} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <article>
          <h1 className={utilStyles.headingLg}>{title.rendered}</h1>
          <p className={utilStyles.subText}>{acf.excerpt}</p>
          <div className={utilStyles.altText} style={{ display: 'flex' }}>
            <div>
              <img src={avatar_urls[24]} style={{ marginRight: '0.6rem', borderRadius: '50%' }}/>
            </div>
            <span style={{ marginRight: '1em', color: 'black' }}>By {name} </span>
            <Date dateString={date}/>
          </div>
          
          <div style={{ lineHeight: '1.8rem'}} dangerouslySetInnerHTML={{ __html: content.rendered }} />
        </article>
      </LayoutPost>
      <Footer />
    </>
    
  )
}


export async function getStaticPaths() {
  const paths = await getArticlesPathId()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const article = await getArticleBySlug(params.id)
  const author = await getAuthor(article.author)
  return {
    props: {
      article: article,
      author: author,
    }
  }
}