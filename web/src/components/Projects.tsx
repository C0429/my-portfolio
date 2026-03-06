import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            精选项目展示：包含截图、简介与技术栈标签。后续只需要维护{' '}
            <code className="rounded bg-white/5 px-1 py-0.5 text-white/80">
              src/data/projects.ts
            </code>{' '}
            即可更新内容。
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg shadow-black/30 backdrop-blur transition hover:border-white/15 hover:bg-white/[0.06]"
          >
            <a
              href={p.href ?? '#'}
              className="block focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label={p.title}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0f0f10]">
                <img
                  src={p.imageSrc}
                  alt={`${p.title} screenshot`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-70" />
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold tracking-tight text-white/90 sm:text-lg">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/65">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={`${p.id}-${t}`}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

