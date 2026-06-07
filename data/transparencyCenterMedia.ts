/** Media URLs from Meta Transparency Center — Community Standards */
const MEDIA_VERSION = '1779136625'

function transparencyImage(mediaId: string): string {
  return `https://lookaside.fbsbx.com/elementpath/media/?media_id=${mediaId}&version=${MEDIA_VERSION}&transcode_extension=webp`
}

export const TRANSPARENCY_CENTER_MEDIA = {
  values: {
    authenticity: transparencyImage('849918942246548'),
    safety: transparencyImage('2800543873566764'),
    privacy: transparencyImage('308994907203174'),
    dignity: transparencyImage('203760854736655'),
  },
} as const

export type TransparencyValueMediaId = keyof typeof TRANSPARENCY_CENTER_MEDIA.values
