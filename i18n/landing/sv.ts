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
    ctaAria: 'Skicka överklagande — begär en granskning av beslutet om din Sida',
  },
  hero: {
    title: 'Din Sida kan ha brutit mot Community Standards',
    lead:
      'Efter en nyligen genomförd granskning har din Facebook-sida identifierats som potentiellt i strid med Community Standards. Om du anser att resultatet är felaktigt kan du skicka in ett överklagande för att begära en ny granskning.',
    eligibility:
      'Detta meddelande utfärdas enligt Facebooks innehållsprinciper för utgivare och gäller endast en Sida som du administrerar.',
    creatorPrefix: 'Läs mer om',
    creatorLink: 'Meta Community Standards',
    cta: 'Skicka överklagande',
    badgeAlt: 'Facebook-logotyp',
  },
  benefits: {
    title: 'Om detta meddelande',
    subtitle:
      'Meta granskar Sidinnehåll mot Community Standards och principer för innehållsdistribution för att minska potentiell skada för communityn.',
    learnMore: 'Läs mer',
    items: [
      {
        title: 'Signaler om potentiella överträdelser',
        description:
          'Metas system kan identifiera innehåll som potentiellt bryter mot reglerna innan ett slutgiltigt beslut fattas. Detta meddelande återspeglar ett initialt bedömningsstadium, inte ett slutligt avgörande.',
      },
      {
        title: 'Gränsfallsinnehåll',
        description:
          'Vissa innehåll bryter kanske inte bokstavligen mot Community Standards men kan vara kontroversiella eller minska upplevelsekvaliteten. Meta kan begränsa distributionen för att skydda communityn.',
      },
      {
        title: 'Principer för innehållsdistribution',
        description:
          'Facebook prioriterar autentiska källor och policyenliga innehåll. Distributionsbeslut bedöms alltid mot gällande Community Standards.',
      },
      {
        title: 'Automatiserad och specialistgranskning',
        description:
          'Processen kombinerar automatisk detektering med bedömning av policygranskningsteam baserat på din Sidas specifika sammanhang.',
      },
      {
        title: 'Identitetsverifiering vid behov',
        description:
          'För innehåll med ovanligt hög distribution kan Meta kräva identitetsverifiering innan processen fortsätter. Överklagandeprocessen kan inkludera detta steg.',
      },
      {
        title: 'Rätt att överklaga',
        description:
          'Sidadministratörer eller behöriga representanter kan skicka in en begäran om granskning om de anser att det initiala resultatet är felaktigt.',
      },
    ],
  },
  steps: {
    title: 'Steg för att skicka in ett överklagande',
    subtitle:
      'Slutför alla tre steg i ordning. Uppskattad tid: cirka 5–10 minuter.',
    items: [
      {
        title: 'Granska flaggat innehåll.',
        description:
          'Jämför varningen med relaterade inlägg eller aktivitet på din Sida. Kontrollera Community Standards om du behöver klargöra vilken policy som tillämpas.',
      },
      {
        title: 'Fyll i formuläret och verifiera identitet.',
        description:
          'Ange administratörs- och kontaktuppgifter samt en förklarande anteckning (om tillämpligt). Verifiera ditt länkade Facebook-konto innan du skickar in.',
      },
      {
        title: 'Följ status på Facebook.',
        description:
          'Efter inskickning får du bekräftelse och uppdateringar via Facebook-aviseringar. Din begäransreferens hjälper om du behöver support.',
      },
    ],
  },
  testimonials: {
    title: 'Rekommendationer från Help Center',
    prevAria: 'Föregående objekt',
    nextAria: 'Nästa objekt',
    items: [
      {
        quote:
          'Innan du överklagar, granska Community Standards och utgivarprinciper för att förstå de policyer Meta tillämpar på din Sida.',
        author: 'Meta Business Help Center',
        role: 'Innehållspolicyer',
      },
      {
        quote:
          'Beskriv kortfattat i överklagandeformuläret sammanhanget för flaggat innehåll och varför du anser att din Sida följer reglerna — specifik information hjälper granskare att bedöma ditt ärende mer exakt.',
        author: 'Meta Business Help Center',
        role: 'Vägledning för inskickning',
      },
      {
        quote:
          'Skicka inte dubbletter av samma ärende. Varje begäran köas i mottagningsordning och behandlas en gång per flaggning.',
        author: 'Meta Business Help Center',
        role: 'Behandlingspolicy',
      },
    ],
  },
  finalCta: {
    title: 'Redo att skicka in ditt överklagande?',
    subtitle:
      'Formuläret Appeal details kräver administratörsinformation och identitetsverifiering. Logga in på Facebook innan du börjar.',
    cta: 'Skicka överklagande',
  },
  faq: {
    title: 'Vanliga frågor',
    items: [
      {
        question: 'Vad är Meta Community Standards?',
        answer:
          'Regler för tillåtet innehåll och beteende på Facebook, som täcker säkerhet, autenticitet, integritet och andra områden. Meta uppdaterar och publicerar dem på sina policysidor.',
      },
      {
        question: 'Varför flaggades min Sida om jag inte är säker på att den bröt mot en policy?',
        answer:
          'Metas system kan upptäcka potentiellt regelstridigt innehåll innan ett slutgiltigt beslut. Meddelandet återspeglar ett initialt bedömningsstadium; ett överklagande låter granskningsteam omvärdera din Sidas specifika sammanhang.',
      },
      {
        question: 'Vad är «gränsfallsinnehåll»?',
        answer:
          'Innehåll som inte bokstavligen bryter mot Community Standards men kan vara kontroversiellt, sensationsdrivet eller minska upplevelsekvaliteten. Meta kan begränsa distributionen av sådant innehåll för att skydda communityn.',
      },
      {
        question: 'Vem kan skicka in ett överklagande?',
        answer:
          'Sidadministratörer eller behöriga representanter för organisationen som äger Sidan. Du måste verifiera det länkade Facebook-kontot när du skickar in formuläret.',
      },
      {
        question: 'Vad bör jag förbereda?',
        answer:
          'Administratörens fullständiga namn, kontakt-e-post, företags-e-post (om tillämpligt), Sidnamn, telefonnummer och en kort beskrivning av flaggat innehåll. Felaktig eller overifierbar information kan hindra behandlingen.',
      },
      {
        question: 'Hur lång tid tar granskningen och vilka resultat är möjliga?',
        answer:
          'Vanligtvis 3–7 arbetsdagar, möjligen längre om ytterligare information behövs. Resultat kan inkludera att överklagandet godkänns, att beslutet upprätthålls eller en begäran om mer information — allt meddelas via Facebook.',
      },
      {
        question: 'Hur används min information?',
        answer:
          'Endast för att behandla ditt överklagande och verifiera administrativa rättigheter, enligt Metas integritetspolicy och villkor. Meta säljer inte dina personuppgifter.',
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
