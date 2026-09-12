-- ==============================================================================
-- AGNEXA TECHNOLOGIES - SUPABASE DATABASE SCHEMA
-- Execute this script directly in your Supabase SQL Editor (Dashboard -> SQL Editor)
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Services Table
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category VARCHAR(100) NOT NULL,
    tagline TEXT NOT NULL,
    icon VARCHAR(100) DEFAULT 'Code2',
    problem TEXT,
    solution TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    "techStack" JSONB DEFAULT '[]'::jsonb,
    process JSONB DEFAULT '[]'::jsonb,
    benefits JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Users Table (Admin & Team)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Contact Inquiries & Leads Table
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "fullName" VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    service VARCHAR(255),
    budget VARCHAR(100),
    timeline VARCHAR(100),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Portfolio / Case Studies Table
CREATE TABLE IF NOT EXISTS public.portfolio (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    client VARCHAR(255),
    category VARCHAR(100) NOT NULL,
    overview TEXT,
    challenge TEXT,
    solution TEXT,
    results JSONB DEFAULT '[]'::jsonb,
    technologies JSONB DEFAULT '[]'::jsonb,
    "imageCover" TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Blog & Insights Table
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT,
    author VARCHAR(255) DEFAULT 'Agnexa Research Team',
    category VARCHAR(100),
    tags JSONB DEFAULT '[]'::jsonb,
    "readTime" VARCHAR(50) DEFAULT '5 min read',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS public.newsletters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    is_subscribed BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Career Applications Table
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    position VARCHAR(255) NOT NULL,
    "resumeUrl" TEXT,
    portfolio VARCHAR(255),
    notes TEXT,
    status VARCHAR(50) DEFAULT 'reviewing',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- ENABLE ROW LEVEL SECURITY (RLS) & POLICIES
-- ==============================================================================
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Allow public read access to public resources
DROP POLICY IF EXISTS "Public can view services" ON public.services;
CREATE POLICY "Public can view services" ON public.services FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view portfolio" ON public.portfolio;
CREATE POLICY "Public can view portfolio" ON public.portfolio FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view blogs" ON public.blogs;
CREATE POLICY "Public can view blogs" ON public.blogs FOR SELECT USING (true);

-- Allow public insert to contact, newsletter, and application forms
DROP POLICY IF EXISTS "Public can submit contact form" ON public.contacts;
CREATE POLICY "Public can submit contact form" ON public.contacts FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public can subscribe newsletter" ON public.newsletters;
CREATE POLICY "Public can subscribe newsletter" ON public.newsletters FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public can apply for careers" ON public.applications;
CREATE POLICY "Public can apply for careers" ON public.applications FOR INSERT WITH CHECK (true);

-- Allow service role and authenticated users full access
DROP POLICY IF EXISTS "Full access to service role for services" ON public.services;
CREATE POLICY "Full access to service role for services" ON public.services USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Full access to service role for users" ON public.users;
CREATE POLICY "Full access to service role for users" ON public.users USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Full access to service role for contacts" ON public.contacts;
CREATE POLICY "Full access to service role for contacts" ON public.contacts USING (true) WITH CHECK (true);

-- ==============================================================================
-- SEED DATA: 9 EXACT SERVICES REQUIRED BY AGNEXA TECHNOLOGIES
-- ==============================================================================
INSERT INTO public.services (title, slug, category, tagline, icon, problem, solution, features, "techStack", process, benefits)
VALUES
(
    'Cloud Web Hosting',
    'cloud-web-hosting',
    'Cloud Infrastructure',
    'High-performance AWS-powered hosting with free SSL, daily backups, and 99.9% uptime guarantee.',
    'Cloud',
    'Traditional hosting suffers from unexpected downtime, unscalable infrastructure, slow page loads, and fragile backup processes.',
    'Enterprise-grade, elastic cloud web hosting orchestrated on AWS infrastructure with high-availability clustering and continuous monitoring.',
    '["99.9% Uptime SLA", "Automated Daily Backups", "Complimentary SSL Certificates", "Elastic Autoscaling", "Global Edge CDN Integration", "24/7 Security & DDoS Mitigation"]'::jsonb,
    '["AWS EC2", "AWS S3", "CloudFront CDN", "Route 53", "Docker", "Nginx", "Let''s Encrypt"]'::jsonb,
    '[{"step":"01","title":"Architecture Audit","desc":"Analyze your bandwidth, computational requirements, and traffic projections."},{"step":"02","title":"Cloud Provisioning","desc":"Configure dedicated AWS virtual VPCs, SSL certificates, and database instances."},{"step":"03","title":"Zero-Downtime Cutover","desc":"Migrate DNS records and databases seamlessly without service interruption."},{"step":"04","title":"Continuous Monitoring","desc":"Deploy automated anomaly detection, backup validations, and alert triggers."}]'::jsonb,
    '["99.9% Guaranteed Uptime", "Sub-second global load times", "Hands-free automated daily backups", "Resilient disaster recovery protocol"]'::jsonb
),
(
    'Web Application Development',
    'web-application-development',
    'Full-Stack Engineering',
    'Full-stack custom web solutions built for scale and performance using modern reactive frameworks and secure backend architectures.',
    'Globe',
    'Monolithic, legacy systems suffer from slow development cycles, poor mobile experiences, security vulnerabilities, and brittle scaling.',
    'Engineering high-concurrency, responsive, enterprise-grade web applications utilizing modern component architectures and microservices.',
    '["Custom Microservices Architecture", "Progressive Web App (PWA) Capabilities", "Enterprise Role-Based Access Control", "Interactive Real-Time WebSockets", "Search-Engine Optimized SSR/SSG", "Automated CI/CD Deployment Pipelines"]'::jsonb,
    '["React.js", "Next.js", "Vue.js", "Angular", "Node.js", "Express.js", "Django", "PostgreSQL", "MongoDB"]'::jsonb,
    '[{"step":"01","title":"Domain Discovery","desc":"Map out business workflows, user personas, and data interaction models."},{"step":"02","title":"System Architecture","desc":"Design scalable REST/GraphQL APIs, schemas, and security boundaries."},{"step":"03","title":"Iterative Sprint Delivery","desc":"Bi-weekly production builds with full test coverage and automated QA."},{"step":"04","title":"Scale & Evolution","desc":"Performance optimizations, telemetry observability, and feature expansions."}]'::jsonb,
    '["4x faster development iteration", "Sub-100ms API response benchmarks", "Bank-grade JWT and OAuth security", "Infinite scalability from startup to enterprise"]'::jsonb
),
(
    'Mobile App Solutions',
    'mobile-app-solutions',
    'Mobile Engineering',
    'Native-caliber mobile experiences for iOS and Android, leveraging cross-platform technologies to ensure rapid deployment and consistent UI.',
    'Smartphone',
    'Building separate native apps for iOS and Android doubles development expenses, delays time-to-market, and causes feature disparities.',
    'Single-codebase cross-platform mobile solutions delivering fluid 60fps animations, native sensor integration, and unified business logic.',
    '["Cross-Platform iOS & Android Deployments", "Offline-First Data Synchronization", "Hardware Sensor & Bluetooth BLE Support", "Push Notification Campaigns & Deep Linking", "Secure In-App Biometric Authentication", "App Store & Google Play Launch Management"]'::jsonb,
    '["React Native", "Flutter", "TypeScript", "iOS Swift Interop", "Android Kotlin Interop", "Firebase", "SQLite"]'::jsonb,
    '[{"step":"01","title":"UX & Flow Prototype","desc":"Interactive Figma prototypes calibrated for touch gestures and mobile ergonomics."},{"step":"02","title":"Core Engine Development","desc":"Build reusable shared logic, local encryption, and backend synchronization."},{"step":"03","title":"Multi-Device Field Testing","desc":"Test across dozens of iOS and Android form factors, screen sizes, and OS versions."},{"step":"04","title":"Store Submission & Lifecycle","desc":"Full handling of Apple App Store and Google Play reviews and approval workflows."}]'::jsonb,
    '["50% cost savings compared to dual native builds", "Simultaneous iOS and Android rollouts", "Smooth 60fps performance", "Higher user retention through rich push engagement"]'::jsonb
),
(
    'Web Designing',
    'web-designing',
    'UI/UX & Creative',
    'Beautiful, user-centric designs that captivate and engage your audience.',
    'Palette',
    'Outdated visual design and clunky user interfaces lead to high bounce rates, lost buyer confidence, and poor brand perception.',
    'Modern, immersive, high-conversion visual design tailored to your exact brand positioning with bespoke typography and layout systems.',
    '["Responsive Multi-Breakpoint Layouts", "Bespoke Design Systems & Styleguides", "Conversion-Focused Landing Pages", "Interactive Micro-Interactions & Transitions", "Accessible WCAG 2.1 Compliant UI", "Dark / Light Mode Adaptive Theming"]'::jsonb,
    '["Figma", "Adobe XD", "Tailwind CSS", "Framer Motion", "WebGL / Three.js", "Design Tokens"]'::jsonb,
    '[{"step":"01","title":"Moodboard & Visual Direction","desc":"Align visual identity, color palettes, and typography hierarchies."},{"step":"02","title":"High-Fidelity Wireframes","desc":"Craft detailed UI wireframes covering desktop, tablet, and mobile breakpoints."},{"step":"03","title":"Prototype & Motion","desc":"Add micro-interactions, scroll transitions, and realistic prototypes."},{"step":"04","title":"Asset & Spec Handoff","desc":"Provide pixel-perfect design tokens, SVGs, and component documentation."}]'::jsonb,
    '["300% increase in visitor engagement", "Stronger brand authority and credibility", "Higher conversion rates on key call-to-actions", "Seamless developer handoff"]'::jsonb
),
(
    'Web Deployment',
    'web-deployment',
    'DevOps & Infrastructure',
    'Seamless deployment solutions ensuring your application is always online.',
    'Layers',
    'Manual deployment workflows cause unexpected outages, configuration drift, rollbacks failures, and slow product releases.',
    'Automated, zero-downtime continuous integration and continuous deployment (CI/CD) pipelines tailored for modern cloud environments.',
    '["Automated CI/CD Pipeline Setup", "Zero-Downtime Blue/Green Deployments", "Docker Containerization", "Automated Rollback Safeguards", "SSL / TLS Automated Renewal", "Production Environment Configuration Audit"]'::jsonb,
    '["Docker", "GitHub Actions", "GitLab CI", "AWS CodePipeline", "Kubernetes", "Nginx", "Terraform"]'::jsonb,
    '[{"step":"01","title":"Infrastructure Assessment","desc":"Inspect codebase dependencies, environment variables, and build artifacts."},{"step":"02","title":"Pipeline Scripting","desc":"Configure automated build, test, and release scripts in GitHub Actions."},{"step":"03","title":"Staging & Verification","desc":"Deploy to a mirrored staging environment for automated smoke tests."},{"step":"04","title":"Zero-Downtime Production Cutover","desc":"Automate traffic shifting with instant health checks and rollback triggers."}]'::jsonb,
    '["Zero deployment downtime", "Releases take minutes instead of days", "Instant rollback capabilities on regression", "Reliable automated build reproducibility"]'::jsonb
),
(
    'Web Hosting',
    'web-hosting',
    'Hosting Solutions',
    'Reliable, fast, and secure hosting solutions for your online presence.',
    'Server',
    'Slow website loading speeds, unmanaged servers, unpatched vulnerabilities, and absent support damage search rankings and user trust.',
    'Managed hosting solutions configured for blazing load speeds, continuous server hardening, automated patching, and 24/7 technical support.',
    '["SSD NVMe High-Speed Storage", "Free Automated SSL / TLS Certificates", "Daily Offsite Backups", "DDoS Protection & Firewall Hardening", "One-Click App Installations", "Dedicated Technical Support Team"]'::jsonb,
    '["cPanel", "Linux / Ubuntu Server", "Apache / Nginx", "MySQL", "PHP / Node.js", "Cloudflare"]'::jsonb,
    '[{"step":"01","title":"Hosting Consultation","desc":"Select optimal server tier, storage capacity, and bandwidth requirements."},{"step":"02","title":"Account & Domain Setup","desc":"Provision server space, configure DNS, and issue cryptographic certificates."},{"step":"03","title":"Website Migration","desc":"Migrate databases, files, and email configurations with zero loss."},{"step":"04","title":"Hardening & Live Launch","desc":"Apply security rules, caching modules, and launch your online presence."}]'::jsonb,
    '["Uninterrupted business continuity", "Fast page loads that improve SEO", "Protection against malicious attacks", "Peace of mind with 24/7 managed support"]'::jsonb
),
(
    'Digital Product Design',
    'digital-product-design',
    'Product Strategy & UX',
    'User-centric UI/UX design that bridges the gap between complex functionality and intuitive human interaction through data-driven research.',
    'Sparkles',
    'Complicated, unintuitive workflows frustrate users, inflate onboarding costs, increase churn, and suppress customer lifetime value.',
    'Comprehensive product design combining user interviews, quantitative journey mapping, wireframing, and interactive design systems.',
    '["End-to-End User Journey Mapping", "User Persona Research & Discovery", "Design System Architecture", "Interactive Clickable Prototypes", "Usability Testing & Session Replays", "Product Roadmap & Feature Prioritization"]'::jsonb,
    '["Figma", "FigJam", "Miro", "Lottie", "Design Systems", "Storybook"]'::jsonb,
    '[{"step":"01","title":"Empathize & Research","desc":"Conduct stakeholder interviews and user research to pinpoint exact friction."},{"step":"02","title":"Information Architecture","desc":"Design user flows, site structures, and task completion paths."},{"step":"03","title":"Iterative Interface Design","desc":"Build modern screens, UI components, and accessible design systems."},{"step":"04","title":"Validation & Hand-off","desc":"Test with real end-users, gather usability metrics, and finalize specs."}]'::jsonb,
    '["70% reduction in user onboarding time", "Significantly reduced churn and friction", "Scalable design system that speeds up feature releases", "Intuitive workflows users love"]'::jsonb
),
(
    'Logo Designing',
    'logo-designing',
    'Brand Identity',
    'Unique brand identities that make your business stand out.',
    'Palette',
    'Generic, clip-art logos look unprofessional, fail to leave a lasting impression, and dilute your company''s market value.',
    'Strategic brand identity design creating iconic, memorable logos, complete visual guidelines, typography combinations, and brand collateral.',
    '["Original Bespoke Logo Concepts", "Full Vector Formats (SVG, EPS, PDF, PNG)", "Comprehensive Brand Style Guides", "Color Palette & Typography Selection", "Social Media Kit & Stationery Templates", "Full Copyright Ownership Transfer"]'::jsonb,
    '["Adobe Illustrator", "Vector Graphics", "Brand Guidelines", "Typography", "Color Theory"]'::jsonb,
    '[{"step":"01","title":"Brand Core Discovery","desc":"Understand your target audience, competitors, values, and brand personality."},{"step":"02","title":"Creative Ideation & Sketching","desc":"Develop multiple distinct visual concepts exploring emblems, wordmarks, and abstracts."},{"step":"03","title":"Vector Refinement & Revisions","desc":"Perfect curves, typography pairing, grid balance, and color variations."},{"step":"04","title":"Final Delivery & Guidelines","desc":"Deliver full vector packages, export formats, and brand usage rules."}]'::jsonb,
    '["Memorable visual identity that builds customer trust", "100% scalable vector artwork for print and digital", "Clear brand guidelines for consistent marketing", "Full legal ownership of your brand marks"]'::jsonb
),
(
    'Data Related Solutions',
    'data-related-solutions',
    'Data & Analytics',
    'Advanced analytics and data management to drive informed decisions.',
    'Database',
    'Siloed data, inaccurate spreadsheets, and lack of real-time visibility prevent leadership from making confident, data-driven decisions.',
    'End-to-end data pipelines, real-time analytics dashboards, warehousing, and predictive modeling that turn raw data into strategic advantage.',
    '["Data Warehouse & Lakehouse Engineering", "Real-Time Executive BI Dashboards", "Automated ETL / ELT Data Pipelines", "Predictive Analytics & Machine Learning", "Data Governance & Quality Assurance", "Relational & NoSQL Database Optimization"]'::jsonb,
    '["PostgreSQL", "MongoDB Atlas", "MySQL", "Redis", "Python", "Pandas", "PowerBI", "Apache Kafka"]'::jsonb,
    '[{"step":"01","title":"Data Landscape Audit","desc":"Identify all organizational data sources, formats, and reporting requirements."},{"step":"02","title":"Pipeline & Warehouse Design","desc":"Build automated extraction pipelines with robust error handling and schemas."},{"step":"03","title":"Dashboard & Analytics Build","desc":"Develop real-time visual charts, KPI cards, and self-service query tools."},{"step":"04","title":"Optimization & Governance","desc":"Tune query performance, configure indexing, and set role-based access."}]'::jsonb,
    '["Instant visibility into key company performance metrics", "Single source of truth across all operations", "Accelerate strategic decisions by 5x", "Predictive insights that unlock new revenue"]'::jsonb
),
(
    'Excel Based Services',
    'excel-based-services',
    'Spreadsheets & Automation',
    'Custom Excel automation, VBA macros, advanced financial modeling, and automated spreadsheet reporting solutions.',
    'FileSpreadsheet',
    'Repetitive manual data entry, prone-to-error formulas, fragmented business spreadsheets, broken macros, and lack of automated sync with modern databases.',
    'Bespoke Excel automation solutions, complex VBA/macro engines, dynamic Power Query pipelines, financial models, and automated reporting templates that save hundreds of operational hours.',
    '["Custom VBA & Macro Automation for Repetitive Workflow Reduction", "Advanced Power Query & Power Pivot ETL Data Transformation", "Dynamic Executive Dashboards with Interactive KPI Visualizations", "Complex Financial Modeling, Forecasting & Scenario Analysis Templates", "Automated Database & REST API Ingestion into Microsoft Excel / Google Sheets", "Spreadsheet Audit, Error Rectification & Formula Optimization"]'::jsonb,
    '["Microsoft Excel", "VBA", "Power Query", "Power Pivot", "Office 365", "Python openpyxl", "Google Sheets API"]'::jsonb,
    '[{"step":"01","title":"Workbook Discovery","desc":"Auditing existing spreadsheets, data structures, and repetitive manual bottlenecks."},{"step":"02","title":"Macro & Formula Architecture","desc":"Engineering modular VBA scripts, Power Queries, and dynamic lookup models."},{"step":"03","title":"Dashboard & UX Design","desc":"Crafting clean, executive visual layouts with interactive slicers and KPI summary cards."},{"step":"04","title":"User Training & Handover","desc":"Delivering documented, protected workbooks with step-by-step guidance and support."}]'::jsonb,
    '["Saves 80%+ of repetitive manual reporting and data aggregation time", "Eliminates human calculation errors with standardized validation rules", "Transforms raw table rows into C-level executive insights instantly", "Seamless interoperability with corporate databases and external APIs"]'::jsonb
)
ON CONFLICT (slug) DO UPDATE 
SET 
    title = EXCLUDED.title,
    category = EXCLUDED.category,
    tagline = EXCLUDED.tagline,
    icon = EXCLUDED.icon,
    problem = EXCLUDED.problem,
    solution = EXCLUDED.solution,
    features = EXCLUDED.features,
    "techStack" = EXCLUDED."techStack",
    process = EXCLUDED.process,
    benefits = EXCLUDED.benefits,
    updated_at = NOW();

-- Insert Default Admin Users (Password: Admin@123 hashed with bcrypt)
INSERT INTO public.users (name, email, password, role)
VALUES 
    ('Praful Sonwane', 'prafulsonwane58@gmail.com', '$2a$10$iM.oG91E5BvC41bE4b6hCeo5Oq4Qh9g4FkMhX.H1/P1K6FmH94i8W', 'admin'),
    ('Agnexa Super Admin', 'admin@agnexa.com', '$2a$10$iM.oG91E5BvC41bE4b6hCeo5Oq4Qh9g4FkMhX.H1/P1K6FmH94i8W', 'admin')
ON CONFLICT (email) DO NOTHING;
