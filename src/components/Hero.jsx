import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  Cpu,
  Download,
  Layers,
  Settings,
  TrendingUp,
  Users,
} from 'lucide-react'
import { hero, profile } from '../content/profile'
import { Placeholder, container, isDev } from './ui'
import photo480 from '../assets/renee-bishop-480.webp'
import photo800 from '../assets/renee-bishop-800.webp'

const icons = {
  strategy: BarChart3,
  analytics: Layers,
  ai: Cpu,
  calendar: CalendarDays,
  people: Users,
  gear: Settings,
  trend: TrendingUp,
  industry: Building2,
}

/** Decorative flowing lines, drawn once as static SVG (no animation cost). */
function Waves() {
  const lines = Array.from({ length: 16 }, (_, i) => {
    const y = 120 + i * 9
    const amp = 40 + i * 3
    return `M0 ${y} C 180 ${y - amp}, 320 ${y + amp}, 520 ${y - amp / 2} S 820 ${y + amp}, 900 ${y - 10}`
  })
  return (
    <svg
      className="pointer-events-none absolute -right-24 top-6 hidden h-[460px] w-[900px] opacity-60 lg:block"
      viewBox="0 0 900 420"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wave" x1="0" x2="1">
          <stop offset="0" stopColor="#7C3AED" stopOpacity="0" />
          <stop offset="0.55" stopColor="#7C3AED" stopOpacity="0.55" />
          <stop offset="1" stopColor="#A78BFA" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {lines.map((d, i) => (
        <path key={i} d={d} stroke="url(#wave)" strokeWidth="1" opacity={0.25 + (i % 4) * 0.12} />
      ))}
    </svg>
  )
}

export default function Hero() {
  const resume = profile.links.resume
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-navy text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.28),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(17,29,53,1),transparent_60%)]"
      />
      <Waves />

      <div className={`${container} relative pb-10 pt-10 lg:pb-12 lg:pt-14`}>
        <div className="grid items-center gap-10 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[290px_minmax(0,1fr)_270px] xl:gap-10">
          {/* Portrait */}
          <div className="mx-auto w-52 sm:w-64 lg:w-full">
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/50 via-lavender/10 to-transparent blur-2xl" />
              <img
                src={photo800}
                srcSet={`${photo480} 480w, ${photo800} 800w`}
                sizes="(min-width: 1024px) 300px, 256px"
                width="800"
                height="1000"
                alt="Portrait of Renee Bishop"
                fetchPriority="high"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-2xl ring-1 ring-white/15"
              />
            </div>
          </div>

          {/* Headline */}
          <div className="text-center lg:text-left">
            <p className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-lavender sm:text-xs lg:justify-start">
              {hero.eyebrow.map((item, i) => (
                <span key={item} className="flex items-center gap-3 whitespace-nowrap">
                  {i > 0 && <span aria-hidden="true" className="hidden text-white/30 sm:inline">|</span>}
                  {item}
                </span>
              ))}
            </p>
            <h1 className="mt-4 text-lg font-semibold uppercase tracking-[0.22em] text-white">
              {profile.name}
              <span className="sr-only">: </span>
            </h1>
            <p
              id="hero-title"
              className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-[2.9rem]"
            >
              {hero.titleStart}
              <span className="bg-gradient-to-r from-lavender to-[#C4B5FD] bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#work"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:bg-accent-dark sm:w-auto"
              >
                View My Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              {resume ? (
                <a
                  href={resume}
                  download
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/5 sm:w-auto"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                  <span className="sr-only">(PDF)</span>
                </a>
              ) : (
                isDev && (
                  <span className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border-2 border-dashed border-amber-400/80 px-6 py-3 font-semibold text-amber-200 sm:w-auto">
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download Resume
                  </span>
                )
              )}
            </div>
            {!resume && (
              <Placeholder className="mx-auto mt-3 max-w-md lg:mx-0">
                Resume PDF not added yet. This button is hidden on the live site until <code>links.resume</code> is set in <code>src/content/profile.js</code>.
              </Placeholder>
            )}
          </div>

          {/* Pillars */}
          <ul className="grid gap-5 sm:grid-cols-3 lg:col-span-2 xl:col-span-1 xl:grid-cols-1 xl:border-l xl:border-white/15 xl:pl-10">
            {hero.pillars.map((p) => {
              const Icon = icons[p.icon]
              return (
                <li key={p.title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] ring-1 ring-white/10">
                    <Icon className="h-6 w-6 text-lavender" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{p.title}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-slate-300">{p.text}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Highlight strip */}
        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {hero.highlights.map((h, i) => {
            const Icon = icons[h.icon]
            const last = i === hero.highlights.length - 1
            return (
              <li
                key={h.title}
                className={`flex items-center gap-3 bg-midnight px-5 py-4 ${last ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <Icon className="h-7 w-7 shrink-0 text-lavender" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold text-white">{h.title}</span>
                  <span className="block text-xs text-slate-300">{h.text}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
