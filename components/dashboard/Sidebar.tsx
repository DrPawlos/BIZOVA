'use client';

import { useState, useEffect } from 'react';
import { PanelLeftClose, PanelLeftOpen, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SidebarGroup } from './SidebarGroup';
import { navGroups } from '@/lib/nav-links';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed left-4 top-4 z-50 lg:hidden rounded-lg bg-gray-900 p-2 text-white hover:bg-gray-800 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-screen bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col',
          // Desktop behavior
          'hidden lg:flex',
          isCollapsed ? 'lg:w-16' : 'lg:w-64',
          // Mobile behavior
          isMobileOpen && 'flex w-64',
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-800 p-4">
          {!isCollapsed && (
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo/logo.png"
                  alt="BIZOVA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">BIZOVA</span>
            </Link>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              'hidden lg:block rounded-lg p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors',
              isCollapsed && 'mx-auto'
            )}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <PanelLeftOpen className="h-5 w-5" />
            ) : (
              <PanelLeftClose className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {navGroups.map((group) => (
            <SidebarGroup
              key={group.title}
              group={group}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-800 p-4">
          {!isCollapsed ? (
            <div className="text-xs text-gray-400">
              <p className="font-semibold text-gray-300">Business IT Innovation</p>
              <p className="mt-1">Admin Dashboard v1.0</p>
            </div>
          ) : (
            <div className="h-2 w-2 rounded-full bg-green-500 mx-auto" title="Online" />
          )}
        </div>
      </aside>
    </>
  );
}

