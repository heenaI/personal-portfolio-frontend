/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8E9A1',
        coral: '#F76C6C',
        lightblueBackground: '#A8D0E6',
        denim: '#374785',
        indigo: '#24305E',
        textPrimary: '#24305E',   // For headings
        textSecondary: '#374785', // For body text
        textLight: '#ffffff',     // For dark backgrounds
      },
    },
  },
  plugins: [],
}

