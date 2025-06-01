"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BarChart2, ExternalLink, Rocket, ChevronDown } from "lucide-react"

interface HeroSectionProps {
  scrollY: number
}

export const HeroSection = ({ scrollY }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ transform: `translateY(${scrollY * 0.3}px)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-blue-900/40"></div>
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/enchanting-flight.png"
          alt="Hero background art"
          layout="fill"
          objectFit="cover"
          className="blur-sm"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 text-center">
        <div className="animate-float-slow">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tight gradient-text-hero mb-8 font-display text-shadow-glow leading-none">
            Pluma Chain
          </h1>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-2xl sm:text-4xl md:text-6xl font-bold gradient-text-secondary mb-8 font-heading leading-tight">
            Blockchain as Light as a Feather ✨
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <p className="mt-8 max-w-5xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-medium px-4">
            Pluma Chain is an ultra-lightweight Layer 3 blockchain designed for blazing speed, negligible fees, and
            seamless scalability. Built on Ethereum, Pluma Chain empowers DeFi, NFTs, and gaming with a frictionless
            user experience, secured by Ethereum L1 and innovating with unique anime-inspired branding.
          </p>
        </div>

        <div
          className="mt-16 flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 animate-slide-up px-4"
          style={{ animationDelay: "0.9s" }}
        >
          <Button
            size="lg"
            asChild
            className="btn-primary-premium text-lg sm:text-xl px-12 sm:px-16 py-6 sm:py-8 rounded-2xl font-bold shadow-2xl interactive-scale w-full sm:w-auto"
          >
            <Link href="https://l2beat.com/scaling/projects/plumachain" target="_blank" rel="noopener noreferrer">
              <BarChart2 className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Explore Metrics on L2BEAT
              <ExternalLink className="ml-3 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            asChild
            className="btn-secondary-premium text-lg sm:text-xl px-12 sm:px-16 py-6 sm:py-8 rounded-2xl font-bold interactive-scale w-full sm:w-auto"
          >
            <Link href="#docs">
              <Rocket className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Get Started
            </Link>
          </Button>
        </div>

        <div className="mt-20 animate-slide-up" style={{ animationDelay: "1.2s" }}>
          <ChevronDown className="mx-auto h-10 w-10 text-muted-foreground animate-bounce-gentle" />
        </div>
      </div>
    </section>
  )
}
