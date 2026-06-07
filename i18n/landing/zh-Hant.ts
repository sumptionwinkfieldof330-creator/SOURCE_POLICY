import type { LandingStrings } from './types'

export const zhHantLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: '透明度中心',
    nav: [
      { label: '政策' },
      { label: '執行' },
      { label: '舉報' },
      { label: '支援' },
    ],
    loginCta: '使用 Facebook 登入',
    loginAria: '使用 Facebook 登入以管理你的粉絲專頁',
    cta: '提交申訴',
    ctaAria: '提交申訴 — 要求審查你的粉絲專頁相關決定',
  },
  helpCenter: {
    breadcrumb: [
      { label: '透明度中心' },
      { label: '政策' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Community Standards 主題',
    sidebarSection: '政策',
    sidebarLinks: [
      { label: '協調傷害與宣揚犯罪' },
      { label: '危險組織與個人' },
      { label: '詐欺、詐騙與欺瞞行為' },
      { label: '受限商品和服務' },
      { label: '兒童性剝削、虐待和裸露' },
      { label: '暴力和血腥內容' },
    ],
  },
  hero: {
    title: '你的粉絲專頁可能違反了 Community Standards',
    lead:
      'Community Standards 說明了在 Facebook、Instagram、Messenger 和 Threads 上允許和禁止的內容。在最近一次審查後，你的粉絲專頁被認定可能不符合這些標準。如果你認為此結果不 正確，可以提交申訴要求審查。',
    eligibility:
      '這些標準以使用者回饋以及技術、公共安全和人權領域專家的建議為基礎。此通知僅適用於你管理的粉絲專頁。',
    creatorPrefix: '查看官方文件：',
    creatorLink: 'Community Standards | Transparency Center',
    cta: '提交申訴',
    badgeAlt: 'Meta 標誌',
  },
  benefits: {
    title: 'Community Standards 的承諾與適用範圍',
    subtitle:
      'Meta 深知 Facebook、Instagram、Messenger 和 Threads 作為人們自由溝通的空間至關重要，我們嚴肅對待在這些服務上防範濫用的責任。',
    learnMore: '了解更多',
    items: [
      {
        title: '適用範圍',
        description:
          '我們的 Community Standards 適用於全球所有人以及所有類型的內容，包括 AI 生成的內容。每個政策部分以「Policy Rationale」開頭，隨後是有關禁止內容或需要額外背景資訊才能執行的具體規則。',
      },
      {
        title: '真實性',
        description:
          '我們希望確保人們看到的內容是真實的。我們相信真實性能夠創造更好的分享環境，因此我們不希望人們利用我們的服務歪曲自己的身份或行為。',
      },
      {
        title: '安全',
        description:
          '我們致力於使 Facebook、Instagram、Messenger 和 Threads 成為安全的空間。我們會移除可能危及人身安全的內容。威脅他人的內容不允許出現在我們的服務上。',
      },
      {
        title: '隱私',
        description:
          '我們致力於保護個人隱私和資訊。隱私賦予人們做回自己的自由，選擇如何以及何時在我們的服務上分享，並更輕鬆地建立聯繫。',
      },
      {
        title: '尊嚴',
        description:
          '我們相信所有人在尊嚴和權利上都是平等的。我們期望人們尊重他人的尊嚴，不騷擾或貶低他人。',
      },
      {
        title: '對表達的承諾',
        description:
          'Community Standards 的目標是創造表達空間並賦予人們發言權。當我們限制表達時，是為了服務於真實性、安全、隱私或尊嚴。如果你認為你的粉絲專頁符合政策，可以提出申訴。',
      },
    ],
  },
  steps: {
    title: '提交申訴的步驟',
    subtitle:
      '提交前，請將標記內容與 Transparency Center 上的 Community Standards 進行對照。預計填寫表單時間：約 5–10 分鐘。',
    items: [
      {
        title: '查閱適用的政策。',
        description:
          '閱讀 Transparency Center 上的相關政策部分 — 每個部分都包含 Policy Rationale 和具體規則。與你的粉絲專頁上被標記的貼文或活動進行對照。',
      },
      {
        title: '填寫表單並驗證身份。',
        description:
          '提供管理員和聯絡資訊以及背景說明（如需要）。提交前驗證關聯的 Facebook 帳號。',
      },
      {
        title: '在 Facebook 上關注結果。',
        description:
          '提交後，你將透過 Facebook 通知收到確認。審查通常需要 3–7 個工作天。如需支援，你的請求編號會有幫助。',
      },
    ],
  },
  testimonials: {
    title: 'Transparency Center 引用',
    prevAria: '上一項',
    nextAria: '下一項',
    items: [
      {
        quote:
          '這些標準以使用者回饋以及技術、公共安全和人權等領域專家的建議為基礎 — 以確保每個人的聲音都受到重視。',
        author: 'Meta Transparency Center',
        role: '簡介',
      },
      {
        quote:
          '我們的 Community Standards 適用於全球所有人以及所有類型的內容，包括 AI 生成的內容。',
        author: 'Meta Transparency Center',
        role: '適用範圍',
      },
      {
        quote:
          'Community Standards 的美式英語版本反映了最新的一套政策，應作為主要文件使用。',
        author: 'Meta Transparency Center',
        role: '官方文件',
      },
    ],
  },
  finalCta: {
    title: '提交申訴',
    subtitle:
      '如果在閱讀 Community Standards 後，你認為你的粉絲專頁符合政策，請提交包含管理員資訊和身份驗證的表單。',
    cta: '提交申訴',
  },
  faq: {
    title: '常見問題',
    items: [
      {
        question: 'Community Standards 涵蓋哪些內容？',
        answer:
          'Community Standards 說明了在 Facebook、Instagram、Messenger 和 Threads 上允許和禁止的內容。完整文件發布在 Meta Transparency Center。',
      },
      {
        question: '哪個版本是官方參考？',
        answer:
          '根據 Transparency Center，美式英語版本反映了最新的一套政策，應作為主要文件使用。',
      },
      {
        question: 'Meta 在限制內容時遵循哪些價值觀？',
        answer:
          '當 Meta 限制表達時，是為了服務於真實性、安全、隱私或尊嚴 — Community Standards 中闡述的四個基本價值觀。',
      },
      {
        question: '如果我不確定是否違反政策，為什麼我的粉絲專頁會被標記？',
        answer:
          'Meta 的系統可能在最終結論之前偵測到可能違規的內容。通知反映的是初步評估階段；申訴可讓審查團隊重新評估你粉絲專頁的具體背景。',
      },
      {
        question: '誰可以提交申訴？',
        answer:
          '粉絲專頁管理員或擁有該粉絲專頁的組織的授權代表。提交表單時必須驗證關聯的 Facebook 帳號。',
      },
      {
        question: '審查需要多長時間，可能有哪些結果？',
        answer:
          '通常為 3–7 個工作天，如需補充資訊可能更長。結果可能包括申訴被接受、維持原決定或要求提供更多資訊 — 均透過 Facebook 通知。',
      },
      {
        question: '我的資訊如何使用？',
        answer:
          '僅用於處理你的申訴和驗證管理權限，依據 Meta 的隱私政策和條款。',
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
        title: '支援',
        links: [
          { label: '說明中心' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
