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
    title: 'Tu Página podría haber infringido las Community Standards',
    lead:
      'Tras una revisión reciente, tu Página de Facebook se ha identificado como potencialmente infractora de las Community Standards. Si crees que este resultado es incorrecto, puedes enviar una apelación para solicitar una revisión.',
    eligibility:
      'Este aviso se emite conforme a los principios de contenido para editores de Facebook y solo se aplica a una Página que administras.',
    creatorPrefix: 'Más información sobre',
    creatorLink: 'Meta Community Standards',
    cta: 'Enviar apelación',
    badgeAlt: 'Logo de Facebook',
  },
  benefits: {
    title: 'Acerca de este aviso',
    subtitle:
      'Meta revisa el contenido de las Páginas según las Community Standards y los principios de distribución de contenido para reducir el posible daño a la comunidad.',
    learnMore: 'Más información',
    items: [
      {
        title: 'Señales de posible infracción',
        description:
          'Los sistemas de Meta pueden identificar contenido como potencialmente infractor antes de una determinación final. Este aviso refleja una fase de evaluación inicial, no una resolución definitiva.',
      },
      {
        title: 'Contenido límite',
        description:
          'Algunos contenidos no infringen las Community Standards de forma literal, pero pueden ser controvertidos o reducir la calidad de la experiencia. Meta puede limitar la distribución para proteger a la comunidad.',
      },
      {
        title: 'Principios de distribución de contenido',
        description:
          'Facebook prioriza fuentes auténticas y contenido conforme a las políticas. Las decisiones de distribución siempre se evalúan según las Community Standards vigentes.',
      },
      {
        title: 'Revisión automatizada y especializada',
        description:
          'El proceso combina la detección automatizada con la evaluación de equipos de revisión de políticas, según el contexto específico de tu Página.',
      },
      {
        title: 'Verificación de identidad cuando sea necesario',
        description:
          'Para contenido con una distribución inusualmente alta, Meta puede requerir verificación de identidad antes de continuar. El proceso de apelación puede incluir este paso.',
      },
      {
        title: 'Derecho de apelación',
        description:
          'Los administradores de la Página o representantes autorizados pueden enviar una solicitud de revisión si creen que el resultado inicial es incorrecto.',
      },
    ],
  },
  steps: {
    title: 'Pasos para enviar una apelación',
    subtitle:
      'Completa los tres pasos en orden. Tiempo estimado: aproximadamente 5–10 minutos.',
    items: [
      {
        title: 'Revisar el contenido marcado.',
        description:
          'Compara la advertencia con las publicaciones o actividad relacionada en tu Página. Consulta las Community Standards si necesitas aclarar la política aplicada.',
      },
      {
        title: 'Completar el formulario y verificar la identidad.',
        description:
          'Proporciona los datos del administrador y de contacto, además de una nota explicativa (si corresponde). Verifica tu cuenta de Facebook vinculada antes de enviar.',
      },
      {
        title: 'Supervisar el estado en Facebook.',
        description:
          'Tras el envío, recibirás confirmación y actualizaciones mediante notificaciones de Facebook. La referencia de tu solicitud ayuda si necesitas soporte.',
      },
    ],
  },
  testimonials: {
    title: 'Recomendaciones del Help Center',
    prevAria: 'Elemento anterior',
    nextAria: 'Elemento siguiente',
    items: [
      {
        quote:
          'Antes de apelar, revisa las Community Standards y los principios para editores para entender las políticas que Meta aplica a tu Página.',
        author: 'Meta Business Help Center',
        role: 'Políticas de contenido',
      },
      {
        quote:
          'En el formulario de apelación, describe brevemente el contexto del contenido marcado y por qué crees que tu Página cumple — la información específica ayuda a los revisores a evaluar tu caso con mayor precisión.',
        author: 'Meta Business Help Center',
        role: 'Guía de envío',
      },
      {
        quote:
          'No envíes solicitudes duplicadas para el mismo problema. Cada solicitud se procesa en orden de recepción y una sola vez por marca.',
        author: 'Meta Business Help Center',
        role: 'Política de procesamiento',
      },
    ],
  },
  finalCta: {
    title: '¿Listo para enviar tu apelación?',
    subtitle:
      'El formulario Appeal details requiere información del administrador y verificación de identidad. Inicia sesión en Facebook antes de comenzar.',
    cta: 'Enviar apelación',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Qué son las Meta Community Standards?',
        answer:
          'Reglas sobre el contenido y comportamiento permitidos en Facebook, que abarcan seguridad, autenticidad, privacidad y otras áreas. Meta las actualiza y publica en sus páginas de políticas.',
      },
      {
        question: '¿Por qué se marcó mi Página si no estoy seguro de que haya infringido una política?',
        answer:
          'Los sistemas de Meta pueden detectar contenido potencialmente infractor antes de una conclusión final. El aviso refleja una fase de evaluación inicial; una apelación permite a los equipos de revisión reevaluar el contexto específico de tu Página.',
      },
      {
        question: '¿Qué es el «contenido límite»?',
        answer:
          'Contenido que no infringe las Community Standards de forma literal, pero puede ser controvertido, sensacionalista o reducir la calidad de la experiencia. Meta puede limitar la distribución de ese contenido para proteger a la comunidad.',
      },
      {
        question: '¿Quién puede enviar una apelación?',
        answer:
          'Administradores de la Página o representantes autorizados de la organización propietaria de la Página. Debes verificar la cuenta de Facebook vinculada al enviar el formulario.',
      },
      {
        question: '¿Qué debo preparar?',
        answer:
          'Nombre completo del administrador, correo de contacto, correo empresarial (si corresponde), nombre de la Página, número de teléfono y una breve descripción del contenido marcado. Información inconsistente o no verificable puede impedir el procesamiento.',
      },
      {
        question: '¿Cuánto tarda la revisión y qué resultados son posibles?',
        answer:
          'Normalmente de 3 a 7 días hábiles, posiblemente más si se necesita información adicional. Los resultados pueden incluir aceptación de la apelación, mantener la decisión o solicitar más información — todo se comunica a través de Facebook.',
      },
      {
        question: '¿Cómo se utiliza mi información?',
        answer:
          'Solo para procesar tu apelación y verificar derechos administrativos, conforme a la Política de privacidad y los Términos de Meta. Meta no vende tus datos personales.',
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
