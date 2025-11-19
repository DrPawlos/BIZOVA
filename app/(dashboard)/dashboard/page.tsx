import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Calendar,
  MessageSquare,
  TrendingUp,
  PlusCircle,
  ArrowUpRight,
  Users,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  // Mock data - in a real app, this would come from your database
  const stats = [
    {
      title: 'Total Blog Posts',
      value: '24',
      change: '+12%',
      changeType: 'positive' as const,
      icon: FileText,
      href: '/dashboard/blog',
    },
    {
      title: 'Appointments',
      value: '18',
      change: '+5%',
      changeType: 'positive' as const,
      icon: Calendar,
      href: '/dashboard/appointments',
    },
    {
      title: 'Unread Messages',
      value: '7',
      change: '+3',
      changeType: 'neutral' as const,
      icon: MessageSquare,
      href: '/dashboard/chat',
    },
    {
      title: 'Active Projects',
      value: '12',
      change: '+2',
      changeType: 'positive' as const,
      icon: Briefcase,
      href: '/dashboard/portfolio',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: 'New appointment request',
      description: 'John Doe requested a consultation',
      time: '5 minutes ago',
      type: 'appointment',
    },
    {
      id: 2,
      title: 'Blog post published',
      description: 'How AI is Transforming Business IT',
      time: '2 hours ago',
      type: 'blog',
    },
    {
      id: 3,
      title: 'New message received',
      description: 'Sarah from TechCorp sent you a message',
      time: '3 hours ago',
      type: 'message',
    },
    {
      id: 4,
      title: 'Portfolio item added',
      description: 'E-commerce Platform for RetailCo',
      time: '1 day ago',
      type: 'portfolio',
    },
  ];

  const quickActions = [
    {
      title: 'Create Blog Post',
      description: 'Write and publish a new article',
      icon: FileText,
      href: '/dashboard/blog/create',
      color: 'bg-blue-500',
    },
    {
      title: 'Add Service',
      description: 'Add a new service offering',
      icon: PlusCircle,
      href: '/dashboard/services/create',
      color: 'bg-green-500',
    },
    {
      title: 'View Appointments',
      description: 'Manage your schedule',
      icon: Calendar,
      href: '/dashboard/appointments',
      color: 'bg-purple-500',
    },
    {
      title: 'Manage Users',
      description: 'View and edit user accounts',
      icon: Users,
      href: '/dashboard/users',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="space-y-6 min-h-full">
      {/* Welcome Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Welcome back, Admin</h2>
        <p className="mt-2 text-gray-600">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.title} href={stat.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <p className="mt-1 flex items-center text-xs text-gray-600">
                    <TrendingUp
                      className={`mr-1 h-3 w-3 ${
                        stat.changeType === 'positive'
                          ? 'text-green-600'
                          : 'text-gray-500'
                      }`}
                    />
                    <span
                      className={
                        stat.changeType === 'positive'
                          ? 'text-green-600'
                          : 'text-gray-600'
                      }
                    >
                      {stat.change}
                    </span>
                    <span className="ml-1">from last month</span>
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} href={action.href}>
                <Card className="hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer">
                  <CardHeader>
                    <div
                      className={`${action.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-base">{action.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {action.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription className="mt-1">
                Your latest updates and notifications
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/activity">
                View all
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={activity.id}
                className={`flex items-start gap-4 ${
                  index !== recentActivity.length - 1
                    ? 'border-b border-gray-100 pb-4'
                    : ''
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    activity.type === 'appointment'
                      ? 'bg-purple-100'
                      : activity.type === 'blog'
                        ? 'bg-blue-100'
                        : activity.type === 'message'
                          ? 'bg-green-100'
                          : 'bg-orange-100'
                  }`}
                >
                  {activity.type === 'appointment' && (
                    <Calendar className="h-4 w-4 text-purple-600" />
                  )}
                  {activity.type === 'blog' && (
                    <FileText className="h-4 w-4 text-blue-600" />
                  )}
                  {activity.type === 'message' && (
                    <MessageSquare className="h-4 w-4 text-green-600" />
                  )}
                  {activity.type === 'portfolio' && (
                    <Briefcase className="h-4 w-4 text-orange-600" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

