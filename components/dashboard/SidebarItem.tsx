'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
  isCollapsed?: boolean;
}

export function SidebarItem({
  title,
  href,
  icon: Icon,
  badge,
  isCollapsed = false,
}: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-gray-800/50',
        isActive
          ? 'bg-gray-800 text-white'
          : 'text-gray-400 hover:text-white',
        isCollapsed && 'justify-center px-2'
      )}
      title={isCollapsed ? title : undefined}
    >
      <Icon className={cn('h-5 w-5 flex-shrink-0', isActive && 'text-blue-400')} />
      {!isCollapsed && (
        <>
          <span className="flex-1 truncate">{title}</span>
          {badge !== undefined && badge > 0 && (
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-semibold text-white">
              {badge > 99 ? '99+' : badge}
            </span>
          )}
        </>
      )}
    </Link>
  );
}

