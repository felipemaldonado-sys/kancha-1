import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        kancha: {
          bg: "#0c0e14",
          surface: "#141820",
          card: "#1a1f2b",
          border: "#252b3a",
          muted: "#8b95a8",
          green: "#a3e635",
          "green-dark": "#65a30d",
          blue: "#38bdf8",
          "blue-dark": "#0284c7",
        },
      },
      boxShadow: {
        "green-glow": "0 0 0 1px #a3e635, 0 0 20px rgba(163, 230, 53, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
