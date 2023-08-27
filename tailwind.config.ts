import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontSize: {
        xs: "8px", // Extra Small
        sm: "10px", // Small
        base: "12px", // Base (usually 16px)
        lg: "16px", // Large
        xl: "18px", // Extra Large
        "2xl": "24px", // 2x Large
        "3xl": "32px", // 3x Large
        "4xl": "64px", // 4x Large
        "5xl": "3rem", // 5x Large
        "6xl": "4rem", // 6x Large
      },

      textColor: {
        primary: "#333333", // Primary text color
        secondary: "#fff", // Secondary text color
        danger: "#e53e3e", // Danger text color
        gray: "#718096", // Gray text color
        custom: "#ff9900", // Custom text color
      },

      colors: {
        "hover-primary": "#892140",
      },
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
export default config;
