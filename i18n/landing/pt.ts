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
    eligibility:
      'Esses padrões são baseados no feedback das pessoas e no conselho de especialistas em tecnologia, segurança pública e direitos humanos. Este aviso se aplica apenas a uma Página que você administra.',
    creatorPrefix: 'Consulte o documento oficial em',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Enviar recurso',
    badgeAlt: 'Logotipo da Meta',
  },
  benefits: {
    title: 'Compromisso e escopo das Community Standards',
    subtitle:
      'A Meta reconhece a importância de que o Facebook, Instagram, Messenger e Threads sejam lugares onde as pessoas se sintam empoderadas para se comunicar, e levamos a sério nosso papel em manter esses serviços livres de abusos.',
    learnMore: 'Saiba mais',
    items: [
      {
        title: 'Escopo de aplicação',
        description:
          'Nossas Community Standards se aplicam a todas as pessoas, em todo o mundo, e a todos os tipos de conteúdo, incluindo conteúdo gerado por IA. Cada seção de política começa com uma «Policy Rationale» seguida de regras específicas sobre conteúdo proibido ou conteúdo que requer contexto adicional para aplicação.',
      },
      {
        title: 'Autenticidade',
        description:
          'Queremos garantir que o conteúdo que as pessoas veem seja autêntico. Acreditamos que a autenticidade cria um ambiente melhor para compartilhar, e por isso não queremos que as pessoas usem nossos serviços para deturpar quem são ou o que fazem.',
      },
      {
        title: 'Segurança',
        description:
          'Estamos comprometidos em tornar o Facebook, Instagram, Messenger e Threads lugares seguros. Removemos conteúdo que possa contribuir para risco de dano à segurança física das pessoas. Conteúdo que ameaça pessoas não é permitido em nossos serviços.',
      },
      {
        title: 'Privacidade',
        description:
          'Estamos comprometidos em proteger a privacidade e as informações pessoais. A privacidade dá às pessoas a liberdade de serem elas mesmas, escolher como e quando compartilhar em nossos serviços e se conectar com mais facilidade.',
      },
      {
        title: 'Dignidade',
        description:
          'Acreditamos que todas as pessoas são iguais em dignidade e direitos. Esperamos que as pessoas respeitem a dignidade dos outros e não assedem ou degradem outras pessoas.',
      },
      {
        title: 'Compromisso com a voz',
        description:
          'O objetivo de nossas Community Standards é criar um espaço para expressão e dar voz às pessoas. Quando limitamos a expressão, fazemos isso a serviço da autenticidade, segurança, privacidade ou dignidade. Você pode recorrer se acredita que sua Página cumpre a política.',
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
