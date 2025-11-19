'use client'

import { usePathname } from 'next/navigation'
import { SiteHeader } from '@/components/header'

/**
 * ConditionalHeader component that only renders the SiteHeader
 * on public pages, not on dashboard or admin pages
 */
export function ConditionalHeader() {
  const pathname = usePathname()
  
  // Don't show header on dashboard pages
  if (pathname.startsWith('/dashboard')) {
    return null
  }
  
  return <SiteHeader />
}

