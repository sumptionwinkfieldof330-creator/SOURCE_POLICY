import type { LandingStrings } from './types'

export const esLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: 'Guía' },
      { label: 'Políticas' },
      { label: 'Ayuda' },
      { label: 'Soporte' },
    ],
    cta: 'Enviar apelación',
    ctaAria: 'Enviar apelación — solicitar una revisión de la decisión sobre tu Página',
  },
  hero: {
    title: 'Tu Página podría haber infringido los Community Standards',
    lead:
      'Tras una revisión reciente, se ha identificado que tu Página de Facebook podría infringir los Community Standards. Si crees que este resultado es incorrecto, puedes enviar una apelación para solicitar una revisión.',
    eligibility:
      'Esta decisión se basa en el proceso de revisión estándar de Meta. Cada apelación se revisa conforme a la política vigente.',
    creatorPrefix: 'Más información sobre los',
    creatorLink: 'Community Standards de Meta',
    cta: 'Enviar apelación',
    badgeAlt: 'Icono de notificación de Meta',
    videoAria: 'Guía en video del proceso de apelación',
  },
  benefits: {
    title: 'Sobre el proceso de apelación',
    subtitle:
      'Conoce cómo Meta gestiona las solicitudes de apelación relacionadas con los Community Standards en Facebook.',
    learnMore: 'Más información',
    items: [
      {
        title: 'Proceso de revisión',
        description:
          'Cada apelación se revisa de forma independiente conforme a los Community Standards actuales de Meta.',
      },
      {
        title: 'Derecho de apelación',
        description:
          'Si crees que la decisión es incorrecta, puedes enviar una solicitud de reconsideración.',
      },
      {
        title: 'Información requerida',
        description:
          'Proporciona datos precisos sobre tu Página y su administrador para facilitar la revisión.',
      },
      {
        title: 'Tiempo de procesamiento',
        description:
          'Los plazos de revisión pueden variar según la complejidad de cada caso.',
      },
      {
        title: 'Notificación del resultado',
        description:
          'Recibirás una notificación en Facebook cuando se complete la revisión.',
      },
      {
        title: 'Cumplimiento de políticas',
        description:
          'Las Páginas deben cumplir los Community Standards de Meta durante todo el proceso de revisión.',
      },
    ],
  },
  steps: {
    title: 'Cómo enviar una apelación',
    subtitle:
      'Completa los pasos siguientes para enviar tu apelación. Tu información se utilizará con fines de revisión.',
    items: [
      {
        title: 'Revisa el aviso.',
        description:
          'Lee el aviso sobre posibles infracciones de los Community Standards en tu Página. Si crees que el resultado es incorrecto, puedes proceder a enviar una apelación.',
      },
      {
        title: 'Completa el formulario de apelación.',
        description:
          'En el formulario Detalles de la apelación, indica el nombre completo del administrador, el correo de contacto, el correo comercial, el nombre de la Página, el número de teléfono y la fecha de nacimiento. Rellena correctamente todos los campos obligatorios.',
      },
      {
        title: 'Espera la revisión.',
        description:
          'Tu solicitud será revisada y te informaremos del resultado lo antes posible.',
      },
    ],
  },
  testimonials: {
    title: 'Notas al enviar una apelación',
    prevAria: 'Elemento anterior',
    nextAria: 'Elemento siguiente',
    items: [
      {
        quote:
          'Cada apelación se revisa de forma independiente conforme a los Community Standards actuales de Meta.',
        author: 'Centro de ayuda de Meta',
        role: 'Políticas y seguridad',
      },
      {
        quote:
          'Proporciona información precisa y completa para facilitar la revisión de tu solicitud de apelación.',
        author: 'Centro de ayuda de Meta',
        role: 'Orientación al usuario',
      },
      {
        quote:
          'Recibirás una notificación en Facebook cuando se complete la revisión de la apelación.',
        author: 'Centro de ayuda de Meta',
        role: 'Notificación del sistema',
      },
    ],
  },
  finalCta: {
    title: '¿Deseas enviar una apelación?',
    subtitle:
      'Si crees que la decisión es incorrecta, envía una solicitud para que sea revisada.',
    cta: 'Enviar apelación',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Qué son los Community Standards de Meta?',
        answer:
          'Los Community Standards definen qué contenido y comportamiento están permitidos en Facebook. Meta aplica estos estándares para ayudar a mantener un entorno seguro para los usuarios.',
      },
      {
        question: '¿Cómo puedo apelar esta decisión?',
        answer:
          'Si crees que tu Página fue identificada incorrectamente como infractora de los Community Standards, completa el formulario Detalles de la apelación y envía tu solicitud. Se revisará conforme a la política vigente.',
      },
      {
        question: '¿Qué información debo proporcionar?',
        answer:
          'Deberás proporcionar datos sobre el administrador de la Página, el correo de contacto, el nombre de la Página y la información de verificación de identidad solicitada en el formulario.',
      },
      {
        question: '¿Cuánto tarda la revisión?',
        answer:
          'Los plazos de revisión pueden variar según el caso. Recibirás una notificación en Facebook cuando se complete la revisión.',
      },
      {
        question: '¿Qué ocurre después de enviar una apelación?',
        answer:
          'Tu solicitud será revisada conforme a los Community Standards. El resultado se comunicará a través de Facebook una vez finalizada la revisión.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Tecnologías de Meta',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'WhatsApp' },
        ],
      },
      {
        title: 'Herramientas',
        links: [
          { label: 'Meta Business Suite' },
          { label: 'Ads Manager' },
        ],
      },
      {
        title: 'Soporte',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
