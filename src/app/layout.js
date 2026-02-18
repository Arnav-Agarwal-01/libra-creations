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
  title: "Libra Creations | Premium Corporate Solutions",
  description: "Elevate your brand with premium uniforms, corporate gifting, and event management.",
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      </body>
    </html>
  );
}
