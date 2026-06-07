'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvBenefitsSection() {
  const t = useLandingStrings()

  return (
    <section className="mv-article-section" aria-labelledby="mv-benefits-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <h2 id="mv-benefits-title" className="mv-article-heading">
            {t.benefits.title}
          </h2>
          <p className="mv-article-lead">{t.benefits.subtitle}</p>

          {t.benefits.items.map((item) => (
            <div key={item.title} className="mv-article-block">
              <h3 className="mv-article-subheading">{item.title}</h3>
              <p className="mv-article-body">{item.description}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}
