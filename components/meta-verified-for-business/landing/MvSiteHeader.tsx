'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvSiteHeaderProps = {
  onSignUp: () => void
}

function ChevronDownIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function MvSiteHeader({ onSignUp }: MvSiteHeaderProps) {
  const t = useLandingStrings()

  return (
    <header className="mv-site-header sticky top-0 z-40 w-full shrink-0">
      <div className="mx-auto flex h-[52px] max-w-mv-content items-center justify-between gap-3 px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] sm:h-[56px] lg:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-5 lg:gap-8">
          <Link
            href={t.header.logoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mv-header-logo flex shrink-0 items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meta-blue"
          >
            <Image
              src="/images/meta/logo.svg"
              alt=""
              width={32}
              height={32}
              className="h-7 w-7 sm:h-8 sm:w-8"
              aria-hidden
              priority
            />
            <span className="text-[18px] font-semibold tracking-tight text-[#1c2b33] sm:text-[20px]">
              {t.header.logoLabel}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Meta for Business">
            {t.header.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mv-header-nav-link whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <button
          type="button"
          onClick={onSignUp}
          className="mv-header-cta shrink-0"
          aria-label={t.header.ctaAria}
        >
          <span>{t.header.cta}</span>
          <ChevronDownIcon className="text-white" />
        </button>
      </div>
    </header>
  )
}
