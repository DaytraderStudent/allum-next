import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Allum Engineering | Innovative Engineering Since 1973",
  description:
    "Allum Engineering AS — trusted partner in marine, energy and process industries. Specializing in cable equipment, maritime solutions, and innovative water treatment technology.",
  keywords: [
    "engineering",
    "maritime",
    "marine",
    "cable handling",
    "turntables",
    "CFU",
    "water treatment",
    "Norway",
    "Sandefjord",
  ],
  openGraph: {
    title: "Allum Engineering | Innovative Engineering Since 1973",
    description:
      "Trusted partner in marine, energy and process industries since 1973.",
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain-overlay">{children}</body>
    </html>
  );
}
