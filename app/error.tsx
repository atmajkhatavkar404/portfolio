"use client"

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="min-h-dvh bg-black text-neutral-200">
        <div className="mx-auto max-w-2xl px-6 pt-24">
          <h1 className="text-2xl font-semibold text-white">Something went wrong</h1>
          <p className="mt-2 text-neutral-400">{error.message}</p>
          <button
            onClick={reset}
            className="mt-6 inline-flex px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
