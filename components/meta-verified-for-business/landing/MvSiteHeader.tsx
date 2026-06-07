'use client'

import Image from 'next/image'
import React from 'react'

import PrivacyLanguagePicker from '@/components/meta-verified-for-business/PrivacyLanguagePicker'
import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvSiteHeader() {
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
          <PrivacyLanguagePicker variant="header" />
        </div>
      </div>
    </header>
  )
}
