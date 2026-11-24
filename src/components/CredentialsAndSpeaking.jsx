import { ArrowRight, Award, CalendarDays, Clock, ExternalLink, Mic } from 'lucide-react'
import { credentials } from '../content/credentials'
import { featuredTalk, otherEngagements } from '../content/speaking'
import { Placeholder, Reveal, SectionHeading, container } from './ui'

const statusLabel = {
  upcoming: 'Upcoming',
  delivered: 'Delivered',
  proposed: 'Proposed',
}

function CredentialCard({ c }) {
  const inProgress = c.status === 'in-progress'
  return (
    <li
      className={`flex flex-col rounded-xl border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md ${
        inProgress ? 'border-dashed border-slate-300' : 'border-slate-200 shadow-sm'
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Text monogram, intentionally not an official badge */}
        <span
          aria-hidden="true"
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
            inProgress ? 'bg-slate-100 text-slate-500 ring-1 ring-slate-300' : 'bg-accent/10 text-accent ring-2 ring-accent/30'
          }`}
        >
          {c.abbr}
        </span>
        <div className="min-w-0">
          <h3 className="font-semibold leading-snug text-navy">{c.name}</h3>
          <p className="mt-0.5 text-xs text-slate-500">{c.issuer}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {inProgress ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Training in progress · not yet certified
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
            <Award className="h-3.5 w-3.5" aria-hidden="true" />
            Certified{c.year ? ` ${c.year}` : ''}
          </span>
        )}
        {c.verifyUrl && (
          <a
            href={c.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
          >
            Verify credential
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
            <span className="sr-only">for {c.name} (opens in a new tab)</span>
          </a>
        )}
      </div>
      {!c.verifyUrl && !inProgress && (
        <Placeholder className="mt-3 text-xs">Add a verification link for {c.abbr} in <code>credentials.js</code>.</Placeholder>
      )}
    </li>
  )
}

export default function CredentialsAndSpeaking() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <div className={`${container} grid gap-16 lg:grid-cols-2 lg:gap-12`}>
        {/* Credentials */}
        <section id="credentials" aria-labelledby="credentials-title">
          <Reveal>
            <SectionHeading
              id="credentials-title"
              eyebrow="Credentials"
              title="Certifications & Development"
              align="left"
              intro="Professional certifications in project management, agile product delivery, and AI consulting, with ongoing development in data and cloud fundamentals."
            />
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {credentials.map((c) => (
                <CredentialCard key={c.abbr} c={c} />
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Speaking */}
        <section id="speaking" aria-labelledby="speaking-title">
          <Reveal>
            <SectionHeading
              id="speaking-title"
              eyebrow="Speaking"
              title="Speaking & Thought Leadership"
              align="left"
              intro="Presentations and educational contributions on practical technology, analytics, and AI adoption."
            />
          </Reveal>

          <Reveal delay={80}>
            <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-midnight to-[#2E1065]">
                <div aria-hidden="true" className="absolute h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
                <Mic className="relative h-14 w-14 text-lavender" aria-hidden="true" />
                <span className="absolute left-4 top-4 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20">
                  Featured
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-lavender px-2.5 py-0.5 text-xs font-bold text-navy">
                  {statusLabel[featuredTalk.status]}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-navy">{featuredTalk.title}</h3>
                <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
                  <span className="font-semibold text-accent">{featuredTalk.event}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    {featuredTalk.date}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{featuredTalk.description}</p>
                {featuredTalk.url && (
                  <a
                    href={featuredTalk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    Event details <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
                <Placeholder className="mt-4 text-xs">
                  Confirm the talk status and dates, and replace the draft abstract with the official one, in <code>speaking.js</code>.
                </Placeholder>
              </div>
            </article>

            {otherEngagements.length > 0 && (
              <ul className="mt-6 space-y-3">
                {otherEngagements.map((e) => (
                  <li key={e.title} className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">{e.type}</p>
                    <p className="mt-1 font-semibold text-navy">
                      {e.url ? (
                        <a href={e.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{e.title}</a>
                      ) : (
                        e.title
                      )}
                    </p>
                    <p className="text-sm text-slate-600">{[e.venue, e.date].filter(Boolean).join(' · ')}</p>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-col gap-3 rounded-xl bg-soft p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-700">Planning an event on technology, analytics, or AI adoption?</p>
              <a href="#contact" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-accent hover:underline">
                Speaking inquiries <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  )
}
