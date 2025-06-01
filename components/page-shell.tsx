"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ThemeProvider } from "next-themes"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

interface PageShellProps {
  children: React.ReactNode
  title: string
  description?: string
  heroImage?: string
  heroImageAlt?: string
}

export function PageShell({ children, title, description, heroImage, heroImageAlt }: PageShellProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-foreground font-sans">
        <Header />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex-grow"
        >
          {heroImage && (
            <section className="relative h-80 md:h-96 w-full overflow-hidden">
              <Image
                src={heroImage || "/placeholder.svg"}
                alt={heroImageAlt || title}
                layout="fill"
                objectFit="cover"
                className="opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30" />
              <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                  className="text-5xl md:text-7xl font-bold tracking-tight gradient-text-primary"
                >
                  {title}
                </motion.h1>
                {description && (
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                    className="mt-6 max-w-2xl text-lg text-gray-300"
                  >
                    {description}
                  </motion.p>
                )}
              </div>
            </section>
          )}
          {!heroImage && (
            <section className="py-16 md:py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-b border-border/40">
              <div className="container text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                  className="text-4xl md:text-6xl font-bold tracking-tight gradient-text-primary"
                >
                  {title}
                </motion.h1>
                {description && (
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                    className="mt-6 max-w-3xl mx-auto text-lg text-gray-300"
                  >
                    {description}
                  </motion.p>
                )}
              </div>
            </section>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="container py-12 md:py-16"
          >
            {children}
          </motion.div>
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
