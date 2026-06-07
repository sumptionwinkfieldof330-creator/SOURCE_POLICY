import type { LandingStrings } from './types'

export const ruLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Центр прозрачности',
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
    loginCta: 'Войти через Facebook',
    loginAria: 'Войти через Facebook для управления Страницей',
    cta: 'Подать апелляцию',
    ctaAria: 'Подать апелляцию — запросить пересмотр решения о вашей Странице',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Home', href: '#' },
      { label: 'Policies', href: '#' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Темы Community Standards',
    sidebarSection: 'Правила',
    sidebarLinks: [
      { label: 'Координация вреда и пропаганда преступлений' },
      { label: 'Опасные организации и лица' },
      { label: 'Мошенничество, скамы и обманные практики' },
      { label: 'Ограниченные товары и услуги' },
      { label: 'Сексуальная эксплуатация, насилие и нагота детей' },
      { label: 'Жестокий и графический контент' },
    ],
  },
  hero: {
    title: 'Ваша Страница могла нарушить Community Standards',
    lead:
      'Community Standards определяют, что разрешено и что запрещено в Facebook, Instagram, Messenger и Threads. После недавней проверки ваша Страница была идентифицирована как потенциально не соответствующая этим стандартам. Если вы считаете этот результат ошибочным, вы можете подать апелляцию и запросить пересмотр.',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      'Эти стандарты основаны на отзывах пользователей и рекомендациях экспертов в области технологий, общественной безопасности и прав человека. Это уведомление применяется только к Странице, которой вы управляете.',
    creatorPrefix: 'Официальный документ на',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Подать апелляцию',
    badgeAlt: 'Логотип Meta',
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
    title: 'Шаги для подачи апелляции',
    subtitle:
      'Перед подачей сравните помеченный контент с Community Standards в Transparency Center. Примерное время заполнения формы: около 5–10 минут.',
    items: [
      {
        title: 'Изучите применимое правило.',
        description:
          'Прочитайте соответствующий раздел правил в Transparency Center — каждый включает Policy Rationale и конкретные правила. Сравните с помеченными публикациями или активностью на вашей Странице.',
      },
      {
        title: 'Заполните форму и подтвердите личность.',
        description:
          'Укажите данные администратора и контактную информацию, а также контекст (при необходимости). Подтвердите связанный аккаунт Facebook перед отправкой.',
      },
      {
        title: 'Отслеживайте результат в Facebook.',
        description:
          'После отправки вы получите подтверждение через уведомления Facebook. Рассмотрение обычно занимает 3–7 рабочих дней. Номер вашего запроса поможет при обращении в поддержку.',
      },
    ],
  },
  testimonials: {
    title: 'Ссылка из Transparency Center',
    prevAria: 'Предыдущий элемент',
    nextAria: 'Следующий элемент',
    items: [
      {
        quote:
          'Эти стандарты основаны на отзывах пользователей и рекомендациях экспертов в таких областях, как технологии, общественная безопасность и права человека — чтобы голос каждого был услышан.',
        author: 'Meta Transparency Center',
        role: 'Введение',
      },
      {
        quote:
          'Наши Community Standards применяются ко всем людям по всему миру и ко всем типам контента, включая контент, созданный ИИ.',
        author: 'Meta Transparency Center',
        role: 'Область применения',
      },
      {
        quote:
          'Американская англоязычная версия Community Standards отражает наиболее актуальный набор правил и должна использоваться как основной документ.',
        author: 'Meta Transparency Center',
        role: 'Официальный документ',
      },
    ],
  },
  finalCta: {
    title: 'Подать апелляцию',
    subtitle:
      'Если после прочтения Community Standards вы считаете, что ваша Страница соответствует правилам, отправьте форму с данными администратора и подтверждением личности.',
    cta: 'Подать апелляцию',
  },
  faq: {
    title: 'Часто задаваемые вопросы',
    items: [
      {
        question: 'Что охватывают Community Standards?',
        answer:
          'Community Standards определяют, что разрешено и что запрещено в Facebook, Instagram, Messenger и Threads. Полный документ опубликован в Meta Transparency Center.',
      },
      {
        question: 'Какая версия является официальной?',
        answer:
          'Согласно Transparency Center, американская англоязычная версия отражает наиболее актуальный набор правил и должна использоваться как основной документ.',
      },
      {
        question: 'Какие ценности направляют Meta при ограничении контента?',
        answer:
          'Когда Meta ограничивает выражение, это делается на службе подлинности, безопасности, конфиденциальности или достоинства — четырёх основных ценностей, указанных в Community Standards.',
      },
      {
        question: 'Почему моя Страница была помечена, если я не уверен в нарушении правил?',
        answer:
          'Системы Meta могут обнаруживать потенциально нарушающий контент до окончательного вывода. Уведомление отражает этап первоначальной оценки; апелляция позволяет командам пересмотра заново оценить конкретный контекст вашей Страницы.',
      },
      {
        question: 'Кто может подать апелляцию?',
        answer:
          'Администраторы Страницы или уполномоченные представители организации, которой принадлежит Страница. При отправке формы необходимо подтвердить связанный аккаунт Facebook.',
      },
      {
        question: 'Сколько длится рассмотрение и какие возможны результаты?',
        answer:
          'Обычно 3–7 рабочих дней, возможно дольше, если потребуется дополнительная информация. Результаты могут включать принятие апелляции, подтверждение решения или запрос дополнительной информации — всё сообщается через Facebook.',
      },
      {
        question: 'Как используется моя информация?',
        answer:
          'Только для обработки апелляции и проверки административных прав в соответствии с Политикой конфиденциальности и Условиями Meta.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Технологии Meta',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'Правила',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: 'Поддержка',
        links: [
          { label: 'Справочный центр' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
