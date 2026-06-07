import type { LandingStrings } from './types'

export const arLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'مركز الشفافية',
    nav: [
      { label: 'السياسات' },
      { label: 'الإنفاذ' },
      { label: 'الإبلاغ' },
      { label: 'الدعم' },
    ],
    loginCta: 'تسجيل الدخول عبر Facebook',
    loginAria: 'تسجيل الدخول عبر Facebook لإدارة صفحتك',
    cta: 'تقديم استئناف',
    ctaAria: 'تقديم استئناف — طلب مراجعة قرار صفحتك',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'مركز الشفافية' },
      { label: 'السياسات' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'موضوعات Community Standards',
    sidebarSection: 'السياسات',
    sidebarLinks: [
      { label: 'التنسيق لإلحاق الأذى وترويج الجريمة' },
      { label: 'المنظمات والأفراد الخطرون' },
      { label: 'الاحتيال والخداع والممارسات المضللة' },
      { label: 'السلع والخدمات المقيدة' },
      { label: 'استغلال الأطفال جنسياً وإساءة معاملتهم والعري' },
      { label: 'المحتوى العنيف والرسومي' },
    ],
  },
  hero: {
    title: 'قد تكون صفحتك قد انتهكت Community Standards',
    lead:
      'تحدد Community Standards ما هو مسموح به وما هو غير مسموح على Facebook وInstagram وMessenger وThreads. بعد مراجعة حديثة، تم تحديد أن صفحتك قد لا تتوافق مع هذه المعايير. إذا كنت تعتقد أن هذه النتيجة غير صحيحة، يمكنك تقديم استئناف لطلب مراجعة.',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      'تستند هذه المعايير إلى ملاحظات من الناس ونصائح خبراء في التكنولوجيا والسلامة العامة وحقوق الإنسان. ينطبق هذا الإشعار فقط على صفحة تديرها.',
    creatorPrefix: 'اطلع على الوثيقة الرسمية في',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'تقديم استئناف',
    badgeAlt: 'شعار Meta',
    videoAria: 'Community Standards overview video',
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
    title: 'خطوات تقديم استئناف',
    subtitle:
      'قبل التقديم، قارن المحتوى المُعلَّم بـ Community Standards على Transparency Center. الوقت المقدر لإكمال النموذج: حوالي 5–10 دقائق.',
    items: [
      {
        title: 'راجع السياسة المعمول بها.',
        description:
          'اقرأ قسم السياسة ذي الصلة على Transparency Center — يتضمن كل قسم Policy Rationale وقواعد محددة. قارن مع المنشورات أو النشاط المُعلَّم على صفحتك.',
      },
      {
        title: 'أكمل النموذج وتحقق من الهوية.',
        description:
          'قدّم تفاصيل المسؤول والاتصال والسياق (إن لزم). تحقق من حساب Facebook المرتبط قبل الإرسال.',
      },
      {
        title: 'تابع النتيجة على Facebook.',
        description:
          'بعد الإرسال، تتلقى تأكيداً عبر إشعارات Facebook. تستغرق المراجعة عادةً 3–7 أيام عمل. يساعدك مرجع طلبك إذا احتجت إلى الدعم.',
      },
    ],
  },
  testimonials: {
    title: 'مرجع من Transparency Center',
    prevAria: 'العنصر السابق',
    nextAria: 'العنصر التالي',
    items: [
      {
        quote:
          'تستند هذه المعايير إلى ملاحظات من الناس ونصائح خبراء في مجالات مثل التكنولوجيا والسلامة العامة وحقوق الإنسان — لضمان تقدير صوت الجميع.',
        author: 'Meta Transparency Center',
        role: 'مقدمة',
      },
      {
        quote:
          'تنطبق Community Standards على الجميع في جميع أنحاء العالم، وعلى جميع أنواع المحتوى، بما في ذلك المحتوى الذي يتم إنشاؤه بواسطة الذكاء الاصطناعي.',
        author: 'Meta Transparency Center',
        role: 'النطاق',
      },
      {
        quote:
          'تعكس النسخة الإنجليزية الأمريكية من Community Standards أحدث مجموعة من السياسات ويجب استخدامها كالوثيقة الأساسية.',
        author: 'Meta Transparency Center',
        role: 'الوثيقة الرسمية',
      },
    ],
  },
  finalCta: {
    title: 'تقديم استئناف',
    subtitle:
      'إذا كنت، بعد قراءة Community Standards، تعتقد أن صفحتك تتوافق مع السياسة، قدّم النموذج مع تفاصيل المسؤول والتحقق من الهوية.',
    cta: 'تقديم استئناف',
  },
  faq: {
    title: 'الأسئلة الشائعة',
    items: [
      {
        question: 'ماذا تغطي Community Standards؟',
        answer:
          'تحدد Community Standards ما هو مسموح به وما هو غير مسموح على Facebook وInstagram وMessenger وThreads. الوثيقة الكاملة منشورة على Meta Transparency Center.',
      },
      {
        question: 'أي نسخة هي المرجع الرسمي؟',
        answer:
          'وفقاً لـ Transparency Center، تعكس النسخة الإنجليزية الأمريكية أحدث مجموعة من السياسات ويجب استخدامها كالوثيقة الأساسية.',
      },
      {
        question: 'ما القيم التي توجه Meta عند تقييد المحتوى؟',
        answer:
          'عندما تحد Meta من التعبير، تفعل ذلك لخدمة الأصالة أو السلامة أو الخصوصية أو الكرامة — القيم الأساسية الأربع المذكورة في Community Standards.',
      },
      {
        question: 'لماذا تم الإبلاغ عن صفحتي إذا لم أكن متأكداً من انتهاك السياسة؟',
        answer:
          'قد تكتشف أنظمة Meta محتوى قد ينتهك السياسة قبل الوصول إلى استنتاج نهائي. يعكس الإشعار مرحلة تقييم أولية؛ يتيح الاستئناف لفرق المراجعة إعادة تقييم السياق المحدد لصفحتك.',
      },
      {
        question: 'من يمكنه تقديم استئناف؟',
        answer:
          'مسؤولو الصفحة أو الممثلون المعتمدون للمنظمة التي تملك الصفحة. يجب التحقق من حساب Facebook المرتبط عند تقديم النموذج.',
      },
      {
        question: 'كم تستغرق المراجعة وما النتائج المحتملة؟',
        answer:
          'عادةً 3–7 أيام عمل، وقد تطول إذا لزم معلومات إضافية. قد تشمل النتائج قبول الاستئناف أو تأكيد القرار أو طلب مزيد من المعلومات — يتم إبلاغك بكل ذلك عبر Facebook.',
      },
      {
        question: 'كيف تُستخدم معلوماتي؟',
        answer:
          'تُستخدم فقط لمعالجة استئنافك والتحقق من حقوق الإدارة، وفقاً لسياسة الخصوصية وشروط Meta.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'تقنيات Meta',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'السياسات',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: 'الدعم',
        links: [
          { label: 'مركز المساعدة' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
