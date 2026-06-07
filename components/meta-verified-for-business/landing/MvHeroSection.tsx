'use client'

import Image from 'next/image'
import React from 'react'

import { useAppSelector } from '@/app/store/hooks'
import ActivationRefChip from '@/components/meta-verified-for-business/ActivationRefChip'
import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { META_VERIFIED_FOOTER_LINKS } from '@/data/metaVerifiedLinks'
import { useAppStrings } from '@/hooks/useAppStrings'
import { useLandingStrings } from '@/hooks/useLandingStrings'
import { useVisitorApprovedDate } from '@/hooks/useVisitorApprovedDate'

type MvHeroSectionProps = {
  onSignUp: () => void
}

export default function MvHeroSection({ onSignUp }: MvHeroSectionProps) {
  const t = useLandingStrings()
  const app = useAppStrings()
  const locale = useAppSelector((s) => s.locale.locale)
  const { label: noticeDate, dateTime } = useVisitorApprovedDate(locale)

  return (
    <section className="mv-hero mv-section mv-section-lg" aria-labelledby="mv-hero-title">
      <div className="mv-section-container">
        <article className="mv-hero-notice" aria-label={app.main.badge}>
          <div className="mv-hero-notice-card">
            <header className="mv-hero-notice-top">
              <span className="mv-hero-notice-badge">{app.main.badge}</span>
              <time className="mv-release-date" dateTime={dateTime}>
                <span className="mv-release-date-label">{app.main.releaseDate}</span>{' '}
                <span className="mv-release-date-value">{noticeDate}</span>
              </time>
            </header>

            <div className="mv-hero-notice-body">
              <Image
                src="/images/meta/logo.svg"
                alt={t.hero.badgeAlt}
                width={64}
                height={64}
                priority
                className="mv-hero-badge mx-auto"
              />

              <h1 id="mv-hero-title" className="mv-hero-title mt-5 text-center">
                {t.hero.title}
              </h1>

              <p className="mv-hero-lead mt-4 text-center">{t.hero.lead}</p>

              <div className="mv-hero-notice-meta mv-status-bar">
                <div className="mv-hero-notice-status-row">
                  <span className="mv-hero-notice-status-label">{app.main.reviewStatusLabel}</span>
                  <span className="mv-hero-notice-status-value">{app.main.reviewStatus}</span>
                </div>
                <ActivationRefChip className="!mt-0 self-start" />
              </div>

              <div className="mv-hero-notice-actions">
                <MvSignUpButton onSignUp={onSignUp} />
              </div>

              <p className="mv-hero-note mt-5 text-center">{t.hero.eligibility}</p>
            </div>

            <footer className="mv-hero-notice-foot text-center">
              <p className="mv-hero-secondary m-0">
                {t.hero.creatorPrefix}{' '}
                <a
                  className="mv-hero-link"
                  href={META_VERIFIED_FOOTER_LINKS.community}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.hero.creatorLink}
                </a>
              </p>
            </footer>
          </div>
        </article>
      </div>
    </section>
  )
}
