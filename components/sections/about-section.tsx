"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Rocket, Shield, Heart, Lock, ExternalLink, ArrowUpRight, FileText } from "lucide-react"
import { FeatureCard } from "@/components/ui/feature-card"
import { useCases } from "@/lib/data"

export const AboutSection = () => {
  return (
    <section id="about" className="section-spacing relative">
      <div className="section-divider mb-20"></div>
      <div className="container">
        {/* Main Content */}
        <div className="center-content mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold gradient-text-primary mb-10 font-display text-center max-w-6xl">
            About Pluma Chain 🌸
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-5xl mx-auto text-center px-4">
            Pluma Chain delivers featherweight scalability and cost-effectiveness using modular rollup technology, all
            while preserving Ethereum's security. Designed for mainstream DeFi, NFTs, and gaming with a unique,
            approachable anime style that makes blockchain technology accessible to everyone.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <div className="center-content mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold gradient-text-secondary flex items-center justify-center font-display">
              <Sparkles className="mr-4 h-8 w-8 sm:h-10 sm:w-10" />
              Key Features
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
            <FeatureCard
              icon={<Zap className="h-10 w-10" />}
              title="Ultra-low fees"
              description="< $0.001 per transaction"
              delay={0}
            />
            <FeatureCard
              icon={<Rocket className="h-10 w-10" />}
              title="Blazing throughput"
              description="4,000+ TPS capacity"
              delay={100}
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10" />}
              title="Ethereum L1 security"
              description="Battle-tested protection"
              delay={200}
            />
            <FeatureCard
              icon={<Heart className="h-10 w-10" />}
              title="Anime-themed UX"
              description="Delightful user experience"
              delay={300}
            />
          </div>
        </div>

        {/* Three Images Layout - Perfectly Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-20 max-w-7xl mx-auto">
          <div className="relative group mx-auto">
            <Image
              src="/images/blockchain-sakura.png"
              alt="Pluma Chain Technology"
              width={400}
              height={400}
              className="rounded-3xl shadow-2xl animate-float hover-glow w-full max-w-sm object-cover aspect-square mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Advanced Technology</h4>
              <p className="text-gray-200 text-sm">Cutting-edge modular rollup architecture</p>
            </div>
          </div>

          <div className="relative group mx-auto">
            <Image
              src="/images/developer-tools.png"
              alt="Developer Experience"
              width={400}
              height={400}
              className="rounded-3xl shadow-2xl animate-float hover-glow w-full max-w-sm object-cover aspect-square mx-auto"
              style={{ animationDelay: "0.5s" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Developer First</h4>
              <p className="text-gray-200 text-sm">Intuitive tools and comprehensive documentation</p>
            </div>
          </div>

          <div className="relative group mx-auto md:col-span-2 lg:col-span-1">
            <Image
              src="/images/community-bird.png"
              alt="Community Driven"
              width={400}
              height={400}
              className="rounded-3xl shadow-2xl animate-float hover-glow w-full max-w-sm object-cover aspect-square mx-auto"
              style={{ animationDelay: "1s" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Community Driven</h4>
              <p className="text-gray-200 text-sm">Vibrant ecosystem of creators and builders</p>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <div className="center-content mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold gradient-text-secondary font-heading text-center">
              Use Cases
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, i) => {
              const IconComponent = useCase.icon
              return (
                <div
                  key={i}
                  className="group flex flex-col items-center text-center p-4 sm:p-6 glass-card-premium rounded-2xl hover-lift interactive-scale border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-lg font-bold text-primary mb-1 sm:mb-2 font-heading">
                    {useCase.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{useCase.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Security & Audits Section */}
        <div className="mb-20">
          <div className="center-content mb-8">
            <h3 className="text-3xl sm:text-4xl font-bold gradient-text-secondary flex items-center justify-center font-heading">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center mr-4">
                <Lock className="h-6 w-6 sm:h-7 sm:w-7 text-green-400" />
              </div>
              Security & Audits
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="glass-card-premium p-6 sm:p-8 rounded-2xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <h4 className="text-xl sm:text-2xl font-bold text-green-400 mb-4 flex items-center font-heading">
                <Shield className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Security Audits
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-base sm:text-lg text-gray-300">
                    Audited by <span className="text-green-400 font-semibold">CertiK</span>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-base sm:text-lg text-gray-300">
                    Reviewed by <span className="text-green-400 font-semibold">OpenZeppelin</span>
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-base sm:text-lg text-gray-300">
                    Continuous monitoring by <span className="text-green-400 font-semibold">Immunefi</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card-premium p-6 sm:p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
              <h4 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 flex items-center font-heading">
                <ExternalLink className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Transparency
              </h4>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  All smart contracts are open-source and verified on Etherscan for complete transparency.
                </p>
                <Link
                  href="https://etherscan.io/address/YOUR_BRIDGE_CONTRACT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold text-base sm:text-lg group"
                >
                  View Bridge Contract
                  <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="center-content">
          <Button
            asChild
            className="btn-primary-premium text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 interactive-scale"
          >
            <Link href="/whitepaper" target="_blank">
              <FileText className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Read Our Whitepaper
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
