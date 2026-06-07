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
    ctaAria: 'Enviar recurso — solicitar revisão da decisão sobre a sua Página',
  },
  hero: {
    title: 'A sua Página pode ter violado as Community Standards',
    lead:
      'Após uma revisão recente, a sua Página do Facebook foi identificada como potencialmente em violação das Community Standards. Se acredita que este resultado está incorreto, pode enviar um recurso para solicitar uma revisão.',
    eligibility:
      'Este aviso é emitido nos termos dos princípios de conteúdo para editores do Facebook e aplica-se apenas a uma Página que você administra.',
    creatorPrefix: 'Saiba mais sobre',
    creatorLink: 'Meta Community Standards',
    cta: 'Enviar recurso',
    badgeAlt: 'Logótipo do Facebook',
  },
  benefits: {
    title: 'Sobre este aviso',
    subtitle:
      'A Meta analisa o conteúdo das Páginas com base nas Community Standards e nos princípios de distribuição de conteúdo para reduzir possíveis danos à comunidade.',
    learnMore: 'Saiba mais',
    items: [
      {
        title: 'Sinais de possível violação',
        description:
          'Os sistemas da Meta podem identificar conteúdo como potencialmente em violação antes de uma determinação final. Este aviso reflete uma fase de avaliação inicial, não uma decisão definitiva.',
      },
      {
        title: 'Conteúdo limítrofe',
        description:
          'Alguns conteúdos podem não violar literalmente as Community Standards, mas podem ser controversos ou reduzir a qualidade da experiência. A Meta pode limitar a distribuição para proteger a comunidade.',
      },
      {
        title: 'Princípios de distribuição de conteúdo',
        description:
          'O Facebook prioriza fontes autênticas e conteúdo em conformidade com as políticas. As decisões de distribuição são sempre avaliadas com base nas Community Standards atuais.',
      },
      {
        title: 'Revisão automatizada e especializada',
        description:
          'O processo combina deteção automatizada com avaliação por equipas de revisão de políticas, com base no contexto específico da sua Página.',
      },
      {
        title: 'Verificação de identidade quando necessário',
        description:
          'Para conteúdo com distribuição excecionalmente elevada, a Meta pode exigir verificação de identidade antes de prosseguir. O processo de recurso pode incluir este passo.',
      },
      {
        title: 'Direito de recurso',
        description:
          'Administradores da Página ou representantes autorizados podem submeter um pedido de revisão se acreditarem que o resultado inicial está incorreto.',
      },
    ],
  },
  steps: {
    title: 'Passos para enviar um recurso',
    subtitle:
      'Conclua os três passos por ordem. Tempo estimado: aproximadamente 5–10 minutos.',
    items: [
      {
        title: 'Rever o conteúdo sinalizado.',
        description:
          'Compare o aviso com as publicações ou atividade relacionada na sua Página. Consulte as Community Standards se precisar de esclarecer a política aplicada.',
      },
      {
        title: 'Preencher o formulário e verificar a identidade.',
        description:
          'Forneça dados do administrador e de contacto, além de uma nota explicativa (se aplicável). Verifique a sua conta do Facebook associada antes de enviar.',
      },
      {
        title: 'Acompanhar o estado no Facebook.',
        description:
          'Após o envio, recebe confirmação e atualizações através das notificações do Facebook. A referência do pedido ajuda se precisar de suporte.',
      },
    ],
  },
  testimonials: {
    title: 'Recomendações do Help Center',
    prevAria: 'Item anterior',
    nextAria: 'Item seguinte',
    items: [
      {
        quote:
          'Antes de recorrer, reveja as Community Standards e os princípios para editores para compreender as políticas que a Meta aplica à sua Página.',
        author: 'Meta Business Help Center',
        role: 'Políticas de conteúdo',
      },
      {
        quote:
          'No formulário de recurso, descreva brevemente o contexto do conteúdo sinalizado e porque acredita que a sua Página está em conformidade — informações específicas ajudam os revisores a avaliar o seu caso com maior precisão.',
        author: 'Meta Business Help Center',
        role: 'Orientação de envio',
      },
      {
        quote:
          'Não envie pedidos duplicados para o mesmo problema. Cada pedido é processado por ordem de receção e uma vez por sinalização.',
        author: 'Meta Business Help Center',
        role: 'Política de processamento',
      },
    ],
  },
  finalCta: {
    title: 'Pronto para enviar o seu recurso?',
    subtitle:
      'O formulário Appeal details requer informações do administrador e verificação de identidade. Inicie sessão no Facebook antes de começar.',
    cta: 'Enviar recurso',
  },
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'O que são as Meta Community Standards?',
        answer:
          'Regras sobre conteúdo e comportamento permitidos no Facebook, abrangendo segurança, autenticidade, privacidade e outras áreas. A Meta atualiza e publica-as nas suas páginas de políticas.',
      },
      {
        question: 'Porque foi a minha Página sinalizada se não tenho a certeza de que violou uma política?',
        answer:
          'Os sistemas da Meta podem detetar conteúdo potencialmente em violação antes de uma conclusão final. O aviso reflete uma fase de avaliação inicial; um recurso permite que as equipas de revisão reavaliem o contexto específico da sua Página.',
      },
      {
        question: 'O que é «conteúdo limítrofe»?',
        answer:
          'Conteúdo que não viola literalmente as Community Standards, mas pode ser controverso, sensacionalista ou reduzir a qualidade da experiência. A Meta pode limitar a distribuição desse conteúdo para proteger a comunidade.',
      },
      {
        question: 'Quem pode enviar um recurso?',
        answer:
          'Administradores da Página ou representantes autorizados da organização proprietária da Página. Deve verificar a conta do Facebook associada ao enviar o formulário.',
      },
      {
        question: 'O que devo preparar?',
        answer:
          'Nome completo do administrador, e-mail de contacto, e-mail empresarial (se aplicável), nome da Página, número de telefone e breve descrição do conteúdo sinalizado. Informações inconsistentes ou não verificáveis podem impedir o processamento.',
      },
      {
        question: 'Quanto tempo demora a revisão e que resultados são possíveis?',
        answer:
          'Normalmente 3–7 dias úteis, possivelmente mais se forem necessárias informações adicionais. Os resultados podem incluir aceitação do recurso, manutenção da decisão ou pedido de mais informações — tudo comunicado através do Facebook.',
      },
      {
        question: 'Como são utilizadas as minhas informações?',
        answer:
          'Apenas para processar o seu recurso e verificar direitos administrativos, nos termos da Política de Privacidade e dos Termos da Meta. A Meta não vende os seus dados pessoais.',
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
