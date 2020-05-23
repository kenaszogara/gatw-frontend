import Link from 'next/link'
import Date from './../components/date'
import styles from './articlePreview.module.scss'
import { ButtonOutlined } from './../styledComponents/button'

export default function ArticlePreview(props) {
  const { id, slug, title, excerpt, author, date, image, image_alt } = props
  return (
    <article className={styles.item}>
      {
        image &&
        <div className={styles.image}>
          <img src={image} alt={image_alt} />
        </div>

      }
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
        <div style={{ color: '#808080' }}>
          <Date dateString={date} />
          <span style={{ visibility: 'hidden' }}> &bull; {author}</span>
        </div>
      </div>
    </article>
  )
}

