import type { LandingStrings } from './types'

export const zhHansLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: '指南' },
      { label: '政策' },
      { label: '帮助' },
      { label: '支持' },
    ],
    cta: '提交申诉',
    ctaAria: '提交申诉 — 请求审核主页相关决定',
  },
  hero: {
    title: '您的主页可能违反了 Community Standards',
    lead:
      '经近期审核，您的 Facebook 主页被识别为可能违反 Community Standards。如果您认为此结果有误，可提交申诉请求重新审核。',
    eligibility:
      '本通知依据 Facebook 发布者内容原则发出，仅适用于您管理的主页。',
    creatorPrefix: '了解更多关于',
    creatorLink: 'Meta Community Standards',
    cta: '提交申诉',
    badgeAlt: 'Facebook 徽标',
  },
  benefits: {
    title: '关于本通知',
    subtitle:
      'Meta 依据 Community Standards 和内容分发原则审核主页内容，以降低对社区的潜在危害。',
    learnMore: '了解更多',
    items: [
      {
        title: '潜在违规信号',
        description:
          'Meta 的系统可能在最终判定前将内容识别为潜在违规。本通知反映的是初步评估阶段，而非最终裁决。',
      },
      {
        title: '边界内容',
        description:
          '部分内容可能未字面违反 Community Standards，但可能引发争议或降低体验质量。Meta 可能限制分发以保护社区。',
      },
      {
        title: '内容分发原则',
        description:
          'Facebook 优先真实来源和符合政策的内容。分发决策始终依据现行 Community Standards 评估。',
      },
      {
        title: '自动化与专业审核',
        description:
          '该流程结合自动检测与政策审核团队的评估，基于您主页的具体情况。',
      },
      {
        title: '必要时进行身份验证',
        description:
          '对于分发量异常高的内容，Meta 可能在继续处理前要求身份验证。申诉流程可能包含此步骤。',
      },
      {
        title: '申诉权利',
        description:
          '如果您认为初步结果有误，主页管理员或授权代表可提交审核请求。',
      },
    ],
  },
  steps: {
    title: '提交申诉的步骤',
    subtitle:
      '请按顺序完成三个步骤。预计用时：约 5–10 分钟。',
    items: [
      {
        title: '查看被标记的内容。',
        description:
          '将警告与您主页上的相关帖子或活动进行对照。如需了解所适用政策，请查阅 Community Standards。',
      },
      {
        title: '填写表单并验证身份。',
        description:
          '提供管理员及联系信息，以及说明备注（如适用）。提交前请验证关联的 Facebook 账户。',
      },
      {
        title: '在 Facebook 上跟踪状态。',
        description:
          '提交后，您将通过 Facebook 通知收到确认和更新。如需支持，请求参考编号可提供帮助。',
      },
    ],
  },
  testimonials: {
    title: 'Help Center 建议',
    prevAria: '上一项',
    nextAria: '下一项',
    items: [
      {
        quote:
          '申诉前，请查阅 Community Standards 和发布者原则，了解 Meta 对您主页适用的政策。',
        author: 'Meta Business Help Center',
        role: '内容政策',
      },
      {
        quote:
          '在申诉表单中，简要说明被标记内容的背景以及您认为主页符合政策的原因 — 具体信息有助于审核人员更准确地评估您的情况。',
        author: 'Meta Business Help Center',
        role: '提交指南',
      },
      {
        quote:
          '请勿就同一问题重复提交请求。每个请求按接收顺序排队，每个标记仅处理一次。',
        author: 'Meta Business Help Center',
        role: '处理政策',
      },
    ],
  },
  finalCta: {
    title: '准备好提交申诉了吗？',
    subtitle:
      'Appeal details 表单需要管理员信息和身份验证。开始前请先登录 Facebook。',
    cta: '提交申诉',
  },
  faq: {
    title: '常见问题',
    items: [
      {
        question: '什么是 Meta Community Standards？',
        answer:
          'Facebook 上允许的内容和行为规则，涵盖安全、真实性、隐私等领域。Meta 会在政策页面更新并发布。',
      },
      {
        question: '如果不确定是否违规，为什么主页会被标记？',
        answer:
          'Meta 的系统可能在最终结论前检测到潜在违规内容。通知反映的是初步评估阶段；申诉可让审核团队重新评估您主页的具体情况。',
      },
      {
        question: '什么是「边界内容」？',
        answer:
          '指未字面违反 Community Standards，但可能引发争议、耸人听闻或降低体验质量的内容。Meta 可能限制此类内容的分发以保护社区。',
      },
      {
        question: '谁可以提交申诉？',
        answer:
          '主页管理员或主页所属组织的授权代表。提交表单时需验证关联的 Facebook 账户。',
      },
      {
        question: '需要准备什么？',
        answer:
          '管理员全名、联系邮箱、商务邮箱（如适用）、主页名称、电话号码以及被标记内容的简要说明。信息不一致或无法验证可能导致无法处理。',
      },
      {
        question: '审核需要多久？可能有哪些结果？',
        answer:
          '通常 3–7 个工作日，如需补充信息可能更长。结果可能包括申诉被接受、维持原决定或要求补充信息 — 均通过 Facebook 通知。',
      },
      {
        question: '我的信息如何使用？',
        answer:
          '仅用于处理申诉和验证管理权限，依据 Meta 隐私政策和条款。Meta 不会出售您的个人数据。',
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
          { label: 'WhatsApp' },
        ],
      },
      {
        title: '工具',
        links: [
          { label: 'Meta Business Suite' },
          { label: 'Ads Manager' },
        ],
      },
      {
        title: '支持',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
