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
        "1.5xl": "21px",
        "2xl": "24px", // 2x Large
        "3xl": "32px", // 3x Large
        "4xl": "48px", // 4x Large
        "5xl": "64px", // 5x Large
        "6xl": "128px", // 6x Large
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
        "card-background-primary": "#F2F2F2",
      },
      screens: {
        sm: "576px", // Small screens and up
        md: "768px", // Medium screens and up
        lg: "992px", // Large screens and up
        xl: "1024px", // Extra large screens and up
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
        "12": "36px",
        "13": "39px",
        "14": "41px",
        "15": "45px",
        "16.2/3": "50px",
        "17": "51px",
        "17.1/3": "52px",
        "18": "54px",
        "20": "60px",
        "21": "63px",
        "22": "66px",
        "23": "69px",
        "23.1/3": "70px",
        "24": "72px",
        "25": "75px",
        "26": "78px",
        "30": "90px",
        "32": "96px",
        "33": "99px",
        "33.1/3": "100px",
        "35": "105px",
        "36": "108px",
        "38": "114px",
        "38.1/3": "115px",
        "40": "120px",
        "41.2/3": "125px",
        "43.1/3": "130px",
        "46": "138px",
        "49": "147px",
        "50": "150px",
        "53": "162px",
        "pc-container": "220px",
      },
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      "noto-sans": ["var(--font-noto-sans)"],
      "noto-sans-jp": ["var(--font-noto-sans-jp)"],
    },
  },
  plugins: [],
};
export default config;
