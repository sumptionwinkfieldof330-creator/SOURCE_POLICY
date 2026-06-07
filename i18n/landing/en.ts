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
    ctaAria: 'Submit an appeal â€” request a review of your Page decision',
  },
  hero: {
    title: 'Your Page may have violated Community Standards',
    lead:
      'Following a recent review, your Facebook Page has been identified as potentially violating Community Standards. If you believe this result is incorrect, you may submit an appeal to request a review.',
    eligibility:
      'This notice is issued under Facebook publisher content principles and applies only to a Page you administer.',
    creatorPrefix: 'Learn more about',
    creatorLink: 'Meta Community Standards',
    cta: 'Submit appeal',
    badgeAlt: 'Facebook logo',
  },
  benefits: {
    title: 'About this notice',
    subtitle:
      'Meta reviews Page content against Community Standards and content distribution principles to reduce potential harm to the community.',
    learnMore: 'Learn more',
    items: [
      {
        title: 'Potential violation signals',
        description:
          'Metaâ€™s systems may identify content as potentially violating before a final determination. This notice reflects an initial assessment stage, not a final ruling.',
      },
      {
        title: 'Borderline content',
        description:
          'Some content may not violate Community Standards on its face but can be controversial or reduce overall experience quality. Meta may limit distribution to protect the community.',
      },
      {
        title: 'Content distribution principles',
        description:
          'Facebook prioritizes authentic sources and policy-compliant content. Distribution decisions are always assessed against the current Community Standards.',
      },
      {
        title: 'Automated and specialist review',
        description:
          'The process combines automated detection with assessment by policy review teams, based on your Pageâ€™s specific context.',
      },
      {
        title: 'Identity verification when needed',
        description:
          'For content with unusually high distribution, Meta may require identity verification before proceeding. The appeal process may include this step.',
      },
      {
        title: 'Right to appeal',
        description:
          'Page administrators or authorized representatives may submit a request for review if they believe the initial outcome is incorrect.',
      },
    ],
  },
  steps: {
    title: 'Steps to submit an appeal',
    subtitle:
      'Complete all three steps in order. Estimated time: approximately 5â€“10 minutes.',
    items: [
      {
        title: 'Review flagged content.',
        description:
          'Compare the warning with the related posts or activity on your Page. Check Community Standards if you need clarity on the policy applied.',
      },
      {
        title: 'Complete the form and verify identity.',
        description:
          'Provide administrator and contact details plus an explanatory note (if applicable). Verify your linked Facebook account before submitting.',
      },
      {
        title: 'Monitor status on Facebook.',
        description:
          'After submission, you receive confirmation and updates via Facebook notifications. Your request reference helps if support is needed.',
      },
    ],
  },
  testimonials: {
    title: 'Recommendations from Help Center',
    prevAria: 'Previous item',
    nextAria: 'Next item',
    items: [
      {
        quote:
          'Before appealing, review Community Standards and publisher principles to understand the policies Meta applies to your Page.',
        author: 'Meta Business Help Center',
        role: 'Content policies',
      },
      {
        quote:
          'In the appeal form, briefly describe the context of flagged content and why you believe your Page complies â€” specific information helps reviewers assess your case more accurately.',
        author: 'Meta Business Help Center',
        role: 'Submission guidance',
      },
      {
        quote:
          'Do not submit duplicate requests for the same issue. Each request is queued in order of receipt and processed once per flag.',
        author: 'Meta Business Help Center',
        role: 'Processing policy',
      },
    ],
  },
  finalCta: {
    title: 'Ready to submit your appeal?',
    subtitle:
      'The Appeal details form requires administrator information and identity verification. Sign in to Facebook before you begin.',
    cta: 'Submit appeal',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What are Meta Community Standards?',
        answer:
          'Rules for permitted content and behavior on Facebook, covering safety, authenticity, privacy and other areas. Meta updates and publishes them on its policy pages.',
      },
      {
        question: 'Why was my Page flagged if I am not sure it violated policy?',
        answer:
          'Metaâ€™s systems may detect potentially violating content before a final conclusion. The notice reflects an initial assessment stage; an appeal lets review teams reassess your Pageâ€™s specific context.',
      },
      {
        question: 'What is â€œborderline contentâ€?',
        answer:
          'Content that does not violate Community Standards on its face but may be controversial, sensational or reduce experience quality. Meta may limit distribution of such content to protect the community.',
      },
      {
        question: 'Who can submit an appeal?',
        answer:
          'Page administrators or authorized representatives of the organization that owns the Page. You must verify the linked Facebook account when submitting the form.',
      },
      {
        question: 'What should I prepare?',
        answer:
          'Administrator full name, contact email, business email (if applicable), Page name, phone number and a brief description of flagged content. Mismatched or unverifiable information may prevent processing.',
      },
      {
        question: 'How long does review take and what outcomes are possible?',
        answer:
          'Typically 3â€“7 business days, possibly longer if additional information is needed. Outcomes may include appeal acceptance, decision upheld, or a request for more information â€” all communicated via Facebook.',
      },
      {
        question: 'How is my information used?',
        answer:
          'Used only to process your appeal and verify administrative rights, under Metaâ€™s Privacy Policy and Terms. Meta does not sell your personal data.',
      },
    ],
  },
  footer: {
    copyright: 'Â© Meta',
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
