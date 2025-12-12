/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9', // Sky blue-ish, friendly
          600: '#0284c7',
          700: '#0369a1', // Readable deep blue
        },
        accent: {
          50: '#fffbeb',
          500: '#f59e0b', // Warm amber
        },
        surface: '#f8fafc', // Slate 50
        text: {
          main: '#334155', // Slate 700 - softer than black
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', '"Meiryo"', 'sans-serif'], // Standard easy to read JP fonts
      }
    },
  },
  plugins: [],
}
