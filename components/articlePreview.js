import Link from 'next/link'
import Date from './../components/date'
import styles from './articlePreview.module.scss'
import { ButtonOutlined } from './../styledComponents/button'

export default function ArticlePreview(props) {
  const { id, title, description, author, date, image, image_desc, tag} = props
  return (
    <article className={styles.item}>
      {
        image &&
        <div className={styles.image}>
          <img src={`/images/articles/${image}`} alt={image_desc} />
        </div>

      }
      <div className={styles.body}>
        <Link href='/articles/[id]' as={`/articles/${id}`}>
          <a><h4>{title}</h4></a>
        </Link>
        <p>{description}</p>
        <ButtonOutlined>
          <Link href='/articles/[id]' as={`/articles/${id}`}>
            <a>Read More..</a>
          </Link>
        </ButtonOutlined>
      </div>
      <div className={styles.footer}>
        <div style={{ color: '#808080' }}>
          <Date dateString={date} />
          <span> &bull; 10 min read</span>
        </div>
      </div>
    </article>
  )
}

