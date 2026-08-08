import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredited Enterprise — Upskilling for High-Performing Teams",
  description:
    "Structured enterprise training programs in data, AI, and product, built with industry partners and delivered at scale.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
