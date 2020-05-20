import styles from './backToTop.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BackToTop() {
  return(
    <>
      <div id='top'></div>
      <a className={styles.backtotop} href='#top'>
        <FontAwesomeIcon icon={['fas', 'chevron-up']} />
      </a>
    </>
  )
}