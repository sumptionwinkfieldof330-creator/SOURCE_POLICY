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
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      'Dessa standarder baseras på feedback från människor och råd från experter inom teknik, allmän säkerhet och mänskliga rättigheter. Detta meddelande gäller endast en sida som du administrerar.',
    creatorPrefix: 'Se det officiella dokumentet på',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Skicka överklagande',
    badgeAlt: 'Meta-logotyp',
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
