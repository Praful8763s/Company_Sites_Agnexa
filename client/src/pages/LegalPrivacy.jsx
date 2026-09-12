import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { ShieldCheck } from 'lucide-react';

export default function LegalPrivacy() {
  return (
    <div className="relative pt-24 pb-20">
      <SEO title="Privacy Policy" description="Agnexa Technologies Privacy Policy and Data Protection Framework." />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-2 text-xs text-agnexa-blue-400 font-bold uppercase tracking-widest mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>Legal & Data Protection</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-8">
          Privacy Policy
        </h1>

        <div className="p-8 sm:p-10 rounded-3xl glass-card space-y-6 text-slate-300 text-sm leading-relaxed border border-white/10">
          <p className="text-xs text-slate-400 font-mono">Effective Date: January 1, 2026 | Last Updated: March 2026</p>

          <h3 className="text-lg font-bold text-white pt-2">1. Commitment to Privacy</h3>
          <p>
            Agnexa Technologies ("Agnexa", "we", "our", or "us") respects your privacy and is committed to safeguarding personal and organizational information collected through our website, APIs, and client engagement portals. We comply with international data privacy standards including the Indian Digital Personal Data Protection (DPDP) Act and GDPR principles where applicable.
          </p>

          <h3 className="text-lg font-bold text-white pt-2">2. Information We Collect</h3>
          <p>
            We collect information strictly necessary to provide high-level software engineering consulting and project delivery:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
            <li>Contact Information: Full name, corporate email address, telephone number, and company name.</li>
            <li>Project Specifications: Scope notes, architectural requirements, timelines, and budget bands submitted via RFPs.</li>
            <li>Technical Telemetry: IP addresses, browser types, and access logs collected automatically for DDoS prevention and performance monitoring.</li>
          </ul>

          <h3 className="text-lg font-bold text-white pt-2">3. Zero Client Data Sharing for AI Training</h3>
          <p>
            Any code repositories, vector embeddings, documentation, or enterprise datasets shared under client contracts or mutual NDAs are strictly isolated. We <strong className="text-white">never</strong> expose client intellectual property or sensitive corporate data to public foundation LLM training loops.
          </p>

          <h3 className="text-lg font-bold text-white pt-2">4. Data Retention & Security</h3>
          <p>
            All submitted inquiries and credentials are encrypted both in transit (TLS 1.3) and at rest (AES-256). Data is retained only as long as necessary to fulfill project engagement mandates or comply with statutory auditing requirements.
          </p>

          <h3 className="text-lg font-bold text-white pt-2">5. Contact Our Privacy Office</h3>
          <p>
            For questions regarding this policy or to request data rectification or erasure, please email our legal team at <span className="text-agnexa-blue-400 font-mono">legal@agnexa.com</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
