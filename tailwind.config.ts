import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
    keyframes: {
      slideInUp: {
        "0%": { transform: "TranslateY(-10%)", opacity: "0" },
        "100%": { transform: "TranslateY(0%)", opacity: "1" },
      },
    },

    animation: {
      slideInUp: "slideInUp 1s ease-out forwards",
    },
  },
  plugins: [],
};
export default config;
