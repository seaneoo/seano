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
        background: '#ffffff',
        backgroundDark: '#0c0a09',
        text: '#212529',
        textDark: '#f8fafc'
      }
    }
  },
  plugins: []
};
