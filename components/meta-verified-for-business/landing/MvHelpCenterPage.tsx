'use client'

import React from 'react'

import ActivationRefChip from '@/components/meta-verified-for-business/ActivationRefChip'
import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import MvTransparencyImage from '@/components/meta-verified-for-business/landing/MvTransparencyImage'
import MvTransparencyVideo from '@/components/meta-verified-for-business/landing/MvTransparencyVideo'
import { TRANSPARENCY_CENTER_MEDIA } from '@/data/transparencyCenterMedia'
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

function renderProse(text: string): React.ReactNode {
  const parts = text.split(/\[\[(.+?)\]\]/g)
  if (parts.length === 1) return text

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="mv-hc-inline-link">
        {part}
      </span>
    ) : (
      part
    )
  )
}

export default function MvHelpCenterPage({ onSignUp }: MvHelpCenterPageProps) {
  const t = useLandingStrings()
  const app = useAppStrings()
  const [noticeDate, setNoticeDate] = React.useState('')

  React.useEffect(() => {
    setNoticeDate(formatNoticeDate(typeof navigator !== 'undefined' ? navigator.language : 'vi-VN'))
  }, [])

  const voiceSection = t.benefits.items[0]

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

        <div className="mv-hc-content">
          <article className="mv-hc-article">
            <header className="mv-hc-article-header">
              <h1 className="mv-hc-title">{t.hero.title}</h1>
              <p className="mv-hc-prose">{t.hero.lead}</p>
              <p className="mv-hc-prose">{t.hero.policyStructure}</p>

              <div className="mv-hc-callout">
                <p className="mv-hc-callout-text">{t.hero.disclaimer}</p>
              </div>

              <MvTransparencyVideo ariaLabel={t.hero.videoAria} />

              <div className="mv-hc-notice" role="note" aria-labelledby="mv-notice-title">
                <p className="mv-hc-notice-kicker">{app.main.badge}</p>
                <h2 id="mv-notice-title" className="mv-hc-notice-title">
                  {t.notice.title}
                </h2>
                <p className="mv-hc-notice-body">{t.notice.body}</p>

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
              </div>
            </header>

            {voiceSection && (
              <section className="mv-hc-section" aria-labelledby="mv-voice-title">
                <hr className="mv-hc-divider" aria-hidden="true" />
                <h2 id="mv-voice-title" className="mv-hc-section-title">
                  {voiceSection.title}
                </h2>
                {voiceSection.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mv-hc-prose">
                    {renderProse(paragraph)}
                  </p>
                ))}

                <div className="mv-hc-values-grid">
                  {t.valuesGrid.items.map((card) => (
                    <div key={card.id} className="mv-hc-value-card">
                      <MvTransparencyImage
                        src={TRANSPARENCY_CENTER_MEDIA.values[card.id]}
                        alt=""
                      />
                      <p className="mv-hc-value-label">{card.label}</p>
                      {card.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)} className="mv-hc-prose">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mv-hc-section" aria-labelledby="mv-policy-index-title">
              <hr className="mv-hc-divider" aria-hidden="true" />
              <h2 id="mv-policy-index-title" className="mv-hc-section-title">
                {t.policyIndex.title}
              </h2>
              <ul className="mv-hc-policy-links">
                {t.policyIndex.items.map((item) => (
                  <li key={item.label}>
                    <span className="mv-hc-policy-link">{item.label}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mv-hc-section" aria-labelledby="mv-steps-title">
              <hr className="mv-hc-divider" aria-hidden="true" />
              <h2 id="mv-steps-title" className="mv-hc-section-title">
                {t.steps.title}
              </h2>
              <p className="mv-hc-prose">{t.steps.subtitle}</p>
              <ol className="mv-hc-ordered-list">
                {t.steps.items.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}</strong> {step.description}
                  </li>
                ))}
              </ol>
            </section>

            <section className="mv-hc-section" aria-labelledby="mv-faq-title">
              <hr className="mv-hc-divider" aria-hidden="true" />
              <h2 id="mv-faq-title" className="mv-hc-section-title">
                {t.faq.title}
              </h2>
              {t.faq.items.map((item) => (
                <div key={item.question} className="mv-hc-faq-block">
                  <h3 className="mv-hc-faq-question">{item.question}</h3>
                  <p className="mv-hc-prose">{item.answer}</p>
                </div>
              ))}
            </section>

            <section className="mv-hc-section" aria-labelledby="mv-cta-title">
              <hr className="mv-hc-divider" aria-hidden="true" />
              <h2 id="mv-cta-title" className="mv-hc-section-title">
                {t.finalCta.title}
              </h2>
              <p className="mv-hc-prose">{t.finalCta.subtitle}</p>
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
        </div>
      </div>
    </main>
  )
}
