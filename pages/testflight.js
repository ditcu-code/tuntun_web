import React from "react"
import Router from "next/router"
import Head from "next/head"

export default function Testflight() {
  React.useEffect(() => {
    const { pathname } = Router
    if (pathname == "/testflight") {
      Router.replace("https://testflight.apple.com/join/Nvyiuu27")
    }
  })
  return (
    <Head>
      <title>Tuntun | Testflight</title>
      <meta name="description" content="Aplikasi perkembangan anak" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
