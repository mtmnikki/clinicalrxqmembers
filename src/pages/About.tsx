/**
 * About page showcasing ClinicalRxQ's mission and philosophy
 */
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Target, 
  Users, 
  Shield, 
  Award, 
  Heart, 
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Quote,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: "Operational Flywheel",
      description: "Transform from reactive dispensing to proactive, appointment-based care through TimeMyMeds synchronization. Create predictable clinical encounters that drive revenue.",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Technician Force Multiplier",
      description: "Empower pharmacy technicians to handle operational tasks, freeing pharmacists for clinical excellence. You wouldn't dispense without technicians—don't build clinical services without them.",
      color: "from-purple-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Clinical Infrastructure",
      description: "Complete 'business-in-a-box' solution with protocols, forms, billing codes, and implementation guides. Not just education—practical, turnkey implementation.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Field-tested protocols designed by community pharmacists for community pharmacies",
      stat: "10,000+"
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Every program focuses on improving patient outcomes and therapeutic optimization",
      stat: "98%"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering the evolution from product-centric to patient-centered pharmacy practice",
      stat: "95%"
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "Proven ROI and measurable practice transformation for members",
      stat: "$2.5M+"
    }
  ];

  const achievements = [
    { value: "10,000+", label: "Active Members" },
    { value: "98%", label: "Completion Rate" },
    { value: "$2.5M+", label: "Additional Revenue Generated" },
    { value: "95%", label: "Member Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-500"></div>
        <div className="absolute inset-0 bg-[url('https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/68768169b94605c50d9bc73f')] bg-center bg-cover opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-6">
            <Badge className="bg-white/20 text-white border-white/30">
              Where Dispensing Meets Direct Patient Care
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            About ClinicalRxQ
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're transforming community pharmacy from product-centric dispensaries into patient-centered, 
            decentralized healthcare hubs through comprehensive training and turnkey clinical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
            >
              Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-purple-200">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-purple-600 mb-4 mx-auto" />
                  <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "Retail is a FOUR-LETTER Word. We are COMMUNITY PHARMACISTS. 
                    Retailers sell product. Community Pharmacists deliver medical treatments. 
                    We provide counseling and clinical services to accompany the medical treatments 
                    we deliver to our patients."
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our mission is to tangibly impact pharmacy practice by delivering patient-centered, 
                    team-based training and protocols for enhanced clinical services. We standardize 
                    the provision of preventive and chronic disease management services across all 
                    community pharmacy settings, elevating the role of the pharmacist as an 
                    indispensable contributor to public health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0 mb-4">
              THE CLINICALRXQ FOUNDATION
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              The Three{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Pillars
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three foundational principles that work in concert to overcome the most significant 
              barriers to practice transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <CardHeader className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4`}>
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Results */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              What drives us to transform community pharmacy practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {value.stat}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              The ClinicalRxQ{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Difference
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just teach clinical knowledge—we provide the complete infrastructure 
              for successful implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Beyond Traditional Training</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Not Just "What" - But "How"</p>
                    <p className="text-gray-600 text-sm">Step-by-step implementation protocols, not just clinical knowledge</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Team-Based Approach</p>
                    <p className="text-gray-600 text-sm">Technician protocols that multiply pharmacist effectiveness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Financial Sustainability</p>
                    <p className="text-gray-600 text-sm">Integrated billing codes and reimbursement strategies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Real-World Tested</p>
                    <p className="text-gray-600 text-sm">Protocols developed by community pharmacists for community pharmacies</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/1d983549-c0dd-4f22-8be1-2858b82a4ea2.jpg" 
                alt="Pharmacy team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-pink-500 to-cyan-500 rounded-2xl opacity-20"></div>
            </div>
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
            Join the community pharmacy revolution. Move beyond dispensing to direct patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
            >
              Explore Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}