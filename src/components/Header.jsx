import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../content/profile'
import useScrollSpy from '../hooks/useScrollSpy'

export function Monogram({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`bg-gradient-to-br from-lavender to-accent bg-clip-text font-serif text-3xl italic leading-none text-transparent ${className}`}
    >
      RB
    </span>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy([...navItems.map((n) => n.id), 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1280 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const linkClass = (id) =>
    `relative py-2 text-sm font-medium transition-colors ${
      active === id ? 'text-white' : 'text-slate-300 hover:text-white'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur transition-shadow ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <Monogram />
          <span className="hidden h-8 w-px bg-white/25 sm:block" aria-hidden="true" />
          <span className="flex flex-col">
            <span className="text-base font-semibold uppercase tracking-[0.14em] text-white sm:text-lg">{profile.name}</span>
            <span className="hidden text-[11px] uppercase tracking-[0.12em] text-slate-300 sm:block">{profile.tagline}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={linkClass(item.id)} aria-current={active === item.id ? 'true' : undefined}>
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-lavender transition-transform ${
                    active === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Contact Me
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-navy xl:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                    active === item.id ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-accent px-3 py-2.5 text-center text-base font-semibold text-white hover:bg-accent-dark"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
