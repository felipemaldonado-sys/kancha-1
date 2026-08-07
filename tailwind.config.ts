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
          bg: "#12171E",
          surface: "#161C26",
          card: "#1E2530",
          border: "#2A3341",
          muted: "#8B95A8",
          green: "#55D869",
          "green-dark": "#2F9E45",
          blue: "#3B9EFF",
          "blue-dark": "#1D6FD6",
        },
      },
      boxShadow: {
        "green-glow": "0 0 0 1px #55D869, 0 0 24px rgba(85, 216, 105, 0.18)",
        "blue-glow": "0 0 0 1px #3B9EFF, 0 0 20px rgba(59, 158, 255, 0.15)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.35)", opacity: "0.7" },
        },
        "drawer-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.45s ease-out both",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "drawer-in": "drawer-in 0.28s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
