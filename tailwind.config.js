/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",   // Next.js app directory
      "./pages/**/*.{js,ts,jsx,tsx}", // traditional pages dir
      "./components/**/*.{js,ts,jsx,tsx}", // any components
    ],
    theme: {
      extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(180deg, #EBB011 0%, #ED861D 99.48%)',
        },
        colors: {
          text_secondary: "#525252",
          text_primary: "#010038",

        }
      },
    },
    plugins: [],
  }
  