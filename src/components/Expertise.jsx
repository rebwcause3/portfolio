import { useRef, useState } from 'react'
import { CheckCircle2, Cpu, Network, ShieldCheck, Users, BarChart3, Settings } from 'lucide-react'
import { expertise } from '../content/expertise'
import { Reveal, SectionHeading, container } from './ui'

const icons = {
  program: Network,
  data: BarChart3,
  process: Settings,
  ai: Cpu,
  governance: ShieldCheck,
  stakeholder: Users,
}

/**
 * Six expertise cards that work as an accessible tab list (WAI-ARIA tabs
 * pattern): click or use arrow keys / Home / End to switch the detail panel.
 */
export default function Expertise() {
  const [activeId, setActiveId] = useState(expertise[0].id)
  const tabRefs = useRef({})
  const active = expertise.find((e) => e.id === activeId)
  const ActiveIcon = icons[active.icon]

  const onKeyDown = (e, index) => {
    const last = expertise.length - 1
    let next = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = index === last ? 0 : index + 1
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = index === 0 ? last : index - 1
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    const id = expertise[next].id
    setActiveId(id)
    tabRefs.current[id]?.focus()
  }

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="bg-white py-20 sm:py-24">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="expertise-title"
            eyebrow="What I Bring"
            title="Core Expertise"
            intro="Select an area to see what it covers and the business value it supports."
          />
        </Reveal>

        <Reveal delay={80}>
          <div role="tablist" aria-label="Core expertise areas" className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
            {expertise.map((item, index) => {
              const Icon = icons[item.icon]
              const selected = item.id === activeId
              return (
                <button
                  key={item.id}
                  ref={(el) => (tabRefs.current[item.id] = el)}
                  role="tab"
                  type="button"
                  id={`tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls="expertise-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(item.id)}
                  onKeyDown={(e) => onKeyDown(e, index)}
                  className={`group relative flex min-h-[132px] flex-col items-center justify-center gap-3 rounded-xl border px-3 py-5 text-center transition duration-200 ${
                    selected
                      ? 'border-accent bg-white shadow-lg shadow-accent/10 ring-1 ring-accent'
                      : 'border-slate-200 bg-soft/60 hover:-translate-y-1 hover:border-lavender hover:bg-white hover:shadow-md'
                  }`}
                >
                  <Icon className={`h-8 w-8 transition-colors ${selected ? 'text-accent' : 'text-accent/80 group-hover:text-accent'}`} aria-hidden="true" />
                  <span className="text-sm font-semibold leading-snug text-navy sm:text-[15px]">{item.title}</span>
                  {selected && <span aria-hidden="true" className="absolute inset-x-6 -bottom-px h-1 rounded-t-full bg-accent" />}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div
          id="expertise-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          tabIndex={0}
          className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-soft"
        >
          <div key={active.id} className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-10 motion-safe:animate-[dialog-in_0.25s_ease-out]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white">
                  <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold text-navy">{active.title}</h3>
              </div>
              <p className="mt-4 leading-relaxed text-slate-700">{active.description}</p>
            </div>
            <div className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Business value</h4>
              <p className="mt-2 leading-relaxed text-slate-700">{active.value}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Typical focus areas</h4>
              <ul className="mt-3 space-y-2">
                {active.practices.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
