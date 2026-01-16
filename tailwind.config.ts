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
          'primary': '#0A2540',
          'primary-dark': '#061A2A',
          'secondary': '#3B82F6',
          'accent': '#22D3EE',
          'accent-hover': '#06B6D4',
          'dark': '#1F2937',
          'dark-light': '#374151',
          'gray': '#F5F7FA',
          'gray-dark': '#6B7280',
          'text': '#1F2937',
          'text-light': '#6B7280',
        },
      },
    },
  },
  plugins: [],
};
export default config;

