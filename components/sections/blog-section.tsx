"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { ArrowRight, Rss } from "lucide-react"
import { blogPosts } from "@/lib/data"

export const BlogSection = () => {
  return (
    <section id="blog" className="py-32 relative">
      <div className="section-divider mb-20"></div>
      <div className="container text-center">
        <h2 className="text-6xl md:text-7xl font-bold gradient-text-primary mb-10 font-display">
          Latest from Pluma 📝
        </h2>
        <p className="text-2xl text-gray-300 max-w-5xl mx-auto mb-20 leading-relaxed">
          Stay updated with the latest news, developments, and insights from the Pluma Chain team and community.
          Discover stories, tutorials, and deep dives into our technology.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {blogPosts.map((post, i) => (
            <Card
              key={i}
              className="glass-card-premium hover-lift group cursor-pointer text-left overflow-hidden h-full"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="object-cover aspect-video group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs text-white font-semibold">{post.readTime}</span>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4 font-heading">
                  {post.title}
                </CardTitle>
                <p className="text-gray-300 mb-8 leading-relaxed">{post.excerpt}</p>
                <Button
                  variant="link"
                  asChild
                  className="px-0 text-primary group-hover:text-pink-400 transition-colors font-bold text-lg"
                >
                  <Link href={`/blog/post-${i + 1}`}>
                    Read More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button asChild className="btn-primary-premium text-xl px-12 py-6 interactive-scale">
          <Link href="/blog">
            <Rss className="mr-3 h-6 w-6" />
            Visit Our Blog
          </Link>
        </Button>
      </div>
    </section>
  )
}
