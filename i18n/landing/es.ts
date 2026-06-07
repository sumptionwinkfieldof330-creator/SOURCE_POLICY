import type { LandingStrings } from './types'

export const esLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Centro de transparencia',
    nav: [
      { label: 'Políticas' },
      { label: 'Aplicación' },
      { label: 'Denuncias' },
      { label: 'Asistencia' },
    ],
    loginCta: 'Iniciar sesión con Facebook',
    loginAria: 'Iniciar sesión con Facebook para administrar tu página',
    cta: 'Enviar apelación',
    ctaAria: 'Enviar apelación — solicitar una revisión de la decisión sobre tu página',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Centro de transparencia' },
      { label: 'Políticas' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Temas de Community Standards',
    sidebarSection: 'Políticas',
    sidebarLinks: [
      { label: 'Coordinación de daños y promoción del crimen' },
      { label: 'Organizaciones y personas peligrosas' },
      { label: 'Fraude, estafas y prácticas engañosas' },
      { label: 'Bienes y servicios restringidos' },
      { label: 'Explotación sexual infantil, abuso y desnudez' },
      { label: 'Contenido violento y gráfico' },
    ],
  },
  hero: {
    title: 'Es posible que tu página haya infringido las Community Standards',
    lead:
      'Las Community Standards describen lo que está y no está permitido en Facebook, Instagram, Messenger y Threads. Tras una revisión reciente, se ha identificado que tu página podría no cumplir estos estándares. Si crees que este resultado es incorrecto, puedes enviar una apelación para solicitar una revisión.',
    eligibility:
      'Estos estándares se basan en comentarios de las personas y en el asesoramiento de expertos en tecnología, seguridad pública y derechos humanos. Este aviso se aplica únicamente a una página que administras.',
    creatorPrefix: 'Consulta el documento oficial en',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Enviar apelación',
    badgeAlt: 'Logotipo de Meta',
  },
  benefits: {
    title: 'Compromiso y alcance de las Community Standards',
    subtitle:
      'Meta reconoce lo importante que es que Facebook, Instagram, Messenger y Threads sean lugares donde las personas se sientan empoderadas para comunicarse, y nos tomamos en serio nuestro papel en mantener estos servicios libres de abusos.',
    learnMore: 'Más información',
    items: [
      {
        title: 'Alcance de aplicación',
        description:
          'Nuestras Community Standards se aplican a todas las personas en todo el mundo y a todo tipo de contenido, incluido el generado por IA. Cada sección de política comienza con una «Policy Rationale» seguida de reglas específicas sobre contenido prohibido o contenido que requiere contexto adicional para su aplicación.',
      },
      {
        title: 'Autenticidad',
        description:
          'Queremos asegurarnos de que el contenido que ven las personas sea auténtico. Creemos que la autenticidad crea un mejor entorno para compartir, y por eso no queremos que las personas usen nuestros servicios para tergiversar quiénes son o qué hacen.',
      },
      {
        title: 'Seguridad',
        description:
          'Nos comprometemos a que Facebook, Instagram, Messenger y Threads sean lugares seguros. Eliminamos contenido que pueda contribuir a un riesgo de daño a la seguridad física de las personas. El contenido que amenaza a las personas no está permitido en nuestros servicios.',
      },
      {
        title: 'Privacidad',
        description:
          'Nos comprometemos a proteger la privacidad e información personal. La privacidad da a las personas la libertad de ser quienes son, elegir cómo y cuándo compartir en nuestros servicios y conectarse más fácilmente.',
      },
      {
        title: 'Dignidad',
        description:
          'Creemos que todas las personas son iguales en dignidad y derechos. Esperamos que las personas respeten la dignidad de los demás y no acosen ni degraden a otras personas.',
      },
      {
        title: 'Compromiso con la voz',
        description:
          'El objetivo de nuestras Community Standards es crear un espacio para la expresión y dar voz a las personas. Cuando limitamos la expresión, lo hacemos al servicio de la autenticidad, la seguridad, la privacidad o la dignidad. Puedes apelar si crees que tu página cumple con la política.',
      },
    ],
  },
  steps: {
    title: 'Pasos para enviar una apelación',
    subtitle:
      'Antes de enviar, compara el contenido marcado con las Community Standards en el Transparency Center. Tiempo estimado para completar el formulario: aproximadamente 5–10 minutos.',
    items: [
      {
        title: 'Revisa la política aplicable.',
        description:
          'Lee la sección de política relevante en el Transparency Center — cada una incluye una Policy Rationale y reglas específicas. Compara con las publicaciones o actividad marcadas en tu página.',
      },
      {
        title: 'Completa el formulario y verifica tu identidad.',
        description:
          'Proporciona los datos del administrador y de contacto, más el contexto (si es necesario). Verifica tu cuenta de Facebook vinculada antes de enviar.',
      },
      {
        title: 'Sigue el resultado en Facebook.',
        description:
          'Tras el envío, recibirás confirmación mediante notificaciones de Facebook. La revisión suele tardar 3–7 días laborables. La referencia de tu solicitud ayuda si necesitas asistencia.',
      },
    ],
  },
  testimonials: {
    title: 'Referencia del Transparency Center',
    prevAria: 'Elemento anterior',
    nextAria: 'Elemento siguiente',
    items: [
      {
        quote:
          'Estos estándares se basan en comentarios de las personas y en el asesoramiento de expertos en campos como tecnología, seguridad pública y derechos humanos — para garantizar que se valore la voz de todos.',
        author: 'Meta Transparency Center',
        role: 'Introducción',
      },
      {
        quote:
          'Nuestras Community Standards se aplican a todas las personas en todo el mundo y a todo tipo de contenido, incluido el generado por IA.',
        author: 'Meta Transparency Center',
        role: 'Alcance',
      },
      {
        quote:
          'La versión en inglés de EE. UU. de las Community Standards refleja el conjunto de políticas más actualizado y debe usarse como documento principal.',
        author: 'Meta Transparency Center',
        role: 'Documento oficial',
      },
    ],
  },
  finalCta: {
    title: 'Enviar apelación',
    subtitle:
      'Si, tras leer las Community Standards, crees que tu página cumple con la política, envía el formulario con los datos del administrador y la verificación de identidad.',
    cta: 'Enviar apelación',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Qué cubren las Community Standards?',
        answer:
          'Las Community Standards describen lo que está y no está permitido en Facebook, Instagram, Messenger y Threads. El documento completo se publica en el Meta Transparency Center.',
      },
      {
        question: '¿Qué versión es la referencia oficial?',
        answer:
          'Según el Transparency Center, la versión en inglés de EE. UU. refleja el conjunto de políticas más actualizado y debe usarse como documento principal.',
      },
      {
        question: '¿Qué valores guían a Meta al limitar contenido?',
        answer:
          'Cuando Meta limita la expresión, lo hace al servicio de la autenticidad, la seguridad, la privacidad o la dignidad — los cuatro valores fundamentales indicados en las Community Standards.',
      },
      {
        question: '¿Por qué se marcó mi página si no estoy seguro de que infringiera la política?',
        answer:
          'Los sistemas de Meta pueden detectar contenido potencialmente infractor antes de una conclusión final. El aviso refleja una fase de evaluación inicial; una apelación permite a los equipos de revisión reevaluar el contexto específico de tu página.',
      },
      {
        question: '¿Quién puede enviar una apelación?',
        answer:
          'Administradores de la página o representantes autorizados de la organización propietaria de la página. Debes verificar la cuenta de Facebook vinculada al enviar el formulario.',
      },
      {
        question: '¿Cuánto tarda la revisión y qué resultados son posibles?',
        answer:
          'Normalmente 3–7 días laborables, posiblemente más si se necesita información adicional. Los resultados pueden incluir aceptación de la apelación, confirmación de la decisión o solicitud de más información — todo comunicado a través de Facebook.',
      },
      {
        question: '¿Cómo se utiliza mi información?',
        answer:
          'Solo para procesar tu apelación y verificar los derechos administrativos, conforme a la Política de privacidad y los Términos de Meta.',
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
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'Políticas',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: 'Asistencia',
        links: [
          { label: 'Centro de ayuda' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
