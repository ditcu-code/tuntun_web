import Head from "next/head"
import Image from "next/image"
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
        <LogoApp width={500} />

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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
