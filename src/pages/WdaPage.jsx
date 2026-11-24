import { ArrowLeft, ArrowUpRight, CalendarCheck, CheckCircle2, Info, Lock, Mic, ShieldCheck, Users } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Reveal, container } from '../components/ui'
import { workflowDecisionAssistant as p } from '../content/projects'
import shot1 from '../assets/projects/wda-1-start.webp'
import shot2 from '../assets/projects/wda-2-section.webp'
import shot3 from '../assets/projects/wda-3-result.webp'
import shot4 from '../assets/projects/wda-4-options.webp'

const HOME = '../../'
const shotSrc = { 'wda-1-start.webp': shot1, 'wda-2-section.webp': shot2, 'wda-3-result.webp': shot3, 'wda-4-options.webp': shot4 }

function SectionTitle({ eyebrow, title, id }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
      <h2 id={id} className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{title}</h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
    </div>
  )
}

function AccessButton({ className = '' }) {
  return (
    <a
      href={p.accessUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 font-semibold text-white transition-colors hover:bg-accent-dark ${className}`}
    >
      Explore the application
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

export default function WdaPage() {
  return (
    <>
      <a href="#main" className="sr-only z-[100] rounded-md bg-accent px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to main content
      </a>
      <Header home={HOME} current="ai" />

      <main id="main" tabIndex={-1} className="outline-none">
        {/* Title band */}
        <section id="top" aria-labelledby="project-title" className="relative overflow-hidden bg-navy text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.3),transparent_55%)]" />
          <div className={`${container} relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center`}>
            <div>
              <a href={`${HOME}#ai`} className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-lavender hover:text-white">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Applied AI &amp; Innovation
              </a>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-full bg-lavender px-2.5 py-0.5 text-xs font-bold text-navy">{p.maturity}</span>
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <CalendarCheck className="h-4 w-4 text-lavender" aria-hidden="true" />
                  Released <time dateTime={p.releasedIso}>{p.released}</time>
                </span>
              </div>
              <h1 id="project-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{p.name}</h1>
              <p className="mt-3 font-serif text-xl italic text-lavender">{p.tagline}</p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200">{p.summary}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <AccessButton />
                <a href={`${HOME}${p.talkPage}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-lavender hover:text-white">
                  <Mic className="h-4 w-4" aria-hidden="true" />
                  See the summit keynote
                </a>
              </div>
              <p className="mt-3 text-sm text-slate-400">{p.accessNote}</p>
            </div>
            <figure className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-white/15">
              <img src={shot1} alt={p.screenshots[0].alt} width="800" height="500" className="w-full" fetchPriority="high" />
            </figure>
          </div>
        </section>

        {/* Problem */}
        <section aria-labelledby="problem-title" className="bg-white py-16">
          <Reveal className={`${container} grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]`}>
            <div>
              <SectionTitle id="problem-title" eyebrow="The business problem" title="Technology choices made before the problem is defined" />
              <p className="mt-6 leading-relaxed text-slate-700">{p.problem}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-soft p-6">
              <p className="font-semibold text-navy">Six guided sections</p>
              <ol className="mt-3 space-y-2">
                {p.sections.map((s, i) => (
                  <li key={s} className="flex items-start gap-3 text-slate-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </section>

        {/* Output + options */}
        <section aria-labelledby="output-title" className="bg-soft py-16">
          <div className={container}>
            <Reveal>
              <SectionTitle id="output-title" eyebrow="What it produces" title="A preliminary recommendation you can explain" />
              <p className="mt-6 max-w-3xl leading-relaxed text-slate-700">{p.output}</p>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-600">Six options, from simplest to most complex</p>
              <ol className="mt-3 flex flex-wrap gap-2">
                {p.options.map((o, i) => (
                  <li key={o} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-navy ring-1 ring-slate-200">
                    <span className="mr-1.5 text-accent">{i + 1}</span>
                    {o}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* Screenshots */}
        <section aria-labelledby="shots-title" className="bg-white py-16">
          <div className={container}>
            <Reveal>
              <SectionTitle id="shots-title" eyebrow="The application" title="Inside the Assistant" />
              <p className="mt-4 text-sm text-slate-500">{p.screenshotNote}</p>
            </Reveal>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {p.screenshots.slice(1).map((s, i) => (
                <Reveal as="li" key={s.file} delay={i * 60} className={i === 2 ? 'md:col-span-2 md:mx-auto md:max-w-3xl' : ''}>
                  <figure>
                    <img
                      src={shotSrc[s.file]}
                      alt={s.alt}
                      width="800"
                      height="500"
                      loading="lazy"
                      className="w-full rounded-xl shadow-md ring-1 ring-slate-200"
                    />
                    <figcaption className="mt-2 text-sm text-slate-600">{s.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Responsible design */}
        <section aria-labelledby="rai-title" className="bg-navy py-16 text-white">
          <div className={container}>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lavender">Responsible AI &amp; governance</p>
              <h2 id="rai-title" className="mt-2 text-2xl font-bold sm:text-3xl">Designed to slow down at the right moments</h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {p.responsibleDesign.map((r, i) => (
                <Reveal as="li" key={r.title} delay={(i % 3) * 60} className="rounded-xl border border-white/10 bg-midnight p-5">
                  <ShieldCheck className="h-5 w-5 text-lavender" aria-hidden="true" />
                  <p className="mt-3 font-semibold">{r.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{r.text}</p>
                </Reveal>
              ))}
              <Reveal as="li" delay={120} className="rounded-xl border border-lavender/30 bg-white/5 p-5">
                <Lock className="h-5 w-5 text-lavender" aria-hidden="true" />
                <p className="mt-3 font-semibold">Privacy</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{p.privacy}</p>
              </Reveal>
            </ul>
          </div>
        </section>

        {/* Role + collaboration */}
        <section aria-labelledby="role-title" className="bg-white py-16">
          <div className={`${container} grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]`}>
            <Reveal>
              <SectionTitle id="role-title" eyebrow="My role" title={p.role.title} />
              <ul className="mt-6 space-y-3">
                {p.role.items.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-soft p-6">
                <p className="flex items-center gap-2 font-semibold text-navy">
                  <Users className="h-5 w-5 text-accent" aria-hidden="true" />
                  How it was built
                </p>
                <dl className="mt-4 space-y-3">
                  {p.collaboration.map((c) => (
                    <div key={c.label}>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-accent">{c.label}</dt>
                      <dd className="mt-0.5 text-sm leading-relaxed text-slate-700">{c.text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="font-semibold text-navy">Testing and release</p>
                <ul className="mt-3 space-y-2">
                  {p.release.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Limitations + CTA */}
        <section aria-labelledby="limits-title" className="bg-soft py-16">
          <div className={`${container} grid gap-10 lg:grid-cols-2 lg:items-center`}>
            <Reveal>
              <h2 id="limits-title" className="flex items-center gap-2 text-xl font-bold text-navy">
                <Info className="h-5 w-5 text-accent" aria-hidden="true" />
                Limitations
              </h2>
              <ul className="mt-4 space-y-2">
                {p.limitations.map((l) => (
                  <li key={l} className="text-slate-700">{l}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl bg-navy p-8 text-white">
              <p className="font-serif text-2xl italic">{p.tagline}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <AccessButton />
                <a href={`${HOME}#ai`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-lavender hover:text-white">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to portfolio
                </a>
              </div>
              <p className="mt-3 text-sm text-slate-400">{p.accessNote}</p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer top="#top" />
    </>
  )
}
