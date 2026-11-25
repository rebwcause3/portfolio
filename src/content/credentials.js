// Certifications. Only list credentials that are EARNED as `status: 'earned'`.
// Training in progress must stay `status: 'in-progress'` until the exam is passed.
// Official badge artwork is intentionally NOT used; add it only after you have
// your verified digital badge and the issuer's usage permission.

export const credentials = [
  {
    abbr: 'PMP',
    name: 'Project Management Professional',
    issuer: 'Project Management Institute (PMI)',
    year: 2018,
    status: 'earned',
    // TODO: PMI Certification Registry or Credly link
    verifyUrl: null,
  },
  {
    abbr: 'CSM',
    name: 'Certified ScrumMaster',
    issuer: 'Scrum Alliance',
    year: 2019,
    status: 'earned',
    // TODO: Scrum Alliance profile / certificant directory link
    verifyUrl: null,
  },
  {
    abbr: 'CSPO',
    name: 'Certified Scrum Product Owner',
    issuer: 'Scrum Alliance',
    year: 2019,
    status: 'earned',
    // TODO: Scrum Alliance profile / certificant directory link
    verifyUrl: null,
  },
  {
    abbr: 'AI',
    // Title exactly as printed on the certificate (issued 2026-09-24).
    name: 'AI Consultant Certification',
    issuer: 'AI InnoVision · CPD accredited',
    year: 2026,
    status: 'earned',
    // OPTIONAL: public verification page for this certificate, if the issuer provides one
    verifyUrl: null,
  },
  {
    abbr: 'CAAB',
    // Issuer's official title. Awarded November 24, 2026.
    name: 'Certified AI Agent Builder',
    issuer: 'AI InnoVision',
    year: 2026,
    status: 'earned',
    verifyUrl: 'https://credsverse.com/credentials/59d236a9-f118-40d9-b8a8-8173dbcb7d11',
  },
  {
    abbr: 'Azure',
    name: 'Microsoft Azure Data Fundamentals',
    issuer: 'Microsoft',
    status: 'in-progress',
    verifyUrl: null,
  },
]
