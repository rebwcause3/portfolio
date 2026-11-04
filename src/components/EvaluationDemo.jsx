import { useMemo, useState } from 'react'
import { Bot, ClipboardCheck, FlaskConical, Info, RotateCcw } from 'lucide-react'
import { criteria, demo } from '../content/aiInnovation'
import { Reveal } from './ui'

const emptyScores = () =>
  Object.fromEntries(demo.responses.map((r) => [r.id, Object.fromEntries(criteria.map((c) => [c.id, null]))]))

const total = (obj) => Object.values(obj).reduce((sum, v) => sum + (v ?? 0), 0)

function ScoreRow({ responseId, criterion, value, onChange, reference, showRef }) {
  const name = `score-${responseId}-${criterion.id}`
  return (
    <fieldset className="border-t border-slate-100 py-3 first:border-t-0">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <legend className="float-left text-sm font-semibold text-navy">
          {criterion.label}
          <span className="sr-only">: {criterion.question}</span>
        </legend>
        <div className="flex gap-1.5" role="presentation">
          {[1, 2, 3, 4, 5].map((n) => {
            const id = `${name}-${n}`
            const checked = value === n
            const isRef = showRef && reference.score === n
            return (
              <span key={n} className="relative">
                <input
                  type="radio"
                  id={id}
                  name={name}
                  value={n}
                  checked={checked}
                  onChange={() => onChange(n)}
                  className="peer sr-only"
                />
                <label
                  htmlFor={id}
                  className={`flex h-9 w-9 cursor-pointer select-none items-center justify-center rounded-lg border text-sm font-semibold transition peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-lavender ${
                    checked
                      ? 'border-accent bg-accent text-white shadow'
                      : 'border-slate-300 bg-white text-slate-600 hover:border-accent hover:text-accent'
                  } ${isRef ? 'ring-2 ring-amber-400 ring-offset-1' : ''}`}
                >
                  <span className="sr-only">Score </span>
                  {n}
                  {isRef && <span className="sr-only"> (reference score)</span>}
                </label>
              </span>
            )
          })}
        </div>
      </div>
      {showRef && (
        <p className="clear-both mt-2 rounded-md bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-950">
          <strong>Reference {reference.score}/5:</strong> {reference.note}
        </p>
      )}
    </fieldset>
  )
}

export default function EvaluationDemo() {
  const [scores, setScores] = useState(emptyScores)
  const [showRef, setShowRef] = useState(false)

  const setScore = (rid, cid, n) => setScores((s) => ({ ...s, [rid]: { ...s[rid], [cid]: n } }))
  const reset = () => {
    setScores(emptyScores())
    setShowRef(false)
  }

  const totals = useMemo(
    () =>
      Object.fromEntries(
        demo.responses.map((r) => [
          r.id,
          {
            yours: total(scores[r.id]),
            scored: Object.values(scores[r.id]).filter((v) => v !== null).length,
            ref: criteria.reduce((sum, c) => sum + r.reference[c.id].score, 0),
          },
        ]),
      ),
    [scores],
  )
  const max = criteria.length * 5
  const allScored = demo.responses.every((r) => totals[r.id].scored === criteria.length)

  return (
    <Reveal className="mt-16">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        {/* Header */}
        <div className="bg-navy px-6 py-7 text-white sm:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-lavender/15 px-3 py-1 text-xs font-semibold text-lavender ring-1 ring-lavender/30">
              <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
              {demo.label}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold sm:text-3xl">AI Recommendation Evaluator</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
            <Info className="mr-1 inline h-4 w-4 -translate-y-px text-lavender" aria-hidden="true" />
            {demo.disclaimer}
          </p>
        </div>

        <div className="space-y-8 px-4 py-8 sm:px-10">
          {/* Scenario + criteria */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <div className="rounded-2xl bg-soft p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Scenario</p>
              <p className="mt-2 font-semibold text-navy">{demo.scenario.org}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{demo.scenario.context}</p>
              <p className="mt-4 text-sm text-slate-700">
                <span className="font-semibold text-navy">Leadership asks an AI assistant:</span>{' '}
                <span className="italic">{demo.scenario.prompt}</span>
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5 sm:p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                Evaluation criteria (score 1–5)
              </p>
              <dl className="mt-3 space-y-2 text-sm">
                {criteria.map((c) => (
                  <div key={c.id} className="grid grid-cols-[104px_1fr] gap-2">
                    <dt className="font-semibold text-navy">{c.label}</dt>
                    <dd className="text-slate-600">{c.question}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Responses */}
          <div className="grid gap-6 lg:grid-cols-2">
            {demo.responses.map((r) => {
              const t = totals[r.id]
              const preferred = showRef && demo.verdict.preferred === r.id
              return (
                <div
                  key={r.id}
                  className={`flex flex-col rounded-2xl border p-4 sm:p-6 transition ${
                    preferred ? 'border-accent ring-1 ring-accent' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="flex items-center gap-2 font-bold text-navy">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Bot className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {r.title}
                    </h4>
                    {preferred && (
                      <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">Stronger response</span>
                    )}
                  </div>
                  <blockquote className="mt-4 rounded-xl bg-soft p-4 text-sm leading-relaxed text-slate-700">
                    {r.text}
                  </blockquote>

                  <div className="mt-5 flex-1">
                    {criteria.map((c) => (
                      <ScoreRow
                        key={c.id}
                        responseId={r.id}
                        criterion={c}
                        value={scores[r.id][c.id]}
                        onChange={(n) => setScore(r.id, c.id, n)}
                        reference={r.reference[c.id]}
                        showRef={showRef}
                      />
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-xl bg-navy px-4 py-3 text-white" aria-live="polite">
                    <span className="text-sm">
                      Your score: <strong className="text-lg">{t.yours}</strong>
                      <span className="text-slate-400">/{max}</span>
                      {t.scored < criteria.length && <span className="ml-2 text-xs text-slate-400">({t.scored}/{criteria.length} rated)</span>}
                    </span>
                    {showRef && (
                      <span className="text-sm text-amber-200">
                        Reference: <strong className="text-lg">{t.ref}</strong>/{max}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => setShowRef((v) => !v)}
              aria-expanded={showRef}
              aria-controls="eval-verdict"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-dark sm:w-auto"
            >
              <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
              {showRef ? 'Hide reference evaluation' : allScored ? 'Compare with reference evaluation' : 'Show reference evaluation'}
            </button>
            <button
              type="button"
              onClick={reset}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-navy hover:text-navy sm:w-auto"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Reset
            </button>
          </div>

          <div id="eval-verdict" aria-live="polite">
            {showRef && (
              <div className="rounded-2xl bg-gradient-to-br from-navy to-midnight p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lavender">Reference evaluation</p>
                <p className="mt-3 leading-relaxed text-slate-100">{demo.verdict.summary}</p>
                <p className="mt-4 border-l-2 border-lavender pl-4 font-serif text-lg italic text-white">{demo.verdict.takeaway}</p>
              </div>
            )}
          </div>

          <p className="border-t border-slate-100 pt-6 text-center text-sm text-slate-500">{demo.future}</p>
        </div>
      </div>
    </Reveal>
  )
}
