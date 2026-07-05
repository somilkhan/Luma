import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "primary-surface": "#0A0A0A",
        "secondary-surface": "#111111",
        "glass-surface": "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "primary-text": "#FFFFFF",
        "secondary-text": "#B3B3B3",
        "muted-text": "#7A7A7A",
        divider: "rgba(255, 255, 255, 0.06)",
        "focus-ring": "rgba(255, 255, 255, 0.35)",
        success: "#22C55E",
        warning: "#FACC15",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
};

export default config;
