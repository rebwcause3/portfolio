import { ArrowLeft, ArrowUpRight, CalendarDays, CheckCircle2, Info, Mic, PlayCircle } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Placeholder, Reveal, container } from '../components/ui'
import { featuredTalk, talkPage as t } from '../content/speaking'

const HOME = '../../'

function ExternalLink({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

function SectionTitle({ eyebrow, title, intro, id }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
      <h2 id={id} className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl">{title}</h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
      {intro && <p className="mt-4 leading-relaxed text-slate-600">{intro}</p>}
    </div>
  )
}

function Recording() {
  const { embedUrl, url, permissionConfirmed } = t.recording
  if (embedUrl && permissionConfirmed) {
    return (
      <div className="space-y-4">
        <div className="overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-white/10">
          <div className="aspect-video">
            {/* Google Drive player. No autoplay: playback starts only when the visitor presses play. */}
            <iframe
              src={embedUrl}
              title={`Recording: ${featuredTalk.title}`}
              className="h-full w-full"
              loading="lazy"
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark"
          >
            <PlayCircle className="h-5 w-5" aria-hidden="true" />
            Watch Full Presentation
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">(opens Google Drive in a new tab)</span>
          </a>
        )}
      </div>
    )
  }
  return (
    import.meta.env.DEV && (
      <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-amber-400/70 bg-white/5 p-6 text-center">
        <PlayCircle className="h-12 w-12 text-amber-300" aria-hidden="true" />
        <Placeholder className="max-w-md">
          Recording slot. Hidden on the live site until <code>talkPage.recording.permissionConfirmed</code> is true (sharing permission confirmed and the Drive file viewable without sign-in).
        </Placeholder>
      </div>
    )
  )
}

export default function TalkPage() {
  const hasVideo = t.recording.embedUrl && t.recording.permissionConfirmed
  return (
    <>
      <a href="#main" className="sr-only z-[100] rounded-md bg-accent px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to main content
      </a>
      <Header home={HOME} current="speaking" />

      <main id="main" tabIndex={-1} className="outline-none">
        {/* Title band */}
        <section id="top" aria-labelledby="talk-title" className="relative overflow-hidden bg-navy text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.3),transparent_55%)]" />
          <div className={`${container} relative py-12 sm:py-16`}>
            <a href={`${HOME}#speaking`} className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-lavender hover:text-white">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Speaking &amp; Publications
            </a>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-full bg-lavender px-2.5 py-0.5 text-xs font-bold text-navy">Delivered</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <Mic className="h-4 w-4 text-lavender" aria-hidden="true" />
                {featuredTalk.format}
              </span>
            </div>
            <h1 id="talk-title" className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {featuredTalk.title}
            </h1>
            <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-300">
              <span className="font-semibold text-white">Renee Bishop</span>
              <span>{featuredTalk.event}</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-lavender" aria-hidden="true" />
                <time dateTime="2026-11-21">{featuredTalk.date}</time>
              </span>
            </p>

            <div className={`mt-10 grid gap-8 ${hasVideo || import.meta.env.DEV ? 'lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]' : 'lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]'}`}>
              {hasVideo || import.meta.env.DEV ? (
                <Recording />
              ) : (
                <p className="text-lg leading-relaxed text-slate-200">{featuredTalk.description}</p>
              )}
              <aside className="space-y-4">
                {(hasVideo || import.meta.env.DEV) && <p className="leading-relaxed text-slate-200">{featuredTalk.description}</p>}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lavender">Try the approach</p>
                  <p className="mt-2 font-semibold text-white">{t.tool.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{t.tool.text}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <ExternalLink href={t.tool.url} className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-dark">
                      Explore the application
                    </ExternalLink>
                    <a href={`${HOME}${t.tool.projectPage}`} className="text-sm font-semibold text-lavender hover:text-white">
                      About the project
                    </a>
                  </div>
                </div>
                <ExternalLink href={featuredTalk.url} className="inline-flex items-center gap-1.5 text-sm font-semibold text-lavender hover:text-white">
                  Event website
                </ExternalLink>
              </aside>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="border-b border-slate-200 bg-soft">
          <p className={`${container} flex items-start gap-2 py-4 text-sm text-slate-600`}>
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            {t.disclaimer}
          </p>
        </div>

        {/* Scenario */}
        <section aria-labelledby="scenario-title" className="bg-white py-16">
          <Reveal className={`${container} grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]`}>
            <div>
              <SectionTitle id="scenario-title" eyebrow="The problem" title={t.scenario.title} />
              <p className="mt-6 leading-relaxed text-slate-700">{t.scenario.text}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-soft p-6">
              <p className="font-semibold text-navy">Why it breaks</p>
              <ul className="mt-3 space-y-2">
                {t.scenario.whyItBreaks.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-slate-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {w}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-serif text-lg italic text-navy">{t.scenario.point}</p>
            </div>
          </Reveal>
        </section>

        {/* Four lanes */}
        <section aria-labelledby="lanes-title" className="bg-soft py-16">
          <div className={container}>
            <Reveal>
              <SectionTitle id="lanes-title" eyebrow="The method" title={t.lanes.title} intro={t.lanes.intro} />
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.lanes.items.map((lane, i) => (
                <Reveal as="li" key={lane.name} delay={i * 60} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-lg font-bold text-navy">{lane.name}</p>
                  <p className="text-sm font-medium text-accent">{lane.role}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">In the referral</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{lane.example}</p>
                </Reveal>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-slate-700">{t.lanes.note}</p>
          </div>
        </section>

        {/* Decision point + demonstration */}
        <section aria-labelledby="demo-title" className="bg-white py-16">
          <div className={`${container} grid gap-12 lg:grid-cols-2`}>
            <Reveal>
              <SectionTitle eyebrow="Audience decision" title={t.decisionPoint.title} intro={t.decisionPoint.intro} />
              <ol className="mt-6 space-y-3">
                {t.decisionPoint.options.map((o, i) => (
                  <li key={o.label} className="flex gap-4 rounded-xl border border-slate-200 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">{i + 1}</span>
                    <span>
                      <span className="block font-semibold text-navy">{o.label}</span>
                      <span className="text-sm text-slate-600">{o.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={80}>
              <SectionTitle id="demo-title" eyebrow="Demonstration" title={t.demonstration.title} intro={t.demonstration.note} />
              <ol className="mt-6 space-y-4">
                {t.demonstration.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* Six questions */}
        <section aria-labelledby="six-title" className="bg-navy py-16 text-white">
          <div className={container}>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lavender">Choosing a lane</p>
              <h2 id="six-title" className="mt-2 text-2xl font-bold sm:text-3xl">{t.sixQuestions.title}</h2>
              <div className="mt-3 h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
              <p className="mt-4 max-w-3xl text-slate-300">{t.sixQuestions.intro}</p>
            </Reveal>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.sixQuestions.items.map((item, i) => (
                <Reveal as="li" key={item.q} delay={(i % 3) * 60} className="rounded-xl border border-white/10 bg-midnight p-5">
                  <p className="text-sm font-bold text-lavender">{i + 1}</p>
                  <p className="mt-1 font-semibold">{item.q}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.detail}</p>
                </Reveal>
              ))}
            </ol>
            <p className="mt-8 max-w-3xl border-l-2 border-lavender pl-4 font-serif text-lg italic text-slate-100">{t.sixQuestions.note}</p>
          </div>
        </section>

        {/* Governance */}
        <section aria-labelledby="gov-title" className="bg-white py-16">
          <div className={container}>
            <Reveal>
              <SectionTitle id="gov-title" eyebrow="Human oversight & governance" title={t.governance.title} intro={t.governance.intro} />
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.governance.areas.map((a, i) => (
                <Reveal as="li" key={a.name} delay={i * 60} className="rounded-xl border border-slate-200 bg-soft p-5">
                  <p className="font-bold text-navy">{a.name}</p>
                  <ul className="mt-3 space-y-2">
                    {a.questions.map((q) => (
                      <li key={q} className="text-sm leading-relaxed text-slate-700">{q}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">{t.governance.note}</p>
          </div>
        </section>

        {/* One week */}
        <section aria-labelledby="week-title" className="bg-soft py-16">
          <div className={container}>
            <Reveal>
              <SectionTitle id="week-title" eyebrow="Putting it to work" title={t.oneWeek.title} intro={t.oneWeek.intro} />
            </Reveal>
            <ol className="mt-10 grid gap-3 sm:grid-cols-5">
              {t.oneWeek.days.map((d) => (
                <li key={d.day} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">{d.day}</p>
                  <p className="mt-1 text-sm font-medium text-navy">{d.focus}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-3xl text-slate-700">{t.oneWeek.deliverable}</p>
          </div>
        </section>

        {/* Closing */}
        <section aria-label="Closing message" className="bg-gradient-to-r from-[#1E1450] via-midnight to-navy py-16 text-white">
          <div className={`${container} max-w-4xl`}>
            <p className="font-serif text-2xl italic leading-snug sm:text-3xl">“{t.closing}”</p>
            <p className="mt-4 text-slate-300">Renee Bishop, {featuredTalk.event}, {featuredTalk.date}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`${HOME}#speaking`} className="inline-flex items-center gap-1.5 rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold hover:border-white">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to portfolio
              </a>
              <a href={`${HOME}#contact`} className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold hover:bg-accent-dark">
                Contact
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer top="#top" />
    </>
  )
}
