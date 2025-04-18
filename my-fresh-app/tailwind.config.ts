import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      fontFamily: {
        redrose: ['"Red Rose"', "sans-serif",],
        funnel: ['"Funnel Display"', "sans-serif",],
      },
    },
  },
  plugins: [],
} satisfies Config;
