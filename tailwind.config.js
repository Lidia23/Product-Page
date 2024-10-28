/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#1e3a8a',
        customPurple: '#7c3aed',
        customTeal: '#0d9488',
        customGray: '#e5e7eb',
      },
      animation: {
        typing: 'typing 3s steps(20, end) forwards, blink 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' }, // Change this to match your text color
        },
      },
    },
  },
  plugins: [],
};
