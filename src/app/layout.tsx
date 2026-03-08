import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/cart/CartSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IKA SERVICES - Produits & Services de Qualité",
    template: "%s | IKA SERVICES",
  },
  description:
    "IKA SERVICES SARL - Votre partenaire de confiance pour des produits et services de qualité au Mali. Boutique en ligne sécurisée.",
  keywords: ["IKA SERVICES", "Mali", "Bamako", "boutique en ligne", "e-commerce"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "IKA SERVICES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <CartSidebar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
