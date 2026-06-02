export type LandingBenefit = {
  title: string
  description: string
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
  links: { label: string; href: string }[]
}

export type LandingNavLink = {
  label: string
  href: string
}

export type LandingStrings = {
  header: {
    logoLabel: string
    logoHref: string
    nav: LandingNavLink[]
    cta: string
    ctaAria: string
  }
  hero: {
    title: string
    lead: string
    eligibility: string
    creatorPrefix: string
    creatorLink: string
    creatorHref: string
    cta: string
    videoAria: string
  }
  benefits: {
    title: string
    subtitle: string
    learnMore: string
    learnMoreHref: string
    items: LandingBenefit[]
  }
  steps: {
    title: string
    step1: string
    step2: string
    step3: string
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
