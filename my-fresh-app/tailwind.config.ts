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
      backgroundImage: {
        'indigo-fade':
        'linear-gradient(to bottom, ' +
          'rgba(75,0,130,1) 0%, ' +
          'rgba(75,0,130,0.75) 15%, ' +
          'rgba(75,0,130,0.25) 30%, ' +
          'rgba(75,0,130,0.5) 40%, ' +
          '#18002A 100%)',
    }
  },
  plugins: [],
} satisfies Config;
