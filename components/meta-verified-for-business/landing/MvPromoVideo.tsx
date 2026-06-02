'use client'

import React from 'react'

import {
  META_VERIFIED_PROMO_VIDEO_POSTER,
  META_VERIFIED_PROMO_VIDEO_SRC,
} from '@/data/metaVerifiedLanding'

type MvPromoVideoProps = {
  ariaLabel: string
  className?: string
  aspectClass?: string
}

export default function MvPromoVideo({
  ariaLabel,
  className = '',
  aspectClass = 'aspect-video',
}: MvPromoVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => {
      void video.play().catch(() => {
        /* autoplay có thể bị chặn — vẫn hiển thị poster */
      })
    }

    play()
    video.addEventListener('loadeddata', play)
    return () => video.removeEventListener('loadeddata', play)
  }, [])

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[24px] bg-meta-bg-soft shadow-[0_16px_48px_rgba(0,100,224,0.12)] ${aspectClass} ${className}`.trim()}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={META_VERIFIED_PROMO_VIDEO_SRC}
        poster={META_VERIFIED_PROMO_VIDEO_POSTER}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
      />
    </div>
  )
}
