import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../scss/main.scss";
import LanguageWrapper from "@/wrappers/LanguageWrapper";
import SessionWrapper from "@/wrappers/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <LanguageWrapper>
          <body className={inter.className}>
            <div className="body-wrapper theme-dark">{children}</div>
          </body>
        </LanguageWrapper>
      </html>
    </SessionWrapper>
  );
}
