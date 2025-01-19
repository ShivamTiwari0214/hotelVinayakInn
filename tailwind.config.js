/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        poppins: ['Poppins', 'serif'], // Add "serif" as fallback
        preahvihear: ['Preahvihear', 'serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
}

