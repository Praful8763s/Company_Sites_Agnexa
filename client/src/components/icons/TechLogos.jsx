import React from 'react';

/**
 * Authentic, pixel-perfect brand logos for technologies
 */
export const TechLogo = ({ name, className = "w-7 h-7" }) => {
  const normalized = (name || '').toLowerCase().trim();

  // 1. React.js
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }

  // 2. Next.js
  if (normalized.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="86" fill="#000000" stroke="#FFFFFF" strokeWidth="6"/>
        <path d="M149.508 157.438L69.156 54H54V126H67.248V71.496L140.232 165.216C143.496 162.84 146.6 160.236 149.508 157.438Z" fill="#FFFFFF"/>
        <rect x="115" y="54" width="13.5" height="72" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 3. Vue.js
  if (normalized.includes('vue')) {
    return (
      <svg className={className} viewBox="0 0 261.76 226.69">
        <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41B883"/>
        <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495E"/>
      </svg>
    );
  }

  // 4. Angular
  if (normalized.includes('angular')) {
    return (
      <svg className={className} viewBox="0 0 250 250">
        <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031"/>
        <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 203.9,186.3 218.1,63.2" fill="#C3002F"/>
        <path d="M125,52.1L66.8,182.6h21.7l11.7-29.2h49.4l11.7,29.2h21.7L125,52.1z M142,135.4H108l17-42.4L142,135.4z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 5. Django
  if (normalized.includes('django')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#092E20"/>
        <path d="M11.146 3.6h2.247v11.458c-.534.073-1.043.11-1.528.11-2.427 0-3.69-.971-3.69-2.839 0-1.748 1.153-2.912 2.971-2.912.049 0 .11 0 .17.012V6.69c-.11-.012-.243-.024-.364-.024-3.058 0-5.18 1.954-5.18 5.097 0 3.252 2.05 5.182 5.398 5.182.874 0 1.626-.085 2.22-.243v2.075h2.245V3.6h-4.489v-.001zm7.158 5.898c.752 0 1.347-.595 1.347-1.347 0-.752-.595-1.347-1.347-1.347-.752 0-1.347.595-1.347 1.347 0 .752.595 1.347 1.347 1.347zm-1.128 7.378h2.247v-6.72h-2.247v6.72z" fill="#44B78B"/>
      </svg>
    );
  }

  // 6. Node.js
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 256 289">
        <path d="M128 0L0 73.9v141.2L128 289l128-73.9V73.9L128 0zm102.5 201.2l-102.5 59.2-102.5-59.2V83.8L128 24.6l102.5 59.2v117.4z" fill="#539E43"/>
        <path d="M128 28.5L25.5 87.7v112.6L128 259.5l102.5-59.2V87.7L128 28.5z" fill="#333333"/>
        <path d="M157.2 133.4c-1.3-.8-2.8-1.5-4.4-2.1-1.6-.6-3.3-1.1-5.1-1.5-1.8-.4-3.6-.6-5.4-.6-2.6 0-5 .4-7.1 1.2-2.1.8-3.9 2-5.3 3.5-1.4 1.5-2.5 3.3-3.2 5.5-.7 2.1-1.1 4.5-1.1 7.2 0 2.5.3 4.8 1 6.8.7 2 1.6 3.8 2.9 5.2 1.2 1.4 2.8 2.5 4.6 3.3 1.8.8 3.8 1.2 6.1 1.2 1.6 0 3.2-.2 4.7-.6 1.5-.4 3-.9 4.3-1.6v-14.7h-11.8v-8.8h21.4v28.8c-2.4 1.3-5.2 2.3-8.3 3.1-3.1.8-6.5 1.2-10.2 1.2-4.1 0-7.8-.7-11.1-2.2-3.3-1.5-6.1-3.6-8.4-6.2-2.3-2.7-4-5.9-5.2-9.6-1.2-3.7-1.8-7.9-1.8-12.5 0-4.5.7-8.6 2.1-12.2 1.4-3.7 3.4-6.8 5.9-9.3 2.5-2.5 5.5-4.4 9-5.7 3.5-1.3 7.3-1.9 11.4-1.9 2.5 0 5 .3 7.5.8 2.5.5 4.8 1.3 7.1 2.3 2.2 1 4.3 2.3 6.1 3.8l-7.3 9.4z" fill="#83CD29"/>
      </svg>
    );
  }

  // 7. Express.js
  if (normalized.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#18181B" stroke="#3F3F46" strokeWidth="1"/>
        <text x="12" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif">ex</text>
      </svg>
    );
  }

  // 8. Python
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 110 110" fill="none">
        <path d="M54.5 5C29.6 5 31.2 15.8 31.2 15.8L31.3 27H55.4V30.4H20.6C8.8 30.4 5 38.3 5 50.8C5 63.3 12.6 63.8 12.6 63.8H20V53.5C20 41.3 29.8 41.3 29.8 41.3H54.4C64.6 41.3 65.5 31.7 65.5 31.7V15.8C65.5 15.8 67 5 54.5 5ZM42.5 13.5C45.3 13.5 47.6 15.8 47.6 18.6C47.6 21.4 45.3 23.7 42.5 23.7C39.7 23.7 37.4 21.4 37.4 18.6C37.4 15.8 39.7 13.5 42.5 13.5Z" fill="#387EB8"/>
        <path d="M55.5 105C80.4 105 78.8 94.2 78.8 94.2L78.7 83H54.6V79.6H89.4C101.2 79.6 105 71.7 105 59.2C105 46.7 97.4 46.2 97.4 46.2H90V56.5C90 68.7 80.2 68.7 80.2 68.7H55.6C45.4 68.7 44.5 78.3 44.5 78.3V94.2C44.5 94.2 43 105 55.5 105ZM67.5 96.5C64.7 96.5 62.4 94.2 62.4 91.4C62.4 88.6 64.7 86.3 67.5 86.3C70.3 86.3 72.6 88.6 72.6 91.4C72.6 94.2 70.3 96.5 67.5 96.5Z" fill="#FFE052"/>
      </svg>
    );
  }

  // 9. MongoDB Atlas
  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 1.5C11.5 1.8 7 6.5 7 13.5C7 18 10 21.5 11.5 22.5C11.7 22.6 11.9 22.5 12 22.4C12.1 22.5 12.3 22.6 12.5 22.5C14 21.5 17 18 17 13.5C17 6.5 12.5 1.8 12 1.5Z" fill="#13AA52"/>
        <path d="M12 2C12 2 12.2 4 12.2 6C12.2 12.5 14.5 15.5 12 22C12 22 11.8 20 11.8 18C11.8 11.5 9.5 8.5 12 2Z" fill="#FFFFFF" opacity="0.3"/>
      </svg>
    );
  }

  // 10. PostgreSQL
  if (normalized.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" fill="#336791"/>
        <path d="M24 10C17.4 10 12 15.4 12 22C12 27.5 15.7 32.1 20.8 33.5V26.5H18.2V23.5H20.8V21C20.8 18.4 22.4 17 24.7 17C25.8 17 27 17.2 27 17.2V19.7H25.6C24.3 19.7 23.9 20.5 23.9 21.3V23.5H26.7L26.3 26.5H23.9V33.8C29.3 33 33.5 28.5 33.5 23C33.5 15.8 28.7 10 24 10Z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 11. MySQL
  if (normalized.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="10" fill="#00758F"/>
        <path d="M12 30C15 25 18 20 22 18C26 16 31 17 34 21C35 22 36 24 36 26C35 25 33 24 31 24C27 24 24 27 21 30C19 32 15 33 12 30Z" fill="#F29111"/>
        <path d="M22 24C24 20 28 18 32 20C30 16 25 14 20 16C15 18 13 23 14 28C16 27 19 25 22 24Z" fill="#FFFFFF"/>
      </svg>
    );
  }

  // 12. Redis
  if (normalized.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 6.5V17.5L12 22L21 17.5V6.5L12 2Z" fill="#DC382D"/>
        <path d="M12 2L21 6.5V17.5L12 22V2Z" fill="#A81D14"/>
        <path d="M12 6.5L6 9.5L12 12.5L18 9.5L12 6.5Z" fill="#FFFFFF" opacity="0.3"/>
      </svg>
    );
  }

  // 13. Amazon Web Services (AWS)
  if (normalized.includes('amazon') || normalized.includes('aws')) {
    return (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="12" fill="#232F3E"/>
        <path d="M20 26L23 34H26L29 26H26.5L24.5 32L22.5 26H20Z" fill="#FFFFFF"/>
        <path d="M30 26L32.5 34H35L37.5 26H35.5L34 32L32.5 26H30Z" fill="#FFFFFF"/>
        <path d="M38 32.5C39 33.5 41 34 43 33C44 32.5 44.5 31.5 44 30.5C43.5 29.5 41.5 29 40 28.5C38 28 36.5 26.5 37.5 24C38.5 22 41 21.5 43.5 22C44.5 22.2 45.5 22.8 46 23.5L44.5 25C44 24.5 43 24 42 24C41 24 40 24.5 40 25.5C40 26.5 41.5 27 43 27.5C45.5 28.5 47 30 46 32.5C45 35 42 35.5 39.5 35C38 34.5 37 33.5 36.5 32.5L38 32.5Z" fill="#FFFFFF"/>
        <path d="M16 42C24 48 38 48 48 42C49 41.5 50 42.5 49 43.5C44 48.5 31 52 15 44.5C14 44 14.5 42.5 16 42Z" fill="#FF9900"/>
        <path d="M47 39.5L50 43.5L45 44.5L47 39.5Z" fill="#FF9900"/>
      </svg>
    );
  }

  // 14. Azure
  if (normalized.includes('azure')) {
    return (
      <svg className={className} viewBox="0 0 96 96" fill="none">
        <path d="M54.5 8L20 73.5H41L54.5 8Z" fill="#0078D4"/>
        <path d="M54.5 8L42 50.5L62 73.5H86L54.5 8Z" fill="#50E6FF"/>
        <path d="M20 73.5L34 50.5H58L42 73.5H20Z" fill="#005BA1"/>
      </svg>
    );
  }

  // 15. Google Cloud
  if (normalized.includes('google') || normalized.includes('gcp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z" fill="#4285F4"/>
        <path d="M12 4C13.2 4 14.3 4.3 15.3 4.9L12.5 8.5L8.5 9.5C9.3 6.3 10.5 4 12 4Z" fill="#EA4335"/>
        <path d="M5.35 8.04L8.5 9.5L7.5 14H2.5C2.2 12.2 3.4 9.4 5.35 8.04Z" fill="#FBBC04"/>
        <path d="M19 20H6L7.5 14H15.5L18.5 17C18.7 18 19 19.5 19 20Z" fill="#34A853"/>
      </svg>
    );
  }

  // 16. Digital Ocean
  if (normalized.includes('ocean') || normalized.includes('digital ocean')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C14.76 22 17.26 20.88 19.07 19.07L16.24 16.24C15.15 17.33 13.65 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12H22C22 6.48 17.52 2 12 2Z" fill="#0080FF"/>
        <rect x="2" y="14" width="4" height="4" fill="#0080FF"/>
        <rect x="6" y="18" width="4" height="4" fill="#0080FF"/>
        <rect x="10" y="18" width="3" height="3" fill="#0080FF"/>
      </svg>
    );
  }

  // 17. Docker
  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M22.5 10.5c-.3-.2-1.5-.3-2.3.2-.2-.8-.7-1.5-1.5-1.9-.3-.2-.7-.3-1.1-.3-.2-.5-.6-1-1.1-1.3-.6-.4-1.4-.5-2.2-.3l-.4.1V4.5c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5v2.5H8.5c-.3 0-.5.2-.5.5v2H5.5c-.3 0-.5.2-.5.5v2H2.5c-.3 0-.5.2-.5.5v2c0 3.9 3.1 7 7 7h5c5.5 0 9.8-4.2 9.9-9.7 0-.3-.1-.6-.4-.8z" fill="#2496ED"/>
        <rect x="7" y="9" width="2" height="2" fill="#FFFFFF"/>
        <rect x="10" y="9" width="2" height="2" fill="#FFFFFF"/>
        <rect x="10" y="6" width="2" height="2" fill="#FFFFFF"/>
        <rect x="13" y="9" width="2" height="2" fill="#FFFFFF"/>
        <rect x="13" y="6" width="2" height="2" fill="#FFFFFF"/>
        <rect x="4" y="12" width="2" height="2" fill="#FFFFFF"/>
        <rect x="7" y="12" width="2" height="2" fill="#FFFFFF"/>
        <rect x="10" y="12" width="2" height="2" fill="#FFFFFF"/>
        <rect x="13" y="12" width="2" height="2" fill="#FFFFFF"/>
      </svg>
    );
  }

  // Fallback generic code logo
  return (
    <div className={`${className} rounded-lg bg-agnexa-navy-800 border border-white/10 flex items-center justify-center text-agnexa-blue-400 font-bold text-xs`}>
      {name ? name.slice(0, 2).toUpperCase() : 'IT'}
    </div>
  );
};
