import Head from 'next/head'
import Link from 'next/link'
import styles from './layoutPost.module.scss'

export default function LayoutPost({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.content}>
        {children}
      </main>

      <div className={styles.backToHome}>
        <Link href="/">
          <a style={{ textDecoration: 'none' }}>← Back to home</a>
        </Link>
      </div>
      
    </div>
  )
}
