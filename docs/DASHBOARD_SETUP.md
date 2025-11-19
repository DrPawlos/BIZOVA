# BIZOVA Admin Dashboard

A modern, responsive admin dashboard for BIZOVA (Business IT Innovation) built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI.

## 📁 File Structure

```
/app/(dashboard)/
  ├── layout.tsx              # Dashboard layout wrapper
  └── dashboard/
      └── page.tsx            # Dashboard landing page

/components/dashboard/
  ├── Sidebar.tsx             # Main sidebar with mobile drawer
  ├── SidebarGroup.tsx        # Collapsible navigation groups
  ├── SidebarItem.tsx         # Individual navigation items
  └── TopBar.tsx              # Top navigation bar with search and user menu

/lib/
  └── nav-links.ts            # Navigation configuration
```

## 🎨 Features

### Layout
- **Two-panel responsive layout**: Sidebar + Main content area
- **Collapsible sidebar**: Desktop collapse to icon-only mode
- **Mobile drawer**: Full mobile menu with overlay on smaller screens
- **Sticky top bar**: Search, notifications, and user menu

### Navigation
- **Grouped navigation**: 4 main sections (Main, Content Management, Communication, System Tools)
- **Active link highlighting**: Visual indicator for current page
- **Badge support**: Show notification counts on menu items
- **Icon-based**: All items use Lucide icons for consistency

### Design
- **Modern SaaS aesthetic**: Similar to Vercel, Linear, Supabase, Stripe dashboards
- **Dark sidebar theme**: Gray-900 background with subtle hover states
- **Light main area**: Clean white/gray-50 background
- **Smooth animations**: Transitions for sidebar, dropdowns, and interactions
- **Accessible**: ARIA labels, keyboard navigation, semantic HTML

### Responsive Behavior
- **Desktop (≥1024px)**: Fixed sidebar (64 or 256px), collapsible
- **Tablet/Mobile (<1024px)**: Hamburger menu, overlay drawer, full-width content

## 🚀 Getting Started

### Prerequisites
The dashboard uses these Shadcn UI components:
- `button`
- `card`
- `input`
- `label`
- `dropdown-menu`

All components are already installed.

### Running the Dashboard

1. Start the development server:
```bash
pnpm dev
```

2. Navigate to:
```
http://localhost:3000/dashboard
```

## 📝 Navigation Configuration

Edit navigation links in `/lib/nav-links.ts`:

```typescript
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
  // Add more groups...
];
```

### Adding a New Navigation Item

```typescript
{
  title: 'Analytics',
  href: '/dashboard/analytics',
  icon: TrendingUp,
  badge: 5, // Optional notification badge
}
```

## 🎯 Dashboard Landing Page

The main dashboard page (`/app/(dashboard)/dashboard/page.tsx`) includes:

### Components
1. **Stats Cards**: 4 key metrics with icons and trend indicators
2. **Quick Actions**: 4 shortcut buttons to common tasks
3. **Recent Activity**: Timeline of recent events and notifications

### Customization
Replace mock data with real API calls or database queries:

```typescript
// Example: Fetch stats from your API
const stats = await fetchDashboardStats();
const recentActivity = await fetchRecentActivity();
```

## 🎨 Styling Notes

### Color Scheme
- **Sidebar**: Gray-900 background, gray-800 hover, blue-400 active accent
- **Main area**: Gray-50 background, white cards
- **Accent colors**: Blue-600 (primary), Green-600 (success), Red-600 (danger)

### Typography
- **Page title**: text-2xl (32px) font-semibold
- **Card title**: text-base (16px) font-medium
- **Body text**: text-sm (14px)
- **Captions**: text-xs (12px)

### Spacing
- **Page padding**: p-4 sm:p-6 lg:p-8
- **Card spacing**: gap-6 (24px)
- **Component spacing**: gap-3 or gap-4

## 📱 Mobile Optimization

### Mobile Menu Button
- Fixed position (left-4, top-4)
- Only visible on screens <1024px
- Toggles sidebar drawer

### Responsive Grid
- **Stats**: 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)
- **Quick Actions**: 1 column → 2 columns → 4 columns
- **Activity list**: Always single column for readability

## 🔒 Security Notes

This dashboard is designed for admin users. Consider adding:

1. **Authentication guard**: Protect routes with middleware
2. **Role-based access**: Check user permissions
3. **API protection**: Validate tokens on server actions
4. **Audit logging**: Track admin actions

Example middleware protection:

```typescript
// middleware.ts
export async function middleware(request: NextRequest) {
  const user = await getCurrentUser();
  
  if (!user || !user.isAdmin) {
    return NextResponse.redirect('/login');
  }
}

export const config = {
  matcher: '/dashboard/:path*',
};
```

## 🧩 Creating New Dashboard Pages

### Example: Blog Management Page

```typescript
// /app/(dashboard)/dashboard/blog/page.tsx
export default function BlogPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Blog Posts</h2>
          <p className="text-gray-600">Manage your blog content</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/blog/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Post
          </Link>
        </Button>
      </div>

      {/* Add your blog list here */}
    </div>
  );
}
```

The layout will automatically wrap it with the sidebar and top bar.

## 🎨 Customizing the TopBar

To change the page title dynamically:

```typescript
// In your page component
import { TopBar } from '@/components/dashboard/TopBar';

export default function MyPage() {
  return <TopBar title="My Custom Page" />;
}
```

## 📦 Component Props

### Sidebar
```typescript
interface SidebarProps {
  className?: string;
}
```

### SidebarGroup
```typescript
interface SidebarGroupProps {
  group: NavGroup;
  isCollapsed?: boolean;
}
```

### SidebarItem
```typescript
interface SidebarItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
  isCollapsed?: boolean;
}
```

### TopBar
```typescript
interface TopBarProps {
  title?: string; // Defaults to "Dashboard"
}
```

## 🚧 Future Enhancements

Consider adding:
- [ ] Dark mode toggle
- [ ] Real-time notifications
- [ ] User preferences persistence
- [ ] Keyboard shortcuts
- [ ] Breadcrumb navigation
- [ ] Page transitions
- [ ] Export/Import functionality
- [ ] Advanced search with filters
- [ ] Multi-language support

## 🐛 Troubleshooting

### Sidebar not showing on mobile
- Ensure the hamburger button is visible (z-index: 50)
- Check that `isMobileOpen` state is toggling correctly

### Layout shifts
- The sidebar uses `ml-64` on desktop to offset the main content
- Ensure responsive classes are properly applied: `lg:ml-64`

### Icons not displaying
- Verify `lucide-react` is installed: `pnpm add lucide-react`
- Check icon imports in nav-links.ts

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📄 License

Part of the BIZOVA project.

