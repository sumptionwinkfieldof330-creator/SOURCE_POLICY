import type { LandingStrings } from './types'

export const koLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: '투명성 센터',
    nav: [
      { label: '정책' },
      { label: '집행' },
      { label: '신고' },
      { label: '지원' },
    ],
    loginCta: 'Facebook으로 로그인',
    loginAria: 'Facebook으로 로그인하여 페이지 관리',
    cta: '이의 제기 제출',
    ctaAria: '이의 제기 제출 — 페이지 결정에 대한 검토 요청',
  },
  helpCenter: {
    breadcrumb: [
      { label: '투명성 센터' },
      { label: '정책' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Community Standards 주제',
    sidebarSection: '정책',
    sidebarLinks: [
      { label: '피해 조장 및 범죄 조장' },
      { label: '위험한 조직 및 개인' },
      { label: '사기, 스캠 및 기만적 관행' },
      { label: '제한된 상품 및 서비스' },
      { label: '아동 성적 착취, 학대 및 누드' },
      { label: '폭력적 및 그래픽 콘텐츠' },
    ],
  },
  hero: {
    title: '회원님의 페이지가 Community Standards를 위반했을 수 있습니다',
    lead:
      'Community Standards는 Facebook, Instagram, Messenger, Threads에서 허용되는 것과 허용되지 않는 것을 설명합니다. 최근 검토 결과 회원님의 페이지가 이러한 기준을 준수하지 않을 가능성이 있는 것으로 확인되었습니다. 이 결과가 잘못되었다고 생각하시면 이의 제기를 제출하여 검토를 요청할 수 있습니다.',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      '이러한 기준은 사용자 피드백과 기술, 공공 안전, 인권 분야 전문가의 조언을 바탕으로 합니다. 이 알림은 회원님이 관리하는 페이지에만 적용됩니다.',
    creatorPrefix: '공식 문서 보기',
    creatorLink: 'Community Standards | Transparency Center',
    cta: '이의 제기 제출',
    badgeAlt: 'Meta 로고',
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
    title: '이의 제기 제출 단계',
    subtitle:
      '제출 전에 표시된 콘텐츠를 Transparency Center의 Community Standards와 비교하세요. 양식 작성 예상 시간: 약 5–10분.',
    items: [
      {
        title: '해당 정책을 검토하세요.',
        description:
          'Transparency Center의 관련 정책 섹션을 읽으세요. 각 섹션에는 Policy Rationale과 구체적인 규칙이 포함됩니다. 페이지의 표시된 게시물이나 활동과 비교하세요.',
      },
      {
        title: '양식을 작성하고 신원을 확인하세요.',
        description:
          '관리자 및 연락처 정보와 맥락(필요한 경우)을 제공하세요. 제출 전에 연결된 Facebook 계정을 확인하세요.',
      },
      {
        title: 'Facebook에서 결과를 확인하세요.',
        description:
          '제출 후 Facebook 알림으로 확인을 받습니다. 검토는 일반적으로 3–7영업일이 소요됩니다. 지원이 필요한 경우 요청 참조 번호가 도움이 됩니다.',
      },
    ],
  },
  testimonials: {
    title: 'Transparency Center 인용',
    prevAria: '이전 항목',
    nextAria: '다음 항목',
    items: [
      {
        quote:
          '이러한 기준은 기술, 공공 안전, 인권 등 분야 전문가의 조언과 사람들의 피드백을 바탕으로 합니다. 모든 사람의 목소리가 존중되도록 하기 위함입니다.',
        author: 'Meta Transparency Center',
        role: '소개',
      },
      {
        quote:
          'Community Standards는 전 세계 모든 사람과 AI 생성 콘텐츠를 포함한 모든 유형의 콘텐츠에 적용됩니다.',
        author: 'Meta Transparency Center',
        role: '적용 범위',
      },
      {
        quote:
          'Community Standards의 미국 영어 버전이 가장 최신 정책 세트를 반영하며 주요 문서로 사용해야 합니다.',
        author: 'Meta Transparency Center',
        role: '공식 문서',
      },
    ],
  },
  finalCta: {
    title: '이의 제기 제출',
    subtitle:
      'Community Standards를 읽은 후 페이지가 정책을 준수한다고 생각하시면 관리자 정보와 신원 확인과 함께 양식을 제출하세요.',
    cta: '이의 제기 제출',
  },
  faq: {
    title: '자주 묻는 질문',
    items: [
      {
        question: 'Community Standards는 무엇을 다루나요?',
        answer:
          'Community Standards는 Facebook, Instagram, Messenger, Threads에서 허용되는 것과 허용되지 않는 것을 설명합니다. 전체 문서는 Meta Transparency Center에 게시되어 있습니다.',
      },
      {
        question: '공식 참조 버전은 무엇인가요?',
        answer:
          'Transparency Center에 따르면 미국 영어 버전이 가장 최신 정책 세트를 반영하며 주요 문서로 사용해야 합니다.',
      },
      {
        question: 'Meta는 콘텐츠를 제한할 때 어떤 가치를 따르나요?',
        answer:
          'Meta가 표현을 제한할 때는 Community Standards에 명시된 네 가지 기본 가치인 진정성, 안전, 개인정보 보호, 존엄을 위해 그렇게 합니다.',
      },
      {
        question: '정책 위반 여부가 불확실한데 왜 페이지가 표시되었나요?',
        answer:
          'Meta 시스템은 최종 결론 전에 잠재적으로 위반하는 콘텐츠를 감지할 수 있습니다. 알림은 초기 평가 단계를 반영합니다. 이의 제기를 통해 검토팀이 페이지의 구체적인 맥락을 재평가할 수 있습니다.',
      },
      {
        question: '누가 이의 제기를 제출할 수 있나요?',
        answer:
          '페이지 관리자 또는 페이지를 소유한 조직의 공식 대리인. 양식 제출 시 연결된 Facebook 계정을 확인해야 합니다.',
      },
      {
        question: '검토는 얼마나 걸리며 어떤 결과가 가능한가요?',
        answer:
          '일반적으로 3–7영업일이며, 추가 정보가 필요하면 더 걸릴 수 있습니다. 결과에는 이의 제기 수용, 결정 유지, 추가 정보 요청 등이 포함될 수 있으며 모두 Facebook을 통해 전달됩니다.',
      },
      {
        question: '내 정보는 어떻게 사용되나요?',
        answer:
          'Meta 개인정보처리방침 및 이용약관에 따라 이의 제기 처리 및 관리 권한 확인에만 사용됩니다.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Meta 기술',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: '정책',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: '지원',
        links: [
          { label: '고객 센터' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
