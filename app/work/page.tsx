import type { Metadata } from "next"
import { SITE_URL, SEO } from "@/lib/seo"
import SiteHeader from "@/components/site-header"
import Section from "@/components/section"
import ProjectCard from "@/components/project-card"
import CertificateCard from "@/components/certificate-card"
import { PROJECTS, CERTIFICATES } from "@/lib/data"
import Script from "next/script"

export const dynamic = "force-static"
export const revalidate = 86400

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Work – ${SEO.defaultTitle}`,
  description:
    "Portfolio work: secure web apps, recon automation, dashboards, and security tooling. Built with Next.js, Node.js, and best-practice security.",
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: {
    title: `Work – ${SEO.defaultTitle}`,
    description: "Portfolio work: secure web apps, recon automation, dashboards, and security tooling.",
    url: `${SITE_URL}/work`,
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: `Work – ${SEO.defaultTitle}`, images: [SEO.ogImage] },
}

export default function WorkPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/work` },
    ],
  }

  return (
    <div className="min-h-dvh bg-black text-neutral-200">
      <SiteHeader />
      <main className="pt-24">
        <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-blue-300 text-sm tracking-widest uppercase">My Work</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">Selected Projects</h1>
          <p className="mt-4 text-neutral-300 max-w-3xl">
            A mix of open and private work covering recon automation, secure web apps, dashboards, and security tooling.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 10).map((p, i) => (
              <ProjectCard project={p} index={i} key={p.title} />
            ))}
          </div>
        </Section>

        <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 pb-12 md:pb-16">
          <p className="text-blue-300 text-sm tracking-widest uppercase">Certificates</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-bold text-white">Professional Certifications</h2>
          <p className="mt-3 text-neutral-300 max-w-3xl">
            A selection of certifications related to cybersecurity, ethical hacking, and secure development.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.slice(0, 10).map((c, i) => (
              <CertificateCard cert={c} index={i} key={c.title + i} />
            ))}
          </div>
        </Section>

        <Script
          id="ld-breadcrumb-work"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </main>
    </div>
  )
}
