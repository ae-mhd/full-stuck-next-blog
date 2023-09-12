/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1536px',
        // '2xl': { 'max': '1536px' },
        // 'xl': { 'max': '1280px' },
        // 'xl': { 'max': '1280px' },
        // // => @media (max-width: 1279px) { ... }

        // 'lg': { 'max': '1024px' },
        // // => @media (max-width: 1023px) { ... }

        // 'md': { 'max': '768px' },
        // // => @media (max-width: 767px) { ... }

        // 'sm': { 'max': '640px' },
        // => @media (max-width: 639px) { ... }

      },
      colors: {
        'bg': "white",
        "ctextColor": "black",
        "softBg": "#f0f0f0",
        "softTextColor": "#626262",
      },
    },

  },
  plugins: [],
  darkMode: "class"
}