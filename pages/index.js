import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeLink from '../components/HomeLink/HomeLink'
import twitter from '../public/images/twitter.png'
import github from '../public/images/github.png'
import telegram from '../public/images/telegram.png'
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>benzumbrunn.com</title>
        <link rel="icon" href="/favicon.ico" />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C2G48QTB4Y');
            `,
          }}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ben Zumbrunn
        </h1>
        <div className={styles.links}>
          <HomeLink
            link="https://twitter.com/benzumbrunn"
            img={twitter}
          />
          <HomeLink
            link="https://github.com/benzumbrunn"
            img={github}
          />
          <HomeLink
            link="https://t.me/benzumbrunn"
            img={telegram}
          />
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
