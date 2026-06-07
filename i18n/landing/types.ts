export type LandingStep = {
  title: string
  description: string
}

export type LandingBenefit = {
  title: string
  paragraphs: string[]
}

export type LandingValueCard = {
  id: 'authenticity' | 'safety' | 'privacy' | 'dignity'
  label: string
  paragraphs: string[]
}

export type LandingTestimonial = {
  quote: string
  author: string
  role: string
}

export type LandingFaqItem = {
  question: string
  answer: string
}

export type LandingFooterColumn = {
  title: string
  links: { label: string }[]
}

export type LandingNavLink = {
  label: string
}

export type LandingStrings = {
  header: {
    logoLabel: string
    helpCenterTitle: string
    nav: LandingNavLink[]
    loginCta: string
    loginAria: string
    cta: string
    ctaAria: string
  }
  helpCenter: {
    breadcrumb: { label: string }[]
    sidebarTitle: string
    sidebarSection: string
    sidebarLinks: { label: string }[]
  }
  notice: {
    title: string
    body: string
  }
  hero: {
    title: string
    lead: string
    disclaimer: string
    policyStructure: string
    eligibility: string
    creatorPrefix: string
    creatorLink: string
    cta: string
    badgeAlt: string
    videoAria: string
  }
  valuesGrid: {
    items: LandingValueCard[]
  }
  policyIndex: {
    title: string
    items: { label: string }[]
  }
  benefits: {
    items: LandingBenefit[]
  }
  steps: {
    title: string
    subtitle: string
    items: LandingStep[]
  }
  testimonials: {
    title: string
    items: LandingTestimonial[]
    prevAria: string
    nextAria: string
  }
  finalCta: {
    title: string
    subtitle: string
    cta: string
  }
  faq: {
    title: string
    items: LandingFaqItem[]
  }
  footer: {
    copyright: string
    columns: LandingFooterColumn[]
  }
}
