import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import ThemeWrapper from "@/provider/ThemeWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "solidSnk86 ✦ desarrollador front end",
  description:
    "Técnico Universitario en Programación | Desarrollo Front End, Diseño UI/UX, Desarrollo de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeWrapper>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        >
          <Image
            src="/header-gradient.svg"
            width={600}
            height={80}
            className="absolute top-0 left-0 w-full"
            alt="Gradient BG"
            priority
          />
          {children}
          <Image
            src="/footer-gradient.svg"
            width={600}
            height={80}
            className="absolute bottom-0 left-0 w-full -z-10"
            alt="Gradient BG"
            priority
          />
        </body>
      </ThemeWrapper>
    </html>
  );
}
