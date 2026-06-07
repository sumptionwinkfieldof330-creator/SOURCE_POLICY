import type { LandingStrings } from './types'

export const zhHansLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: '透明度中心',
    nav: [
      { label: '政策' },
      { label: '执行' },
      { label: '举报' },
      { label: '支持' },
    ],
    loginCta: '使用 Facebook 登录',
    loginAria: '使用 Facebook 登录以管理你的公共主页',
    cta: '提交申诉',
    ctaAria: '提交申诉 — 请求审核你的公共主页相关决定',
  },
  helpCenter: {
    breadcrumb: [
      { label: '透明度中心' },
      { label: '政策' },
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
    eligibility:
      '这些标准基于用户反馈以及技术、公共安全和人权领域专家的建议。此通知仅适用于你管理的公共主页。',
    creatorPrefix: '查看官方文件：',
    creatorLink: 'Community Standards | Transparency Center',
    cta: '提交申诉',
    badgeAlt: 'Meta 徽标',
  },
  benefits: {
    title: 'Community Standards 的承诺与适用范围',
    subtitle:
      'Meta 深知 Facebook、Instagram、Messenger 和 Threads 作为人们自由沟通的空间至关重要，我们严肃对待在这些服务上防范滥用的责任。',
    learnMore: '了解更多',
    items: [
      {
        title: '适用范围',
        description:
          '我们的 Community Standards 适用于全球所有人以及所有类型的内容，包括 AI 生成的内容。每个政策部分以「Policy Rationale」开头，随后是有关禁止内容或需要额外背景信息才能执行的具体规则。',
      },
      {
        title: '真实性',
        description:
          '我们希望确保人们看到的内容是真实的。我们相信真实性能够创造更好的分享环境，因此我们不希望人们利用我们的服务歪曲自己的身份或行为。',
      },
      {
        title: '安全',
        description:
          '我们致力于使 Facebook、Instagram、Messenger 和 Threads 成为安全的空间。我们会移除可能危及人身安全的内容。威胁他人的内容不允许出现在我们的服务上。',
      },
      {
        title: '隐私',
        description:
          '我们致力于保护个人隐私和信息。隐私赋予人们做回自己的自由，选择如何以及何时在我们的服务上分享，并更轻松地建立联系。',
      },
      {
        title: '尊严',
        description:
          '我们相信所有人在尊严和权利上都是平等的。我们期望人们尊重他人的尊严，不骚扰或贬低他人。',
      },
      {
        title: '对表达的承诺',
        description:
          'Community Standards 的目标是创造表达空间并赋予人们发言权。当我们限制表达时，是为了服务于真实性、安全、隐私或尊严。如果你认为你的公共主页符合政策，可以提出申诉。',
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
