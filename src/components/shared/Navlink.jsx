"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({ href, children, className = "" }) {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "underline underline-offset-4" : ""}`}
    >
      {children}
    </Link>
  )
}