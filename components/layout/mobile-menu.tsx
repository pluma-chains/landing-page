"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-80 glass-card-dark p-6 transform transition-transform duration-300">
        <div className="flex justify-between items-center mb-8">
          <span className="font-bold text-xl gradient-text-primary">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="space-y-6">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Metrics", href: "/metrics" },
            { name: "Documentation", href: "/documentation" },
            { name: "Community", href: "/community" },
            { name: "Blog", href: "/blog" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-lg font-semibold text-muted-foreground hover:text-primary transition-colors"
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
