import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { contact, profile } from '../content/profile'
import { Placeholder, Reveal, SectionHeading, container } from './ui'

function ContactCard({ href, icon: Icon, title, detail, download, external }) {
  return (
    <li>
      <a
        href={href}
        {...(download ? { download: true } : {})}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold text-navy">{title}</span>
          <span className="block truncate text-sm text-slate-600">{detail}</span>
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:text-accent" aria-hidden="true" />
        {external && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    </li>
  )
}

export default function Contact() {
  const { resume, linkedin, github, email } = profile.links
  const hasAny = resume || linkedin || github || email

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-soft py-20 sm:py-24">
      <div className={container}>
        <Reveal>
          <SectionHeading id="contact-title" eyebrow="Resume & Contact" title="Let's connect" intro={contact.intro} />
        </Reveal>

        <Reveal delay={80}>
          <ul id="resume" className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {resume && <ContactCard href={resume} icon={FileText} title="Download Resume" detail="PDF" download />}
            {linkedin && <ContactCard href={linkedin} icon={Linkedin} title="LinkedIn" detail="Connect or send a message" external />}
            {email && <ContactCard href={`mailto:${email}`} icon={Mail} title="Email" detail={email} />}
            {github && <ContactCard href={github} icon={Github} title="GitHub" detail="Projects and demonstrations" external />}
          </ul>

          <div className="mx-auto mt-4 max-w-4xl space-y-2">
            {!resume && <Placeholder>Resume PDF: add it to <code>public/resume/</code> and set <code>links.resume</code> in <code>profile.js</code>.</Placeholder>}
            {!linkedin && <Placeholder>LinkedIn URL: set <code>links.linkedin</code> in <code>profile.js</code>.</Placeholder>}
            {!email && <Placeholder>Email (optional, needs your approval): set <code>links.email</code>. Hidden until then.</Placeholder>}
            {!github && <Placeholder>GitHub (optional): set <code>links.github</code>. Hidden until then.</Placeholder>}
          </div>

          {!hasAny && !import.meta.env.DEV && (
            <p className="mx-auto mt-8 max-w-xl text-center text-slate-600">Contact details will be available here soon.</p>
          )}

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-slate-500">
            This site does not collect form submissions or use tracking cookies.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
