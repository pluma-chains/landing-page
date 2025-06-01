"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts"
import { useTheme } from "next-themes"
import { DollarSign, Activity, Users, Zap } from "lucide-react"
import { StatCard } from "@/components/ui/stat-card"
import { tvlData, dailyTxData, PlumaColors } from "@/lib/data"

export const MetricsSection = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const chartColor = mounted && theme === "dark" ? PlumaColors.sakuraPink : PlumaColors.royalIndigo

  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
      <div className="container relative z-10">
        <div className="center-content mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold gradient-text-primary mb-8 font-display text-center max-w-6xl">
            Real-Time Network Metrics 📊
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center px-4">
            Instantly build trust with transparent, on-chain statistics that showcase our network's performance and
            exponential growth trajectory.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-16 sm:mb-24 max-w-7xl mx-auto">
          <StatCard
            title="Total Value Locked (TVL)"
            value="$6.30M"
            icon={<DollarSign className="h-8 w-8" />}
            trend="+24.5% this month"
            delay={0}
          />
          <StatCard
            title="Transactions per Day"
            value="15,847"
            icon={<Activity className="h-8 w-8" />}
            trend="+18% from yesterday"
            delay={100}
          />
          <StatCard
            title="Active Users (24h)"
            value="3,420"
            icon={<Users className="h-8 w-8" />}
            trend="+15% growth"
            delay={200}
          />
          <StatCard
            title="Average Gas Fee"
            value="< $0.001"
            icon={<Zap className="h-8 w-8" />}
            trend="Consistently low"
            delay={300}
          />
        </div>

        {/* Enhanced Chart Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
          <Card className="glass-card-premium p-6 sm:p-8 rounded-3xl shadow-2xl hover-glow">
            <CardHeader className="text-center mb-6 sm:mb-8">
              <CardTitle className="text-2xl sm:text-3xl font-bold gradient-text-secondary font-display">
                TVL Growth Trajectory
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-muted-foreground">
                Exponential growth over the past 8 weeks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={tvlData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="tvlGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={PlumaColors.sakuraPink} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={PlumaColors.animeSkyBlue} stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke={PlumaColors.animeSkyBlue} fontSize={12} fontWeight={600} />
                    <YAxis stroke={PlumaColors.animeSkyBlue} unit="M" fontSize={12} fontWeight={600} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(20,20,30,0.95)",
                        borderColor: chartColor,
                        borderRadius: "1rem",
                        color: PlumaColors.sakuraPink,
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,183,197,0.3)",
                      }}
                      itemStyle={{ color: PlumaColors.sakuraPink, fontWeight: 600 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="TVL"
                      stroke={chartColor}
                      strokeWidth={4}
                      fill="url(#tvlGradient)"
                      dot={{ r: 6, fill: chartColor, strokeWidth: 3, stroke: "#fff" }}
                      activeDot={{ r: 10, stroke: chartColor, fill: "transparent", strokeWidth: 4 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card-premium p-6 sm:p-8 rounded-3xl shadow-2xl hover-glow">
            <CardHeader className="text-center mb-6 sm:mb-8">
              <CardTitle className="text-2xl sm:text-3xl font-bold gradient-text-accent font-display">
                Daily Transaction Volume
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-muted-foreground">
                Consistent high throughput performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyTxData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={PlumaColors.matchaGreen} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={PlumaColors.goldfishOrange} stopOpacity={0.6} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="day" stroke={PlumaColors.animeSkyBlue} fontSize={12} fontWeight={600} />
                    <YAxis stroke={PlumaColors.animeSkyBlue} fontSize={12} fontWeight={600} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(20,20,30,0.95)",
                        borderColor: PlumaColors.matchaGreen,
                        borderRadius: "1rem",
                        color: PlumaColors.matchaGreen,
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(152,251,152,0.3)",
                      }}
                      itemStyle={{ color: PlumaColors.matchaGreen, fontWeight: 600 }}
                    />
                    <Bar dataKey="transactions" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
