/**
 * Member Content page - Central hub for accessing all clinical programs and resources
 */
import { Link } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  BookOpen, 
  FileText, 
  Clock, 
  Zap, 
  Award, 
  Heart, 
  ArrowRight,
  Play,
  Users,
  TrendingUp
} from 'lucide-react';

export default function MemberContent() {
  const programs = [
    {
      id: 'mtm-future-today',
      title: 'MTM The Future Today',
      description: 'Comprehensive, team-based training system for Medication Therapy Management services',
      icon: FileText,
      level: 'Foundation',
      duration: '4.5 hours',
      highlights: ['Flagship Program', 'Team-Based', 'Proven ROI'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'timemymeds',
      title: 'TimeMyMeds',
      description: 'Medication synchronization program creating proactive, appointment-based patient care',
      icon: Clock,
      level: 'Essential',
      duration: 'Comprehensive Training',
      highlights: ['Operational Flywheel', 'Patient Loyalty', 'Workflow'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'test-treat',
      title: 'Test & Treat: Strep, Flu, COVID',
      description: 'CLIA-waived point-of-care testing and pharmacist-led treatment for acute conditions',
      icon: Zap,
      level: 'Advanced',
      duration: '14 hours',
      highlights: ['Expanding Scope', 'Public Health', 'Immediate Revenue'],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'hba1c-testing',
      title: 'HbA1c Testing',
      description: 'Point-of-care Hemoglobin A1c testing for comprehensive diabetes care management',
      icon: Award,
      level: 'Intermediate',
      duration: '8 hours',
      highlights: ['Diabetes Care', 'Value-Based Care', 'Provider Integration'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'oral-contraceptives',
      title: 'Oral Contraceptives',
      description: 'Pharmacist-initiated hormonal contraceptive therapy under state protocols',
      icon: Heart,
      level: 'Advanced',
      duration: '10 hours',
      highlights: ['Practice Innovation', 'Access to Care', 'Market Leader'],
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Member Content</h1>
            <p className="text-xl text-white/90">
              Access your clinical training programs and exclusive resources
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access to Resources */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-purple-200">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Resource Library</h3>
                    <p className="text-gray-600">Access clinical tools, forms, and educational materials</p>
                  </div>
                </div>
                <Link to="/resources">
                  <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Resources
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinical Programs */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Clinical Programs</h2>
              <p className="text-gray-600 text-lg">
                Complete training programs with protocols, resources, and implementation support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center`}>
                        <program.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {program.level}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${program.color} bg-opacity-10 text-sm font-medium`}>
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Duration: {program.duration}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {program.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Link to={`/program/${program.id}`} className="flex-1">
                        <Button className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90`}>
                          <Play className="h-4 w-4 mr-2" />
                          View Program
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Need Help Getting Started?</h2>
              <p className="text-gray-600">
                Our support team is here to help you implement and succeed with your clinical programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Weekly Office Hours</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Join our weekly live Q&A sessions with ClinicalRxQ experts
                  </p>
                  <Button variant="outline" size="sm">
                    Join Session
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-cyan-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Implementation Support</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Step-by-step guides and tools to launch your services successfully
                  </p>
                  <Button variant="outline" size="sm">
                    Get Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
