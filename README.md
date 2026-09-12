# Agnexa Technologies — Full-Stack Enterprise IT Portal & Website

> **"Ideas to Impact"** — A production-ready, full-stack website and administrative platform for **Agnexa Technologies**, an Indian IT and engineering powerhouse delivering custom software, Generative AI, cloud modernization, mobile, and cybersecurity solutions worldwide.

---

## 🚀 Key Architectural Highlights

- **Visual & Brand Identity**: Tailored dark technology design system centered around the official Agnexa logo:
  - **Electric Blue**: `#1261FF`, `#18A8FF`
  - **Flame Orange Accent**: `#FF6A00`
  - **Deep Space Navy**: `#030B1A`, `#071A3D`, `#0B2A5B`
  - **Interactive 3D Three.js Canvas**: Interactive WebGL rotating neural icosahedron core, glowing particle cloud, and orbital gyroscopic rings responding to cursor movement.
- **Frontend Stack**:
  - React 18, Vite 6, Tailwind CSS, Lucide React, Three.js, React Router v6, Axios.
  - 13+ Public Pages + Dynamic Service Details (`/services/:slug`) + Portfolio Details (`/portfolio/:slug`) + Blog Reader (`/blog/:slug`).
  - Desktop Mega-Menu for 9 IT Services and Mobile Accordion Navigation Drawer.
- **Backend Architecture**:
  - Node.js & Express REST API with security middleware, input validation, and CORS policies.
  - **Dual-Mode Persistence Layer**: Seamlessly connects to MongoDB via Mongoose when `MONGODB_URI` is provided; automatically transitions to a high-speed in-memory store with seeded data when MongoDB is offline, guaranteeing 100% zero-downtime testability.
  - JWT Authentication, bcrypt password hashing, and role-based access control (`admin` and `user`).
- **Executive Admin Console**:
  - Full CRUD operations for Engineering Articles, Case Studies, and Services.
  - Inbound Client Enquiry Manager with real-time status workflow (`New` ➔ `Contacted` ➔ `In Progress` ➔ `Converted` ➔ `Closed`).
  - Newsletter Subscriber Registry and Career Job Application Tracker.

---

## 🔑 Default Evaluation Credentials

| Role | Email | Password | Access Level |
| :--- | :--- | :--- | :--- |
| **Executive Admin** | `admin@agnexa.com` | `Admin@123` | Full access to `/admin` dashboard, enquiries, blogs, and portfolio CRUD |
| **Client Partner** | `client@example.com` | `Admin@123` | Access to `/dashboard` client portal |

*(Quick "Autofill Admin" and "Autofill Client" shortcut buttons are provided directly on the `/login` page for instant evaluation).*

---

## 🛠️ Quick Start Guide

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### 1. Start the Backend Server (Port 5000)
```bash
cd server
npm install
npm run dev
# Server listens on http://localhost:5000 (API: http://localhost:5000/api)
```

### 2. Start the Frontend Client (Port 5173)
```bash
cd client
npm install
npm run dev
# Open http://localhost:5173/ in your browser
```

### 3. Production Build
```bash
cd client
npm run build
```

---

## 📡 Core API Endpoints

### Authentication
- `POST /api/auth/register` — Register a new client account
- `POST /api/auth/login` — Sign in and receive JWT token
- `GET /api/auth/me` — Retrieve authenticated user profile (Protected)
- `POST /api/auth/forgot-password` — Dispatch reset token
- `POST /api/auth/reset-password` — Update user password

### Enquiries & Leads
- `POST /api/contact` — Submit client project brief (Full validation)
- `GET /api/contact` — Retrieve all enquiries (Admin protected)
- `PATCH /api/contact/:id` — Update enquiry status & review notes (Admin protected)
- `DELETE /api/contact/:id` — Remove enquiry (Admin protected)

### Newsletter
- `POST /api/newsletter` — Subscribe email with duplicate prevention
- `GET /api/newsletter` — List active subscribers (Admin protected)

### Services & Solutions
- `GET /api/services` — List all 9 core IT service practices
- `GET /api/services/:slug` — Deep-dive service architecture specifications
- `POST /api/services` — Create new service offering (Admin protected)
- `PUT /api/services/:id` — Update service specification (Admin protected)
- `DELETE /api/services/:id` — Delete service offering (Admin protected)

### Portfolio Case Studies
- `GET /api/portfolio` — List case studies with metrics & filters
- `GET /api/portfolio/:slug` — Retrieve full project challenge & solution
- `POST /api/portfolio` — Create new case study (Admin protected)
- `PUT /api/portfolio/:id` — Update case study (Admin protected)
- `DELETE /api/portfolio/:id` — Delete case study (Admin protected)

### Blog & Thought Leadership
- `GET /api/blog` — List tech insights and architectural guides
- `GET /api/blog/:slug` — Read full article with formatting
- `POST /api/blog` — Publish new article (Admin protected)
- `PUT /api/blog/:id` — Update article (Admin protected)
- `DELETE /api/blog/:id` — Remove article (Admin protected)

### Careers & Applications
- `POST /api/careers/apply` — Submit job application with resume notes
- `GET /api/careers/applications` — Review applicant pool (Admin protected)
- `PATCH /api/careers/applications/:id` — Update candidate status (Admin protected)

### Admin Operations
- `GET /api/admin/stats` — Real-time KPI counts (Enquiries, blogs, subscribers, users)
- `GET /api/admin/users` — List registered users
- `PATCH /api/admin/users/:id/role` — Update user role (`user` ⇄ `admin`)

---

## 🎨 Page Catalog & Structure

| Route | Page Name | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero with 3D WebGL rotating core, tech ticker, 9 services, process blueprint, featured projects, testimonials, FAQs, and CTA banner |
| `/about` | **About Us** | Indian engineering prowess, global outlook, mission, vision, values, milestones |
| `/services` | **Services Catalog** | Comprehensive matrix of 9 IT domains with category filters & search |
| `/services/:slug` | **Service Detail** | Problem statement, Agnexa solution, key features, tech stack, process, benefits |
| `/industries` | **Industries** | Specialized solutions for FinTech, HealthTech, E-Commerce, Logistics, EdTech, Smart IoT |
| `/technologies` | **Technologies** | Interactive tabbed architecture matrix across Cloud, AI, Frontend, Backend, Databases |
| `/portfolio` | **Case Studies** | Demonstrable track record with challenge, solution, and measurable metric outcomes |
| `/portfolio/:slug` | **Project Detail** | In-depth engineering breakdown of enterprise case studies |
| `/careers` | **Careers** | Engineering culture, perks, hardware benefits, open roles, and application modal |
| `/blog` | **Insights** | Technical thought leadership on RAG, cloud migration, microservices, and zero-trust |
| `/blog/:slug` | **Article Reader** | Formatted reading view with author signatures, tags, and share capability |
| `/contact` | **Contact RFP** | High-converting consultation form with budget bands, timelines, and India HQ office info |
| `/privacy-policy` | **Privacy Policy** | DPDP/GDPR-compliant data protection framework |
| `/terms` | **Terms & Conditions**| Master service terms and intellectual property rights assignment |
| `/login` | **Client Login** | JWT authentication with secure credentials |
| `/register` | **Register** | New client partner sign-up |
| `/dashboard` | **Client Dashboard**| User consultation hub and direct solution lead escalations |
| `/admin` | **Admin Console** | Executive analytics, inbound enquiry status tracking, subscriber registry, and full CRUD |

---

## 🛡️ License & Ownership
Copyright © 2026 **Agnexa Technologies**. All rights reserved.
All deliverables, source code, and architectural assets are built for enterprise deployment.
