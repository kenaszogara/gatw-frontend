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
                id={article.id}
                tag={article.tag}
                title={article.title}
                description={article.description}
                author={article.author}
                date={article.date}
                image={article.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}