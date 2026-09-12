/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        agnexa: {
          navy: {
            950: '#030B1A',
            900: '#050E23',
            850: '#071638',
            800: '#071A3D',
            700: '#0B2A5B',
            600: '#103978',
          },
          blue: {
            500: '#1261FF',
            400: '#18A8FF',
            300: '#52C1FF',
            glow: 'rgba(18, 97, 255, 0.4)',
          },
          orange: {
            500: '#FF6A00',
            400: '#FF7A18',
            300: '#FFA052',
            glow: 'rgba(255, 106, 0, 0.35)',
          },
          slate: {
            800: '#1E293B',
            900: '#0F172A',
            950: '#080E1A',
          }
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'glow-spin': 'glow-spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        'glow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      boxShadow: {
        'neon-blue': '0 0 25px rgba(18, 97, 255, 0.45)',
        'neon-orange': '0 0 25px rgba(255, 106, 0, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
