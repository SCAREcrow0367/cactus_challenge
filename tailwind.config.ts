import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightpurple: "#883AE1",
        lightpink: "#E6D6FC",
        offgray: "#E5EAF0",
        eggshell: "#FAFAF9",
        white: "#FFFFFF",
        black: "#20293A",
        darkgray: "#6C727F",
      },
      boxShadow:{
        light: "0px 30px 100px 0px rgba(17, 23, 41, 0.05);"
      },
      fontSize: {
        sm: "10px",
        md: "12px",
        lg: "14px",
        xl: "18px",
      },
      width: {
        card: "336px",
      },
      backgroundColor:{
        lightpurple: "#883AE1",
        lightpink: "#E6D6FC",
        offgray: "#E5EAF0",
        eggshell: "#FAFAF9",
        white: "#FFFFFF",
        black: "#20293A",
        darkgray: "#6C727F",
      },
      textColor: {
        lightpurple: "#883AE1",
        lightpink: "#E6D6FC",
        offgray: "#E5EAF0",
        eggshell: "#FAFAF9",
        white: "#FFFFFF",
        black: "#20293A",
        darkgray: "#6C727F",
      }
    },
  },
  plugins: [],
};
export default config;
