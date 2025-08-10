"use client"

import Image from "next/image"

export default function HeroRotatingShield({
  title = "Cybersecurity Specialist",
  subtitle = "Ethical Hacking • Penetration Testing • Web Security",
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background aura for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.25),transparent_55%)]" />

      {/* Rotating shield image (uses provided Source URL directly) */}
      <div className="absolute inset-0 grid place-items-center px-6">
        <div
          aria-hidden
          className="relative animate-[spin_18s_linear_infinite] motion-reduce:animate-none will-change-transform"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a-lnmSADZr3gI5tbcaIslHQG0a5y561R.png"
            alt="Rotating cyber shield visual"
            width={900}
            height={900}
            priority
            unoptimized
            className="w-[70vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]"
            sizes="(min-width:1280px) 40vw, (min-width:1024px) 50vw, (min-width:640px) 60vw, 70vw"
          />
        </div>
      </div>

      {/* Titles */}
      <div className="absolute inset-0 grid place-items-end">
        <div className="text-center w-full px-6 pb-10 md:pb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
              {title}
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-300">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
