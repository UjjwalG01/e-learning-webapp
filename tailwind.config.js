/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./context/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        nav: "1.2rem", // Navigation Items
        logo: "1.5rem", // Logo
        button: "1.1rem", // Extra-large
      },
      colors: {
        primary: "#008080",
        heading: "#6A5ACD",
        highlight: "#FFFFCC",
        section: "#CCCCCC",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["ui-serif", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
