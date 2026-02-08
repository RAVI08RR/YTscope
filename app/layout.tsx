import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YTScope - YouTube Channel Analyzer",
  description: "Grow Your YouTube Channel with Data-Driven Insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-[#0d0d0d] text-[#fafafa] min-h-screen selection:bg-orange-500/30 selection:text-orange-200`}
      >
        {children}
      </body>
    </html>
  );
}
