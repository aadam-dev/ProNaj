import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ProNaj International",
  description: "Privacy Policy for ProNaj International LLC",
};

export default function PrivacyPage() {
  return (
    <div className="bg-concrete py-20 dark:bg-obsidian lg:py-32">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
          Legal
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-obsidian dark:text-concrete">
          Privacy Policy
        </h1>
        <p className="mt-2 font-mono text-sm text-steel">
          Last updated: January 1, 2026
        </p>

        <div className="prose prose-slate mt-12 max-w-none dark:prose-invert">
          <h2 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
            1. Introduction
          </h2>
          <p className="text-steel dark:text-steel-light">
            ProNaj International LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your
            privacy and is committed to protecting your personal data. This
            privacy policy explains how we collect, use, and safeguard your
            information when you visit our website or use our services.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            2. Information We Collect
          </h2>
          <p className="text-steel dark:text-steel-light">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-steel dark:text-steel-light">
            <li>Contact information (name, email, phone number)</li>
            <li>Business information (company name, job title)</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Usage data (pages visited, time spent on site)</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            3. How We Use Your Information
          </h2>
          <p className="text-steel dark:text-steel-light">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-steel dark:text-steel-light">
            <li>Provide and improve our services</li>
            <li>Respond to inquiries and support requests</li>
            <li>Send relevant communications about our services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            4. Data Security
          </h2>
          <p className="text-steel dark:text-steel-light">
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            5. Your Rights
          </h2>
          <p className="text-steel dark:text-steel-light">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 text-steel dark:text-steel-light">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            6. Contact Us
          </h2>
          <p className="text-steel dark:text-steel-light">
            For privacy-related inquiries, please contact us at:
          </p>
          <p className="font-mono text-sm text-steel dark:text-steel-light">
            privacy@pronaj.com
            <br />
            ProNaj International LLC
            <br />
            1209 Orange Street, Wilmington, DE 19801
          </p>
        </div>
      </div>
    </div>
  );
}
