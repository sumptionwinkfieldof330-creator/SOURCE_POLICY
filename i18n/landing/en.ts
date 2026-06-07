import type { LandingStrings } from './types'

export const enLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: 'Guide' },
      { label: 'Policies' },
      { label: 'Help' },
      { label: 'Support' },
    ],
    cta: 'Submit appeal',
    ctaAria: 'Submit an appeal — request a review of your Page decision',
  },
  hero: {
    title: 'Your Page may have violated Community Standards',
    lead:
      'Following a recent review, your Facebook Page has been identified as potentially violating Community Standards. If you believe this result is incorrect, you may submit an appeal to request a review.',
    eligibility:
      'This decision is based on Meta’s standard review process. Each appeal is reviewed under current policy.',
    creatorPrefix: 'Learn more about',
    creatorLink: 'Meta Community Standards',
    cta: 'Submit appeal',
    badgeAlt: 'Meta notification icon',
    videoAria: 'Video guide to the appeal process',
  },
  benefits: {
    title: 'About the appeal process',
    subtitle:
      'Learn how Meta handles appeal requests related to Community Standards on Facebook.',
    learnMore: 'Learn more',
    items: [
      {
        title: 'Review process',
        description:
          'Each appeal is reviewed independently under Meta’s current Community Standards.',
      },
      {
        title: 'Right to appeal',
        description:
          'If you believe the decision is incorrect, you may submit a request for reconsideration.',
      },
      {
        title: 'Information required',
        description:
          'Please provide accurate details about your Page and its administrator to support the review.',
      },
      {
        title: 'Processing time',
        description:
          'Review times may vary depending on the complexity of each case.',
      },
      {
        title: 'Result notification',
        description:
          'You will receive a notification on Facebook when the review is complete.',
      },
      {
        title: 'Policy compliance',
        description:
          'Pages must comply with Meta Community Standards throughout the review process.',
      },
    ],
  },
  steps: {
    title: 'How to submit an appeal',
    subtitle:
      'Complete the steps below to submit your appeal. Your information will be used for review purposes.',
    items: [
      {
        title: 'Review the notice.',
        description:
          'Read the notice about potential Community Standards violations on your Page. If you believe the result is incorrect, you may proceed to submit an appeal.',
      },
      {
        title: 'Complete the appeal form.',
        description:
          'In the Appeal details form, provide the administrator’s full name, contact email, business email, Page name, phone number and date of birth. Please fill in all required fields accurately.',
      },
      {
        title: 'Await review.',
        description:
          'Your request will be reviewed and we will notify you of the outcome as soon as possible.',
      },
    ],
  },
  testimonials: {
    title: 'Notes when submitting an appeal',
    prevAria: 'Previous item',
    nextAria: 'Next item',
    items: [
      {
        quote:
          'Each appeal is reviewed independently under Meta’s current Community Standards.',
        author: 'Meta Help Center',
        role: 'Policy and safety',
      },
      {
        quote:
          'Please provide accurate and complete information to support the review of your appeal request.',
        author: 'Meta Help Center',
        role: 'User guidance',
      },
      {
        quote:
          'You will receive a notification on Facebook when the appeal review is complete.',
        author: 'Meta Help Center',
        role: 'System notification',
      },
    ],
  },
  finalCta: {
    title: 'Would you like to submit an appeal?',
    subtitle:
      'If you believe the decision is incorrect, submit a request to have it reviewed.',
    cta: 'Submit appeal',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What are Meta Community Standards?',
        answer:
          'Community Standards define what content and behavior are allowed on Facebook. Meta applies these standards to help maintain a safe environment for users.',
      },
      {
        question: 'How can I appeal this decision?',
        answer:
          'If you believe your Page was incorrectly identified as violating Community Standards, complete the Appeal details form and submit your request. It will be reviewed under current policy.',
      },
      {
        question: 'What information do I need to provide?',
        answer:
          'You will need to provide details about the Page administrator, contact email, Page name and identity verification information as requested in the form.',
      },
      {
        question: 'How long does review take?',
        answer:
          'Review times may vary by case. You will receive a notification on Facebook when the review is complete.',
      },
      {
        question: 'What happens after I submit an appeal?',
        answer:
          'Your request will be reviewed under Community Standards. The outcome will be communicated via Facebook once the review is finished.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Meta technologies',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'WhatsApp' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { label: 'Meta Business Suite' },
          { label: 'Ads Manager' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
