import React from "react"
// import Router from "next/router"
import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Appstore() {
  //   React.useEffect(() => {
  //     const { pathname } = Router
  //     if (pathname == "/testflight") {
  //       Router.replace("https://testflight.apple.com/join/Nvyiuu27")
  //     }
  //   })
  return (
    <div className={styles.container}>
      <Head>
        <title>Tuntun | Appstore</title>
        <meta name="description" content="Aplikasi perkembangan anak" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Coming Soon</h2>
    </div>
  )
}
