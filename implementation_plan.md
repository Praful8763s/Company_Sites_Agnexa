# Implementation Plan: Agnexa Technologies Full-Stack Website

Build a premium, responsive, production-ready website and REST API for **Agnexa Technologies** ("Ideas to Impact"), an Indian IT company providing software development, AI & ML, cloud, mobile, and digital transformation solutions.

## User Review Required

> [!IMPORTANT]
> **Database Architecture**: Since local `mongod` is not installed on the system, the Express backend will be architected with a **Dual-Mode Persistence Layer**:
> 1. If `MONGODB_URI` is provided (e.g. MongoDB Atlas or a remote instance), it connects natively using standard **Mongoose** models and schemas.
> 2. If MongoDB is unavailable or unconfigured, the backend automatically transitions to an in-memory/JSON store with full CRUD capabilities, identical schemas, seeded admin credentials (`admin@agnexa.com` / `Admin@123`), and sample data.
> This guarantees zero downtime, seamless evaluation, and 100% testability out of the box while remaining fully compatible with MongoDB in production.

> [!NOTE]
> **Brand & Logo**: The official logo from `company logo.png` will be embedded into the header, footer, favicon, and brand visuals, utilizing its electric blue (`#1261FF`), deep navy (`#071A3D`), and fiery orange (`#FF6A00`) color harmony.

---

## Architecture Overview

```
d:\Wondershare\
├── company logo.png
├── README.md
├── package.json (root workspace scripts)
├── client/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   ├── public/
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── assets/
│       ├── context/ (AuthContext, ThemeContext)
│       ├── components/
│       │   ├── common/ (Navbar, Footer, MegaMenu, SEO, Modal, Button, Badge)
│       │   ├── cards/ (ServiceCard, ProjectCard, BlogCard, StatCard)
│       │   └── ui/ (FloatingCard, AnimatedGlow, ParticleCanvas)
│       ├── layouts/ (PublicLayout, AdminLayout, AuthLayout)
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── About.jsx
│       │   ├── Services.jsx
│       │   ├── ServiceDetail.jsx (Dynamic /services/:slug)
│       │   ├── Industries.jsx
│       │   ├── Technologies.jsx
│       │   ├── Portfolio.jsx
│       │   ├── PortfolioDetail.jsx
│       │   ├── Careers.jsx
│       │   ├── Blog.jsx
│       │   ├── BlogDetail.jsx
│       │   ├── Contact.jsx
│       │   ├── PrivacyPolicy.jsx
│       │   ├── Terms.jsx
│       │   ├── NotFound.jsx
│       │   ├── auth/ (Login, Register, ForgotPassword, ResetPassword)
│       │   └── admin/ (DashboardOverview, Enquiries, Newsletters, Careers, BlogAdmin, PortfolioAdmin, ServicesAdmin, UsersAdmin)
│       ├── services/ (api.js, authService.js, contactService.js, etc.)
│       └── data/ (servicesData, industriesData, technologiesData, portfolioData, blogData)
└── server/
    ├── package.json
    ├── .env.example
    ├── .env
    └── src/
        ├── server.js
        ├── app.js
        ├── config/ (db.js, seed.js)
        ├── models/ (User.js, Contact.js, Newsletter.js, Service.js, Portfolio.js, Blog.js, Application.js)
        ├── controllers/ (authController, contactController, newsletterController, serviceController, portfolioController, blogController, applicationController, adminController)
        ├── routes/ (authRoutes, contactRoutes, newsletterRoutes, serviceRoutes, portfolioRoutes, blogRoutes, applicationRoutes, adminRoutes)
        └── middleware/ (authMiddleware, errorMiddleware, validationMiddleware)
```

---

## Proposed Implementation Steps

### 1. Server Configuration & API Implementation
- Initialize `server/package.json` with scripts: `"dev": "nodemon src/server.js"`, `"start": "node src/server.js"`.
- Install dependencies: `express`, `cors`, `dotenv`, `jsonwebtoken`, `bcryptjs`, `mongoose`, `nodemon`.
- Create `.env.example` and `.env` (`PORT=5000`, `JWT_SECRET`, `CLIENT_URL=http://localhost:5173`, `MONGODB_URI`).
- Build robust Mongoose schemas and in-memory dual-layer storage adapters for:
  - `User` (email, password hash, role: 'admin'|'user', name, company)
  - `Contact` (fullName, company, email, phone, service, budget, timeline, message, status: 'New'|'Contacted'|'In Progress'|'Converted'|'Closed')
  - `Newsletter` (email, status, subscribedAt)
  - `Service` (title, slug, tagline, category, description, problem, solution, features, techStack, process, benefits)
  - `Portfolio` (title, slug, industry, challenge, solution, technologies, features, results, image, metrics)
  - `Blog` (title, slug, category, excerpt, content, readTime, author, date, tags, image)
  - `Application` (fullName, email, phone, role, experience, portfolioUrl, resumeNotes, appliedAt)
- Seed initial administrative account (`admin@agnexa.com` / `Admin@123`) and complete data for services, projects, and articles.
- Implement REST API endpoints with authentication middleware (`protect`, `adminOnly`) and validation.

### 2. Client Setup & Design System
- Setup `client/package.json` with `react`, `react-dom`, `react-router-dom`, `lucide-react`, `tailwindcss`, `postcss`, `autoprefixer`, `framer-motion`, `gsap`, `axios`.
- Configure `tailwind.config.js` with Agnexa custom color tokens:
  - Brand Navy: `#050E23`, `#071A3D`, `#0B2A5B`
  - Electric Blue: `#1261FF`, `#18A8FF`
  - Fire Accent: `#FF6A00`, `#FF7A18`
  - Subtle borders, glassmorphic cards, gradients, custom glow animations.
- Set up `public/` assets: copy Agnexa logo, generate favicon and app icons.
- Implement `SEO.jsx` component for dynamic title tags, meta descriptions, OpenGraph, Twitter cards, and JSON-LD organization schema.

### 3. Core Components & Layouts
- **Navbar**:
  - Sticky header with glassmorphism on scroll.
  - Agnexa logo with "IDEAS TO IMPACT" subtitle.
  - Interactive Desktop Mega-Menu for 9 IT Services categorized logically.
  - Links: About, Services, Industries, Portfolio, Technologies, Insights, Careers, Contact, "Get Started".
  - Mobile responsive drawer with smooth accordion menus.
- **Footer**:
  - Logo, company description, quick links, service links, India HQ contact badges, social icons, legal links, live newsletter subscription form, copyright 2026.
- **Auth & Admin Layouts**:
  - Protected route wrappers for authenticated users and admins.
  - Dedicated Admin sidebar with live counts and quick status toggles.

### 4. Page Development
- **Home Page**:
  - Hero with "Build What's Next With Technology", floating tech cards, electric gradient mesh, particle effects, dual CTAs.
  - Capability ticker / trusted tech stack strip.
  - About Agnexa overview with core metrics.
  - 9 Interactive Services grid with category badges and deep-links.
  - Why Choose Agnexa (Innovation, Reliability, Security, Speed, Enterprise Delivery).
  - Tech Stack interactive tabbed explorer (Frontend, Backend, Cloud/DevOps, AI/ML, Data).
  - Agile 6-stage development process.
  - Featured Case Studies spotlight.
  - Industries Served (FinTech, HealthTech, E-Commerce, Logistics, etc.).
  - AI & Innovation Spotlight banner.
  - Client Testimonials with verified feedback format.
  - Statistics Counter (structured clearly for real stats).
  - Interactive FAQ accordion.
  - Conversion CTA banner.
- **About Us**: Company mission, vision, values, leadership philosophy, culture of engineering excellence.
- **Services Index & Dynamic Service Details (`/services/:slug`)**:
  - Individual detail pages for all 9 domains: Software Development, Web Development, Mobile Apps, AI & Machine Learning, Cloud & DevOps, Data & Analytics, Cybersecurity, UI/UX Design, IT Consulting.
  - Problem statement, Agnexa solution, core features, tech stack, roadmap, benefits, related case studies, consultation CTA.
- **Industries Page**: Deep-dive into FinTech, Healthcare, E-Commerce, Logistics, EdTech, Manufacturing.
- **Technologies Page**: Interactive matrix of frameworks, cloud platforms, AI libraries, and DevOps tools.
- **Portfolio & Case Studies**: Filterable project gallery with detailed modal/page views displaying challenge, solution, and measurable results.
- **Careers Page**: Open positions (Full Stack Dev, AI Engineer, Cloud Architect, UI/UX Designer), culture highlights, and direct application modal/form.
- **Blog / Insights**: Tech thought leadership articles with category filter and reading views.
- **Contact Page**: Full enterprise RFP/contact form with input validation, budget tiers, timeline selection, Indian office details, and backend submission.
- **Legal Pages**: Privacy Policy & Terms of Service.
- **Auth & Admin Pages**: Login, Register, Forgot/Reset Password, and the Admin Dashboard with full CRUD capabilities and status workflow for enquiries.

### 5. Verification & Testing
- Start both Vite dev server and Node.js backend.
- Verify API health check: GET `/api/services`, GET `/api/portfolio`, GET `/api/blog`.
- Test Contact form submission: POST `/api/contact` and verify enquiry persists.
- Test Newsletter subscription: POST `/api/newsletter` and verify duplicate handling.
- Test Admin login with seeded credentials and test updating enquiry status, managing blogs, and viewing analytics.
- Run frontend production build (`npm run build`) to ensure zero linting or bundle errors.
- Perform automated browser testing using the browser subagent to visually inspect navigation, mega-menu, responsive layouts, animations, and form submissions.

---

## Verification Plan

### Automated Tests & Builds
- Run `npm run build` in `client` to verify React/Vite builds cleanly without errors.
- Run node test script to verify API routes:
  - Auth: login, me
  - Public: services, portfolio, blog, contact, newsletter
  - Admin: protected contact status updates, CRUD actions

### Visual & Browser Verification
- Launch the browser subagent to:
  - Navigate to `http://localhost:5173/`
  - Check sticky navbar, mega-menu, hero animations, interactive service cards, and footer
  - Navigate to `/services/ai-machine-learning`
  - Navigate to `/contact` and submit a test inquiry
  - Navigate to `/login`, authenticate as admin, and verify the admin dashboard
  - Verify mobile responsiveness at 375px viewport width.
