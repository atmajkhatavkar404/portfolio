"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/70 border border-white/10 rounded-2xl">
          <div className="h-14 flex items-center px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8 rounded-xl bg-blue-500/20 text-blue-400 grid place-items-center border border-blue-400/30">
                <Shield className="size-4" />
              </div>
              <span className="font-semibold text-white">Atmaj Ketan Khatavkar</span>
              <span className="sr-only">Go to home</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1 ml-6">
              {NAV.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm transition-colors",
                      active ? "text-blue-300 bg-blue-500/10" : "text-neutral-300 hover:text-white hover:bg-white/5",
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <Button
                asChild
                variant="outline"
                className="hidden md:inline-flex border-blue-500/40 text-blue-300 hover:text-white hover:bg-blue-500/20 bg-transparent"
              >
                <a href="/work">View Work</a>
              </Button>
              <Button asChild className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500">
                <a href="/contact">Contact Me</a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-white/20 text-white bg-transparent"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-controls="mobile-nav"
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </div>
          </div>
          <div
            id="mobile-nav"
            className={cn(
              "grid md:hidden transition-all overflow-hidden",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <nav className="px-3 pb-3 flex flex-col gap-1">
                {NAV.map((item) => {
                  const active = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-xl px-3 py-2 text-sm transition-colors",
                        active ? "text-blue-300 bg-blue-500/10" : "text-neutral-300 hover:text-white hover:bg-white/5",
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
