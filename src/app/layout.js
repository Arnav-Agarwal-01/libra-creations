import { Bricolage_Grotesque, Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Libra Creations | Corporate Uniforms, Gifting & Events",
    template: "%s | Libra Creations",
  },
  description:
    "Browse corporate uniforms, gifting and event services from Libra Creations. Serving organizations across India from Hyderabad since 2005.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${bricolage.variable} ${manrope.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
