# Agnexa Technologies - Production Deployment Guide

This guide provides end-to-end instructions for deploying the Agnexa Technologies Full-Stack Website (React, Vite, Express, Supabase, Tailwind CSS, Three.js) to production.

---

## 🏗️ Deployment Architecture Options

You can deploy the Agnexa application using either of two battle-tested architectures:

| Architecture | Recommended Platforms | Best For |
| :--- | :--- | :--- |
| **Option A: Unified Full-Stack** *(Simplest & Recommended)* | Render, Railway, Heroku, Docker | Single URL, zero CORS configuration, automatic SPA fallback, lowest cost. |
| **Option B: Split Decoupled** | Vercel (Frontend) + Render/Railway (Backend) | Global CDN edge caching on Vercel, separate autoscaling of backend APIs. |
| **Option C: Docker Container** | AWS ECS, Google Cloud Run, DigitalOcean Droplet | Full containerization, isolated environments, Kubernetes readiness. |

---

## ⚡ Step 1: Database Setup (Supabase)

Agnexa includes high-speed dual storage: it operates in-memory for instant testing, and connects seamlessly to Supabase PostgreSQL for persistent production data.

1. Go to [Supabase](https://supabase.com) and create a new project.
2. In your Supabase dashboard, navigate to **Project Settings** -> **API**.
3. Copy:
   - **Project URL** (`https://xyzcompany.supabase.co`)
   - **anon / public key**
   - **service_role key** (secret)
4. Navigate to the **SQL Editor** in the left sidebar.
5. Open the schema file [server/src/database/supabase_schema.sql](file:///d:/Wondershare/server/src/database/supabase_schema.sql).
6. Paste the entire SQL script into the Supabase SQL editor and click **Run**.
   - This creates all 7 tables (`users`, `services`, `portfolio`, `blogs`, `contacts`, `newsletters`, `applications`), indexes, and security policies.

---

## 🚀 Option A: Unified Full-Stack Deployment on Render (Recommended)

In this mode, Express serves the built Vite client from `client/dist` and handles SPA routing fallback for all pages (`/services`, `/about`, `/portfolio`, `/admin`, etc.) while hosting `/api/*` endpoints.

### Method 1: Using Render Blueprint (`render.yaml`)
1. Push your repository to GitHub / GitLab.
2. Log into [Render](https://render.com).
3. Click **New +** -> **Blueprint**.
4. Connect your repository. Render will automatically detect [render.yaml](file:///d:/Wondershare/render.yaml).
5. Add your environment variables:
   - `SUPABASE_URL`: Your Supabase Project URL
   - `SUPABASE_ANON_KEY`: Your Supabase Anon Key
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase Service Role Key
6. Click **Apply**. Render will automatically build the client and launch the server!

### Method 2: Manual Web Service Setup on Render
1. Click **New +** -> **Web Service**.
2. Connect your repository.
3. Configure settings:
   - **Environment**: `Node`
   - **Build Command**: `cd client && npm install && npm run build && cd ../server && npm install`
   - **Start Command**: `node server/src/server.js`
   - **Health Check Path**: `/api/health`
4. In **Environment Variables**, add:
   ```env
   NODE_ENV=production
   PORT=10000
   JWT_SECRET=your-random-64-character-secret
   JWT_EXPIRE=30d
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```
5. Click **Deploy Web Service**.

---

## 🌐 Option B: Split Frontend on Vercel + Backend on Render / Railway

### 1. Deploy the Backend (Render or Railway)
1. Deploy the `server/` directory as a Node web service.
   - **Build Command**: `npm install`
   - **Start Command**: `npm start` (or `node src/server.js`)
   - **Root Directory**: `server`
2. Set Environment Variables:
   ```env
   NODE_ENV=production
   PORT=5000
   CLIENT_URL=https://your-frontend.vercel.app
   ALLOWED_ORIGINS=https://your-frontend.vercel.app
   JWT_SECRET=your-random-64-character-secret
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```
3. Copy your live backend URL (e.g. `https://agnexa-api.onrender.com`).

### 2. Deploy Frontend on Vercel
1. Log into [Vercel](https://vercel.com) and click **Add New** -> **Project**.
2. Select your repository.
3. Set:
   - **Root Directory**: `client`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Under **Environment Variables**, add:
   ```env
   VITE_API_URL=https://agnexa-api.onrender.com
   ```
5. Click **Deploy**.
   > *Note*: The included `client/vercel.json` already contains the SPA rewrite rule (`/* -> /index.html`) so navigating or refreshing on subpages will not produce 404 errors.

---

## 🐳 Option C: Docker Container Deployment

The repository includes a production-grade multi-stage [Dockerfile](file:///d:/Wondershare/Dockerfile) and [.dockerignore](file:///d:/Wondershare/.dockerignore).

### 1. Build the Docker Image
```bash
docker build -t agnexa-app:latest .
```

### 2. Run Locally or on a Server
```bash
docker run -d \
  -p 5000:5000 \
  -e NODE_ENV=production \
  -e PORT=5000 \
  -e JWT_SECRET="your-production-secret" \
  -e SUPABASE_URL="https://your-project.supabase.co" \
  -e SUPABASE_ANON_KEY="your-anon-key" \
  -e SUPABASE_SERVICE_ROLE_KEY="your-service-role-key" \
  --name agnexa-container \
  agnexa-app:latest
```

### 3. Check Container Health
```bash
curl http://localhost:5000/api/health
```

---

## 🔐 Production Environment Variables Checklist

| Variable Name | Purpose | Example Value |
| :--- | :--- | :--- |
| `NODE_ENV` | Sets production mode | `production` |
| `PORT` | Web server listening port | `5000` (or host injected) |
| `CLIENT_URL` | Primary allowed frontend origin | `https://agnexa.com` |
| `ALLOWED_ORIGINS` | Comma-separated CORS allowed domains | `https://agnexa.com,https://www.agnexa.com` |
| `JWT_SECRET` | Secret key used to sign JWT auth tokens | `secure_random_key_min_32_characters` |
| `JWT_EXPIRE` | Expiration lifespan for JWT sessions | `30d` |
| `SUPABASE_URL` | Supabase project API gateway endpoint | `https://xxxx.supabase.co` |
| `SUPABASE_ANON_KEY` | Public client API key for Supabase | `eyJhbGci...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Administrative service key for Supabase | `eyJhbGci...` |
| `VITE_API_URL` *(Client)* | Remote backend URL (only for split deployments) | `https://agnexa-api.onrender.com` |

---

## 🧪 Post-Deployment Verification

1. **Verify Health Endpoint**:
   Visit `https://your-domain.com/api/health`. Should return status `200` with JSON:
   ```json
   {
     "status": "online",
     "environment": "production",
     "company": "Agnexa Technologies"
   }
   ```
2. **Verify Frontend Routes**:
   Visit `https://your-domain.com/services`, `https://your-domain.com/portfolio`, `https://your-domain.com/careers` and press browser refresh to ensure SPA routing works seamlessly.
3. **Verify Interactive Features**:
   - Submit a contact enquiry via `/contact`.
   - Subscribe to the newsletter in the footer.
   - Login to the Admin Dashboard via `/login` (`admin@agnexa.com` / `Admin@2026!`).
