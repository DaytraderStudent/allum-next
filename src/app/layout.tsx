import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title:
    "Allum Engineering | Subsea Cable & Offshore Engineering — Sandefjord",
  description:
    "Allum Engineering delivers structural analysis, mechanical design, and cable handling systems to the global subsea cable, offshore and process industries. Based in Sandefjord, Norway since 1973.",
  keywords: [
    "subsea cable engineering Norway",
    "cable turntable design",
    "offshore structural analysis",
    "marine engineering Sandefjord",
    "HVAC cable handling equipment",
    "FPSO engineering Norway",
    "lifting equipment design DNV",
  ],
  openGraph: {
    title: "Allum Engineering | Engineering Solutions Since 1973",
    description: "Subsea cables. Offshore structures. Process equipment.",
    siteName: "Allum Engineering",
    locale: "en_US",
    type: "website",
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
      suppressHydrationWarning
      className={`${ibmPlex.variable} ${ibmPlexMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
