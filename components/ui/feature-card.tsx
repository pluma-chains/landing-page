import type React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`${isIntersecting ? "animate-scale-in" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="glass-card-premium hover-lift group cursor-pointer h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardHeader className="text-center relative z-10 pb-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-blue-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-primary group-hover:scale-110 transition-transform duration-300 relative z-10">
              {icon}
            </div>
          </div>
          <CardTitle className="text-xl font-bold gradient-text-secondary font-heading">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center relative z-10">
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
