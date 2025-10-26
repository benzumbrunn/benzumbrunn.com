import styles from '../styles/Home.module.css'
import HomeLink from '../components/HomeLink/HomeLink'
import twitter from '../public/images/twitter.png'
import github from '../public/images/github.png'
import telegram from '../public/images/telegram.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ben Zumbrunn
        </h1>

        <div className={styles.bio}>
          <p className={styles.intro}>
            Swiss software engineer with a background in engineering leadership and product development
          </p>

          <p>
            Hi, I'm Ben. Over the past decade, I've worked at the intersection of software infrastructure, blockchain, and service based industries. I led product engineering at bake.io, helped scale decentralized finance platforms, and now build companies in Switzerland that simplify how people work, live, and own.
          </p>

          <p>
            As CTO and entrepreneur, I focus on turning complex problems into practical, resilient software products. I believe in lean, durable systems over hype cycles, and in solving real problems for real people.
          </p>

          <p>
            I'm hands-on with technology: Web and mobile apps, back-end systems, databases and devops. But I also think in systems: Product architecture, team building, and long-term vision.
          </p>
        </div>

        <div className={styles.links}>
          <HomeLink
            link="https://twitter.com/benzumbrunn"
            img={twitter}
            alt="twitter"
          />
          <HomeLink
            link="https://github.com/benzumbrunn"
            img={github}
            alt="github"
          />
          <HomeLink
            link="https://t.me/benzumbrunn"
            img={telegram}
            alt="telegram"
          />
        </div>

        <footer className={styles.footer}>
        </footer>
      </main>
    </div>
  )
}
