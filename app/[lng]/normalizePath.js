'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { fallbackLng } from '../i18n-settings'

function NormalizePath() {
  const pathname = usePathname()
  useEffect(() => {
    const pattern = new RegExp(`^\\/${fallbackLng}(\\/.*)?`);
    window.history.pushState(null, "", pathname.replace(pattern, (_, group) => group ? group : '/'))
  }, [pathname])
  return (
    <div></div>
  )
}

export default NormalizePath