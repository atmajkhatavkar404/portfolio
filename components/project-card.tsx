"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export type Project = {
  title: string
  description: string
  href?: string
  image: string
  tags: string[]
}

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      className="h-full"
    >
      <Card className="group h-full bg-[#0b0b0b] border-white/10 hover:border-blue-500/40 transition-colors">
        <CardHeader className="p-0">
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={index < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </CardHeader>
        <CardContent className="p-5">
          <CardTitle className="text-white text-lg">{project.title}</CardTitle>
          <p className="mt-2 text-sm text-neutral-300">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-wide px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          {project.href ? (
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white"
            >
              <ExternalLink className="size-4" />
              Visit project
            </Link>
          ) : (
            <div className="inline-flex items-center gap-2 text-sm text-neutral-400">
              <ShieldCheck className="size-4" />
              Private / NDA
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
