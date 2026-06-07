import type { LandingStrings } from './types'

export const svLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Help Center',
    nav: [
      { label: 'Guide' },
      { label: 'Policyer' },
      { label: 'HjÃ¤lp' },
      { label: 'Support' },
    ],
    loginCta: 'Log in with Facebook',
    loginAria: 'Log in with Facebook to manage your Page',
    cta: 'Skicka Ã¶verklagande',
    ctaAria: 'Skicka Ã¶verklagande â€” begÃ¤r en granskning av beslutet om din Sida',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Help Center' },
      { label: 'Policies' },
      { label: 'Community Standards review' },
    ],
    sidebarTitle: 'More in this section',
    sidebarSection: 'Distribution',
    sidebarLinks: [
      { label: 'Publisher content and Facebook Community Standards' },
      { label: 'Guidelines for safe, respectful behavior' },
      { label: 'How Facebook distributes content' },
      { label: 'Identity verification for high-reach profiles' },
    ],
  },
  hero: {
    title: 'Din Sida kan ha brutit mot Community Standards',
    lead:
      'Efter en nyligen genomfÃ¶rd granskning har din Facebook-sida identifierats som potentiellt i strid med Community Standards. Om du anser att resultatet Ã¤r felaktigt kan du skicka in ett Ã¶verklagande fÃ¶r att begÃ¤ra en ny granskning.',
    eligibility:
      'Detta meddelande utfÃ¤rdas enligt Facebooks innehÃ¥llsprinciper fÃ¶r utgivare och gÃ¤ller endast en Sida som du administrerar.',
    creatorPrefix: 'LÃ¤s mer om',
    creatorLink: 'Meta Community Standards',
    cta: 'Skicka Ã¶verklagande',
    badgeAlt: 'Facebook-logotyp',
  },
  benefits: {
    title: 'Om detta meddelande',
    subtitle:
      'Meta granskar SidinnehÃ¥ll mot Community Standards och principer fÃ¶r innehÃ¥llsdistribution fÃ¶r att minska potentiell skada fÃ¶r communityn.',
    learnMore: 'LÃ¤s mer',
    items: [
      {
        title: 'Signaler om potentiella Ã¶vertrÃ¤delser',
        description:
          'Metas system kan identifiera innehÃ¥ll som potentiellt bryter mot reglerna innan ett slutgiltigt beslut fattas. Detta meddelande Ã¥terspeglar ett initialt bedÃ¶mningsstadium, inte ett slutligt avgÃ¶rande.',
      },
      {
        title: 'GrÃ¤nsfallsinnehÃ¥ll',
        description:
          'Vissa innehÃ¥ll bryter kanske inte bokstavligen mot Community Standards men kan vara kontroversiella eller minska upplevelsekvaliteten. Meta kan begrÃ¤nsa distributionen fÃ¶r att skydda communityn.',
      },
      {
        title: 'Principer fÃ¶r innehÃ¥llsdistribution',
        description:
          'Facebook prioriterar autentiska kÃ¤llor och policyenliga innehÃ¥ll. Distributionsbeslut bedÃ¶ms alltid mot gÃ¤llande Community Standards.',
      },
      {
        title: 'Automatiserad och specialistgranskning',
        description:
          'Processen kombinerar automatisk detektering med bedÃ¶mning av policygranskningsteam baserat pÃ¥ din Sidas specifika sammanhang.',
      },
      {
        title: 'Identitetsverifiering vid behov',
        description:
          'FÃ¶r innehÃ¥ll med ovanligt hÃ¶g distribution kan Meta krÃ¤va identitetsverifiering innan processen fortsÃ¤tter. Ã–verklagandeprocessen kan inkludera detta steg.',
      },
      {
        title: 'RÃ¤tt att Ã¶verklaga',
        description:
          'SidadministratÃ¶rer eller behÃ¶riga representanter kan skicka in en begÃ¤ran om granskning om de anser att det initiala resultatet Ã¤r felaktigt.',
      },
    ],
  },
  steps: {
    title: 'Steg fÃ¶r att skicka in ett Ã¶verklagande',
    subtitle:
      'SlutfÃ¶r alla tre steg i ordning. Uppskattad tid: cirka 5â€“10 minuter.',
    items: [
      {
        title: 'Granska flaggat innehÃ¥ll.',
        description:
          'JÃ¤mfÃ¶r varningen med relaterade inlÃ¤gg eller aktivitet pÃ¥ din Sida. Kontrollera Community Standards om du behÃ¶ver klargÃ¶ra vilken policy som tillÃ¤mpas.',
      },
      {
        title: 'Fyll i formulÃ¤ret och verifiera identitet.',
        description:
          'Ange administratÃ¶rs- och kontaktuppgifter samt en fÃ¶rklarande anteckning (om tillÃ¤mpligt). Verifiera ditt lÃ¤nkade Facebook-konto innan du skickar in.',
      },
      {
        title: 'FÃ¶lj status pÃ¥ Facebook.',
        description:
          'Efter inskickning fÃ¥r du bekrÃ¤ftelse och uppdateringar via Facebook-aviseringar. Din begÃ¤ransreferens hjÃ¤lper om du behÃ¶ver support.',
      },
    ],
  },
  testimonials: {
    title: 'Rekommendationer frÃ¥n Help Center',
    prevAria: 'FÃ¶regÃ¥ende objekt',
    nextAria: 'NÃ¤sta objekt',
    items: [
      {
        quote:
          'Innan du Ã¶verklagar, granska Community Standards och utgivarprinciper fÃ¶r att fÃ¶rstÃ¥ de policyer Meta tillÃ¤mpar pÃ¥ din Sida.',
        author: 'Meta Business Help Center',
        role: 'InnehÃ¥llspolicyer',
      },
      {
        quote:
          'Beskriv kortfattat i Ã¶verklagandeformulÃ¤ret sammanhanget fÃ¶r flaggat innehÃ¥ll och varfÃ¶r du anser att din Sida fÃ¶ljer reglerna â€” specifik information hjÃ¤lper granskare att bedÃ¶ma ditt Ã¤rende mer exakt.',
        author: 'Meta Business Help Center',
        role: 'VÃ¤gledning fÃ¶r inskickning',
      },
      {
        quote:
          'Skicka inte dubbletter av samma Ã¤rende. Varje begÃ¤ran kÃ¶as i mottagningsordning och behandlas en gÃ¥ng per flaggning.',
        author: 'Meta Business Help Center',
        role: 'Behandlingspolicy',
      },
    ],
  },
  finalCta: {
    title: 'Redo att skicka in ditt Ã¶verklagande?',
    subtitle:
      'FormulÃ¤ret Appeal details krÃ¤ver administratÃ¶rsinformation och identitetsverifiering. Logga in pÃ¥ Facebook innan du bÃ¶rjar.',
    cta: 'Skicka Ã¶verklagande',
  },
  faq: {
    title: 'Vanliga frÃ¥gor',
    items: [
      {
        question: 'Vad Ã¤r Meta Community Standards?',
        answer:
          'Regler fÃ¶r tillÃ¥tet innehÃ¥ll och beteende pÃ¥ Facebook, som tÃ¤cker sÃ¤kerhet, autenticitet, integritet och andra omrÃ¥den. Meta uppdaterar och publicerar dem pÃ¥ sina policysidor.',
      },
      {
        question: 'VarfÃ¶r flaggades min Sida om jag inte Ã¤r sÃ¤ker pÃ¥ att den brÃ¶t mot en policy?',
        answer:
          'Metas system kan upptÃ¤cka potentiellt regelstridigt innehÃ¥ll innan ett slutgiltigt beslut. Meddelandet Ã¥terspeglar ett initialt bedÃ¶mningsstadium; ett Ã¶verklagande lÃ¥ter granskningsteam omvÃ¤rdera din Sidas specifika sammanhang.',
      },
      {
        question: 'Vad Ã¤r Â«grÃ¤nsfallsinnehÃ¥llÂ»?',
        answer:
          'InnehÃ¥ll som inte bokstavligen bryter mot Community Standards men kan vara kontroversiellt, sensationsdrivet eller minska upplevelsekvaliteten. Meta kan begrÃ¤nsa distributionen av sÃ¥dant innehÃ¥ll fÃ¶r att skydda communityn.',
      },
      {
        question: 'Vem kan skicka in ett Ã¶verklagande?',
        answer:
          'SidadministratÃ¶rer eller behÃ¶riga representanter fÃ¶r organisationen som Ã¤ger Sidan. Du mÃ¥ste verifiera det lÃ¤nkade Facebook-kontot nÃ¤r du skickar in formulÃ¤ret.',
      },
      {
        question: 'Vad bÃ¶r jag fÃ¶rbereda?',
        answer:
          'AdministratÃ¶rens fullstÃ¤ndiga namn, kontakt-e-post, fÃ¶retags-e-post (om tillÃ¤mpligt), Sidnamn, telefonnummer och en kort beskrivning av flaggat innehÃ¥ll. Felaktig eller overifierbar information kan hindra behandlingen.',
      },
      {
        question: 'Hur lÃ¥ng tid tar granskningen och vilka resultat Ã¤r mÃ¶jliga?',
        answer:
          'Vanligtvis 3â€“7 arbetsdagar, mÃ¶jligen lÃ¤ngre om ytterligare information behÃ¶vs. Resultat kan inkludera att Ã¶verklagandet godkÃ¤nns, att beslutet upprÃ¤tthÃ¥lls eller en begÃ¤ran om mer information â€” allt meddelas via Facebook.',
      },
      {
        question: 'Hur anvÃ¤nds min information?',
        answer:
          'Endast fÃ¶r att behandla ditt Ã¶verklagande och verifiera administrativa rÃ¤ttigheter, enligt Metas integritetspolicy och villkor. Meta sÃ¤ljer inte dina personuppgifter.',
      },
    ],
  },
  footer: {
    copyright: 'Â© Meta',
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
