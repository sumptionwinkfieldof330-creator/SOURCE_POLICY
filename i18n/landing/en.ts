import type { LandingStrings } from './types'

export const enLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Transparency Center',
    nav: [
      { label: 'Policies' },
      { label: 'Enforcement' },
      { label: 'Reporting' },
      { label: 'Support' },
    ],
    loginCta: 'Log in with Facebook',
    loginAria: 'Log in with Facebook to manage your Page',
    cta: 'Submit appeal',
    ctaAria: 'Submit an appeal — request a review of your Page decision',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Transparency Center' },
      { label: 'Policies' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Community Standards topics',
    sidebarSection: 'Policies',
    sidebarLinks: [
      { label: 'Coordinating Harm and Promoting Crime' },
      { label: 'Dangerous Organizations and Individuals' },
      { label: 'Fraud, Scams, and Deceptive Practices' },
      { label: 'Restricted Goods and Services' },
      { label: 'Child Sexual Exploitation, Abuse, and Nudity' },
      { label: 'Violent and Graphic Content' },
    ],
  },
  hero: {
    title: 'Your Page may have violated Community Standards',
    lead:
      'The Community Standards outline what is and isn\'t allowed on Facebook, Instagram, Messenger and Threads. Following a recent review, your Page has been identified as potentially not complying with these standards. If you believe this result is incorrect, you may submit an appeal to request a review.',
    eligibility:
      'These standards are based on feedback from people and the advice of experts in technology, public safety and human rights. This notice applies only to a Page you administer.',
    creatorPrefix: 'View the official document at',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Submit appeal',
    badgeAlt: 'Meta logo',
  },
  benefits: {
    title: 'Commitment and scope of Community Standards',
    subtitle:
      'Meta recognizes how important it is for Facebook, Instagram, Messenger and Threads to be places where people feel empowered to communicate, and we take our role seriously in keeping abuse off these services.',
    learnMore: 'Learn more',
    items: [
      {
        title: 'Scope of application',
        description:
          'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each policy section starts with a "Policy Rationale" followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
      },
      {
        title: 'Authenticity',
        description:
          'We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that\'s why we don\'t want people using our services to misrepresent who they are or what they\'re doing.',
      },
      {
        title: 'Safety',
        description:
          'We\'re committed to making Facebook, Instagram, Messenger and Threads safe places. We remove content that could contribute to a risk of harm to the physical security of persons. Content that threatens people isn\'t allowed on our services.',
      },
      {
        title: 'Privacy',
        description:
          'We\'re committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.',
      },
      {
        title: 'Dignity',
        description:
          'We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.',
      },
      {
        title: 'Commitment to voice',
        description:
          'The goal of our Community Standards is to create a place for expression and give people a voice. When we limit expression, we do it in service of authenticity, safety, privacy or dignity. You may appeal if you believe your Page complies with policy.',
      },
    ],
  },
  steps: {
    title: 'Steps to submit an appeal',
    subtitle:
      'Before submitting, compare flagged content with Community Standards on the Transparency Center. Estimated form completion time: approximately 5–10 minutes.',
    items: [
      {
        title: 'Review the applicable policy.',
        description:
          'Read the relevant policy section on the Transparency Center — each includes a Policy Rationale and specific rules. Compare with the flagged posts or activity on your Page.',
      },
      {
        title: 'Complete the form and verify identity.',
        description:
          'Provide administrator and contact details plus context (if needed). Verify your linked Facebook account before submitting.',
      },
      {
        title: 'Monitor the outcome on Facebook.',
        description:
          'After submission, you receive confirmation via Facebook notifications. Review typically takes 3–7 business days. Your request reference helps if support is needed.',
      },
    ],
  },
  testimonials: {
    title: 'Reference from the Transparency Center',
    prevAria: 'Previous item',
    nextAria: 'Next item',
    items: [
      {
        quote:
          'These standards are based on feedback from people and the advice of experts in fields like technology, public safety and human rights — to ensure everyone\'s voice is valued.',
        author: 'Meta Transparency Center',
        role: 'Introduction',
      },
      {
        quote:
          'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content.',
        author: 'Meta Transparency Center',
        role: 'Scope',
      },
      {
        quote:
          'The US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
        author: 'Meta Transparency Center',
        role: 'Official document',
      },
    ],
  },
  finalCta: {
    title: 'Submit an appeal',
    subtitle:
      'If, after reading the Community Standards, you believe your Page complies with policy, submit the form with administrator details and identity verification.',
    cta: 'Submit appeal',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'What do Community Standards cover?',
        answer:
          'Community Standards outline what is and isn\'t allowed on Facebook, Instagram, Messenger and Threads. The full document is published on the Meta Transparency Center.',
      },
      {
        question: 'Which version is the official reference?',
        answer:
          'According to the Transparency Center, the US English version reflects the most up to date set of policies and should be used as the primary document.',
      },
      {
        question: 'What values guide Meta when limiting content?',
        answer:
          'When Meta limits expression, it does so in service of authenticity, safety, privacy or dignity — the four foundational values stated in Community Standards.',
      },
      {
        question: 'Why was my Page flagged if I am not sure it violated policy?',
        answer:
          'Meta\'s systems may detect potentially violating content before a final conclusion. The notice reflects an initial assessment stage; an appeal lets review teams reassess your Page\'s specific context.',
      },
      {
        question: 'Who can submit an appeal?',
        answer:
          'Page administrators or authorized representatives of the organization that owns the Page. You must verify the linked Facebook account when submitting the form.',
      },
      {
        question: 'How long does review take and what outcomes are possible?',
        answer:
          'Typically 3–7 business days, possibly longer if additional information is needed. Outcomes may include appeal acceptance, decision upheld, or a request for more information — all communicated via Facebook.',
      },
      {
        question: 'How is my information used?',
        answer:
          'Used only to process your appeal and verify administrative rights, under Meta\'s Privacy Policy and Terms.',
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
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'Policies',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
