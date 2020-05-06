import styles from './card.module.scss'

export default function Card(props) {

  const { title, description, author, date } = props

  return(
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className={styles.cardFooter}>
        <span>{author}</span>
        <time>{date}</time>
      </div>
    </div>
  )
}