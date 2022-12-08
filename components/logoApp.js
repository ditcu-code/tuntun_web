import React from "react"
import Image from "next/image"
import logoImg from "../resources/tuntunLogo.jpg"
import Link from "next/link"

export default function LogoApp({ width }) {
  return (
    <Link href={"/"}>
      <Image src={logoImg} alt={"tuntun-logo"} width={width} />
    </Link>
  )
}
