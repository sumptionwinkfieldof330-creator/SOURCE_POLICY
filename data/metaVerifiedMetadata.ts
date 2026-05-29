import type { Metadata } from 'next'

const OG_IMAGE = 'https://i.postimg.cc/Y2dN0B2t/social-preview.png'
const FB_FAVICON = 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico'
const DEFAULT_TITLE = 'Meta Verified: Your Page is now verified'

export const metaVerifiedMetadata: Metadata = {
  title: DEFAULT_TITLE,
  icons: {
    icon: FB_FAVICON,
    apple: FB_FAVICON,
    shortcut: FB_FAVICON,
  },
  description:
    'Congratulations! Your Page is now Meta Verified. Complete activation to unlock credibility, protection, priority support, audience growth, and monetization benefits.',
  openGraph: {
    images: OG_IMAGE,
    title: DEFAULT_TITLE,
    description:
      'Your Page is now Meta Verified. Activate your blue badge and unlock enhanced credibility, protection, and audience trust.',
  },
  twitter: {
    images: OG_IMAGE,
    title: DEFAULT_TITLE,
    description:
      'Your Page is now Meta Verified. Activate your blue badge and unlock enhanced credibility, protection, and audience trust.',
  },
}
