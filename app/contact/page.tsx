import { PageShell } from "@/components/page-shell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Mail, MessageSquare, HelpCircle } from "lucide-react"

export default function ContactPage() {
  // Basic form handling would require state and a submit handler
  // For this example, it's a static form.
  return (
    <PageShell
      title="Get in Touch with Pluma Chain"
      description="Have questions, partnership inquiries, or just want to say hi? We'd love to hear from you!"
      heroImage="/images/community-bird.png"
      heroImageAlt="Contact Pluma Chain"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-muted-foreground">
                Full Name
              </Label>
              <Input id="name" type="text" placeholder="Pluma Chan" className="bg-background/50 border-border/70" />
            </div>
            <div>
              <Label htmlFor="email" className="text-muted-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="hello@pluma.io"
                className="bg-background/50 border-border/70"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="text-muted-foreground">
                Subject
              </Label>
              <Input
                id="subject"
                type="text"
                placeholder="Partnership Inquiry"
                className="bg-background/50 border-border/70"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-muted-foreground">
                Your Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your awesome idea..."
                rows={5}
                className="bg-background/50 border-border/70"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message
            </Button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary">Other Ways to Connect</h2>
          <div className="space-y-6">
            <Card className="bg-card/70 backdrop-blur-sm border-border/50">
              <CardHeader className="flex flex-row items-center space-x-3">
                <Mail className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl text-foreground">General Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">For general questions or information:</p>
                <a href="mailto:info@pluma.io" className="text-primary hover:underline">
                  info@pluma.io
                </a>
              </CardContent>
            </Card>
            <Card className="bg-card/70 backdrop-blur-sm border-border/50">
              <CardHeader className="flex flex-row items-center space-x-3">
                <MessageSquare className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl text-foreground">Community & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Join our Discord for live support and community chat:</p>
                <a
                  href="https://discord.gg/YOUR_DISCORD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Pluma Chain Discord
                </a>
              </CardContent>
            </Card>
            <Card className="bg-card/70 backdrop-blur-sm border-border/50">
              <CardHeader className="flex flex-row items-center space-x-3">
                <HelpCircle className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl text-foreground">Press & Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">For media inquiries or press kits:</p>
                <a href="mailto:press@pluma.io" className="text-primary hover:underline">
                  press@pluma.io
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/pluma-chan-flight.png"
              alt="Pluma-chan"
              width={200}
              height={200}
              className="opacity-80"
            />
          </div>
        </section>
      </div>
    </PageShell>
  )
}
