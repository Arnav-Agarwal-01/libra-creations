import { Cinzel, DM_Sans } from "next/font/google";
import "./globals.css";


const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Libra Creations | Corporate Uniforms, Gifting & Events in India",
  description:
    "Established 2005 in Hyderabad. Corporate uniforms, corporate gifting and event management — one end-to-end partner, serving organizations across India.",
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${dmSans.variable} antialiased bg-cream text-off-black`}
        suppressHydrationWarning
      >
        <SmoothScroll />
        <CustomCursor />
        <Header />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
