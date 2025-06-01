"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "next-themes"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { MetricsSection } from "@/components/sections/metrics-section"
import { AboutSection } from "@/components/sections/about-section"
import { L2BeatSection } from "@/components/sections/l2beat-section"
import { DeveloperSection } from "@/components/sections/developer-section"
import { CommunitySection } from "@/components/sections/community-section"
import { BlogSection } from "@/components/sections/blog-section"

export default function PlumaChainPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <PlumaChainLandingContent />
    </ThemeProvider>
  )
}

function PlumaChainLandingContent() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-foreground font-sans relative overflow-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 aurora-bg opacity-40 pointer-events-none"></div>
      <FloatingParticles />

      <Header />

      <main className="flex-grow relative z-10">
        <HeroSection scrollY={scrollY} />
        <MetricsSection />
        <AboutSection />
        <L2BeatSection />
        <DeveloperSection />
        <CommunitySection />
        <BlogSection />
      </main>

      <Footer />
    </div>
  )
}
