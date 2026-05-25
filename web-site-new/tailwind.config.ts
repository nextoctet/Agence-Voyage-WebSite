import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-libre-baskerville)", "serif"],
        serif: ["var(--font-libre-baskerville)", "serif"],
        playfair: ["var(--font-libre-baskerville)", "serif"],
        montserrat: ["var(--font-libre-baskerville)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;


