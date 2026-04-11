import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // L-palette dyalna
        'app-bg': '#F8F9FA',
        'app-card': '#FFFFFF',
        'app-dark': '#2D3436',
        'app-accent': '#6C5CE7',
        'app-gray': {
          100: '#F1F2F6',
          200: '#DFE4EA',
          500: '#A4B0BE',
        }
      },
      // Animations bach l-wajihat it-tlaw m9adin
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'modal-pop': 'fadeIn 0.2s ease-out forwards',
        'content-up': 'slideUp 0.3s ease-out forwards',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [], 
} satisfies Config;

export default config;