import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import StructuredData from "@/components/StructuredData";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunda Bali Tour - Private Driver & Custom Tour Experience in Bali",
  description:
    "Experience the warmth of Sunda hospitality combined with the natural beauty of Bali. Private tours, custom itineraries, and unforgettable adventures await.",
  keywords:
    "Bali tour, private driver Bali, Bali travel, Sunda tour, custom Bali tour, Bali tourism, private tour Bali",
  authors: [{ name: "Sunda Bali Tour" }],
  openGraph: {
    title: "Sunda Bali Tour - Private Driver & Custom Tour Experience",
    description:
      "Experience the warmth of Sunda hospitality combined with the natural beauty of Bali.",
    type: "website",
    locale: "en_US",
    siteName: "Sunda Bali Tour",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunda Bali Tour",
    description: "Private Driver & Custom Tour Experience in Bali",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
