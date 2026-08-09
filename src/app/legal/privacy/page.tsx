import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="July 2026">
      <div>
        <h2>1. Controller</h2>
        <p>
          {company.name}, {company.address.street}, {company.address.postal} {company.address.city},{" "}
          {company.address.country}. Email: <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </div>

      <div>
        <h2>2. Data We Process</h2>
        <p>We process personal data in the following situations:</p>
        <ul>
          <li>When you submit our contact or inquiry form (name, company, email, phone, message content).</li>
          <li>When you subscribe to our newsletter (email address).</li>
          <li>When you contact us via WhatsApp, phone or email directly.</li>
          <li>Technical data automatically generated when you browse our website (e.g. via cookies, see our Cookie Policy).</li>
        </ul>
      </div>

      <div>
        <h2>3. Purpose and Legal Basis</h2>
        <p>
          We process this data to respond to inquiries, provide requested information, manage the newsletter, and
          operate and improve this website. The legal basis is Art. 6(1)(b) GDPR (contract / pre-contractual
          measures) for inquiries, and Art. 6(1)(a) GDPR (consent) for the newsletter and non-essential cookies.
        </p>
      </div>

      <div>
        <h2>4. International Transfers</h2>
        <p>
          As a company coordinating procurement between Germany, the EU and Brazil, certain
          order-related data may need to be shared with our Brazilian partner network to fulfil your request.
          Where this involves a transfer outside the EU/EEA, we take appropriate safeguards as required by GDPR.
        </p>
      </div>

      <div>
        <h2>5. Retention</h2>
        <p>
          We retain personal data only as long as necessary for the purposes described above, or as required by
          applicable statutory retention obligations.
        </p>
      </div>

      <div>
        <h2>6. Your Rights</h2>
        <p>
          Under GDPR you have the right to access, rectify, erase or restrict processing of your data, to object to
          processing, and to data portability. You may withdraw consent at any time. To exercise these rights,
          contact us at <a href={`mailto:${company.email}`}>{company.email}</a>. You also have the right to lodge a
          complaint with a supervisory authority.
        </p>
      </div>

      <div>
        <h2>7. Contact</h2>
        <p>
          Questions about this policy can be directed to {company.contactPerson} at{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a> or {company.phone}.
        </p>
      </div>
    </LegalLayout>
  );
}
