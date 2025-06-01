import { PageShell } from "@/components/page-shell"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Rss } from "lucide-react"

// Dummy blog post data
const blogPosts = [
  {
    slug: "anime-adventures-l3-scaling",
    title: "Anime Adventures in L3 Scaling",
    date: "October 11, 2025",
    excerpt: "Discover how Pluma Chain is revolutionizing the L3 space with its unique approach...",
    image: "/images/pluma-chan-flight.png",
  },
  {
    slug: "featherweight-fees-explained",
    title: "Featherweight Fees: A Deep Dive into Pluma's Cost Efficiency",
    date: "October 05, 2025",
    excerpt: "Understanding how Pluma Chain achieves near-zero transaction fees while maintaining security.",
    image: "/images/pluma-chan-soars.png",
  },
  {
    slug: "building-kawaii-dapps",
    title: "Building Kawaii dApps: A Developer's Guide to Pluma Chain",
    date: "September 28, 2025",
    excerpt: "Explore our SDKs and tools to create delightful, anime-themed decentralized applications.",
    image: "/images/developer-bird.png",
  },
  {
    slug: "community-spotlight-artist-x",
    title: "Community Spotlight: Artist X and their Pluma NFTs",
    date: "September 20, 2025",
    excerpt: "Featuring an amazing artist from our community and their beautiful NFT collection on Pluma Chain.",
    image: "/images/artistic-bird.png",
  },
]

export default function BlogListPage() {
  return (
    <PageShell
      title="Pluma Chain Blog"
      description="Stay updated with the latest news, insights, tutorials, and community stories from the world of Pluma Chain."
      heroImage="/images/enchanting-flight.png"
      heroImageAlt="Pluma Chain Blog Banner"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card
            key={post.slug}
            className="flex flex-col bg-card/70 backdrop-blur-sm border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <CardHeader>
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="rounded-t-lg object-cover aspect-video cursor-pointer transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <CardTitle className="mt-4 text-xl text-foreground hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground/80 mb-4">{post.excerpt}</p>
              <Button variant="link" asChild className="px-0 text-primary">
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
          Load More Posts <Rss className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </PageShell>
  )
}
