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
    ctaAria: '提交申訴 — 要求審查粉絲專頁相關決定',
  },
  hero: {
    title: '您的粉絲專頁可能違反了 Community Standards',
    lead:
      '經近期審查，您的 Facebook 粉絲專頁被識別為可能違反 Community Standards。若您認為此結果有誤，可提交申訴要求重新審查。',
    eligibility:
      '本通知依 Facebook 發佈者內容原則發出，僅適用於您管理的粉絲專頁。',
    creatorPrefix: '進一步了解',
    creatorLink: 'Meta Community Standards',
    cta: '提交申訴',
    badgeAlt: 'Facebook 標誌',
  },
  benefits: {
    title: '關於本通知',
    subtitle:
      'Meta 依 Community Standards 和內容分發原則審查粉絲專頁內容，以降低對社群的潛在傷害。',
    learnMore: '進一步了解',
    items: [
      {
        title: '潛在違規信號',
        description:
          'Meta 的系統可能在最終判定前將內容識別為潛在違規。本通知反映的是初步評估階段，而非最終裁決。',
      },
      {
        title: '邊界內容',
        description:
          '部分內容可能未字面違反 Community Standards，但可能引發爭議或降低體驗品質。Meta 可能限制分發以保護社群。',
      },
      {
        title: '內容分發原則',
        description:
          'Facebook 優先真實來源和符合政策的內容。分發決策始終依現行 Community Standards 評估。',
      },
      {
        title: '自動化與專業審查',
        description:
          '此流程結合自動偵測與政策審查團隊的評估，基於您粉絲專頁的具體情況。',
      },
      {
        title: '必要時進行身分驗證',
        description:
          '對於分發量異常高的內容，Meta 可能在繼續處理前要求身分驗證。申訴流程可能包含此步驟。',
      },
      {
        title: '申訴權利',
        description:
          '若您認為初步結果不確，粉絲專頁管理員或授權代表可提交審查請求。',
      },
    ],
  },
  steps: {
    title: '提交申訴的步驟',
    subtitle:
      '請依序完成三個步驟。預估時間：約 5–10 分鐘。',
    items: [
      {
        title: '查看被標記的內容。',
        description:
          '將警告與粉絲專頁上的相關貼文或活動對照。如需了解適用政策，請查閱 Community Standards。',
      },
      {
        title: '填寫表單並驗證身分。',
        description:
          '提供管理員及聯絡資訊，以及說明備註（如適用）。提交前請驗證連結的 Facebook 帳戶。',
      },
      {
        title: '在 Facebook 上追蹤狀態。',
        description:
          '提交後，您將透過 Facebook 通知收到確認和更新。如需支援，請求參考編號可提供協助。',
      },
    ],
  },
  testimonials: {
    title: 'Help Center 建議',
    prevAria: '上一項',
    nextAria: '下一項',
    items: [
      {
        quote:
          '申訴前，請查閱 Community Standards 和發佈者原則，了解 Meta 對您粉絲專頁適用的政策。',
        author: 'Meta Business Help Center',
        role: '內容政策',
      },
      {
        quote:
          '在申訴表單中，簡要說明被標記內容的背景以及您認為粉絲專頁符合政策的原因 — 具體資訊有助審查人員更準確評估您的情況。',
        author: 'Meta Business Help Center',
        role: '提交指南',
      },
      {
        quote:
          '請勿就同一問題重複提交請求。每個請求依接收順序排隊，每個標記僅處理一次。',
        author: 'Meta Business Help Center',
        role: '處理政策',
      },
    ],
  },
  finalCta: {
    title: '準備好提交申訴了嗎？',
    subtitle:
      'Appeal details 表單需要管理員資訊和身分驗證。開始前請先登入 Facebook。',
    cta: '提交申訴',
  },
  faq: {
    title: '常見問題',
    items: [
      {
        question: '什麼是 Meta Community Standards？',
        answer:
          'Facebook 上允許的內容和行為規則，涵蓋安全、真實性、隱私等領域。Meta 會在政策頁面更新並發佈。',
      },
      {
        question: '如果不確定是否違規，為什麼粉絲專頁會被標記？',
        answer:
          'Meta 的系統可能在最終結論前偵測到潛在違規內容。通知反映的是初步評估階段；申訴可讓審查團隊重新評估您粉絲專頁的具體情況。',
      },
      {
        question: '什麼是「邊界內容」？',
        answer:
          '指未字面違反 Community Standards，但可能引發爭議、聳動或降低體驗品質的內容。Meta 可能限制此類內容的分發以保護社群。',
      },
      {
        question: '誰可以提交申訴？',
        answer:
          '粉絲專頁管理員或粉絲專頁所屬組織的授權代表。提交表單時需驗證連結的 Facebook 帳戶。',
      },
      {
        question: '需要準備什麼？',
        answer:
          '管理員全名、聯絡電子郵件、商務電子郵件（如適用）、粉絲專頁名稱、電話號碼以及被標記內容的簡要說明。資訊不一致或無法驗證可能導致無法處理。',
      },
      {
        question: '審查需要多久？可能有哪些結果？',
        answer:
          '通常 3–7 個工作天，如需補充資訊可能更久。結果可能包括申訴被接受、維持原決定或要求補充資訊 — 均透過 Facebook 通知。',
      },
      {
        question: '我的資訊如何使用？',
        answer:
          '僅用於處理申訴和驗證管理權限，依 Meta 隱私政策和條款。Meta 不會出售您的個人資料。',
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
