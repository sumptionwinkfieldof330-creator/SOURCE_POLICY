import type { LandingStrings } from './types'

export const zhHantLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: '指南' },
      { label: '政策' },
      { label: '說明' },
      { label: '支援' },
    ],
    cta: '提交申訴',
    ctaAria: '提交申訴 — 要求重新審查您的粉絲專頁決定',
  },
  hero: {
    title: '您的粉絲專頁可能違反了 Community Standards',
    lead:
      '根據最近的審查，您的 Facebook 粉絲專頁被認定可能違反了 Community Standards。如果您認為此結果有誤，可以提交申訴以要求重新審查。',
    eligibility:
      '此決定是依據 Meta 的標準審查流程。每項申訴均會依現行政策進行審查。',
    creatorPrefix: '進一步了解',
    creatorLink: 'Meta Community Standards',
    cta: '提交申訴',
    badgeAlt: 'Meta 通知圖示',
    videoAria: '申訴流程影片指南',
  },
  benefits: {
    title: '關於申訴流程',
    subtitle:
      '了解 Meta 如何處理與 Facebook 上 Community Standards 相關的申訴請求。',
    learnMore: '了解更多',
    items: [
      {
        title: '審查流程',
        description:
          '每項申訴均會依 Meta 現行的 Community Standards 獨立審查。',
      },
      {
        title: '申訴權利',
        description:
          '如果您認為決定有誤，可以提交重新審查請求。',
      },
      {
        title: '所需資訊',
        description:
          '請提供有關您的粉絲專頁及其管理員的準確資訊，以支援審查。',
      },
      {
        title: '處理時間',
        description:
          '審查時間可能因各案件的複雜程度而有所不同。',
      },
      {
        title: '結果通知',
        description:
          '審查完成後，您將在 Facebook 上收到通知。',
      },
      {
        title: '政策合規',
        description:
          '粉絲專頁在整個審查過程中須遵守 Meta Community Standards。',
      },
    ],
  },
  steps: {
    title: '如何提交申訴',
    subtitle:
      '完成以下步驟以提交您的申訴。您提供的資訊將用於審查目的。',
    items: [
      {
        title: '查看通知。',
        description:
          '閱讀有關您的粉絲專頁可能違反 Community Standards 的通知。如果您認為結果有誤，可以繼續提交申訴。',
      },
      {
        title: '填寫申訴表單。',
        description:
          '在 Appeal details 表單中，請提供管理員的全名、聯絡電子郵件、商務電子郵件、粉絲專頁名稱、電話號碼和出生日期。請準確填寫所有必填欄位。',
      },
      {
        title: '等待審查。',
        description:
          '您的請求將被審查，我們將盡快通知您結果。',
      },
    ],
  },
  testimonials: {
    title: '提交申訴時的注意事項',
    prevAria: '上一項',
    nextAria: '下一項',
    items: [
      {
        quote:
          '每項申訴均會依 Meta 現行的 Community Standards 獨立審查。',
        author: 'Meta Help Center',
        role: '政策與安全',
      },
      {
        quote:
          '請提供準確完整的資訊，以支援您的申訴審查。',
        author: 'Meta Help Center',
        role: '使用者指南',
      },
      {
        quote:
          '申訴審查完成後，您將在 Facebook 上收到通知。',
        author: 'Meta Help Center',
        role: '系統通知',
      },
    ],
  },
  finalCta: {
    title: '是否要提交申訴？',
    subtitle:
      '如果您認為決定有誤，請提交重新審查請求。',
    cta: '提交申訴',
  },
  faq: {
    title: '常見問題',
    items: [
      {
        question: '什麼是 Meta Community Standards？',
        answer:
          'Community Standards 定義了 Facebook 上允許的內容和行為。Meta 應用這些標準，以協助為使用者維護安全的環境。',
      },
      {
        question: '如何對此決定提出申訴？',
        answer:
          '如果您認為您的粉絲專頁被錯誤地認定為違反 Community Standards，請填寫 Appeal details 表單並提交您的請求。它將依現行政策進行審查。',
      },
      {
        question: '我需要提供哪些資訊？',
        answer:
          '您需要提供粉絲專頁管理員的詳細資訊、聯絡電子郵件、粉絲專頁名稱以及表單中要求的身分驗證資訊。',
      },
      {
        question: '審查需要多長時間？',
        answer:
          '審查時間因案件而異。審查完成後，您將在 Facebook 上收到通知。',
      },
      {
        question: '提交申訴後會發生什麼？',
        answer:
          '您的請求將依 Community Standards 進行審查。審查完成後，結果將透過 Facebook 告知您。',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Meta 技術',
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
        title: '支援',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
