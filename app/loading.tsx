export default function Loading() {
  return (
    <div className="min-h-dvh bg-black text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="h-[40vh] md:h-[50vh] rounded-2xl bg-white/5 animate-pulse" />
        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="h-6 w-40 bg-white/5 rounded animate-pulse" />
            <div className="h-10 w-3/4 bg-white/5 rounded animate-pulse" />
            <div className="h-20 w-full bg-white/5 rounded animate-pulse" />
            <div className="h-10 w-48 bg-white/5 rounded animate-pulse" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 bg-white/5 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
