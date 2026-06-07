'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvStepsSectionProps = {
  embedded?: boolean
}

export default function MvStepsSection({ embedded = false }: MvStepsSectionProps) {
  const t = useLandingStrings()

  const stepsList = (
    <ol className={embedded ? 'mv-hc-steps' : 'mv-help-steps'}>
      {t.steps.items.map((step, index) => (
        <li key={step.title} className={embedded ? 'mv-hc-step' : 'mv-help-step'}>
          {embedded && (
            <span className="mv-hc-step-num" aria-hidden="true">
              {index + 1}
            </span>
          )}
          <h3 className={embedded ? 'mv-hc-step-title' : 'mv-article-subheading'}>
            {step.title}
          </h3>
          <p className={embedded ? 'mv-hc-step-desc' : 'mv-article-body'}>{step.description}</p>
        </li>
      ))}
    </ol>
  )

  if (embedded) {
    return (
      <section className="mv-hc-section" aria-labelledby="mv-steps-title">
        <h2 id="mv-steps-title" className="mv-hc-section-title">
          {t.steps.title}
        </h2>
        <p className="mv-hc-section-lead">{t.steps.subtitle}</p>
        {stepsList}
      </section>
    )
  }

  return (
    <section className="mv-article-section" aria-labelledby="mv-steps-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <h2 id="mv-steps-title" className="mv-article-heading">
            {t.steps.title}
          </h2>
          <p className="mv-article-lead">{t.steps.subtitle}</p>
          {stepsList}
        </article>
      </div>
    </section>
  )
}
