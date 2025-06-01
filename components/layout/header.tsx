"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu } from "lucide-react"
import { useState, useEffect } from "react"

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} passHref>
    <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
    </span>
  </Link>
)

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-9 h-9" disabled />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="text-foreground hover:bg-muted/50 transition-all duration-300 hover:scale-110"
    >
      {theme === "light" ? <Moon className="h-5 w-5 text-purple-400" /> : <Sun className="h-5 w-5 text-yellow-400" />}
    </Button>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glass-card-premium backdrop-blur-xl">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex h-20 items-center justify-between">
        <Link href="/" passHref>
          <span className="flex items-center space-x-3 cursor-pointer group" aria-label="Pluma Chain Home">
            <div className="relative">
              <Image
                src="/images/feather-logo.png"
                alt="Pluma Chain Logo"
                width={44}
                height={44}
                className="group-hover:scale-110 transition-transform duration-300 animate-pulse-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"></div>
            </div>
            <span className="font-bold text-xl gradient-text-primary hidden sm:inline-block">Pluma Chain</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#metrics">Metrics</NavLink>
          <NavLink href="#docs">Documentation</NavLink>
          <NavLink href="#community">Community</NavLink>
          <NavLink href="#blog">Blog</NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
