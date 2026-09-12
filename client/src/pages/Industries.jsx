import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Activity, ShoppingBag, Truck, GraduationCap, 
  Factory, ArrowRight, CheckCircle2, Sparkles, ShieldCheck 
} from 'lucide-react';
import SEO from '../components/common/SEO';

const industriesData = [
  {
    id: 'fintech',
    name: 'FinTech & Banking',
    icon: Building2,
    tagline: 'High-concurrency financial platforms, algorithmic trading feeds, and regulatory compliance.',
    challenges: 'High-frequency transaction volume, sub-millisecond latency requirements, strict RBI/PCI-DSS regulatory compliance, and multi-factor biometric authentication.',
    solutions: [
      'Microservices financial event streaming via Apache Kafka and Go',
      'PCI-DSS and SOC2 compliant tokenized payment vaults',
      'Automated fraud detection using anomaly detection machine learning',
      'Real-time portfolio management and digital wallet integrations'
    ],
    technologies: ['Go', 'Kafka', 'PostgreSQL', 'TimescaleDB', 'Redis', 'AWS Financial Cloud']
  },
  {
    id: 'healthcare',
    name: 'Healthcare & MedTech',
    icon: Activity,
    tagline: 'HIPAA-compliant telehealth, electronic health records (EHR/EMR), and diagnostic workflows.',
    challenges: 'Medical record privacy, fragmented legacy HL7 standards, high-resolution medical imaging transfer, and zero-downtime clinical availability.',
    solutions: [
      'End-to-end encrypted WebRTC telehealth consultation suites',
      'FHIR/HL7 bidirectional integration gateways',
      'AI diagnostic image triage and laboratory report automation',
      'Patient mobile engagement apps with prescription syncing'
    ],
    technologies: ['React.js', 'Node.js', 'WebRTC', 'HL7/FHIR', 'Python', 'AWS HIPAA']
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    icon: ShoppingBag,
    tagline: 'Headless multi-vendor marketplaces, real-time inventory synchronization, and sub-second checkout.',
    challenges: 'Sudden flash-sale traffic spikes, cart abandonment, distributed inventory drift across warehouses, and multi-currency checkout.',
    solutions: [
      'Headless commerce storefronts powered by Next.js and Tailwind CSS',
      'Multi-warehouse real-time inventory locking with Redis',
      'Personalized recommendation models boosting average order value',
      'Global payment orchestration supporting 130+ currencies'
    ],
    technologies: ['Next.js', 'Shopify Plus / Medusa', 'Redis', 'Elasticsearch', 'Stripe Connect']
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: Truck,
    tagline: 'End-to-end fleet telemetry, automated customs documentation, and predictive warehouse replenishment.',
    challenges: 'Paper-heavy customs paperwork, disconnected legacy ERPs, route inefficiencies, and lack of real-time shipment visibility.',
    solutions: [
      'IoT fleet GPS tracking and dynamic routing optimization',
      'Automated bill of lading and commercial invoice extraction',
      'Predictive inventory stockout alerts and warehouse management (WMS)',
      'Self-service client shipment portals with milestone notifications'
    ],
    technologies: ['Go', 'Node.js', 'Google Maps API', 'TimescaleDB', 'Docker', 'MQTT']
  },
  {
    id: 'edtech',
    name: 'EdTech & Learning',
    icon: GraduationCap,
    tagline: 'Interactive virtual classrooms, browser-based sandboxes, and gamified progress tracking.',
    challenges: 'Low student course completion rates, passive video delivery, browser resource consumption, and grading scalability.',
    solutions: [
      'In-browser cloud code execution sandboxes for engineering students',
      'Interactive live quizzes with real-time peer leaderboards',
      'Adaptive learning pathways matching student proficiency',
      'Automated verifiable blockchain certificate generation'
    ],
    technologies: ['React.js', 'WebSockets', 'Docker Sandboxes', 'PostgreSQL', 'Tailwind']
  },
  {
    id: 'manufacturing',
    name: 'Industry 4.0 & Smart IoT',
    icon: Factory,
    tagline: 'Industrial telemetry ingestion, predictive equipment maintenance, and factory automation.',
    challenges: 'Noisy sensor environments, legacy SCADA hardware, unpredicted machine downtime, and edge latency.',
    solutions: [
      'Edge gateway data ingestion processing 20,000+ sensor ticks/second',
      'Predictive maintenance models alerting teams 48 hours prior to breakdown',
      'Factory floor digital twins with interactive 3D visualizations',
      'Energy consumption monitoring and automated peak-load shaving'
    ],
    technologies: ['Python ML', 'MQTT', 'TimescaleDB', 'Grafana', 'AWS IoT Core']
  }
];

export default function Industries() {
  return (
    <div className="relative pt-24 pb-20">
      <SEO 
        title="Industries We Serve" 
        description="Specialized enterprise IT solutions across FinTech, Healthcare, E-Commerce, Logistics, EdTech, and Smart Manufacturing."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-agnexa-orange-400 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Domain-Specific Technology Engineering</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Purpose-Built Solutions For <span className="text-gradient-brand">Critical Industries</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          Every industry has unique security parameters, compliance frameworks, and transaction dynamics. We bring battle-tested domain architectures to solve your toughest operational challenges.
        </p>
      </section>

      {/* Industry Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {industriesData.map((ind, index) => {
          const Icon = ind.icon;
          const isEven = index % 2 === 0;

          return (
            <div 
              key={ind.id} 
              id={ind.id}
              className="p-8 sm:p-12 rounded-3xl glass-card border border-white/10 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-5 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-agnexa-blue-500/20 text-agnexa-blue-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{ind.name}</h3>
                  <p className="text-sm text-agnexa-orange-400 font-semibold">{ind.tagline}</p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Industry Challenge</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{ind.challenges}</p>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Technology Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.technologies.map((t, i) => (
                        <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-agnexa-navy-800 text-slate-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-agnexa-blue-400">Agnexa Engineering Solutions</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ind.solutions.map((sol, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 leading-relaxed">{sol}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 text-xs font-bold text-agnexa-orange-400 hover:text-white group"
                    >
                      <span>Consult with our {ind.name} practice</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <div className="p-8 rounded-3xl glass-card space-y-4">
          <h3 className="text-2xl font-bold text-white">Don't see your specific vertical listed?</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our software engineering patterns are domain-agnostic and adapt seamlessly to novel business models.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-agnexa-blue-500 text-white text-xs font-bold uppercase tracking-wider"
          >
            <span>Request Custom Vertical Assessment</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
