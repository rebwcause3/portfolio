// ─────────────────────────────────────────────────────────────────────────────
// SELECTED WORK / CASE STUDIES
// CONFIDENTIALITY RULES (review every edit against these):
//  • No employer, client, project, or code names
//  • No system/vendor names, architecture details, or configurations
//  • No metrics, dates, locations, or team sizes that could identify the work
//  • "Types of business value supported" describes the KIND of value, never a
//    quantified result. Only add a number if it is public and approved.
//
// DRAFT STATUS: The role and approach statements below are drafted from the
// focus areas in the portfolio brief. Renee must confirm each line reflects
// her actual responsibilities before publishing.
// ─────────────────────────────────────────────────────────────────────────────

export const caseStudiesNote =
  'Generalized descriptions of representative work. Organization names, project names, systems, and metrics are intentionally omitted to protect confidentiality.'

export const caseStudies = [
  {
    id: 'program-modernization',
    tag: 'Program Delivery',
    visual: 'timeline',
    title: 'Enterprise Program Modernization',
    summary:
      'Coordinating a complex, cross-functional technology initiative across multiple workstreams, from governance and delivery planning through operational readiness.',
    challenge:
      'A large organization needed to modernize a set of interconnected technology capabilities. The work spanned several business and technical teams, each with its own priorities, timelines, and dependencies, and there was limited shared visibility into how decisions in one area affected the others.',
    role: [
      'Program and project leadership across multiple workstreams',
      'Governance and status cadence for business and technical stakeholders',
      'Delivery planning, dependency tracking, and risk management',
      'Liaison between business stakeholders and technical delivery teams',
    ],
    approach: [
      { lead: 'Integrated planning', text: 'a single view of milestones and cross-team dependencies' },
      { lead: 'Governance', text: 'regular decision forums with clear ownership and escalation paths' },
      { lead: 'Risk management', text: 'early identification and tracking of risks, issues, and decisions' },
      { lead: 'Stakeholder alignment', text: 'consistent communication tailored to executive and working-team audiences' },
      { lead: 'Operational readiness', text: 'confirming people, processes, and support models were prepared before transition' },
    ],
    value: [
      'Clearer visibility into program status and dependencies',
      'Earlier identification of risks and decision points',
      'Stronger alignment between business priorities and technical delivery',
      'A more predictable transition into day-to-day operations',
    ],
    lessons: [
      'Shared visibility is a prerequisite for shared accountability.',
      'Dependencies deserve as much attention as deliverables.',
      'Readiness is a business milestone, not just a technical one.',
    ],
  },
  {
    id: 'analytics-reporting',
    tag: 'Data & Analytics',
    visual: 'chart',
    title: 'Analytics & Reporting Transformation',
    summary:
      'Improving how business teams access and trust enterprise information through integrated reporting, better data quality, and a structured analytics delivery approach.',
    challenge:
      "Business teams relied on reporting that came from multiple sources, was assembled manually, and didn't always agree. Time went into reconciling numbers instead of using them, and confidence in the data was uneven.",
    role: [
      'Analytics and reporting delivery leadership from requirements through rollout',
      'Partnership with business users to define reporting needs and metric definitions',
      'Coordination with data and technical teams on integration and data quality',
      'Prioritization of reporting work against business value',
    ],
    approach: [
      { lead: 'Start with the decisions', text: 'identify which business questions the reporting needs to answer' },
      { lead: 'Common definitions', text: 'agree on what each metric means before building it' },
      { lead: 'Data quality', text: 'surface quality issues and address them at the source where possible' },
      { lead: 'Integration', text: 'consolidate sources into a consistent reporting foundation' },
      { lead: 'Iterative delivery', text: 'release in increments and refine based on user feedback' },
      { lead: 'Adoption', text: 'training and support so teams actually use the new reporting' },
    ],
    value: [
      'Improved access to business information',
      'Greater consistency and confidence in reported data',
      'Less manual effort assembling and reconciling reports',
      'Better-informed operational and leadership decisions',
    ],
    lessons: [
      'Reporting problems are often definition problems in disguise.',
      'Data quality improves fastest when it has a clear owner.',
      'A report nobody trusts is a report nobody uses.',
    ],
  },
  {
    id: 'operational-systems',
    tag: 'Process Improvement',
    visual: 'workflow',
    title: 'Operational Systems & Process Transformation',
    summary:
      'Guiding process and system changes in a regulated, operationally sensitive environment while protecting day-to-day continuity.',
    challenge:
      'An operational area depended on specialized systems and closely linked workflows. Changes were needed to improve integration and reduce manual handoffs, but the environment was regulated and operations could not absorb disruption.',
    role: [
      'Coordination of process and system changes across operational and technical teams',
      'Workflow and system dependency analysis',
      'Transition sequencing and continuity planning',
      'Keeping compliance and documentation needs visible throughout',
    ],
    approach: [
      { lead: 'Current-state mapping', text: 'document how work and information actually flow today' },
      { lead: 'Dependency analysis', text: 'identify the upstream and downstream impact of each change' },
      { lead: 'Future-state design', text: 'align process changes with system integration plans' },
      { lead: 'Continuity planning', text: 'sequence changes and contingencies to protect operations' },
      { lead: 'Compliance awareness', text: 'build documentation and review into the plan, not after it' },
      { lead: 'Readiness', text: 'prepare staff and support teams ahead of each transition' },
    ],
    value: [
      'Reduced reliance on manual handoffs',
      'More consistent, reliable operational data',
      'Change delivered with operational continuity as a priority',
      'Clearer documentation supporting compliance needs',
    ],
    lessons: [
      'In regulated operations, the process is part of the product.',
      'Map the workflow before touching the system.',
      'Continuity planning is what makes change acceptable to the people doing the work.',
    ],
  },
]
