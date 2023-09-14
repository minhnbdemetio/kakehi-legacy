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
        about:
          "linear-gradient(180deg, #FFF 10%, rgba(255, 255, 255, 0.25) 150%), url('/steel-self-background.jpg');",
        "list-feature":
          "linear-gradient(180deg, rgba(242, 242, 242, 0.00) 0%, #F2F2F2 74.13%);",
      },
      backgroundSize: {
        "1000px": "1000px",
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
        "2.5xl": "27px",
        "3xl": "32px", // 3x Large
        "3.5xl": "40px",
        "4xl": "48px", // 4x Large
        "5xl": "64px", // 5x Large
        "6xl": "128px", // 6x Large
      },
      lineHeight: {
        md: "32px",
        lg: "36px",
        sectionTitle: "40px",
      },
      textColor: {
        primary: "#333333", // Primary text color
        secondary: "#fff", // Secondary text color
        danger: "#e53e3e", // Danger text color
        gray: "#718096", // Gray text color
        custom: "#ff9900", // Custom text color
        section: "rgba(137, 33, 64, 0.10)",
      },
      colors: {
        "hover-primary": "#892140",
        "card-background-primary": "#F2F2F2",
        "hover-nav": "#C39AA6",
        "color-custom": "rgba(137, 33, 64, 0.60)",
        "pink-custom": "#BE95A1",
        "pink-custom-2": "#C89EAB",
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
        "3.1/3": "10px",
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
        "21.2/3": "65px",
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
        "39.1/3": "118px",
        "40": "120px",
        "41.2/3": "125px",
        "43.1/3": "130px",
        "46": "138px",
        "46.2/3": "140px",
        "49": "147px",
        "50": "150px",
        "53": "162px",
        "66.2/3": "200px",
        "pc-container": "223px",
      },
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      "noto-sans": ["var(--font-noto-sans)"],
      "noto-sans-jp": ["var(--font-noto-sans-jp)"],
    },
    lineHeight: {
      lg: "36px",
      xl: "32px",
      sm: "27px",
    },
  },
  plugins: [],
};
export default config;
