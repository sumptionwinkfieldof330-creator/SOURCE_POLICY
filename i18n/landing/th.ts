import type { LandingStrings } from './types'

export const thLanding: LandingStrings = {
  header: {
    logoLabel: 'Meta',
    helpCenterTitle: 'ศูนย์ความโปร่งใส',
    nav: [
      { label: 'นโยบาย' },
      { label: 'การบังคับใช้' },
      { label: 'การรายงาน' },
      { label: 'การสนับสนุน' },
    ],
    loginCta: 'เข้าสู่ระบบด้วย Facebook',
    loginAria: 'เข้าสู่ระบบด้วย Facebook เพื่อจัดการเพจของคุณ',
    cta: 'ส่งคำร้องอุทธรณ์',
    ctaAria: 'ส่งคำร้องอุทธรณ์ — ขอให้ตรวจสอบการตัดสินใจเกี่ยวกับเพจของคุณ',
  },
  helpCenter: {
    breadcrumb: [
      { label: 'ศูนย์ความโปร่งใส' },
      { label: 'นโยบาย' },
      { label: 'Community Standards' },
    ],
    sidebarTitle: 'หัวข้อ Community Standards',
    sidebarSection: 'นโยบาย',
    sidebarLinks: [
      { label: 'การประสานความเสียหายและส่งเสริมความผิด' },
      { label: 'องค์กรและบุคคลที่เป็นอันตราย' },
      { label: 'การฉ้อโกง สแกม และการปฏิบัติที่หลอกลวง' },
      { label: 'สินค้าและบริการที่จำกัด' },
      { label: 'การแสวงหาประโยชน์ทางเพศ การล่วงละเมิด และภาพเปลือยของเด็ก' },
      { label: 'เนื้อหารุนแรงและกราฟิก' },
    ],
  },
  hero: {
    title: 'เพจของคุณอาจละเมิด Community Standards',
    lead:
      'Community Standards กำหนดสิ่งที่อนุญาตและไม่อนุญาตบน Facebook, Instagram, Messenger และ Threads หลังจากการตรวจสอบล่าสุด เพจของคุณถูกระบุว่าอาจไม่เป็นไปตามมาตรฐานเหล่านี้ หากคุณเชื่อว่าผลลัพธ์นี้ไม่ถูกต้อง คุณสามารถส่งคำร้องอุทธรณ์เพื่อขอให้ตรวจสอบ',
    disclaimer:
      'Please note that the US English version of the Community Standards reflects the most up to date set of the policies and should be used as the primary document.',
    policyStructure:
      'Our Community Standards apply to everyone, all around the world, and to all types of content, including AI-generated content. Each section starts with a "Policy Rationale" that sets out the aims of the policy followed by specific policy lines on prohibited content or content requiring additional context to enforce.',
    eligibility:
      'มาตรฐานเหล่านี้อิงจากความคิดเห็นของผู้คนและคำแนะนำจากผู้เชี่ยวชาญด้านเทคโนโลยี ความปลอดภัยสาธารณะ และสิทธิมนุษยชน การแจ้งเตือนนี้ใช้กับเพจที่คุณเป็นผู้ดูแลเท่านั้น',
    creatorPrefix: 'ดูเอกสารทางการที่',
    creatorLink: 'Community Standards | Transparency Center',
    cta: 'ส่งคำร้องอุทธรณ์',
    badgeAlt: 'โลโก้ Meta',
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
    title: 'ขั้นตอนการส่งคำร้องอุทธรณ์',
    subtitle:
      'ก่อนส่ง ให้เปรียบเทียบเนื้อหาที่ถูกทำเครื่องหมายกับ Community Standards ใน Transparency Center เวลาโดยประมาณในการกรอกแบบฟอร์ม: ประมาณ 5–10 นาที',
    items: [
      {
        title: 'ตรวจสอบนโยบายที่เกี่ยวข้อง',
        description:
          'อ่านส่วนนโยบายที่เกี่ยวข้องใน Transparency Center — แต่ละส่วนมี Policy Rationale และกฎเฉพาะ เปรียบเทียบกับโพสต์หรือกิจกรรมที่ถูกทำเครื่องหมายบนเพจของคุณ',
      },
      {
        title: 'กรอกแบบฟอร์มและยืนยันตัวตน',
        description:
          'ระบุรายละเอียดผู้ดูแลและการติดต่อ รวมถึงบริบท (หากจำเป็น) ยืนยันบัญชี Facebook ที่เชื่อมโยงก่อนส่ง',
      },
      {
        title: 'ติดตามผลลัพธ์บน Facebook',
        description:
          'หลังส่ง คุณจะได้รับการยืนยันผ่านการแจ้งเตือนของ Facebook การตรวจสอบใช้เวลาโดยทั่วไป 3–7 วันทำการ หมายเลขอ้างอิงคำขอของคุณจะช่วยหากต้องการการสนับสนุน',
      },
    ],
  },
  testimonials: {
    title: 'อ้างอิงจาก Transparency Center',
    prevAria: 'รายการก่อนหน้า',
    nextAria: 'รายการถัดไป',
    items: [
      {
        quote:
          'มาตรฐานเหล่านี้อิงจากความคิดเห็นของผู้คนและคำแนะนำจากผู้เชี่ยวชาญในด้านเทคโนโลยี ความปลอดภัยสาธารณะ และสิทธิมนุษยชน — เพื่อให้แน่ใจว่าเสียงของทุกคนได้รับการยอมรับ',
        author: 'Meta Transparency Center',
        role: 'บทนำ',
      },
      {
        quote:
          'Community Standards ของเราใช้กับทุกคนทั่วโลก และเนื้อหาทุกประเภท รวมถึงเนื้อหาที่สร้างโดย AI',
        author: 'Meta Transparency Center',
        role: 'ขอบเขต',
      },
      {
        quote:
          'เวอร์ชันภาษาอังกฤษแบบสหรัฐอเมริกาของ Community Standards สะท้อนชุดนโยบายที่ทันสมัยที่สุดและควรใช้เป็นเอกสารหลัก',
        author: 'Meta Transparency Center',
        role: 'เอกสารทางการ',
      },
    ],
  },
  finalCta: {
    title: 'ส่งคำร้องอุทธรณ์',
    subtitle:
      'หากหลังจากอ่าน Community Standards แล้วคุณเชื่อว่าเพจของคุณเป็นไปตามนโยบาย ให้ส่งแบบฟอร์มพร้อมรายละเอียดผู้ดูแลและการยืนยันตัวตน',
    cta: 'ส่งคำร้องอุทธรณ์',
  },
  faq: {
    title: 'คำถามที่พบบ่อย',
    items: [
      {
        question: 'Community Standards ครอบคลุมอะไรบ้าง?',
        answer:
          'Community Standards กำหนดสิ่งที่อนุญาตและไม่อนุญาตบน Facebook, Instagram, Messenger และ Threads เอกสารฉบับเต็มเผยแพร่ใน Meta Transparency Center',
      },
      {
        question: 'เวอร์ชันใดเป็นเอกสารอ้างอิงทางการ?',
        answer:
          'ตาม Transparency Center เวอร์ชันภาษาอังกฤษแบบสหรัฐอเมริกาสะท้อนชุดนโยบายที่ทันสมัยที่สุดและควรใช้เป็นเอกสารหลัก',
      },
      {
        question: 'Meta ใช้ค่านิยมใดในการจำกัดเนื้อหา?',
        answer:
          'เมื่อ Meta จำกัดการแสดงออก จะทำเพื่อความถูกต้องแท้จริง ความปลอดภัย ความเป็นส่วนตัว หรือศักดิ์ศรี — ค่านิยมพื้นฐานสี่ประการที่ระบุใน Community Standards',
      },
      {
        question: 'ทำไมเพจของฉันถูกทำเครื่องหมายทั้งที่ไม่แน่ใจว่าละเมิดนโยบาย?',
        answer:
          'ระบบของ Meta อาจตรวจพบเนื้อหาที่อาจละเมิดก่อนสรุปผลขั้นสุดท้าย การแจ้งเตือนสะท้อนขั้นตอนการประเมินเบื้องต้น การอุทธรณ์ช่วยให้ทีมตรวจสอบประเมินบริบทเฉพาะของเพจของคุณใหม่',
      },
      {
        question: 'ใครสามารถส่งคำร้องอุทธรณ์ได้?',
        answer:
          'ผู้ดูแลเพจหรือตัวแทนที่ได้รับอนุญาตขององค์กรที่เป็นเจ้าของเพจ คุณต้องยืนยันบัญชี Facebook ที่เชื่อมโยงเมื่อส่งแบบฟอร์ม',
      },
      {
        question: 'การตรวจสอบใช้เวลานานเท่าใดและมีผลลัพธ์ใดบ้าง?',
        answer:
          'โดยทั่วไป 3–7 วันทำการ อาจนานกว่านั้นหากต้องการข้อมูลเพิ่มเติม ผลลัพธ์อาจรวมถึงการยอมรับอุทธรณ์ ยืนยันการตัดสินใจ หรือขอข้อมูลเพิ่มเติม — ทั้งหมดแจ้งผ่าน Facebook',
      },
      {
        question: 'ข้อมูลของฉันถูกใช้อย่างไร?',
        answer:
          'ใช้เฉพาะเพื่อดำเนินการอุทธรณ์และยืนยันสิทธิการดูแล ตามนโยบายความเป็นส่วนตัวและข้อกำหนดของ Meta',
      },
    ],
  },
  footer: {
    copyright: '© Meta',
    columns: [
      {
        title: 'เทคโนโลยี Meta',
        links: [
          { label: 'Facebook' },
          { label: 'Instagram' },
          { label: 'Messenger' },
          { label: 'Threads' },
        ],
      },
      {
        title: 'นโยบาย',
        links: [
          { label: 'Transparency Center' },
          { label: 'Community Standards' },
        ],
      },
      {
        title: 'การสนับสนุน',
        links: [
          { label: 'ศูนย์ช่วยเหลือ' },
          { label: 'Meta Business Help Center' },
        ],
      },
    ],
  },
}
