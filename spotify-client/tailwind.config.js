/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "linear-gradient(rgba(255, 255, 255, 0.1), rgb(0, 0, 0))",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif;",
      },
    },
  },
  plugins: [],
};
