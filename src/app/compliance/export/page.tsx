import { Metadata } from "next";
import { Shield, FileCheck, Globe, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Export Compliance | Pronaj International",
  description: "Export compliance and regulatory information for Pronaj International",
};

const certifications = [
  {
    icon: Shield,
    title: "US Export Compliance",
    description: "Fully compliant with US Bureau of Industry and Security (BIS) regulations",
  },
  {
    icon: FileCheck,
    title: "Phytosanitary Certification",
    description: "All agricultural exports meet international phytosanitary standards",
  },
  {
    icon: Globe,
    title: "EU Import Standards",
    description: "Products meet European Union import requirements and certifications",
  },
  {
    icon: Scale,
    title: "Trade Compliance",
    description: "Adherence to international trade laws and customs regulations",
  },
];

export default function ExportCompliancePage() {
  return (
    <div className="bg-concrete py-20 dark:bg-obsidian lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
          Compliance
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-obsidian dark:text-concrete">
          Export Compliance
        </h1>
        <p className="mt-4 text-lg text-steel dark:text-steel-light">
          Pronaj International maintains rigorous compliance standards for all
          export operations, ensuring legal and ethical trade practices across
          all markets.
        </p>

        {/* Certifications Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="border-2 border-obsidian/10 bg-white p-6 dark:border-concrete/10 dark:bg-obsidian"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-obsidian/10 text-safety dark:border-concrete/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-obsidian dark:text-concrete">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-steel dark:text-steel-light">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Information */}
        <div className="mt-16 space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold text-obsidian dark:text-concrete">
              Our Compliance Framework
            </h2>
            <p className="mt-4 text-steel dark:text-steel-light">
              As a Ghana-registered business, Pronaj International operates under a
              compliance framework that addresses both local and international
              trade regulations, adding jurisdiction-specific structure as export
              markets require.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
              Export Control Classification
            </h3>
            <p className="mt-4 text-steel dark:text-steel-light">
              Our primary export products (cocopeat and agricultural produce)
              are classified under EAR99, meaning they do not require specific
              export licenses for most destinations. However, we maintain
              screening procedures to ensure compliance with all applicable
              sanctions and embargoes.
            </p>
          </section>

          <section>
            <h3 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
              Documentation
            </h3>
            <p className="mt-4 text-steel dark:text-steel-light">
              All exports include:
            </p>
            <ul className="mt-2 list-disc pl-6 text-steel dark:text-steel-light">
              <li>Commercial Invoice</li>
              <li>Packing List</li>
              <li>Bill of Lading</li>
              <li>Certificate of Origin</li>
              <li>Phytosanitary Certificate (for agricultural products)</li>
              <li>Quality Inspection Certificate</li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
              Contact Compliance Team
            </h3>
            <p className="mt-4 text-steel dark:text-steel-light">
              For compliance inquiries or to request documentation, please
              contact our compliance team:
            </p>
            <p className="mt-2 font-mono text-sm text-steel dark:text-steel-light">
              compliance@pronaj.com
              <br />
              +233 30 255 0100
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
