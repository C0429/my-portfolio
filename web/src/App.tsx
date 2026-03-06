import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-dvh bg-[#0a0a0a] text-white">
      {/* Decorative background accents (subtle gradient glow). */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/25 via-violet-500/25 to-cyan-500/25 blur-3xl" />
        <div className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-sky-500/15 to-fuchsia-500/15 blur-3xl" />
      </div>

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Hero />
        <div className="mt-14 sm:mt-18">
          <Projects />
        </div>
      </main>
    </div>
  )
}

export default App
