import type { LandingStrings } from './types'

export const ptLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Centro de Transparência',
    nav: [
      { label: 'Políticas' },
      { label: 'Aplicação' },
      { label: 'Denúncias' },
      { label: 'Suporte' },
    ],
    loginCta: 'Entrar com o Facebook',
    loginAria: 'Entrar com o Facebook para gerenciar sua Página',
    cta: 'Enviar recurso',
    ctaAria: 'Enviar recurso — solicitar revisão da decisão sobre sua Página',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Centro de Transparência' },
      { label: 'Políticas' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Tópicos das Community Standards',
    sidebarSection: 'Políticas',
    sidebarLinks: [
      { label: 'Coordenação de danos e promoção do crime' },
      { label: 'Organizações e indivíduos perigosos' },
      { label: 'Fraude, golpes e práticas enganosas' },
      { label: 'Bens e serviços restritos' },
      { label: 'Exploração sexual infantil, abuso e nudez' },
      { label: 'Conteúdo violento e gráfico' },
    ],
  },
  hero: {
    title: 'Sua Página pode ter violado as Community Standards',
    lead:
      'As Community Standards descrevem o que é e o que não é permitido no Facebook, Instagram, Messenger e Threads. Após uma revisão recente, sua Página foi identificada como potencialmente não conforme com esses padrões. Se você acredita que este resultado está incorreto, pode enviar um recurso para solicitar uma revisão.',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      'Esses padrões são baseados no feedback das pessoas e no conselho de especialistas em tecnologia, segurança pública e direitos humanos. Este aviso se aplica apenas a uma Página que você administra.',
    creatorPrefix: 'Consulte o documento oficial em',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Enviar recurso',
    badgeAlt: 'Logotipo da Meta',
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
    title: 'Passos para enviar um recurso',
    subtitle:
      'Antes de enviar, compare o conteúdo sinalizado com as Community Standards no Transparency Center. Tempo estimado para preencher o formulário: aproximadamente 5–10 minutos.',
    items: [
      {
        title: 'Revise a política aplicável.',
        description:
          'Leia a seção de política relevante no Transparency Center — cada uma inclui uma Policy Rationale e regras específicas. Compare com as publicações ou atividade sinalizadas em sua Página.',
      },
      {
        title: 'Preencha o formulário e verifique a identidade.',
        description:
          'Forneça dados do administrador e de contato, além do contexto (se necessário). Verifique sua conta do Facebook vinculada antes de enviar.',
      },
      {
        title: 'Acompanhe o resultado no Facebook.',
        description:
          'Após o envio, você recebe confirmação via notificações do Facebook. A revisão geralmente leva 3–7 dias úteis. A referência da solicitação ajuda se precisar de suporte.',
      },
    ],
  },
  testimonials: {
    title: 'Referência do Transparency Center',
    prevAria: 'Item anterior',
    nextAria: 'Próximo item',
    items: [
      {
        quote:
          'Esses padrões são baseados no feedback das pessoas e no conselho de especialistas em áreas como tecnologia, segurança pública e direitos humanos — para garantir que a voz de todos seja valorizada.',
        author: 'Meta Transparency Center',
        role: 'Introdução',
      },
      {
        quote:
          'Nossas Community Standards se aplicam a todas as pessoas, em todo o mundo, e a todos os tipos de conteúdo, incluindo conteúdo gerado por IA.',
        author: 'Meta Transparency Center',
        role: 'Escopo',
      },
      {
        quote:
          'A versão em inglês dos EUA das Community Standards reflete o conjunto de políticas mais atualizado e deve ser usada como documento principal.',
        author: 'Meta Transparency Center',
        role: 'Documento oficial',
      },
    ],
  },
  finalCta: {
    title: 'Enviar recurso',
    subtitle:
      'Se, após ler as Community Standards, você acredita que sua Página cumpre a política, envie o formulário com dados do administrador e verificação de identidade.',
    cta: 'Enviar recurso',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'O que as Community Standards cobrem?',
        answer:
          'As Community Standards descrevem o que é e o que não é permitido no Facebook, Instagram, Messenger e Threads. O documento completo é publicado no Meta Transparency Center.',
      },
      {
        question: 'Qual versão é a referência oficial?',
        answer:
          'Segundo o Transparency Center, a versão em inglês dos EUA reflete o conjunto de políticas mais atualizado e deve ser usada como documento principal.',
      },
      {
        question: 'Quais valores orientam a Meta ao limitar conteúdo?',
        answer:
          'Quando a Meta limita a expressão, faz isso a serviço da autenticidade, segurança, privacidade ou dignidade — os quatro valores fundamentais indicados nas Community Standards.',
      },
      {
        question: 'Por que minha Página foi sinalizada se não tenho certeza de que violou a política?',
        answer:
          'Os sistemas da Meta podem detectar conteúdo potencialmente infrator antes de uma conclusão final. O aviso reflete uma fase de avaliação inicial; um recurso permite que as equipes de revisão reavaliem o contexto específico de sua Página.',
      },
      {
        question: 'Quem pode enviar um recurso?',
        answer:
          'Administradores da Página ou representantes autorizados da organização proprietária da Página. Você deve verificar a conta do Facebook vinculada ao enviar o formulário.',
      },
      {
        question: 'Quanto tempo leva a revisão e quais resultados são possíveis?',
        answer:
          'Normalmente 3–7 dias úteis, possivelmente mais se forem necessárias informações adicionais. Os resultados podem incluir aceitação do recurso, confirmação da decisão ou solicitação de mais informações — tudo comunicado via Facebook.',
      },
      {
        question: 'Como minhas informações são usadas?',
        answer:
          'Apenas para processar seu recurso e verificar direitos administrativos, conforme a Política de Privacidade e os Termos da Meta.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Tecnologias da Meta',
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
        title: 'Suporte',
        links: [
          { label: 'Central de Ajuda' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
