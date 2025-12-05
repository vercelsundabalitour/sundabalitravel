import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import LanguageFAB from "@/components/ui/LanguageFAB";
import CustomCursor from "@/components/ui/CustomCursor";
import StructuredData from "@/components/StructuredData";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ClientWrapper from "@/components/providers/ClientWrapper";
import ScrollProgress from "@/components/ui/ScrollProgress";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sundabalitour.com"),
  title: {
    default:
      "Sunda Bali Tour - Private Driver & Custom Tour Packages in Bali Indonesia",
    template: "%s | Sunda Bali Tour",
  },
  description:
    "Discover Bali with Sunda Bali Tour - Your trusted private driver and tour operator. Experience authentic Bali adventures with customizable itineraries, professional English-speaking guides, and all-inclusive packages. Book your dream Bali vacation today!",
  keywords: [
    "Bali tour packages",
    "private driver Bali",
    "Bali travel guide",
    "custom Bali tour",
    "Bali tourism",
    "Ubud tour",
    "Bali day trips",
    "Bali waterfalls tour",
    "Bali temple tour",
    "Bali cultural tour",
    "Bali adventure tour",
    "hire driver Bali",
    "Bali tour operator",
    "Bali vacation packages",
    "things to do in Bali",
    "Bali tourist attractions",
    "private tour Bali",
    "Bali sightseeing",
    "Bali tour services",
    "affordable Bali tours",
  ],
  authors: [{ name: "Sunda Bali Tour", url: "https://sundabalitour.com" }],
  creator: "Sunda Bali Tour",
  publisher: "Sunda Bali Tour",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sundabalitour.com",
    siteName: "Sunda Bali Tour",
    title: "Sunda Bali Tour - Private Driver & Custom Tour Packages in Bali",
    description:
      "Discover authentic Bali experiences with Sunda Bali Tour. Professional private drivers, customizable itineraries, and unforgettable adventures across Bali's most beautiful destinations.",
    images: [
      {
        url: "https://sundabalitour.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Sunda Bali Tour - Your Trusted Bali Tour Operator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunda Bali Tour - Private Driver & Tours in Bali",
    description:
      "Experience authentic Bali with professional private drivers and custom tour packages",
    images: ["https://sundabalitour.com/logo.jpeg"],
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
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: "travel",
  alternates: {
    canonical: "https://sundabalitour.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} font-body antialiased`}
      >
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <LanguageFAB />
      </body>
    </html>
  );
}
