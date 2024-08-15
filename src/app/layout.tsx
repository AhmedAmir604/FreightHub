import type { Metadata } from "next";
// import { Lexend } from "next/font/google";
import "./globals.css";

// const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freight-Hub",
  description: "A complete Logistics Solution!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
