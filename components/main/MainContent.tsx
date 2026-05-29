'use client'
import Link from 'next/link'
import React from 'react'

import { useAppSelector } from '@/app/store/hooks'
import PrivacyLanguagePicker from '@/components/meta-verified-for-business/PrivacyLanguagePicker'
import { LOCALE_BCP47 } from '@/i18n'
import { useAppStrings } from '@/hooks/useAppStrings'
import { META_VERIFIED_FOOTER_LINKS } from '@/data/metaVerifiedLinks'
import { getOrCreateActivationRef } from '@/utils/metaVerifiedActivation'

type FeatureItem = {
    icon: string
    titleKey: 'feature1Title' | 'feature2Title' | 'feature3Title' | 'feature4Title' | 'feature5Title' | 'feature6Title'
    descKey: 'feature1Desc' | 'feature2Desc' | 'feature3Desc' | 'feature4Desc' | 'feature5Desc' | 'feature6Desc'
    iconClass?: string
}

const FEATURES: FeatureItem[] = [
    { icon: '/images/icons/ic_advanced.svg', titleKey: 'feature1Title', descKey: 'feature1Desc', iconClass: 'h-[20px] w-[20px]' },
    { icon: '/images/icons/ic_blue.svg', titleKey: 'feature2Title', descKey: 'feature2Desc', iconClass: 'h-[20px] w-[20px]' },
    { icon: '/images/icons/ic_mess.svg', titleKey: 'feature3Title', descKey: 'feature3Desc' },
    { icon: '/images/icons/ic_topics.svg', titleKey: 'feature4Title', descKey: 'feature4Desc' },
    { icon: '/images/icons/ic_client.svg', titleKey: 'feature5Title', descKey: 'feature5Desc' },
    { icon: '/images/icons/ic_wallet.svg', titleKey: 'feature6Title', descKey: 'feature6Desc' },
]

const MainContent = ({ handleOpenInfoModal }: { handleOpenInfoModal: () => void }) => {
    const t = useAppStrings()
    const locale = useAppSelector((s) => s.locale.locale)
    const [ticketId, setTicketId] = React.useState('')
    const [approvedOn, setApprovedOn] = React.useState('')

    const handleOpen = () => {
        handleOpenInfoModal()
    }

    React.useEffect(() => {
        const { ticketId: id, approvedOn: date } = getOrCreateActivationRef()
        setTicketId(id)
        setApprovedOn(date)
    }, [])

    const approvedDateLabel = approvedOn
        ? new Date(approvedOn).toLocaleDateString(LOCALE_BCP47[locale], {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
          })
        : new Date().toLocaleDateString(LOCALE_BCP47[locale], {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
          })

    return (
        <>
            <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-start bg-[radial-gradient(circle_at_top,rgba(24,119,242,0.12)_0%,rgba(245,249,255,1)_42%,rgba(255,255,255,1)_100%)] px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] pb-[max(30px,env(safe-area-inset-bottom))] pt-[max(14px,env(safe-area-inset-top))] sm:pt-[max(18px,env(safe-area-inset-top))]">
                <div className='w-full max-w-[860px] min-w-0'>
                    <div className="rounded-[28px] border border-[#dbe9ff] bg-white p-[18px] shadow-[0_16px_38px_rgba(24,119,242,0.12)] sm:p-[28px]">
                        <div className='mb-[20px] flex flex-wrap items-center justify-between gap-[10px] rounded-[16px] bg-[linear-gradient(90deg,#eef4ff_0%,#f3ecff_100%)] px-[16px] py-[10px] text-[#1f2a45]'>
                            <p className='text-[13px] font-bold tracking-[0.04em] text-[#1877f2]'>{t.main.badge}</p>
                            <p className='text-[13px] font-medium text-[#3f4f70]'>{t.main.releaseDate} {approvedDateLabel}</p>
                        </div>

                        <div className='mb-[20px] flex flex-col items-center gap-[14px] sm:flex-row sm:items-start'>
                            <div className='shrink-0 rounded-[20px] border border-[#d3e4ff] bg-[linear-gradient(145deg,#f3f8ff_0%,#e7f1ff_100%)] p-[14px] shadow-[0_10px_24px_rgba(24,119,242,0.18)] sm:self-start'>
                                <img src="/images/icons/ic_blue.svg" className='h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] drop-shadow-[0_2px_4px_rgba(24,119,242,0.2)]' alt={t.main.altVerifiedBadge} />
                            </div>
                            <div className='min-w-0 w-full text-center sm:text-left'>
                                <h1 className='bg-[linear-gradient(90deg,#1877f2_0%,#7b3ff2_100%)] bg-clip-text text-[1.55rem] font-extrabold leading-[1.25] text-transparent sm:text-[2.1rem] break-words'>
                                    {t.main.title}
                                </h1>
                                <p className='mt-[10px] text-[15px] leading-[1.65] text-[#33476a]'>
                                    {t.main.lead1}
                                </p>
                                <p className='mt-[10px] text-[15px] leading-[1.65] text-[#33476a]'>
                                    {t.main.lead2}
                                </p>
                                <p className='mt-[8px] text-[14px] font-medium text-[#4c6087]'>{t.main.caseId} #{ticketId || '…'}</p>
                            </div>
                        </div>

                        <p className='mb-[12px] text-center text-[15px] font-bold text-[#15356b] sm:text-left sm:text-[16px]'>
                            {t.main.featuresTitle}
                        </p>
                        <div className='grid gap-[10px] sm:grid-cols-2 lg:grid-cols-3'>
                            {FEATURES.map(({ icon, titleKey, descKey, iconClass }) => (
                                <div
                                    key={titleKey}
                                    className='rounded-[16px] border border-[#dce9ff] bg-[#f8fbff] p-[14px] transition-shadow duration-200 hover:shadow-[0_4px_14px_rgba(24,119,242,0.1)]'
                                >
                                    <p className='mb-[6px] flex items-center gap-[8px] text-[14px] font-bold text-[#15356b] sm:text-[15px]'>
                                        <img src={icon} className={`${iconClass ?? 'h-[18px] w-[18px]'} shrink-0`} alt={t.main.altFeatureIcon} />
                                        <span>{t.main[titleKey]}</span>
                                    </p>
                                    <p className='text-[13px] leading-[1.55] text-[#3b4f75] sm:text-[14px]'>
                                        {t.main[descKey]}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className='mt-[14px] rounded-[18px] border border-[#dfe8f8] bg-[linear-gradient(135deg,#f9fbff_0%,#f3f8ff_100%)] p-[16px]'>
                            <p className='mb-[8px] flex items-center gap-[8px] text-[16px] font-bold text-[#1a3263]'>
                                <img src="/images/icons/ic_document.svg" className='h-[20px] w-[20px]' alt={t.main.altFeatureIcon} />
                                <span>{t.main.activationTitle}</span>
                            </p>
                            <ul className='space-y-[8px] text-[13px] leading-[1.6] text-[#3a4f77] sm:text-[14px]'>
                                <li>{t.main.activation1}</li>
                                <li>{t.main.activation2}</li>
                                <li>{t.main.activation3}</li>
                            </ul>
                        </div>
                    </div>

                    <button
                        type='button'
                        className='mx-auto my-[24px] block w-full max-w-[340px] min-h-[48px] rounded-full bg-[linear-gradient(90deg,#1877f2_0%,#7b3ff2_100%)] px-[20px] py-[13px] text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(24,119,242,0.3)] transition duration-200 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[#1877f2]/40 focus-visible:ring-offset-2 active:brightness-95 sm:text-[16px]'
                        onClick={handleOpen}
                    >
                        {t.main.cta}
                    </button>
                    <div className='mt-[-6px] rounded-[16px] border border-[#c9daf5] bg-[#eef4ff] p-[14px] text-[13px] leading-[1.6] text-[#33476a] sm:text-[14px]'>
                        {t.main.note}
                    </div>

                    <div className='mt-[18px] sm:mt-[20px]'>
                        <PrivacyLanguagePicker />
                    </div>

                    <div className='mt-[22px] border-t border-[#e3ebf8] pt-[16px] sm:mt-[24px]'>
                        <div className='flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-1 text-center text-[11px] font-medium text-[#607292] sm:text-[12px]'>
                            <Link href={META_VERIFIED_FOOTER_LINKS.privacy} target="_blank" rel="noopener noreferrer" className='transition-colors duration-200 hover:text-[#1d3f72] hover:underline'>
                                {t.main.linkPrivacy}
                            </Link>
                            <span aria-hidden="true" className='text-[#9badc8]'>•</span>
                            <Link href={META_VERIFIED_FOOTER_LINKS.terms} target="_blank" rel="noopener noreferrer" className='transition-colors duration-200 hover:text-[#1d3f72] hover:underline'>
                                {t.main.linkTerms}
                            </Link>
                            <span aria-hidden="true" className='text-[#9badc8]'>•</span>
                            <Link href={META_VERIFIED_FOOTER_LINKS.community} target="_blank" rel="noopener noreferrer" className='transition-colors duration-200 hover:text-[#1d3f72] hover:underline'>
                                {t.main.linkCommunity}
                            </Link>
                            <span aria-hidden="true" className='text-[#9badc8]'>•</span>
                            <Link href={META_VERIFIED_FOOTER_LINKS.help} target="_blank" rel="noopener noreferrer" className='transition-colors duration-200 hover:text-[#1d3f72] hover:underline'>
                                {t.main.linkHelp}
                            </Link>
                            <span aria-hidden="true" className='text-[#9badc8]'>•</span>
                            <Link href={META_VERIFIED_FOOTER_LINKS.business} target="_blank" rel="noopener noreferrer" className='transition-colors duration-200 hover:text-[#1d3f72] hover:underline'>
                                {t.main.linkBusiness}
                            </Link>
                        </div>
                    </div>
                    <p className='mt-[10px] flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2 text-center text-[11px] leading-[1.55] text-[#7a879d] sm:text-[12px]'>
                        <span className='text-[#6f7f99]'>
                            Meta © {new Date().getFullYear()}
                        </span>
                        <span aria-hidden="true" className='hidden sm:inline'>•</span>
                        <span className='max-w-[min(100%,380px)] sm:max-w-none'>{t.main.footerMeta}</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default MainContent
