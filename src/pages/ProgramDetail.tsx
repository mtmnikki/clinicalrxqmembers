/**
 * Program detail page component
 */
import { useParams, Link } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Clock, 
  Users, 
  Star, 
 
  CheckCircle, 
  ArrowLeft,
  FileText,
  Video,
  Download,
  Phone,
  MessageSquare,
  Calculator,
  PlayCircle,
  Shield,
  TrendingUp,
  Target,
  Zap
} from 'lucide-react';

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();

  const programs = {
    'mtm-future-today': {
      title: "MTM The Future Today",
      subtitle: "The Foundation of Clinical Service Delivery",
      description: "Comprehensive, team-based training system designed to implement highly efficient Medication Therapy Management (MTM) services within community pharmacy settings using proven protocols.",
      duration: "4.5 hours",
      modules: 7,
      enrolled: 2500,
      rating: 4.9,
      completionTime: "4.5 hours",
      certificationType: "Professional Certificate",
      level: "Foundation",
      highlights: ["Flagship Program", "Proven ROI", "Team-Based Approach"],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/e25a35f3-5266-4f9a-9c2e-eea823b036d7.jpg",
      overview: {
        keyComponents: [
          "Comprehensive Medication Reviews (CMRs) with structured protocols",
          "Targeted Intervention Programs (TIPs) for specific drug therapy problems",
          "Team-based workflow with technician-driven operations",
          "OutcomesMTM and Mirixa platform mastery and integration",
          "Proprietary Clinical Quick Pick Text™ for efficient documentation",
          "Complete medical billing guidance with CPT and ICD-10 codes",
          "CMS Star Ratings and EQuIPP quality metric optimization",
          "Patient Medication Action Plan (MAP) development training"
        ],
        benefits: [
          "Improves patient medication adherence and clinical outcomes",
          "Enhances patient care quality and medication management",
          "Enhances CMS Star Ratings and quality metrics",
          "Increases patient retention and pharmacy loyalty",
          "Builds clinical reputation and provider relationships",
          "Creates sustainable clinical service offerings",
          "Maximizes pharmacist efficiency through team-based approach",
          "Provides competitive advantage in value-based care contracts"
        ],
        highlights: [
          { icon: TrendingUp, title: "Comprehensive Reviews", description: "Step-by-step CMR and TIP protocols with real-world case studies" },
          { icon: Shield, title: "Billing Expertise", description: "Integrated medical billing with specific CPT codes and documentation" },
          { icon: Target, title: "Patient Outcomes", description: "Measurable improvements in adherence and clinical metrics" }
        ]
      },
      curriculum: [
        { number: 1, title: "Introduction to Medication Therapy Management", duration: "45 min" },
        { number: 2, title: "Navigating Outcomes", duration: "30 min" },
        { number: 3, title: "MTMTFT Forms", duration: "25 min" },
        { number: 4, title: "TIP Protocol Part 1", duration: "40 min" },
        { number: 5, title: "TIP Protocol Part 2", duration: "35 min" },
        { number: 6, title: "CMR Protocol Part 1: Preparing for a CMR", duration: "45 min" },
        { number: 7, title: "CMR Protocol Part 2: Documenting and Billing", duration: "50 min" }
      ],
      resources: [
        // Protocol Manuals
        { type: "PDF", name: "Introduction to MTM", size: "2.1 MB", downloads: 2500, category: "Protocol Manuals" },
        { type: "PDF", name: "MTMTFT Overview of CMR Completion for Pharmacists", size: "3.2 MB", downloads: 2500, category: "Protocol Manuals" },
        { type: "PDF", name: "MTMTFT Pharmacist Form Explanations", size: "2.8 MB", downloads: 2500, category: "Protocol Manuals" },
        { type: "PDF", name: "MTMTFT Pharmacist Protocol", size: "4.1 MB", downloads: 2500, category: "Protocol Manuals" },
        { type: "PDF", name: "MTMTFT Technician Form Explanations", size: "2.5 MB", downloads: 2500, category: "Protocol Manuals" },
        { type: "PDF", name: "MTMTFT Technician Protocol", size: "3.8 MB", downloads: 2500, category: "Protocol Manuals" },
        
        // General Forms
        { type: "PDF", name: "Authorization for Medication Review", size: "0.8 MB", downloads: 2500, category: "General Forms" },
        { type: "DOC", name: "Clinical Quick Pick Text", size: "1.2 MB", downloads: 2500, category: "General Forms" },
        { type: "PDF", name: "Folder Prep Quick Reference", size: "0.6 MB", downloads: 2500, category: "General Forms" },
        { type: "PDF", name: "Needs MTM Service Form", size: "0.9 MB", downloads: 2500, category: "General Forms" },
        { type: "PDF", name: "Patient Intake Form", size: "1.1 MB", downloads: 2500, category: "General Forms" },
        { type: "PDF", name: "Pharmacist CMR Worksheet", size: "1.4 MB", downloads: 2500, category: "General Forms" },
        
        // Medical Conditions Flowsheets
        { type: "PDF", name: "Alzheimer's Flowsheet", size: "0.7 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "Asthma Flowsheet", size: "0.8 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "COPD Flowsheet", size: "0.9 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "Depression Flowsheet", size: "0.7 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "Diabetes Flowsheet", size: "1.1 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "End Stage Renal Disease Flowsheet", size: "0.9 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "Heart Failure Flowsheet", size: "1.0 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "High Blood Pressure Flowsheet", size: "0.8 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "High Cholesterol Flowsheet", size: "0.9 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "Ischemic Heart Disease Flowsheet", size: "0.8 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "Osteoarthritis Flowsheet", size: "0.7 MB", downloads: 2500, category: "Medical Conditions" },
        { type: "PDF", name: "Osteoporosis Flowsheet", size: "0.8 MB", downloads: 2500, category: "Medical Conditions" },
        
        // Outcomes TIP Forms
        { type: "PDF", name: "Adherence Monitoring", size: "0.6 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Adherence Needs Check In", size: "0.7 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Adherence PLUS 100 Day", size: "0.8 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Adherence PLUS 90 Day", size: "0.8 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Cost Effective Alternative", size: "0.7 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Dose Too High", size: "0.6 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Dose Too Low", size: "0.6 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Drug Interaction", size: "0.8 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "High Risk Medication", size: "0.9 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Needs Disease State Education", size: "0.7 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Needs Drug Therapy", size: "0.8 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Needs First Medication Fill", size: "0.6 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Needs Immunization", size: "0.7 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Needs Lab Monitoring or Health Test", size: "0.8 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Needs Medication Assessment", size: "0.7 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Needs Patient Education", size: "0.6 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Needs Refill", size: "0.5 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "New or Changed OTC Therapy", size: "0.7 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "New Therapy Consultation", size: "0.8 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Suboptimal Drug", size: "0.7 MB", downloads: 2500, category: "TIP Forms" },
        { type: "PDF", name: "Unnecessary Prescription Therapy", size: "0.6 MB", downloads: 2500, category: "TIP Forms" },
        
        // Prescriber Communication Forms
        { type: "PDF", name: "ADHERENCE 30-90 DAY SUPPLY", size: "0.8 MB", downloads: 2500, category: "Prescriber Communication" },
        { type: "PDF", name: "BLANK PROVIDER COMMUNICATION FORM", size: "0.6 MB", downloads: 2500, category: "Prescriber Communication" },
        { type: "PDF", name: "Cost Effective Medication Therapy Alternative", size: "0.9 MB", downloads: 2500, category: "Prescriber Communication" },
        { type: "PDF", name: "PATIENT MONITORING FORM", size: "0.7 MB", downloads: 2500, category: "Prescriber Communication" },
        { type: "PDF", name: "PATIENT REFERRAL FORM", size: "0.6 MB", downloads: 2500, category: "Prescriber Communication" },
        
        // Drug Interaction Forms
        { type: "PDF", name: "Drug Interaction - lovastatin and diltiazem", size: "0.5 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - lovastatin and verapamil", size: "0.5 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - Opioid and Benzodiazepine", size: "0.7 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - simvastatin and amiodarone", size: "0.5 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - simvastatin and amlodipine", size: "0.5 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - simvastatin and diltiazem", size: "0.5 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - simvastatin and ranolazine", size: "0.5 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - simvastatin and verapamil", size: "0.5 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - statin and gemfibrozil", size: "0.6 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - warfarin and NSAIDs", size: "0.6 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - BLANK", size: "0.4 MB", downloads: 2500, category: "Drug Interactions" },
        { type: "PDF", name: "Drug Interaction - Multiple Anticholinergic Agents", size: "0.6 MB", downloads: 2500, category: "Drug Interactions" },
        
        // Needs Drug Therapy Forms
        { type: "PDF", name: "Needs Drug Therapy - ACEI or ARB in CAD", size: "0.7 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - ARNI_ACEI_ARB in CHF", size: "0.8 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - Beta Blocker in CAD", size: "0.7 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - Beta Blocker in HF", size: "0.7 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - Bisphosphonate in Previous Fracture", size: "0.8 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - DMARD in RA", size: "0.6 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - Inhaled Steroid (SABA Monotherapy)", size: "0.7 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - Naloxone", size: "0.6 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - SABA in Asthma", size: "0.6 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - Statin in ASCVD", size: "0.7 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - Statin in DM WITH risk factors", size: "0.8 MB", downloads: 2500, category: "Needs Drug Therapy" },
        { type: "PDF", name: "Needs Drug Therapy - Statin in DM", size: "0.7 MB", downloads: 2500, category: "Needs Drug Therapy" },
        
        // Optimize Medication Therapy Forms
        { type: "PDF", name: "Optimize Medication Therapy - Non-Selective Beta Blocker COPD and Asthma", size: "0.9 MB", downloads: 2500, category: "Optimize Medication Therapy" },
        { type: "PDF", name: "Optimize Medication Therapy - On fibrate and not statin", size: "0.7 MB", downloads: 2500, category: "Optimize Medication Therapy" },
        { type: "PDF", name: "Optimize Medication Therapy - On fibrate and statin", size: "0.7 MB", downloads: 2500, category: "Optimize Medication Therapy" },
        { type: "PDF", name: "Optimize Medication Therapy - On niacin and not statin", size: "0.7 MB", downloads: 2500, category: "Optimize Medication Therapy" },
        { type: "PDF", name: "Optimize Medication Therapy - On niacin and statin", size: "0.7 MB", downloads: 2500, category: "Optimize Medication Therapy" },
        { type: "PDF", name: "Optimize Medication Therapy - On omega-3 and not statin", size: "0.7 MB", downloads: 2500, category: "Optimize Medication Therapy" },
        { type: "PDF", name: "Optimize Medication Therapy - On omega-3 and statin", size: "0.7 MB", downloads: 2500, category: "Optimize Medication Therapy" },
        { type: "PDF", name: "Optimize Medication Therapy - Proton Pump Inhibitor (Long-Term Therapy)", size: "0.8 MB", downloads: 2500, category: "Optimize Medication Therapy" },
        { type: "PDF", name: "Optimize Medication Therapy - Statin in ASCVD", size: "0.7 MB", downloads: 2500, category: "Optimize Medication Therapy" },
        
        // High Risk Medication & Suboptimal Drug Selection Forms
        { type: "PDF", name: "High Risk Medication - 1st Generation Antihistamines", size: "0.6 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Antiparkinson Agents", size: "0.7 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Barbiturates", size: "0.6 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Benzodiazepine Sedative Hypnotic", size: "0.7 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Desiccated Thyroid", size: "0.6 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Dicyclomine", size: "0.5 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Digoxin 0.25mg", size: "0.6 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Estrogen", size: "0.6 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Long Acting Sulfonylureas", size: "0.7 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Nitrofurantoin", size: "0.6 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - NON BZD Hypnotics", size: "0.6 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Paroxetine", size: "0.5 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Skeletal Muscle Relaxant", size: "0.6 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "High Risk Medication - Tricyclic antidepressants", size: "0.7 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "Suboptimal Drug Selection - DPP-IV Inhibitor and GLP-1 Agonist", size: "0.8 MB", downloads: 2500, category: "High Risk Medications" },
        { type: "PDF", name: "Suboptimal Drug Selection - Multiple CNS-Active Agents", size: "0.7 MB", downloads: 2500, category: "High Risk Medications" }
      ]
    },
    'timemymeds': {
      title: "MedSync: TimeMyMeds",
      subtitle: "Engineering Proactive Patient Engagement",
      description: "A comprehensive medication synchronization program that transitions pharmacies from a reactive, refill-on-demand model to a proactive, appointment-based system. TimeMyMeds aligns all of a patient's chronic medication refills to a single monthly pickup, improving adherence and creating the foundation for clinical services delivery.",
      duration: "Comprehensive Training",
      modules: 2,
      enrolled: 1800,
      rating: 4.8,
      completionTime: "Comprehensive Training",
      certificationType: "Foundation Certificate",
      level: "Beginner",
      highlights: ["Operational Flywheel", "Patient Loyalty", "Revenue Foundation"],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/a9bcfd25-4715-4918-a88b-80941309542e.jpg",
      overview: {
        keyComponents: [
          "3-Part Enrollment Process: The Offer, The Enrollment, The Appointment Day",
          "PMAP (Patient Management Access Portal) software workflow training", 
          "Automated patient communication and notification systems",
          "Adherence improvement protocols achieving 80%+ PDC scores",
          "Monthly clinical appointment scheduling framework",
          "Gateway integration to all other ClinicalRxQ clinical services",
          "Spanish-language enrollment materials for diverse patient populations",
          "Predictable appointment-based care model replacing reactive refill requests"
        ],
        benefits: [
          "Fundamentally transforms pharmacy workflow from reactive to proactive",
          "Increases patient medication adherence to 80%+ PDC consistently",
          "Improves operational efficiency and patient management",
          "Creates predictable workflow and enhanced patient loyalty",
          "Establishes dedicated clinical appointment time for billable services",
          "Improves inventory management through predictable dispensing patterns",
          "Builds the essential foundation for launching all clinical services",
          "Enhances patient loyalty through convenient single monthly pickup",
          "Smooths daily workload by batching fills and reducing interruptions"
        ],
        highlights: [
          { icon: Zap, title: "Workflow Transformation", description: "Complete operational model re-engineering from reactive to proactive care" },
          { icon: Target, title: "Patient Engagement", description: "Monthly appointment-based touchpoints for ongoing clinical care" },
          { icon: TrendingUp, title: "Revenue Foundation", description: "Essential gateway enabling all other clinical services delivery" }
        ]
      },
      curriculum: [
        { number: 1, title: "TimeMyMeds Training", duration: "Comprehensive Training" },
        { number: 2, title: "TMM PMAP Training", duration: "Software Training" }
      ],
      resources: [
        // Core Protocol & Training Resources
        { type: "PDF", name: "TimeMyMeds Protocol", size: "2.8 MB", downloads: 1800, category: "Protocol Manuals" },
        { type: "Video", name: "TimeMyMeds Training", size: "145 MB", downloads: 1800, category: "Training Modules" },
        { type: "Video", name: "TMM PMAP Training", size: "120 MB", downloads: 1800, category: "Training Modules" },
        
        // Documentation Forms
        { type: "PDF", name: "TMM Appointment Day Form", size: "0.8 MB", downloads: 1800, category: "Documentation Forms" },
        { type: "PDF", name: "TMM Appointment Day Form (page 2)", size: "0.6 MB", downloads: 1800, category: "Documentation Forms" },
        { type: "PDF", name: "TMM Enrollment Form", size: "1.2 MB", downloads: 1800, category: "Documentation Forms" },
        { type: "PDF", name: "TMM Enrollment Form - SPANISH", size: "1.3 MB", downloads: 1800, category: "Documentation Forms" },
        { type: "PDF", name: "TMM Offer Form", size: "0.9 MB", downloads: 1800, category: "Documentation Forms" },
        
        // Additional Resources
        { type: "PDF", name: "PMAP User Guide", size: "1.5 MB", downloads: 1800, category: "Additional Resources" },
        { type: "PDF", name: "Patient Communication Scripts", size: "0.7 MB", downloads: 1800, category: "Additional Resources" }
      ]
    },
    'test-treat': {
      title: "Test & Treat Services",
      subtitle: "Acute Care in the Community Setting",
      description: "Complete training for CLIA-waived point-of-care testing and pharmacist-led treatment for common acute conditions.",
      duration: "14 hours",
      modules: 7,
      enrolled: 950,
      rating: 4.7,
      completionTime: "14 hours",
      certificationType: "Advanced Certificate",
      level: "Advanced",
      highlights: ["Expanding Scope", "Public Health Impact", "Immediate Revenue"],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/6a6bd0c9-62f5-4ed0-8814-b525a11d84a3.jpg",
      overview: {
        keyComponents: [
          "Influenza A/B testing and treatment",
          "Group A Strep testing and treatment",
          "COVID-19 diagnostic testing",
          "Sofia 2 analyzer operation and maintenance",
          "State-specific treatment protocols",
          "Complete medical billing guide (E/M, CPT, ICD-10)"
        ],
        benefits: [
          "Expands scope of pharmacy practice",
          "Provides immediate patient care access",
          "Enhances public health role",
          "Provides immediate patient care",
          "Reduces healthcare system burden",
          "Builds patient trust and loyalty"
        ],
        highlights: [
          { icon: Shield, title: "CLIA-Waived Testing", description: "Complete POCT protocols" },
          { icon: Target, title: "Treatment Authority", description: "State-approved protocols" },
          { icon: TrendingUp, title: "Immediate Revenue", description: "Billable services from day one" }
        ]
      },
      curriculum: [
        { number: 1, title: "Point-of-Care Testing Fundamentals", duration: "105 min" },
        { number: 2, title: "Sofia 2 Analyzer Operation", duration: "120 min" },
        { number: 3, title: "Influenza Testing & Treatment", duration: "135 min" },
        { number: 4, title: "Strep Testing & Treatment", duration: "120 min" },
        { number: 5, title: "COVID-19 Testing Protocols", duration: "90 min" },
        { number: 6, title: "Medical Billing for POCT", duration: "105 min" },
        { number: 7, title: "Quality Control & Compliance", duration: "75 min" }
      ],
      resources: [
        { type: "PDF", name: "Test and Treat Protocol Manual", size: "2.8 MB", downloads: 950, category: "Protocol Manuals" },
        { type: "Video", name: "Test and Treat Training", size: "145 MB", downloads: 950, category: "Training Modules" },
        { type: "PDF", name: "Sofia 2 Operation Manual", size: "3.5 MB", downloads: 950, category: "Protocol Manuals" },
        { type: "PDF", name: "State Treatment Protocols", size: "2.2 MB", downloads: 950, category: "Protocol Manuals" },
        { type: "PDF", name: "COVID Intake and Assessment Form", size: "0.8 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "COVID Recommendations", size: "0.7 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Flu Assessment", size: "0.9 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Flu Intake Page 1", size: "0.8 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Flu Intake Page 2", size: "0.7 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Flu Recommendations", size: "0.8 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Flu Treatment - Adult", size: "0.9 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Flu Treatment - Peds", size: "0.8 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Strep Assessment", size: "0.7 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Strep Intake", size: "0.8 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Strep Recommendations", size: "0.7 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Strep Treatment - Adult", size: "0.9 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Strep Treatment - Peds", size: "0.8 MB", downloads: 950, category: "Documentation Forms" },
        { type: "PDF", name: "Medical Billing Guide", size: "2.6 MB", downloads: 950, category: "Additional Resources" },
        { type: "ZIP", name: "Quality Control Forms", size: "4.1 MB", downloads: 950, category: "Additional Resources" }
      ]
    },
    'hba1c-testing': {
      title: "HbA1c Testing",
      subtitle: "Proactive Diabetes Management",
      description: "Targeted program for conducting CLIA-waived Hemoglobin A1c testing to support comprehensive diabetes care management.",
      duration: "8 hours",
      modules: 4,
      enrolled: 1200,
      rating: 4.8,
      completionTime: "8 hours",
      certificationType: "Intermediate Certificate",
      level: "Intermediate",
      highlights: ["Diabetes Care", "Value-Based Care", "Provider Integration"],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/2b413115-0e7c-467d-acbb-02db27c71af5.jpg",
      overview: {
        keyComponents: [
          "A1CNow+ analyzer operation",
          "Clinical integration with MTM platforms",
          "Value-based care alignment",
          "Provider communication protocols",
          "3-part CPT billing process",
          "Quality control and documentation"
        ],
        benefits: [
          "Supports comprehensive diabetes care",
          "Provides essential diagnostic services",
          "Aligns with value-based care initiatives",
          "Enhances provider relationships",
          "Improves patient outcomes",
          "Creates measurable health data"
        ],
        highlights: [
          { icon: Target, title: "Diabetes Focus", description: "Comprehensive diabetes care" },
          { icon: Shield, title: "Value-Based Care", description: "Quality metrics alignment" },
          { icon: TrendingUp, title: "Provider Integration", description: "Collaborative care approach" }
        ]
      },
      curriculum: [
        { number: 1, title: "HbA1c Testing Fundamentals", duration: "90 min" },
        { number: 2, title: "A1CNow+ Analyzer Training", duration: "120 min" },
        { number: 3, title: "Clinical Integration & Documentation", duration: "105 min" },
        { number: 4, title: "Billing & Provider Communication", duration: "75 min" }
      ],
      resources: [
        { type: "PDF", name: "Hemoglobin A1c Testing Protocol", size: "2.1 MB", downloads: 1200, category: "Protocol Manuals" },
        { type: "PDF", name: "A1c Meter Instructions", size: "1.2 MB", downloads: 1200, category: "Protocol Manuals" },
        { type: "PDF", name: "A1CNow+ Operation Manual", size: "1.8 MB", downloads: 1200, category: "Protocol Manuals" },
        { type: "PDF", name: "A1c CPT Code Billing", size: "1.5 MB", downloads: 1200, category: "Additional Resources" },
        { type: "PDF", name: "A1c Result CPT Code Billing", size: "1.3 MB", downloads: 1200, category: "Additional Resources" },
        { type: "PDF", name: "Clinical Integration Guide", size: "1.8 MB", downloads: 1200, category: "Additional Resources" },
        { type: "PDF", name: "Provider Communication Templates", size: "1.3 MB", downloads: 1200, category: "Additional Resources" }
      ]
    },
    'oral-contraceptives': {
      title: "Pharmacist-Initiated Oral Contraceptives",
      subtitle: "A New Frontier in Patient Access",
      description: "Cutting-edge training for pharmacists to independently initiate and dispense hormonal contraceptive therapy under state protocols.",
      duration: "10 hours",
      modules: 5,
      enrolled: 650,
      rating: 4.9,
      completionTime: "10 hours",
      certificationType: "Advanced Certificate",
      level: "Advanced",
      highlights: ["Practice Innovation", "Access to Care", "Market Differentiation"],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/d31303bc-96e2-4356-9e07-6695cd78fd09.jpg",
      overview: {
        keyComponents: [
          "U.S. Medical Eligibility Criteria (USMEC) training",
          "Physical assessment and screening protocols",
          "Contraceptive therapy selection algorithms",
          "Comprehensive patient counseling methods",
          "Provider communication and documentation",
          "State-specific compliance requirements"
        ],
        benefits: [
          "Expands pharmacist scope of practice",
          "Improves access to reproductive health",
          "Enhances patient care accessibility",
          "Differentiates practice in market",
          "Builds patient relationships",
          "Addresses critical healthcare gaps"
        ],
        highlights: [
          { icon: Zap, title: "Practice Innovation", description: "Cutting-edge pharmacy practice" },
          { icon: Target, title: "Access to Care", description: "Removes healthcare barriers" },
          { icon: TrendingUp, title: "Market Differentiation", description: "Competitive advantage" }
        ]
      },
      curriculum: [
        { number: 1, title: "Contraceptive Therapy Fundamentals", duration: "120 min" },
        { number: 2, title: "USMEC & Patient Screening", duration: "150 min" },
        { number: 3, title: "Physical Assessment Skills", duration: "135 min" },
        { number: 4, title: "Patient Counseling & Education", duration: "105 min" },
        { number: 5, title: "Documentation & Compliance", duration: "90 min" }
      ],
      resources: [
        { type: "PDF", name: "Pharmacist-Initiated Oral Contraceptives Protocol", size: "3.4 MB", downloads: 650, category: "Protocol Manuals" },
        { type: "PDF", name: "Patient Screening Forms", size: "1.7 MB", downloads: 650, category: "Documentation Forms" },
        { type: "PDF", name: "USMEC Training Manual", size: "2.8 MB", downloads: 650, category: "Additional Resources" },
        { type: "PDF", name: "Counseling Protocols", size: "2.2 MB", downloads: 650, category: "Additional Resources" },
        { type: "PDF", name: "State Compliance Guide", size: "2.5 MB", downloads: 650, category: "Additional Resources" }
      ]
    },
    'medical-billing': {
      title: "Medical Billing & Reimbursement",
      subtitle: "The Keystone of Sustainability",
      description: "Comprehensive education in medical billing for pharmacist-provided services, ensuring long-term financial viability of clinical programs.",
      duration: "16 hours",
      modules: 8,
      enrolled: 2200,
      rating: 4.8,
      completionTime: "16 hours",
      certificationType: "Foundation Certificate",
      level: "Foundation",
      highlights: ["Financial Sustainability", "Compliance Focus", "Revenue Optimization"],
      image: "https://pub-cdn.sider.ai/u/U03VH4NVNOE/web-coder/687655a5b1dac45b18db4f5c/resource/64859843-bddc-4444-be80-9be3fc103e34.jpg",
      overview: {
        keyComponents: [
          "Complete revenue cycle management",
          "CPT, HCPCS, and ICD-10 code mastery",
          "Evaluation and Management (E/M) coding",
          "HIPAA compliance and documentation",
          "Fraud and abuse prevention",
          "Integrated billing within clinical protocols"
        ],
        benefits: [
          "Ensures program operational sustainability",
          "Optimizes documentation and compliance",
          "Reduces administrative burden",
          "Streamlines program management",
          "Builds billing confidence",
          "Supports practice growth"
        ],
        highlights: [
          { icon: Shield, title: "Financial Sustainability", description: "Long-term viability" },
          { icon: Target, title: "Compliance Focus", description: "Risk mitigation" },
          { icon: TrendingUp, title: "Revenue Optimization", description: "Maximize reimbursement" }
        ]
      },
      curriculum: [
        { number: 1, title: "Medical Billing Fundamentals", duration: "90 min" },
        { number: 2, title: "CPT & HCPCS Coding", duration: "135 min" },
        { number: 3, title: "ICD-10 Diagnosis Coding", duration: "120 min" },
        { number: 4, title: "E/M Coding for Pharmacists", duration: "150 min" },
        { number: 5, title: "Revenue Cycle Management", duration: "105 min" },
        { number: 6, title: "HIPAA Compliance", duration: "90 min" },
        { number: 7, title: "Fraud & Abuse Prevention", duration: "75 min" },
        { number: 8, title: "Claims Processing & Appeals", duration: "95 min" }
      ],
      resources: [
        { type: "PDF", name: "Complete Billing Manual", size: "4.2 MB", downloads: 2200, category: "Protocol Manuals" },
        { type: "PDF", name: "CPT Code Reference", size: "2.8 MB", downloads: 2200, category: "Protocol Manuals" },
        { type: "PDF", name: "ICD-10 Quick Reference", size: "3.1 MB", downloads: 2200, category: "Protocol Manuals" },
        { type: "PDF", name: "E/M Coding Guide", size: "2.5 MB", downloads: 2200, category: "Protocol Manuals" },
        { type: "ZIP", name: "Billing Forms & Templates", size: "5.7 MB", downloads: 2200, category: "Documentation Forms" },
        { type: "PDF", name: "CPT Code Billing Blanks", size: "1.8 MB", downloads: 2200, category: "Documentation Forms" },
        { type: "Excel", name: "CPT Code Billing Blanks.xlsx", size: "2.2 MB", downloads: 2200, category: "Documentation Forms" }
      ]
    }
  };

  const program = programs[id as keyof typeof programs];

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Program Not Found</h1>
            <p className="text-gray-600 mb-8">The requested program could not be found.</p>
            <Link to="/programs">
              <Button>Back to Programs</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 via-purple-600/50 to-cyan-500/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <Link to="/programs" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Programs
                </Link>
              </div>
              
              <div className="flex gap-4 mb-4">
                {program.highlights.map((highlight, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {highlight}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-5xl font-bold mb-4">{program.title}</h1>
              <p className="text-xl text-white/90 mb-6">{program.subtitle}</p>
              <p className="text-lg text-white/80 mb-8">{program.description}</p>
              

            </div>
          </div>
        </div>
      </section>

      {/* Certification Highlight */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-8 text-lg font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Duration: {program.completionTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>Certification: {program.certificationType}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-8">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      Program Components
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {program.overview.keyComponents.map((component, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="mt-8">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Training Modules</h3>
                <div className="space-y-4">
                  {program.curriculum.map((module, index) => (
                    <Card key={index}>
                      <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            {module.number}
                          </div>
                          <div>
                            <h4 className="font-semibold">{module.title}</h4>
                            <p className="text-sm text-gray-600">{module.duration}</p>
                          </div>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Start Module
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="forms" className="mt-8">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Downloadable Resources</h3>
                
                {/* Protocol Manuals */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-purple-600">Protocol Manuals</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.resources.filter(r => r.category === "Protocol Manuals")
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow h-24">
                        <CardContent className="flex items-center justify-between p-4 h-full">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-4 w-4 text-purple-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-sm truncate">{resource.name}</h5>
                              <p className="text-xs text-gray-600">{resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 flex-shrink-0">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* General Forms */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-blue-600">General Forms</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.resources.filter(r => r.category === "General Forms")
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow h-24">
                        <CardContent className="flex items-center justify-between p-4 h-full">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-4 w-4 text-blue-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-sm truncate">{resource.name}</h5>
                              <p className="text-xs text-gray-600">{resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 flex-shrink-0">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Medical Conditions Flowsheets */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-green-600">Medical Conditions Flowsheets</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.resources.filter(r => r.category === "Medical Conditions")
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow h-24">
                        <CardContent className="flex items-center justify-between p-4 h-full">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-4 w-4 text-green-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-sm truncate">{resource.name}</h5>
                              <p className="text-xs text-gray-600">{resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 flex-shrink-0">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* TIP Forms */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-orange-600">Outcomes TIP Forms</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.resources.filter(r => r.category === "TIP Forms")
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow h-24">
                        <CardContent className="flex items-center justify-between p-4 h-full">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-4 w-4 text-orange-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-sm truncate">{resource.name}</h5>
                              <p className="text-xs text-gray-600">{resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 flex-shrink-0">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Prescriber Communication Forms */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-cyan-600">Prescriber Communication Forms</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.resources.filter(r => r.category === "Prescriber Communication")
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow h-24">
                        <CardContent className="flex items-center justify-between p-4 h-full">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-4 w-4 text-cyan-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-sm truncate">{resource.name}</h5>
                              <p className="text-xs text-gray-600">{resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 flex-shrink-0">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Drug Interaction Forms */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-red-600">Drug Interaction Forms</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.resources.filter(r => r.category === "Drug Interactions")
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow h-24">
                        <CardContent className="flex items-center justify-between p-4 h-full">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-4 w-4 text-red-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-sm truncate">{resource.name}</h5>
                              <p className="text-xs text-gray-600">{resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 flex-shrink-0">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Needs Drug Therapy Forms */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-indigo-600">Needs Drug Therapy Forms</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.resources.filter(r => r.category === "Needs Drug Therapy")
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow h-24">
                        <CardContent className="flex items-center justify-between p-4 h-full">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-4 w-4 text-indigo-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-sm truncate">{resource.name}</h5>
                              <p className="text-xs text-gray-600">{resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 flex-shrink-0">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Optimize Medication Therapy Forms */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-teal-600">Optimize Medication Therapy Forms</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.resources.filter(r => r.category === "Optimize Medication Therapy")
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow h-24">
                        <CardContent className="flex items-center justify-between p-4 h-full">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-4 w-4 text-teal-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-sm truncate">{resource.name}</h5>
                              <p className="text-xs text-gray-600">{resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 flex-shrink-0">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* High Risk Medications & Suboptimal Drug Selection Forms */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-pink-600">High Risk Medications & Suboptimal Drug Selection</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {program.resources.filter(r => r.category === "High Risk Medications")
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((resource, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow h-24">
                        <CardContent className="flex items-center justify-between p-4 h-full">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-4 w-4 text-pink-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h5 className="font-medium text-sm truncate">{resource.name}</h5>
                              <p className="text-xs text-gray-600">{resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1 flex-shrink-0">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Summary Note */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Complete MTM Resource Library</h4>
                  <p className="text-gray-600 mb-3">This comprehensive program includes over 100+ specialized forms and resources:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                    <div>• 6 Protocol Manuals</div>
                    <div>• 6 General Forms</div>
                    <div>• 12 Medical Condition Flowsheets</div>
                    <div>• 21 TIP Forms</div>
                    <div>• 5 Prescriber Communication</div>
                    <div>• 12 Drug Interaction Forms</div>
                    <div>• 12 Needs Drug Therapy</div>
                    <div>• 16 High Risk Medication Forms</div>
                  </div>
                  <p className="text-sm text-purple-600 font-medium">Everything you need to implement a complete MTM program in your pharmacy.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="additional-resources" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-purple-500" />
                      Expert Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Weekly Office Hours</div>
                          <div className="text-sm text-gray-600">Live Q&A sessions with ClinicalRxQ experts</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MessageSquare className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Peer Network</div>
                          <div className="text-sm text-gray-600">Connect with other ClinicalRxQ members</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Documentation Support</div>
                          <div className="text-sm text-gray-600">Direct help with compliance and documentation</div>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Implementation Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Setup Checklist</div>
                          <div className="text-sm text-gray-600">Step-by-step implementation guide</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Video className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Demo Videos</div>
                          <div className="text-sm text-gray-600">See the protocols in action</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Calculator className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Impact Calculator</div>
                          <div className="text-sm text-gray-600">Calculate your patient care impact</div>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>



      <Footer />
    </div>
  );
}