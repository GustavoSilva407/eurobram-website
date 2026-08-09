import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Cookie Policy" updated="July 2026">
      <div>
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help websites function
          properly and, where permitted, help us understand how the site is used.
        </p>
      </div>

      <div>
        <h2>Essential Cookies</h2>
        <p>
          These cookies are necessary for the website to function (for example, remembering your cookie consent
          choice) and cannot be disabled. They do not require consent under applicable law.
        </p>
      </div>

      <div>
        <h2>Optional Cookies</h2>
        <p>
          With your consent, we may use additional cookies to understand aggregate site usage and improve the
          website experience. You can accept or decline these using the cookie banner shown on your first visit, or
          by clearing your browser's stored consent to see the banner again.
        </p>
      </div>

      <div>
        <h2>Managing Cookies</h2>
        <p>
          Most browsers let you control cookies through their settings. Restricting cookies may affect the
          functionality of this and other websites you visit.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be directed to {company.name} at{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
    </LegalLayout>
  );
}
