export const fallbackServices = [
  {
    _id: 'srv_001',
    id: 'srv_001',
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
    benefits: [
      'Guaranteed 99.9% uptime backed by enterprise SLA',
      'Sub-second page delivery across international regions',
      'Zero manual backup overhead with automated cloud snapshots',
      'Complete protection against brute-force and DDoS disruptions'
    ]
  },
  {
    _id: 'srv_002',
    id: 'srv_002',
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
    benefits: [
      'Blazing-fast page load times maximizing SEO and user retention',
      'Modular component architecture saving 40% time on future upgrades',
      'Zero vendor lock-in with 100% intellectual property transfer',
      'Scalable backend capable of handling 10x concurrent traffic spikes'
    ]
  },
  {
    _id: 'srv_003',
    id: 'srv_003',
    title: 'Mobile App Solutions',
    slug: 'mobile-app-solutions',
    category: 'Mobile Engineering',
    tagline: 'Native-caliber mobile experiences for iOS and Android, leveraging cross-platform technologies to ensure rapid deployment and consistent UI.',
    icon: 'Smartphone',
    problem: 'High cost of maintaining dual native codebases, UI discrepancies across devices, and sluggish scroll performance.',
    solution: 'Agnexa builds fluid, native-caliber mobile applications using React Native and modern mobile architectures, delivering 60 FPS performance and 50% faster feature releases.',
    features: [
      'Unified Cross-Platform iOS and Android App Development',
      'Offline-First Local Data Storage & Synchronous SQLite Sync',
      'Biometric Auth, Hardware Sensor & Geolocation Integrations',
      'Real-Time Push Notification Funnels & Deep Linking'
    ],
    techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Firebase', 'SQLite', 'Fastlane'],
    benefits: [
      'Up to 50% reduction in development and maintenance expenditures',
      'Butter-smooth 60 FPS transitions matching native performance',
      'Instantaneous offline caching for disconnected users'
    ]
  },
  {
    _id: 'srv_004',
    id: 'srv_004',
    title: 'Web Designing',
    slug: 'web-designing',
    category: 'Design & Experience',
    tagline: 'Beautiful, user-centric designs that captivate and engage your audience.',
    icon: 'Palette',
    problem: 'Generic website templates, lack of visual hierarchy, and outdated aesthetics that fail to establish brand authority.',
    solution: 'We craft stunning, bespoke website interfaces with tailored color palettes, modern typography, micro-interactions, and responsive layouts that convert visitors into clients.',
    features: [
      'Custom Web UI Design Tailored to Brand Identity',
      'Mobile-First Responsive Layouts Tested Across All Breakpoints',
      'Interactive Figma Clickable Prototypes & Wireframing',
      'Conversion Rate Optimization (CRO) Focused Architectures'
    ],
    techStack: ['Figma', 'Adobe Creative Suite', 'Tailwind CSS', 'GSAP', 'HTML5/CSS3'],
    benefits: [
      'Memorable first impression establishing instant brand trust',
      'Proven reduction in bounce rate with intuitive visual hierarchy'
    ]
  },
  {
    _id: 'srv_005',
    id: 'srv_005',
    title: 'Web Deployment',
    slug: 'web-deployment',
    category: 'DevOps & Cloud',
    tagline: 'Seamless deployment solutions ensuring your application is always online.',
    icon: 'Server',
    problem: 'Manual release mistakes, downtime during deployments, and slow rollback procedures during critical bugs.',
    solution: 'Agnexa establishes automated GitOps continuous deployment pipelines, blue-green zero-downtime cutovers, containerization, and DNS routing for 100% reliable releases.',
    features: [
      'Automated CI/CD Deployment Pipelines',
      'Zero-Downtime Blue-Green & Canary Rollout Orchestration',
      'Docker Containerization & Multi-Environment Standardization',
      'Automated Smoke Tests & Instant 1-Click Rollback Capabilities'
    ],
    techStack: ['Docker', 'GitHub Actions', 'AWS ECS / Fargate', 'Nginx', 'Kubernetes', 'Cloudflare'],
    benefits: [
      'Eliminate deployment downtime completely with blue-green routing',
      'Deploy multiple times per day with 100% confidence and safety'
    ]
  },
  {
    _id: 'srv_006',
    id: 'srv_006',
    title: 'Web Hosting',
    slug: 'web-hosting',
    category: 'Hosting & Infrastructure',
    tagline: 'Reliable, fast, and secure hosting solutions for your online presence.',
    icon: 'HardDrive',
    problem: 'Shared hosting servers overloaded with neighbor traffic, lack of resource isolation, and slow queries.',
    solution: 'We provide managed, resource-isolated web hosting environments optimized for speed, security, and consistent uptime with dedicated workers and SSD storage.',
    features: [
      'Dedicated Compute & Memory Allocation (Zero Shared Resource Bleed)',
      'Ultra-Fast NVMe SSD Storage & Redis Object Caching',
      'Real-Time Malware Scanning & Automatic Security Patching',
      '24/7 Managed Server Monitoring & Technical Support'
    ],
    techStack: ['Ubuntu Server', 'Nginx', 'Redis', 'PostgreSQL / MySQL', 'Let’s Encrypt', 'Digital Ocean / AWS'],
    benefits: [
      'Dramatic speed boost cutting Time to First Byte under 100ms',
      'Uninterrupted availability with proactive 24/7 uptime monitoring'
    ]
  },
  {
    _id: 'srv_007',
    id: 'srv_007',
    title: 'Digital Product Design',
    slug: 'digital-product-design',
    category: 'Design & Experience',
    tagline: 'User-centric UI/UX design that bridges the gap between complex functionality and intuitive interaction.',
    icon: 'Layout',
    problem: 'Clunky navigation, cognitive overload, and convoluted user workflows leading to drop-offs.',
    solution: 'We conduct comprehensive user research, journey mapping, and usability testing to craft friction-free digital product experiences backed by scalable design systems.',
    features: [
      'In-Depth User Research, Persona Modeling & Empathy Mapping',
      'Complex Dashboard & SaaS Information Architecture Design',
      'Scalable Enterprise Design Systems with Tokenized Components'
    ],
    techStack: ['Figma', 'FigJam', 'Principle', 'Framer', 'Storybook', 'Lottie'],
    benefits: [
      'Substantial reduction in user onboarding friction and support tickets',
      'Accelerate engineering velocity with reusable atomic design components'
    ]
  },
  {
    _id: 'srv_008',
    id: 'srv_008',
    title: 'Logo Designing',
    slug: 'logo-designing',
    category: 'Branding & Identity',
    tagline: 'Unique brand identities that make your business stand out.',
    icon: 'Sparkles',
    problem: 'Forgettable clip-art logos, lack of vector scalability, and inconsistent brand collateral.',
    solution: 'Agnexa creates distinctive, timeless brand logos and comprehensive visual identity guidelines that represent your company’s technical prowess and future vision.',
    features: [
      'Custom Bespoke Logo Marks & Wordmarks Tailored to Brand Ethos',
      'Scalable Vector Asset Delivery (SVG, EPS, AI, PDF, High-Res PNG)',
      'Comprehensive Brand Identity Guidelines'
    ],
    techStack: ['Adobe Illustrator', 'Figma', 'Adobe Photoshop', 'Vector Math'],
    benefits: [
      'Memorable brand mark commanding immediate industry credibility',
      '100% full legal trademark and commercial copyright ownership'
    ]
  },
  {
    _id: 'srv_009',
    id: 'srv_009',
    title: 'Data Related Solutions',
    slug: 'data-related-solutions',
    category: 'Data & Analytics',
    tagline: 'Advanced analytics and data management to drive informed decisions.',
    icon: 'BarChart3',
    problem: 'Data isolated in departmental silos, slow manual reporting cycles, and untrusted metrics.',
    solution: 'We construct modern data pipelines, centralized warehouses, and real-time executive dashboards that transform raw multi-source data into strategic business leverage.',
    features: [
      'Modern Data Warehouse Engineering (PostgreSQL, Snowflake, BigQuery)',
      'Automated Streaming & Batch ETL / ELT Pipelines (Python, dbt, Kafka)',
      'Interactive Executive Dashboards & KPI Monitoring Systems'
    ],
    techStack: ['Python', 'PostgreSQL', 'MongoDB Atlas', 'Redis', 'dbt', 'PowerBI / Tableau'],
    benefits: [
      'Real-time single-source-of-truth visibility into mission-critical KPIs',
      'Elimination of manual spreadsheets and fragmented departmental reports'
    ]
  },
  {
    _id: 'srv_010',
    id: 'srv_010',
    title: 'Excel Based Services',
    slug: 'excel-based-services',
    category: 'Spreadsheets & Automation',
    tagline: 'Custom Excel automation, VBA macros, advanced financial modeling, and automated spreadsheet reporting solutions.',
    icon: 'FileSpreadsheet',
    problem: 'Repetitive manual data entry, error-prone formulas, and fragmented business spreadsheets.',
    solution: 'Agnexa engineers bespoke Excel automation solutions, complex VBA/macro engines, dynamic Power Query pipelines, and financial models that save hundreds of operational hours.',
    features: [
      'Custom VBA & Macro Automation for Repetitive Workflow Reduction',
      'Advanced Power Query & Power Pivot ETL Data Transformation',
      'Dynamic Executive Dashboards with Interactive KPI Visualizations',
      'Complex Financial Modeling, Forecasting & Scenario Analysis'
    ],
    techStack: ['Microsoft Excel', 'VBA', 'Power Query', 'Power Pivot', 'Office 365', 'Python openpyxl'],
    benefits: [
      'Saves 80%+ of repetitive manual reporting and data aggregation time',
      'Eliminates human calculation errors with standardized validation rules'
    ]
  }
];

export const fallbackPortfolio = [
  {
    _id: 'prj_001',
    id: 'prj_001',
    title: 'MediConnect - Telehealth & Clinic ERP Platform',
    slug: 'mediconnect-telehealth-platform',
    industry: 'Healthcare',
    clientName: 'HealthTech Innovations',
    date: 'September 25, 2026',
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
      { metric: '4.9/5', label: 'Average App Rating' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    _id: 'prj_002',
    id: 'prj_002',
    title: 'FinEdge - Automated Wealth Management & Analytics',
    slug: 'finedge-wealth-analytics',
    industry: 'FinTech',
    clientName: 'FinEdge Capital',
    date: 'September 24, 2026',
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
    id: 'prj_003',
    title: 'OmniTrade - Global B2B Supply Chain & E-Commerce',
    slug: 'omnitrade-supply-chain',
    industry: 'E-Commerce & Logistics',
    clientName: 'OmniTrade Global',
    date: 'September 23, 2026',
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
    id: 'prj_004',
    title: 'NeuralOps - Enterprise AI Document & Knowledge Assistant',
    slug: 'neuralops-ai-knowledge-engine',
    industry: 'AI & Enterprise Automation',
    clientName: 'Global Advisory Group',
    date: 'September 22, 2026',
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
    id: 'prj_005',
    title: 'SmartGrid - IoT Energy Monitoring & Analytics',
    slug: 'smartgrid-iot-analytics',
    industry: 'Manufacturing & Smart Cities',
    clientName: 'Apex Industrial Energy',
    date: 'September 21, 2026',
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
  },
  {
    _id: 'prj_006',
    id: 'prj_006',
    title: 'EduSphere - Next-Gen Interactive Learning Platform',
    slug: 'edusphere-learning-platform',
    industry: 'EdTech',
    clientName: 'EduSphere Academy',
    date: 'September 20, 2026',
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
      { metric: '68%', label: 'Course Completion Rate' },
      { metric: '250K+', label: 'Active Monthly Students' },
      { metric: '4.9/5', label: 'Average Student Experience Score' },
      { metric: '3.2x', label: 'Increase in Daily Engagement' }
    ],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    featured: false
  }
];

// Rich, recent project-related Case Studies & Insights with dates September 20, 2026 and above
export const fallbackBlogs = [
  {
    _id: 'blg_proj_001',
    id: 'blg_proj_001',
    title: 'Architecting MediConnect: How We Scaled HIPAA-Compliant WebRTC Video to 10,000+ Daily Consultations',
    slug: 'architecting-mediconnect-telehealth-webrtc',
    category: 'Project Case Study',
    author: 'Praful Sonwane, Lead System Architect',
    date: 'September 25, 2026',
    readTime: '6 min read',
    excerpt: 'Deep-dive architectural breakdown of our MediConnect healthcare project: end-to-end encrypted WebRTC video streaming, EHR synchronization, and 99.98% consultation uptime.',
    relatedProject: 'mediconnect-telehealth-platform',
    content: `### The Challenge: Sub-Second Encrypted Telehealth at Scale

When engineering MediConnect, the primary objective was establishing a resilient medical consultation platform that complied with strict HIPAA security requirements while supporting over 10,000 simultaneous video sessions across 45 clinics with zero latency drops.

### Architectural Blueprint

1. Signaling & Selective Forwarding Units (SFU):
Rather than peer-to-peer mesh networks which overload mobile bandwidth, we architected an elastic cluster of MediaSoup / Janus SFU servers that negotiate WebRTC streams with minimal client CPU overhead.

2. End-to-End Encryption (E2EE):
All audio and video channels utilize SRTP encryption with dynamic session keys generated per consultation room. No plaintext media ever touches intermediate relay proxies.

3. Synchronous HL7/FHIR Health Record Linking:
While doctors conduct consultations, diagnostic prescriptions and medical notes are bound into an event stream that reconciles directly with existing hospital EHR systems using Kafka microservices.

### Quantifiable Results
* 99.98% Uptime SLA maintained across 6 consecutive quarters.
* Patient wait times decreased by 42% through automated doctor availability scheduling algorithms.
* 4.9 / 5 average user rating across 100,000+ completed telemedicine consultations.`,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['MediConnect', 'Healthcare', 'WebRTC', 'React', 'HIPAA', 'Case Study']
  },
  {
    _id: 'blg_proj_002',
    id: 'blg_proj_002',
    title: 'High-Frequency FinTech: Engineering FinEdge with Sub-80ms WebSocket Analytics and Kafka Pipelines',
    slug: 'engineering-finedge-realtime-wealth-analytics',
    category: 'Project Case Study',
    author: 'Vikramaditya Rao, Principal Cloud Architect',
    date: 'September 24, 2026',
    readTime: '7 min read',
    excerpt: 'Inside the FinEdge wealth analytics engine: how Agnexa achieved <80ms dashboard latency, automated tax-loss harvesting, and tracked $450M+ in capital with zero security flaws.',
    relatedProject: 'finedge-wealth-analytics',
    content: `### The Challenge: Eliminating Lag in High-Net-Worth Portfolio Tracking

Modern institutional investors manage diversified portfolios spanning stocks, crypto derivatives, mutual funds, and international commodities. Legacy banking dashboards routinely refresh data every 5 to 15 minutes, which is completely unacceptable for high-frequency algorithmic trade management.

### The FinEdge Solution Architecture

1. Sub-80ms Streaming with TimescaleDB & WebSockets:
By implementing TimescaleDB hypertables partitioned by time interval and stock ticker, along with distributed WebSocket channels, tick-by-tick price recalculations stream to investor dashboards in under 80 milliseconds.

2. Automated Tax-Loss Harvesting Engine:
Background Go microservices analyze tax-lot distributions daily, automatically alerting portfolio managers when offsetting short-term capital gains against depreciated positions is optimal.

3. Military-Grade Security & Biometric MFA:
With over $450M in platform assets, security was designed with zero trust: cryptographic session tokens, biometric TouchID/FaceID web auth challenges, and automated immutable audit logs.

### Key Milestones
* $450M+ in assets monitored with 100% financial transaction accuracy.
* Zero reported security vulnerabilities through comprehensive third-party penetration testing.`,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    tags: ['FinEdge', 'FinTech', 'TimescaleDB', 'WebSockets', 'Go', 'Case Study']
  },
  {
    _id: 'blg_proj_003',
    id: 'blg_proj_003',
    title: 'NeuralOps: Building an On-Premises Private RAG Assistant for 2 Million Legal Documents',
    slug: 'neuralops-private-rag-legal-documents',
    category: 'Project Case Study',
    author: 'Rajiv Menon, Head of AI Engineering',
    date: 'September 23, 2026',
    readTime: '8 min read',
    excerpt: 'How we built NeuralOps to cut contract review time by 85% across 2M+ confidential corporate contracts using local LLM inference and hybrid vector retrieval.',
    relatedProject: 'neuralops-ai-knowledge-engine',
    content: `### The Challenge: Enterprise Knowledge Without Data Privacy Risks

Our client, a multinational corporate advisory group, possessed over 2 million confidential legal contracts and audits. Searching for specific liabilities took lawyers 4+ hours daily. However, regulatory NDAs prohibited feeding these sensitive documents to commercial cloud AI APIs like public OpenAI or Claude endpoints.

### The NeuralOps Architecture

1. On-Premise Private Inference:
We deployed containerized open-weights LLMs (Llama 3 70B quantized) on air-gapped GPU clusters with strict perimeter firewalling. Zero bytes of sensitive legal data ever escape the company intranet.

2. Hybrid Semantic + Exact Keyword Search:
Legal contracts require precision on clause numbers, dates, and indemnities. We blended dense vector embeddings via localized BGE models, sparse lexical BM25 search for alphanumeric contract IDs, and cross-encoder re-ranking for the top 15 citations.

3. Citation-Backed Verification:
The assistant outputs every answer with clickable page citations and highlighted source text, ensuring legal teams can verify claims in seconds.

### Measurable ROI
* 85% reduction in contract discovery and clause extraction turnaround.
* Zero data leakage incidents across 24 months of active corporate deployment.`,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    tags: ['NeuralOps', 'Artificial Intelligence', 'Private RAG', 'Python', 'FastAPI', 'Case Study']
  },
  {
    _id: 'blg_proj_004',
    id: 'blg_proj_004',
    title: 'Modernizing OmniTrade: Headless B2B Supply Chain & Automated Customs Invoicing',
    slug: 'omnitrade-headless-supply-chain-modernization',
    category: 'Project Case Study',
    author: 'Ananya Deshmukh, Frontend Engineering Lead',
    date: 'September 22, 2026',
    readTime: '6 min read',
    excerpt: 'Overcoming supply chain delays: how OmniTrade automated customs clearing and integrated multi-warehouse inventory across 180,000 monthly transactions.',
    relatedProject: 'omnitrade-supply-chain',
    content: `### The Challenge: 14-Day Freight Invoicing Delays

An international distribution network suffered from fragmented warehouse spreadsheets, resulting in stockouts and manual customs documentation that halted freight shipments at border inspection for up to two weeks.

### The Technical Solution

1. Headless Microservice Architecture:
Powered by Next.js and high-throughput Node.js microservices, OmniTrade decoupled wholesale ordering from regional warehouse logistics.

2. Automated International Customs Compliance:
By integrating harmonized tariff code APIs and automated PDF generation microservices, commercial export invoices and customs documentation generate instantaneously upon checkout.

3. Live GPS Container Telemetry:
Real-time integration with shipping container IoT beacons displays estimated delivery times with 99.4% accuracy.

### Business Outcomes
* 75% faster order processing from cart submission to warehouse dock dispatch.
* $2.8M annual operational expenditure savings from eliminated inventory discrepancies.`,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: ['OmniTrade', 'E-Commerce', 'NextJS', 'NodeJS', 'SupplyChain', 'Case Study']
  },
  {
    _id: 'blg_proj_005',
    id: 'blg_proj_005',
    title: 'SmartGrid IoT: Processing 15,000 Telemetry Events/Sec with Predictive ML Anomaly Detection',
    slug: 'smartgrid-iot-telemetry-anomaly-detection',
    category: 'Project Case Study',
    author: 'Siddharth Nair, Staff Backend Engineer',
    date: 'September 21, 2026',
    readTime: '7 min read',
    excerpt: 'Engineering industrial IoT for heavy manufacturing: predicting transformer faults 48 hours early to prevent catastrophic factory blackouts and peak-demand surcharges.',
    relatedProject: 'smartgrid-iot-analytics',
    content: `### The High-Stakes Reality of Industrial Energy

In heavy industrial manufacturing, an unplanned power transformer failure can cost upwards of $100,000 per hour in idle machinery, damaged tooling, and emergency repair fees.

### The SmartGrid Engineering Stack

1. MQTT Telemetry Ingestion at 15,000 Events/Sec:
A distributed Go broker ingests sensor telemetry—including vibration harmonics, oil temperature, voltage fluctuations, and acoustic emissions—streaming into high-compression TimescaleDB tables.

2. Machine Learning Anomaly Detection:
Using autoencoder neural networks trained on historical failure data, the model detects subtle harmonic anomalies up to 48 hours before physical insulation breakdown occurs.

3. Automated Peak-Load Shedding:
The platform coordinates with factory programmable logic controllers (PLCs) to stagger non-essential workloads during peak tariff windows, avoiding utility penalty fees.

### Proven Metrics
* 34% reduction in equipment downtime over 12 months.
* $620,000 saved annually in peak electric surcharges for our manufacturing client partner.`,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    tags: ['SmartGrid', 'IoT', 'Machine Learning', 'Go', 'TimescaleDB', 'Case Study']
  },
  {
    _id: 'blg_proj_006',
    id: 'blg_proj_006',
    title: 'EduSphere Interactive Sandbox: Scaling Real-Time Gamified Learning Platforms',
    slug: 'edusphere-interactive-code-sandbox',
    category: 'Project Case Study',
    author: 'Rajiv Menon, Head of AI Engineering',
    date: 'September 20, 2026',
    readTime: '6 min read',
    excerpt: 'Architecting an interactive browser sandbox for 250,000+ students with isolated Docker runtime environments and sub-second code compilation.',
    relatedProject: 'edusphere-learning-platform',
    content: `### Interactive Learning at Global Scale

Traditional digital courses suffer from an average completion rate under 12%. When EduSphere approached Agnexa, the goal was creating an ultra-responsive code sandbox running 12 programming languages directly in the browser with 60 FPS feedback and real-time multiplayer peer collaboration.

### Architecture Highlights

1. Ephemeral Sandboxed Execution:
Using lightweight WebAssembly and isolated Docker worker pods, student code evaluates safely within 300ms without risk to the host cluster.

2. WebSockets Peer Study Rooms:
Students collaborate in shared virtual classrooms with synchronized terminal cursors and live voice channels.

3. Adaptive Skill Progression:
Dynamic assessment engines recalibrate problem difficulty in real time based on compilation errors and time to solution.`,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    tags: ['EduSphere', 'EdTech', 'Docker', 'WebSockets', 'React', 'Case Study']
  }
];

export const fallbackIndustries = [
  {
    _id: 'ind_001',
    id: 'fintech',
    slug: 'fintech',
    name: 'FinTech & Banking',
    hash: '#fintech',
    icon: 'Building2',
    tagline: 'High-concurrency financial platforms, algorithmic trading feeds, and regulatory compliance.',
    description: 'We engineer resilient, sub-millisecond financial architectures, algorithmic trading feeds, PCI-DSS tokenized vaults, and automated wealth management dashboards.',
    challenges: 'Processing massive transaction volumes at sub-80ms latency, adhering to stringent RBI/PCI-DSS regulatory frameworks, preventing sophisticated financial fraud, and orchestrating multi-currency ledgers with absolute zero-drift.',
    solutions: [
      'High-throughput microservices event streaming with Go and Apache Kafka',
      'PCI-DSS and SOC2 compliant biometric tokenized payment vaults',
      'Automated fraud detection and anomaly scoring powered by machine learning',
      'Real-time portfolio management and digital wallet integrations with automated tax-loss harvesting'
    ],
    technologies: ['Go', 'Apache Kafka', 'PostgreSQL', 'TimescaleDB', 'Redis', 'WebSockets', 'AWS Financial Cloud'],
    metrics: [
      { metric: '<80ms', label: 'Streaming Dashboard Latency' },
      { metric: '$450M+', label: 'Client Capital Tracked' },
      { metric: '99.99%', label: 'Reconciliation Accuracy' }
    ],
    relatedCaseStudy: 'finedge-wealth-analytics',
    caseStudyTitle: 'FinEdge Wealth Analytics Platform'
  },
  {
    _id: 'ind_002',
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & MedTech',
    hash: '#healthcare',
    icon: 'Activity',
    tagline: 'HIPAA-compliant telehealth, electronic health records (EHR/EMR), and diagnostic workflows.',
    description: 'Engineering enterprise telehealth platforms, encrypted WebRTC video suites, FHIR/HL7 clinical record exchange, and automated medical diagnostic pipelines.',
    challenges: 'Strict HIPAA patient data privacy, legacy fragmented EHR systems, high-definition encrypted medical video streaming across unstable networks, and 24/7 mission-critical clinical availability.',
    solutions: [
      'End-to-end encrypted WebRTC audio/video telehealth consultation rooms',
      'Bidirectional HL7/FHIR hospital electronic health record synchronization',
      'AI-assisted medical image triage and automated diagnostic report extraction',
      'Patient mobile engagement portals with digital prescription workflows'
    ],
    technologies: ['React.js', 'Node.js', 'WebRTC', 'HL7/FHIR', 'PostgreSQL', 'Redis', 'AWS HIPAA Cloud'],
    metrics: [
      { metric: '99.98%', label: 'Consultation Uptime SLA' },
      { metric: '10,000+', label: 'Daily Video Consultations' },
      { metric: '42%', label: 'Reduction in Patient Wait Times' }
    ],
    relatedCaseStudy: 'mediconnect-telehealth-platform',
    caseStudyTitle: 'MediConnect Telehealth & Clinic ERP'
  },
  {
    _id: 'ind_003',
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-Commerce & Retail',
    hash: '#ecommerce',
    icon: 'ShoppingBag',
    tagline: 'Headless multi-vendor marketplaces, real-time inventory synchronization, and sub-second checkout.',
    description: 'Designing high-converting headless digital storefronts, distributed multi-warehouse inventory sync, dynamic pricing engines, and global payment checkout.',
    challenges: 'Sudden flash-sale traffic spikes causing server crashes, inventory drift across physical and digital channels, cart abandonment, and multi-currency international tax settlement.',
    solutions: [
      'Headless commerce storefronts built with Next.js delivering sub-second hydration',
      'Distributed real-time multi-warehouse inventory locking with Redis and Kafka',
      'AI-driven personalization and predictive bundle recommendation algorithms',
      'Omnichannel payment orchestration supporting 130+ fiat currencies and Stripe Connect'
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Stripe Connect', 'Elasticsearch', 'Docker'],
    metrics: [
      { metric: '75%', label: 'Faster Order Processing' },
      { metric: '99.4%', label: 'Inventory Record Accuracy' },
      { metric: '180,000+', label: 'Monthly Transactions Handled' }
    ],
    relatedCaseStudy: 'omnitrade-supply-chain',
    caseStudyTitle: 'OmniTrade B2B Marketplace & Inventory'
  },
  {
    _id: 'ind_004',
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    hash: '#logistics',
    icon: 'Truck',
    tagline: 'End-to-end fleet telemetry, automated customs documentation, and predictive warehouse replenishment.',
    description: 'Building intelligent supply chain architectures with real-time GPS fleet tracking, automated commercial export invoicing, and warehouse management systems.',
    challenges: 'Manual paper-based border customs documentation causing 14-day delays, disconnected warehouse spreadsheets, fuel waste from unoptimized routing, and poor freight visibility.',
    solutions: [
      'Live GPS container telemetry integrated with shipping container IoT beacons',
      'Automated commercial invoice and harmonized tariff customs documentation generation',
      'Predictive stockout warning algorithms and warehouse inventory management (WMS)',
      'Self-service client dispatch portals with milestone SMS and WhatsApp alerts'
    ],
    technologies: ['Go', 'Next.js', 'Google Maps API', 'TimescaleDB', 'Docker', 'Kubernetes', 'MQTT'],
    metrics: [
      { metric: '$2.8M', label: 'Annual Cost Savings' },
      { metric: '14 Days -> 10 Mins', label: 'Customs Clearance Speed' },
      { metric: '99.8%', label: 'Telemetry Tracking Accuracy' }
    ],
    relatedCaseStudy: 'omnitrade-supply-chain',
    caseStudyTitle: 'OmniTrade Telemetry & Logistics System'
  },
  {
    _id: 'ind_005',
    id: 'edtech',
    slug: 'edtech',
    name: 'EdTech Platforms',
    hash: '#edtech',
    icon: 'GraduationCap',
    tagline: 'Interactive virtual classrooms, browser-based sandboxes, and gamified progress tracking.',
    description: 'Engineering ultra-responsive interactive learning portals, in-browser code compilation sandboxes, live gamified quizzes, and collaborative virtual study rooms.',
    challenges: 'Severe course completion drop-offs under 12%, passive video fatigue, high server expenses for sandboxed runtime execution, and grading latency.',
    solutions: [
      'Browser-based live code evaluation sandbox supporting 12 languages with WebAssembly',
      'Interactive multiplayer quizzes with real-time leaderboard gamification',
      'Adaptive AI learning pathways that dynamically recalibrate difficulty',
      'Cryptographically verifiable graduation certificates and skill badges'
    ],
    technologies: ['React.js', 'Node.js', 'WebSockets', 'Docker Sandboxes', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
      { metric: '68%', label: 'Course Completion Rate' },
      { metric: '250K+', label: 'Active Monthly Students' },
      { metric: '3.2x', label: 'Increase in Daily Engagement' }
    ],
    relatedCaseStudy: 'edusphere-learning-platform',
    caseStudyTitle: 'EduSphere Interactive Sandbox Platform'
  },
  {
    _id: 'ind_006',
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Industry 4.0 & Smart IoT',
    hash: '#manufacturing',
    icon: 'Factory',
    tagline: 'Industrial telemetry ingestion, predictive equipment maintenance, and factory automation.',
    description: 'Architecting industrial IoT gateways, high-frequency sensor data ingestion, machine learning anomaly detection, and factory energy optimization.',
    challenges: 'Noisy factory floor sensor environments, legacy unmonitored SCADA transformers, catastrophic equipment downtime costs, and high utility peak surcharges.',
    solutions: [
      'High-throughput MQTT broker ingesting 15,000 telemetry sensor events per second',
      'Autoencoder machine learning models predicting transformer failure 48 hours early',
      'Automated peak-load shedding coordinating with factory programmable logic controllers',
      'Interactive Grafana executive dashboards for carbon offset and energy compliance'
    ],
    technologies: ['Go', 'TimescaleDB', 'MQTT', 'Python ML', 'React.js', 'Grafana', 'AWS IoT Core'],
    metrics: [
      { metric: '34%', label: 'Reduction in Equipment Downtime' },
      { metric: '$620,000', label: 'Saved in Peak Surcharges' },
      { metric: '48 hrs', label: 'Advance Failure Warning Notice' }
    ],
    relatedCaseStudy: 'smartgrid-iot-analytics',
    caseStudyTitle: 'SmartGrid IoT Telemetry & ML System'
  }
];
