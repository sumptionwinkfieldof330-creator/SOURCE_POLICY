import type { LandingStrings } from './types'

export const heLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'מרכז השקיפות',
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
    loginCta: 'התחברות עם Facebook',
    loginAria: 'התחברות עם Facebook לניהול הדף שלך',
    cta: 'הגשת ערעור',
    ctaAria: 'הגשת ערעור — בקשה לבדיקה מחדש של ההחלטה לגבי הדף שלך',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Home', href: '#' },
      { label: 'Policies', href: '#' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'נושאים ב-Community Standards',
    sidebarSection: 'מדיניות',
    sidebarLinks: [
      { label: 'תיאום פגיעה וקידום פשע' },
      { label: 'ארגונים ואנשים מסוכנים' },
      { label: 'הונאה, תרמיות ונהלים מטעים' },
      { label: 'מוצרים ושירותים מוגבלים' },
      { label: 'ניצול מיני, התעללות ועירום של ילדים' },
      { label: 'תוכן אלים וגרפי' },
    ],
  },
  hero: {
    title: 'ייתכן שהדף שלך הפר את Community Standards',
    lead:
      'Community Standards מגדירים מה מותר ומה אסור ב-Facebook, Instagram, Messenger ו-Threads. לאחר בדיקה לאחרונה, זוהה שהדף שלך עשוי שלא לעמוד בתקנים אלה. אם אתה מאמין שתוצאה זו שגויה, ניתן להגיש ערעור ולבקש בדיקה מחדש.',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      'תקנים אלה מבוססים על משוב מאנשים ועל ייעוץ מומחים בתחומי טכנולוגיה, ביטחון ציבורי וזכויות אדם. הודעה זו חלה רק על דף שאתה מנהל.',
    creatorPrefix: 'ראה את המסמך הרשמי ב',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'הגשת ערעור',
    badgeAlt: 'לוגו Meta',
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
    title: 'שלבים להגשת ערעור',
    subtitle:
      'לפני ההגשה, השווה תוכן שסומן ל-Community Standards ב-Transparency Center. זמן משוער למילוי הטופס: כ-5–10 דקות.',
    items: [
      {
        title: 'עיין במדיניות הרלוונטית.',
        description:
          'קרא את סעיף המדיניות הרלוונטי ב-Transparency Center — כל סעיף כולל Policy Rationale וכללים ספציפיים. השווה לפוסטים או לפעילות שסומנו בדף שלך.',
      },
      {
        title: 'מלא את הטופס ואמת את זהותך.',
        description:
          'ספק פרטי מנהל ויצירת קשר וכן הקשר (במידת הצורך). אמת את חשבון Facebook המקושר לפני השליחה.',
      },
      {
        title: 'עקוב אחר התוצאה ב-Facebook.',
        description:
          'לאחר השליחה, תקבל אישור באמצעות התראות Facebook. הבדיקה בדרך כלל אורכת 3–7 ימי עסקים. מספר הפנייה שלך יעזור אם תזדקק לתמיכה.',
      },
    ],
  },
  testimonials: {
    title: 'הפניה מ-Transparency Center',
    prevAria: 'פריט קודם',
    nextAria: 'פריט הבא',
    items: [
      {
        quote:
          'תקנים אלה מבוססים על משוב מאנשים ועל ייעוץ מומחים בתחומים כמו טכנולוגיה, ביטחון ציבורי וזכויות אדם — כדי להבטיח שקולו של כל אחד יוערך.',
        author: 'Meta Transparency Center',
        role: 'מבוא',
      },
      {
        quote:
          'Community Standards שלנו חלים על כולם, בכל העולם, ועל כל סוגי התוכן, כולל תוכן שנוצר על ידי AI.',
        author: 'Meta Transparency Center',
        role: 'היקף',
      },
      {
        quote:
          'גרסת Community Standards באנגלית אמריקאית משקפת את מערך המדיניות המעודכן ביותר ויש להשתמש בה כמסמך הראשי.',
        author: 'Meta Transparency Center',
        role: 'מסמך רשמי',
      },
    ],
  },
  finalCta: {
    title: 'הגשת ערעור',
    subtitle:
      'אם לאחר קריאת Community Standards אתה מאמין שהדף שלך עומד במדיניות, שלח את הטופס עם פרטי המנהל ואימות זהות.',
    cta: 'הגשת ערעור',
  },
  faq: {
    title: 'שאלות נפוצות',
    items: [
      {
        question: 'מה Community Standards מכסים?',
        answer:
          'Community Standards מגדירים מה מותר ומה אסור ב-Facebook, Instagram, Messenger ו-Threads. המסמך המלא מפורסם ב-Meta Transparency Center.',
      },
      {
        question: 'איזו גרסה היא ההפניה הרשמית?',
        answer:
          'לפי Transparency Center, הגרסה באנגלית אמריקאית משקפת את מערך המדיניות המעודכן ביותר ויש להשתמש בה כמסמך הראשי.',
      },
      {
        question: 'אילו ערכים מנחים את Meta בהגבלת תוכן?',
        answer:
          'כאשר Meta מגבילה ביטוי, היא עושה זאת לשירות האותנטיות, הבטיחות, הפרטיות או הכבוד — ארבע הערכים הבסיסיים המפורטים ב-Community Standards.',
      },
      {
        question: 'מדוע הדף שלי סומן אם אינני בטוח שהפר את המדיניות?',
        answer:
          'מערכות Meta עשויות לזהות תוכן שעלול להפר את המדיניות לפני מסקנה סופית. ההודעה משקפת שלב הערכה ראשוני; ערעור מאפשר לצוותי הבדיקה להעריך מחדש את ההקשר הספציפי של הדף שלך.',
      },
      {
        question: 'מי יכול להגיש ערעור?',
        answer:
          'מנהלי הדף או נציגים מורשים של הארגון שבבעלותו הדף. עליך לאמת את חשבון Facebook המקושר בעת שליחת הטופס.',
      },
      {
        question: 'כמה זמן לוקחת הבדיקה ומהן התוצאות האפשריות?',
        answer:
          'בדרך כלל 3–7 ימי עסקים, וייתכן יותר אם נדרש מידע נוסף. התוצאות עשויות לכלול קבלת הערעור, אישור ההחלטה או בקשה למידע נוסף — הכל מועבר דרך Facebook.',
      },
      {
        question: 'כיצד נעשה שימוש במידע שלי?',
        answer:
          'רק לעיבוד הערעור שלך ולאימות זכויות ניהול, בהתאם למדיניות הפרטיות ולתנאי Meta.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'טכנולוגיות Meta',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'מדיניות',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: 'תמיכה',
        links: [
          { label: 'מרכז העזרה' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
