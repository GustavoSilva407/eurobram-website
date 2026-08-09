import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Imprint" };

export default function ImprintPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Imprint" updated="July 2026">
      <div>
        <h2>Information pursuant to § 5 TMG</h2>
        <p>
          {company.name}
          <br />
          {company.address.street}
          <br />
          {company.address.postal} {company.address.city}
          <br />
          {company.address.country}
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Phone: {company.phone}
          <br />
          Fax: {company.fax}
          <br />
          Email: <a href={`mailto:${company.email}`}>{company.email}</a>
          <br />
          Contact person: {company.contactPerson}
        </p>
      </div>

      <div>
        <h2>Responsible for Content</h2>
        <p>
          {company.contactPerson}, {company.name}, {company.address.street}, {company.address.postal}{" "}
          {company.address.city}, {company.address.country}
        </p>
      </div>

      <div>
        <h2>EU Dispute Resolution</h2>
        <p>
          The European Commission provides a platform for online dispute resolution (OS):{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          . We are not obliged and generally not willing to participate in dispute resolution proceedings before a
          consumer arbitration board.
        </p>
      </div>

      <div>
        <h2>Liability for Content</h2>
        <p>
          As a service provider, we are responsible for our own content on these pages in accordance with general
          law. We are not obliged to monitor transmitted or stored third-party information or to investigate
          circumstances that indicate illegal activity. Obligations to remove or block the use of information under
          general law remain unaffected.
        </p>
      </div>

      <div>
        <h2>Liability for Links</h2>
        <p>
          Our website contains links to external third-party websites over whose content we have no influence. We
          cannot accept any liability for this third-party content. The respective provider or operator of the
          linked pages is always responsible for their content.
        </p>
      </div>
    </LegalLayout>
  );
}
