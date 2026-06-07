import type { LandingStrings } from './types'

export const svLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Transparenscenter',
    nav: [
      { label: 'Policyer' },
      { label: 'Tillämpning' },
      { label: 'Rapportering' },
      { label: 'Support' },
    ],
    loginCta: 'Logga in med Facebook',
    loginAria: 'Logga in med Facebook för att hantera din sida',
    cta: 'Skicka överklagande',
    ctaAria: 'Skicka överklagande — begär granskning av beslutet om din sida',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Transparenscenter' },
      { label: 'Policyer' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Ämnen i Community Standards',
    sidebarSection: 'Policyer',
    sidebarLinks: [
      { label: 'Samordning av skada och brottspromovering' },
      { label: 'Farliga organisationer och individer' },
      { label: 'Bedrägeri, scams och vilseledande metoder' },
      { label: 'Begränsade varor och tjänster' },
      { label: 'Sexuellt utnyttjande, övergrepp och nakenhet bland barn' },
      { label: 'Våldsamt och grafiskt innehåll' },
    ],
  },
  hero: {
    title: 'Din sida kan ha brutit mot Community Standards',
    lead:
      'Community Standards beskriver vad som är och inte är tillåtet på Facebook, Instagram, Messenger och Threads. Efter en nyligen genomförd granskning har din sida identifierats som potentiellt icke-efterlevande av dessa standarder. Om du anser att resultatet är felaktigt kan du skicka ett överklagande och begära en granskning.',
    eligibility:
      'Dessa standarder baseras på feedback från människor och råd från experter inom teknik, allmän säkerhet och mänskliga rättigheter. Detta meddelande gäller endast en sida som du administrerar.',
    creatorPrefix: 'Se det officiella dokumentet på',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Skicka överklagande',
    badgeAlt: 'Meta-logotyp',
  },
  benefits: {
    title: 'Engagemang och omfattning av Community Standards',
    subtitle:
      'Meta inser hur viktigt det är att Facebook, Instagram, Messenger och Threads är platser där människor känner sig stärkta att kommunicera, och vi tar vårt ansvar på allvar att hålla dessa tjänster fria från missbruk.',
    learnMore: 'Läs mer',
    items: [
      {
        title: 'Tillämpningsomfattning',
        description:
          'Våra Community Standards gäller alla, över hela världen, och för all typ av innehåll, inklusive AI-genererat innehåll. Varje policyavsnitt börjar med en «Policy Rationale» följt av specifika regler om förbjudet innehåll eller innehåll som kräver ytterligare sammanhang för tillämpning.',
      },
      {
        title: 'Autenticitet',
        description:
          'Vi vill säkerställa att innehållet människor ser är autentiskt. Vi tror att autenticitet skapar en bättre miljö för delning, och därför vill vi inte att människor använder våra tjänster för att felaktigt framställa vem de är eller vad de gör.',
      },
      {
        title: 'Säkerhet',
        description:
          'Vi är engagerade i att göra Facebook, Instagram, Messenger och Threads till säkra platser. Vi tar bort innehåll som kan bidra till risk för skada mot personers fysiska säkerhet. Innehåll som hotar människor är inte tillåtet på våra tjänster.',
      },
      {
        title: 'Integritet',
        description:
          'Vi är engagerade i att skydda personlig integritet och information. Integritet ger människor friheten att vara sig själva, välja hur och när de delar på våra tjänster och enklare knyta kontakter.',
      },
      {
        title: 'Värdighet',
        description:
          'Vi tror att alla människor är lika i värdighet och rättigheter. Vi förväntar oss att människor respekterar andras värdighet och inte trakasserar eller nedvärderar andra.',
      },
      {
        title: 'Engagemang för yttrandefrihet',
        description:
          'Målet med våra Community Standards är att skapa en plats för uttryck och ge människor en röst. När vi begränsar uttryck gör vi det till förmån för autenticitet, säkerhet, integritet eller värdighet. Du kan överklaga om du anser att din sida följer policyn.',
      },
    ],
  },
  steps: {
    title: 'Steg för att skicka ett överklagande',
    subtitle:
      'Innan du skickar, jämför flaggat innehåll med Community Standards i Transparency Center. Uppskattad tid för formuläret: cirka 5–10 minuter.',
    items: [
      {
        title: 'Granska tillämplig policy.',
        description:
          'Läs relevant policyavsnitt i Transparency Center — varje avsnitt innehåller en Policy Rationale och specifika regler. Jämför med flaggade inlägg eller aktivitet på din sida.',
      },
      {
        title: 'Fyll i formuläret och verifiera identitet.',
        description:
          'Ange administratörs- och kontaktuppgifter samt sammanhang (vid behov). Verifiera ditt länkade Facebook-konto innan du skickar.',
      },
      {
        title: 'Följ resultatet på Facebook.',
        description:
          'Efter inskickning får du bekräftelse via Facebook-aviseringar. Granskning tar vanligtvis 3–7 arbetsdagar. Din begärans referensnummer hjälper om du behöver support.',
      },
    ],
  },
  testimonials: {
    title: 'Referens från Transparency Center',
    prevAria: 'Föregående objekt',
    nextAria: 'Nästa objekt',
    items: [
      {
        quote:
          'Dessa standarder baseras på feedback från människor och råd från experter inom områden som teknik, allmän säkerhet och mänskliga rättigheter — för att säkerställa att allas röst värderas.',
        author: 'Meta Transparency Center',
        role: 'Introduktion',
      },
      {
        quote:
          'Våra Community Standards gäller alla, över hela världen, och för all typ av innehåll, inklusive AI-genererat innehåll.',
        author: 'Meta Transparency Center',
        role: 'Omfattning',
      },
      {
        quote:
          'Den amerikanska engelska versionen av Community Standards återspeglar den mest uppdaterade uppsättningen av policyer och bör användas som primärt dokument.',
        author: 'Meta Transparency Center',
        role: 'Officiellt dokument',
      },
    ],
  },
  finalCta: {
    title: 'Skicka överklagande',
    subtitle:
      'Om du efter att ha läst Community Standards anser att din sida följer policyn, skicka formuläret med administratörsuppgifter och identitetsverifiering.',
    cta: 'Skicka överklagande',
  },
  faq: {
    title: 'Vanliga frågor',
    items: [
      {
        question: 'Vad täcker Community Standards?',
        answer:
          'Community Standards beskriver vad som är och inte är tillåtet på Facebook, Instagram, Messenger och Threads. Hela dokumentet publiceras i Meta Transparency Center.',
      },
      {
        question: 'Vilken version är den officiella referensen?',
        answer:
          'Enligt Transparency Center återspeglar den amerikanska engelska versionen den mest uppdaterade uppsättningen av policyer och bör användas som primärt dokument.',
      },
      {
        question: 'Vilka värden styr Meta när innehåll begränsas?',
        answer:
          'När Meta begränsar uttryck gör de det till förmån för autenticitet, säkerhet, integritet eller värdighet — de fyra grundläggande värdena i Community Standards.',
      },
      {
        question: 'Varför flaggades min sida om jag inte är säker på att den bröt mot policyn?',
        answer:
          'Metas system kan upptäcka potentiellt överträdande innehåll innan ett slutgiltigt beslut. Meddelandet återspeglar en initial bedömningsfas; ett överklagande låter granskningsteam ompröva din sidas specifika sammanhang.',
      },
      {
        question: 'Vem kan skicka ett överklagande?',
        answer:
          'Sidadministratörer eller auktoriserade representanter för organisationen som äger sidan. Du måste verifiera det länkade Facebook-kontot när du skickar formuläret.',
      },
      {
        question: 'Hur lång tid tar granskningen och vilka resultat är möjliga?',
        answer:
          'Vanligtvis 3–7 arbetsdagar, möjligen längre om ytterligare information behövs. Resultat kan inkludera att överklagandet godkänns, beslutet upprätthålls eller begäran om mer information — allt meddelas via Facebook.',
      },
      {
        question: 'Hur används min information?',
        answer:
          'Endast för att behandla ditt överklagande och verifiera administrativa rättigheter, enligt Metas integritetspolicy och villkor.',
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
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'Policyer',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Hjälpcenter' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
