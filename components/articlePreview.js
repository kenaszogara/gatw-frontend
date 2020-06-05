import Link from 'next/link'
import Date from './../components/date'
import styles from './articlePreview.module.scss'
import { ButtonOutlined } from './../styledComponents/button'

export default function ArticlePreview({ article }) {
  const { title, slug, excerpt, published_at, coverImage, author } = article

  const prefix = coverImage.url.startsWith('/') ? process.env.NEXT_PUBLIC_API_URL : '' 
  return (
    <article className={styles.item}>
      <div className={styles.image}>
        <img 
          src={`${prefix}${coverImage.url}`}
          alt={coverImage.name} 
        />
      </div>

      <div className={styles.body}>
        <Link href='/articles/[id]' as={`/articles/${slug}`}>
          <a><h4>{title}</h4></a>
        </Link>
        <p>{excerpt}</p>
        <Link href='/articles/[id]' as={`/articles/${slug}`}>
            <a><ButtonOutlined>Read More..</ButtonOutlined></a>
          </Link>
      </div>

      <div className={styles.footer}>
        {author.name}
        <div style={{ color: '#808080' }}>
          <Date dateString={published_at} />
        </div>
      </div>
    </article>
  )
}

