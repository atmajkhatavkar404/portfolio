"use client"

export default function WorkError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-dvh bg-black text-neutral-200">
      <div className="mx-auto max-w-2xl px-6 pt-24">
        <h1 className="text-2xl font-semibold text-white">Couldn’t load the Work page</h1>
        <p className="mt-2 text-neutral-400">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 inline-flex px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
        >
          Reload
        </button>
      </div>
    </div>
  )
}
