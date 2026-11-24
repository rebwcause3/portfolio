// Speaking & thought leadership.
// status: 'upcoming' | 'delivered' | 'proposed'. Keep this accurate. Never mark a
// talk 'upcoming' unless the organizer has confirmed it.
//
import { workflowDecisionAssistant } from './projects.js'

// SOURCE for all talk content below: Renee's final summit presentation deck and
// its presenter notes. Wording is
// drawn from the slides; nothing is added beyond them. Scenario details are
// fictional/synthetic, and all figures in the deck are labeled hypothetical, so no
// figures are repeated here.

export const featuredTalk = {
  title: 'AI or Automation? Choosing the Right Solution for Healthcare Administrative Workflows',
  event: 'AI Health & Wellness Summit',
  format: 'Executive keynote · Virtual',
  // Verified 2026-11-23 on the summit website: event Nov 20–21, 2026 (virtual);
  // session on Day 2, Saturday, November 21. Status approved by Renee.
  date: 'November 21, 2026',
  status: 'delivered',
  description:
    'Using a fictional healthcare referral, this keynote showed how to decide, one workflow step at a time, whether the right answer is a process change, a deterministic rule, AI assistance, or a person, and where a person must confirm before work advances.',
  url: 'https://aihealthandwellnesssummit.com/',
  // Relative link to the dedicated, shareable talk page.
  page: 'speaking/ai-or-automation/',
}

// Detailed content for the dedicated talk page.
export const talkPage = {
  slug: 'speaking/ai-or-automation/',
  disclaimer:
    'The views and tools shared in this presentation are my own and are not endorsed by the AI Health & Wellness Summit. I presented as an independent third-party presenter. All scenarios are fictional and use synthetic data.',
  closing:
    'Progress is not always moving forward. Sometimes it is knowing when to stop. Understand the business first. Then decide whether AI belongs, and where a person must stay.',
  // Recording: not published until distribution permission is confirmed.
  // To enable: set embedUrl (the video host's embed link) and url (its share
  // link), then permissionConfirmed: true. The video file itself is never
  // downloaded or committed; it streams from its host.
  recording: {
    embedUrl: null,
    url: null,
    permissionConfirmed: false,
  },
  scenario: {
    title: 'The scenario: one referral, five places at once',
    text:
      'A fictional outgoing specialty referral (synthetic patient, synthetic practice) arrives by fax with the referring-office contact block blank. Because the field is optional in the system, the blank passes. Some work can continue; one step cannot: insurance verification needs that contact before the visit can proceed.',
    whyItBreaks: ['Handoffs: each one can drop a field', 'Formats: paper, portal, voice, email, spreadsheets', 'Unowned exceptions: the blank nobody is assigned to notice'],
    point: 'None of it is a technology problem.',
  },
  lanes: {
    title: 'Four lanes, each built for a different kind of problem',
    intro: 'Most real workflows use all four. The question is which step belongs in which lane.',
    items: [
      { name: 'Process', role: 'defines ownership', example: 'Required fields defined up front' },
      { name: 'Automation', role: 'applies deterministic rules', example: 'Is the contact present? No. The rule fails, every time.' },
      { name: 'AI assistance', role: 'interprets and proposes', example: 'Proposes seven fields, each tied to a source line; leaves the contact blank' },
      { name: 'People', role: 'decide and carry accountability', example: 'Intake Coordinator verifies through the approved directory' },
    ],
    note: 'No lane is cheaper or better by default. Choose the simplest solution that is effective and sustainable for the step in front of you.',
  },
  decisionPoint: {
    title: 'The decision point the audience weighed',
    intro: 'The referring-office contact is missing. What should the workflow do?',
    options: [
      { label: 'Let AI infer the contact', detail: 'Fast. Probably right. Unverified.' },
      { label: 'Advance the referral anyway', detail: 'No rule, no check. The way it has always been done.' },
      { label: 'Hold the step and assign a person', detail: 'A rule plus a named owner. Slower by an hour; owned today.' },
    ],
  },
  demonstration: {
    title: 'Live demonstration: the referral that shouldn’t advance',
    note: 'Offline simulation with synthetic data and simulated AI. Nothing was sent or stored.',
    steps: [
      'AI assistance proposed seven fields, each tied to a source line, and left the contact blank, because a value with no source is not a value.',
      'A deterministic rule found the blank: the same answer every time, with no judgment required.',
      'One step was held. Authorization, confirmation, and the records request waited; registration and clinical review continued. Nothing was sent on unverified information.',
      'A named person verified the contact through the approved directory, and the held step resumed.',
    ],
  },
  sixQuestions: {
    title: 'Six questions before you choose a lane',
    intro: 'Answer them for one step at a time. The simplest effective, sustainable option wins.',
    items: [
      { q: 'Nature of the problem', detail: 'Is it ownership and definition, or volume and speed?' },
      { q: 'Input type and predictability', detail: 'Structured and stable, or unstructured and variable?' },
      { q: 'Risk and consequence of error', detail: 'What does a quiet mistake cost, and who bears it?' },
      { q: 'Existing capabilities', detail: 'What can the tools and people you already have do today?' },
      { q: 'Implementation complexity', detail: 'Integration, training, change, maintenance: can you sustain it?' },
      { q: 'Human accountability', detail: 'Whose name is on the decision, the exception, and the record?' },
    ],
    note: 'The higher the cost of a quiet failure, the earlier the workflow should pause and hand the step to a person, then resume.',
  },
  governance: {
    title: 'The technology is the easier layer',
    intro: 'Four things leadership owns.',
    areas: [
      { name: 'Governance', questions: ['Who approved this workflow and its rules?', 'Who may change a rule, and how is the change reviewed?', 'Where is the decision record kept?'] },
      { name: 'Privacy and security', questions: ['What does each step actually see, and is it the minimum needed?', 'Is any step inferring or sending information nobody verified?'] },
      { name: 'Human oversight', questions: ['Where must a person confirm before a step advances?', 'Does the level of oversight match the risk of the step?', 'Whose name is on the hand-off?'] },
      { name: 'Controls', questions: ['Which steps can hold, and which may continue?', 'What can the system never do on its own?', 'What is logged every time it holds or resumes?'] },
    ],
    note: 'Governance prompts for leadership discussion. They are not legal, regulatory, or compliance guidance.',
  },
  oneWeek: {
    title: 'One workflow. One week. One page.',
    intro: 'Pick the workflow that frustrates people most, not the biggest one, and work it with the people who do it.',
    days: [
      { day: 'Mon', focus: 'Problem and ownership' },
      { day: 'Tue', focus: 'Validated root cause' },
      { day: 'Wed', focus: 'Lane per step' },
      { day: 'Thu', focus: 'Safeguards and controls' },
      { day: 'Fri', focus: 'Measures and decision' },
    ],
    deliverable:
      'Friday deliverable: a one-page Workflow Decision Brief covering the business problem, evidence, solution options considered, recommended approach, ownership, safeguards and controls, and success measures.',
  },
  tool: {
    name: 'DEFY Workflow Decision Assistant',
    // Public access URL confirmed by Renee (2026-11-23); released Nov 9, 2026.
    url: 'https://crm.defywith.ai/wfdecisionassistant',
    projectPage: 'projects/workflow-decision-assistant/',
    // Shared with the project page so descriptions stay consistent.
    text: workflowDecisionAssistant.shortSummary,
  },
}

// Add future talks and presentations here, newest first:
// { type: 'Presentation' | 'Panel' | 'Workshop', title, venue, date, url, status }
// Only add confirmed engagements. Pending applications are never listed.
export const otherEngagements = []
