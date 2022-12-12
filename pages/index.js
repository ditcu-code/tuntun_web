import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import LogoApp from "../components/logoApp"
import Image from "next/image"
import appstore from "../resources/appstoreLabel.png"
import { event } from "../lib/gtag"

export default function Home() {
  function handleVisit(actionName) {
    event({
      action: actionName,
      category: "Links",
      label: "AppStore logo clicked!",
      value: 1,
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
        <Link href="/appstore" onClick={handleVisit("home_to_appstore")}>
          <Image
            className={styles.appstoreLabel}
            src={appstore}
            alt={"appstore-label"}
          />
        </Link>

        <div className={styles.grid}>
          <Link
            href="/terms-and-conditions"
            className={styles.card}
            onClick={handleVisit("home_to_terms")}
          >
            <p>Terms & Condition</p>
          </Link>

          <Link
            href="/privacy-policy"
            className={styles.card}
            onClick={handleVisit("home_to_privacy")}
          >
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
