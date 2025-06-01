import { PageShell } from "@/components/page-shell"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Terminal, Zap, Feather, Code, Puzzle, ArrowRight } from "lucide-react"

const resources = [
  {
    title: "Getting Started",
    description: "Your first steps to building on Pluma Chain. Setup your environment and deploy a simple dApp.",
    icon: <Zap className="w-8 h-8 text-primary" />,
    href: "/docs/getting-started",
    image: "/images/pluma-chan-soars.png",
  },
  {
    title: "Core Concepts",
    description: "Understand the architecture, L3 benefits, and unique features of Pluma Chain.",
    icon: <Feather className="w-8 h-8 text-primary" />,
    href: "/docs/core-concepts",
    image: "/images/blockchain-sakura.png",
  },
  {
    title: "Smart Contracts",
    description: "Learn how to write, deploy, and interact with smart contracts on our EVM-compatible L3.",
    icon: <Code className="w-8 h-8 text-primary" />,
    href: "/docs/smart-contracts",
    image: "/images/developer-tools.png",
  },
  {
    title: "API Reference",
    description: "Detailed reference for Pluma Chain RPC endpoints and client SDKs.",
    icon: <Terminal className="w-8 h-8 text-primary" />,
    href: "/docs/api-reference",
    image: "/images/blockchain-diagram.png",
  },
  {
    title: "Tutorials & Guides",
    description: "Step-by-step guides for common tasks and advanced features.",
    icon: <Puzzle className="w-8 h-8 text-primary" />,
    href: "/docs/tutorials",
    image: "/images/performance-chart.png",
  },
  {
    title: "SDKs & Libraries",
    description: "Explore our official and community-supported Software Development Kits.",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    href: "/docs/sdks",
    image: "/images/chibi-icons.png",
  },
]

export default function DocumentationPage() {
  return (
    <PageShell
      title="Pluma Chain Documentation"
      description="Everything you need to start building on Pluma Chain. Explore guides, references, and tutorials for our featherweight L3."
      heroImage="/images/developer-bird.png"
      heroImageAlt="Pluma Chain Developer Documentation"
    >
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <Card
            key={resource.title}
            className="flex flex-col bg-card/70 backdrop-blur-sm border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <CardHeader className="items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 mb-3 w-fit mx-auto">{resource.icon}</div>
              <CardTitle className="text-xl text-foreground">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-center">
              <Image
                src={resource.image || "/placeholder.svg"}
                alt={resource.title}
                width={200}
                height={120}
                className="rounded-md mx-auto mb-4 object-cover aspect-video border border-border/30"
              />
              <CardDescription className="text-muted-foreground mb-4">{resource.description}</CardDescription>
              <Button variant="ghost" asChild className="text-primary hover:bg-primary/10">
                <Link href={resource.href}>
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-16 text-center py-12 bg-muted/30 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">Need Help?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Can't find what you're looking for? Join our developer community on Discord or check out our GitHub
          discussions.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="https://discord.gg/YOUR_DISCORD" target="_blank">
              Join Discord
            </Link>
          </Button>
          <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
            <Link href="https://github.com/YOUR_ORG/PLUMA_CHAIN/discussions" target="_blank">
              GitHub Discussions
            </Link>
          </Button>
        </div>
      </section>
    </PageShell>
  )
}
