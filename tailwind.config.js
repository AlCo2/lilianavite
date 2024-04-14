/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      screens:{
        xs: '280px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        liliana: {
          primary: '#fa3b7e',
          secondary: '#8f5bbd',
          third: '#faaea6',
          background: '#f1f1f1',
        }
      },
      fontFamily: {
        Poppins:'Poppins',
        Opensans: 'Open Sans',
        Roboto: 'Roboto'
      }
    },
  },
  plugins: [],
};