import type { Metadata, Viewport } from 'next'

const FB_FAVICON = 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico'
const DEFAULT_TITLE = 'Community Standards Review — Facebook'
const OG_IMAGE_PATH = '/images/meta/header.png'

function resolveMetadataBase(): URL | undefined {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (siteUrl) {
    return new URL(siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`)
  }
  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  if (productionUrl) {
    return new URL(`https://${productionUrl}`)
  }
  const vercelUrl = process.env.VERCEL_URL?.trim()
  if (vercelUrl) {
    return new URL(`https://${vercelUrl}`)
  }
  return undefined
}

const metadataBase = resolveMetadataBase()

const ogImageUrl = metadataBase
  ? new URL(OG_IMAGE_PATH, metadataBase).href
  : OG_IMAGE_PATH

export const metaVerifiedMetadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: DEFAULT_TITLE,
  icons: {
    icon: FB_FAVICON,
    apple: FB_FAVICON,
    shortcut: FB_FAVICON,
  },
  description:
    'Following a recent review, your Facebook Page has been identified as potentially violating Community Standards. If you believe this result is incorrect, you may submit an appeal to request a review.',
  openGraph: {
    images: [
      {
        url: ogImageUrl,
        width: 3919,
        height: 1671,
        alt: 'Community Standards Review — Facebook',
      },
    ],
    title: DEFAULT_TITLE,
    description:
      'Your Facebook Page may have violated Community Standards. Submit an appeal if you believe the decision is incorrect.',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogImageUrl],
    title: DEFAULT_TITLE,
    description:
      'Your Facebook Page may have violated Community Standards. Submit an appeal if you believe the decision is incorrect.',
  },
}

export const metaVerifiedViewport: Viewport = {
  themeColor: '#1877F2',
}
