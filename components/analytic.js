import React from "react"
import Script from "next/script"

export default function Analytic() {
  return (
    <>
        
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
     });
    `,
        }}
      />
    </>
  )
}
