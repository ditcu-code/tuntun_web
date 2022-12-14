import "../styles/globals.css"
import { useRouter } from "next/router"
import { useEffect } from "react"
import * as gtag from "../lib/gtag.js"
import Analytic from "../components/analytic"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Analytic />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
