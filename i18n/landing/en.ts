import type { LandingStrings } from './types'

export const enLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    logoHref: 'https://www.facebook.com/business',
    nav: [
      { label: 'Get started', href: 'https://www.facebook.com/business' },
      { label: 'Advertise', href: 'https://www.facebook.com/business/tools/ads-manager' },
      { label: 'Learn', href: 'https://www.facebook.com/business/learn' },
      { label: 'Support', href: 'https://www.facebook.com/business/help' },
    ],
    cta: 'Get started',
    ctaAria: 'Get started — sign up for Meta Verified',
  },
  hero: {
    title: 'Show the world you mean business.',
    lead:
      'Meta Verified for Business helps you build trust, protect your brand and strengthen your presence on Facebook, Instagram and WhatsApp.',
    eligibility:
      'Available to eligible businesses in supported countries and regions. Requirements and pricing may vary.',
    creatorPrefix: 'Are you a creator?',
    creatorLink: 'Learn about Meta Verified for creators',
    creatorHref: 'https://www.facebook.com/meta-verified',
    cta: 'Sign up',
    videoAria: 'Meta Verified for Business introduction video',
  },
  benefits: {
    title: 'Discover Meta Verified for Business benefits',
    subtitle:
      'Verify your business identity and unlock tools to connect with customers more credibly.',
    learnMore: 'Learn more',
    learnMoreHref: 'https://www.facebook.com/business/help',
    items: [
      {
        title: 'Verified badge',
        description:
          'Display the Meta Verified badge on your Page and linked Instagram account so customers recognize your official business.',
      },
      {
        title: 'Identity protection',
        description:
          'Stronger monitoring against brand impersonation and accounts that may confuse customers.',
      },
      {
        title: 'Priority support',
        description:
          'Access priority support when you need help with your Page, account or verification-related issues.',
      },
      {
        title: 'Enhanced credibility',
        description:
          'Show you completed Meta’s verification process — an important signal when customers decide to trust your brand.',
      },
      {
        title: 'Business tools',
        description:
          'Use features designed for verified businesses across Facebook, Instagram and WhatsApp.',
      },
      {
        title: 'Sustainable growth',
        description:
          'Build lasting customer relationships on the Meta apps they use every day.',
      },
    ],
  },
  steps: {
    title: 'How to sign up',
    step1: 'Start registration.',
    step2: 'Verify your business details.',
    step3: 'Get reviewed.',
  },
  testimonials: {
    title: 'What businesses are saying',
    prevAria: 'Previous story',
    nextAria: 'Next story',
    items: [
      {
        quote:
          'The verified badge helps customers trust us from the very first interaction on Facebook.',
        author: 'Lan Nguyen',
        role: 'Fashion retail owner',
      },
      {
        quote:
          'We get fewer messages asking “is this the official page?” after signing up for Meta Verified.',
        author: 'Minh Tran',
        role: 'Marketing director',
      },
      {
        quote:
          'The sign-up process was clear and support was quick when we needed to update business details.',
        author: 'Huong Pham',
        role: 'Beauty brand co-founder',
      },
    ],
  },
  finalCta: {
    title: 'Ready to sign up?',
    subtitle:
      'Get started today to verify your business and show customers you mean business.',
    cta: 'Sign up',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What is Meta Verified for Business?',
        answer:
          'It is a paid subscription that helps eligible businesses verify their identity and access the Meta Verified badge plus brand protection benefits across Meta apps.',
      },
      {
        question: 'Who is eligible?',
        answer:
          'Businesses must meet identity, activity and Meta policy requirements. Eligibility may vary by country.',
      },
      {
        question: 'Can I cancel my plan?',
        answer:
          'Yes. You can cancel or change your plan in Meta Verified settings. Some benefits may continue through the current billing period.',
      },
      {
        question: 'How long does review take?',
        answer:
          'Review typically takes from a few days to a few weeks depending on your application. You will be notified of updates.',
      },
      {
        question: 'How is this different from free verification?',
        answer:
          'Meta Verified for Business is a paid subscription with a badge, brand protection and additional support, distinct from free verification in certain product contexts.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Meta technologies',
        links: [
          { label: 'Facebook', href: 'https://www.facebook.com/' },
          { label: 'Instagram', href: 'https://www.instagram.com/' },
          { label: 'WhatsApp', href: 'https://www.whatsapp.com/' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { label: 'Meta Business Suite', href: 'https://business.facebook.com/' },
          { label: 'Ads Manager', href: 'https://www.facebook.com/business/tools/ads-manager' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center', href: 'https://www.facebook.com/help/' },
          { label: 'Meta Business Help', href: 'https://www.facebook.com/business/help' },
        ],
      },
    ],
  },
}
