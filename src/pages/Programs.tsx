/**
 * Programs page showcasing actual ClinicalRxQ training programs
 */
import { Link } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Clock, Users, Star, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      id: 'mtm-future-today',
      title: "MTM The Future Today",
      subtitle: "The Foundation of Clinical Service Delivery",
      description: "Comprehensive, team-based training system for highly efficient Medication Therapy Management services in community pharmacy.",
      duration: "Comprehensive Training",
      level: "Foundation",
      rating: 4.9,
      students: 2500,
      features: [
        "Team-based protocol with technician empowerment",
        "Comprehensive CMR and TIP training",
        "OutcomesMTM and Mirixa platform integration",
        "Proprietary Clinical Quick Pick Text™",
        "Complete documentation and billing guidance",
        "CMS Star Ratings and EQuIPP optimization"
      ],
      highlights: [
        "Flagship Program",
        "Team-Based Approach",
        "Quality Focus"
      ],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/85b7bb14-1f66-482f-b880-7015dab60faa.jpg"
    },
    {
      id: 'timemymeds',
      title: "TimeMyMeds Sync",
      subtitle: "Engineering Proactive Patient Engagement",
      description: "Comprehensive medication synchronization program that transitions pharmacy from reactive to proactive, appointment-based patient care.",
      duration: "Implementation Training",
      level: "Beginner",
      rating: 4.8,
      students: 1800,
      features: [
        "3-Part enrollment process (Offer, Enrollment, Appointment)",
        "PMAP software workflow training",
        "Automated patient communication systems",
        "Adherence improvement to 80%+ PDC",
        "Clinical appointment scheduling framework",
        "Gateway to all clinical services"
      ],
      highlights: [
        "Operational Flywheel",
        "Patient Loyalty",
        "Workflow Foundation"
      ],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/1bd7f690-7776-4e43-b0ca-eafe7a3ae41a.jpg"
    },
    {
      id: 'test-treat',
      title: "Test & Treat Services",
      subtitle: "Acute Care in the Community Setting",
      description: "Complete training for CLIA-waived point-of-care testing and pharmacist-led treatment for common acute conditions.",
      duration: "Specialized Training",
      level: "Advanced",
      rating: 4.7,
      students: 950,
      features: [
        "Influenza A/B testing and treatment",
        "Group A Strep testing and treatment",
        "COVID-19 diagnostic testing",
        "Sofia 2 analyzer operation and maintenance",
        "State-specific treatment protocols",
        "Complete medical billing guide (E/M, CPT, ICD-10)"
      ],
      highlights: [
        "Expanding Scope",
        "Public Health Impact",
        "Point-of-Care Testing"
      ],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/6ce6b876-67e9-4ade-a32d-55d3267e2874.jpg"
    },
    {
      id: 'hba1c-testing',
      title: "HbA1c Testing",
      subtitle: "Proactive Diabetes Management",
      description: "Targeted program for conducting CLIA-waived Hemoglobin A1c testing to support comprehensive diabetes care management.",
      duration: "Focused Training",
      level: "Intermediate",
      rating: 4.8,
      students: 1200,
      features: [
        "A1CNow+ analyzer operation",
        "Clinical integration with MTM platforms",
        "Value-based care alignment",
        "Provider communication protocols",
        "3-part CPT billing process",
        "Quality control and documentation"
      ],
      highlights: [
        "Diabetes Care",
        "Value-Based Care",
        "Provider Integration"
      ],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/64e86594-e5b0-4e82-abe4-29233fbb2a1c.jpg"
    },
    {
      id: 'oral-contraceptives',
      title: "Pharmacist-Initiated Oral Contraceptives",
      subtitle: "A New Frontier in Patient Access",
      description: "Cutting-edge training for pharmacists to independently initiate and dispense hormonal contraceptive therapy under state protocols.",
      duration: "Specialized Training",
      level: "Advanced",
      rating: 4.9,
      students: 650,
      features: [
        "U.S. Medical Eligibility Criteria (USMEC) training",
        "Physical assessment and screening protocols",
        "Contraceptive therapy selection algorithms",
        "Comprehensive patient counseling methods",
        "Provider communication and documentation",
        "State-specific compliance requirements"
      ],
      highlights: [
        "Practice Innovation",
        "Access to Care",
        "Advanced Practice"
      ],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/29960301-94af-4dbc-a216-ccf569a90b7e.jpg"
    },
    {
      id: 'medical-billing',
      title: "Medical Billing & Reimbursement",
      subtitle: "The Keystone of Sustainability",
      description: "Comprehensive education in medical billing for pharmacist-provided services, ensuring long-term financial viability of clinical programs.",
      duration: "Essential Training",
      level: "Foundation",
      rating: 4.8,
      students: 2200,
      features: [
        "Complete revenue cycle management",
        "CPT, HCPCS, and ICD-10 code mastery",
        "Evaluation and Management (E/M) coding",
        "HIPAA compliance and documentation",
        "Fraud and abuse prevention",
        "Integrated billing within clinical protocols"
      ],
      highlights: [
        "Financial Sustainability",
        "Compliance Focus",
        "Code Mastery"
      ],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/c3b8f029-4d3b-485d-b143-85b06248fe41.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Professional Training Programs</h1>
            <p className="text-xl mb-8 text-white/90">
              Complete "business-in-a-box" solutions for advanced community pharmacy practice
            </p>
            <div className="flex justify-center items-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>8,000+ Active Members</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Turnkey Implementation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The ClinicalRxQ Three Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-white transform rotate-90" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Operational Flywheel</h3>
                <p className="text-gray-600">Transform from reactive dispensing to proactive, appointment-based care with TimeMyMeds</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Technician Force Multiplier</h3>
                <p className="text-gray-600">Empower technicians to handle operations while pharmacists focus on clinical care</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clinical Infrastructure</h3>
                <p className="text-gray-600">Complete "business-in-a-box" with protocols, forms, and billing codes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-2">
                      {program.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{program.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    {program.subtitle}
                  </CardDescription>
                  <p className="text-gray-600 mt-2">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {program.students} enrolled
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link to={`/program/${program.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                        Learn More
                      </Button>
                    </Link>
                    <Link to="/enroll" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
