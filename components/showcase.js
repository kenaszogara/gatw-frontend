import styles from './showcase.module.scss'
import ArticlePreview from './../components/articlePreview'

export default function Showcase({ articles }) {

  return(
    <section className={styles.layout}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {articles.map(article => (
            <li key={article.id}>
              <ArticlePreview
                article={article}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}