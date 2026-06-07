'use client'

import React from 'react'

import { TRANSPARENCY_CENTER_MEDIA } from '@/data/transparencyCenterMedia'

type MvTransparencyVideoProps = {
  ariaLabel: string
}

/** Video block — styled like MCDSCMSCommonFacebookVideo on Transparency Center */
export default function MvTransparencyVideo({ ariaLabel }: MvTransparencyVideoProps) {
  const { poster } = TRANSPARENCY_CENTER_MEDIA.video

  return (
    <div className="mv-hc-video" aria-label={ariaLabel}>
      <video
        className="mv-hc-video-player"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={ariaLabel}
      >
        <source src="/images/meta/AQPpWCZuMaxAdUA1oYUWj_8dAt5TO3vRSJqqt7S8DQi49-oucR1UlCTjHOkgFW_yv1Okkn6Hn-I643FbNeJlG4V9XcGzYBqbX-3zxCH2-XIbXA.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
