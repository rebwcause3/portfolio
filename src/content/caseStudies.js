// ─────────────────────────────────────────────────────────────────────────────
// SELECTED WORK / CASE STUDIES
// CONFIDENTIALITY RULES (review every edit against these):
//  • No employer, client, agency, project, or code names
//  • No system/vendor/tool names, architecture details, or configurations
//  • No dollar figures, headcounts, dates, or locations that identify the work
//
// EVIDENCE RULES:
//  • Every `role` and `approach` line must be supported by Renee's resume.
//  • `outcomes` = DOCUMENTED results only (stated on the resume), each with a
//    plain-language note of which initiative it came from.
//  • `value` = the KINDS of business value the work was designed to support.
//    These are intended benefits, not measured results.
//  • `basis` + `disclosure` must say honestly whether a case study is a
//    composite of several initiatives or draws on a single role.
//
// Revised November 2026.
// ─────────────────────────────────────────────────────────────────────────────

export const caseStudiesNote =
  'Generalized descriptions of representative work. Organization names, project names, systems, and metrics are intentionally omitted to protect confidentiality.'

export const basisLabels = {
  composite: 'Composite',
  'single-role': 'Single role',
}

export const caseStudies = [
  {
    id: 'program-modernization',
    tag: 'Program Delivery',
    visual: 'timeline',
    basis: 'composite',
    disclosure:
      'This case study draws on experience across multiple enterprise technology and modernization initiatives. Organizational details have been generalized to protect confidentiality.',
    title: 'Enterprise Program Modernization',
    summary:
      'Coordinating workstreams, governance, dependencies, and operational readiness across business and technical teams in enterprise technology and modernization initiatives.',
    challenge:
      'Across several enterprise initiatives, interconnected technology and data capabilities needed to be modernized while multiple business and technical teams worked to their own priorities and timelines. Demand, dependencies, and delivery commitments had to be coordinated across those teams, and in some cases a project-based way of working needed to mature into a structured program.',
    role: [
      'Led analytics workstreams within broader enterprise programs, coordinating cross-functional dependencies, governance, delivery planning and stakeholder alignment',
      // Verified against Renee's resume (November 2026).
      'Program management of enterprise data programs in a federal IT services role, including PMO coordination and guidance to technical teams',
      'Project management, delivery planning, and roadmap development',
      'Governance: establishing and coordinating recurring forums with business process owners to align demand, prioritization, and delivery commitments',
      'Dependency and risk tracking, with executive reporting on portfolio performance, risks, dependencies, and roadmap progress',
      'Stakeholder alignment, serving as a liaison between business, product, and technical teams',
    ],
    approach: [
      { lead: 'Roadmap and planning', text: 'a multi-year roadmap aligning initiatives with business priorities and KPI frameworks' },
      { lead: 'Governance and intake', text: 'a governance structure, intake process, and operating model to move from project-based work toward a formal program' },
      { lead: 'Prioritization', text: 'recurring forums with business process owners to balance demand against delivery commitments' },
      { lead: 'Dependency and risk management', text: 'tracking cross-program dependencies and risks and reporting them to leadership' },
      { lead: 'Operational readiness', text: 'user acceptance testing, business sign-off, and training, with operating-model changes considered as part of readiness' },
    ],
    outcomes: [],
    value: [
      'Clearer visibility into status, risks, and dependencies for leadership',
      'More consistent prioritization of demand against delivery capacity',
      'Stronger alignment between business priorities and technology delivery',
      'A more structured path from project-based work to a managed program',
    ],
    lessons: [
      'Shared visibility is a prerequisite for shared accountability.',
      'Dependencies deserve as much attention as deliverables.',
      'Business readiness is just as important as technical readiness.',
    ],
  },
  {
    id: 'analytics-reporting',
    tag: 'Data & Analytics',
    visual: 'chart',
    basis: 'composite',
    disclosure:
      'This case study draws on experience across multiple analytics and reporting initiatives. The documented outcome below is attributed to the specific initiative it came from. Organizational details have been generalized to protect confidentiality.',
    title: 'Analytics & Reporting Transformation',
    summary:
      'Improving access to business information through structured analytics delivery, standardized definitions, data integration, and report automation.',
    challenge:
      'Reporting processes relied on manual data preparation and consolidation, increasing the effort required to produce timely, accessible business insights.',
    role: [
      'Design, development, and deployment of departmental and enterprise-wide business intelligence applications',
      'Building and owning a multi-year enterprise analytics roadmap, and leading analytics workstreams within strategic programs',
      'Recurring governance with business process owners to align reporting demand, prioritization, and delivery',
      'Oversight of enterprise reporting across ERP and CRM platforms, with a focus on data integration and accuracy',
      'Applying standardized data definitions to assess systems and processes, and testing data outputs for accuracy and reliability',
    ],
    approach: [
      { lead: 'Start with the decisions', text: 'align reporting with business priorities and KPI frameworks' },
      { lead: 'Common definitions', text: 'apply standardized data definitions before building or assessing reports' },
      { lead: 'Data quality', text: 'test data outputs for accuracy and reliability' },
      { lead: 'Integration', text: 'bring data from multiple sources into consistent reporting' },
      { lead: 'Automation', text: 'replace recurring manual report preparation with automated reporting' },
      { lead: 'Standards and adoption', text: 'document reporting standards and provide training so teams can use and sustain the work' },
    ],
    outcomes: [
      {
        text: 'Automated executive workforce overtime reports and P&L financial statements, eliminating 8–10 hours of manual reporting effort per reporting cycle.',
        source: 'Health system finance reporting initiative',
      },
      {
        text: 'Documented BI standard operating procedures and report and dashboard development standards that were adopted by application development teams across the organization.',
        source: 'Same health system initiative',
      },
    ],
    value: [
      'Improved access to business information',
      'Greater consistency and confidence in reported data',
      'Better-informed operational and leadership decisions',
    ],
    lessons: [
      'Effective reporting begins with understanding what the business needs to know and why.',
      'Data quality and consistency require clear ownership and accountability.',
      'Automating a reporting process creates value when the information is accessible, timely and actionable.',
    ],
  },
  {
    id: 'operational-systems',
    tag: 'Process Improvement',
    visual: 'workflow',
    basis: 'single-role',
    disclosure:
      'This case study draws on related security initiatives within a single federal IT services role. The agency, systems, tools, and account counts are intentionally not named to protect confidentiality.',
    title: 'Operational Systems & Process Transformation',
    summary:
      'Coordinating security-sensitive system implementations in a regulated federal environment while protecting critical administrative operations.',
    challenge:
      'A regulated federal environment needed stronger controls over privileged administrative access to critical systems. The changes affected day-to-day administrative workflows and emergency recovery procedures, so they had to be introduced without disrupting the people and operations that depended on that access.',
    role: [
      'Information security strategy and counsel for federal continuous monitoring and access-management initiatives',
      'Requirements facilitation between technical teams and federal customers',
      'Implementation coordination for a privileged access management solution, including UAT scheduling, formal sign-off, training sessions, and ongoing policy updates',
      'Impact and gap analysis, requirements analysis, and test plan development to shape implementation strategy',
      'Planning to address emergency-access and disaster recovery risks for privileged administrator accounts',
    ],
    approach: [
      { lead: 'Requirements facilitation', text: 'translate security needs into requirements agreed by technical teams and federal customers' },
      { lead: 'Impact and gap analysis', text: 'assess how each change affects existing access, workflows, and controls before implementation' },
      { lead: 'Implementation coordination', text: 'coordinate scheduling, testing, and rollout activities across technical teams and customers' },
      { lead: 'UAT and formal sign-off', text: 'validate changes with users and obtain sign-off before they take effect' },
      { lead: 'Training and policy updates', text: 'prepare administrators through training and keep policies current as the solution evolves' },
      { lead: 'Emergency access and continuity', text: 'plan emergency-access ("break-glass") procedures so disaster recovery is not compromised' },
      { lead: 'Security and governance', text: 'keep information security and governance considerations central to each decision' },
    ],
    outcomes: [
      {
        text: 'Delivered three proposed implementation strategies within an 8-hour critical turnaround to mitigate security risks for a privileged service account initiative.',
        source: 'Federal IT services role',
      },
    ],
    value: [
      'Stronger control over privileged access to critical systems',
      'Changes introduced with operational continuity as a priority',
      'Administrators prepared through training and clear sign-off',
      'Risks surfaced early through impact and gap analysis',
    ],
    lessons: [
      'Understand the people, processes and operational dependencies before changing the technology.',
      'Security and governance should be incorporated into implementation planning, not added afterward.',
      'Operational continuity must be considered throughout the implementation lifecycle.',
    ],
  },
]
