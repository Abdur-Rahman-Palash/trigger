import type { Metadata } from "next";
import { Inter, Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animation/SmoothScroll";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-titillium'
});

export const metadata: Metadata = {
  title: "Trigger Group | Plumbing, Electrical & Energy Solutions Melbourne",
  description: "Trigger Group is a Melbourne-based plumbing, electrical & energy-solutions company specialising in heat pumps, solar & batteries, water filtration, and heating & cooling since 2012.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${titillium.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="antialiased font-titillium">
        <SmoothScroll>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
