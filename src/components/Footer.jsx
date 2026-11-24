import { ArrowUp } from 'lucide-react'
import { profile } from '../content/profile'
import { Monogram } from './Header'
import { container } from './ui'

export default function Footer({ top = "#home" }) {
  return (
    <footer className="bg-navy py-10 text-slate-400">
      <div className={`${container} flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left`}>
        <div className="flex items-center gap-3">
          <Monogram className="text-2xl" />
          <div>
            <p className="text-sm font-semibold text-white">{profile.name}</p>
            <p className="text-xs">{profile.headline}</p>
          </div>
        </div>
        <p className="max-w-md text-xs leading-relaxed">
          © {new Date().getFullYear()} {profile.name}. Case studies are generalized to protect client and employer confidentiality.
        </p>
        <a href={top} className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-white">
          Back to top <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
