// ─────────────────────────────────────────────────────────────────────────────
// PROFILE CONTENT
// Edit text here; no component changes needed.
// Any value set to `null` is a placeholder. Placeholders are shown as yellow
// "Placeholder" notes when you run `npm run dev`, and are HIDDEN automatically
// in the published (production) build. Run `npm run check` to list them.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Renee Bishop',
  headline: 'Enterprise Technology | Analytics | AI | Business Transformation',
  tagline: 'Technology, Analytics & Business Transformation',

  links: {
    // Public-safe version approved 2026-11-03 (no phone/email; generalized
    // agency and implementation details). Replace the PDF file to update it.
    resume: 'resume/Renee-Bishop-Resume.pdf',
    linkedin: 'https://www.linkedin.com/in/renee-bishop-1082056/',
    // OPTIONAL: GitHub profile URL. Leave null to hide.
    github: null,
    // TODO (approval required): a professional email address. Leave null to hide.
    email: null,
  },
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'work', label: 'Case Studies' },
  { id: 'ai', label: 'AI & Innovation' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'speaking', label: 'Speaking' },
]

export const hero = {
  eyebrow: ['IT Leadership', 'Data & Analytics', 'AI', 'Operational Transformation'],
  titleStart: 'Turning complex business challenges into ',
  titleHighlight: 'practical, measurable solutions.',
  description:
    'Enterprise technology and analytics leader with more than a decade of experience connecting business strategy, people, processes, data, and technology to deliver meaningful organizational outcomes.',
  pillars: [
    { icon: 'strategy', title: 'Strategy & Execution', text: 'Align technology with business goals' },
    { icon: 'analytics', title: 'Analytics & Insights', text: 'Turn data into actionable decisions' },
    { icon: 'ai', title: 'AI & Process Innovation', text: 'Apply practical, responsible AI to improve work, people, and outcomes' },
  ],
  highlights: [
    { icon: 'calendar', title: '10+ Years', text: 'Enterprise Technology' },
    { icon: 'people', title: 'Program & Project', text: 'Leadership' },
    { icon: 'gear', title: 'Cross-Functional', text: 'Delivery' },
    { icon: 'trend', title: 'Process & Operational', text: 'Improvement' },
    { icon: 'industry', title: '4 Industries', text: 'Healthcare · Finance · Government · Manufacturing' },
  ],
}

export const about = {
  title: 'Business problem first. Technology second.',
  paragraphs: [
    "I'm an enterprise technology and analytics leader with more than ten years of experience guiding technology, data, governance, and business transformation initiatives across healthcare and medical devices, financial services, government, and manufacturing.",
    'My approach starts with the business problem, not the technology. Before recommending a solution, I want to understand how the work gets done today, where it breaks down, who it affects, and what actually needs to change. Once that is clear, the right mix of people, process, data, and technology usually becomes clear too.',
    'Much of my work sits between business and technical teams. I translate priorities into structured, realistic plans, keep dependencies and risks visible, and build the working relationships that let cross-functional teams make decisions and move forward together. I rely on analytics to ground those decisions in evidence rather than assumption.',
    'I approach AI the same way I approach any technology: as a tool that has to earn its place. I care about where it genuinely improves a workflow, how its outputs are evaluated, and what human oversight it needs to be adopted responsibly.',
  ],
  // Brief, factual mention of founded ventures. Kept intentionally short:
  // this portfolio is about individual professional experience.
  ventures:
    "I'm also the founder of DEFY SciTech, a business transformation and technology consulting practice, and DEFY With AI, which focuses on practical AI strategy and adoption.",
  venturesLink: { label: 'DEFY With AI', href: 'https://defywith.ai' },
  approach: [
    { title: 'Understand the problem', text: 'How does the work happen today, and where does it break down?' },
    { title: 'Define what must change', text: 'Agree on the future state and what success looks like for the business.' },
    { title: 'Choose the right solution', text: 'Determine the people, process, data, and technology changes that fit.' },
    { title: 'Deliver and sustain', text: 'Plan, govern, and prepare the organization so the change holds.' },
  ],
  industries: ['Healthcare & Medical Devices', 'Financial Services', 'Government', 'Manufacturing'],
}

export const contact = {
  intro:
    "I'm open to conversations about senior technology program leadership, analytics, AI governance, and business transformation roles, as well as speaking engagements and professional collaboration.",
}
