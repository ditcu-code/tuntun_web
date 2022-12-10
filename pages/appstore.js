import React from "react"
import Router from "next/router"
import Head from "next/head"

export default function Appstore() {
  React.useEffect(() => {
    const { pathname } = Router
    if (pathname == "/appstore") {
      Router.replace("https://apps.apple.com/app/id6444361388")
    }
  })
  return (
    <Head>
      <title>Tuntun | Appstore</title>
      <meta name="description" content="Aplikasi perkembangan anak" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
