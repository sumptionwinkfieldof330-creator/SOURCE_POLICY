import type { LandingStrings } from './types'

export const jaLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: 'ガイド' },
      { label: 'ポリシー' },
      { label: 'ヘルプ' },
      { label: 'サポート' },
    ],
    cta: '異議申し立てを送信',
    ctaAria: '異議申し立てを送信 — ページの判定について再審査をリクエスト',
  },
  hero: {
    title: 'ページがCommunity Standardsに違反した可能性があります',
    lead:
      '最近の審査の結果、FacebookページがCommunity Standardsに違反している可能性があると判断されました。判定結果が誤りであると考える場合は、異議申し立てを送信して再審査をリクエストできます。',
    eligibility:
      'この判定はMetaの標準的な審査プロセスに基づいています。各異議申し立ては、現在のポリシーに従って審査されます。',
    creatorPrefix: '詳細は',
    creatorLink: 'Meta Community Standards',
    cta: '異議申し立てを送信',
    badgeAlt: 'Meta通知アイコン',
    videoAria: '異議申し立て手続きの動画ガイド',
  },
  benefits: {
    title: '異議申し立て手続きについて',
    subtitle:
      'FacebookにおけるCommunity Standardsに関する異議申し立てがMetaでどのように処理されるかをご確認ください。',
    learnMore: '詳細を見る',
    items: [
      {
        title: '審査プロセス',
        description:
          '各異議申し立ては、Metaの現在のCommunity Standardsに基づき、個別に審査されます。',
      },
      {
        title: '異議申し立ての権利',
        description:
          '判定結果が誤りであると考える場合は、再審査のリクエストを送信できます。',
      },
      {
        title: '必要な情報',
        description:
          '審査を支援するため、ページおよびその管理者に関する正確な情報をご提供ください。',
      },
      {
        title: '処理時間',
        description:
          '審査時間は、各案件の複雑さによって異なる場合があります。',
      },
      {
        title: '結果の通知',
        description:
          '審査が完了すると、Facebookで通知を受け取ります。',
      },
      {
        title: 'ポリシー遵守',
        description:
          '審査プロセス全体を通じて、ページはMeta Community Standardsに準拠する必要があります。',
      },
    ],
  },
  steps: {
    title: '異議申し立ての送信方法',
    subtitle:
      '以下の手順を完了して異議申し立てを送信してください。ご提供いただいた情報は審査目的で使用されます。',
    items: [
      {
        title: '通知を確認する。',
        description:
          'ページにおけるCommunity Standards違反の可能性に関する通知をお読みください。判定結果が誤りであると考える場合は、異議申し立ての送信に進むことができます。',
      },
      {
        title: '異議申し立てフォームを記入する。',
        description:
          '「Appeal details」フォームに、管理者の氏名、連絡先メールアドレス、ビジネスメールアドレス、ページ名、電話番号、生年月日を入力してください。必須項目はすべて正確にご記入ください。',
      },
      {
        title: '審査結果を待つ。',
        description:
          'リクエストは審査され、結果については可能な限り早くお知らせします。',
      },
    ],
  },
  testimonials: {
    title: '異議申し立て送信時の注意事項',
    prevAria: '前の項目',
    nextAria: '次の項目',
    items: [
      {
        quote:
          '各異議申し立ては、Metaの現在のCommunity Standardsに基づき、個別に審査されます。',
        author: 'Meta Help Center',
        role: 'ポリシーと安全',
      },
      {
        quote:
          '異議申し立ての審査を支援するため、正確かつ完全な情報をご提供ください。',
        author: 'Meta Help Center',
        role: 'ユーザーガイダンス',
      },
      {
        quote:
          '異議申し立ての審査が完了すると、Facebookで通知を受け取ります。',
        author: 'Meta Help Center',
        role: 'システム通知',
      },
    ],
  },
  finalCta: {
    title: '異議申し立てを送信しますか？',
    subtitle:
      '判定結果が誤りであると考える場合は、再審査のリクエストを送信してください。',
    cta: '異議申し立てを送信',
  },
  faq: {
    title: 'よくある質問',
    items: [
      {
        question: 'Meta Community Standardsとは何ですか？',
        answer:
          'Community Standardsは、Facebookで許可されるコンテンツと行動を定義しています。Metaはこれらの基準を適用し、ユーザーにとって安全な環境の維持に努めています。',
      },
      {
        question: 'この判定に異議を申し立てるにはどうすればよいですか？',
        answer:
          'ページがCommunity Standardsに違反していると誤って判断されたと考える場合は、「Appeal details」フォームに記入してリクエストを送信してください。現在のポリシーに基づいて審査されます。',
      },
      {
        question: 'どのような情報を提供する必要がありますか？',
        answer:
          'フォームで求められる、ページ管理者の詳細、連絡先メールアドレス、ページ名、本人確認情報を提供する必要があります。',
      },
      {
        question: '審査にはどのくらい時間がかかりますか？',
        answer:
          '審査時間は案件によって異なる場合があります。審査が完了すると、Facebookで通知を受け取ります。',
      },
      {
        question: '異議申し立てを送信した後はどうなりますか？',
        answer:
          'リクエストはCommunity Standardsに基づいて審査されます。審査が完了すると、結果はFacebookを通じてお知らせします。',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Metaテクノロジー',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'WhatsApp' },
        ],
      },
      {
        title: 'ツール',
        links: [
          { label: 'Meta Business Suite' },
          { label: 'Ads Manager' },
        ],
      },
      {
        title: 'サポート',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
