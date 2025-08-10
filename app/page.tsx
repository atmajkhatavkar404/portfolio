import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import HeroRotatingShield from "@/components/hero-rotating-shield"
import Section from "@/components/section"
import { ShieldCheck, Search, Bug, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ME } from "@/lib/data"
import { SEO, SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO.defaultTitle,
  description: SEO.description,
  keywords: SEO.keywords,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: SEO.defaultTitle,
    description: SEO.description,
    url: SITE_URL,
    siteName: "Cybersecurity Portfolio – Atmaj Ketan Khatavkar",
    images: [{ url: SEO.ogImage, width: 1200, height: 630, alt: "Atmaj Ketan Khatavkar – Cybersecurity Portfolio" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.defaultTitle,
    description: SEO.description,
    images: [SEO.ogImage],
  },
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: ME.name || "Atmaj Ketan Khatavkar",
    url: SITE_URL,
    jobTitle: "Cybersecurity Enthusiast",
    description: SEO.description,
    sameAs: [ME.socials.github, ME.socials.linkedin, ME.socials.bugcrowd, ME.socials.hackerone].filter(Boolean),
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_URL }],
  }

  return (
    <div className="min-h-dvh bg-black text-neutral-200">
      <SiteHeader />
      <main className="pt-24">
        <HeroRotatingShield title={`${ME.role}`} subtitle={ME.tagline} />

        <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-blue-300 text-sm tracking-widest uppercase">About</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">Breaking Barriers, Building Securely — I Identify Risks So You Can Create Safely</h2>
              <p className="mt-4 text-neutral-300">{ME.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {ME.expertise.map((item) => (
                  <span key={item} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-500">
                  <Link href="/work">See My Work</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-500/40 text-blue-300 hover:text-white hover:bg-blue-500/20 bg-transparent"
                >
                  <Link href="/about">More About Me</Link>
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Feature
                icon={<Search className="size-5" />}
                title="Recon & Enumeration"
                desc="Comprehensive target mapping to reduce blind spots."
              />
              <Feature
                icon={<Bug className="size-5" />}
                title="Exploitation"
                desc="Reproducible PoCs with actionable remediation."
              />
              <Feature
                icon={<Lock className="size-5" />}
                title="Defense-in-Depth"
                desc="Secure architecture patterns and hardening."
              />
              <Feature
                icon={<ShieldCheck className="size-5" />}
                title="Secure Delivery"
                desc="Ship resilient Webapps with security baked in."
              />
            </div>
          </div>
        </Section>

        <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-8">
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 md:gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Ready to assess and harden your applications
                </h3>
                <p className="mt-3 text-neutral-300">
                  I provide end-to-end web pentesting, security reviews, and secure development for modern stacks.
                </p>
              </div>
              <div className="flex md:justify-end gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-500">
                  <Link href="/contact">Contact Me</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-500/40 text-blue-300 hover:text-white hover:bg-blue-500/20 bg-transparent"
                >
                  <Link href="/work">Browse Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* JSON-LD for SEO */}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="ld-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-neutral-400">
          © {new Date().getFullYear()} {ME.name}. 
        </div>
      </footer>
    </div>
  )
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="p-5 rounded-xl border border-white/10 bg-[#0b0b0b] hover:border-blue-500/40 transition-colors">
      <div className="size-10 rounded-lg bg-blue-500/20 text-blue-300 grid place-items-center border border-blue-400/20">
        {icon}
      </div>
      <h4 className="mt-3 font-semibold text-white">{title}</h4>
      <p className="mt-1 text-sm text-neutral-300">{desc}</p>
    </div>
  )
}
