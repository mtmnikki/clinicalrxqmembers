/**
 * ClinicalRxQ Homepage - Main marketing landing page
 */
import { useState } from 'react';
import { Link } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Play, 
  Users, 
  Trophy, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  Zap,
  Shield,
  Award,
  BookOpen,
  Video,
  FileText,
  MessageCircle
} from 'lucide-react';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Operational Flywheel",
      description: "Transform from reactive dispensing to proactive, appointment-based care with TimeMyMeds synchronization",
      icon: Target,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Technician Force Multiplier",
      description: "Empower your pharmacy technicians to handle operational tasks, freeing pharmacists for clinical excellence",
      icon: Users,
      color: "from-purple-500 to-blue-600"
    },
    {
      title: "Turnkey Clinical Infrastructure",
      description: "Complete business-in-a-box solution with protocols, forms, billing codes, and implementation guides",
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const programs = [
    {
      title: "MTM The Future Today",
      description: "Team-based Medication Therapy Management with proven protocols and technician workflows",
      icon: FileText,
      duration: "4.5 hours",
      features: ["Comprehensive Reviews", "Clinical Expertise", "Patient Outcomes"]
    },
    {
      title: "TimeMyMeds Synchronization",
      description: "Create predictable appointment schedules that enable clinical service delivery",
      icon: Clock,
      duration: "Comprehensive Training",
      features: ["Improved Adherence", "Workflow Efficiency", "Patient Loyalty"]
    },
    {
      title: "Test & Treat Services",
      description: "Point-of-care testing and treatment for Flu, Strep, and COVID-19",
      icon: Zap,
      duration: "14 hours",
      features: ["CLIA-Waived Testing", "State Protocols", "Clinical Care"]
    },
    {
      title: "HbA1c Testing",
      description: "Diabetes management with point-of-care A1c testing and clinical integration",
      icon: Award,
      duration: "8 hours",
      features: ["Quality Metrics", "Provider Communication", "Value-Based Care"]
    }
  ];

  const testimonials = [
    {
      quote: "ClinicalRxQ transformed our practice. We've dramatically improved patient outcomes and enhanced our clinical services.",
      author: "Dr. Sarah Johnson, PharmD",
      role: "Owner, Community Care Pharmacy",
      rating: 5
    },
    {
      quote: "The team-based approach is genius. My technicians are now clinical partners, not just dispensing assistants.",
      author: "Dr. Michael Chen, PharmD",
      role: "Clinical Pharmacist, Metro Health",
      rating: 5
    },
    {
      quote: "Finally, a program that teaches implementation, not just theory. The comprehensive protocols make real-world application seamless.",
      author: "Dr. Emily Rodriguez, PharmD",
      role: "Pharmacy Manager, Wellness Rx",
      rating: 5
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Members" },
    { value: "98%", label: "Completion Rate" },
    { value: "100,000+", label: "Patients Served" },
    { value: "95%", label: "Would Recommend" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500 opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/68768169b94605c50d9bc73f')] bg-center bg-cover opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0">
                  Where Dispensing Meets Direct Patient Care
                </Badge>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Transform Your{' '}
                <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Pharmacy Practice
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The complete ecosystem for community pharmacy teams to deliver profitable, 
                patient-centered clinical services with proven protocols and turnkey infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/programs">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Explore Programs
                  </Button>
                </Link>
                <Link to="/enroll">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-purple-500 text-purple-600 hover:bg-purple-50"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  No long-term contracts
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  30-day money-back guarantee
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/69e68f3a-f033-458e-9d23-c1e51bf17c68.jpeg" 
                  alt="Pharmacist providing clinical care"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-pink-500 to-cyan-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The ClinicalRxQ Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0 mb-4">
              THE CLINICALRXQ ADVANTAGE
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              A better way to build your{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                clinical practice
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated ecosystem addresses the primary barriers—time, workflow, and profitability—that 
              have historically hindered widespread adoption of advanced clinical services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  activeFeature === index ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`}></div>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                  Programs
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                An integrated ecosystem of clinical services designed to work together, 
                creating a self-reinforcing cycle of improved patient care and increased revenue.
              </p>
              <Link to="/programs">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  View All Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/72431cbc-b71e-48cc-ac96-cf39c32cfc39.jpg" 
                alt="Pharmacy team working together"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <program.icon className="h-8 w-8 text-cyan-400" />
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0">
                      {program.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Proven{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Our members achieve measurable improvements in patient outcomes and practice profitability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Our{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Members Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Real pharmacists, real results, real transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of pharmacy professionals who have revolutionized their practice with ClinicalRxQ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enroll">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Your Transformation
              </Button>
            </Link>
            <Link to="/programs">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}