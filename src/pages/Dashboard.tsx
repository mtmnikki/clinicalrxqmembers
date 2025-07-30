/**
 * Member dashboard with account management and progress tracking
 */
import { useState } from 'react';
import { Link } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { 
  User, 
  BookOpen, 
  Award, 
  Calendar, 
  Clock, 
  Play,
  FileText,
  Settings,
  CreditCard
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

export default function Dashboard() {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState('overview');

  const enrolledPrograms = [
    {
      id: 'clinical-fundamentals',
      title: 'Clinical Pharmacy Fundamentals',
      progress: 65,
      totalModules: 12,
      completedModules: 8,
      nextModule: 'Advanced Drug Interactions',
      dueDate: '2024-01-15',
      status: 'active'
    }
  ];

  const recentActivity = [
    { action: 'Completed Module 8', program: 'Clinical Pharmacy Fundamentals', date: '2024-01-10' },
    { action: 'Downloaded Resource', program: 'Clinical Pharmacy Fundamentals', date: '2024-01-09' },
    { action: 'Joined Live Session', program: 'Clinical Pharmacy Fundamentals', date: '2024-01-08' }
  ];

  const upcomingEvents = [
    { title: 'Live Q&A Session', date: '2024-01-12', time: '2:00 PM EST' },
    { title: 'Module 9 Due', date: '2024-01-15', time: '11:59 PM EST' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.firstName}!</h1>
          <p className="text-gray-600">Track your progress and manage your learning journey</p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">My Programs</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Programs</p>
                      <p className="text-2xl font-bold">1</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Overall Progress</p>
                      <p className="text-2xl font-bold">65%</p>
                    </div>
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Hours Completed</p>
                      <p className="text-2xl font-bold">24</p>
                    </div>
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Certifications</p>
                      <p className="text-2xl font-bold">0</p>
                    </div>
                    <Award className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  {enrolledPrograms.map((program) => (
                    <div key={program.id} className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{program.title}</h3>
                          <p className="text-sm text-gray-600">
                            {program.completedModules} of {program.totalModules} modules completed
                          </p>
                        </div>
                        <Badge variant="default">Active</Badge>
                      </div>
                      
                      <Progress value={program.progress} className="w-full" />
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Next: {program.nextModule}</p>
                          <p className="text-xs text-gray-500">Due: {program.dueDate}</p>
                        </div>
                        <Button size="sm">
                          <Play className="h-4 w-4 mr-1" />
                          Continue
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link to="/member-content">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Access Member Content
                    </Button>
                  </Link>
                  <Link to="/resources">
                    <Button variant="outline" className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Resource Library
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full"></div>
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.program} • {activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="programs">
            <Card>
              <CardHeader>
                <CardTitle>My Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {enrolledPrograms.map((program) => (
                    <div key={program.id} className="border rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{program.title}</h3>
                          <p className="text-gray-600">
                            {program.completedModules} of {program.totalModules} modules completed
                          </p>
                        </div>
                        <Badge variant="default">Active</Badge>
                      </div>
                      
                      <Progress value={program.progress} className="w-full mb-4" />
                      
                      <div className="flex gap-4">
                        <Button>
                          <Play className="h-4 w-4 mr-2" />
                          Continue Learning
                        </Button>
                        <Button variant="outline">
                          <FileText className="h-4 w-4 mr-2" />
                          View Resources
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Account Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        value={user?.firstName || ''} 
                        className="w-full p-2 border rounded-md"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        value={user?.lastName || ''} 
                        className="w-full p-2 border rounded-md"
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      value={user?.email || ''} 
                      className="w-full p-2 border rounded-md"
                      readOnly
                    />
                  </div>
                  
                  <Button>
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Billing & Subscriptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Active Subscriptions</h3>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Clinical Pharmacy Fundamentals</p>
                          <p className="text-sm text-gray-600">Next billing: January 15, 2024</p>
                        </div>
                        <Badge variant="default">Active</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Payment Method</h3>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">•••• •••• •••• 1234</p>
                          <p className="text-sm text-gray-600">Expires 12/26</p>
                        </div>
                        <Button variant="outline" size="sm">Update</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
}