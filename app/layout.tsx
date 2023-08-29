import "./globals.css";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
