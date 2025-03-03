import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
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
      },
      fontFamily: {
        itim: ["Itim", "cursive"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase }: PluginAPI) {
      addBase({
        h1: {
          fontSize: "2.25rem",
          fontWeight: "bold",
          lineHeight: "2.5rem",
        },
        h2: {
          fontSize: "1.875rem",
          fontWeight: "600",
          lineHeight: "2.25rem",
        },
        h3: {
          fontSize: "1.5rem",
          fontWeight: "600",
          lineHeight: "2rem",
        },
        h4: {
          fontSize: "1.25rem",
          fontWeight: "500",
          lineHeight: "1.75rem",
        },
        h5: {
          fontSize: "1.125rem",
          fontWeight: "500",
          lineHeight: "1.5rem",
        },
        h6: {
          fontSize: "1rem",
          fontWeight: "500",
          lineHeight: "1.5rem",
        },
      });
    },
  ],
} satisfies Config;
