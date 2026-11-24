import { AlertTriangle, ArrowRight, BarChart3, Eye, GitBranch, Scale, Target, Workflow } from 'lucide-react'
import { aiAreas } from '../content/aiInnovation'
import EvaluationDemo from './EvaluationDemo'
import { workflowDecisionAssistant as wda } from '../content/projects'
import wdaShot from '../assets/projects/wda-3-result.webp'
import { Reveal, SectionHeading, container } from './ui'

const icons = {
  accuracy: Target,
  responsible: Scale,
  oversight: Eye,
  workflow: GitBranch,
  process: Workflow,
  data: BarChart3,
  risk: AlertTriangle,
}

export default function AiInnovation() {
  return (
    <section id="ai" aria-labelledby="ai-title" className="bg-soft py-20 sm:py-24">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="ai-title"
            eyebrow="AI, Analytics & Innovation"
            title="Practical AI starts with the problem"
            intro="AI is a tool. The useful questions are whether it fits the workflow, how good its outputs really are, who oversees it, and what risks come with it."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiAreas.map((area, i) => {
            const Icon = icons[area.icon]
            return (
              <Reveal
                as="li"
                key={area.title}
                delay={(i % 4) * 60}
                className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-lavender hover:shadow-md ${
                  i === aiAreas.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 className="mt-3 font-semibold text-navy">{area.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{area.text}</p>
              </Reveal>
            )
          })}
          <Reveal as="li" delay={180} className="hidden rounded-xl bg-gradient-to-br from-accent to-[#5B21B6] p-5 text-white lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-200">Try it below</p>
            <p className="mt-2 font-semibold leading-snug">
              Score two fictional AI recommendations against transparent criteria, then compare with a reference evaluation.
            </p>
          </Reveal>
        </ul>

        {/* Featured applied AI project */}
        <Reveal className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Applied AI project</p>
          <a
            href={wda.slug}
            className="group mt-3 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
          >
            <div className="bg-navy p-4 sm:p-6">
              <img src={wdaShot} alt="" width="800" height="500" loading="lazy" className="w-full rounded-xl ring-1 ring-white/10" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">{wda.maturity}</span>
                <span className="text-xs font-medium text-slate-500">Released {wda.released}</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-navy">{wda.name}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{wda.summary}</p>
              <p className="mt-3 text-sm font-medium text-slate-700">Role: {wda.role.title}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-accent">
                View project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </a>
        </Reveal>

        <EvaluationDemo />
      </div>
    </section>
  )
}
