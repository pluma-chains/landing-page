import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Download, FileText, Eye } from "lucide-react"

export default function WhitepaperPage() {
  return (
    <PageShell
      title="Pluma Chain Whitepaper"
      description="Dive deep into the technical architecture, vision, and innovative solutions of Pluma Chain. Download or read our comprehensive whitepaper."
      heroImage="/images/blockchain-diagram.png"
      heroImageAlt="Pluma Chain Whitepaper Illustration"
    >
      <section className="text-center">
        <Image
          src="/images/feather-logo.png"
          alt="Pluma Chain Feather"
          width={100}
          height={100}
          className="mx-auto mb-8 animate-pulse-slow"
        />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Our whitepaper provides a detailed exploration of Pluma Chain's Layer 3 technology, modular rollup design,
          consensus mechanisms (if applicable), tokenomics (if applicable), security model, and our roadmap for building
          a featherweight, high-performance blockchain for the anime-inspired decentralized future.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
            <Link href="/whitepaper_pluma_chain_v1.pdf" target="_blank" download>
              <Download className="mr-2 h-5 w-5" /> Download PDF (v1.0)
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
          >
            <Link href="/whitepaper_pluma_chain_v1.pdf" target="_blank">
              <Eye className="mr-2 h-5 w-5" /> Read Online
            </Link>
          </Button>
        </div>

        <div className="max-w-3xl mx-auto p-6 bg-card/50 border border-border/50 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">Key Sections:</h3>
          <ul className="list-disc list-inside text-left space-y-2 text-muted-foreground">
            <li>Introduction to Layer 3 and Pluma Chain's Vision</li>
            <li>Modular Rollup Architecture & Technical Deep Dive</li>
            <li>Consensus and Security Model (Leveraging Ethereum L1)</li>
            <li>Pluma Tokenomics and Utility (Details TBD)</li>
            <li>Use Cases: DeFi, NFTs, Gaming on Pluma</li>
            <li>Roadmap and Future Developments</li>
            <li>Team and Advisors (Optional)</li>
          </ul>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-primary">Have Questions?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Join our community on Discord to discuss the whitepaper, ask questions, and share your insights with the team
          and other Pluma enthusiasts.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="https://discord.gg/YOUR_DISCORD" target="_blank">
            Join the Discussion <FileText className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </section>
    </PageShell>
  )
}
