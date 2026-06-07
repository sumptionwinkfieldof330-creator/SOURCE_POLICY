'use client'

import React from 'react'

import ActivationRefChip from '@/components/meta-verified-for-business/ActivationRefChip'
import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { useAppStrings } from '@/hooks/useAppStrings'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvHelpCenterPageProps = {
  onSignUp: () => void
}

function formatNoticeDate(locale: string): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date())
  } catch {
    return new Intl.DateTimeFormat('vi-VN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date())
  }
}

export default function MvHelpCenterPage({ onSignUp }: MvHelpCenterPageProps) {
  const t = useLandingStrings()
  const app = useAppStrings()
  const [noticeDate, setNoticeDate] = React.useState('')

  React.useEffect(() => {
    setNoticeDate(formatNoticeDate(typeof navigator !== 'undefined' ? navigator.language : 'vi-VN'))
  }, [])

  return (
    <main id="main-content" className="mv-hc-page">
      <div className="mv-hc-wrap">
        <nav className="mv-hc-breadcrumb" aria-label="Breadcrumb">
          <ol>
            {t.helpCenter.breadcrumb.map((item, index) => (
              <li key={item.label}>
                {index > 0 && <span className="mv-hc-breadcrumb-sep" aria-hidden="true">›</span>}
                <span className={index === t.helpCenter.breadcrumb.length - 1 ? 'mv-hc-breadcrumb-current' : undefined}>
                  {item.label}
                </span>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mv-hc-grid">
          <article className="mv-hc-article">
            <header className="mv-hc-article-header">
              <p className="mv-hc-kicker">{app.main.badge}</p>
              <h1 className="mv-hc-title">{t.hero.title}</h1>
              <p className="mv-hc-lead">{t.hero.lead}</p>

              <dl className="mv-hc-meta">
                <div className="mv-hc-meta-row">
                  <dt>{app.main.reviewStatusLabel}</dt>
                  <dd>{app.main.reviewStatus}</dd>
                </div>
                <div className="mv-hc-meta-row">
                  <dt>{app.main.releaseDate}</dt>
                  <dd>
                    <time dateTime={noticeDate ? new Date().toISOString().slice(0, 10) : undefined}>
                      {noticeDate || '…'}
                    </time>
                  </dd>
                </div>
                <div className="mv-hc-meta-row mv-hc-meta-row--ref">
                  <dd className="mv-hc-meta-ref">
                    <ActivationRefChip className="!mt-0" />
                  </dd>
                </div>
              </dl>

              <div className="mv-hc-actions">
                <MvSignUpButton onSignUp={onSignUp} fullWidth={false} />
              </div>

              <p className="mv-hc-note">{t.hero.eligibility}</p>
              <p className="mv-hc-note">
                {t.hero.creatorPrefix}{' '}
                <span className="mv-hc-link">{t.hero.creatorLink}</span>.
              </p>
            </header>

            <hr className="mv-hc-divider" />

            <section aria-labelledby="mv-benefits-title">
              <h2 id="mv-benefits-title" className="mv-hc-heading">
                {t.benefits.title}
              </h2>
              <p className="mv-hc-body">{t.benefits.subtitle}</p>
              {t.benefits.items.map((item) => (
                <div key={item.title} className="mv-hc-block">
                  <h3 className="mv-hc-subheading">{item.title}</h3>
                  <p className="mv-hc-body">{item.description}</p>
                </div>
              ))}
            </section>

            <hr className="mv-hc-divider" />

            <section aria-labelledby="mv-steps-title">
              <h2 id="mv-steps-title" className="mv-hc-heading">
                {t.steps.title}
              </h2>
              <p className="mv-hc-body">{t.steps.subtitle}</p>
              <ol className="mv-hc-ordered-list">
                {t.steps.items.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}</strong> {step.description}
                  </li>
                ))}
              </ol>
            </section>

            <hr className="mv-hc-divider" />

            <section aria-labelledby="mv-testimonials-title">
              <h2 id="mv-testimonials-title" className="mv-hc-heading">
                {t.testimonials.title}
              </h2>
              <ul className="mv-hc-bullet-list">
                {t.testimonials.items.map((item) => (
                  <li key={item.quote}>
                    {item.quote}
                    <span className="mv-hc-tip-source">
                      {' '}
                      — {item.author}, {item.role}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="mv-hc-divider" />

            <section aria-labelledby="mv-faq-title">
              <h2 id="mv-faq-title" className="mv-hc-heading">
                {t.faq.title}
              </h2>
              {t.faq.items.map((item) => (
                <div key={item.question} className="mv-hc-block">
                  <h3 className="mv-hc-subheading">{item.question}</h3>
                  <p className="mv-hc-body">{item.answer}</p>
                </div>
              ))}
            </section>

            <hr className="mv-hc-divider" />

            <section aria-labelledby="mv-cta-title" className="mv-hc-block">
              <h2 id="mv-cta-title" className="mv-hc-heading">
                {t.finalCta.title}
              </h2>
              <p className="mv-hc-body">{t.finalCta.subtitle}</p>
              <div className="mv-hc-actions">
                <MvSignUpButton
                  onSignUp={onSignUp}
                  label={t.finalCta.cta}
                  ariaLabel={t.finalCta.cta}
                  fullWidth={false}
                />
              </div>
            </section>
          </article>

          <aside className="mv-hc-sidebar" aria-label={t.helpCenter.sidebarTitle}>
            <p className="mv-hc-sidebar-kicker">{t.helpCenter.sidebarSection}</p>
            <h2 className="mv-hc-sidebar-title">{t.helpCenter.sidebarTitle}</h2>
            <ul className="mv-hc-sidebar-links">
              {t.helpCenter.sidebarLinks.map((link) => (
                <li key={link.label}>
                  <span className="mv-hc-sidebar-link">{link.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </main>
  )
}
