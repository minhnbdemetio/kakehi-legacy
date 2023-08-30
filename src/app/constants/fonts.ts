import { Noto_Sans, Noto_Sans_JP } from "next/font/google";

export const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});
