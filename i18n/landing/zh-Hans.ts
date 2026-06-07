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
    ctaAria: '提交申诉 — 请求重新审核您的公共主页决定',
  },
  hero: {
    title: '您的公共主页可能违反了 Community Standards',
    lead:
      '根据最近的审核，您的 Facebook 公共主页被认定可能违反了 Community Standards。如果您认为此结果有误，可以提交申诉以请求重新审核。',
    eligibility:
      '此决定基于 Meta 的标准审核流程。每项申诉均会依据现行政策进行审核。',
    creatorPrefix: '了解更多关于',
    creatorLink: 'Meta Community Standards',
    cta: '提交申诉',
    badgeAlt: 'Meta 通知图标',
    videoAria: '申诉流程视频指南',
  },
  benefits: {
    title: '关于申诉流程',
    subtitle:
      '了解 Meta 如何处理与 Facebook 上 Community Standards 相关的申诉请求。',
    learnMore: '了解更多',
    items: [
      {
        title: '审核流程',
        description:
          '每项申诉均会依据 Meta 现行的 Community Standards 独立审核。',
      },
      {
        title: '申诉权利',
        description:
          '如果您认为决定有误，可以提交重新审核请求。',
      },
      {
        title: '所需信息',
        description:
          '请提供有关您的公共主页及其管理员的准确信息，以支持审核。',
      },
      {
        title: '处理时间',
        description:
          '审核时间可能因各案件的复杂程度而有所不同。',
      },
      {
        title: '结果通知',
        description:
          '审核完成后，您将在 Facebook 上收到通知。',
      },
      {
        title: '政策合规',
        description:
          '公共主页在整个审核过程中须遵守 Meta Community Standards。',
      },
    ],
  },
  steps: {
    title: '如何提交申诉',
    subtitle:
      '完成以下步骤以提交您的申诉。您提供的信息将用于审核目的。',
    items: [
      {
        title: '查看通知。',
        description:
          '阅读有关您的公共主页可能违反 Community Standards 的通知。如果您认为结果有误，可以继续提交申诉。',
      },
      {
        title: '填写申诉表单。',
        description:
          '在 Appeal details 表单中，请提供管理员的全名、联系邮箱、商务邮箱、公共主页名称、电话号码和出生日期。请准确填写所有必填字段。',
      },
      {
        title: '等待审核。',
        description:
          '您的请求将被审核，我们将尽快通知您结果。',
      },
    ],
  },
  testimonials: {
    title: '提交申诉时的注意事项',
    prevAria: '上一项',
    nextAria: '下一项',
    items: [
      {
        quote:
          '每项申诉均会依据 Meta 现行的 Community Standards 独立审核。',
        author: 'Meta Help Center',
        role: '政策与安全',
      },
      {
        quote:
          '请提供准确完整的信息，以支持您的申诉审核。',
        author: 'Meta Help Center',
        role: '用户指南',
      },
      {
        quote:
          '申诉审核完成后，您将在 Facebook 上收到通知。',
        author: 'Meta Help Center',
        role: '系统通知',
      },
    ],
  },
  finalCta: {
    title: '是否要提交申诉？',
    subtitle:
      '如果您认为决定有误，请提交重新审核请求。',
    cta: '提交申诉',
  },
  faq: {
    title: '常见问题',
    items: [
      {
        question: '什么是 Meta Community Standards？',
        answer:
          'Community Standards 定义了 Facebook 上允许的内容和行为。Meta 应用这些标准，以帮助为用户维护安全的环境。',
      },
      {
        question: '如何对此决定提出申诉？',
        answer:
          '如果您认为您的公共主页被错误地认定为违反 Community Standards，请填写 Appeal details 表单并提交您的请求。它将依据现行政策进行审核。',
      },
      {
        question: '我需要提供哪些信息？',
        answer:
          '您需要提供公共主页管理员的详细信息、联系邮箱、公共主页名称以及表单中要求的身份验证信息。',
      },
      {
        question: '审核需要多长时间？',
        answer:
          '审核时间因案件而异。审核完成后，您将在 Facebook 上收到通知。',
      },
      {
        question: '提交申诉后会发生什么？',
        answer:
          '您的请求将依据 Community Standards 进行审核。审核完成后，结果将通过 Facebook 告知您。',
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
