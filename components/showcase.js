import styled from 'styled-components'

import styles from './showcase.module.scss'

import ArticlePreview from './../components/articlePreview'
import { ButtonOutlined } from './../styledComponents/button'

const ButtonOutlinedSM = styled(ButtonOutlined)`
  margin-top: 0;
  padding: 0.4em 2em;
  font-size: 0.8em;
`

export default function Showcase({ articles }) {

  return(
    <section className={styles.layout}>
      <div className={styles.bar}>
        <p>Most Recent</p>
        <ButtonOutlinedSM style={{ visibility: 'true' }}>view all</ButtonOutlinedSM>
      </div>

      <ul className={styles.streamContainer}>
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
      
    </section>
  )
}