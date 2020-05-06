import Head from 'next/head'
import LayoutPost from './../../components/layoutPost'
import Navigation from './../../components/navigation'
import Date from './../../components/date'
import { getArticlesId, getArticle } from './../../lib/articles'
import utilStyles from './../../styles/utils.module.css'

export default function Articles({ article }) {
  const { title, description, author, date, image, image_desc, content, tag } = article
  return (
    <>
      <Navigation />
      <LayoutPost>
        <Head>
          <title>{title}</title>
          {/** some meta for Google SEO ini nanti aja */}
          <meta
            name={title}
            content={description}
          />
          <meta name="og:title" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <article>
          <h1 className={utilStyles.headingLg}>{title}</h1>
          <p className={utilStyles.subText}>{description}</p>
          <div className={utilStyles.altText} >
            <span style={{ marginRight: '1em', color: 'black' }}>By {author}</span>
            <Date dateString={date}/>
          </div>
          
          {
            image &&
            <div style={{
              margin: '2em 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img src={`/images/articles/${image}`} alt={image_desc} />
              <p className={utilStyles.altText}>{image_desc}</p>
            </div>
          }
          
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </LayoutPost>
    </>
    
  )
}


export async function getStaticPaths() {
  const paths = getArticlesId()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const article = await getArticle(params.id)
  return {
    props: {
      article
    }
  }
}