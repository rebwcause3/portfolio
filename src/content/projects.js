// Applied AI projects. Every statement must trace to documented evidence. Maturity labels:
// 'Operational application' | 'Internal business project' | 'Educational demonstration'
// | 'Prototype' | 'In progress'. Planned concepts are never published.
//
// CONFIDENTIALITY: no decision rules, thresholds, engine logic, prompts, build
// fingerprints, or internal documents. Screenshots use fictional inputs only.

export const workflowDecisionAssistant = {
  slug: 'projects/workflow-decision-assistant/',
  name: 'DEFY Workflow Decision Assistant',
  maturity: 'Operational application',
  // Written public-release approval + live verification (final acceptance checklist).
  released: 'November 9, 2026',
  releasedIso: '2026-11-09',
  tagline: 'Understand the workflow before choosing the technology.',
  // SINGLE SOURCE for every description of this tool (home card, summit page,
  // project page, page metadata). The six options are the tool's own, verified
  // on the live result screen, listed simplest to most complex:
  // Do nothing for now · Redesign the process · Train people ·
  // Use tools you already own · Write a deterministic rule · Add AI assistance
  summary:
    'A free guided tool that helps decide whether a workflow needs no change for now, a redesigned process, training, the tools you already own, a deterministic rule, or AI assistance, and produces a Decision Brief a team can discuss.',
  shortSummary:
    'A free guided tool that compares six options, from doing nothing for now to adding AI assistance, and produces a Decision Brief a team can discuss.',
  accessUrl: 'https://crm.defywith.ai/wfdecisionassistant',
  accessNote: 'Free. Access requires a first name and email address.',

  problem:
    'Organizations often reach for technology, including AI, before the workflow problem is clearly defined. The result can be tools that automate the wrong thing, add risk, or leave the real cause, such as unclear ownership or missing information, untouched. The Assistant puts the problem, the evidence, and the people accountable for the work ahead of the technology choice.',

  sections: [
    'Business problem and desired outcome',
    'Evidence and root cause',
    'Options considered',
    'Recommended approach',
    'Ownership and safeguards',
    'Success measures and decision',
  ],
  options: ['Do nothing for now', 'Redesign the process', 'Train people', 'Use tools you already own', 'Write a deterministic rule', 'Add AI assistance'],
  output:
    'A preliminary result with a suggested decision and a direction to test, an explanation of how much weight to give it, all six options compared from simplest to most complex, next steps, open items to close, and a downloadable Decision Brief.',

  responsibleDesign: [
    { title: 'Simplest effective option first', text: 'Options are compared from simplest to most complex, and the tool explains when AI assistance is not recommended because a simpler approach fits.' },
    { title: 'Honest about confidence', text: 'Results are labeled as preliminary and based only on self-reported answers, with assessment completeness, evidence quality, and recommendation confidence shown alongside.' },
    { title: 'Evidence and ownership before action', text: 'Recommendations are held back when evidence, an accountable owner, or human confirmation is missing, and the open items to close are listed.' },
    { title: 'Confidential information kept out', text: 'Each section asks users to describe roles, not names, and to leave out customer, patient, employee, or other confidential information.' },
    { title: 'User control of answers', text: 'Answers are saved in the visitor’s own browser so they can return later, and can be erased at any time.' },
  ],

  // Plain-language privacy statement, based on a documented browser network
  // inspection (Nov 9, 2026) and an independent re-check (Nov 23, 2026).
  privacy:
    'Assessment answers are kept in the visitor’s browser and can be erased; an independent check with fictional data found that the Assistant did not transmit assessment answers. Like most web pages, the hosting page uses standard visit analytics, and the access page’s sign-up form collects a first name and email address.',

  role: {
    title: 'Product owner',
    items: [
      'Defined the product vision, business problem, target audience, and business requirements',
      'Designed the decision methodology and the Decision Brief requirements',
      'Set the governance, responsible-AI, and human-oversight requirements and made the governance decisions',
      'Directed the workflow and user experience',
      'Led quality assurance and acceptance testing, including physical-phone and attendee-journey testing',
      'Approved the public release',
      'Integrated the tool into professional education, as the primary audience resource for the AI Health & Wellness Summit keynote',
    ],
  },
  collaboration: [
    { label: 'Implementation', text: 'AI-assisted development under my direction, review, and approval.' },
    { label: 'Independent testing', text: 'AI-assisted acceptance testing in separate sessions that did not edit the application.' },
    // Generic attribution until consent to name the collaborator is confirmed.
    { label: 'Technical review', text: 'A technical collaborator: browser privacy check and review of proposed decision-rule changes.' },
  ],

  release: [
    'An earlier release candidate was stopped at a NO-GO decision on November 8, 2026 so defects could be corrected.',
    'Release 1.4 passed independent acceptance testing, including narrow-screen and physical-phone checks.',
    'Public release was approved in writing on November 9, 2026, after the live page was verified to match the approved build.',
  ],

  limitations: [
    'Recommendations are preliminary and based on self-reported answers; they are a starting point for a team discussion, not a final decision.',
    'The tool provides decision support, not legal, regulatory, or compliance advice.',
    'No usage or business-impact metrics are reported here.',
  ],

  screenshots: [
    { file: 'wda-1-start.webp', alt: 'Workflow Decision Assistant start screen: "Work out what this workflow actually needs."', caption: 'Start screen' },
    { file: 'wda-2-section.webp', alt: 'Section 1 of 6, Business problem and desired outcome, with guidance to leave out names and confidential information', caption: 'Section 1 of 6, with the "keep it clean" guidance' },
    { file: 'wda-3-result.webp', alt: 'Preliminary result screen showing a suggested decision and how much weight to give it', caption: 'Preliminary result and confidence' },
    { file: 'wda-4-options.webp', alt: 'All six options compared, with an explanation of why AI assistance is not recommended in this example', caption: 'All six options compared, and why AI is not recommended here' },
  ],
  screenshotNote: 'Screenshots of the live tool using a fictional example (invoice approval).',
  talkPage: 'speaking/ai-or-automation/',
}
