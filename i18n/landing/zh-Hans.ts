import type { LandingStrings } from './types'

export const zhHansLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: '透明度中心',
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
    loginCta: '使用 Facebook 登录',
    loginAria: '使用 Facebook 登录以管理你的公共主页',
    cta: '提交申诉',
    ctaAria: '提交申诉 — 请求审核你的公共主页相关决定',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Home', href: '#' },
      { label: 'Policies', href: '#' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Community Standards 主题',
    sidebarSection: '政策',
    sidebarLinks: [
      { label: '协调伤害与宣扬犯罪' },
      { label: '危险组织与个人' },
      { label: '欺诈、诈骗与欺骗行为' },
      { label: '受限商品和服务' },
      { label: '儿童性剥削、虐待和裸露' },
      { label: '暴力和血腥内容' },
    ],
  },
  hero: {
    title: '你的公共主页可能违反了 Community Standards',
    lead:
      'Community Standards 说明了在 Facebook、Instagram、Messenger 和 Threads 上允许和禁止的内容。在最近一次审核后，你的公共主页被认定可能不符合这些标准。如果你认为此结果不正确，可以提交申诉请求审核。',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      '这些标准基于用户反馈以及技术、公共安全和人权领域专家的建议。此通知仅适用于你管理的公共主页。',
    creatorPrefix: '查看官方文件：',
    creatorLink: 'Community Standards | Transparency Center',
    cta: '提交申诉',
    badgeAlt: 'Meta 徽标',
  },
  notice: {
    title: 'Your Page may have violated Community Standards',
    body:
      'Following a recent review, a Page you administer has been identified as potentially not complying with Community Standards. If you believe this result is incorrect, you may submit an appeal to request a review. This notice applies only to a Page you administer.',
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
          'The goal of our Community Standards is to create a place for expression and give people a voice. We want people to be able to talk openly about the issues that matter to them, whether through written comments, photos, music or other artistic means, even if some may disagree or find them objectionable. In some cases, we allow content that would otherwise violate our standards, if the content is [[newsworthy]] and in the public interest. We do so only after weighing the public interest value against the risk of harm and after consulting international human rights standards. In other cases, we may remove unclear or implied content when additional context allows us to reasonably understand that it violates our standards.',
          'While we continue to prioritize our commitment to free expression, we also recognize that the internet has created new opportunities for abuse. For these reasons, when we limit expression, we do it in service of one or more of the following values:',
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
          'We want to make sure the content people see is authentic. We believe that authenticity creates a better environment for sharing, and that\'s why we don\'t want people using our services to misrepresent who they are or what they\'re doing.',
        ],
      },
      {
        id: 'safety',
        label: 'Safety',
        paragraphs: [
          'We\'re committed to making Facebook, Instagram, Messenger and Threads safe places. We remove content that could contribute to a risk of harm to the physical security of persons, including content that threatens, excludes or silences others.',
        ],
      },
      {
        id: 'privacy',
        label: 'Privacy',
        paragraphs: [
          'We\'re committed to protecting personal privacy and information. Privacy gives people the freedom to be themselves, choose how and when to share on our services and connect more easily.',
        ],
      },
      {
        id: 'dignity',
        label: 'Dignity',
        paragraphs: [
          'We believe that all people are equal in dignity and rights. We expect that people will respect the dignity of others and not harass or degrade others.',
        ],
      },
    ],
  },
  steps: {
    title: '提交申诉的步骤',
    subtitle:
      '提交前，请将标记内容与 Transparency Center 上的 Community Standards 进行对照。预计填写表单时间：约 5–10 分钟。',
    items: [
      {
        title: '查阅适用的政策。',
        description:
          '阅读 Transparency Center 上的相关政策部分 — 每个部分都包含 Policy Rationale 和具体规则。与你的公共主页上被标记的帖子或活动进行对照。',
      },
      {
        title: '填写表单并验证身份。',
        description:
          '提供管理员和联系信息以及背景说明（如需要）。提交前验证关联的 Facebook 账户。',
      },
      {
        title: '在 Facebook 上关注结果。',
        description:
          '提交后，你将通过 Facebook 通知收到确认。审核通常需要 3–7 个工作日。如需支持，你的请求编号会有帮助。',
      },
    ],
  },
  testimonials: {
    title: 'Transparency Center 引用',
    prevAria: '上一项',
    nextAria: '下一项',
    items: [
      {
        quote:
          '这些标准基于用户反馈以及技术、公共安全和人权等领域专家的建议 — 以确保每个人的声音都受到重视。',
        author: 'Meta Transparency Center',
        role: '简介',
      },
      {
        quote:
          '我们的 Community Standards 适用于全球所有人以及所有类型的内容，包括 AI 生成的内容。',
        author: 'Meta Transparency Center',
        role: '适用范围',
      },
      {
        quote:
          'Community Standards 的美式英语版本反映了最新的一套政策，应作为主要文件使用。',
        author: 'Meta Transparency Center',
        role: '官方文件',
      },
    ],
  },
  finalCta: {
    title: '提交申诉',
    subtitle:
      '如果在阅读 Community Standards 后，你认为你的公共主页符合政策，请提交包含管理员信息和身份验证的表单。',
    cta: '提交申诉',
  },
  faq: {
    title: '常见问题',
    items: [
      {
        question: 'Community Standards 涵盖哪些内容？',
        answer:
          'Community Standards 说明了在 Facebook、Instagram、Messenger 和 Threads 上允许和禁止的内容。完整文件发布在 Meta Transparency Center。',
      },
      {
        question: '哪个版本是官方参考？',
        answer:
          '根据 Transparency Center，美式英语版本反映了最新的一套政策，应作为主要文件使用。',
      },
      {
        question: 'Meta 在限制内容时遵循哪些价值观？',
        answer:
          '当 Meta 限制表达时，是为了服务于真实性、安全、隐私或尊严 — Community Standards 中阐述的四个基本价值观。',
      },
      {
        question: '如果我不确定是否违反政策，为什么我的公共主页会被标记？',
        answer:
          'Meta 的系统可能在最终结论之前检测到可能违规的内容。通知反映的是初步评估阶段；申诉可让审核团队重新评估你公共主页的具体背景。',
      },
      {
        question: '谁可以提交申诉？',
        answer:
          '公共主页管理员或拥有该公共主页的组织的授权代表。提交表单时必须验证关联的 Facebook 账户。',
      },
      {
        question: '审核需要多长时间，可能有哪些结果？',
        answer:
          '通常为 3–7 个工作日，如需补充信息可能更长。结果可能包括申诉被接受、维持原决定或要求提供更多信息 — 均通过 Facebook 通知。',
      },
      {
        question: '我的信息如何使用？',
        answer:
          '仅用于处理你的申诉和验证管理权限，依据 Meta 的隐私政策和条款。',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Meta 技术',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: '政策',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: '支持',
        links: [
          { label: '帮助中心' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
