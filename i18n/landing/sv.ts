import type { LandingStrings } from './types'

export const svLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: 'Guide' },
      { label: 'Policyer' },
      { label: 'Hjälp' },
      { label: 'Support' },
    ],
    cta: 'Skicka överklagande',
    ctaAria: 'Skicka ett överklagande — begär en granskning av beslutet om din sida',
  },
  hero: {
    title: 'Din sida kan ha brutit mot Community Standards',
    lead:
      'Efter en nyligen genomförd granskning har din Facebook-sida identifierats som potentiellt i strid med Community Standards. Om du anser att resultatet är felaktigt kan du skicka in ett överklagande och begära en ny granskning.',
    eligibility:
      'Detta beslut baseras på Metas standardgranskningsprocess. Varje överklagande granskas enligt gällande policy.',
    creatorPrefix: 'Läs mer om',
    creatorLink: 'Meta Community Standards',
    cta: 'Skicka överklagande',
    badgeAlt: 'Meta-aviseringssymbol',
    videoAria: 'Videoguide till överklagandeprocessen',
  },
  benefits: {
    title: 'Om överklagandeprocessen',
    subtitle:
      'Lär dig hur Meta hanterar överklagandebegäranden relaterade till Community Standards på Facebook.',
    learnMore: 'Läs mer',
    items: [
      {
        title: 'Granskningsprocess',
        description:
          'Varje överklagande granskas oberoende enligt Metas gällande Community Standards.',
      },
      {
        title: 'Rätt att överklaga',
        description:
          'Om du anser att beslutet är felaktigt kan du skicka in en begäran om omprövning.',
      },
      {
        title: 'Information som krävs',
        description:
          'Ange korrekta uppgifter om din sida och dess administratör för att underlätta granskningen.',
      },
      {
        title: 'Handläggningstid',
        description:
          'Granskningstider kan variera beroende på varje ärendes komplexitet.',
      },
      {
        title: 'Meddelande om resultat',
        description:
          'Du får ett meddelande på Facebook när granskningen är klar.',
      },
      {
        title: 'Policyefterlevnad',
        description:
          'Sidor måste följa Meta Community Standards under hela granskningsprocessen.',
      },
    ],
  },
  steps: {
    title: 'Så skickar du in ett överklagande',
    subtitle:
      'Slutför stegen nedan för att skicka in ditt överklagande. Din information används i granskningssyfte.',
    items: [
      {
        title: 'Granska meddelandet.',
        description:
          'Läs meddelandet om potentiella Community Standards-överträdelser på din sida. Om du anser att resultatet är felaktigt kan du fortsätta med att skicka in ett överklagande.',
      },
      {
        title: 'Fyll i överklagandeformuläret.',
        description:
          'I formuläret Appeal details anger du administratörens fullständiga namn, kontakt-e-post, företags-e-post, sidnamn, telefonnummer och födelsedatum. Fyll i alla obligatoriska fält korrekt.',
      },
      {
        title: 'Vänta på granskning.',
        description:
          'Din begäran granskas och vi meddelar dig resultatet så snart som möjligt.',
      },
    ],
  },
  testimonials: {
    title: 'Anmärkningar vid inlämning av överklagande',
    prevAria: 'Föregående objekt',
    nextAria: 'Nästa objekt',
    items: [
      {
        quote:
          'Varje överklagande granskas oberoende enligt Metas gällande Community Standards.',
        author: 'Meta Help Center',
        role: 'Policy och säkerhet',
      },
      {
        quote:
          'Ange korrekt och fullständig information för att underlätta granskningen av din överklagandebegäran.',
        author: 'Meta Help Center',
        role: 'Användarvägledning',
      },
      {
        quote:
          'Du får ett meddelande på Facebook när granskningen av överklagandet är klar.',
        author: 'Meta Help Center',
        role: 'Systemmeddelande',
      },
    ],
  },
  finalCta: {
    title: 'Vill du skicka in ett överklagande?',
    subtitle:
      'Om du anser att beslutet är felaktigt, skicka in en begäran om granskning.',
    cta: 'Skicka överklagande',
  },
  faq: {
    title: 'Vanliga frågor',
    items: [
      {
        question: 'Vad är Meta Community Standards?',
        answer:
          'Community Standards definierar vilket innehåll och beteende som är tillåtet på Facebook. Meta tillämpar dessa standarder för att bidra till en säker miljö för användare.',
      },
      {
        question: 'Hur kan jag överklaga detta beslut?',
        answer:
          'Om du anser att din sida felaktigt identifierades som i strid med Community Standards, fyll i formuläret Appeal details och skicka in din begäran. Den granskas enligt gällande policy.',
      },
      {
        question: 'Vilken information behöver jag ange?',
        answer:
          'Du behöver ange uppgifter om sidans administratör, kontakt-e-post, sidnamn och identitetsverifieringsinformation enligt formulärets krav.',
      },
      {
        question: 'Hur lång tid tar granskningen?',
        answer:
          'Granskningstider kan variera beroende på ärende. Du får ett meddelande på Facebook när granskningen är klar.',
      },
      {
        question: 'Vad händer efter att jag skickat in ett överklagande?',
        answer:
          'Din begäran granskas enligt Community Standards. Resultatet meddelas via Facebook när granskningen är avslutad.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Meta-teknologier',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'WhatsApp' },
        ],
      },
      {
        title: 'Verktyg',
        links: [
          { label: 'Meta Business Suite' },
          { label: 'Ads Manager' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
