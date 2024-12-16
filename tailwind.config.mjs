/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        theme: {
          red: '#FF0000',
          green: '#00FF00',
          white: '#FFFFFF',
          blue: '#0000FF',
          yellow: '#FFFF00',
          black: '#000000',
        },
      },
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.2)', // حالت شیشه‌ای
      },
      backdropBlur: {
        sm: '4px', // افکت بلور برای حالت شیشه‌ای
      },
    },
  },
  plugins: [],
};
