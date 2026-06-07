import type { LandingStrings } from './types'

export const idLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'Pusat Transparansi',
    nav: [
      { label: 'Transparency Center', type: 'link', href: '#' },
      { label: 'Policies', type: 'menu' },
      { label: 'Enforcement', type: 'menu' },
      { label: 'Security', type: 'menu' },
      { label: 'Features', type: 'menu' },
      { label: 'Governance', type: 'menu' },
      { label: 'Research tools', type: 'menu' },
      { label: 'Reports', type: 'menu' },
    ],
    loginCta: 'Masuk dengan Facebook',
    loginAria: 'Masuk dengan Facebook untuk mengelola Halaman Anda',
    cta: 'Ajukan banding',
    ctaAria: 'Ajukan banding — minta peninjauan keputusan Halaman Anda',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'Home', href: '#' },
      { label: 'Policies', href: '#' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'Topik Community Standards',
    sidebarSection: 'Kebijakan',
    sidebarLinks: [
      { label: 'Mengkoordinasikan Kerugian dan Mempromosikan Kejahatan' },
      { label: 'Organisasi dan Individu Berbahaya' },
      { label: 'Penipuan, Scam, dan Praktik Menyesatkan' },
      { label: 'Barang dan Layanan Terbatas' },
      { label: 'Eksploitasi Seksual, Penyalahgunaan, dan Ketelanjangan Anak' },
      { label: 'Konten Kekerasan dan Grafis' },
    ],
  },
  hero: {
    title: 'Halaman Anda mungkin melanggar Community Standards',
    lead:
      'Community Standards menjelaskan apa yang diizinkan dan tidak diizinkan di Facebook, Instagram, Messenger, dan Threads. Setelah peninjauan baru-baru ini, Halaman Anda teridentifikasi berpotensi tidak mematuhi standar ini. Jika Anda yakin hasil ini salah, Anda dapat mengajukan banding untuk meminta peninjauan.',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      'Standar ini didasarkan pada masukan dari masyarakat dan saran para ahli di bidang teknologi, keamanan publik, dan hak asasi manusia. Pemberitahuan ini hanya berlaku untuk Halaman yang Anda kelola.',
    creatorPrefix: 'Lihat dokumen resmi di',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'Ajukan banding',
    badgeAlt: 'Logo Meta',
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
    title: 'Langkah mengajukan banding',
    subtitle:
      'Sebelum mengajukan, bandingkan konten yang ditandai dengan Community Standards di Transparency Center. Perkiraan waktu mengisi formulir: sekitar 5–10 menit.',
    items: [
      {
        title: 'Tinjau kebijakan yang berlaku.',
        description:
          'Baca bagian kebijakan yang relevan di Transparency Center — masing-masing mencakup Policy Rationale dan aturan spesifik. Bandingkan dengan postingan atau aktivitas yang ditandai di Halaman Anda.',
      },
      {
        title: 'Lengkapi formulir dan verifikasi identitas.',
        description:
          'Berikan detail administrator dan kontak serta konteks (jika diperlukan). Verifikasi akun Facebook yang terhubung sebelum mengirim.',
      },
      {
        title: 'Pantau hasilnya di Facebook.',
        description:
          'Setelah pengiriman, Anda menerima konfirmasi melalui notifikasi Facebook. Peninjauan biasanya memakan waktu 3–7 hari kerja. Referensi permintaan Anda membantu jika memerlukan dukungan.',
      },
    ],
  },
  testimonials: {
    title: 'Referensi dari Transparency Center',
    prevAria: 'Item sebelumnya',
    nextAria: 'Item berikutnya',
    items: [
      {
        quote:
          'Standar ini didasarkan pada masukan dari masyarakat dan saran para ahli di bidang teknologi, keamanan publik, dan hak asasi manusia — untuk memastikan suara setiap orang dihargai.',
        author: 'Meta Transparency Center',
        role: 'Pengantar',
      },
      {
        quote:
          'Community Standards kami berlaku untuk semua orang di seluruh dunia, dan untuk semua jenis konten, termasuk konten yang dihasilkan AI.',
        author: 'Meta Transparency Center',
        role: 'Cakupan',
      },
      {
        quote:
          'Versi bahasa Inggris AS dari Community Standards mencerminkan kumpulan kebijakan paling mutakhir dan harus digunakan sebagai dokumen utama.',
        author: 'Meta Transparency Center',
        role: 'Dokumen resmi',
      },
    ],
  },
  finalCta: {
    title: 'Ajukan banding',
    subtitle:
      'Jika setelah membaca Community Standards Anda yakin Halaman Anda mematuhi kebijakan, kirim formulir dengan detail administrator dan verifikasi identitas.',
    cta: 'Ajukan banding',
  },
  faq: {
    title: 'Pertanyaan umum',
    items: [
      {
        question: 'Apa yang dicakup Community Standards?',
        answer:
          'Community Standards menjelaskan apa yang diizinkan dan tidak diizinkan di Facebook, Instagram, Messenger, dan Threads. Dokumen lengkap dipublikasikan di Meta Transparency Center.',
      },
      {
        question: 'Versi mana yang menjadi referensi resmi?',
        answer:
          'Menurut Transparency Center, versi bahasa Inggris AS mencerminkan kumpulan kebijakan paling mutakhir dan harus digunakan sebagai dokumen utama.',
      },
      {
        question: 'Nilai apa yang memandu Meta saat membatasi konten?',
        answer:
          'Saat Meta membatasi ekspresi, hal itu demi keaslian, keamanan, privasi, atau martabat — empat nilai dasar yang dinyatakan dalam Community Standards.',
      },
      {
        question: 'Mengapa Halaman saya ditandai jika saya tidak yakin melanggar kebijakan?',
        answer:
          'Sistem Meta dapat mendeteksi konten yang berpotensi melanggar sebelum kesimpulan akhir. Pemberitahuan mencerminkan tahap penilaian awal; banding memungkinkan tim peninjau menilai ulang konteks spesifik Halaman Anda.',
      },
      {
        question: 'Siapa yang dapat mengajukan banding?',
        answer:
          'Administrator Halaman atau perwakilan resmi organisasi pemilik Halaman. Anda harus memverifikasi akun Facebook yang terhubung saat mengirim formulir.',
      },
      {
        question: 'Berapa lama peninjauan dan apa kemungkinan hasilnya?',
        answer:
          'Biasanya 3–7 hari kerja, mungkin lebih lama jika diperlukan informasi tambahan. Hasil dapat meliputi penerimaan banding, keputusan dipertahankan, atau permintaan informasi lebih lanjut — semuanya dikomunikasikan melalui Facebook.',
      },
      {
        question: 'Bagaimana informasi saya digunakan?',
        answer:
          'Hanya untuk memproses banding Anda dan memverifikasi hak administratif, sesuai Kebijakan Privasi dan Ketentuan Meta.',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'Teknologi Meta',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'Kebijakan',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: 'Dukungan',
        links: [
          { label: 'Pusat Bantuan' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
