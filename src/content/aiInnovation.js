// AI, Analytics & Innovation section + the independent evaluation demo.
// The demo scenario, organization, and both AI responses are FICTIONAL and
// written for this portfolio. No employer or client data is used.

export const aiAreas = [
  { icon: 'accuracy', title: 'AI Response Quality & Accuracy', text: 'Judging whether AI outputs are correct, grounded, and fit for the business context they will be used in.' },
  { icon: 'responsible', title: 'Responsible AI Adoption', text: 'Matching AI to problems it is suited for, with clear expectations, known limitations, and accountability.' },
  { icon: 'oversight', title: 'Human Oversight & Governance', text: 'Defining where people review, approve, or override AI outputs, and who owns those decisions.' },
  { icon: 'workflow', title: 'Workflow Evaluation', text: 'Looking at the whole workflow, not just the model, to see whether AI, automation, or neither is the right answer.' },
  { icon: 'process', title: 'Business Process Analysis', text: 'Understanding the current process well enough to know what AI would actually change.' },
  { icon: 'data', title: 'Data Quality & Analytics', text: 'AI and analytics are only as reliable as the data and definitions underneath them.' },
  { icon: 'risk', title: 'Technology Risk Assessment', text: 'Weighing privacy, security, compliance, and operational risk before adoption, not after.' },
]

export const criteria = [
  { id: 'accuracy', label: 'Accuracy', question: 'Are the claims correct and supportable?' },
  { id: 'completeness', label: 'Completeness', question: 'Does it address the whole problem, including constraints?' },
  { id: 'practicality', label: 'Practicality', question: 'Could the organization realistically implement it?' },
  { id: 'risk', label: 'Risk', question: 'Does it identify and manage privacy, safety, compliance, and operational risk? (5 = well managed)' },
  { id: 'clarity', label: 'Clarity', question: 'Is it clear, specific, and easy to act on?' },
]

export const demo = {
  label: 'Independent portfolio demonstration',
  disclaimer:
    'Fictional scenario and sample responses written for this portfolio. This is not paid professional AI evaluation work and uses no employer or client data.',
  scenario: {
    org: 'Maple Ridge Outpatient Clinic (fictional)',
    context:
      'A mid-sized outpatient clinic is seeing more missed appointments, and front-desk staff spend a large part of each day making manual reminder calls.',
    prompt: '"How should we reduce no-shows and the staff time spent on appointment reminders?"',
  },
  responses: [
    {
      id: 'A',
      title: 'Recommendation A',
      text:
        "Deploy an AI voice assistant that calls every patient, use all available health records to predict who will no-show, and automatically double-book those patients' slots. This will eliminate no-shows and remove the need for reminder staff entirely.",
      reference: {
        accuracy: { score: 2, note: '"Eliminate no-shows" is an unsupported promise. Prediction models reduce, not remove, uncertainty.' },
        completeness: { score: 2, note: 'Skips current-state analysis, patient experience, and how success would be measured.' },
        practicality: { score: 2, note: 'Requires broad record access, new tooling, and a staffing change all at once, with no pilot.' },
        risk: { score: 1, note: 'Broad use of health records raises privacy concerns, double-booking can harm patients, and removing staff removes oversight.' },
        clarity: { score: 4, note: 'Easy to understand, but clearly wrong in important ways.' },
      },
    },
    {
      id: 'B',
      title: 'Recommendation B',
      text:
        'Start by reviewing current no-show data by appointment type, time of day, and reminder method to understand the pattern. Add automated text and email reminders through the existing scheduling system with a simple confirm-or-reschedule option, and keep staff calls for complex or high-need appointments. Pilot for 60 days, track no-show rate and staff time, and confirm patient-communication consent and privacy requirements before expanding.',
      reference: {
        accuracy: { score: 4, note: 'Claims are reasonable and appropriately modest; no promised outcome.' },
        completeness: { score: 4, note: 'Covers analysis, solution, pilot, and measurement. Does not address patients without mobile access or language preferences.' },
        practicality: { score: 5, note: 'Builds on the existing system, starts small, and keeps staff involved.' },
        risk: { score: 4, note: 'Names consent and privacy and keeps human follow-up, though it could be more specific about data handling.' },
        clarity: { score: 4, note: 'Clear sequence of steps with measurable checkpoints.' },
      },
    },
  ],
  verdict: {
    preferred: 'B',
    summary:
      'Recommendation B is the stronger answer, not because it is more ambitious, but because it starts with the problem, uses technology proportionately, keeps people in the loop, and defines how success will be measured.',
    takeaway:
      'A confident, well-written AI answer can still be the riskier one. Evaluation criteria make that visible.',
  },
  future:
    'Additional independent demonstrations, such as AI-versus-automation workflow assessments and response grounding checks, will be added over time.',
}
