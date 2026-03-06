type HeroProps = {
  name?: string
  tagline?: string
  avatarUrl?: string
}

/**
 * Hero section: big headline, short intro, and avatar.
 * Data is passed via props so it can be reused/customized easily.
 */
export default function Hero({
  name = 'GM',
  tagline = '我是一名前端开发者，专注于 React + TypeScript，喜欢用简洁的交互和细节打磨体验。',
  avatarUrl,
}: HeroProps) {
  return (
    <section className="relative">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
            正在构建我的个人作品集
          </p>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-white/90">你好，我是</span>
            <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            {tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-fuchsia-500/10 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              联系我
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[260px] md:mx-0 md:max-w-[280px]">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-violet-500/20 to-cyan-500/25 blur-2xl" />
          <div className="rounded-full border border-white/10 bg-white/5 p-2 shadow-xl shadow-black/40 backdrop-blur">
            <div className="relative aspect-square overflow-hidden rounded-full bg-gradient-to-br from-white/10 to-white/5">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={`${name} avatar`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-fuchsia-400 via-violet-400 to-cyan-300 p-[2px]">
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#0a0a0a] text-xl font-semibold text-white">
                        {name.slice(0, 1).toUpperCase()}
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-white/60">头像占位（可替换）</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

