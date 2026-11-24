import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Lightbulb, Lock, X } from 'lucide-react'
import { caseStudies, caseStudiesNote } from '../content/caseStudies'
import { Placeholder, Reveal, SectionHeading, container } from './ui'

/* Abstract, non-identifying illustrations instead of stock photography. */
function Visual({ type }) {
  const common = 'h-full w-full'
  if (type === 'timeline') {
    const bars = [
      [10, 18, 90], [60, 36, 120], [40, 54, 70], [130, 72, 110], [100, 90, 80], [190, 108, 90], [160, 126, 100],
    ]
    return (
      <svg viewBox="0 0 320 150" className={common} aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={i} x1={i * 40 + 10} y1="8" x2={i * 40 + 10} y2="142" stroke="#A78BFA" strokeOpacity="0.12" />
        ))}
        {bars.map(([x, y, w], i) => (
          <rect key={i} x={x} y={y} width={w} height="10" rx="5" fill={i % 3 === 0 ? '#A78BFA' : '#7C3AED'} fillOpacity={0.55 + (i % 3) * 0.15} />
        ))}
        <line x1="178" y1="8" x2="178" y2="142" stroke="#C4B5FD" strokeDasharray="3 4" />
      </svg>
    )
  }
  if (type === 'chart') {
    const h = [34, 48, 42, 60, 56, 74, 70, 88, 84, 102]
    return (
      <svg viewBox="0 0 320 150" className={common} aria-hidden="true">
        {[30, 60, 90, 120].map((y) => (
          <line key={y} x1="10" y1={y} x2="310" y2={y} stroke="#A78BFA" strokeOpacity="0.12" />
        ))}
        {h.map((v, i) => (
          <rect key={i} x={22 + i * 29} y={140 - v} width="16" height={v} rx="3" fill="#7C3AED" fillOpacity={0.45 + i * 0.05} />
        ))}
        <polyline
          points={h.map((v, i) => `${30 + i * 29},${128 - v}`).join(' ')}
          fill="none"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }
  // workflow
  const nodes = [[40, 40], [40, 110], [140, 75], [240, 40], [240, 110], [300, 75]]
  const edges = [[0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5]]
  return (
    <svg viewBox="0 0 340 150" className={common} aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#A78BFA" strokeOpacity="0.5" strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 2 ? 18 : 12} fill="#111D35" stroke={i === 2 ? '#C4B5FD' : '#7C3AED'} strokeWidth="2" />
          <circle cx={x} cy={y} r={i === 2 ? 6 : 4} fill={i === 2 ? '#C4B5FD' : '#A78BFA'} />
        </g>
      ))}
    </svg>
  )
}

function CaseStudyDialog({ study, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (study && dialog && !dialog.open) dialog.showModal()
  }, [study])

  if (!study) return null

  // Every close path (X button, Esc, backdrop click) goes through here, so
  // state resets immediately without relying on the async 'close' event.
  const close = () => {
    ref.current?.close()
    onClose()
  }

  return (
    <dialog
      ref={ref}
      onCancel={(e) => {
        e.preventDefault()
        close()
      }}
      onClick={(e) => e.target === ref.current && close()}
      aria-labelledby="case-dialog-title"
      className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-2xl bg-white p-0 text-slate-800 shadow-2xl"
    >
      <div className="max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white/95 px-6 py-5 backdrop-blur sm:px-8">
          <div>
            <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">{study.tag}</span>
            <h3 id="case-dialog-title" className="mt-2 text-xl font-bold text-navy sm:text-2xl">{study.title}</h3>
          </div>
          <button
            type="button"
            onClick={close}
            className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-navy"
          >
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Close case study</span>
          </button>
        </div>

        <div className="space-y-8 px-6 py-6 sm:px-8 sm:py-8">
          <p className="flex items-start gap-2 rounded-lg bg-soft px-4 py-3 text-sm text-slate-600">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            {caseStudiesNote}
          </p>
          <Placeholder>
            Draft for review. Confirm each role and approach statement reflects your actual responsibilities before publishing.
          </Placeholder>

          <section>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">The business challenge</h4>
            <p className="mt-2 leading-relaxed text-slate-700">{study.challenge}</p>
          </section>

          <section>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">My role & responsibilities</h4>
            <ul className="mt-3 space-y-2">
              {study.role.map((r) => (
                <li key={r} className="flex items-start gap-2 text-slate-700">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Approach & delivery considerations</h4>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {study.approach.map((a) => (
                <li key={a.lead} className="rounded-lg border border-slate-200 p-4 text-sm leading-relaxed text-slate-700">
                  <span className="block font-semibold text-navy">{a.lead}</span>
                  {a.text.charAt(0).toUpperCase() + a.text.slice(1)}.
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Types of business value supported</h4>
            <ul className="mt-3 space-y-2">
              {study.value.map((v) => (
                <li key={v} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {v}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl bg-navy p-6 text-white">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-lavender">
              <Lightbulb className="h-4 w-4" aria-hidden="true" />
              Key lessons
            </h4>
            <ul className="mt-3 space-y-2">
              {study.lessons.map((l) => (
                <li key={l} className="font-serif text-lg italic leading-snug text-slate-100">“{l}”</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </dialog>
  )
}

export default function CaseStudies() {
  const [openStudy, setOpenStudy] = useState(null)
  const triggerRef = useRef(null)

  const handleClose = useCallback(() => {
    setOpenStudy(null)
    triggerRef.current?.focus()
  }, [])

  return (
    <section id="work" aria-labelledby="work-title" className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.22),transparent_55%)]" />
      <div className={`${container} relative`}>
        <Reveal>
          <SectionHeading
            id="work-title"
            eyebrow="Selected Work"
            title="Selected Case Studies"
            intro="Representative examples of technology, analytics, and process transformation in complex, regulated environments."
            dark
          />
          <p className="mx-auto mt-4 flex max-w-2xl items-start justify-center gap-2 text-center text-sm text-slate-400">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-lavender" aria-hidden="true" />
            <span>{caseStudiesNote}</span>
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal as="li" key={study.id} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-midnight transition duration-200 hover:-translate-y-1 hover:border-lavender/50 hover:shadow-xl hover:shadow-accent/10">
                <div className="h-40 bg-gradient-to-br from-[#16244A] to-navy px-4 py-3">
                  <Visual type={study.visual} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="self-start rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">{study.tag}</span>
                  <h3 className="mt-3 text-lg font-bold text-white">{study.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{study.summary}</p>
                  <button
                    type="button"
                    onClick={(e) => {
                      triggerRef.current = e.currentTarget
                      setOpenStudy(study)
                    }}
                    className="mt-5 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-lavender hover:text-white"
                  >
                    View Case Study
                    <span className="sr-only">: {study.title}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>

      <CaseStudyDialog study={openStudy} onClose={handleClose} />
    </section>
  )
}
