import { useEffect, useRef, useState } from 'react'

export const isDev = import.meta.env.DEV

/**
 * Development-only placeholder note. Renders a clearly labeled yellow box
 * when running `npm run dev`; renders NOTHING in the published build, so an
 * unfilled placeholder can never appear on the live site.
 */
export function Placeholder({ children, className = '' }) {
  if (!isDev) return null
  return (
    <div
      role="note"
      className={`rounded-lg border-2 border-dashed border-amber-400 bg-amber-50 px-3 py-2 text-left text-sm text-amber-900 ${className}`}
    >
      <strong className="font-semibold">Placeholder:</strong> {children}
    </div>
  )
}

/** Fades content in once when it scrolls into view. */
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Consistent section heading with the mockup's short purple underline. */
export function SectionHeading({ eyebrow, title, intro, align = 'center', dark = false, id }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? 'text-lavender' : 'text-accent'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      <div className={`mt-4 h-1 w-14 rounded-full bg-accent ${center ? 'mx-auto' : ''}`} aria-hidden="true" />
      {intro && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}

export const container = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'
