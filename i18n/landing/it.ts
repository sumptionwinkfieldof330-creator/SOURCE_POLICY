import type { LandingStrings } from './types'

export const itLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: 'Guida' },
      { label: 'Norme' },
      { label: 'Assistenza' },
      { label: 'Supporto' },
    ],
    cta: 'Invia ricorso',
    ctaAria: 'Invia un ricorso — richiedi una revisione della decisione sulla tua Pagina',
  },
  hero: {
    title: 'La tua Pagina potrebbe aver violato le Community Standards',
    lead:
      'A seguito di una recente verifica, la tua Pagina Facebook è stata identificata come potenzialmente in violazione delle Community Standards. Se ritieni che questo risultato sia errato, puoi inviare un ricorso per richiedere una revisione.',
    eligibility:
      'Questa decisione si basa sul processo di verifica standard di Meta. Ogni ricorso viene esaminato secondo le norme attuali.',
    creatorPrefix: 'Scopri di più sulle',
    creatorLink: 'Meta Community Standards',
    cta: 'Invia ricorso',
    badgeAlt: 'Icona notifica Meta',
    videoAria: 'Guida video al processo di ricorso',
  },
  benefits: {
    title: 'Informazioni sul processo di ricorso',
    subtitle:
      'Scopri come Meta gestisce le richieste di ricorso relative alle Community Standards su Facebook.',
    learnMore: 'Scopri di più',
    items: [
      {
        title: 'Processo di revisione',
        description:
          'Ogni ricorso viene esaminato in modo indipendente secondo le attuali Community Standards di Meta.',
      },
      {
        title: 'Diritto di ricorso',
        description:
          'Se ritieni che la decisione sia errata, puoi inviare una richiesta di riesame.',
      },
      {
        title: 'Informazioni richieste',
        description:
          'Fornisci dati accurati sulla tua Pagina e sul suo amministratore per supportare la revisione.',
      },
      {
        title: 'Tempi di elaborazione',
        description:
          'I tempi di revisione possono variare a seconda della complessità di ciascun caso.',
      },
      {
        title: 'Notifica del risultato',
        description:
          'Riceverai una notifica su Facebook al completamento della revisione.',
      },
      {
        title: 'Conformità alle norme',
        description:
          'Le Pagine devono rispettare le Meta Community Standards durante l\'intero processo di revisione.',
      },
    ],
  },
  steps: {
    title: 'Come inviare un ricorso',
    subtitle:
      'Completa i passaggi seguenti per inviare il tuo ricorso. Le informazioni fornite saranno utilizzate a fini di revisione.',
    items: [
      {
        title: 'Consulta l\'avviso.',
        description:
          'Leggi l\'avviso relativo a una possibile violazione delle Community Standards sulla tua Pagina. Se ritieni che il risultato sia errato, puoi procedere con l\'invio del ricorso.',
      },
      {
        title: 'Compila il modulo di ricorso.',
        description:
          'Nel modulo Appeal details, fornisci il nome completo dell\'amministratore, l\'e-mail di contatto, l\'e-mail aziendale, il nome della Pagina, il numero di telefono e la data di nascita. Compila accuratamente tutti i campi obbligatori.',
      },
      {
        title: 'Attendi la revisione.',
        description:
          'La tua richiesta sarà esaminata e ti informeremo dell\'esito il prima possibile.',
      },
    ],
  },
  testimonials: {
    title: 'Note per l\'invio del ricorso',
    prevAria: 'Elemento precedente',
    nextAria: 'Elemento successivo',
    items: [
      {
        quote:
          'Ogni ricorso viene esaminato in modo indipendente secondo le attuali Community Standards di Meta.',
        author: 'Meta Help Center',
        role: 'Norme e sicurezza',
      },
      {
        quote:
          'Fornisci informazioni accurate e complete per supportare la revisione della tua richiesta di ricorso.',
        author: 'Meta Help Center',
        role: 'Guida per gli utenti',
      },
      {
        quote:
          'Riceverai una notifica su Facebook al completamento della revisione del ricorso.',
        author: 'Meta Help Center',
        role: 'Notifica di sistema',
      },
    ],
  },
  finalCta: {
    title: 'Desideri inviare un ricorso?',
    subtitle:
      'Se ritieni che la decisione sia errata, invia una richiesta di revisione.',
    cta: 'Invia ricorso',
  },
  faq: {
    title: 'Domande frequenti',
    items: [
      {
        question: 'Cosa sono le Meta Community Standards?',
        answer:
          'Le Community Standards definiscono quali contenuti e comportamenti sono consentiti su Facebook. Meta applica questi standard per contribuire a mantenere un ambiente sicuro per gli utenti.',
      },
      {
        question: 'Come posso fare ricorso contro questa decisione?',
        answer:
          'Se ritieni che la tua Pagina sia stata identificata erroneamente come in violazione delle Community Standards, compila il modulo Appeal details e invia la tua richiesta. Sarà esaminata secondo le norme attuali.',
      },
      {
        question: 'Quali informazioni devo fornire?',
        answer:
          'Dovrai fornire i dati dell\'amministratore della Pagina, l\'e-mail di contatto, il nome della Pagina e le informazioni di verifica dell\'identità richieste nel modulo.',
      },
      {
        question: 'Quanto tempo richiede la revisione?',
        answer:
          'I tempi di revisione possono variare a seconda del caso. Riceverai una notifica su Facebook al completamento della revisione.',
      },
      {
        question: 'Cosa succede dopo l\'invio del ricorso?',
        answer:
          'La tua richiesta sarà esaminata secondo le Community Standards. L\'esito ti sarà comunicato tramite Facebook al termine della revisione.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Tecnologie Meta',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'WhatsApp' },
        ],
      },
      {
        title: 'Strumenti',
        links: [
          { label: 'Meta Business Suite' },
          { label: 'Ads Manager' },
        ],
      },
      {
        title: 'Supporto',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
