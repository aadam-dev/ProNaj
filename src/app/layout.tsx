import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Header, Footer, MobileHub } from "@/components/layout";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProNaj International | Building the Infrastructure of the Future",
  description:
    "ProNaj International - A global conglomerate spanning Digital Services, Modular Living Solutions, and Agricultural Trade. Delaware, USA headquarters with operations in Ghana.",
  keywords: [
    "ProNaj",
    "Digital Services",
    "Container Housing",
    "Modular Furniture",
    "Cocopeat Export",
    "Greenhouse Farming",
    "Delaware Corporation",
    "Ghana Operations",
  ],
  authors: [{ name: "ProNaj International" }],
  openGraph: {
    title: "ProNaj International | Building the Infrastructure of the Future",
    description:
      "A global conglomerate spanning Digital Services, Modular Living Solutions, and Agricultural Trade.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileHub />
      </body>
    </html>
  );
}
