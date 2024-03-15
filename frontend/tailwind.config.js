module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue: { A200: "#3a7dff" },
        blue_gray: { 900: "#071a45", "900_b2": "#071a45b2", "900_7f": "#071a457f" },
        gray: { 400: "#c9c6c2", 500: "#979592" },
        teal: { 50: "#d6e9f0", 400: "#2c8fb5" },
      },
      boxShadow: {},
      fontFamily: { lato: "Lato", inter: "Inter" },
      backgroundImage: { gradient: "linear-gradient(90deg, #0000000c,#000000,#0000000c)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
