'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

const STEP_KEYS = ['step1', 'step2', 'step3'] as const

export default function MvStepsSection() {
  const t = useLandingStrings()

  return (
    <section
      className="mv-section-dark mv-steps-section w-full py-14 sm:py-16 lg:py-24"
      aria-labelledby="mv-steps-title"
    >
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <h2
            id="mv-steps-title"
            className="text-[1.5rem] font-bold leading-tight sm:text-[2rem] lg:text-[2.25rem]"
          >
            {t.steps.title}
          </h2>
        </div>

        <ol className="mv-steps-list mx-auto mt-12 max-w-[960px] list-none p-0 sm:mt-14">
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
