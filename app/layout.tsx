import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes" // Ensure this is correctly imported

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pluma Chain - Blockchain as Light as a Feather",
  description:
    "Pluma Chain is an ultra-lightweight Layer 3 blockchain designed for blazing speed, negligible fees, and seamless scalability, with unique anime-inspired branding.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
