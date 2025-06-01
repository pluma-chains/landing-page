import { PageShell } from "@/components/page-shell"

export default function TermsOfServicePage() {
  return (
    <PageShell
      title="Terms of Service"
      description="Please read these Terms of Service carefully before using Pluma Chain."
    >
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">Last updated: October 26, 2025</p>

        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing or using the Pluma Chain website ([YourWebsite.com]), its associated services, software, and
          blockchain (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you
          do not agree to these Terms, do not use the Services.
        </p>

        <h2>2. Changes to Terms or Services</h2>
        <p>
          We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting
          the modified Terms on the Site or through other communications. It’s important that you review the Terms
          whenever we modify them because if you continue to use the Services after we have posted modified Terms on the
          Site, you are indicating to us that you agree to be bound by the modified Terms.
        </p>

        <h2>3. Who May Use the Services</h2>
        <p>
          You may use the Services only if you are 18 years or older and capable of forming a binding contract with
          Pluma Chain and are not barred from using the Services under applicable law.
        </p>

        <h2>4. Use of the Blockchain</h2>
        <p>
          Pluma Chain is a Layer 3 blockchain. Your interactions with the Pluma Chain blockchain, including transactions
          you submit, are your own responsibility. Transactions on the blockchain are irreversible. We do not control
          the blockchain network and cannot reverse or modify transactions.
        </p>
        <p>
          You are responsible for the security of your wallet, private keys, and any assets you hold or transact on
          Pluma Chain.
        </p>

        <h2>5. Risks</h2>
        <p>
          You acknowledge and agree that there are risks associated with using blockchain technology, cryptocurrencies,
          and decentralized systems. These risks include, but are not limited to, volatility of prices, smart contract
          vulnerabilities, regulatory uncertainty, and technological risks. You agree to assume all such risks.
        </p>

        <h2>6. Disclaimers</h2>
        <p>
          THE SERVICES ARE PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY
          DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR
          NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          NEITHER PLUMA CHAIN NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING THE SERVICES WILL BE
          LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA
          OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES
          ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE THE SERVICES.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms and any action related thereto will be governed by the laws of [Your Jurisdiction] without regard
          to its conflict of laws provisions.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at:{" "}
          <a href="mailto:legal@pluma.io" className="text-primary hover:underline">
            legal@pluma.io
          </a>
        </p>
      </div>
    </PageShell>
  )
}
