import { AlertTriangle, BarChart3, Eye, GitBranch, Scale, Target, Workflow } from 'lucide-react'
import { aiAreas } from '../content/aiInnovation'
import EvaluationDemo from './EvaluationDemo'
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

        <EvaluationDemo />
      </div>
    </section>
  )
}
