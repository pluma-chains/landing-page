"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { developerResources } from "@/lib/data"

export const DeveloperSection = () => {
  return (
    <section id="docs" className="py-32 relative">
      <div className="section-divider mb-20"></div>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/images/developer-tools.png"
                alt="Developer Tools"
                width={700}
                height={600}
                className="rounded-3xl shadow-2xl animate-float hover-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse-glow"></div>
              <div
                className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-15 animate-pulse-glow"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <h2 className="text-6xl md:text-7xl font-bold gradient-text-primary font-display">Build with Pluma 👨‍💻</h2>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Build scalable, beautiful dApps on Pluma Chain using our developer-friendly SDKs and anime-inspired API
              documentation. Join the revolution and create the next generation of decentralized applications with
              unparalleled ease and efficiency!
            </p>

            <div className="space-y-8">
              <h3 className="text-4xl font-bold gradient-text-secondary font-display">Developer Resources:</h3>

              <div className="space-y-6">
                {developerResources.map((resource, i) => {
                  const IconComponent = resource.icon
                  return (
                    <Link
                      key={i}
                      href={resource.href}
                      className="flex items-center space-x-6 p-8 glass-card-premium rounded-2xl hover-lift group transition-all duration-300"
                    >
                      <div className="text-primary group-hover:scale-125 transition-transform duration-300 bg-gradient-to-br from-pink-400/20 to-blue-400/20 p-4 rounded-2xl">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-300 group-hover:text-primary transition-colors font-heading">
                          {resource.text}
                        </h4>
                        <p className="text-lg text-muted-foreground mt-2">{resource.desc}</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                    </Link>
                  )
                })}
              </div>
            </div>

            <Button asChild className="btn-primary-premium text-xl px-12 py-6 interactive-scale">
              <Link href="/docs">
                <Zap className="mr-3 h-6 w-6" />
                Start Building Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
