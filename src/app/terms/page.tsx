import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Pronaj International",
  description: "Terms of Service for Pronaj International LLC",
};

export default function TermsPage() {
  return (
    <div className="bg-concrete py-20 dark:bg-obsidian lg:py-32">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
          Legal
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-obsidian dark:text-concrete">
          Terms of Service
        </h1>
        <p className="mt-2 font-mono text-sm text-steel">
          Last updated: January 1, 2026
        </p>

        <div className="prose prose-slate mt-12 max-w-none dark:prose-invert">
          <h2 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
            1. Acceptance of Terms
          </h2>
          <p className="text-steel dark:text-steel-light">
            By accessing or using the services provided by Pronaj International
            LLC, you agree to be bound by these Terms of Service. If you do not
            agree to these terms, please do not use our services.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            2. Services
          </h2>
          <p className="text-steel dark:text-steel-light">
            Pronaj International provides digital services, modular living
            solutions, and agricultural trade services. Specific terms may apply
            to individual services and will be provided at the time of
            engagement.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            3. User Responsibilities
          </h2>
          <p className="text-steel dark:text-steel-light">
            You agree to:
          </p>
          <ul className="list-disc pl-6 text-steel dark:text-steel-light">
            <li>Provide accurate information</li>
            <li>Use our services lawfully</li>
            <li>Not interfere with our systems or other users</li>
            <li>Maintain the confidentiality of your account</li>
          </ul>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            4. Intellectual Property
          </h2>
          <p className="text-steel dark:text-steel-light">
            All content, trademarks, and intellectual property on this website
            are owned by Pronaj International LLC. You may not use, reproduce,
            or distribute our content without prior written permission.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            5. Limitation of Liability
          </h2>
          <p className="text-steel dark:text-steel-light">
            To the maximum extent permitted by law, Pronaj International shall
            not be liable for any indirect, incidental, special, consequential,
            or punitive damages arising from your use of our services.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            6. Governing Law
          </h2>
          <p className="text-steel dark:text-steel-light">
            These terms shall be governed by and construed in accordance with
            the laws of the State of Delaware, United States, without regard to
            its conflict of law provisions.
          </p>

          <h2 className="mt-8 font-heading text-xl font-bold text-obsidian dark:text-concrete">
            7. Contact
          </h2>
          <p className="text-steel dark:text-steel-light">
            For questions about these terms, please contact:
          </p>
          <p className="font-mono text-sm text-steel dark:text-steel-light">
            legal@pronaj.com
            <br />
            Pronaj International LLC
            <br />
            1209 Orange Street, Wilmington, DE 19801
          </p>
        </div>
      </div>
    </div>
  );
}
