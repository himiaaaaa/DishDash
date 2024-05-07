/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}",  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      gray: '#eee',
      primary: "#fb923c", 
      secondary: "#fee8d6",
      darkyellow: '#FF6500',
      lightyellow: '#FFC100'
    },
    extend: {},
  },
  plugins: [],
}

