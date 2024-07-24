import type { Metadata } from "next";
import { Arima, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";

const inter = Arima({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blank.co - Your Source for the Latest News",
  description:
    "Stay updated with the latest news and stories from around the world. Blank.co brings you reliable news coverage on politics, business, technology, sports, and more.",
  keywords:
    "news, latest news, breaking news, news updates, world news, politics, business, technology, sports",
  openGraph: {
    type: "website",
    url: "https://blank.co",
    title: "Blank.co - Your Source for the Latest News",
    description:
      "Stay updated with the latest news and stories from around the world. Blank.co brings you reliable news coverage on politics, business, technology, sports, and more.",
    images: [
      {
        url: "https://blank.co/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Blank.co News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@blankco",
    title: "Blank.co - Your Source for the Latest News",
    description:
      "Stay updated with the latest news and stories from around the world. Blank.co brings you reliable news coverage on politics, business, technology, sports, and more.",
    images: [
      {
        url: "https://blank.co/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Blank.co News",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
