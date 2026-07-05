import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
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
      borderRadius: {
        small: "0.25rem",
        medium: "0.5rem",
        large: "0.75rem",
        "extra-large": "1rem",
        pill: "9999px",
      },
      spacing: {
        xxs: "0.125rem",
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        xxl: "3rem",
        xxxl: "4rem",
        "4xl": "6rem",
        "5xl": "8rem",
      },
    },
  },
  plugins: [],
};

export default config;
