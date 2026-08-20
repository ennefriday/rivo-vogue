import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: "#FDFBF7",      // Dominant canvas/text
          charcoal: "#0A0908",   // Deep rich black background matching brand image
          pink: "#E58CA4",       // Radiant couture rose pink matching brand image
          gold: "#DFB15B",       // Luminous royal gold matching brand image
        }
      },
      spacing: {
        '8pt': '8px',
        '16pt': '16px',
        '24pt': '24px',
        '32pt': '32px',
        '48pt': '48px',
        '64pt': '64px',
        '96pt': '96px',
        '128pt': '128px',
        '160pt': '160px',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-public-sans)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;