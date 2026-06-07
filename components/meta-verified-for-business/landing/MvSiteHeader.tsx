'use client'

import Image from 'next/image'
import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvSiteHeaderProps = {
  onSignUp: () => void
}

export default function MvSiteHeader({ onSignUp }: MvSiteHeaderProps) {
  const t = useLandingStrings()

  return (
    <header className="mv-hc-header sticky top-0 z-40 w-full shrink-0">
      <div className="mv-hc-header-inner">
        <div className="mv-hc-header-left">
          <div className="mv-hc-header-brand" aria-label={t.header.logoLabel}>
            <Image
              src="/images/meta/logo-meta.svg"
              alt=""
              width={329}
              height={66}
              className="mv-hc-header-logo"
              priority
            />
            <span className="mv-hc-header-brand-text">{t.header.helpCenterTitle}</span>
          </div>

          <nav className="mv-hc-header-nav" aria-label={t.header.helpCenterTitle}>
            {t.header.nav.map((item) => (
              <span key={item.label} className="mv-hc-header-nav-item">
                {item.label}
                <span className="mv-hc-header-nav-chevron" aria-hidden="true">
                  ▾
                </span>
              </span>
            ))}
          </nav>
        </div>

        <div className="mv-hc-header-right">
          <button
            type="button"
            className="mv-hc-header-login"
            onClick={onSignUp}
            aria-label={t.header.loginAria}
          >
            {t.header.loginCta}
          </button>
        </div>
      </div>
    </header>
  )
}
