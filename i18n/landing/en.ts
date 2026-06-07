import type { LandingStrings } from './types'

export const enLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Transparency Center',
    nav: [
      { label: 'Transparency Center', type: 'link', href: '#' },
      { label: 'Policies', type: 'menu' },
      { label: 'Enforcement', type: 'menu' },
      { label: 'Security', type: 'menu' },
      { label: 'Features', type: 'menu' },
      { label: 'Governance', type: 'menu' },
      { label: 'Research tools', type: 'menu' },
      { label: 'Reports', type: 'menu' },
    ],
    loginCta: 'Log in with Facebook',
    loginAria: 'Log in with Facebook to manage your Fanpage',
    cta: 'Submit appeal',
    ctaAria: 'Submit an appeal — request a review of your Fanpage decision',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Home', href: '#' },
      { label: 'Policies', href: '#' },
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
      { label: 'Suicide, Self-Injury, and Eating Disorders' },
      { label: 'Adult Nudity and Sexual Activity' },
      { label: 'Violent and Graphic Content' },
      { label: 'Bullying and Harassment' },
      { label: 'Hate Speech' },
    ],
  },
  hero: {
    title: 'Community Standards',
    lead:
      'The Community Standards outline what is and isn\'t allowed on Facebook, Instagram, Messenger and Threads.',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      'These standards are based on feedback from people and the advice of experts in technology, public safety and human rights — to ensure everyone\'s voice is valued.',
    creatorPrefix: 'View the full document at',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Submit an appeal request',
    badgeAlt: 'Meta logo',
  },
  notice: {
    title: 'Your Fanpage may have violated Community Standards',
    body:
      'Following a recent review, a Fanpage you administer has been identified as potentially not complying with Community Standards. If you believe this result is incorrect, you may submit an appeal to request a review. This notice applies only to a Fanpage you administer.',
  },
  policyIndex: {
    title: 'Community Standards topics',
    items: [
      { label: 'Coordinating Harm and Promoting Crime' },
      { label: 'Dangerous Organizations and Individuals' },
      { label: 'Fraud, Scams, and Deceptive Practices' },
      { label: 'Restricted Goods and Services' },
      { label: 'Child Sexual Exploitation, Abuse, and Nudity' },
      { label: 'Suicide, Self-Injury, and Eating Disorders' },
      { label: 'Adult Nudity and Sexual Activity' },
      { label: 'Violent and Graphic Content' },
      { label: 'Bullying and Harassment' },
      { label: 'Hate Speech' },
      { label: 'Third-Party Intellectual Property Infringement' },
      { label: 'Locally Illegal Content, Products, or Services' },
    ],
  },
  benefits: {
    items: [
      {
        title: 'Our commitment to voice',
        paragraphs: [
          'Our Community Standards aim to create space for expression. We encourage open discussion — through comments, images, music or other creative formats — even when others disagree. In exceptional cases, [[newsworthy]] content that serves the public interest may remain after we balance informational value against harm and reference international human rights standards. When context clarifies a violation, we may remove ambiguous or implied content.',
          'We prioritize voice while recognizing that the internet also enables abuse. When we limit expression, we do so to protect one or more of the following values:',
        ],
      },
    ],
  },
  valuesGrid: {
    items: [
      {
        id: 'authenticity',
        label: 'Authenticity',
        paragraphs: [
          'We expect content on our platforms to reflect what is genuine. Authenticity supports healthier sharing; misrepresenting identity or conduct is not permitted.',
        ],
      },
      {
        id: 'safety',
        label: 'Safety',
        paragraphs: [
          'Facebook, Instagram, Messenger and Threads should be safe environments. We remove content that may cause physical harm, threaten, exclude or silence others.',
        ],
      },
      {
        id: 'privacy',
        label: 'Privacy',
        paragraphs: [
          'We protect personal privacy and data. Privacy helps people control how and when they share and connect on our services.',
        ],
      },
      {
        id: 'dignity',
        label: 'Dignity',
        paragraphs: [
          'Everyone has equal dignity and rights. Harassment or degrading others is not permitted.',
        ],
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
          'Read the relevant policy section on the Transparency Center — each includes a Policy Rationale and specific rules. Compare with the flagged posts or activity on your Fanpage.',
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
      'If, after reading the Community Standards, you believe your Fanpage complies with policy, submit the form with administrator details and identity verification.',
    cta: 'Submit an appeal request',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Does an appeal apply to personal profiles or Groups?',
        answer:
          'No. The notice on this page and the appeal form are only for Fanpages you administer. Personal profiles, Groups, or other Meta products are outside the scope of this request.',
      },
      {
        question: 'Can I submit another appeal after one is rejected?',
        answer:
          'Yes, if you have new information or evidence that was not considered previously. Each new submission should clearly state what is different; duplicate appeals without additional context may not be reviewed again.',
      },
      {
        question: 'What should I prepare before opening the appeal form?',
        answer:
          'Note links or IDs of affected posts, a brief explanation of business context or content purpose, and confirm you are signed in with an account that has Fanpage admin access in Meta Business Suite.',
      },
      {
        question: 'What is the request reference code for?',
        answer:
          'Each form submission generates a unique reference code. Keep it when tracking status on Facebook or when support needs to locate your case — it does not replace official in-app notifications.',
      },
      {
        question: 'Does submitting an appeal pause Fanpage restrictions?',
        answer:
          'No. Your Fanpage may remain restricted while review is pending. Appeal outcomes are communicated separately and may lead to restrictions being lifted if accepted.',
      },
      {
        question: 'How will I receive the appeal outcome?',
        answer:
          'Through Facebook Notifications (bell icon), not via a separate email from this form. Enable Fanpage-related notifications and check regularly for several business days after submitting.',
      },
      {
        question: 'How is information from the form stored and used?',
        answer:
          'Data you provide is used only to process your appeal, verify admin rights, and maintain records under Meta\'s internal procedures, in line with the Privacy Policy and Terms — not for advertising.',
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
