import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tea: {
          sun: "#E05A47",     // 해온형 (SUN)
          forest: "#2F6B55",  // 숲온형 (FOREST)
          wind: "#3B82F6",    // 바람형 (WIND)
          warm: "#D97706",    // 온담형 (WARM)
          cream: "#FAF8F5",
          sand: "#F4EFE6",
          dark: "#23201D",
          sage: "#8FA382",
          gold: "#C69C6D",
          rose: "#D97D88"
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
