"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Award } from "lucide-react"

export type Certificate = {
  title: string
  issuer: string
  date: string
  credentialId?: string
  href?: string
  image: string
}

export default function CertificateCard({ cert, index = 0 }: { cert: Certificate; index?: number }) {
  return (
    <div
      className="h-full animate-[fadeIn_0.5s_ease_1] [animation-delay:var(--d)]"
      style={{ ["--d" as any]: `${index * 50}ms` }}
    >
      <Card className="group h-full bg-[#0b0b0b] border-white/10 hover:border-blue-500/40 transition-colors">
        <CardHeader className="p-0">
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl">
            <Image
              src={cert.image || "/placeholder.svg"}
              alt={`${cert.title} certificate preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              unoptimized={cert.image.startsWith("https://blob.v0.dev")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </CardHeader>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 text-blue-300">
            <Award className="size-4" />
            <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
          </div>
          <p className="mt-1 text-sm text-neutral-300">{cert.issuer}</p>
          <p className="mt-1 text-xs text-neutral-400">{cert.date}</p>
          {cert.credentialId ? (
            <p className="mt-2 text-xs text-neutral-400">Credential ID: {cert.credentialId}</p>
          ) : null}
        </CardContent>
        <CardFooter className="p-5 pt-0">
          {cert.href ? (
            <Link
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white"
            >
              <ExternalLink className="size-4" />
              Verify
            </Link>
          ) : (
            <span className="text-sm text-neutral-400">No public link</span>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
