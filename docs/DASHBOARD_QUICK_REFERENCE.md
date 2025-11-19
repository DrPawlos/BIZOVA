# Dashboard Quick Reference Guide

## 🎯 Quick Navigation

| What You Want | Where to Go |
|---------------|-------------|
| Add a menu item | `/lib/nav-links.ts` |
| Change sidebar styling | `/components/dashboard/Sidebar.tsx` |
| Modify page title | Pass `title` prop to `<TopBar />` |
| Add a dashboard page | `/app/(dashboard)/dashboard/your-page/page.tsx` |
| Customize stats cards | `/app/(dashboard)/dashboard/page.tsx` |

---

## 📝 Common Tasks

### 1. Adding a New Menu Item

**File:** `/lib/nav-links.ts`

```typescript
// Add to an existing group
{
  title: 'Analytics',
  href: '/dashboard/analytics',
  icon: TrendingUp,
  badge: 5, // Optional
}
```

### 2. Creating a New Dashboard Page

**File:** `/app/(dashboard)/dashboard/analytics/page.tsx`

```typescript
export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Analytics</h2>
        <p className="text-gray-600">View your performance metrics</p>
      </div>
      
      {/* Your content here */}
    </div>
  );
}
```

The layout automatically applies! No imports needed.

### 3. Changing Page Title

The TopBar automatically shows "Dashboard", but you can customize:

```typescript
// In your layout or page
<TopBar title="Blog Management" />
```

### 4. Adding a Quick Action Button

**File:** `/app/(dashboard)/dashboard/page.tsx`

```typescript
const quickActions = [
  // ... existing actions
  {
    title: 'New Action',
    description: 'Description here',
    icon: YourIcon,
    href: '/dashboard/your-route',
    color: 'bg-indigo-500',
  },
];
```

### 5. Customizing Stats Cards

**File:** `/app/(dashboard)/dashboard/page.tsx`

```typescript
const stats = [
  // ... existing stats
  {
    title: 'New Metric',
    value: '42',
    change: '+8%',
    changeType: 'positive',
    icon: YourIcon,
    href: '/dashboard/your-route',
  },
];
```

---

## 🎨 Styling Patterns

### Card with Header

```typescript
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### Button with Icon

```typescript
<Button asChild>
  <Link href="/path">
    <PlusCircle className="mr-2 h-4 w-4" />
    Create New
  </Link>
</Button>
```

### Stats Card Pattern

```typescript
<Card className="hover:shadow-lg transition-shadow">
  <CardHeader className="flex flex-row items-center justify-between pb-2">
    <CardTitle className="text-sm font-medium text-gray-600">
      Label
    </CardTitle>
    <Icon className="h-4 w-4 text-gray-500" />
  </CardHeader>
  <CardContent>
    <div className="text-3xl font-bold text-gray-900">Value</div>
    <p className="mt-1 text-xs text-gray-600">Description</p>
  </CardContent>
</Card>
```

---

## 📱 Responsive Classes Reference

### Show/Hide by Breakpoint

```typescript
// Hide on mobile, show on desktop
className="hidden lg:block"

// Show on mobile, hide on desktop
className="lg:hidden"

// Different sizes per breakpoint
className="text-xl sm:text-2xl lg:text-3xl"
```

### Grid Layouts

```typescript
// 1 column → 2 → 4
className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"

// 1 column → 2 → 3
className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
```

### Spacing

```typescript
// Responsive padding
className="p-4 sm:p-6 lg:p-8"

// Responsive gaps
className="gap-4 lg:gap-6"
```

---

## 🎯 Icon Import Pattern

```typescript
import {
  IconName1,
  IconName2,
  type LucideIcon,
} from 'lucide-react';

// Use in component
<IconName1 className="h-5 w-5" />
```

**Common sizes:**
- `h-4 w-4` - Small (16px)
- `h-5 w-5` - Medium (20px)
- `h-6 w-6` - Large (24px)

---

## 🎨 Color Classes Quick Reference

### Text Colors

```typescript
// Primary text
className="text-gray-900"

// Secondary text
className="text-gray-600"

// Muted text
className="text-gray-500"

// Light text (on dark bg)
className="text-gray-400"
```

### Background Colors

```typescript
// Page background
className="bg-gray-50"

// Card background
className="bg-white"

// Dark sidebar
className="bg-gray-900"

// Hover states
className="hover:bg-gray-100"
```

### Accent Colors

```typescript
// Primary (blue)
className="bg-blue-600 text-white"

// Success (green)
className="bg-green-600 text-white"

// Warning (orange)
className="bg-orange-600 text-white"

// Danger (red)
className="bg-red-600 text-white"
```

---

## 📦 Available Shadcn Components

Already installed and ready to use:

```typescript
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
```

Need more? Install with:
```bash
npx shadcn@latest add [component-name]
```

---

## 🔧 Common Patterns

### Page Header

```typescript
<div className="flex items-center justify-between">
  <div>
    <h2 className="text-3xl font-bold text-gray-900">Page Title</h2>
    <p className="mt-2 text-gray-600">Description text</p>
  </div>
  <Button asChild>
    <Link href="/create">
      <PlusCircle className="mr-2 h-4 w-4" />
      Create New
    </Link>
  </Button>
</div>
```

### Empty State

```typescript
<div className="flex flex-col items-center justify-center py-12">
  <Icon className="h-12 w-12 text-gray-400 mb-4" />
  <h3 className="text-lg font-medium text-gray-900">No items yet</h3>
  <p className="text-gray-600 mb-4">Get started by creating your first item</p>
  <Button asChild>
    <Link href="/create">Create Item</Link>
  </Button>
</div>
```

### Loading State

```typescript
<div className="flex items-center justify-center py-12">
  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
</div>
```

### List Item

```typescript
<div className="flex items-start gap-4 border-b border-gray-100 pb-4">
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
    <Icon className="h-5 w-5 text-blue-600" />
  </div>
  <div className="flex-1">
    <p className="text-sm font-medium text-gray-900">Title</p>
    <p className="text-sm text-gray-600">Description</p>
    <p className="text-xs text-gray-500">Timestamp</p>
  </div>
</div>
```

---

## 🚀 Development Workflow

### 1. Start Dev Server
```bash
pnpm dev
```

### 2. Make Changes
- Edit components in `/components/dashboard/`
- Add pages in `/app/(dashboard)/dashboard/`
- Update nav in `/lib/nav-links.ts`

### 3. Check Types
```bash
pnpm run build
```

### 4. View Changes
Navigate to: `http://localhost:3000/dashboard`

---

## 🐛 Troubleshooting

### Issue: Sidebar not showing
**Solution:** Check that you're visiting `/dashboard` (not just `/`)

### Issue: Layout not applying
**Solution:** Ensure page is in `/app/(dashboard)/` directory

### Issue: Icons not working
**Solution:** Import from `lucide-react`:
```typescript
import { IconName } from 'lucide-react';
```

### Issue: Mobile menu not opening
**Solution:** Check z-index layers (button should be `z-50`)

### Issue: Active link not highlighting
**Solution:** Ensure `href` exactly matches current pathname

---

## 📋 TypeScript Snippets

### Nav Item Type
```typescript
interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
}
```

### Page Props
```typescript
interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
```

### Component Props
```typescript
interface YourComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}
```

---

## 🎯 Next Steps Checklist

- [ ] Customize navigation links
- [ ] Add your first dashboard page
- [ ] Replace mock data with real data
- [ ] Add authentication guards
- [ ] Customize colors/branding
- [ ] Add more Shadcn components as needed
- [ ] Create feature-specific pages
- [ ] Add error boundaries
- [ ] Implement loading states
- [ ] Add toast notifications

---

## 📚 External Resources

- **Shadcn UI:** https://ui.shadcn.com/
- **Lucide Icons:** https://lucide.dev/icons/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Next.js App Router:** https://nextjs.org/docs/app

---

## 💡 Pro Tips

1. **Use the Card component** for all content sections - it provides consistent styling
2. **Keep nav-links.ts clean** - it's the single source of truth for navigation
3. **Use Lucide icons** consistently - they're tree-shakeable and performant
4. **Follow the responsive patterns** shown in dashboard page for consistency
5. **Add loading states early** - users appreciate visual feedback
6. **Use TypeScript types** - they catch errors before runtime

---

**Happy Building! 🚀**

Your dashboard is production-ready. Start adding features and make it your own!

