import type { LandingStrings } from './types'

export const jaLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: '透明性センター',
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
    loginCta: 'Facebookでログイン',
    loginAria: 'Facebookでログインしてページを管理',
    cta: '異議申し立てを送信',
    ctaAria: '異議申し立てを送信 — ページに関する決定の再審査を依頼',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Home', href: '#' },
      { label: 'Policies', href: '#' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Community Standardsのトピック',
    sidebarSection: 'ポリシー',
    sidebarLinks: [
      { label: '危害の調整と犯罪の助長' },
      { label: '危険な組織と個人' },
      { label: '詐欺、スキャム、欺瞞的行為' },
      { label: '制限された商品とサービス' },
      { label: '児童の性的搾取、虐待、ヌード' },
      { label: '暴力的およびグラフィックなコンテンツ' },
    ],
  },
  hero: {
    title: 'ページがCommunity Standardsに違反した可能性があります',
    lead:
      'Community Standardsは、Facebook、Instagram、Messenger、Threadsで許可される内容と禁止される内容を定めています。最近の審査の結果、お客様のページがこれらの基準に準拠していない可能性があると特定されました。この結果が誤りであると思われる場合は、異議申し立てを送信して再審査を依頼できます。',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      'これらの基準は、ユーザーのフィードバックと、テクノロジー、公共安全、人権の専門家からの助言に基づいています。この通知は、お客様が管理するページにのみ適用されます。',
    creatorPrefix: '公式ドキュメントはこちら',
    creatorLink: 'Community Standards | Transparency Center',
    cta: '異議申し立てを送信',
    badgeAlt: 'Metaロゴ',
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
    title: '異議申し立ての手順',
    subtitle:
      '送信前に、フラグ付けされたコンテンツをTransparency CenterのCommunity Standardsと照合してください。フォーム記入の目安時間：約5〜10分。',
    items: [
      {
        title: '該当するポリシーを確認する。',
        description:
          'Transparency Centerの関連ポリシーセクションを読んでください。各セクションにはPolicy Rationaleと具体的なルールが含まれます。ページ上のフラグ付けされた投稿やアクティビティと照合してください。',
      },
      {
        title: 'フォームを記入し、本人確認を行う。',
        description:
          '管理者情報、連絡先、必要に応じて状況の説明を提供してください。送信前にリンクされたFacebookアカウントを確認してください。',
      },
      {
        title: 'Facebookで結果を確認する。',
        description:
          '送信後、Facebookの通知で確認が届きます。審査には通常3〜7営業日かかります。サポートが必要な場合は、リクエスト参照番号が役立ちます。',
      },
    ],
  },
  testimonials: {
    title: 'Transparency Centerからの引用',
    prevAria: '前の項目',
    nextAria: '次の項目',
    items: [
      {
        quote:
          'これらの基準は、テクノロジー、公共安全、人権などの分野の専門家からの助言と、人々からのフィードバックに基づいています。すべての声が尊重されるようにするためです。',
        author: 'Meta Transparency Center',
        role: 'はじめに',
      },
      {
        quote:
          'Community Standardsは世界中のすべての人に適用され、AI生成コンテンツを含むすべての種類のコンテンツに適用されます。',
        author: 'Meta Transparency Center',
        role: '適用範囲',
      },
      {
        quote:
          'Community Standardsの米国英語版が最新のポリシーセットを反映しており、主要なドキュメントとして使用する必要があります。',
        author: 'Meta Transparency Center',
        role: '公式ドキュメント',
      },
    ],
  },
  finalCta: {
    title: '異議申し立てを送信',
    subtitle:
      'Community Standardsを読んだ後、ページがポリシーに準拠していると考える場合は、管理者情報と本人確認を含むフォームを送信してください。',
    cta: '異議申し立てを送信',
  },
  faq: {
    title: 'よくある質問',
    items: [
      {
        question: 'Community Standardsは何をカバーしていますか？',
        answer:
          'Community Standardsは、Facebook、Instagram、Messenger、Threadsで許可される内容と禁止される内容を定めています。全文はMeta Transparency Centerで公開されています。',
      },
      {
        question: '公式の参照バージョンはどれですか？',
        answer:
          'Transparency Centerによると、米国英語版が最新のポリシーセットを反映しており、主要なドキュメントとして使用する必要があります。',
      },
      {
        question: 'Metaはコンテンツを制限する際、どのような価値観に基づいていますか？',
        answer:
          'Metaが表現を制限する場合、それはCommunity Standardsに記載された4つの基本価値である真正性、安全、プライバシー、尊厳のために行われます。',
      },
      {
        question: 'ポリシー違反かどうか不明なのに、なぜページがフラグ付けされたのですか？',
        answer:
          'Metaのシステムは、最終的な結論の前に、違反の可能性があるコンテンツを検出することがあります。通知は初期評価段階を反映しています。異議申し立てにより、審査チームがページの具体的な文脈を再評価できます。',
      },
      {
        question: '誰が異議申し立てを送信できますか？',
        answer:
          'ページ管理者、またはページを所有する組織の正式な代表者。フォーム送信時にリンクされたFacebookアカウントの確認が必要です。',
      },
      {
        question: '審査にはどのくらいかかり、どのような結果がありますか？',
        answer:
          '通常3〜7営業日、追加情報が必要な場合はそれ以上かかることがあります。結果には異議申し立ての受理、決定の維持、追加情報の要求などがあり、すべてFacebook経由で通知されます。',
      },
      {
        question: '私の情報はどのように使用されますか？',
        answer:
          'Metaのプライバシーポリシーと利用規約に従い、異議申し立ての処理と管理権限の確認のためにのみ使用されます。',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Metaのテクノロジー',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'ポリシー',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: 'サポート',
        links: [
          { label: 'ヘルプセンター' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
