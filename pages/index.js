import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import LogoApp from "../components/logoApp"
import Image from "next/image"
import appstore from "../resources/appstoreLabel.png"

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
        <Link href="/appstore">
          <Image
            className={styles.appstoreLabel}
            src={appstore}
            alt={"appstore-label"}
          />
        </Link>

        <div className={styles.grid}>
          <Link href="/terms-and-conditions" className={styles.card}>
            <p>Terms & Condition</p>
            {/* <p>Find in-depth information about Next.js features and API.</p> */}
          </Link>

          <Link href="/privacy-policy" className={styles.card}>
            <p>Privacy Policy</p>
            {/* <p>Learn about Next.js in an interactive course with quizzes!</p> */}
          </Link>
        </div>
      </main>
    </div>
  )
}

function Code({ children }) {
  return <code className={styles.inlineCode}>{children}</code>
}
