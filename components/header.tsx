'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Menu, X } from 'lucide-react'

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[960px] px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4 bg-white shadow-xl rounded-3xl md:rounded-4xl px-4 md:px-6 py-3 md:py-2 border border-gray-200">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/logo/logo.png" alt="BIZOVA" width={32} height={32} className="md:w-10 md:h-10" />
            <span className="font-bold text-base md:text-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">BIZOVA</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <Link href="#" className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
              Features
            </Link>
            <Link href="#" className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
              Customers
            </Link>
            <Link href="#" className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
              Resources
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className="text-slate-700 hover:text-slate-900 rounded-full text-sm">
                Log in
              </Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button size="sm" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white hover:from-slate-800 hover:via-blue-800 hover:to-slate-800 rounded-full py-0.5 my-0 px-4 flex items-center gap-2 shadow-sm text-sm">
                Get started
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white shadow-xl rounded-3xl px-4 py-4 border border-gray-200 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#" 
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#" 
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Customers
              </Link>
              <Link 
                href="#" 
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="border-t border-gray-200 pt-4 mt-2 flex flex-col gap-3">
                <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full text-slate-700 hover:text-slate-900 rounded-full">
                    Log in
                  </Button>
                </Link>
                <Link href="/auth/sign-up" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white hover:from-slate-800 hover:via-blue-800 hover:to-slate-800 rounded-full flex items-center justify-center gap-2 shadow-sm">
                    Get started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
