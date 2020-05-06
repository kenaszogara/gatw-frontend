import Link from 'next/link'

import Date from './../components/date'
import styles from './articlePreview.module.scss'

export default function ArticlePreview(props) {
  const { id, title, description, author, date, image, image_desc, tag} = props
  return (
    <article className={styles.streamItem}>
      <div className={styles.streamPreview}>
        <span style={{ color: '#808080' }}>#{tag}</span>
        <Link href='/articles/[id]' as={`/articles/${id}`}>
          <a><h4>{title}</h4></a>
        </Link>
        <p>{description}</p>
        <div className={styles.streamPreviewFooter}>
          <p>By {author}</p>

          <div style={{ color: '#808080' }}>
            <Date dateString={date}/>
            <span> &bull; 10 min read</span>
          </div>
        </div>
      </div>
      {
        image &&
        <div className={styles.streamImage}>
          <img src={`/images/articles/${image}`} alt={image_desc} />
        </div>
        
      }
      
    </article>
  )
}

