import Link from "next/link"
// This is a template for a single blog post.
// In a real app, you'd fetch content based on the slug.
import { PageShell } from "@/components/page-shell"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Dummy content for a single post
const getPostData = (slug: string) => {
  // In a real app, fetch this from a CMS or markdown files
  if (slug === "anime-adventures-l3-scaling") {
    return {
      title: "Anime Adventures in L3 Scaling",
      date: "October 11, 2025",
      author: "Pluma-chan",
      authorImage: "/images/pluma-chan-flight.png",
      tags: ["L3", "Scaling", "Anime", "Technology"],
      image: "/images/enchanting-flight.png",
      content: `
        <p class="mb-4 text-lg leading-relaxed">Pluma Chain is not just another Layer 3; it's an experience. We're blending cutting-edge blockchain technology with the vibrant, imaginative world of anime to create a platform that's both powerful and delightful to use. This post explores how our unique approach to L3 scaling is set to revolutionize the dApp landscape.</p>
        <h2 class="text-2xl font-bold my-6 text-primary">The Featherweight Philosophy</h2>
        <p class="mb-4 leading-relaxed">At the heart of Pluma Chain is our "featherweight" philosophy. This means minimizing computational overhead, reducing gas fees to near-zero, and ensuring transactions are processed at lightning speed. We achieve this through a novel modular rollup architecture that leverages Ethereum's L1 security while optimizing for L3 efficiency.</p>
        <figure class="my-8">
          <img src="/images/blockchain-sakura.png" alt="Blockchain Sakura Tree" class="rounded-lg shadow-xl mx-auto w-full max-w-md" />
          <figcaption class="text-center text-sm text-muted-foreground mt-2">Our tech is as beautiful as it is efficient.</figcaption>
        </figure>
        <h2 class="text-2xl font-bold my-6 text-primary">Anime: More Than Just Aesthetics</h2>
        <p class="mb-4 leading-relaxed">For Pluma Chain, anime isn't just a visual theme; it's a core part of our community and user experience strategy. We believe that by making blockchain technology more approachable, fun, and relatable, we can onboard the next wave of users and developers. Our mascot, Pluma-chan, and the entire Pluma Flock are here to guide you on your journey.</p>
        <p class="mb-4 leading-relaxed">From our developer documentation styled like a light novel to community events featuring anime artists, every aspect of Pluma Chain is designed to be engaging. We're building an ecosystem where creativity flourishes, and where building dApps feels like embarking on an exciting adventure.</p>
        <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
          "Pluma Chain: Light as Sakura Petals, Fast as Lightning!" - Our guiding principle.
        </blockquote>
        <h2 class="text-2xl font-bold my-6 text-primary">What's Next for Pluma?</h2>
        <p class="mb-4 leading-relaxed">The journey is just beginning! We're continuously working on new features, partnerships, and community initiatives. Stay tuned for updates on our upcoming NFT marketplace, enhanced DeFi protocols, and exciting gaming integrations. The future is bright, light, and full of anime-zing possibilities!</p>
      `,
    }
  }
  return null // Fallback for other slugs
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug)

  if (!post) {
    return (
      <PageShell title="Post Not Found" description="Oops! We couldn't find that feather.">
        <div className="text-center">
          <p>The blog post you're looking for doesn't exist or has flown away.</p>
          <Link href="/blog" className="text-primary hover:underline mt-4 inline-block">
            Back to Blog
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell title={post.title} description={`By ${post.author} on ${post.date}`}>
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-xl shadow-2xl mb-6 object-cover aspect-video"
          />
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" /> {post.date}
            </div>
            <div className="flex items-center">
              <Image
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                width={20}
                height={20}
                className="rounded-full mr-1.5"
              />{" "}
              {post.author}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div
          className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-primary prose-a:text-primary hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="my-12 border-border/50" />

        <section className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Enjoyed this feather-light read?</h3>
          <p className="text-muted-foreground mb-6">Share it with your flock and join the conversation!</p>
          {/* Add social share buttons here */}
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to All Posts
          </Link>
        </section>
      </article>
    </PageShell>
  )
}
