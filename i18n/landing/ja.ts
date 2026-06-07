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
    ctaAria: '異議申し立てを送信 — ページに関する決定の再審査をリクエスト',
  },
  hero: {
    title: 'ページが Community Standards に違反している可能性があります',
    lead:
      '最近の審査の結果、Facebook ページが Community Standards に違反している可能性があると特定されました。この結果が誤りだと思われる場合は、異議申し立てを送信して再審査をリクエストできます。',
    eligibility:
      'この通知は Facebook のパブリッシャーコンテンツ原則に基づいて発行され、管理しているページにのみ適用されます。',
    creatorPrefix: '詳細は',
    creatorLink: 'Meta Community Standards',
    cta: '異議申し立てを送信',
    badgeAlt: 'Facebook ロゴ',
  },
  benefits: {
    title: 'この通知について',
    subtitle:
      'Meta はページコンテンツを Community Standards とコンテンツ配信原則に照らして審査し、コミュニティへの潜在的な危害を軽減します。',
    learnMore: '詳細を見る',
    items: [
      {
        title: '潜在的な違反シグナル',
        description:
          'Meta のシステムは、最終判断の前にコンテンツを潜在的な違反として特定する場合があります。この通知は最終判断ではなく、初期評価段階を反映しています。',
      },
      {
        title: '境界線上のコンテンツ',
        description:
          'Community Standards に文字通り違反しないコンテンツでも、論争を招いたり体験の質を低下させたりする場合があります。Meta はコミュニティ保護のため配信を制限することがあります。',
      },
      {
        title: 'コンテンツ配信原則',
        description:
          'Facebook は真正な情報源とポリシー準拠のコンテンツを優先します。配信の判断は常に現行の Community Standards に照らして評価されます。',
      },
      {
        title: '自動および専門家による審査',
        description:
          'このプロセスは、ページ固有の文脈に基づき、自動検出とポリシー審査チームによる評価を組み合わせています。',
      },
      {
        title: '必要に応じた本人確認',
        description:
          '異常に高い配信量のコンテンツについては、Meta が続行前に本人確認を求める場合があります。異議申し立て手続きにこのステップが含まれることがあります。',
      },
      {
        title: '異議申し立ての権利',
        description:
          'ページ管理者または正式な代表者は、初期結果が誤りだと考える場合、再審査をリクエストできます。',
      },
    ],
  },
  steps: {
    title: '異議申し立ての手順',
    subtitle:
      '3 つのステップを順番に完了してください。所要時間の目安：約 5〜10 分。',
    items: [
      {
        title: 'フラグ付きコンテンツを確認する。',
        description:
          '警告とページ上の関連投稿またはアクティビティを照合してください。適用されたポリシーを確認する必要がある場合は Community Standards をご確認ください。',
      },
      {
        title: 'フォームを記入し本人確認を行う。',
        description:
          '管理者情報と連絡先、説明メモ（該当する場合）を入力してください。送信前にリンクされた Facebook アカウントを確認してください。',
      },
      {
        title: 'Facebook でステータスを確認する。',
        description:
          '送信後、Facebook 通知で確認と更新を受け取ります。サポートが必要な場合はリクエスト参照番号が役立ちます。',
      },
    ],
  },
  testimonials: {
    title: 'Help Center からの推奨事項',
    prevAria: '前の項目',
    nextAria: '次の項目',
    items: [
      {
        quote:
          '異議申し立ての前に、Community Standards とパブリッシャー原則を確認し、Meta がページに適用するポリシーを理解してください。',
        author: 'Meta Business Help Center',
        role: 'コンテンツポリシー',
      },
      {
        quote:
          '異議申し立てフォームでは、フラグ付きコンテンツの文脈とページが準拠していると考える理由を簡潔に記載してください — 具体的な情報は審査担当者がより正確に判断するのに役立ちます。',
        author: 'Meta Business Help Center',
        role: '送信ガイダンス',
      },
      {
        quote:
          '同じ問題について重複リクエストを送信しないでください。各リクエストは受信順に処理され、フラグごとに 1 回処理されます。',
        author: 'Meta Business Help Center',
        role: '処理ポリシー',
      },
    ],
  },
  finalCta: {
    title: '異議申し立ての準備はできましたか？',
    subtitle:
      'Appeal details フォームには管理者情報と本人確認が必要です。開始前に Facebook にサインインしてください。',
    cta: '異議申し立てを送信',
  },
  faq: {
    title: 'よくある質問',
    items: [
      {
        question: 'Meta Community Standards とは？',
        answer:
          'Facebook で許可されるコンテンツと行動に関するルールで、安全、真正性、プライバシーなどをカバーします。Meta はこれらを更新し、ポリシーページで公開しています。',
      },
      {
        question: 'ポリシー違反か確信がないのに、なぜページがフラグ付けされたのですか？',
        answer:
          'Meta のシステムは、最終結論の前に潜在的な違反コンテンツを検出する場合があります。通知は初期評価段階を反映しており、異議申し立てにより審査チームがページ固有の文脈を再評価できます。',
      },
      {
        question: '「境界線上のコンテンツ」とは？',
        answer:
          'Community Standards に文字通り違反しないが、論争を招いたり扇情的だったり体験の質を低下させたりするコンテンツです。Meta はコミュニティ保護のため、そのようなコンテンツの配信を制限することがあります。',
      },
      {
        question: '誰が異議申し立てを送信できますか？',
        answer:
          'ページ管理者またはページを所有する組織の正式な代表者。フォーム送信時にリンクされた Facebook アカウントの確認が必要です。',
      },
      {
        question: '何を準備すべきですか？',
        answer:
          '管理者の氏名、連絡先メール、ビジネスメール（該当する場合）、ページ名、電話番号、フラグ付きコンテンツの簡単な説明。不一致または確認できない情報は処理を妨げる場合があります。',
      },
      {
        question: '審査にはどのくらいかかり、どのような結果がありますか？',
        answer:
          '通常 3〜7 営業日、追加情報が必要な場合はそれ以上かかることがあります。結果には異議申し立ての受理、決定の維持、追加情報の要求などがあり、すべて Facebook 経由で通知されます。',
      },
      {
        question: '私の情報はどのように使用されますか？',
        answer:
          'Meta のプライバシーポリシーと利用規約に基づき、異議申し立ての処理と管理権限の確認にのみ使用されます。Meta は個人データを販売しません。',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Meta テクノロジー',
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
