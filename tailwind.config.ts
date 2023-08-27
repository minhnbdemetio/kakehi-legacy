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
        md: "14px",
        lg: "16px", // Large
        xl: "18px", // Extra Large
        "2xl": "24px", // 2x Large
        "3xl": "32px", // 3x Large
        "4xl": "48px", // 4x Large
        "5xl": "64px", // 5x Large
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
      screens: {
        sm: "576px", // Small screens and up
        md: "768px", // Medium screens and up
        lg: "992px", // Large screens and up
        xl: "1280px", // Extra large screens and up
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      spacing: {
        "1": "3px",
        "2": "6px",
        "3": "9px",
        "4": "12px",
        "5": "15px",
        "6": "18px",
        "7": "21px",
        "8": "24px",
        "9": "27px",
        "10": "30px",
        "14": "41px",
        "15": "45px",
        "16.2/3": "50px",
        "20": "60px",
        "23": "69px",
        "24": "72px",
        "25": "75px",
        "30": "90px",
        "50": "150px",
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
