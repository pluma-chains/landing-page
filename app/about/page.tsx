import { PageShell } from "@/components/page-shell"
import Image from "next/image"
import { Users, Zap, ShieldCheck, Feather } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const teamMembers = [
  { name: "Pluma-chan", role: "Chief Mascot Officer", image: "/images/pluma-chan-flight.png" },
  { name: "Dev Bird Blue", role: "Lead Protocol Developer", image: "/images/developer-bird.png" },
  { name: "Art Bird Orange", role: "Head of Creative", image: "/images/artistic-bird.png" },
  { name: "Community Bird Green", role: "Ecosystem Growth Lead", image: "/images/community-bird.png" },
]

export default function AboutPage() {
  return (
    <PageShell
      title="About Pluma Chain"
      description="Learn about our mission, vision, technology, and the passionate team building the future of featherweight blockchains."
      heroImage="/images/enchanting-flight.png"
      heroImageAlt="Pluma-chan flying over a scenic landscape"
    >
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="prose dark:prose-invert max-w-none text-muted-foreground">
            <p>
              Pluma Chain was born from a simple idea: blockchain technology should be accessible, affordable, and
              delightful to use. We envision a world where decentralized applications are as fast, intuitive, and
              engaging as the best centralized platforms, without compromising on security or decentralization.
            </p>
            <p>
              Our mission is to build an ultra-lightweight Layer 3 solution on Ethereum that empowers developers to
              create next-generation dApps for DeFi, NFTs, and gaming. We aim to achieve this through cutting-edge
              modular rollup technology, a relentless focus on user experience, and a vibrant, anime-inspired community
              that fosters creativity and collaboration.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/blockchain-sakura.png"
              alt="Pluma Chain Vision"
              width={400}
              height={400}
              className="rounded-xl shadow-xl animate-pulse-slow"
            />
          </div>
        </div>
      </section>

      <section className="mb-16 py-12 bg-muted/30 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <Feather className="w-12 h-12 mx-auto mb-3 text-primary" />,
              title: "Lightweight Efficiency",
              desc: "Striving for minimal overhead and maximum performance.",
            },
            {
              icon: <Zap className="w-12 h-12 mx-auto mb-3 text-primary" />,
              title: "Blazing Speed",
              desc: "Ensuring transactions are fast and user experiences are seamless.",
            },
            {
              icon: <ShieldCheck className="w-12 h-12 mx-auto mb-3 text-primary" />,
              title: "Ethereum Security",
              desc: "Leveraging the robustness of Ethereum L1 for ultimate peace of mind.",
            },
            {
              icon: <Users className="w-12 h-12 mx-auto mb-3 text-primary" />,
              title: "Community First",
              desc: "Building with and for our vibrant, creative community.",
            },
            {
              icon: (
                <Image
                  src="/images/feather-logo.png"
                  alt="Anime Icon"
                  width={48}
                  height={48}
                  className="mx-auto mb-3"
                />
              ),
              title: "Anime-Inspired Joy",
              desc: "Infusing fun and creativity into the blockchain experience.",
            },
            {
              icon: <Feather className="w-12 h-12 mx-auto mb-3 text-primary" />,
              title: "Open & Transparent",
              desc: "Committing to open-source principles and clear communication.",
            },
          ].map((value) => (
            <div key={value.title} className="p-4">
              {value.icon}
              <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Meet the Flock (Team)</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="text-center bg-card/70 backdrop-blur-sm border-border/50 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <CardHeader>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-2 border-primary shadow-lg"
                />
                <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-semibold">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
