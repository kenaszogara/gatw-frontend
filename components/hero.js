import Head from 'next/head'
import styles from './hero.module.scss'
import { ButtonOutlined, ButtonRounded } from './../styledComponents/button'

export default function Hero() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className={styles.heroImage}>
        <div className={styles.heroText}>
          <h1>Guardians Around The World</h1>
          <h4>Embrace the Myths</h4>

          <section className={styles.categoryContainer} style={{ visibility: 'true' }}>
            <ButtonRounded>
              <span>#Indonesia</span>
            </ButtonRounded>
            <ButtonRounded>
              <span>#Thailand</span>
            </ButtonRounded>
            <ButtonRounded>
              <span>#NewZealand</span>
            </ButtonRounded>
          </section>

          <section style={{ visibility: 'true' }}>
            <p><span className={styles.markedText}>Select a country of interest, or explore all stories</span></p>
            <ButtonOutlined>
              <span>Explore</span>
            </ButtonOutlined>
          </section>
        </div>
      </div>
    </>
  )
}