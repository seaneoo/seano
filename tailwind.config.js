import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        background: colors.white,
        backgroundDark: colors.slate[950],
        text: colors.slate[700],
        textDark: colors.slate[50],
        brand: colors.blue[500]
      }
    }
  },
  plugins: []
};
