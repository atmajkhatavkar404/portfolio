export default function LoadingWork() {
  return (
    <div className="min-h-dvh bg-black text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="h-8 w-40 bg-white/5 rounded animate-pulse" />
        <div className="mt-4 h-10 w-1/2 bg-white/5 rounded animate-pulse" />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="h-60 bg-white/5 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
