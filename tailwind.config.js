import { colors, heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: '#2CACEA',
          },
        },
        dark: {
          colors: {
            primary: '#0479C9',
          },
        },
      },
    }),
  ],
};

module.exports = config;
