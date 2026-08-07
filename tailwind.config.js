/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // TechTron brand palette — extracted from theme.png:
        // deep purple-black backgrounds, cyan-teal + magenta accents
        primary: {
          50: '#e6f4fa',
          100: '#c9e8f4',
          200: '#93d1e9',
          300: '#5dbade',
          400: '#2799c3',
          500: '#04567b',
          600: '#034464',
          700: '#04314c',
          800: '#051d2f',
          900: '#030f1f',
          950: '#02070f',
        },
        accent: {
          300: '#d781b3',
          400: '#a75184',
          500: '#7e1f59',
          600: '#581044',
          700: '#480d39',
        },
        dark: {
          950: '#06040d',
          900: '#090d1c',
          800: '#131023',
          700: '#260a24',
          600: '#2c1931',
          500: '#350a2e',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Sora"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(2, 4, 20, 0.45)',
        glow: '0 0 40px rgba(4, 86, 123, 0.4)',
        'glow-accent': '0 0 40px rgba(126, 31, 89, 0.45)',
        card: '0 20px 60px rgba(2, 4, 20, 0.55)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        blob: 'blob 12s ease-in-out infinite',
        'float-y': 'floatY 5s ease-in-out infinite',
        gradient: 'gradientShift 6s ease infinite',
        'pulse-ring': 'pulseRing 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(60px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 30px) scale(0.95)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '80%, 100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};