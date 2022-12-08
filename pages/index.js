import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import LogoApp from "../components/logoApp"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tuntun</title>
        <meta name="description" content="Aplikasi perkembangan anak" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LogoApp width={"300"} />

        <div className={styles.grid}>
          <Link href="/terms-and-conditions" className={styles.card}>
            <h2>Terms & Condition &rarr;</h2>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </Link>

          <Link href="/privacy-policy" className={styles.card}>
            <h2>Privacy Policy &rarr;</h2>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          </Link>
        </div>
      </main>
    </div>
  )
}
