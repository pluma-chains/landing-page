import { Coins, Palette, Gamepad2, Star, Building, BookOpen, Github, FileCode, Code } from "lucide-react"

export const tvlData = [
  { name: "Week 1", TVL: 1.2, volume: 0.8, users: 150, transactions: 1200 },
  { name: "Week 2", TVL: 1.8, volume: 1.2, users: 280, transactions: 2100 },
  { name: "Week 3", TVL: 2.1, volume: 1.5, users: 420, transactions: 3200 },
  { name: "Week 4", TVL: 2.8, volume: 2.1, users: 650, transactions: 4800 },
  { name: "Week 5", TVL: 3.5, volume: 2.8, users: 890, transactions: 6500 },
  { name: "Week 6", TVL: 4.2, volume: 3.2, users: 1200, transactions: 8200 },
  { name: "Week 7", TVL: 5.1, volume: 3.8, users: 1580, transactions: 10100 },
  { name: "Week 8", TVL: 6.3, volume: 4.5, users: 1950, transactions: 12800 },
]

export const dailyTxData = [
  { day: "Mon", transactions: 11500, fees: 0.0008 },
  { day: "Tue", transactions: 13200, fees: 0.0007 },
  { day: "Wed", transactions: 14800, fees: 0.0009 },
  { day: "Thu", transactions: 12100, fees: 0.0006 },
  { day: "Fri", transactions: 16200, fees: 0.0008 },
  { day: "Sat", transactions: 18500, fees: 0.0007 },
  { day: "Sun", transactions: 15800, fees: 0.0009 },
]

export const PlumaColors = {
  sakuraPink: "#FFB7C5",
  matchaGreen: "#98FB98",
  animeSkyBlue: "#7EC8E3",
  goldfishOrange: "#FF4500",
  royalIndigo: "#5D3FD3",
  neonPurple: "#9D4EDD",
  electricBlue: "#00D4FF",
}

export const useCases = [
  { name: "DeFi", icon: Coins, desc: "Decentralized Finance" },
  { name: "NFTs", icon: Palette, desc: "Digital Collectibles" },
  { name: "Gaming", icon: Gamepad2, desc: "Blockchain Games" },
  { name: "Collectibles", icon: Star, desc: "Rare Items" },
  { name: "Creative DAOs", icon: Building, desc: "Creator Communities" },
]

export const developerResources = [
  {
    icon: BookOpen,
    text: "Comprehensive Documentation",
    href: "/docs",
    desc: "Complete guides, tutorials, and API references",
  },
  {
    icon: Github,
    text: "Open Source Repository",
    href: "https://github.com/YOUR_ORG/PLUMA_CHAIN",
    desc: "Contribute to our growing codebase",
  },
  {
    icon: FileCode,
    text: "Deploy Your First dApp",
    href: "/docs/tutorial/deploy-dapp",
    desc: "Step-by-step deployment tutorial",
  },
  {
    icon: Code,
    text: "SDK & Libraries",
    href: "/docs/sdks",
    desc: "Ready-to-use development tools and libraries",
  },
]

export const communityLinks = [
  {
    icon: "MessageSquare",
    href: "https://discord.gg/YOUR_DISCORD",
    label: "Discord",
    color: "from-indigo-500 to-purple-500",
    desc: "Real-time chat & support",
    members: "15,000+ members",
  },
  {
    icon: "Twitter",
    href: "https://twitter.com/YOUR_TWITTER",
    label: "Twitter",
    color: "from-blue-400 to-cyan-400",
    desc: "Latest news & updates",
    members: "25,000+ followers",
  },
  {
    icon: "Github",
    href: "https://github.com/YOUR_ORG/PLUMA_CHAIN",
    label: "GitHub",
    color: "from-gray-600 to-gray-800",
    desc: "Open source development",
    members: "500+ contributors",
  },
  {
    icon: "Users2",
    href: "/forum",
    label: "Forum",
    color: "from-pink-500 to-rose-500",
    desc: "Community discussions",
    members: "8,000+ posts",
  },
]

export const blogPosts = [
  {
    title: "Anime Adventures in L3 Scaling",
    date: "Dec 15, 2025",
    excerpt:
      "Discover how Pluma Chain is revolutionizing the L3 space with its unique approach to scalability and user experience that combines cutting-edge technology with delightful anime aesthetics.",
    image: "/images/pluma-chan-flight.png",
    readTime: "5 min read",
  },
  {
    title: "Building the Future of DeFi",
    date: "Dec 12, 2025",
    excerpt:
      "Explore how our featherweight architecture enables next-generation DeFi protocols with unprecedented efficiency and user-friendly interfaces.",
    image: "/images/pluma-chan-soars.png",
    readTime: "8 min read",
  },
  {
    title: "Community Spotlight: NFT Artists",
    date: "Dec 10, 2025",
    excerpt:
      "Featuring amazing artists from our community and their beautiful NFT collections on Pluma Chain, showcasing the creative potential of our platform.",
    image: "/images/artistic-bird.png",
    readTime: "6 min read",
  },
]
