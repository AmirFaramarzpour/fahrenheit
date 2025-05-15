/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        customLateef: ["'Lateef'", "sans-serif"],
        customTrebuchet: ["'Trebuchet MS'", "sans-serif"], 
        customKirang: ["'Kirang Haerang'", "system-ui"], // Add this line for Kirang Haerang font
      },
    },
  },
  plugins: [],
};
