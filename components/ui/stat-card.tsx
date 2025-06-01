import type React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface StatCardProps {
  title: string
  value: string
  icon?: React.ReactNode
  trend?: string
  delay?: number
}

export const StatCard = ({ title, value, icon, trend, delay = 0 }: StatCardProps) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`${isIntersecting ? "animate-slide-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="glass-card-premium hover-lift hover-glow group cursor-pointer relative overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400/10 to-blue-400/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 relative z-10">
          <CardTitle className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          {icon && (
            <div className="text-primary group-hover:scale-125 transition-all duration-300 animate-pulse-glow p-2 rounded-lg bg-gradient-to-br from-pink-400/10 to-blue-400/10">
              {icon}
            </div>
          )}
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="text-3xl font-bold gradient-text-primary font-display mb-2">{value}</div>
          {trend && (
            <p className="text-xs text-green-400 flex items-center font-semibold">
              <TrendingUp className="w-3 h-3 mr-1" />
              {trend}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
