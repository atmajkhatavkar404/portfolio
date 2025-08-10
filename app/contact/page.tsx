import type { Metadata } from "next"
import { SITE_URL, SEO } from "@/lib/seo"
import SiteHeader from "@/components/site-header"
import Section from "@/components/section"
import Link from "next/link"
import { Mail, Phone, Github, Linkedin, Bug, Shield } from "lucide-react"
import { ME } from "@/lib/data"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Contact – ${SEO.defaultTitle}`,
  description:
    "Contact me for web application penetration testing, ethical hacking, and secure development. Email, phone, and social profiles.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `Contact – ${SEO.defaultTitle}`,
    description: "Get in touch for web pentesting, ethical hacking, and secure software delivery.",
    url: `${SITE_URL}/contact`,
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: `Contact – ${SEO.defaultTitle}`, images: [SEO.ogImage] },
}

export default function ContactPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  }

  return (
    <div className="min-h-dvh bg-black text-neutral-200">
      <SiteHeader />
      <main className="pt-24">
        <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-blue-300 text-sm tracking-widest uppercase">Contact</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">Let’s talk security</h1>
          <p className="mt-4 text-neutral-300 max-w-3xl">
            Whether you need a web pentest, security review, or a secure app built end-to-end, I can help.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 p-6 bg-[#0b0b0b]">
              <h2 className="text-xl font-semibold text-white">Direct</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href={`mailto:${ME.email}`}
                    className="inline-flex items-center gap-3 text-neutral-300 hover:text-white"
                  >
                    <div className="size-9 rounded-lg bg-blue-500/20 text-blue-300 grid place-items-center border border-blue-400/20">
                      <Mail className="size-4" />
                    </div>
                    <span className="sr-only">Email: </span>
                    {ME.email}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:${ME.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-3 text-neutral-300 hover:text-white"
                  >
                    <div className="size-9 rounded-lg bg-blue-500/20 text-blue-300 grid place-items-center border border-blue-400/20">
                      <Phone className="size-4" />
                    </div>
                    <span className="sr-only">Phone: </span>
                    {ME.phone}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 p-6 bg-[#0b0b0b]">
              <h2 className="text-xl font-semibold text-white">Social Profiles</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={ME.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-neutral-300 hover:text-white"
                  >
                    <div className="size-9 rounded-lg bg-blue-500/20 text-blue-300 grid place-items-center border border-blue-400/20">
                      <Github className="size-4" />
                    </div>
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={ME.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-neutral-300 hover:text-white"
                  >
                    <div className="size-9 rounded-lg bg-blue-500/20 text-blue-300 grid place-items-center border border-blue-400/20">
                      <Linkedin className="size-4" />
                    </div>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={ME.socials.bugcrowd}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-neutral-300 hover:text-white"
                  >
                    <div className="size-9 rounded-lg bg-blue-500/20 text-blue-300 grid place-items-center border border-blue-400/20">
                      <Bug className="size-4" />
                    </div>
                    Bugcrowd
                  </a>
                </li>
                <li>
                  <a
                    href={ME.socials.hackerone}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-neutral-300 hover:text-white"
                  >
                    <div className="size-9 rounded-lg bg-blue-500/20 text-blue-300 grid place-items-center border border-blue-400/20">
                      <Shield className="size-4" />
                    </div>
                    HackerOne
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Script
          id="ld-breadcrumb-contact"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </main>
    </div>
  )
}
