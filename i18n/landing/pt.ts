import type { LandingStrings } from './types'

export const ptLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: 'Guia' },
      { label: 'Políticas' },
      { label: 'Ajuda' },
      { label: 'Suporte' },
    ],
    cta: 'Enviar recurso',
    ctaAria: 'Enviar recurso — solicitar uma revisão da decisão sobre sua Página',
  },
  hero: {
    title: 'Sua Página pode ter violado os Community Standards',
    lead:
      'Após uma revisão recente, sua Página do Facebook foi identificada como potencialmente em violação dos Community Standards. Se você acredita que este resultado está incorreto, pode enviar um recurso para solicitar uma revisão.',
    eligibility:
      'Esta decisão baseia-se no processo de revisão padrão da Meta. Cada recurso é analisado conforme a política vigente.',
    creatorPrefix: 'Saiba mais sobre os',
    creatorLink: 'Community Standards da Meta',
    cta: 'Enviar recurso',
    badgeAlt: 'Ícone de notificação da Meta',
    videoAria: 'Guia em vídeo do processo de recurso',
  },
  benefits: {
    title: 'Sobre o processo de recurso',
    subtitle:
      'Saiba como a Meta trata solicitações de recurso relacionadas aos Community Standards no Facebook.',
    learnMore: 'Saiba mais',
    items: [
      {
        title: 'Processo de revisão',
        description:
          'Cada recurso é analisado de forma independente conforme os Community Standards atuais da Meta.',
      },
      {
        title: 'Direito de recurso',
        description:
          'Se você acredita que a decisão está incorreta, pode enviar uma solicitação de reconsideração.',
      },
      {
        title: 'Informações necessárias',
        description:
          'Forneça dados precisos sobre sua Página e seu administrador para apoiar a revisão.',
      },
      {
        title: 'Prazo de processamento',
        description:
          'Os prazos de revisão podem variar conforme a complexidade de cada caso.',
      },
      {
        title: 'Notificação do resultado',
        description:
          'Você receberá uma notificação no Facebook quando a revisão for concluída.',
      },
      {
        title: 'Conformidade com políticas',
        description:
          'As Páginas devem cumprir os Community Standards da Meta durante todo o processo de revisão.',
      },
    ],
  },
  steps: {
    title: 'Como enviar um recurso',
    subtitle:
      'Conclua as etapas abaixo para enviar seu recurso. Suas informações serão usadas para fins de revisão.',
    items: [
      {
        title: 'Revise o aviso.',
        description:
          'Leia o aviso sobre possíveis violações dos Community Standards em sua Página. Se você acredita que o resultado está incorreto, pode prosseguir com o envio de um recurso.',
      },
      {
        title: 'Preencha o formulário de recurso.',
        description:
          'No formulário Detalhes do recurso, informe o nome completo do administrador, o e-mail de contato, o e-mail comercial, o nome da Página, o número de telefone e a data de nascimento. Preencha corretamente todos os campos obrigatórios.',
      },
      {
        title: 'Aguarde a revisão.',
        description:
          'Sua solicitação será analisada e informaremos o resultado o mais breve possível.',
      },
    ],
  },
  testimonials: {
    title: 'Observações ao enviar um recurso',
    prevAria: 'Item anterior',
    nextAria: 'Próximo item',
    items: [
      {
        quote:
          'Cada recurso é analisado de forma independente conforme os Community Standards atuais da Meta.',
        author: 'Central de Ajuda da Meta',
        role: 'Políticas e segurança',
      },
      {
        quote:
          'Forneça informações precisas e completas para apoiar a revisão da sua solicitação de recurso.',
        author: 'Central de Ajuda da Meta',
        role: 'Orientação ao usuário',
      },
      {
        quote:
          'Você receberá uma notificação no Facebook quando a revisão do recurso for concluída.',
        author: 'Central de Ajuda da Meta',
        role: 'Notificação do sistema',
      },
    ],
  },
  finalCta: {
    title: 'Deseja enviar um recurso?',
    subtitle:
      'Se você acredita que a decisão está incorreta, envie uma solicitação para que seja revisada.',
    cta: 'Enviar recurso',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'O que são os Community Standards da Meta?',
        answer:
          'Os Community Standards definem quais conteúdos e comportamentos são permitidos no Facebook. A Meta aplica esses padrões para ajudar a manter um ambiente seguro para os usuários.',
      },
      {
        question: 'Como posso recorrer desta decisão?',
        answer:
          'Se você acredita que sua Página foi identificada incorretamente como em violação dos Community Standards, preencha o formulário Detalhes do recurso e envie sua solicitação. Ela será analisada conforme a política vigente.',
      },
      {
        question: 'Quais informações preciso fornecer?',
        answer:
          'Você precisará fornecer dados sobre o administrador da Página, e-mail de contato, nome da Página e informações de verificação de identidade conforme solicitado no formulário.',
      },
      {
        question: 'Quanto tempo leva a revisão?',
        answer:
          'Os prazos de revisão podem variar conforme o caso. Você receberá uma notificação no Facebook quando a revisão for concluída.',
      },
      {
        question: 'O que acontece após enviar um recurso?',
        answer:
          'Sua solicitação será analisada conforme os Community Standards. O resultado será comunicado pelo Facebook após a conclusão da revisão.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Tecnologias Meta',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'WhatsApp' },
        ],
      },
      {
        title: 'Ferramentas',
        links: [
          { label: 'Meta Business Suite' },
          { label: 'Ads Manager' },
        ],
      },
      {
        title: 'Suporte',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
