"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"
import { Shield, ExternalLink, ArrowUpRight } from "lucide-react"

export const L2BeatSection = () => {
  return (
    <section id="metrics" className="py-32 relative">
      <div className="section-divider mb-20"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-blue-900/15 to-purple-900/15"></div>
      <div className="container text-center relative z-10">
        <h2 className="text-6xl md:text-7xl font-bold gradient-text-primary mb-10 font-display">
          L2BEAT Integration 📈
        </h2>
        <p className="text-2xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
          Pluma Chain is proudly tracked by L2BEAT, the leading analytics platform for Ethereum scaling. Our TVL,
          activity, and security metrics are independently and transparently monitored by industry experts.
        </p>

        <div className="max-w-6xl mx-auto mb-16">
          <Image
            src="/images/performance-chart.png"
            alt="Performance Chart"
            width={600}
            height={400}
            className="mx-auto rounded-3xl shadow-2xl animate-pulse-glow hover-lift"
          />
        </div>

        <Card className="glass-card-premium max-w-5xl mx-auto shadow-2xl hover-glow">
          <CardHeader>
            <CardTitle className="text-4xl gradient-text-secondary flex items-center justify-center font-display">
              <Shield className="mr-4 h-10 w-10" />
              Pluma Chain on L2BEAT
            </CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Transparent metrics and comprehensive risk assessment from the industry standard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow className="border-border/30 hover:bg-muted/20 transition-colors">
                  <TableHead className="font-bold text-muted-foreground text-xl">Type</TableHead>
                  <TableCell className="text-primary font-bold text-xl">Layer 3 / Modular Rollup</TableCell>
                </TableRow>
                <TableRow className="border-border/30 hover:bg-muted/20 transition-colors">
                  <TableHead className="font-bold text-muted-foreground text-xl">TVL</TableHead>
                  <TableCell className="text-green-400 font-bold text-xl">$6.30M</TableCell>
                </TableRow>
                <TableRow className="border-border/30 hover:bg-muted/20 transition-colors">
                  <TableHead className="font-bold text-muted-foreground text-xl">UOPS</TableHead>
                  <TableCell className="text-blue-400 font-bold text-xl">3.47</TableCell>
                </TableRow>
                <TableRow className="border-border/30 hover:bg-muted/20 transition-colors">
                  <TableHead className="font-bold text-muted-foreground text-xl">Risk Profile</TableHead>
                  <TableCell>
                    <Link
                      href="https://l2beat.com/scaling/projects/plumachain#risk-analysis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-pink-400 transition-colors underline font-bold text-xl flex items-center"
                    >
                      View Risk Assessment
                      <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="mt-10 p-6 glass-card rounded-2xl">
              <p className="text-lg text-muted-foreground">
                <em>
                  Note: We're submitting Pluma Chain to L2BEAT. Track our progress on{" "}
                  <Link
                    href="https://github.com/YOUR_ORG/YOUR_REPO/pull/XYZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-pink-400 transition-colors underline font-semibold"
                  >
                    GitHub PR #XYZ
                  </Link>
                </em>
              </p>
            </div>
          </CardContent>
        </Card>

        <Button asChild className="btn-primary-premium mt-16 text-xl px-12 py-6 interactive-scale">
          <Link href="https://l2beat.com/scaling/projects/plumachain" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-3 h-6 w-6" />
            View on L2BEAT
          </Link>
        </Button>
      </div>
    </section>
  )
}
