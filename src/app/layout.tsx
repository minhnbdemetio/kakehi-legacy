import "./app.scss";
import "./globals.css";
import { notoSans, notoSansJP } from "./constants/fonts";
import clsx from "clsx";
import type { Metadata } from "next";
import { ApolloContext } from "@/app/contexts/ApolloContext";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const metadata: Metadata = {
  title: "Kakehi",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloContext>
      <html lang="en">
        <body
          style={{ width: "100%" }}
          className={clsx(notoSansJP.variable, notoSans.variable)}
        >
          {children}
        </body>
      </html>
    </ApolloContext>
  );
}
