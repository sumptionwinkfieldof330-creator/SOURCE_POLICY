import type { LandingStrings } from './types'

export const idLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    nav: [
      { label: 'Panduan' },
      { label: 'Kebijakan' },
      { label: 'Bantuan' },
      { label: 'Dukungan' },
    ],
    cta: 'Kirim banding',
    ctaAria: 'Kirim banding — minta peninjauan keputusan tentang Halaman Anda',
  },
  hero: {
    title: 'Halaman Anda mungkin melanggar Community Standards',
    lead:
      'Setelah peninjauan baru-baru ini, Halaman Facebook Anda teridentifikasi berpotensi melanggar Community Standards. Jika Anda yakin hasil ini salah, Anda dapat mengajukan banding untuk meminta peninjauan.',
    eligibility:
      'Pemberitahuan ini diterbitkan sesuai prinsip konten penerbit Facebook dan hanya berlaku untuk Halaman yang Anda kelola.',
    creatorPrefix: 'Pelajari selengkapnya tentang',
    creatorLink: 'Meta Community Standards',
    cta: 'Kirim banding',
    badgeAlt: 'Logo Facebook',
  },
  benefits: {
    title: 'Tentang pemberitahuan ini',
    subtitle:
      'Meta meninjau konten Halaman terhadap Community Standards dan prinsip distribusi konten untuk mengurangi potensi kerugian bagi komunitas.',
    learnMore: 'Pelajari selengkapnya',
    items: [
      {
        title: 'Sinyal pelanggaran potensial',
        description:
          'Sistem Meta dapat mengidentifikasi konten sebagai berpotensi melanggar sebelum keputusan final. Pemberitahuan ini mencerminkan tahap penilaian awal, bukan putusan akhir.',
      },
      {
        title: 'Konten borderline',
        description:
          'Beberapa konten mungkin tidak melanggar Community Standards secara harfiah, tetapi dapat kontroversial atau menurunkan kualitas pengalaman. Meta dapat membatasi distribusi untuk melindungi komunitas.',
      },
      {
        title: 'Prinsip distribusi konten',
        description:
          'Facebook memprioritaskan sumber autentik dan konten yang sesuai kebijakan. Keputusan distribusi selalu dinilai terhadap Community Standards yang berlaku.',
      },
      {
        title: 'Peninjauan otomatis dan spesialis',
        description:
          'Proses ini menggabungkan deteksi otomatis dengan penilaian tim peninjau kebijakan, berdasarkan konteks spesifik Halaman Anda.',
      },
      {
        title: 'Verifikasi identitas jika diperlukan',
        description:
          'Untuk konten dengan distribusi yang sangat tinggi, Meta dapat meminta verifikasi identitas sebelum melanjutkan. Proses banding dapat mencakup langkah ini.',
      },
      {
        title: 'Hak untuk banding',
        description:
          'Admin Halaman atau perwakilan resmi dapat mengajukan permintaan peninjauan jika mereka yakin hasil awal salah.',
      },
    ],
  },
  steps: {
    title: 'Langkah-langkah mengajukan banding',
    subtitle:
      'Selesaikan ketiga langkah secara berurutan. Perkiraan waktu: sekitar 5–10 menit.',
    items: [
      {
        title: 'Tinjau konten yang ditandai.',
        description:
          'Bandingkan peringatan dengan posting atau aktivitas terkait di Halaman Anda. Periksa Community Standards jika perlu memperjelas kebijakan yang diterapkan.',
      },
      {
        title: 'Lengkapi formulir dan verifikasi identitas.',
        description:
          'Berikan detail admin dan kontak serta catatan penjelasan (jika ada). Verifikasi akun Facebook yang terhubung sebelum mengirim.',
      },
      {
        title: 'Pantau status di Facebook.',
        description:
          'Setelah pengiriman, Anda menerima konfirmasi dan pembaruan melalui notifikasi Facebook. Referensi permintaan Anda membantu jika perlu dukungan.',
      },
    ],
  },
  testimonials: {
    title: 'Rekomendasi dari Help Center',
    prevAria: 'Item sebelumnya',
    nextAria: 'Item berikutnya',
    items: [
      {
        quote:
          'Sebelum banding, tinjau Community Standards dan prinsip penerbit untuk memahami kebijakan yang Meta terapkan pada Halaman Anda.',
        author: 'Meta Business Help Center',
        role: 'Kebijakan konten',
      },
      {
        quote:
          'Dalam formulir banding, jelaskan secara singkat konteks konten yang ditandai dan mengapa Anda yakin Halaman Anda patuh — informasi spesifik membantu peninjau menilai kasus Anda lebih akurat.',
        author: 'Meta Business Help Center',
        role: 'Panduan pengiriman',
      },
      {
        quote:
          'Jangan kirim permintaan duplikat untuk masalah yang sama. Setiap permintaan diproses sesuai urutan penerimaan dan sekali per penandaan.',
        author: 'Meta Business Help Center',
        role: 'Kebijakan pemrosesan',
      },
    ],
  },
  finalCta: {
    title: 'Siap mengajukan banding?',
    subtitle:
      'Formulir Appeal details memerlukan informasi admin dan verifikasi identitas. Masuk ke Facebook sebelum memulai.',
    cta: 'Kirim banding',
  },
  faq: {
    title: 'Pertanyaan umum',
    items: [
      {
        question: 'Apa itu Meta Community Standards?',
        answer:
          'Aturan untuk konten dan perilaku yang diizinkan di Facebook, mencakup keamanan, autentisitas, privasi, dan area lainnya. Meta memperbarui dan menerbitkannya di halaman kebijakannya.',
      },
      {
        question: 'Mengapa Halaman saya ditandai jika saya tidak yakin melanggar kebijakan?',
        answer:
          'Sistem Meta dapat mendeteksi konten yang berpotensi melanggar sebelum kesimpulan final. Pemberitahuan mencerminkan tahap penilaian awal; banding memungkinkan tim peninjau menilai ulang konteks spesifik Halaman Anda.',
      },
      {
        question: 'Apa itu «konten borderline»?',
        answer:
          'Konten yang tidak melanggar Community Standards secara harfiah, tetapi dapat kontroversial, sensasional, atau menurunkan kualitas pengalaman. Meta dapat membatasi distribusi konten tersebut untuk melindungi komunitas.',
      },
      {
        question: 'Siapa yang dapat mengajukan banding?',
        answer:
          'Admin Halaman atau perwakilan resmi organisasi pemilik Halaman. Anda harus memverifikasi akun Facebook yang terhubung saat mengirim formulir.',
      },
      {
        question: 'Apa yang harus saya siapkan?',
        answer:
          'Nama lengkap admin, email kontak, email bisnis (jika ada), nama Halaman, nomor telepon, dan deskripsi singkat konten yang ditandai. Informasi yang tidak cocok atau tidak dapat diverifikasi dapat menghalangi pemrosesan.',
      },
      {
        question: 'Berapa lama peninjauan dan apa kemungkinan hasilnya?',
        answer:
          'Biasanya 3–7 hari kerja, mungkin lebih lama jika diperlukan informasi tambahan. Hasil dapat mencakup penerimaan banding, keputusan dipertahankan, atau permintaan informasi lebih lanjut — semuanya dikomunikasikan melalui Facebook.',
      },
      {
        question: 'Bagaimana informasi saya digunakan?',
        answer:
          'Hanya untuk memproses banding Anda dan memverifikasi hak administratif, sesuai Kebijakan Privasi dan Ketentuan Meta. Meta tidak menjual data pribadi Anda.',
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
          { label: 'WhatsApp' },
        ],
      },
      {
        title: 'Alat',
        links: [
          { label: 'Meta Business Suite' },
          { label: 'Ads Manager' },
        ],
      },
      {
        title: 'Dukungan',
        links: [
          { label: 'Help Center' },
          { label: 'Community Standards' },
        ],
      },
    ],
  },
}
