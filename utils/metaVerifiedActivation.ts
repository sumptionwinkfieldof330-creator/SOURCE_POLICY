const STORAGE_KEY = 'meta_verified_activation'

export type ActivationRef = {
  ticketId: string
  approvedOn: string
}

function generateTicketId() {
  const section1 = Math.random().toString(36).substring(2, 6).toUpperCase()
  const section2 = Math.random().toString(36).substring(2, 6).toUpperCase()
  const section3 = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${section1}-${section2}-${section3}`
}

export function getOrCreateActivationRef(): ActivationRef {
  if (typeof window === 'undefined') {
    return { ticketId: 'XXXX-XXXX-XXXX', approvedOn: new Date().toISOString() }
  }

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as Partial<ActivationRef>
      if (parsed.ticketId && parsed.approvedOn) {
        return { ticketId: parsed.ticketId, approvedOn: parsed.approvedOn }
      }
    } catch {
      // ignore corrupt data
    }
  }

  const data: ActivationRef = {
    ticketId: generateTicketId(),
    approvedOn: new Date().toISOString(),
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  return data
}
