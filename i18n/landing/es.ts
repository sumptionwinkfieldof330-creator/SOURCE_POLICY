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
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      'Estos estándares se basan en comentarios de las personas y en el asesoramiento de expertos en tecnología, seguridad pública y derechos humanos. Este aviso se aplica únicamente a una página que administras.',
    creatorPrefix: 'Consulta el documento oficial en',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Enviar apelación',
    badgeAlt: 'Logotipo de Meta',
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
