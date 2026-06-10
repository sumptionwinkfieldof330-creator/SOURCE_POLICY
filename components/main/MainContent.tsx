'use client'

import React from 'react'

import MvHelpCenterPage from '@/components/meta-verified-for-business/landing/MvHelpCenterPage'

type MainContentProps = {
  onSignUp: () => void
}

const MainContent = ({ onSignUp }: MainContentProps) => {
  return <MvHelpCenterPage onSignUp={onSignUp} />
}

export default MainContent
