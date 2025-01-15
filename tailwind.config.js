import { default as tailwindTheme } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Noto Sans", ...tailwindTheme.fontFamily.sans],
      },
    },
    screens: {
      md: "768px",
      xl: "1440px",
    },
  },
  plugins: [],
};
