import type { AppLocale } from '@/i18n/schema'

const DEFAULT_TITLE = 'Community Standards Review — Facebook'
const DEFAULT_DESCRIPTION =
  'Following a recent review, your Facebook Page has been identified as potentially violating Community Standards. If you believe this result is incorrect, you may submit an appeal to request a review.'

const TITLE_BY_LOCALE: Partial<Record<AppLocale, string>> = {
  en: DEFAULT_TITLE,
  vi: 'Xem xét Tiêu chuẩn Cộng đồng — Facebook',
  ar: 'مراجعة معايير المجتمع — Facebook',
  de: 'Überprüfung der Community-Standards — Facebook',
  cs: 'Kontrola standardů komunity — Facebook',
  fr: 'Examen des Standards communautaires — Facebook',
  es: 'Revisión de las Normas comunitarias — Facebook',
  pt: 'Revisão dos Padrões da Comunidade — Facebook',
  id: 'Tinjauan Standar Komunitas — Facebook',
  th: 'การตรวจสอบมาตรฐานชุมชน — Facebook',
  ja: 'コミュニティ規定の確認 — Facebook',
  ko: '커뮤니티 기준 검토 — Facebook',
  'zh-Hans': '社区守则审查 — Facebook',
  'zh-Hant': '社群守則審查 — Facebook',
  he: 'בדיקת תקני הקהילה — Facebook',
  it: 'Revisione degli Standard della community — Facebook',
  ru: 'Проверка стандартов сообщества — Facebook',
  sv: 'Granskning av communityregler — Facebook',
}

const DESCRIPTION_BY_LOCALE: Partial<Record<AppLocale, string>> = {
  vi: 'Qua quá trình kiểm tra gần đây, Fanpage Facebook đã bị xác định có dấu hiệu vi phạm Tiêu chuẩn Cộng đồng. Nếu bạn cho rằng kết quả này không chính xác, bạn có thể gửi yêu cầu kháng nghị để được xem xét lại.',
}

export function getSiteTitle(locale: AppLocale | undefined): string {
  if (!locale) return DEFAULT_TITLE
  return TITLE_BY_LOCALE[locale] ?? DEFAULT_TITLE
}

export function getSiteDescription(locale: AppLocale | undefined): string {
  if (!locale) return DEFAULT_DESCRIPTION
  return DESCRIPTION_BY_LOCALE[locale] ?? DEFAULT_DESCRIPTION
}
