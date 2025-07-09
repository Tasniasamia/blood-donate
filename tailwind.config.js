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
          'blue-vertical-gradient': 'linear-gradient(180deg, #1ECFFE 0%, #1287FF 100%)',
          'orange-vertical': 'linear-gradient(180deg, #EBB011 0%, #ED861D 99.48%)',
          'green-vertical': 'linear-gradient(180deg, #00AF90 0%, #00715D 97.92%)',



        },
        colors: {
          text_secondary: "#525252",
          text_primary: "#010038",

        }
      },
    },
    plugins: [],
  }
  