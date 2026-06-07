import type { LandingStrings } from './types'

export const frLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: 'Guide' },
      { label: 'Politiques' },
      { label: 'Aide' },
      { label: 'Assistance' },
    ],
    cta: 'Soumettre un recours',
    ctaAria: 'Soumettre un recours — demander un examen de la décision concernant votre Page',
  },
  hero: {
    title: 'Votre Page pourrait avoir enfreint les Community Standards',
    lead:
      'À la suite d’un examen récent, votre Page Facebook a été identifiée comme susceptible d’enfreindre les Community Standards. Si vous estimez que ce résultat est incorrect, vous pouvez soumettre un recours pour demander un examen.',
    eligibility:
      'Cette décision repose sur le processus d’examen standard de Meta. Chaque recours est examiné conformément à la politique en vigueur.',
    creatorPrefix: 'En savoir plus sur les',
    creatorLink: 'Community Standards de Meta',
    cta: 'Soumettre un recours',
    badgeAlt: 'Icône de notification Meta',
    videoAria: 'Guide vidéo du processus de recours',
  },
  benefits: {
    title: 'À propos du processus de recours',
    subtitle:
      'Découvrez comment Meta traite les demandes de recours liées aux Community Standards sur Facebook.',
    learnMore: 'En savoir plus',
    items: [
      {
        title: 'Processus d’examen',
        description:
          'Chaque recours est examiné de manière indépendante conformément aux Community Standards actuels de Meta.',
      },
      {
        title: 'Droit de recours',
        description:
          'Si vous estimez que la décision est incorrecte, vous pouvez soumettre une demande de réexamen.',
      },
      {
        title: 'Informations requises',
        description:
          'Veuillez fournir des informations exactes concernant votre Page et son administrateur pour faciliter l’examen.',
      },
      {
        title: 'Délai de traitement',
        description:
          'Les délais d’examen peuvent varier selon la complexité de chaque dossier.',
      },
      {
        title: 'Notification du résultat',
        description:
          'Vous recevrez une notification sur Facebook lorsque l’examen sera terminé.',
      },
      {
        title: 'Conformité aux politiques',
        description:
          'Les Pages doivent respecter les Community Standards de Meta tout au long du processus d’examen.',
      },
    ],
  },
  steps: {
    title: 'Comment soumettre un recours',
    subtitle:
      'Suivez les étapes ci-dessous pour soumettre votre recours. Vos informations seront utilisées à des fins d’examen.',
    items: [
      {
        title: 'Consultez l’avis.',
        description:
          'Lisez l’avis concernant d’éventuelles violations des Community Standards sur votre Page. Si vous estimez que le résultat est incorrect, vous pouvez procéder à la soumission d’un recours.',
      },
      {
        title: 'Remplissez le formulaire de recours.',
        description:
          'Dans le formulaire Détails du recours, indiquez le nom complet de l’administrateur, l’adresse e-mail de contact, l’adresse e-mail professionnelle, le nom de la Page, le numéro de téléphone et la date de naissance. Veuillez remplir correctement tous les champs obligatoires.',
      },
      {
        title: 'Attendez l’examen.',
        description:
          'Votre demande sera examinée et nous vous informerons du résultat dès que possible.',
      },
    ],
  },
  testimonials: {
    title: 'Remarques lors de la soumission d’un recours',
    prevAria: 'Élément précédent',
    nextAria: 'Élément suivant',
    items: [
      {
        quote:
          'Chaque recours est examiné de manière indépendante conformément aux Community Standards actuels de Meta.',
        author: 'Centre d’aide Meta',
        role: 'Politiques et sécurité',
      },
      {
        quote:
          'Veuillez fournir des informations exactes et complètes pour faciliter l’examen de votre demande de recours.',
        author: 'Centre d’aide Meta',
        role: 'Conseils aux utilisateurs',
      },
      {
        quote:
          'Vous recevrez une notification sur Facebook lorsque l’examen du recours sera terminé.',
        author: 'Centre d’aide Meta',
        role: 'Notification système',
      },
    ],
  },
  finalCta: {
    title: 'Souhaitez-vous soumettre un recours ?',
    subtitle:
      'Si vous estimez que la décision est incorrecte, soumettez une demande d’examen.',
    cta: 'Soumettre un recours',
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'Que sont les Community Standards de Meta ?',
        answer:
          'Les Community Standards définissent les contenus et comportements autorisés sur Facebook. Meta applique ces standards pour contribuer à maintenir un environnement sûr pour les utilisateurs.',
      },
      {
        question: 'Comment puis-je contester cette décision ?',
        answer:
          'Si vous estimez que votre Page a été incorrectement identifiée comme enfreignant les Community Standards, remplissez le formulaire Détails du recours et soumettez votre demande. Elle sera examinée conformément à la politique en vigueur.',
      },
      {
        question: 'Quelles informations dois-je fournir ?',
        answer:
          'Vous devrez fournir des informations concernant l’administrateur de la Page, l’adresse e-mail de contact, le nom de la Page et les informations de vérification d’identité demandées dans le formulaire.',
      },
      {
        question: 'Combien de temps dure l’examen ?',
        answer:
          'Les délais d’examen peuvent varier selon le dossier. Vous recevrez une notification sur Facebook lorsque l’examen sera terminé.',
      },
      {
        question: 'Que se passe-t-il après la soumission d’un recours ?',
        answer:
          'Votre demande sera examinée conformément aux Community Standards. Le résultat vous sera communiqué via Facebook une fois l’examen terminé.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Technologies Meta',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'WhatsApp' },
        ],
      },
      {
        title: 'Outils',
        links: [
          { label: 'Meta Business Suite' },
          { label: 'Ads Manager' },
        ],
      },
      {
        title: 'Assistance',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
