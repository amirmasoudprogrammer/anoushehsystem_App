/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/taos/**/*.{js,ts,jsx,tsx}", // اضافه کردن TAOS
  ],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text-color)',
      },
    },
  },
  plugins: [],
}