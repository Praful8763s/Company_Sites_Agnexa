import React from 'react';

// 1. Cloud Web Hosting: AWS Cloud Infrastructure Logo
export function CloudHostingLogo({ className = "w-6 h-6", size }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size} 
      height={size}
    >
      <defs>
        <linearGradient id="awsCloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9900" />
          <stop offset="100%" stopColor="#FF6A00" />
        </linearGradient>
        <linearGradient id="cloudBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#18A8FF" />
          <stop offset="100%" stopColor="#1261FF" />
        </linearGradient>
      </defs>
      {/* Cloud Base */}
      <path 
        d="M36.5 35H13C8.58 35 5 31.42 5 27C5 22.95 8.01 19.61 12 19.08C13.1 13.92 17.65 10 23.1 10C29.28 10 34.36 14.86 34.93 20.97C38.93 21.45 42 24.87 42 29C42 32.31 39.54 35 36.5 35Z" 
        fill="url(#cloudBodyGrad)" 
      />
      {/* Internal AWS-style smile swoosh */}
      <path 
        d="M14 28.5C19 32.5 28 32.5 33 28.5" 
        stroke="url(#awsCloudGrad)" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
      <path 
        d="M32 25.5L34.5 29L31 31" 
        fill="none" 
        stroke="url(#awsCloudGrad)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Server Circuit Dots */}
      <circle cx="18" cy="22" r="1.8" fill="#FFFFFF" />
      <circle cx="24" cy="20" r="1.8" fill="#FFFFFF" />
      <circle cx="30" cy="22" r="1.8" fill="#FFFFFF" />
    </svg>
  );
}

// 2. Web Application Development: React & Web Core Logo
export function WebAppDevLogo({ className = "w-6 h-6", size }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size} 
      height={size}
    >
      <defs>
        <linearGradient id="reactCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" />
          <stop offset="100%" stopColor="#007ACC" />
        </linearGradient>
      </defs>
      {/* Nucleus */}
      <circle cx="24" cy="24" r="4.2" fill="#00D8FF" />
      {/* Orbit 1 */}
      <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="url(#reactCyan)" strokeWidth="2.4" transform="rotate(0 24 24)" />
      {/* Orbit 2 */}
      <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="url(#reactCyan)" strokeWidth="2.4" transform="rotate(60 24 24)" />
      {/* Orbit 3 */}
      <ellipse cx="24" cy="24" rx="20" ry="7.5" stroke="url(#reactCyan)" strokeWidth="2.4" transform="rotate(120 24 24)" />
      {/* Web Code Brackets */}
      <path d="M7 24L3 21M7 24L3 27" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" />
      <path d="M41 24L45 21M41 24L45 27" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 3. Mobile App Solutions: Native Mobile iOS & Android Emblem
export function MobileAppLogo({ className = "w-6 h-6", size }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size} 
      height={size}
    >
      <defs>
        <linearGradient id="phoneBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="androidGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      {/* Smartphone Bezel */}
      <rect x="12" y="4" width="24" height="40" rx="6" fill="url(#phoneBodyGrad)" />
      {/* Inner Screen */}
      <rect x="15" y="8" width="18" height="30" rx="2" fill="#0F172A" />
      {/* Dynamic Screen App Content */}
      <rect x="17" y="11" width="14" height="10" rx="2" fill="#1E293B" />
      <circle cx="21" cy="16" r="2" fill="#38BDF8" />
      <path d="M19 25H29" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 28H26" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 31H24" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      {/* Speaker notch */}
      <rect x="21" y="6" width="6" height="1" rx="0.5" fill="#94A3B8" />
      {/* Home Indicator */}
      <rect x="20" y="40.5" width="8" height="1.5" rx="0.75" fill="#FFFFFF" opacity="0.8" />
      {/* Native Badge Accent */}
      <circle cx="36" cy="12" r="5" fill="url(#androidGreen)" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M34 12L35.5 13.5L38 10.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 4. Web Designing: Official Figma / Creative UI Palette Logo
export function WebDesigningLogo({ className = "w-6 h-6", size }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size} 
      height={size}
    >
      {/* Figma 5-Piece Vector Palette */}
      <path d="M16 8H24V16H16C11.58 16 8 12.42 8 8C8 3.58 11.58 0 16 0" transform="translate(4, 8)" fill="#F24E1E" />
      <path d="M24 0H32C36.42 0 40 3.58 40 8C40 12.42 36.42 16 32 16H24V0" transform="translate(-4, 8)" fill="#FF7262" />
      <path d="M24 16H32C36.42 16 40 19.58 40 24C40 28.42 36.42 32 32 32C27.58 32 24 28.42 24 24V16" transform="translate(-4, 4)" fill="#1ABCFE" />
      <path d="M8 24C8 19.58 11.58 16 16 16H24V24C24 28.42 20.42 32 16 32C11.58 32 8 28.42 8 24" transform="translate(4, 4)" fill="#A259FF" />
      <path d="M8 32C8 27.58 11.58 24 16 24H24V32C24 36.42 20.42 40 16 40C11.58 40 8 36.42 8 32" transform="translate(4, 0)" fill="#0ACF83" />
    </svg>
  );
}

// 5. Web Deployment: Docker DevOps Container & Cloud Release Logo
export function WebDeploymentLogo({ className = "w-6 h-6", size }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size} 
      height={size}
    >
      <defs>
        <linearGradient id="dockerBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D63ED" />
          <stop offset="100%" stopColor="#0B409C" />
        </linearGradient>
      </defs>
      {/* Docker Container Boxes */}
      <rect x="10" y="16" width="5" height="4.5" rx="0.8" fill="#0080FF" />
      <rect x="16" y="16" width="5" height="4.5" rx="0.8" fill="#0080FF" />
      <rect x="22" y="16" width="5" height="4.5" rx="0.8" fill="#0080FF" />
      <rect x="16" y="10.5" width="5" height="4.5" rx="0.8" fill="#2496ED" />
      <rect x="22" y="10.5" width="5" height="4.5" rx="0.8" fill="#2496ED" />
      <rect x="28" y="16" width="5" height="4.5" rx="0.8" fill="#0080FF" />
      {/* Docker Whale Body */}
      <path 
        d="M44.5 24.2C43.8 23.4 42.4 22.8 41.5 22.8C41.2 21.6 40.5 20.6 39.5 20L39 19.6L38.4 20C36.8 21.1 35.8 22.6 35.5 24.2H6C5.5 24.2 5 24.7 5 25.3C5.2 29.8 8 35.8 15.8 35.8C25.5 35.8 33.2 32.5 37.5 28.5C41 28.5 43.5 26.5 44.8 24.8L44.5 24.2Z" 
        fill="url(#dockerBlue)" 
      />
      {/* Whale Eye */}
      <circle cx="38" cy="24.5" r="1.2" fill="#FFFFFF" />
      {/* Water Spout / CI/CD Arrow */}
      <path d="M42 16L40 18M42 16L44 18" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 6. Web Hosting: High-Speed Dedicated NVMe Server Logo
export function WebHostingLogo({ className = "w-6 h-6", size }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size} 
      height={size}
    >
      <defs>
        <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      {/* Rack 1 */}
      <rect x="6" y="8" width="36" height="8" rx="2" fill="url(#serverGrad)" stroke="#475569" strokeWidth="1.5" />
      <circle cx="11" cy="12" r="1.5" fill="#10B981" />
      <circle cx="16" cy="12" r="1.5" fill="#10B981" />
      <rect x="22" y="11" width="16" height="2" rx="1" fill="#64748B" />

      {/* Rack 2 */}
      <rect x="6" y="20" width="36" height="8" rx="2" fill="url(#serverGrad)" stroke="#475569" strokeWidth="1.5" />
      <circle cx="11" cy="24" r="1.5" fill="#10B981" />
      <circle cx="16" cy="24" r="1.5" fill="#F59E0B" />
      <rect x="22" y="23" width="16" height="2" rx="1" fill="#64748B" />

      {/* Rack 3 */}
      <rect x="6" y="32" width="36" height="8" rx="2" fill="url(#serverGrad)" stroke="#475569" strokeWidth="1.5" />
      <circle cx="11" cy="36" r="1.5" fill="#10B981" />
      <circle cx="16" cy="36" r="1.5" fill="#10B981" />
      <rect x="22" y="35" width="16" height="2" rx="1" fill="#64748B" />
    </svg>
  );
}

// 7. Digital Product Design: UI/UX Diamond Design System Logo
export function ProductDesignLogo({ className = "w-6 h-6", size }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size} 
      height={size}
    >
      <defs>
        <linearGradient id="uxDiamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      {/* Diamond Wireframe Nodes */}
      <polygon points="24,6 40,16 34,40 14,40 8,16" fill="url(#uxDiamondGrad)" />
      {/* Inner facet lines */}
      <line x1="8" y1="16" x2="40" y2="16" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="24" y1="6" x2="20" y2="40" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="24" y1="6" x2="28" y2="40" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="24" y1="6" x2="14" y2="40" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="24" y1="6" x2="34" y2="40" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Sparkle Accent */}
      <circle cx="36" cy="10" r="2" fill="#FDE047" />
    </svg>
  );
}

// 8. Logo Designing: Precision Vector Pen Tool & Golden Mark
export function LogoDesignLogo({ className = "w-6 h-6", size }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size} 
      height={size}
    >
      <defs>
        <linearGradient id="penNibGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="nibShaft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>
      {/* Pen Shaft */}
      <path d="M20 4L28 4L27 15L21 15Z" fill="url(#nibShaft)" />
      {/* Pen Nib Body */}
      <path d="M14 17C14 17 19 22 21 26L24 42L27 26C29 22 34 17 34 17L28 15L20 15L14 17Z" fill="url(#penNibGrad)" stroke="#B45309" strokeWidth="1" />
      {/* Nib Split Line & Eyelet */}
      <circle cx="24" cy="27" r="2.5" fill="#1E293B" />
      <line x1="24" y1="29.5" x2="24" y2="42" stroke="#1E293B" strokeWidth="1.5" />
      {/* Bezier Vector Handles */}
      <circle cx="8" cy="36" r="3" fill="#3B82F6" />
      <circle cx="40" cy="36" r="3" fill="#3B82F6" />
      <line x1="11" y1="36" x2="37" y2="36" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  );
}

// 9. Data Related Solutions: Modern Data Warehouse & Analytics Pipeline
export function DataSolutionsLogo({ className = "w-6 h-6", size }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size} 
      height={size}
    >
      <defs>
        <linearGradient id="dbBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id="chartBar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Database Cylinder 1 */}
      <ellipse cx="20" cy="11" rx="14" ry="5" fill="#38BDF8" />
      <path d="M6 11V20C6 22.76 12.27 25 20 25C27.73 25 34 22.76 34 20V11" fill="url(#dbBlue)" />
      <ellipse cx="20" cy="20" rx="14" ry="5" fill="none" stroke="#7DD3FC" strokeWidth="1" />
      
      {/* Database Cylinder 2 */}
      <path d="M6 20V29C6 31.76 12.27 34 20 34C27.73 34 34 31.76 34 29V20" fill="#0284C7" />
      <ellipse cx="20" cy="29" rx="14" ry="5" fill="none" stroke="#7DD3FC" strokeWidth="1" />

      {/* Analytics Chart Bars Overlay */}
      <rect x="30" y="24" width="4.5" height="16" rx="1" fill="url(#chartBar)" stroke="#FFFFFF" strokeWidth="1" />
      <rect x="36" y="16" width="4.5" height="24" rx="1" fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
      <rect x="42" y="8" width="4.5" height="32" rx="1" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1" />
    </svg>
  );
}

// 10. Excel Based Services: Official Microsoft Excel Logo
export function ExcelServicesLogo({ className = "w-6 h-6", size }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={size} 
      height={size}
    >
      <defs>
        <linearGradient id="excelGreenBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#107C41" />
          <stop offset="100%" stopColor="#0B552C" />
        </linearGradient>
        <linearGradient id="excelGreenFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1F9A55" />
          <stop offset="100%" stopColor="#107C41" />
        </linearGradient>
      </defs>
      {/* Right Grid Sheet Background */}
      <rect x="16" y="8" width="26" height="32" rx="3" fill="url(#excelGreenBack)" />
      {/* Spreadsheet Grid Lines */}
      <path d="M23 14H36M23 20H36M23 26H36M23 32H36" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
      <line x1="28" y1="11" x2="28" y2="37" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />

      {/* Front Isometric 'X' Ribbon Book */}
      <rect x="6" y="12" width="22" height="24" rx="2.5" fill="url(#excelGreenFront)" stroke="#FFFFFF" strokeWidth="0.8" />
      {/* Official White 'X' */}
      <path 
        d="M13 18L21 30M21 18L13 30" 
        stroke="#FFFFFF" 
        strokeWidth="3.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Master Lookup Map for Slugs and Icons
export const serviceLogoMap = {
  // By Slug
  'cloud-web-hosting': CloudHostingLogo,
  'web-application-development': WebAppDevLogo,
  'mobile-app-solutions': MobileAppLogo,
  'web-designing': WebDesigningLogo,
  'web-deployment': WebDeploymentLogo,
  'web-hosting': WebHostingLogo,
  'digital-product-design': ProductDesignLogo,
  'logo-designing': LogoDesignLogo,
  'data-related-solutions': DataSolutionsLogo,
  'excel-based-services': ExcelServicesLogo,

  // By String Icon identifier fallback
  'Cloud': CloudHostingLogo,
  'Globe': WebAppDevLogo,
  'Smartphone': MobileAppLogo,
  'Palette': WebDesigningLogo,
  'Server': WebDeploymentLogo,
  'HardDrive': WebHostingLogo,
  'Layout': ProductDesignLogo,
  'Sparkles': LogoDesignLogo,
  'BarChart3': DataSolutionsLogo,
  'FileSpreadsheet': ExcelServicesLogo,
  'Table': ExcelServicesLogo
};

// Universal ServiceLogo Component
export default function ServiceLogo({ slug, icon, className = "w-6 h-6", size }) {
  const LogoComponent = serviceLogoMap[slug] || serviceLogoMap[icon] || WebAppDevLogo;
  return <LogoComponent className={className} size={size} />;
}
