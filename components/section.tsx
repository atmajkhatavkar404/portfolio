import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export default function Section({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <section className={cn("scroll-mt-24", className)}>{children}</section>
}
