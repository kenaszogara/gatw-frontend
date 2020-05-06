import Link from 'next/link'

import styles from './navigation.module.scss'

export default function Navigation() {
  return(
    <div>
      <nav className={styles.navigation}>
        <Link href='/'>
          <a className={styles.mrAuto}>
            <h3>GATW.</h3>
          </a>
        </Link>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='#about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='#contacts'>
              <a>Contacts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
