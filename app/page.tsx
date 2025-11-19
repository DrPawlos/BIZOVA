'use client'

import { Hero } from '@/components/bizova-hero'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen">
      <Hero 
        onPrimaryClick={() => {
          // Navigate to sign-up or get started page
          router.push('/auth/sign-up')
        }}
        onSecondaryClick={() => {
          // Navigate to learn more section or about page
          router.push('/protected')
        }}
      />
    </div>
  )
}
