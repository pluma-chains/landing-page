import { PageShell } from "@/components/page-shell"

export default function PrivacyPolicyPage() {
  return (
    <PageShell title="Privacy Policy" description="Learn how Pluma Chain handles your data and respects your privacy.">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground">Last updated: October 26, 2025</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Pluma Chain ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
          [YourWebsite.com] (the "Site") and use our blockchain services (the "Services"). Please read this privacy
          policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or
          use the services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site and
          through the Services includes:
        </p>
        <h3>Personal Data</h3>
        <p>
          Personally identifiable information, such as your name, shipping address, email address, and telephone number,
          and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to
          us when you register with the Site or our Services or when you choose to participate in various activities
          related to the Site and our Services, such as online chat and message boards.
        </p>
        <h3>Derivative Data</h3>
        <p>
          Information our servers automatically collect when you access the Site, such as your IP address, your browser
          type, your operating system, your access times, and the pages you have viewed directly before and after
          accessing the Site. If you are using our mobile application, this information may also include your device
          name and type, your operating system, your phone number, your country, your likes and replies to a post, and
          other interactions with the application and other users via server log files, as well as any other information
          you choose to provide.
        </p>
        <h3>Blockchain Data</h3>
        <p>
          Publicly available information on the Pluma Chain blockchain and Ethereum blockchain, such as your wallet
          address and transaction history. This data is inherently public and not controlled by Pluma Chain.
        </p>

        <h2>3. Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized
          experience. Specifically, we may use information collected about you via the Site or our Services to...
        </p>
        {/* Add more specific uses here */}
        <ul>
          <li>Create and manage your account.</li>
          <li>Email you regarding your account or order.</li>
          <li>Enable user-to-user communications.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site and our Services.</li>
          {/* ... more list items ... */}
        </ul>

        <h2>4. Disclosure of Your Information</h2>
        <p>
          We may share information we have collected about you in certain situations. Your information may be disclosed
          as follows...
        </p>
        {/* Add more specific disclosures here */}

        <h2>5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information.
          While we have taken reasonable steps to secure the personal information you provide to us, please be aware
          that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission
          can be guaranteed against any interception or other type of misuse.
        </p>

        <h2>6. Policy for Children</h2>
        <p>
          We do not knowingly solicit information from or market to children under the age of 13. If you become aware of
          any data we have collected from children under age 13, please contact us using the contact information
          provided below.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:{" "}
          <a href="mailto:privacy@pluma.io" className="text-primary hover:underline">
            privacy@pluma.io
          </a>
        </p>
      </div>
    </PageShell>
  )
}
