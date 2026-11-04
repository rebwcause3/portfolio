import { Quote } from 'lucide-react'
import { philosophy } from '../content/philosophy'
import { Reveal, container } from './ui'

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-title"
      className="relative overflow-hidden bg-gradient-to-r from-[#1E1450] via-midnight to-navy py-20 text-white sm:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl" />
      <div className={`${container} relative`}>
        <Reveal className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
          <div className="flex items-start gap-4 sm:gap-6">
            <Quote className="h-12 w-12 shrink-0 rotate-180 fill-lavender text-lavender sm:h-16 sm:w-16" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lavender">Leadership Philosophy</p>
              <h2 id="philosophy-title" className="mt-2 font-serif text-4xl italic leading-tight sm:text-5xl">
                {philosophy.statement}
              </h2>
            </div>
          </div>
          <p className="border-white/20 text-lg leading-relaxed text-slate-200 lg:border-l lg:pl-10">{philosophy.summary}</p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.pillars.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 70}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-lavender/40 hover:bg-white/[0.07]"
            >
              <h3 className="font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
