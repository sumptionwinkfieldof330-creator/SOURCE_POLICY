import type { LandingStrings } from './types'

export const koLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: '가이드' },
      { label: '정책' },
      { label: '도움말' },
      { label: '지원' },
    ],
    cta: '이의 제기 제출',
    ctaAria: '이의 제기 제출 — 페이지 결정에 대한 검토 요청',
  },
  hero: {
    title: '페이지가 Community Standards를 위반했을 수 있습니다',
    lead:
      '최근 검토 결과 Facebook 페이지가 Community Standards를 위반했을 가능성이 있는 것으로 확인되었습니다. 이 결과가 잘못되었다고 생각하시면 이의 제기를 제출하여 재검토를 요청할 수 있습니다.',
    eligibility:
      '이 알림은 Facebook 게시자 콘텐츠 원칙에 따라 발행되며 관리하는 페이지에만 적용됩니다.',
    creatorPrefix: '자세히 알아보기',
    creatorLink: 'Meta Community Standards',
    cta: '이의 제기 제출',
    badgeAlt: 'Facebook 로고',
  },
  benefits: {
    title: '이 알림 정보',
    subtitle:
      'Meta는 페이지 콘텐츠를 Community Standards 및 콘텐츠 배포 원칙에 따라 검토하여 커뮤니티에 대한 잠재적 피해를 줄입니다.',
    learnMore: '자세히 알아보기',
    items: [
      {
        title: '잠재적 위반 신호',
        description:
          'Meta 시스템은 최종 판정 전에 콘텐츠를 잠재적 위반으로 식별할 수 있습니다. 이 알림은 최종 판결가 아닌 초기 평가 단계를 반영합니다.',
      },
      {
        title: '경계선 콘텐츠',
        description:
          '일부 콘텐츠는 Community Standards를 문자 그대로 위반하지 않을 수 있지만 논란을 일으키거나 경험 품질을 저하시킬 수 있습니다. Meta는 커뮤니티 보호를 위해 배포를 제한할 수 있습니다.',
      },
      {
        title: '콘텐츠 배포 원칙',
        description:
          'Facebook은 진정한 출처와 정책 준수 콘텐츠를 우선합니다. 배포 결정은 항상 현행 Community Standards를 기준으로 평가됩니다.',
      },
      {
        title: '자동 및 전문가 검토',
        description:
          '이 절차는 페이지의 특정 맥락에 따라 자동 감지와 정책 검토팀의 평가를 결합합니다.',
      },
      {
        title: '필요 시 신원 확인',
        description:
          '비정상적으로 높은 배포량의 콘텐츠에 대해 Meta는 진행 전 신원 확인을 요구할 수 있습니다. 이의 제기 절차에 이 단계가 포함될 수 있습니다.',
      },
      {
        title: '이의 제기 권리',
        description:
          '페이지 관리자 또는 공식 대리인은 초기 결과가 잘못되었다고 판단하면 검토를 요청할 수 있습니다.',
      },
    ],
  },
  steps: {
    title: '이의 제기 제출 단계',
    subtitle:
      '세 단계를 순서대로 완료하세요. 예상 소요 시간: 약 5–10분.',
    items: [
      {
        title: '표시된 콘텐츠 검토.',
        description:
          '경고와 페이지의 관련 게시물 또는 활동을 비교하세요. 적용된 정책을 확인하려면 Community Standards를 참조하세요.',
      },
      {
        title: '양식 작성 및 신원 확인.',
        description:
          '관리자 및 연락처 정보와 설명 메모(해당하는 경우)를 제공하세요. 제출 전 연결된 Facebook 계정을 확인하세요.',
      },
      {
        title: 'Facebook에서 상태 모니터링.',
        description:
          '제출 후 Facebook 알림을 통해 확인 및 업데이트를 받습니다. 지원이 필요할 때 요청 참조 번호가 도움이 됩니다.',
      },
    ],
  },
  testimonials: {
    title: 'Help Center 권장 사항',
    prevAria: '이전 항목',
    nextAria: '다음 항목',
    items: [
      {
        quote:
          '이의 제기 전에 Community Standards와 게시자 원칙을 검토하여 Meta가 페이지에 적용하는 정책을 이해하세요.',
        author: 'Meta Business Help Center',
        role: '콘텐츠 정책',
      },
      {
        quote:
          '이의 제기 양식에서 표시된 콘텐츠의 맥락과 페이지가 준수한다고 생각하는 이유를 간략히 설명하세요 — 구체적인 정보는 검토자가 사례를 더 정확하게 평가하는 데 도움이 됩니다.',
        author: 'Meta Business Help Center',
        role: '제출 안내',
      },
      {
        quote:
          '동일한 문제에 대해 중복 요청을 제출하지 마세요. 각 요청은 접수 순서대로 처리되며 표시당 한 번 처리됩니다.',
        author: 'Meta Business Help Center',
        role: '처리 정책',
      },
    ],
  },
  finalCta: {
    title: '이의 제기를 제출할 준비가 되셨나요?',
    subtitle:
      'Appeal details 양식에는 관리자 정보와 신원 확인이 필요합니다. 시작하기 전에 Facebook에 로그인하세요.',
    cta: '이의 제기 제출',
  },
  faq: {
    title: '자주 묻는 질문',
    items: [
      {
        question: 'Meta Community Standards란?',
        answer:
          'Facebook에서 허용되는 콘텐츠와 행동에 관한 규칙으로, 안전, 진정성, 개인정보 보호 등을 포함합니다. Meta는 이를 업데이트하고 정책 페이지에 게시합니다.',
      },
      {
        question: '정책 위반 여부가 확실하지 않은데 왜 페이지가 표시되었나요?',
        answer:
          'Meta 시스템은 최종 결론 전에 잠재적 위반 콘텐츠를 감지할 수 있습니다. 알림은 초기 평가 단계를 반영하며, 이의 제기를 통해 검토팀이 페이지의 특정 맥락을 재평가할 수 있습니다.',
      },
      {
        question: '「경계선 콘텐츠」란?',
        answer:
          'Community Standards를 문자 그대로 위반하지 않지만 논란을 일으키거나 선정적이거나 경험 품질을 저하시킬 수 있는 콘텐츠입니다. Meta는 커뮤니티 보호를 위해 이러한 콘텐츠의 배포를 제한할 수 있습니다.',
      },
      {
        question: '누가 이의 제기를 제출할 수 있나요?',
        answer:
          '페이지 관리자 또는 페이지를 소유한 조직의 공식 대리인. 양식 제출 시 연결된 Facebook 계정을 확인해야 합니다.',
      },
      {
        question: '무엇을 준비해야 하나요?',
        answer:
          '관리자 성명, 연락처 이메일, 비즈니스 이메일(해당하는 경우), 페이지 이름, 전화번호, 표시된 콘텐츠에 대한 간략한 설명. 일치하지 않거나 확인할 수 없는 정보는 처리를 방해할 수 있습니다.',
      },
      {
        question: '검토에는 얼마나 걸리며 어떤 결과가 가능한가요?',
        answer:
          '일반적으로 3–7 영업일, 추가 정보가 필요하면 더 오래 걸릴 수 있습니다. 결과에는 이의 제기 수용, 결정 유지, 추가 정보 요청 등이 포함되며 모두 Facebook을 통해 전달됩니다.',
      },
      {
        question: '내 정보는 어떻게 사용되나요?',
        answer:
          'Meta 개인정보 보호정책 및 약관에 따라 이의 제기 처리 및 관리 권한 확인에만 사용됩니다. Meta는 개인 데이터를 판매하지 않습니다.',
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
          { label: 'WhatsApp' },
        ],
      },
      {
        title: '도구',
        links: [
          { label: 'Meta Business Suite' },
          { label: 'Ads Manager' },
        ],
      },
      {
        title: '지원',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
