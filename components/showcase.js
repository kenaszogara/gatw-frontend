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
                slug={article.slug}
                title={article.title.rendered}
                excerpt={article.acf.excerpt}
                date={article.date}
                author={article.author}
                image={article.acf.featured_image.url}
                image_alt={article.acf.featured_image.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}