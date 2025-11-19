import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Check, Trash2, Settings } from 'lucide-react';
import Link from 'next/link';

export default function NotificationsPage() {
  // Mock notifications data - in a real app, this would come from your database
  const notifications = [
    {
      id: 1,
      title: 'New appointment request',
      description: 'John Doe requested a consultation for next Monday at 2:00 PM',
      time: '5 minutes ago',
      date: 'Today at 3:25 PM',
      read: false,
      type: 'appointment' as const,
      icon: '📅',
    },
    {
      id: 2,
      title: 'Blog post published successfully',
      description: 'Your article "How AI is Transforming Business IT" has been published and is now live on your website',
      time: '2 hours ago',
      date: 'Today at 1:30 PM',
      read: false,
      type: 'blog' as const,
      icon: '📝',
    },
    {
      id: 3,
      title: 'New message received',
      description: 'Sarah from TechCorp sent you a message: "Hi, I would like to discuss the cloud migration proposal..."',
      time: '3 hours ago',
      date: 'Today at 12:15 PM',
      read: false,
      type: 'message' as const,
      icon: '💬',
    },
    {
      id: 4,
      title: 'Portfolio item approved',
      description: 'Your E-commerce Platform project has been approved and is now visible in your portfolio',
      time: '1 day ago',
      date: 'Yesterday at 4:45 PM',
      read: true,
      type: 'portfolio' as const,
      icon: '💼',
    },
    {
      id: 5,
      title: 'Service inquiry received',
      description: 'New inquiry about cloud migration services from a potential client in New York',
      time: '2 days ago',
      date: 'Nov 17 at 9:30 AM',
      read: true,
      type: 'service' as const,
      icon: '⚙️',
    },
    {
      id: 6,
      title: 'Appointment confirmed',
      description: 'Jane Smith confirmed the appointment scheduled for tomorrow at 10:00 AM',
      time: '2 days ago',
      date: 'Nov 17 at 8:15 AM',
      read: true,
      type: 'appointment' as const,
      icon: '📅',
    },
    {
      id: 7,
      title: 'New subscriber',
      description: 'You have a new subscriber to your blog newsletter. Total subscribers: 156',
      time: '3 days ago',
      date: 'Nov 16 at 2:20 PM',
      read: true,
      type: 'blog' as const,
      icon: '📝',
    },
    {
      id: 8,
      title: 'Comment on your blog post',
      description: 'Michael Johnson commented on "5 Ways to Improve Your IT Infrastructure"',
      time: '3 days ago',
      date: 'Nov 16 at 11:45 AM',
      read: true,
      type: 'blog' as const,
      icon: '💬',
    },
    {
      id: 9,
      title: 'Service package upgraded',
      description: 'Premium Support Package has been upgraded to Enterprise level',
      time: '4 days ago',
      date: 'Nov 15 at 3:00 PM',
      read: true,
      type: 'service' as const,
      icon: '⚙️',
    },
    {
      id: 10,
      title: 'Portfolio item published',
      description: 'Mobile Banking App project has been published to your portfolio',
      time: '5 days ago',
      date: 'Nov 14 at 5:30 PM',
      read: true,
      type: 'portfolio' as const,
      icon: '💼',
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;
  const unreadNotifications = notifications.filter(n => !n.read);
  const readNotifications = notifications.filter(n => n.read);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'appointment':
        return 'bg-purple-100 text-purple-700';
      case 'blog':
        return 'bg-blue-100 text-blue-700';
      case 'message':
        return 'bg-green-100 text-green-700';
      case 'portfolio':
        return 'bg-orange-100 text-orange-700';
      case 'service':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeName = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Notifications</h2>
          <p className="mt-2 text-gray-600">
            {unreadCount > 0 
              ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}`
              : 'All caught up! No new notifications'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Check className="mr-2 h-4 w-4" />
            Mark all as read
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Notifications</CardDescription>
            <CardTitle className="text-3xl">{notifications.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Unread</CardDescription>
            <CardTitle className="text-3xl text-blue-600">{unreadCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Today</CardDescription>
            <CardTitle className="text-3xl">
              {notifications.filter(n => n.time.includes('minutes') || n.time.includes('hours')).length}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-3xl">{notifications.length}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Unread Notifications */}
      {unreadNotifications.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Unread</h3>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200">
                {unreadNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors bg-blue-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl flex-shrink-0 shadow-sm">
                      {notification.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-gray-900">
                            {notification.title}
                          </h4>
                          <span className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                        </div>
                        <Badge variant="secondary" className={getTypeColor(notification.type)}>
                          {getTypeName(notification.type)}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{notification.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">{notification.date}</p>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 text-xs">
                            <Check className="mr-1 h-3 w-3" />
                            Mark as read
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 text-xs text-red-600 hover:text-red-700 hover:bg-red-50">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Read Notifications */}
      {readNotifications.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Earlier</h3>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200">
                {readNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl flex-shrink-0">
                      {notification.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h4 className="text-sm font-semibold text-gray-900">
                          {notification.title}
                        </h4>
                        <Badge variant="secondary" className={getTypeColor(notification.type)}>
                          {getTypeName(notification.type)}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{notification.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">{notification.date}</p>
                        <Button variant="ghost" size="sm" className="h-8 text-xs text-red-600 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Empty State */}
      {notifications.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Bell className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications yet</h3>
            <p className="text-sm text-gray-600 mb-4">
              We'll notify you when something important happens
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

