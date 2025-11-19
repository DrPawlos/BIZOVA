import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Briefcase,
  Layers,
  Calendar,
  MessageSquare,
  Mail,
  Phone,
  User,
  Settings,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    title: 'Main',
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: 'Content Management',
    items: [
      {
        title: 'Blog Posts',
        href: '/dashboard/blog',
        icon: FileText,
      },
      {
        title: 'Create Post',
        href: '/dashboard/blog/create',
        icon: PlusCircle,
      },
      {
        title: 'Portfolio',
        href: '/dashboard/portfolio',
        icon: Briefcase,
      },
      {
        title: 'Services',
        href: '/dashboard/services',
        icon: Layers,
      },
    ],
  },
  {
    title: 'Communication',
    items: [
      {
        title: 'Appointments',
        href: '/dashboard/appointments',
        icon: Calendar,
      },
      {
        title: 'Chat',
        href: '/dashboard/chat',
        icon: MessageSquare,
        badge: 3,
      },
      {
        title: 'Emails',
        href: '/dashboard/emails',
        icon: Mail,
      },
      {
        title: 'SMS',
        href: '/dashboard/sms',
        icon: Phone,
      },
    ],
  },
  {
    title: 'System Tools',
    items: [
      {
        title: 'Users',
        href: '/dashboard/users',
        icon: User,
      },
      {
        title: 'Settings',
        href: '/dashboard/settings',
        icon: Settings,
      },
    ],
  },
];

