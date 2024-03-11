import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontfamily:{
        logo:["Oleo Script", "system-ui"],
        primary:["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#3582c4"
      }
    },
  },
  plugins: [],
};
export default config;
