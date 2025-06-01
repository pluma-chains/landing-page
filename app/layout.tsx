import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pluma Chain - Blockchain as Light as a Feather",
  description:
    "Pluma Chain is an ultra-lightweight Layer 3 blockchain designed for blazing speed, negligible fees, and seamless scalability, with unique anime-inspired branding.",
  generator: "v0.dev",
  metadataBase: new URL("https://pluma-chain.pages.dev"),
  openGraph: {
    title: "Pluma Chain - Blockchain as Light as a Feather",
    description:
      "Ultra-lightweight Layer 3 blockchain designed for blazing speed, negligible fees, and seamless scalability.",
    type: "website",
    siteName: "Pluma Chain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pluma Chain - Blockchain as Light as a Feather",
    description:
      "Ultra-lightweight Layer 3 blockchain designed for blazing speed, negligible fees, and seamless scalability.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
