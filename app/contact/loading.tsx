export default function LoadingContact() {
  return (
    <div className="min-h-dvh bg-black text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="h-8 w-40 bg-white/5 rounded animate-pulse" />
        <div className="mt-4 h-10 w-2/3 bg-white/5 rounded animate-pulse" />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="h-48 bg-white/5 rounded-xl animate-pulse" />
          <div className="h-48 bg-white/5 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  )
}
