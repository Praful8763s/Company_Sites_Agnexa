import React from 'react';
import SEO from '../components/common/SEO';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="relative pt-24 pb-20">
      <SEO title="Terms & Conditions" description="Agnexa Technologies Terms and Conditions of Service." />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-2 text-xs text-agnexa-orange-400 font-bold uppercase tracking-widest mb-3">
          <FileText className="w-4 h-4" />
          <span>Terms of Service</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-8">
          Terms & Conditions
        </h1>

        <div className="p-8 sm:p-10 rounded-3xl glass-card space-y-6 text-slate-300 text-sm leading-relaxed border border-white/10">
          <p className="text-xs text-slate-400 font-mono">Effective Date: January 1, 2026 | Last Updated: March 2026</p>

          <h3 className="text-lg font-bold text-white pt-2">1. Agreement to Terms</h3>
          <p>
            By accessing or browsing the website of Agnexa Technologies, requesting architectural proposals, or utilizing our client portals, you agree to be bound by these Terms and Conditions.
          </p>

          <h3 className="text-lg font-bold text-white pt-2">2. Intellectual Property Rights</h3>
          <p>
            The branding, visual assets, trademarks, and design systems displayed on this public portal are the exclusive intellectual property of Agnexa Technologies. For custom client engineering engagements, all bespoke deliverables, source code, and architectural blueprints are assigned to the client partner in accordance with Master Services Agreements (MSAs) and Statements of Work (SOWs).
          </p>

          <h3 className="text-lg font-bold text-white pt-2">3. Accuracy of Consultation Estimates</h3>
          <p>
            Any preliminary timeline, architecture estimations, or cost ranges provided through web inquiries or automated calculators serve as exploratory guidelines and do not constitute formal binding obligations until finalized under an executed commercial contract.
          </p>

          <h3 className="text-lg font-bold text-white pt-2">4. Governing Law</h3>
          <p>
            These Terms are governed by and construed under the laws of the Republic of India. Any disputes arising out of these terms shall be submitted to the exclusive jurisdiction of the competent courts of Bengaluru, Karnataka, India.
          </p>
        </div>
      </section>
    </div>
  );
}
