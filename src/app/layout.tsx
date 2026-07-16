import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Header, Footer, MobileHub } from "@/components/layout";
import { ScrollProgress } from "@/components/shared/scroll-progress";
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
  title: {
    default: "Pronaj International | Building the Infrastructure of the Future",
    template: "%s | Pronaj International",
  },
  description:
    "Pronaj International - A global conglomerate spanning Digital Services, Modular Living Solutions, and Agricultural Trade. Delaware, USA headquarters with operations in Ghana.",
  metadataBase: new URL("https://pronaj.com"),
  keywords: [
    "Pronaj",
    "Digital Services",
    "Container Housing",
    "Modular Furniture",
    "Cocopeat Export",
    "Greenhouse Farming",
    "Delaware Corporation",
    "Ghana Operations",
  ],
  authors: [{ name: "Pronaj International" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pronaj International | Building the Infrastructure of the Future",
    description:
      "A global conglomerate spanning Digital Services, Modular Living Solutions, and Agricultural Trade.",
    type: "website",
    locale: "en_US",
    siteName: "Pronaj International",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pronaj International",
    description:
      "A global conglomerate spanning Digital Services, Modular Living Solutions, and Agricultural Trade.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ScrollProgress />
          <Header />
          <main className="min-h-screen pb-20 lg:pb-0">{children}</main>
          <Footer />
          <MobileHub />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
