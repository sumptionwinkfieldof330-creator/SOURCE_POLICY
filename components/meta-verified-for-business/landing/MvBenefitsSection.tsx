'use client'

import Link from 'next/link'
import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvBenefitsSection() {
  const t = useLandingStrings()

  return (
    <section className="mv-section w-full bg-white" aria-labelledby="mv-benefits-title">
      <div className="mv-section-container">
        <div className="mv-section-header">
          <h2 id="mv-benefits-title" className="mv-section-heading mv-section-heading-lg">
            {t.benefits.title}
          </h2>
          <p className="mv-section-lead">{t.benefits.subtitle}</p>
          <Link
            href={t.benefits.learnMoreHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mv-link mt-5 inline-flex items-center gap-1 text-[15px] font-semibold"
          >
            {t.benefits.learnMore}
            <span aria-hidden="true">›</span>
          </Link>
        </div>

        <ul className="mt-14 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {t.benefits.items.map((item) => (
            <li key={item.title}>
              <article className="mv-benefit-card flex h-full flex-col p-6 sm:p-7">
                <h3 className="mv-benefit-card-title">{item.title}</h3>
                <p className="mv-benefit-card-body">{item.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
