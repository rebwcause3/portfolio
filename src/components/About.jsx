import { ArrowUpRight } from 'lucide-react'
import { about } from '../content/profile'
import { Reveal, SectionHeading, container } from './ui'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-soft py-20 sm:py-24">
      <div className={`${container} grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16`}>
        <Reveal>
          <SectionHeading id="about-title" eyebrow="About Me" title={about.title} align="left" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700 sm:text-[17px]">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="border-l-2 border-lavender pl-4 text-slate-600">
              {about.ventures}{' '}
              <a
                href={about.venturesLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 font-medium text-accent underline-offset-4 hover:underline"
              >
                Visit {about.venturesLink.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-semibold text-navy">How I approach the work</h3>
            <ol className="mt-6 space-y-6">
              {about.approach.map((step, i) => (
                <li key={step.title} className="relative flex gap-4">
                  {i < about.approach.length - 1 && (
                    <span aria-hidden="true" className="absolute left-[17px] top-10 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/40 to-transparent" />
                  )}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent ring-1 ring-accent/20">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{step.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-semibold text-navy">Industry experience</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.industries.map((ind) => (
                <li key={ind} className="rounded-full bg-soft px-3.5 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
