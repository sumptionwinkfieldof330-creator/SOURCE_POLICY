import type { LandingStrings } from './types'

export const heLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'מרכז השקיפות',
    nav: [
      { label: 'מדיניות' },
      { label: 'אכיפה' },
      { label: 'דיווח' },
      { label: 'תמיכה' },
    ],
    loginCta: 'התחברות עם Facebook',
    loginAria: 'התחברות עם Facebook לניהול הדף שלך',
    cta: 'הגשת ערעור',
    ctaAria: 'הגשת ערעור — בקשה לבדיקה מחדש של ההחלטה לגבי הדף שלך',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'מרכז השקיפות' },
      { label: 'מדיניות' },
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
    eligibility:
      'תקנים אלה מבוססים על משוב מאנשים ועל ייעוץ מומחים בתחומי טכנולוגיה, ביטחון ציבורי וזכויות אדם. הודעה זו חלה רק על דף שאתה מנהל.',
    creatorPrefix: 'ראה את המסמך הרשמי ב',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'הגשת ערעור',
    badgeAlt: 'לוגו Meta',
  },
  benefits: {
    title: 'מחויבות והיקף Community Standards',
    subtitle:
      'Meta מכירה בחשיבות ש-Facebook, Instagram, Messenger ו-Threads יהיו מקומות שבהם אנשים מרגישים מועצמים לתקשר, ואנו לוקחים ברצינות את תפקידנו בשמירה על שירותים אלה ללא ניצול לרעה.',
    learnMore: 'מידע נוסף',
    items: [
      {
        title: 'היקף החלה',
        description:
          'Community Standards שלנו חלים על כולם, בכל העולם, ועל כל סוגי התוכן, כולל תוכן שנוצר על ידי AI. כל סעיף מדיניות מתחיל ב-«Policy Rationale» ולאחריו כללים ספציפיים לגבי תוכן אסור או תוכן הדורש הקשר נוסף לאכיפה.',
      },
      {
        title: 'אותנטיות',
        description:
          'אנו רוצים לוודא שהתוכן שאנשים רואים הוא אותנטי. אנו מאמינים שאותנטיות יוצרת סביבה טובה יותר לשיתוף, ולכן איננו רוצים שאנשים ישתמשו בשירותינו כדי להציג את עצמם או את פעולותיהם באופן מטעה.',
      },
      {
        title: 'בטיחות',
        description:
          'אנו מחויבים להפוך את Facebook, Instagram, Messenger ו-Threads למקומות בטוחים. אנו מסירים תוכן שעלול לתרום לסיכון לפגיעה בביטחון הגופני של אנשים. תוכן שמאיים על אנשים אינו מותר בשירותינו.',
      },
      {
        title: 'פרטיות',
        description:
          'אנו מחויבים להגן על הפרטיות והמידע האישי. פרטיות מעניקה לאנשים חופש להיות עצמם, לבחור כיצד ומתי לשתף בשירותינו ולהתחבר בקלות רבה יותר.',
      },
      {
        title: 'כבוד',
        description:
          'אנו מאמינים שכל האנשים שווים בכבוד ובזכויות. אנו מצפים שאנשים יכבדו את כבודם של אחרים ולא יטרידו או ישפילו אחרים.',
      },
      {
        title: 'מחויבות לקול',
        description:
          'מטרת Community Standards שלנו היא ליצור מרחב לביטוי ולתת לאנשים קול. כאשר אנו מגבילים ביטוי, אנו עושים זאת לשירות האותנטיות, הבטיחות, הפרטיות או הכבוד. ניתן להגיש ערעור אם אתה מאמין שהדף שלך עומד במדיניות.',
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
