'use client'

import Image from 'next/image'
import React from 'react'

import ActivationRefChip from '@/components/meta-verified-for-business/ActivationRefChip'
import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { useAppStrings } from '@/hooks/useAppStrings'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvHeroSectionProps = {
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

export default function MvHeroSection({ onSignUp }: MvHeroSectionProps) {
  const t = useLandingStrings()
  const app = useAppStrings()
  const [noticeDate, setNoticeDate] = React.useState('')

  React.useEffect(() => {
    setNoticeDate(formatNoticeDate(typeof navigator !== 'undefined' ? navigator.language : 'vi-VN'))
  }, [])

  return (
    <section className="mv-hero" aria-labelledby="mv-hero-title">
      <div className="mv-section-container">
        <article className="mv-article">
          <div className="mv-notice-card" role="region" aria-label={app.main.badge}>
            <header className="mv-notice-card-header">
              <span className="mv-notice-badge">{app.main.badge}</span>
              <time className="mv-notice-date" dateTime={noticeDate ? new Date().toISOString().slice(0, 10) : undefined}>
                {app.main.releaseDate} {noticeDate || '…'}
              </time>
            </header>

            <div className="mv-notice-card-body">
              <Image
                src="/images/meta/logo.svg"
                alt={t.hero.badgeAlt}
                width={40}
                height={40}
                priority
                className="mv-notice-logo"
              />

              <h1 id="mv-hero-title" className="mv-notice-title">
                {t.hero.title}
              </h1>

              <p className="mv-notice-lead">{t.hero.lead}</p>

              <div className="mv-notice-status" aria-live="polite">
                <div className="mv-notice-status-row">
                  <span className="mv-notice-status-label">{app.main.reviewStatusLabel}</span>
                  <span className="mv-notice-status-value">{app.main.reviewStatus}</span>
                </div>
                <ActivationRefChip className="!mt-0 !text-left" />
              </div>

              <div className="mv-notice-cta">
                <MvSignUpButton onSignUp={onSignUp} />
              </div>
            </div>

            <footer className="mv-notice-card-footer">
              <span>{t.hero.creatorPrefix} </span>
              <span className="mv-link">{t.hero.creatorLink}</span>
            </footer>
          </div>

          <p className="mv-article-note">{t.hero.eligibility}</p>
        </article>
      </div>
    </section>
  )
}
