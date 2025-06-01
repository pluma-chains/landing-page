"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Twitter, Github, Users2, Award, Feather } from "lucide-react"

const communityData = [
  {
    icon: MessageSquare,
    href: "https://discord.gg/YOUR_DISCORD",
    label: "Discord",
    color: "from-indigo-500 to-purple-500",
    desc: "Real-time chat & support",
    members: "15,000+ members",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/YOUR_TWITTER",
    label: "Twitter",
    color: "from-blue-400 to-cyan-400",
    desc: "Latest news & updates",
    members: "25,000+ followers",
  },
  {
    icon: Github,
    href: "https://github.com/YOUR_ORG/PLUMA_CHAIN",
    label: "GitHub",
    color: "from-gray-600 to-gray-800",
    desc: "Open source development",
    members: "500+ contributors",
  },
  {
    icon: Users2,
    href: "/forum",
    label: "Forum",
    color: "from-pink-500 to-rose-500",
    desc: "Community discussions",
    members: "8,000+ posts",
  },
]

export const CommunitySection = () => {
  return (
    <section id="community" className="py-32 relative">
      <div className="section-divider mb-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/15 to-purple-900/15"></div>
      <div className="container text-center relative z-10">
        <h2 className="text-6xl md:text-7xl font-bold gradient-text-primary mb-10 font-display">
          Join the Pluma Flock! 🐦
        </h2>

        <div className="max-w-6xl mx-auto mb-20">
          <Image
            src="/images/balloon-adventure.png"
            alt="Community Art"
            width={800}
            height={500}
            className="mx-auto rounded-3xl shadow-2xl animate-float hover-glow"
          />
        </div>

        <p className="text-2xl text-gray-300 max-w-5xl mx-auto mb-20 leading-relaxed">
          Connect with a creative, passionate community of builders, artists, and users. Together, we're shaping the
          future of blockchain technology with style, substance, and a touch of anime magic that makes every interaction
          delightful!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {communityData.map((social, i) => {
            const IconComponent = social.icon
            return (
              <Card key={i} className="glass-card-premium hover-lift group cursor-pointer h-full">
                <CardContent className="p-10 text-center">
                  <Link
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <div
                      className={`mx-auto w-24 h-24 rounded-3xl bg-gradient-to-r ${social.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text-secondary mb-3 font-heading">{social.label}</h3>
                    <p className="text-lg text-muted-foreground mb-2">{social.desc}</p>
                    <p className="text-sm text-primary font-semibold">{social.members}</p>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="glass-card-premium p-12 rounded-3xl max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold gradient-text-secondary mb-6 flex items-center justify-center font-heading">
            <Award className="mr-3 h-8 w-8" />
            Contribution Guidelines
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Pluma Chain is open-source and community-driven. We welcome contributions of all kinds, from code and
            documentation to art and community moderation. Every contribution helps make our ecosystem stronger!
          </p>
          <Button variant="outline" asChild className="btn-secondary-premium text-lg px-8 py-4">
            <Link href="https://github.com/YOUR_ORG/PLUMA_CHAIN/blob/main/CONTRIBUTING.md" target="_blank">
              <Feather className="mr-3 w-5 h-5" />
              Read Contribution Guide
            </Link>
          </Button>
        </div>

        <Button asChild className="btn-primary-premium text-2xl px-16 py-8 interactive-scale">
          <Link href="https://discord.gg/YOUR_DISCORD" target="_blank" rel="noopener noreferrer">
            <MessageSquare className="mr-4 h-8 w-8" />
            Join Our Discord
          </Link>
        </Button>
      </div>
    </section>
  )
}
