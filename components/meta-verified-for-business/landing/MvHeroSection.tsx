'use client'

import Link from 'next/link'
import React from 'react'

import MvPromoVideo from '@/components/meta-verified-for-business/landing/MvPromoVideo'
import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvHeroSectionProps = {
  onSignUp: () => void
}

export default function MvHeroSection({ onSignUp }: MvHeroSectionProps) {
  const t = useLandingStrings()

  return (
    <section className="mv-hero w-full py-12 sm:py-16 lg:py-20" aria-labelledby="mv-hero-title">
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src="/images/icons/ic_blue.svg"
              alt={t.hero.badgeAlt}
              width={56}
              height={56}
              className="mb-5 h-12 w-12 sm:h-14 sm:w-14"
            />

            <h1
              id="mv-hero-title"
              className="text-[1.85rem] font-bold leading-[1.12] tracking-tight text-meta-text sm:text-[2.25rem] lg:text-[2.75rem]"
            >
              {t.hero.title}
            </h1>

            <p className="mv-hero-lead mt-5 max-w-[640px] text-[16px] leading-relaxed sm:text-[18px]">
              {t.hero.lead}
            </p>

            <div className="mt-8 w-full max-w-[360px]">
              <MvSignUpButton onSignUp={onSignUp} />
            </div>

            <p className="mt-5 max-w-[560px] text-[13px] leading-relaxed text-meta-text-muted sm:text-[14px]">
              {t.hero.eligibility}
            </p>

            <p className="mt-4 text-[14px] text-meta-text-body">
              {t.hero.creatorPrefix}{' '}
              <Link
                href={t.hero.creatorHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mv-link font-semibold"
              >
                {t.hero.creatorLink}
              </Link>
            </p>
          </div>

          <div className="w-full min-w-0 lg:max-w-[600px] lg:justify-self-end">
            <MvPromoVideo ariaLabel={t.hero.videoAria} className="mx-auto lg:mx-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
