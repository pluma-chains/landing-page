// This page would ideally fetch live data. For now, it uses placeholders.
// Chart.js or Recharts would be used for more complex visualizations.
// For simplicity, I'm using placeholder text and simple card layouts.
// The TVL chart from the landing page is reused here.

"use client"

import { PageShell } from "@/components/page-shell"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from "recharts"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { DollarSign, Zap, Users, AlertTriangle, ShieldCheck, Layers } from "lucide-react"

const PlumaColors = {
  sakuraPink: "#FFB7C5",
  matchaGreen: "#98FB98",
  animeSkyBlue: "#7EC8E3",
  goldfishOrange: "#FF4500",
  royalIndigo: "#5D3FD3",
}

const tvlData = [
  { name: "Jan", TVL: 1.2 },
  { name: "Feb", TVL: 1.5 },
  { name: "Mar", TVL: 1.3 },
  { name: "Apr", TVL: 1.8 },
  { name: "May", TVL: 2.2 },
  { name: "Jun", TVL: 2.5 },
  { name: "Jul", TVL: 3.1 },
  { name: "Aug", TVL: 3.5 },
  { name: "Sep", TVL: 3.2 },
  { name: "Oct", TVL: 3.8 },
  { name: "Nov", TVL: 4.1 },
  { name: "Dec", TVL: 4.5 },
]

const dailyTxData = [
  { day: "Mon", transactions: 6500 },
  { day: "Tue", transactions: 7200 },
  { day: "Wed", transactions: 7800 },
  { day: "Thu", transactions: 7100 },
  { day: "Fri", transactions: 8200 },
  { day: "Sat", transactions: 9500 },
  { day: "Sun", transactions: 8800 },
]

export default function MetricsPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const primaryChartColor = mounted && theme === "dark" ? PlumaColors.sakuraPink : PlumaColors.royalIndigo
  const secondaryChartColor = mounted && theme === "dark" ? PlumaColors.animeSkyBlue : PlumaColors.goldfishOrange

  return (
    <PageShell
      title="Pluma Chain Metrics"
      description="Explore real-time on-chain statistics, network activity, and key performance indicators for Pluma Chain."
      heroImage="/images/performance-chart.png"
      heroImageAlt="Pluma Chain Performance Metrics"
    >
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="bg-card/70 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Value Locked (TVL)</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$4.50M</div>
            <p className="text-xs text-green-500 dark:text-green-400">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-card/70 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily Transactions</CardTitle>
            <Zap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8,800</div>
            <p className="text-xs text-green-500 dark:text-green-400">+12% from yesterday</p>
          </CardContent>
        </Card>
        <Card className="bg-card/70 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Users (24h)</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,234</div>
            <p className="text-xs text-muted-foreground">+3 since last hour</p>
          </CardContent>
        </Card>
        <Card className="bg-card/70 backdrop-blur-sm border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Gas Fee</CardTitle>
            <Layers className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{"< $0.001"}</div>
            <p className="text-xs text-muted-foreground">Consistently low</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">TVL Growth (Last 12 Months)</h2>
        <div className="h-96 bg-card/50 p-4 rounded-lg border border-border/50">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={tvlData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={theme === "dark" ? PlumaColors.animeSkyBlue + "33" : PlumaColors.royalIndigo + "33"}
              />
              <XAxis dataKey="name" stroke={theme === "dark" ? PlumaColors.animeSkyBlue : PlumaColors.royalIndigo} />
              <YAxis stroke={theme === "dark" ? PlumaColors.animeSkyBlue : PlumaColors.royalIndigo} unit="M" />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === "dark" ? "rgba(30,30,40,0.8)" : "rgba(255,255,255,0.8)",
                  borderColor: primaryChartColor,
                  borderRadius: "0.5rem",
                  color: theme === "dark" ? PlumaColors.sakuraPink : PlumaColors.royalIndigo,
                }}
                itemStyle={{ color: theme === "dark" ? PlumaColors.sakuraPink : PlumaColors.royalIndigo }}
              />
              <Legend wrapperStyle={{ color: theme === "dark" ? PlumaColors.animeSkyBlue : PlumaColors.royalIndigo }} />
              <Line
                type="monotone"
                dataKey="TVL"
                stroke={primaryChartColor}
                strokeWidth={3}
                dot={{ r: 5, fill: primaryChartColor }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Daily Transaction Volume</h2>
        <div className="h-96 bg-card/50 p-4 rounded-lg border border-border/50">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyTxData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={theme === "dark" ? PlumaColors.animeSkyBlue + "33" : PlumaColors.royalIndigo + "33"}
              />
              <XAxis dataKey="day" stroke={theme === "dark" ? PlumaColors.animeSkyBlue : PlumaColors.royalIndigo} />
              <YAxis stroke={theme === "dark" ? PlumaColors.animeSkyBlue : PlumaColors.royalIndigo} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === "dark" ? "rgba(30,30,40,0.8)" : "rgba(255,255,255,0.8)",
                  borderColor: secondaryChartColor,
                  borderRadius: "0.5rem",
                  color: theme === "dark" ? PlumaColors.matchaGreen : PlumaColors.goldfishOrange,
                }}
                itemStyle={{ color: theme === "dark" ? PlumaColors.matchaGreen : PlumaColors.goldfishOrange }}
              />
              <Legend wrapperStyle={{ color: theme === "dark" ? PlumaColors.animeSkyBlue : PlumaColors.royalIndigo }} />
              <Bar dataKey="transactions" fill={secondaryChartColor} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">L2BEAT Risk Assessment Summary</h2>
        <Card className="max-w-3xl mx-auto bg-card/70 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center text-foreground">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" /> Risk Factors (Example)
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Summary based on L2BEAT's typical assessment categories.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-muted-foreground">Category</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground">Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-foreground">State Validation</TableCell>
                  <TableCell>
                    <span className="text-green-500 dark:text-green-400 flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-1" /> Secured by Ethereum
                    </span>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    Fraud proofs / ZK proofs submitted to L1.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-foreground">Data Availability</TableCell>
                  <TableCell>
                    <span className="text-green-500 dark:text-green-400 flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-1" /> On-chain (Ethereum)
                    </span>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    All transaction data posted to Ethereum.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-foreground">Upgradeability</TableCell>
                  <TableCell>
                    <span className="text-yellow-500 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-1" /> 7-day Timelock
                    </span>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    Upgrades controlled by multisig with timelock.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-foreground">Sequencer Failure</TableCell>
                  <TableCell>
                    <span className="text-green-500 dark:text-green-400 flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-1" /> L1 Escape Hatch
                    </span>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">Users can force transactions via L1.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground mt-4">
              Note: This is an example risk summary. For official details, please refer to{" "}
              <a
                href="https://l2beat.com/scaling/projects/plumachain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Pluma Chain on L2BEAT
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  )
}
