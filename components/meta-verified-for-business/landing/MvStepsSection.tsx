'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

const STEP_KEYS = ['step1', 'step2', 'step3'] as const

export default function MvStepsSection() {
  const t = useLandingStrings()

  return (
    <section
      className="mv-section-dark mv-section mv-section-lg w-full"
      aria-labelledby="mv-steps-title"
    >
      <div className="mv-section-container">
        <div className="mv-section-header">
          <h2 id="mv-steps-title" className="mv-section-heading mv-section-heading-lg text-white">
            {t.steps.title}
          </h2>
        </div>

        <ol className="mv-steps-list mx-auto mt-14 max-w-[60rem] list-none p-0">
          {STEP_KEYS.map((key, index) => (
            <li key={key} className="mv-step-item">
              <article className="mv-step-card">
                <span className="mv-step-num" aria-hidden="true">
                  {index + 1}
                </span>
                <p className="mv-step-text">{t.steps[key]}</p>
              </article>
              {index < STEP_KEYS.length - 1 ? (
                <span className="mv-step-connector" aria-hidden="true" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
