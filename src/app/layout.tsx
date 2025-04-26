import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "伯明翰神召會仁愛福音教會 - 英國伯明翰華人教會 | Birmingham Chinese Church",
  description:
    "英國伯明翰華人教會，提供主日崇拜、查經班、團契等活動。我們致力於傳揚福音，建立信仰，服務社區。歡迎在英國伯明翰的華人朋友參加我們的聚會。",
  keywords:
    "英國教會,伯明翰教會,華人教會,神召會,仁愛福音教會,基督教,主日崇拜,查經班,團契,英國華人教會,伯明翰華人教會,英國基督教會,伯明翰基督教會,英國華人基督教會,Birmingham Chinese Church,Chinese Church Birmingham,UK Chinese Church",
  authors: [{ name: "伯明翰神召會仁愛福音教會" }],
  creator: "伯明翰神召會仁愛福音教會",
  publisher: "伯明翰神召會仁愛福音教會",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gospelloveuk.cc"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "伯明翰神召會仁愛福音教會 - 英國伯明翰華人教會 | Birmingham Chinese Church",
    description:
      "英國伯明翰華人教會，提供主日崇拜、查經班、團契等活動。我們致力於傳揚福音，建立信仰，服務社區。歡迎在英國伯明翰的華人朋友參加我們的聚會。",
    url: "https://gospelloveuk.cc",
    siteName: "伯明翰神召會仁愛福音教會",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              name: "伯明翰神召會仁愛福音教會",
              alternateName: "英國伯明翰華人教會",
              description:
                "英國伯明翰華人教會，提供主日崇拜、查經班、團契等活動。我們致力於傳揚福音，建立信仰，服務社區。",
              url: "https://gospelloveuk.cc",
              address: {
                "@type": "PostalAddress",
                addressCountry: "GB",
                addressRegion: "Birmingham",
                addressLocality: "Birmingham",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "52.4862",
                longitude: "-1.8904",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "10:00",
                closes: "12:00",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
