import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import LogoApp from "../components/logoApp"
import Image from "next/image"
import appstore from "../resources/appstoreLabel.png"
import { event } from "../lib/gtag"

export default function Home() {
  function handleVisitAppStore() {
    event({
      action: "AppStore",
      category: "Links",
      label: "AppStore logo clicked!",
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tuntun</title>
        <meta name="description" content="Aplikasi perkembangan anak" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LogoApp width={"300"} />
        <Link href="/appstore" onClick={handleVisitAppStore()}>
          <Image
            className={styles.appstoreLabel}
            src={appstore}
            alt={"appstore-label"}
          />
        </Link>

        <div className={styles.grid}>
          <Link href="/terms-and-conditions" className={styles.card}>
            <p>Terms & Condition</p>
          </Link>

          <Link href="/privacy-policy" className={styles.card}>
            <p>Privacy Policy</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

function Code({ children }) {
  return <code className={styles.inlineCode}>{children}</code>
}
