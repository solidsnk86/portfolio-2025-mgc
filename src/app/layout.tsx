import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import WrapperProvider from "@/provider/Wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domainURL = "https://gabriel-calcagni-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(domainURL),
  title: {
    default: "Gabriel Calcagni | Desarrollador Front End & Full Stack",
    template: "%s | Gabriel Calcagni",
  },
  description:
    "Técnico Universitario en Programación especializado en desarrollo Front End, diseño UI/UX y desarrollo de software. Portfolio de proyectos y blog sobre desarrollo web.",
  keywords: [
    "desarrollador front end",
    "desarrollo web",
    "desarrollo e-commerce",
    "react",
    "next.js",
    "typescript",
    "UI/UX",
    "portfolio",
    "programador",
    "gabriel calcagni",
    "solidsnk86",
  ],
  authors: [{ name: "Gabriel Calcagni", url: domainURL }],
  creator: "Gabriel Calcagni",
  publisher: "Gabriel Calcagni",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: domainURL,
    title: "Gabriel Calcagni | Desarrollador Front End & Full Stack",
    description:
      "Técnico Universitario en Programación especializado en desarrollo Front End, diseño UI/UX y desarrollo de software.",
    siteName: "Gabriel Calcagni Portfolio",
    images: [
      {
        url: "/assets/open-graph-mgc.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Calcagni - Desarrollador Front End",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Calcagni | Desarrollador Front End",
    description:
      "Técnico Universitario en Programación | Desarrollo Front End, Diseño UI/UX, Desarrollo de software",
    images: ["/assets/open-graph-mgc.png"],
    creator: "@CalcagniGabriel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: domainURL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="canonical" href={domainURL} />
      </head>
      <WrapperProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        >
          <Image
            src="/header-gradient.svg"
            width={600}
            height={80}
            className="absolute top-0 left-0 w-full -z-10"
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
      </WrapperProvider>
    </html>
  );
}
