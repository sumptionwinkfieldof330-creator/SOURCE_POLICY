'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvStepsSection() {
  const t = useLandingStrings()

  return (
    <section className="mv-article-section" aria-labelledby="mv-steps-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <h2 id="mv-steps-title" className="mv-article-heading">
            {t.steps.title}
          </h2>
          <p className="mv-article-lead">{t.steps.subtitle}</p>

          <ol className="mv-help-steps">
            {t.steps.items.map((step) => (
              <li key={step.title} className="mv-help-step">
                <h3 className="mv-article-subheading">{step.title}</h3>
                <p className="mv-article-body">{step.description}</p>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  )
}
