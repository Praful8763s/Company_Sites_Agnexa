import bcrypt from 'bcryptjs';

export const getInitialData = () => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync('Praful@999s', salt);

  const users = [
    {
      _id: 'usr_admin_001',
      name: 'Praful Sonwane',
      email: 'prafulsonwane58@gmail.com',
      password: hashedPassword,
      role: 'admin',
      company: 'Agnexa Technologies',
      createdAt: new Date().toISOString()
    }
  ];

  const services = [
    {
      _id: 'srv_001',
      title: 'Cloud Web Hosting',
      slug: 'cloud-web-hosting',
      category: 'Cloud & Infrastructure',
      tagline: 'High-performance AWS-powered hosting with free SSL, daily backups, and 99.9% uptime guarantee.',
      icon: 'Cloud',
      problem: 'Slow server response times, unexpected hosting outages, complex SSL certificate renewal, and lack of automated disaster recovery snapshots.',
      solution: 'Agnexa provides enterprise-grade, AWS-powered cloud hosting architectures with zero-configuration SSL, daily automated cloud backups, DDoS defense, and guaranteed 99.9% SLA uptime.',
      features: [
        'High-Performance AWS Cloud Infrastructure with Global Edge Caching',
        'Complimentary Auto-Renewing SSL/TLS Encryption Certificates',
        'Automated Daily Cloud Backups & Instant 1-Click Restore Points',
        '24/7 Server Telemetry Monitoring & 99.9% Guaranteed Uptime SLA',
        'Integrated Web Application Firewall (WAF) & DDoS Mitigation'
      ],
      techStack: ['AWS EC2', 'AWS S3', 'Cloudflare', 'Nginx', 'SSL/TLS', 'Docker'],
      process: [
        { step: '01', title: 'Workload Sizing', desc: 'Analyzing bandwidth, memory, and traffic elasticity requirements.' },
        { step: '02', title: 'Cloud Provisioning', desc: 'Configuring isolated VPCs, high-speed SSD volumes, and caching layers.' },
        { step: '03', title: 'Zero-Downtime Migration', desc: 'Transferring data and pointing DNS records with zero packet drops.' },
        { step: '04', title: 'Continuous Hardening', desc: 'Activating automated backups, health probes, and SSL cert watchers.' }
      ],
      benefits: [
        'Guaranteed 99.9% uptime backed by enterprise SLA',
        'Sub-second page delivery across international regions',
        'Zero manual backup overhead with automated cloud snapshots',
        'Complete protection against brute-force and DDoS disruptions'
      ]
    },
    {
      _id: 'srv_002',
      title: 'Web Application Development',
      slug: 'web-application-development',
      category: 'Web Platforms',
      tagline: 'Full-stack custom web solutions built for scale and performance using modern reactive frameworks and secure backend architectures.',
      icon: 'Globe',
      problem: 'Sluggish legacy frontends, monolithic codebases that break during feature updates, high API latency, and poor mobile browser experiences.',
      solution: 'We engineer bespoke full-stack web applications and SaaS platforms powered by React, Next.js, Node.js, and Django, delivering sub-second hydration and enterprise security.',
      features: [
        'Custom Single Page Applications (SPA) & Multi-Tenant SaaS Platforms',
        'High-Throughput RESTful & GraphQL Microservice Architectures',
        'Progressive Web App (PWA) Capabilities with Offline Resiliency',
        'Role-Based Access Control (RBAC) & Single Sign-On (SSO) Protocols',
        'Automated End-to-End Testing Suites & Continuous Integration'
      ],
      techStack: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      process: [
        { step: '01', title: 'Architecture Blueprint', desc: 'Domain analysis, database schema modeling, and modular component hierarchy.' },
        { step: '02', title: 'Sprint Development', desc: 'Bi-weekly deployable feature increments with automated CI/CD checks.' },
        { step: '03', title: 'Security & Load QA', desc: 'Stress testing, OWASP vulnerability audit, and state synchronization.' },
        { step: '04', title: 'Production Cutover', desc: 'Zero-downtime deployment, APM telemetry tracking, and documentation.' }
      ],
      benefits: [
        'Blazing-fast page load times maximizing SEO and user retention',
        'Modular component architecture saving 40% time on future upgrades',
        'Zero vendor lock-in with 100% intellectual property transfer',
        'Scalable backend capable of handling 10x concurrent traffic spikes'
      ]
    },
    {
      _id: 'srv_003',
      title: 'Mobile App Solutions',
      slug: 'mobile-app-solutions',
      category: 'Mobile Engineering',
      tagline: 'Native-caliber mobile experiences for iOS and Android, leveraging cross-platform technologies to ensure rapid deployment and consistent UI.',
      icon: 'Smartphone',
      problem: 'High cost of maintaining dual native codebases (Swift & Kotlin), UI discrepancies across devices, sluggish scroll performance, and frequent store review rejections.',
      solution: 'Agnexa builds fluid, native-caliber mobile applications using React Native and modern mobile architectures, delivering 60 FPS performance and 50% faster feature releases.',
      features: [
        'Unified Cross-Platform iOS and Android App Development',
        'Offline-First Local Data Storage & Synchronous SQLite Sync',
        'Biometric Auth, Hardware Sensor & Geolocation Integrations',
        'Real-Time Push Notification Funnels & Deep Linking',
        'End-to-End App Store & Google Play Store Submission Management'
      ],
      techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'SQLite', 'Fastlane'],
      process: [
        { step: '01', title: 'Touch-First UX Design', desc: 'Ergonomic wireframing, gesture mapping, and interactive prototypes.' },
        { step: '02', title: 'Cross-Platform Core Dev', desc: 'Reusable business logic, native bridge hooks, and fluid animations.' },
        { step: '03', title: 'Device Matrix Testing', desc: 'Automated QA across 30+ physical screen sizes and Android/iOS versions.' },
        { step: '04', title: 'Store Deployment', desc: 'Compliance validation, store review readiness, and crash analytics.' }
      ],
      benefits: [
        'Up to 50% reduction in development and maintenance expenditures',
        'Butter-smooth 60 FPS transitions matching native performance',
        'Instantaneous offline caching for field and disconnected users',
        'Streamlined store approval with zero compliance rejections'
      ]
    },
    {
      _id: 'srv_004',
      title: 'Web Designing',
      slug: 'web-designing',
      category: 'Design & Experience',
      tagline: 'Beautiful, user-centric designs that captivate and engage your audience.',
      icon: 'Palette',
      problem: 'Generic website templates, lack of visual hierarchy, high bounce rates, and outdated aesthetics that fail to establish brand authority in competitive markets.',
      solution: 'We craft stunning, bespoke website interfaces with tailored color palettes, modern typography, micro-interactions, and responsive layouts that convert visitors into clients.',
      features: [
        'Custom Web UI Design Tailored to Brand Identity',
        'Mobile-First Responsive Layouts Tested Across All Breakpoints',
        'Interactive Figma Clickable Prototypes & Wireframing',
        'Custom Micro-Interactions & Scroll-Triggered Transitions',
        'Conversion Rate Optimization (CRO) Focused Page Architectures'
      ],
      techStack: ['Figma', 'Adobe Creative Suite', 'Tailwind CSS', 'GSAP', 'HTML5/CSS3'],
      process: [
        { step: '01', title: 'Brand Discovery', desc: 'Exploring brand voice, color psychology, and competitive benchmarks.' },
        { step: '02', title: 'Low-Fi Wireframing', desc: 'Establishing visual balance, information hierarchy, and user funnels.' },
        { step: '03', title: 'High-Fidelity Prototyping', desc: 'Designing pixel-perfect mockups with rich imagery and responsive grids.' },
        { step: '04', title: 'Design System Handoff', desc: 'Tokenizing colors, typography, and UI components for dev handoff.' }
      ],
      benefits: [
        'Memorable first impression establishing instant brand trust',
        'Proven reduction in bounce rate with intuitive visual hierarchy',
        'Seamless responsiveness on mobile, tablet, laptop, and ultra-wide screens',
        'Developer-ready specifications for frictionless engineering'
      ]
    },
    {
      _id: 'srv_005',
      title: 'Web Deployment',
      slug: 'web-deployment',
      category: 'DevOps & Cloud',
      tagline: 'Seamless deployment solutions ensuring your application is always online.',
      icon: 'Server',
      problem: 'Manual release mistakes, downtime during deployments, configuration drift between staging and production, and slow rollback procedures during critical bugs.',
      solution: 'Agnexa establishes automated GitOps continuous deployment pipelines, blue-green zero-downtime cutovers, containerization, and DNS routing for 100% reliable releases.',
      features: [
        'Automated CI/CD Deployment Pipelines (GitHub Actions / GitLab CI)',
        'Zero-Downtime Blue-Green & Canary Rollout Orchestration',
        'Docker Containerization & Multi-Environment Standardization',
        'Automated Smoke Tests & Instant 1-Click Rollback Capabilities',
        'Edge CDN Caching & Global DNS Routing Optimization'
      ],
      techStack: ['Docker', 'GitHub Actions', 'AWS ECS / Fargate', 'Nginx', 'Kubernetes', 'Cloudflare'],
      process: [
        { step: '01', title: 'Pipeline Assessment', desc: 'Auditing build steps, dependencies, and environment variable security.' },
        { step: '02', title: 'Containerization', desc: 'Packaging applications into lightweight, reproducible Docker images.' },
        { step: '03', title: 'CI/CD Automation', desc: 'Triggering automated linting, test suites, and staging deploys upon git push.' },
        { step: '04', title: 'Zero-Downtime Cutover', desc: 'Traffic shifting via reverse proxies with automated health check validations.' }
      ],
      benefits: [
        'Eliminate deployment downtime completely with blue-green routing',
        'Deploy multiple times per day with 100% confidence and safety',
        'Roll back flawed updates in seconds without database corruption',
        'Standardized environments eliminating "works on my machine" bugs'
      ]
    },
    {
      _id: 'srv_006',
      title: 'Web Hosting',
      slug: 'web-hosting',
      category: 'Hosting & Infrastructure',
      tagline: 'Reliable, fast, and secure hosting solutions for your online presence.',
      icon: 'HardDrive',
      problem: 'Shared hosting servers overloaded with neighbor traffic, lack of resource isolation, slow database queries, and nonexistent customer support when sites go down.',
      solution: 'We provide managed, resource-isolated web hosting environments optimized for speed, security, and consistent uptime with dedicated PHP/Node workers and SSD storage.',
      features: [
        'Dedicated Compute & Memory Allocation (Zero Shared Resource Bleed)',
        'Ultra-Fast NVMe SSD Storage & Redis Object Caching',
        'Real-Time Malware Scanning & Automatic Security Patching',
        'Free Enterprise SSL & HTTP/3 Protocol Support',
        '24/7 Managed Server Monitoring & Technical Support'
      ],
      techStack: ['Ubuntu Server', 'Nginx', 'Redis', 'PostgreSQL / MySQL', 'Let’s Encrypt', 'Digital Ocean / AWS'],
      process: [
        { step: '01', title: 'Site Profiling', desc: 'Evaluating database queries, dynamic cache hits, and visitor volume.' },
        { step: '02', title: 'Environment Tuning', desc: 'Optimizing Nginx worker processes, OPcache, and connection pools.' },
        { step: '03', title: 'Migration & SSL Setup', desc: 'Safely copying databases and verifying end-to-end HTTPS encryption.' },
        { step: '04', title: 'Proactive Telemetry', desc: 'Configuring threshold alerts for CPU, disk space, and memory.' }
      ],
      benefits: [
        'Dramatic speed boost cutting Time to First Byte (TTFB) under 100ms',
        'Dedicated resources ensure your site never slows down due to others',
        'Uninterrupted availability with proactive 24/7 uptime monitoring',
        'Automatic security updates defending against zero-day exploits'
      ]
    },
    {
      _id: 'srv_007',
      title: 'Digital Product Design',
      slug: 'digital-product-design',
      category: 'Design & Experience',
      tagline: 'User-centric UI/UX design that bridges the gap between complex functionality and intuitive human interaction through data-driven research.',
      icon: 'Layout',
      problem: 'Clunky navigation, cognitive overload, convoluted user workflows, and disjointed interfaces that lead to user confusion, drop-offs, and high churn rates.',
      solution: 'We conduct comprehensive user research, journey mapping, and usability testing to craft friction-free digital product experiences backed by scalable design systems.',
      features: [
        'In-Depth User Research, Persona Modeling & Empathy Mapping',
        'Complex Dashboard & SaaS Information Architecture Design',
        'Scalable Enterprise Design Systems with Tokenized Components',
        'Interactive High-Fidelity Prototyping & Usability Benchmark Testing',
        'Comprehensive Developer Handoff with Storybook & Token Specs'
      ],
      techStack: ['Figma', 'FigJam', 'Principle', 'Framer', 'Storybook', 'Lottie'],
      process: [
        { step: '01', title: 'User Research', desc: 'Stakeholder interviews, customer pain-point workshops, and analytics review.' },
        { step: '02', title: 'Workflow Modeling', desc: 'Mapping user task flows, site hierarchies, and wireframe prototypes.' },
        { step: '03', title: 'Design System Creation', desc: 'Crafting tokenized color palettes, typography, buttons, and state variants.' },
        { step: '04', title: 'Usability Validation', desc: 'Testing prototypes with real users to refine ergonomics and clarity.' }
      ],
      benefits: [
        'Substantial reduction in user onboarding friction and support tickets',
        'Accelerate engineering velocity with reusable atomic design components',
        'Elevated brand perception matching top-tier international SaaS products',
        'Higher user activation, retention, and feature engagement metrics'
      ]
    },
    {
      _id: 'srv_008',
      title: 'Logo Designing',
      slug: 'logo-designing',
      category: 'Branding & Identity',
      tagline: 'Unique brand identities that make your business stand out.',
      icon: 'Sparkles',
      problem: 'Forgettable, generic clip-art logos, lack of vector scalability, inconsistent brand collateral, and visual marks that fail to convey technical innovation.',
      solution: 'Agnexa creates distinctive, timeless brand logos and comprehensive visual identity guidelines that represent your company’s technical prowess and future vision.',
      features: [
        'Custom Bespoke Logo Marks & Wordmarks Tailored to Brand Ethos',
        'Scalable Vector Asset Delivery (SVG, EPS, AI, PDF, High-Res PNG)',
        'Comprehensive Brand Identity Guidelines (Colors, Typography, Spacing)',
        'Social Media Asset Kits, Favicons & Digital App Icons',
        'Print & Merchandising Ready Specifications with Full Copyright Transfer'
      ],
      techStack: ['Adobe Illustrator', 'Figma', 'Adobe Photoshop', 'Vector Math'],
      process: [
        { step: '01', title: 'Brand Ethos Discovery', desc: 'Uncovering the company vision, target market, and visual symbolism.' },
        { step: '02', title: 'Conceptual Sketching', desc: 'Exploring 15+ geometric and typographic concept directions.' },
        { step: '03', title: 'Vector Refinement', desc: 'Perfecting golden-ratio proportions, color harmonies, and kerning.' },
        { step: '04', title: 'Brand Asset Kit Delivery', desc: 'Exporting full vector packages, dark/light variants, and usage manuals.' }
      ],
      benefits: [
        'Memorable, professional brand mark that commands industry credibility',
        'Crystal-clear vector scalability from 16px favicons to massive billboards',
        'Cohesive visual identity ensuring consistency across all touchpoints',
        '100% full legal trademark and commercial copyright ownership'
      ]
    },
    {
      _id: 'srv_009',
      title: 'Data Related Solutions',
      slug: 'data-related-solutions',
      category: 'Data & Analytics',
      tagline: 'Advanced analytics and data management to drive informed decisions.',
      icon: 'BarChart3',
      problem: 'Data isolated in departmental silos, slow manual Excel reporting cycles, untrusted metrics, and inability to forecast operational trends.',
      solution: 'We construct modern data pipelines, centralized warehouses, and real-time executive dashboards that transform raw multi-source data into strategic business leverage.',
      features: [
        'Modern Data Warehouse Engineering (PostgreSQL, Snowflake, BigQuery)',
        'Automated Streaming & Batch ETL / ELT Pipelines (Python, dbt, Kafka)',
        'Interactive Executive Dashboards & KPI Monitoring Systems',
        'Data Governance, Automated Schema Validation & Quality Cleansing',
        'Predictive Analytics & Customer Trend Forecasting Models'
      ],
      techStack: ['Python', 'PostgreSQL', 'MongoDB Atlas', 'Redis', 'dbt', 'PowerBI / Tableau'],
      process: [
        { step: '01', title: 'Source Inventory', desc: 'Mapping transactional databases, CRM systems, and third-party APIs.' },
        { step: '02', title: 'Warehouse & Pipeline Design', desc: 'Star-schema modeling, automated ingestion, and incremental syncs.' },
        { step: '03', title: 'Dashboard Modeling', desc: 'Constructing role-based semantic layers and real-time visualization views.' },
        { step: '04', title: 'Quality Automation', desc: 'Enforcing data integrity alerts, duplicate pruning, and audit logging.' }
      ],
      benefits: [
        'Real-time single-source-of-truth visibility into mission-critical KPIs',
        'Elimination of manual spreadsheets and fragmented departmental reports',
        'Informed executive decision-making backed by verifiable data trends',
        'Secure, compliance-ready data handling adhering to data protection laws'
      ]
    },
    {
      _id: 'srv_010',
      title: 'Excel Based Services',
      slug: 'excel-based-services',
      category: 'Spreadsheets & Automation',
      tagline: 'Custom Excel automation, VBA macros, advanced financial modeling, and automated spreadsheet reporting solutions.',
      icon: 'FileSpreadsheet',
      problem: 'Repetitive manual data entry, prone-to-error formulas, fragmented business spreadsheets, broken macros, and lack of automated sync with modern databases.',
      solution: 'Agnexa engineers bespoke Excel automation solutions, complex VBA/macro engines, dynamic Power Query pipelines, financial models, and automated reporting templates that save hundreds of operational hours.',
      features: [
        'Custom VBA & Macro Automation for Repetitive Workflow Reduction',
        'Advanced Power Query & Power Pivot ETL Data Transformation',
        'Dynamic Executive Dashboards with Interactive KPI Visualizations',
        'Complex Financial Modeling, Forecasting & Scenario Analysis Templates',
        'Automated Database & REST API Ingestion into Microsoft Excel / Google Sheets',
        'Spreadsheet Audit, Error Rectification & Formula Optimization'
      ],
      techStack: ['Microsoft Excel', 'VBA', 'Power Query', 'Power Pivot', 'Office 365', 'Python openpyxl', 'Google Sheets API'],
      process: [
        { step: '01', title: 'Workbook Discovery', desc: 'Auditing existing spreadsheets, data structures, and repetitive manual bottlenecks.' },
        { step: '02', title: 'Macro & Formula Architecture', desc: 'Engineering modular VBA scripts, Power Queries, and dynamic lookup models.' },
        { step: '03', title: 'Dashboard & UX Design', desc: 'Crafting clean, executive visual layouts with interactive slicers and KPI summary cards.' },
        { step: '04', title: 'User Training & Handover', desc: 'Delivering documented, protected workbooks with step-by-step guidance and support.' }
      ],
      benefits: [
        'Saves 80%+ of repetitive manual reporting and data aggregation time',
        'Eliminates human calculation errors with standardized validation rules',
        'Transforms raw table rows into C-level executive insights instantly',
        'Seamless interoperability with corporate databases and external APIs'
      ]
    }
  ];

  const portfolio = [
    {
      _id: 'prj_001',
      title: 'MediConnect - Telehealth & Clinic ERP Platform',
      slug: 'mediconnect-telehealth-platform',
      industry: 'Healthcare',
      clientName: 'HealthTech Innovations (Demo Case)',
      challenge: 'The client needed a HIPAA-compliant medical portal capable of processing 10,000+ daily video consultations, electronic health record (EHR) synchronization, and smart doctor scheduling across 45 clinics with zero latency.',
      solution: 'Agnexa engineered an enterprise microservices web & mobile ecosystem featuring WebRTC encrypted audio/video streaming, automated HL7/FHIR medical data exchange, and smart doctor availability routing.',
      technologies: ['React.js', 'Node.js', 'WebRTC', 'PostgreSQL', 'Redis', 'AWS HIPAA Cloud', 'Docker'],
      features: [
        'End-to-end encrypted HD video medical consultations',
        'Digital prescriptions with automated pharmacy API integration',
        'Real-time doctor scheduling and SMS/WhatsApp reminder triggers',
        'Role-based electronic medical records (EMR) vault'
      ],
      results: [
        { metric: '99.98%', label: 'Consultation Uptime' },
        { metric: '10,000+', label: 'Daily Consultations Handled' },
        { metric: '42%', label: 'Reduction in Patient Wait Times' },
        { metric: '4.9/5', label: 'Average Doctor & Patient App Rating' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      featured: true
    },
    {
      _id: 'prj_002',
      title: 'FinEdge - Automated Wealth Management & Analytics',
      slug: 'finedge-wealth-analytics',
      industry: 'FinTech',
      clientName: 'FinEdge Capital (Demo Case)',
      challenge: 'High net-worth investors struggled with fragmented portfolio monitoring across stock exchanges, crypto assets, and mutual funds, with real-time risk alerts missing from legacy banking portals.',
      solution: 'We architected a high-frequency financial analytics dashboard with millisecond data streaming, automated portfolio rebalancing algorithms, and multi-factor biometric authentication.',
      technologies: ['React.js', 'TypeScript', 'Go', 'Apache Kafka', 'TimescaleDB', 'Tailwind CSS', 'AWS ECS'],
      features: [
        'Sub-second real-time market data streaming via WebSockets',
        'Automated tax-loss harvesting and portfolio risk simulations',
        'Multi-currency balance reconciliation engine',
        'Strict biometric MFA and automated compliance audit trails'
      ],
      results: [
        { metric: '$450M+', label: 'Assets Tracked on Platform' },
        { metric: '<80ms', label: 'Dashboard Latency' },
        { metric: '65%', label: 'Increase in User Retention' },
        { metric: 'Zero', label: 'Security Vulnerabilities Reported' }
      ],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      featured: true
    },
    {
      _id: 'prj_003',
      title: 'OmniTrade - Global B2B Supply Chain & E-Commerce',
      slug: 'omnitrade-supply-chain',
      industry: 'E-Commerce & Logistics',
      clientName: 'OmniTrade Global (Demo Case)',
      challenge: 'An international distribution network suffered from stockouts, disconnected warehouse systems, and manual freight documentation that delayed shipments by up to 14 days.',
      solution: 'Agnexa delivered an integrated headless B2B marketplace and warehouse management system with real-time GPS container tracking, automated customs invoicing, and predictive replenishment.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Kubernetes', 'Stripe Connect', 'Google Maps API'],
      features: [
        'Multi-currency and multi-warehouse automated inventory sync',
        'AI-driven inventory replenishment predictions',
        'Automated commercial invoice generation and customs clearing workflow',
        'Self-service wholesale portal with tiered volume pricing'
      ],
      results: [
        { metric: '75%', label: 'Faster Order Processing' },
        { metric: '99.4%', label: 'Inventory Record Accuracy' },
        { metric: '180,000+', label: 'Monthly Transactions Processed' },
        { metric: '$2.8M', label: 'Annual Operational Cost Savings' }
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      featured: true
    },
    {
      _id: 'prj_004',
      title: 'NeuralOps - Enterprise AI Document & Knowledge Assistant',
      slug: 'neuralops-ai-knowledge-engine',
      industry: 'AI & Enterprise Automation',
      clientName: 'Global Advisory Group (Demo Case)',
      challenge: 'A multinational corporate advisory firm had over 2 million confidential PDF legal documents and contracts scattered across silos, with teams spending 4+ hours daily searching for contract terms.',
      solution: 'Agnexa built a secure on-premise private RAG system with OCR, vector embedding search, and citation-backed generative responses ensuring zero data leakage to public models.',
      technologies: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'React.js', 'Docker', 'Ollama/Llama3'],
      features: [
        'Instant multi-lingual semantic document search with exact page citations',
        'Automated contract clause extraction and risk level rating',
        'Strict role-based access ensuring document confidentiality',
        'Offline capability with local LLM inference cluster'
      ],
      results: [
        { metric: '85%', label: 'Search Time Reduction' },
        { metric: '2M+', label: 'Documents Indexed and Searchable' },
        { metric: 'Zero', label: 'Data Leakage Incidents' },
        { metric: '4.8/5', label: 'Internal Staff Satisfaction Score' }
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
      featured: true
    },
    {
      _id: 'prj_005',
      title: 'EduSphere - Next-Gen Interactive Learning Platform',
      slug: 'edusphere-learning-platform',
      industry: 'EdTech',
      clientName: 'EduSphere Academy (Demo Case)',
      challenge: 'Legacy learning management systems suffered from low completion rates (under 12%), passive video formats, and lack of real-time instructor code evaluation.',
      solution: 'We engineered an interactive gamified learning platform with in-browser code execution sandbox, real-time peer study rooms, and adaptive learning pathways.',
      technologies: ['React.js', 'Node.js', 'WebSockets', 'Docker Sandboxes', 'PostgreSQL', 'Tailwind CSS'],
      features: [
        'Browser-based live code evaluation for 12 programming languages',
        'Interactive live quizzes with real-time leaderboard gamification',
        'Adaptive AI quizzes matching the student skill progression',
        'Seamless certificate generation with verifiable blockchain hashes'
      ],
      results: [
        { metric: '68%', label: 'Course Completion Rate (vs 12% industry average)' },
        { metric: '250K+', label: 'Active Monthly Students' },
        { metric: '4.9/5', label: 'Average Student Experience Score' },
        { metric: '3.2x', label: 'Increase in Daily Engagement' }
      ],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
      featured: false
    },
    {
      _id: 'prj_006',
      title: 'SmartGrid - IoT Energy Monitoring & Analytics',
      slug: 'smartgrid-iot-analytics',
      industry: 'Manufacturing & Smart Cities',
      clientName: 'Apex Industrial Energy (Demo Case)',
      challenge: 'Heavy industrial manufacturing plants experienced unexpected power transformer failures and peak-demand penalty fees due to lack of predictive monitoring.',
      solution: 'Agnexa engineered an industrial IoT gateway receiving telemetry from 5,000+ smart sensors, using ML anomaly detection to predict equipment faults 48 hours in advance.',
      technologies: ['Go', 'TimescaleDB', 'MQTT', 'Python ML', 'React.js', 'Grafana', 'AWS IoT Core'],
      features: [
        'High-frequency MQTT telemetry ingestion (15,000 events/sec)',
        'Predictive anomaly detection alerting maintenance before breakdowns',
        'Automated peak-load shedding recommendations',
        'Executive environmental impact and carbon offset compliance reporting'
      ],
      results: [
        { metric: '34%', label: 'Reduction in Equipment Downtime' },
        { metric: '$620K', label: 'Saved in Annual Peak Surcharges' },
        { metric: '48 hrs', label: 'Advance Anomaly Warning Notice' },
        { metric: '100%', label: 'IoT Sensor Uptime' }
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      featured: false
    }
  ];

  const blogs = [
    {
      _id: 'blg_proj_001',
      title: 'Architecting MediConnect: How We Scaled HIPAA-Compliant WebRTC Video to 10,000+ Daily Consultations',
      slug: 'architecting-mediconnect-telehealth-webrtc',
      category: 'Project Case Study',
      author: 'Praful Sonwane, Lead System Architect',
      date: 'September 25, 2026',
      readTime: '6 min read',
      excerpt: 'Deep-dive architectural breakdown of our MediConnect healthcare project: end-to-end encrypted WebRTC video streaming, EHR synchronization, and 99.98% consultation uptime.',
      content: `### The Challenge: Sub-Second Encrypted Telehealth at Scale
When engineering MediConnect, the primary objective was establishing a resilient medical consultation platform that complied with strict HIPAA security requirements while supporting over 10,000 simultaneous video sessions across 45 clinics with zero latency drops.

### Architectural Blueprint
1. Signaling & Selective Forwarding Units (SFU): MediaSoup / Janus elastic clusters.
2. End-to-End Encryption (E2EE): SRTP with dynamic per-room key generation.
3. Synchronous HL7/FHIR Health Record Linking via Kafka event streaming.

### Quantifiable Results
* 99.98% Uptime SLA maintained across 6 consecutive quarters.
* Patient wait times decreased by 42% through automated doctor availability scheduling.`,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      tags: ['MediConnect', 'Healthcare', 'WebRTC', 'React', 'HIPAA', 'Case Study']
    },
    {
      _id: 'blg_proj_002',
      title: 'High-Frequency FinTech: Engineering FinEdge with Sub-80ms WebSocket Analytics and Kafka Pipelines',
      slug: 'engineering-finedge-realtime-wealth-analytics',
      category: 'Project Case Study',
      author: 'Vikramaditya Rao, Principal Cloud Architect',
      date: 'September 24, 2026',
      readTime: '7 min read',
      excerpt: 'Inside the FinEdge wealth analytics engine: how Agnexa achieved <80ms dashboard latency, automated tax-loss harvesting, and tracked $450M+ in capital with zero security flaws.',
      content: `### The Challenge: Eliminating Lag in High-Net-Worth Portfolio Tracking
Modern institutional investors manage diversified portfolios spanning stocks, crypto derivatives, and commodities. Legacy banking dashboards routinely refresh data every 5 to 15 minutes, which is completely unacceptable for high-frequency trade management.

### The FinEdge Solution Architecture
1. Sub-80ms Streaming with TimescaleDB hypertables and WebSockets.
2. Automated Tax-Loss Harvesting Engine built in Go.
3. Military-Grade Biometric MFA authentication.

### Key Milestones
* $450M+ in platform assets tracked with zero discrepancy.
* Zero reported security vulnerabilities across audits.`,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      tags: ['FinEdge', 'FinTech', 'TimescaleDB', 'WebSockets', 'Go', 'Case Study']
    },
    {
      _id: 'blg_proj_003',
      title: 'NeuralOps: Building an On-Premises Private RAG Assistant for 2 Million Legal Documents',
      slug: 'neuralops-private-rag-legal-documents',
      category: 'Project Case Study',
      author: 'Rajiv Menon, Head of AI Engineering',
      date: 'September 23, 2026',
      readTime: '8 min read',
      excerpt: 'How we built NeuralOps to cut contract review time by 85% across 2M+ confidential corporate contracts using local LLM inference and hybrid vector retrieval.',
      content: `### The Challenge: Enterprise Knowledge Without Data Privacy Risks
Our client, a multinational corporate advisory group, possessed over 2 million confidential legal contracts. Searching for specific liabilities took lawyers 4+ hours daily. NDAs prohibited feeding these documents to commercial cloud AI APIs.

### The NeuralOps Architecture
1. On-Premise Private Inference with quantized Llama 3 on air-gapped GPU clusters.
2. Hybrid Semantic + Exact Keyword Search (Dense embeddings + BM25 lexical + Cross-encoder re-ranking).
3. Citation-backed verification with highlighted source page coordinates.

### Measurable ROI
* 85% reduction in contract discovery and clause extraction turnaround.
* Zero data leakage incidents.`,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
      tags: ['NeuralOps', 'Artificial Intelligence', 'Private RAG', 'Python', 'FastAPI', 'Case Study']
    },
    {
      _id: 'blg_proj_004',
      title: 'Modernizing OmniTrade: Headless B2B Supply Chain & Automated Customs Invoicing',
      slug: 'omnitrade-headless-supply-chain-modernization',
      category: 'Project Case Study',
      author: 'Ananya Deshmukh, Frontend Engineering Lead',
      date: 'September 22, 2026',
      readTime: '6 min read',
      excerpt: 'Overcoming supply chain delays: how OmniTrade automated customs clearing and integrated multi-warehouse inventory across 180,000 monthly transactions.',
      content: `### The Challenge: 14-Day Freight Invoicing Delays
An international distribution network suffered from fragmented warehouse spreadsheets, resulting in stockouts and manual customs documentation that delayed shipments at customs for up to two weeks.

### The Technical Solution
1. Headless Microservice Architecture with Next.js and high-throughput Node.js microservices.
2. Automated International Customs Compliance with instant PDF export generation.
3. Live GPS Container Telemetry integrated with shipping container IoT beacons.

### Business Outcomes
* 75% faster order processing.
* $2.8M annual operational cost savings.`,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      tags: ['OmniTrade', 'E-Commerce', 'NextJS', 'NodeJS', 'SupplyChain', 'Case Study']
    },
    {
      _id: 'blg_proj_005',
      title: 'SmartGrid IoT: Processing 15,000 Telemetry Events/Sec with Predictive ML Anomaly Detection',
      slug: 'smartgrid-iot-telemetry-anomaly-detection',
      category: 'Project Case Study',
      author: 'Siddharth Nair, Staff Backend Engineer',
      date: 'September 21, 2026',
      readTime: '7 min read',
      excerpt: 'Engineering industrial IoT for heavy manufacturing: predicting transformer faults 48 hours early to prevent catastrophic factory blackouts.',
      content: `### The High-Stakes Reality of Industrial Energy
In heavy industrial manufacturing, an unplanned power transformer failure can cost upwards of $100,000 per hour in idle machinery and emergency repairs.

### The SmartGrid Engineering Stack
1. MQTT Telemetry Ingestion at 15,000 Events/Sec into TimescaleDB.
2. Machine Learning Anomaly Detection predicting faults 48 hours in advance.
3. Automated Peak-Load Shedding coordinating with factory PLCs.

### Proven Metrics
* 34% reduction in equipment downtime.
* $620,000 saved annually in peak electric surcharges.`,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      tags: ['SmartGrid', 'IoT', 'Machine Learning', 'Go', 'TimescaleDB', 'Case Study']
    },
    {
      _id: 'blg_proj_006',
      title: 'EduSphere Interactive Sandbox: Scaling Real-Time Gamified Learning Platforms',
      slug: 'edusphere-interactive-code-sandbox',
      category: 'Project Case Study',
      author: 'Rajiv Menon, Head of AI Engineering',
      date: 'September 20, 2026',
      readTime: '6 min read',
      excerpt: 'Architecting an interactive browser sandbox for 250,000+ students with isolated Docker runtime environments and sub-second code compilation.',
      content: `### Interactive Learning at Global Scale
Traditional digital courses suffer from an average completion rate under 12%. When EduSphere approached Agnexa, the goal was creating an ultra-responsive code sandbox running 12 programming languages directly in the browser with 60 FPS feedback and real-time multiplayer peer collaboration.

### Architecture Highlights
1. Ephemeral Sandboxed Execution via lightweight WebAssembly and isolated Docker workers.
2. WebSockets Peer Study Rooms with synchronized terminal cursors.
3. Adaptive Skill Progression recalibrating difficulty in real time.`,
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
      tags: ['EduSphere', 'EdTech', 'Docker', 'WebSockets', 'React', 'Case Study']
    },
    {
      _id: 'blg_001',
      title: 'The Enterprise Guide to Building Production-Ready RAG Systems in 2026',
      slug: 'enterprise-rag-systems-2026',
      category: 'Artificial Intelligence',
      author: 'Rajiv Menon, Head of AI Engineering',
      date: 'March 10, 2026',
      readTime: '6 min read',
      excerpt: 'Moving from a quick LLM proof-of-concept to a secure, accurate enterprise Retrieval-Augmented Generation system requires deep vector search optimization and hallucination guardrails.',
      content: `### Bridging the PoC to Production Gap

Most organizations begin their generative AI journey by connecting an OpenAI API key to a PDF parser. While this creates an exciting demo in an afternoon, it falls apart rapidly when exposed to production enterprise workloads. In real corporate environments, queries are ambiguous, documents change hourly, permissions are complex, and hallucinations carry legal risk.

### 1. The Critical Importance of Chunking Strategy
Generic token chunking splits critical context across boundaries. At Agnexa, we deploy semantic and hierarchical chunking:
* Hierarchical Chunking: Parent-child document mapping preserving broad executive summaries with precise sub-clause detail.
* Metadata Tagging: Enriching chunks with document version, department permissions, and creation timestamps before vector embedding.

### 2. Hybrid Search: Dense + Sparse Vectors
Vector cosine similarity alone often fails on exact alphanumeric queries (e.g. part numbers, error codes, invoice identifiers). The gold standard in 2026 combines:
* Dense vector representations (via embedding models like text-embedding-3 or open-source BGE embeddings)
* Sparse lexical search (BM25)
* Cross-encoder re-ranking algorithms that score the top 20 candidate passages before passing to the generator model.

### 3. Enterprise Guardrails and Evaluation
Never deploy an enterprise assistant without automated evaluation pipelines. We monitor:
* Context Relevance: Is the retrieved data genuinely answering the prompt?
* Faithfulness: Did the model formulate its answer strictly using the retrieved documents?
* Answer Relevance: Did the user's explicit question get answered without tangential verbosity?

By institutionalizing these three pillars, modern enterprises turn unstructured data into an unshakeable competitive moat.`,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      tags: ['AI', 'RAG', 'LLM', 'Enterprise Tech']
    },
    {
      _id: 'blg_002',
      title: 'Zero-Downtime Multi-Region Cloud Migration: Architectural Lessons',
      slug: 'zero-downtime-cloud-migration',
      category: 'Cloud & DevOps',
      author: 'Vikramaditya Rao, Principal Cloud Architect',
      date: 'February 28, 2026',
      readTime: '7 min read',
      excerpt: 'Migrating legacy transactional systems handling millions of daily events to the cloud without dropping a single packet requires meticulous dual-write staging and canary cutovers.',
      content: `### The High-Stakes Reality of Modern Infrastructure
When migrating core banking or high-volume e-commerce platforms, scheduled maintenance windows of 6 to 12 hours are no longer acceptable to customers or executive boards. Every second of outage represents lost revenue and brand erosion.

### The Strangler Fig Pattern in Practice
Rather than attempting a catastrophic "big bang" migration, we adopt the proven Strangler Fig architectural pattern:
1. **API Gateway Interception**: Route all external traffic through a managed proxy (e.g. AWS API Gateway or Kong).
2. **Dual-Write Event Streaming**: Using change data capture (Debezium / Kafka) to mirror transactions to both the legacy database and the modern cloud datastore simultaneously.
3. **Shadow Validation**: Running production requests in shadow mode against the cloud microservice to benchmark response parity and latency before real traffic cutover.

### FinOps: Avoiding Post-Migration Bill Shock
A common failure mode is lifting-and-shifting oversized EC2 instances without architectural modernization. A true cloud-native migration must incorporate:
* Auto-scaling container workloads orchestrated via Kubernetes or AWS ECS Fargate
* Ephemeral serverless workers for asynchronous queues
* Tiered storage policies automatically moving cold archives to low-cost S3 Glacier.

Planning a migration requires engineering rigor, automated rollbacks, and zero assumptions.`,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      tags: ['Cloud', 'DevOps', 'AWS', 'Kubernetes']
    },
    {
      _id: 'blg_003',
      title: 'Micro-Frontends vs. Monolithic SPAs: Making the Right Call for Scale',
      slug: 'micro-frontends-vs-monolithic-spas',
      category: 'Web Engineering',
      author: 'Ananya Deshmukh, Frontend Engineering Lead',
      date: 'February 15, 2026',
      readTime: '5 min read',
      excerpt: 'Micro-frontends solve organizational bottlenecks for 200+ developer engineering teams, but introduce runtime overhead and styling conflicts if chosen prematurely.',
      content: `### The Organizational Driver Behind Micro-Frontends
Micro-frontends are primarily an organizational scaling solution rather than a purely technical enhancement. When multiple cross-functional squads work within a single monolithic codebase, merge conflicts, conflicting dependency upgrades, and slow deployment pipelines inevitably emerge.

### When Micro-Frontends Make Sense:
* Multiple independent product squads needing autonomous deployment cadences.
* Legacy technology migration where a new React app must seamlessly co-exist with a legacy Angular or Vue dashboard.
* Strict organizational domain boundaries (e.g. Checkout Squad vs. Product Discovery Squad).

### The Hidden Costs You Must Prepare For:
* **Duplicate Bundle Sizes**: Without Module Federation and shared library caching, users may end up downloading multiple copies of React or UI libraries.
* **Shared State Coordination**: Cross-micro-app state synchronization requires standardized browser event buses or postMessage protocols.
* **Design System Drift**: Maintaining identical brand fidelity across independently developed apps requires tokenized, immutable design libraries published via NPM.

For 80% of businesses, a well-modularized Vite monorepo offers the ideal sweet spot of developer velocity and lightweight client performance.`,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      tags: ['Frontend', 'React', 'Architecture', 'WebDev']
    },
    {
      _id: 'blg_004',
      title: 'Defending the Modern Attack Surface: Zero-Trust Security for Remote IT Teams',
      slug: 'zero-trust-security-remote-teams',
      category: 'Cybersecurity',
      author: 'Karan Mehra, Chief Security Officer',
      date: 'January 25, 2026',
      readTime: '8 min read',
      excerpt: 'The perimeter network is officially dead. How forward-thinking Indian and global tech organizations enforce least-privilege access and identity-first security architectures.',
      content: `### The Death of the Castle-and-Moat Security Model
Historically, enterprise security assumed that everything inside the office corporate network was trustworthy, while everything outside was dangerous. With remote engineering teams, SaaS adoption, and mobile device ubiquity, this model has thoroughly collapsed.

### The Three Fundamental Tenets of Zero Trust:
1. **Verify Explicitly**: Always authenticate and authorize based on all available data points—including user identity, location, device health, service or workload, data classification, and anomalies.
2. **Use Least Privilege Access**: Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection.
3. **Assume Breach**: Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to get visibility, drive threat detection, and continuously improve defenses.

By enforcing continuous behavioral telemetry and micro-segmented workload access, companies safeguard critical intellectual property without sacrificing developer agility.`,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      tags: ['Security', 'ZeroTrust', 'Enterprise', 'Compliance']
    },
    {
      _id: 'blg_005',
      title: 'Building High-Concurrency Node.js Services: Event Loop Optimization',
      slug: 'high-concurrency-nodejs-optimization',
      category: 'Backend Engineering',
      author: 'Siddharth Nair, Staff Backend Engineer',
      date: 'January 12, 2026',
      readTime: '6 min read',
      excerpt: 'How to diagnose event loop lag, avoid hidden synchronous CPU bottlenecks, and maximize throughput in distributed Node.js microservices.',
      content: `### Understanding Where Node.js Truly Slows Down
Node.js is renowned for its non-blocking I/O model, making it exceptionally fast for handling thousands of concurrent network connections. However, subtle developer habits can inadvertently stall the single-threaded event loop.

### Common Bottlenecks and Their Solutions:
* **Heavy JSON Serialization**: Parsing huge multi-megabyte payloads blocks the thread. Offload parsing or utilize streaming parsers for large data payloads.
* **Regex Denial of Service (ReDoS)**: Poorly constructed regular expressions with catastrophic backtracking can cause CPU spikes. Always sanitize inputs and audit regex patterns.
* **Connection Pool Exhaustion**: Always size your PostgreSQL or Redis connection pools proportionally to your thread pool workers to prevent queuing stalls.

Understanding the internal phases of the libuv event loop is the defining separator between junior scripts and enterprise-grade backend microservices.`,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      tags: ['NodeJS', 'Backend', 'Performance', 'Engineering']
    },
    {
      _id: 'blg_006',
      title: 'The Modern Mobile Strategy: React Native in 2026 and the New Architecture',
      slug: 'react-native-new-architecture-2026',
      category: 'Mobile Solutions',
      author: 'Deepika Sen, Senior Mobile Specialist',
      date: 'December 20, 2025',
      readTime: '5 min read',
      excerpt: 'With Fabric and TurboModules now the universal standard, React Native achieves true native C++ performance without bridge bottlenecks.',
      content: `### The Quantum Leap in Cross-Platform Mobile
For years, the JavaScript bridge was the primary critique of React Native. Complex scroll animations and high-frequency gesture interactions suffered from asynchronous communication delays between native threads and JavaScript.

### What the New Architecture Delivers:
* **TurboModules**: Direct synchronous C++ calls into native device APIs, cutting initialization overhead dramatically.
* **Fabric Renderer**: Unified C++ rendering engine ensuring thread-safe layout computations and zero UI flickering during intense layout shifts.
* **Concurrent React**: Seamless priority rendering, keeping touch response instantaneous even during heavy background data updates.

For high-growth technology companies, React Native provides unparalleled delivery speed without compromising native fluidity.`,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      tags: ['Mobile', 'ReactNative', 'iOS', 'Android']
    }
  ];

  const contacts = [
    {
      _id: 'cnt_001',
      fullName: 'Aarav Patel',
      company: 'Zenith Logistics Ltd',
      email: 'aarav.patel@zenithlogistics.in',
      phone: '+91 98201 54321',
      service: 'Cloud & DevOps',
      budget: '$25,000 - $50,000',
      timeline: '1-3 Months',
      message: 'We want to migrate our on-premise ERP to AWS with Kubernetes microservices and automated CI/CD pipelines. Looking for immediate engagement.',
      status: 'New',
      createdAt: new Date(Date.now() - 2 * 3600000).toISOString()
    },
    {
      _id: 'cnt_002',
      fullName: 'Elena Rostova',
      company: 'Nordic FinTech Solutions',
      email: 'elena@nordicfintech.io',
      phone: '+44 20 7946 0912',
      service: 'AI & Machine Learning',
      budget: '$50,000 - $100,000',
      timeline: '3-6 Months',
      message: 'Looking to integrate custom generative AI document analysis and fraud detection into our banking mobile application.',
      status: 'In Progress',
      createdAt: new Date(Date.now() - 26 * 3600000).toISOString()
    },
    {
      _id: 'cnt_003',
      fullName: 'Vikram Sengupta',
      company: 'HealthVeda Diagnostics',
      email: 'vikram@healthveda.com',
      phone: '+91 91234 56789',
      service: 'Software Development',
      budget: '$10,000 - $25,000',
      timeline: 'Less than 1 Month',
      message: 'Need bespoke laboratory sample management and automated WhatsApp diagnostic report dispatch system.',
      status: 'Contacted',
      createdAt: new Date(Date.now() - 72 * 3600000).toISOString()
    }
  ];

  const newsletters = [
    { _id: 'nws_001', email: 'tech-updates@enterprise.co', status: 'active', subscribedAt: new Date(Date.now() - 86400000).toISOString() },
    { _id: 'nws_002', email: 'cto-insights@cloudscale.net', status: 'active', subscribedAt: new Date(Date.now() - 172800000).toISOString() },
    { _id: 'nws_003', email: 'founder@startupgrowth.in', status: 'active', subscribedAt: new Date(Date.now() - 259200000).toISOString() }
  ];

  const applications = [
    {
      _id: 'app_001',
      fullName: 'Rohit Verma',
      email: 'rohit.v@techmail.com',
      phone: '+91 98765 43210',
      role: 'Senior Full-Stack Engineer (React / Node.js)',
      experience: '5+ Years',
      portfolioUrl: 'https://github.com/rohitv-dev',
      resumeNotes: 'Strong experience in building scalable microservices and high-performance React web applications.',
      appliedAt: new Date(Date.now() - 12 * 3600000).toISOString()
    },
    {
      _id: 'app_002',
      fullName: 'Sneha Kulkarni',
      email: 'sneha.ai@neuralhub.org',
      phone: '+91 97654 32109',
      role: 'Generative AI & LLM Specialist',
      experience: '3+ Years',
      portfolioUrl: 'https://huggingface.co/sneha-k',
      resumeNotes: 'Expertise in LangChain, fine-tuning Llama models, and enterprise vector search architectures.',
      appliedAt: new Date(Date.now() - 48 * 3600000).toISOString()
    }
  ];

  return { users, services, portfolio, blogs, contacts, newsletters, applications };
};
