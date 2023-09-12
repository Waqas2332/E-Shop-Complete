import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Providers from "@/redux/providers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
        <Providers>
          <Nav />

          <main className="layout">{children}</main>
        </Providers>
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
