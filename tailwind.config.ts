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
        'header': {
          'primary': '#0A84FF',
          'primary-dark': '#0B1739',
          'accent': '#00D8A4',
          'accent-hover': '#00C494',
          'dark': '#000000',
          'dark-light': '#0B1739',
          'gray': '#F5F7FA',
          'gray-dark': '#6b7280',
          'text': '#1E1E1E',
          'text-light': '#64748b',
        },
      },
    },
  },
  plugins: [],
};
export default config;

