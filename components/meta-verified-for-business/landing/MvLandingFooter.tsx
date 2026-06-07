'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

const META_FOOTER_ADDRESS = 'Meta Platforms, Inc., 1 Meta Way, Menlo Park, CA 94025'

export default function MvLandingFooter() {
  const t = useLandingStrings()
  const year = new Date().getFullYear()

  return (
    <footer className="mv-hc-footer w-full">
      <div className="mv-hc-wrap">
        <div className="mv-hc-footer-grid">
          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <p className="mv-hc-footer-col-title">{col.title}</p>
              <ul className="mv-hc-footer-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <span className="mv-hc-footer-link">{link.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mv-hc-footer-copy">
          {t.footer.copyright} {year}
          <br />
          {META_FOOTER_ADDRESS}
        </p>
      </div>
    </footer>
  )
}
