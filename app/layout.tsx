import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SessionProvider from "@/components/SessionProvider";
import ConditionalNavbar from "@/components/ConditionalNavbar";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-white dark:bg-[#0d0d0d] text-gray-900 dark:text-[#fafafa] min-h-screen selection:bg-orange-500/30 selection:text-orange-200 transition-colors duration-300`}
      >
        <SessionProvider>
          <ThemeProvider>
            <ConditionalNavbar />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

