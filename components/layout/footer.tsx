"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, MessageSquare } from "lucide-react"

const NavLink = ({ href, children, target }: { href: string; children: React.ReactNode; target?: string }) => (
  <Link href={href} passHref>
    <span
      className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer"
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </span>
  </Link>
)

export function Footer() {
  return (
    <footer className="py-16 sm:py-24 border-t border-border/40 glass-card-premium relative">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-16 mb-16 sm:mb-20 max-w-6xl mx-auto">
          <div>
            <h4 className="font-bold mb-6 sm:mb-8 gradient-text-secondary text-lg sm:text-xl font-heading">
              Pluma Chain
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Whitepaper", href: "/whitepaper" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors text-base sm:text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 sm:mb-8 gradient-text-secondary text-lg sm:text-xl font-heading">
              Developers
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "Documentation", href: "/documentation" },
                { name: "GitHub", href: "https://github.com/YOUR_ORG/PLUMA_CHAIN" },
                { name: "API Reference", href: "/documentation#api-reference" },
                { name: "Bug Bounty", href: "/bug-bounty" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors text-base sm:text-lg"
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 sm:mb-8 gradient-text-secondary text-lg sm:text-xl font-heading">
              Community
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "Discord", href: "https://discord.gg/YOUR_DISCORD" },
                { name: "Twitter/X", href: "https://twitter.com/YOUR_TWITTER" },
                { name: "Forum", href: "/community#forum" },
                { name: "Events", href: "/community#events" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors text-base sm:text-lg"
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 sm:mb-8 gradient-text-secondary text-lg sm:text-xl font-heading">Legal</h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors text-base sm:text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pt-12 sm:pt-16 border-t border-border/40 space-y-6 sm:space-y-8 lg:space-y-0 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            <Image
              src="/images/feather-logo.png"
              alt="Pluma Chain Logo"
              width={40}
              height={40}
              className="animate-pulse-glow"
            />
            <div>
              <p className="text-base sm:text-lg text-gray-400 font-semibold">
                © 2025 Pluma Chain. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Open-source & transparent. View contracts on{" "}
                <Link
                  href="https://etherscan.io/address/YOUR_BRIDGE_CONTRACT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-pink-400 transition-colors underline"
                >
                  Etherscan
                </Link>
              </p>
            </div>
          </div>

          <div className="flex space-x-6 sm:space-x-8">
            {[
              {
                icon: <Twitter className="h-6 w-6 sm:h-8 sm:w-8" />,
                href: "https://twitter.com/YOUR_TWITTER",
                label: "Twitter",
                color: "hover:text-blue-400",
              },
              {
                icon: <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8" />,
                href: "https://discord.gg/YOUR_DISCORD",
                label: "Discord",
                color: "hover:text-indigo-400",
              },
              {
                icon: <Github className="h-6 w-6 sm:h-8 sm:w-8" />,
                href: "https://github.com/YOUR_ORG/PLUMA_CHAIN",
                label: "GitHub",
                color: "hover:text-gray-300",
              },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-125 interactive-scale`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
