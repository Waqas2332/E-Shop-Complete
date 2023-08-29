import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "E-Shop",
  description: "Shop with just ONE Click",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="layout">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
