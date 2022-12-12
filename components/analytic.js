import React from "react"
import Script from "next/script"

export default function Analytic() {
  return (
    <>
        
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-0PD8EKWHLQ`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-0PD8EKWHLQ', {
      page_path: window.location.pathname,
     });
    `,
        }}
      />
    </>
  )
}
