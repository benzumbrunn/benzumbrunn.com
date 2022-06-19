import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeLink from '../components/HomeLink/HomeLink'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>benzumbrunn.com</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ben Zumbrunn
        </h1>
        <div className={styles.links}>
          <HomeLink
            link="https://twitter.com/benzumbrunn"
            img="/../public/images/twitter.png"
          />
          <HomeLink
            link="https://github.com/benzumbrunn"
            img="/../public/images/github.png"
          />
          <HomeLink
            link="https://t.me/benzumbrunn"
            img="/../public/images/telegram.png"
          />
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
