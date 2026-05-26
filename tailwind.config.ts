import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow:      "#E8B84B",
        "yellow-dk": "#C99A2E",
        "yellow-dim":"rgba(232,184,75,0.12)",
        ink:         "#0A0A08",
        ink2:        "#4A4844",
        ink3:        "#8A8880",
        ink4:        "#BBBBAF",
        surface:     "#FAFAF7",
        card:        "#FFFFFF",
        card2:       "#F5F4EF",
        border:      "#E8E6DF",
        "border-dk": "#D0CEC6",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
