// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Montserrat', 'Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          400: '#facc15',
          500: '#eab308', // brand amber
          600: '#ca8a04',
        },
        dark: '#0f172a', // slate-950 fallback
      },
      boxShadow: {
        glow: '0 0 25px rgba(250, 204, 21, 0.2)',
      },
      transitionProperty: {
        theme: 'background-color, color, border-color, fill, stroke',
      },
    },
  },
  plugins: [],
};
