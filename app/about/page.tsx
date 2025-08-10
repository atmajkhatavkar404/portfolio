import type { Metadata } from "next"
import { SITE_URL, SEO } from "@/lib/seo"
import SiteHeader from "@/components/site-header"
import Section from "@/components/section"
import { ME } from "@/lib/data"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `About – ${SEO.defaultTitle}`,
  description:
    "About me: cybersecurity enthusiast in ethical hacking, penetration testing, and secure software development. Career and experience.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About – ${SEO.defaultTitle}`,
    description:
      "Cybersecurity enthusiast in ethical hacking, penetration testing, and secure software development. Career and experience.",
    url: `${SITE_URL}/about`,
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: `About – ${SEO.defaultTitle}`, images: [SEO.ogImage] },
}

export default function AboutPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  }

  return (
    <div className="min-h-dvh bg-black text-neutral-200">
      <SiteHeader />
      <main className="pt-24">
        <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-blue-300 text-sm tracking-widest uppercase">About Me</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">What I Do</h1>
          <p className="mt-4 text-neutral-300 max-w-3xl">{ME.summary}</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 p-6 bg-[#0b0b0b]">
              <h2 className="text-xl font-semibold text-white">Expertise</h2>
              <ul className="mt-4 space-y-2">
                {ME.expertise.map((item) => (
                  <li key={item} className="text-neutral-300 text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 p-6 bg-[#0b0b0b]">
              <h2 className="text-xl font-semibold text-white">Tech & Tools</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {ME.stack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Career & Experience</h2>
          <div className="mt-6 relative">
            <div
              className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent"
              aria-hidden
            />
            <div className="space-y-6">
              {ME.experience.map((xp) => (
                <div key={xp.company} className="relative pl-12 md:pl-16">
                  <div
                    className="absolute left-[14px] md:left-[22px] top-2 size-3 rounded-full bg-blue-400"
                    aria-hidden
                  />
                  <div className="rounded-xl border border-white/10 p-5 bg-[#0b0b0b]">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div>
                        <h3 className="text-white font-semibold">{xp.role}</h3>
                        <p className="text-neutral-400 text-sm">{xp.company}</p>
                      </div>
                      <div className="text-neutral-400 text-sm">{xp.period}</div>
                    </div>
                    <p className="mt-3 text-neutral-300 text-sm">{xp.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Script
          id="ld-breadcrumb-about"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </main>
    </div>
  )
}
