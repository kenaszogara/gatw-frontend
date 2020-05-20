import styles from './footer.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <div>
        <h3>Contacts | <a href="mailto:adnyana.wga@gmail.com?subject=Hello From Reader" className={styles.email}>adnyana.wga@gmail.com</a></h3>
        
        <a href='https://www.instagram.com/gioadnyana/'>
          <FontAwesomeIcon icon={['fab', 'instagram']} className={styles.icon} />
        </a>
        <p className={styles.logo}>GATW.</p>
      </div>
    </footer>
  )
}