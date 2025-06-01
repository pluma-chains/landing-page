import { PageShell } from "@/components/page-shell"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { MessageSquare, Twitter, Github, Users2, CalendarDays, Feather, Mic2 } from "lucide-react"

const communityLinks = [
  {
    name: "Discord Server",
    description: "Chat with the team and community, get support, and share your projects.",
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    href: "https://discord.gg/YOUR_DISCORD",
    image: "/images/community-bird.png",
    cta: "Join Discord",
  },
  {
    name: "Twitter / X",
    description: "Follow us for the latest news, announcements, and anime art drops!",
    icon: <Twitter className="w-8 h-8 text-primary" />,
    href: "https://twitter.com/YOUR_TWITTER",
    image: "/images/pluma-chan-flight.png",
    cta: "Follow Us",
  },
  {
    name: "GitHub",
    description: "Contribute to Pluma Chain, report issues, or explore our open-source codebase.",
    icon: <Github className="w-8 h-8 text-primary" />,
    href: "https://github.com/YOUR_ORG/PLUMA_CHAIN",
    image: "/images/developer-bird.png",
    cta: "View on GitHub",
  },
  {
    name: "Community Forum",
    description: "Discuss proposals, share ideas, and engage in long-form conversations.",
    icon: <Users2 className="w-8 h-8 text-primary" />,
    href: "/forum",
    image: "/images/artistic-bird.png",
    cta: "Visit Forum",
  },
  {
    name: "Events & AMAs",
    description: "Join our online and offline events, AMAs with the team, and community calls.",
    icon: <CalendarDays className="w-8 h-8 text-primary" />,
    href: "/events",
    image: "/images/pluma-chan-soars.png",
    cta: "See Events",
  },
  {
    name: "Content Creators",
    description: "Partner with us to create tutorials, reviews, and showcase Pluma Chain.",
    icon: <Mic2 className="w-8 h-8 text-primary" />,
    href: "/creators",
    image: "/images/artist-bird.png",
    cta: "Become a Creator",
  },
]

export default function CommunityPage() {
  return (
    <PageShell
      title="Join the Pluma Flock!"
      description="Connect with our passionate global community of developers, artists, gamers, and Pluma Chain enthusiasts. Let's build the future together!"
      heroImage="/images/balloon-adventure.png"
      heroImageAlt="Pluma Chain Community"
    >
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communityLinks.map((link) => (
          <Card
            key={link.name}
            className="flex flex-col bg-card/70 backdrop-blur-sm border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <CardHeader className="items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 mb-3 w-fit mx-auto">{link.icon}</div>
              <CardTitle className="text-xl text-foreground">{link.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-center">
              <Image
                src={link.image || "/placeholder.svg"}
                alt={link.name}
                width={200}
                height={120}
                className="rounded-md mx-auto mb-4 object-cover aspect-video border border-border/30"
              />
              <CardDescription className="text-muted-foreground mb-4">{link.description}</CardDescription>
              <Button variant="default" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : "_self"}>
                  {link.cta}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-16 text-center py-12 bg-muted/30 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">Contribution Guidelines</h2>
        <Image
          src="/images/chibi-birds-developer-mode.png"
          alt="Contributing to Pluma Chain"
          width={300}
          height={200}
          className="mx-auto mb-4 rounded-lg shadow-md"
        />
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Pluma Chain is open-source and community-driven. We welcome contributions of all kinds, from code and
          documentation to art and community moderation.
        </p>
        <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
          <Link href="https://github.com/YOUR_ORG/PLUMA_CHAIN/blob/main/CONTRIBUTING.md" target="_blank">
            Read Contribution Guide <Feather className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>
    </PageShell>
  )
}
