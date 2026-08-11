// Canonical English source dictionary. de.ts and pt.ts must match this exact shape
// (enforced via `Dictionary = typeof en`) — translate string VALUES only.
// Do not translate: slugs, icon keys, dates (ISO), hrefs, {{placeholder}} tokens themselves.

export const en = {
  dateLocale: "en-US",

  meta: {
    titleDefault: "EUROBRAM GmbH — Laboratory Materials Procurement, Germany ⇄ Brazil",
    titleTemplate: "%s — EUROBRAM GmbH",
    description:
      "EUROBRAM helps pharmaceutical and agrochemical companies source laboratory materials — HPLC columns, consumables and specialty equipment — from qualified suppliers across Europe.",
    keywords: [
      "laboratory materials Brazil",
      "HPLC columns Brazil",
      "laboratory consumables import Brazil",
      "chromatography consumables Brazil",
      "specialty laboratory equipment Brazil",
    ],
    ogTitle: "EUROBRAM GmbH — Laboratory Materials Procurement",
    ogDescription: "Laboratory materials sourcing connecting Europe and the Brazilian pharmaceutical market.",
    schemaIndustry: "Laboratory Materials Supply for Pharmaceutical and Agrochemical Companies",
  },

  nav: {
    home: "Home",
    about: "About",
    aboutCompany: "Company",
    aboutCompanyDesc: "Who we are and what we do",
    aboutMission: "Mission",
    aboutMissionDesc: "Quality and reliability",
    aboutTeam: "Our Team",
    aboutTeamDesc: "Germany and Brazil",
    aboutStory: "Our Story",
    aboutStoryDesc: "How EUROBRAM began",
    services: "Services",
    industries: "Industries",
    resources: "Resources",
    resourcesInsights: "Insights / Blog",
    resourcesInsightsDesc: "Articles on laboratory materials and equipment",
    resourcesFaq: "FAQ",
    resourcesFaqDesc: "Common procurement questions",
    contact: "Contact",
    requestInquiry: "Request an Inquiry",
    search: "Search",
    toggleMenu: "Toggle menu",
    toggleTheme: "Toggle dark mode",
  },

  footer: {
    blurb: "Laboratory materials supplier connecting pharmaceutical and agrochemical companies across Europe and Brazil.",
    companyCol: "Company",
    companyLinks: { about: "About", story: "Our Story", services: "Services", industries: "Industries" },
    resourcesCol: "Resources",
    resourcesLinks: { insights: "Insights", faq: "FAQ", brochure: "Request a Brochure", contact: "Contact" },
    legalCol: "Legal",
    legalLinks: { privacy: "Privacy Policy", imprint: "Imprint", cookies: "Cookie Policy" },
    newsletterTitle: "Newsletter",
    newsletterBlurb: "Laboratory materials insights for the Brazilian pharmaceutical market, occasionally in your inbox.",
    emailPlaceholder: "you@company.com",
    signUp: "Sign up",
    signedUp: "Thanks — you're on the list.",
    whatsapp: "WhatsApp",
    linkedinLabel: "EUROBRAM on LinkedIn",
    rightsReserved: "All rights reserved.",
    specialistsLabel: "Laboratory Materials Specialists",
    industriesServed: "industries served",
    germanyBrazil: "Germany + Brazil",
  },

  cookieBanner: {
    text: "We use cookies to operate this site and understand how it's used. Read our",
    cookiePolicyLink: "Cookie Policy",
    essentialOnly: "Essential only",
    acceptAll: "Accept all",
  },

  searchModal: {
    placeholder: "Search services, industries, insights…",
    noResults: 'No results for "{{query}}".',
    toSelect: "to select",
    escToClose: "Esc to close",
    close: "Close search",
    groups: { page: "Page", service: "Service", industry: "Industry", insight: "Insight", faq: "FAQ" },
  },

  home: {
    hero: {
      badge: "Germany ⇄ Brazil · Pharmaceutical & Agrochemical Procurement",
      title: "Laboratory Materials Sourcing for the Brazilian Pharmaceutical Market",
      subtitle:
        "When laboratory materials are hard to find, EUROBRAM sources them — connecting pharmaceutical, agrochemical and laboratory organizations in Brazil to qualified European suppliers, with every item verified against your specification before delivery.",
      ctaPrimary: "Request Sourcing Assistance",
      ctaSecondary: "Our Services",
      trust1: "Weimar, Germany HQ",
      trust2: "Brazil Partner Network",
      trust3: "Direct Manufacturer Access",
      visualCertTitle: "CERTIFICATE OF ANALYSIS",
      visualCertSubtitle: "Verified & Compliant",
      visualColumnLabel: "HPLC COLUMN",
      visualGermanyLabel: "GERMANY",
      visualBrazilLabel: "BRAZIL",
    },
    aboutPreview: {
      eyebrow: "About EUROBRAM",
      title: "Built by people who understood why procurement kept stalling.",
      description:
        "EUROBRAM was founded in Weimar after conversations with pharmaceutical and agrochemical companies revealed a recurring problem: procurement from Brazil was slowed not by distance, but by unreliable sourcing and a lack of customer focus. We built our operation to solve exactly that.",
      readStory: "Read our full story",
      cards: [
        {
          title: "Company",
          text: "A dedicated laboratory materials partner for pharmaceutical and agrochemical companies operating between Europe and Brazil.",
        },
        {
          title: "Mission",
          text: "“Quality and Results.” Sourcing the right material the first time is what makes performance measurable.",
        },
        {
          title: "Germany + Brazil",
          text: "Teams based in Weimar, Germany and in Brazil, supporting customers on both ends of every order.",
        },
      ],
    },
    servicesFeature: {
      eyebrow: "What We Do",
      title: "Laboratory materials, sourced and delivered — nothing else in the way.",
      description:
        "EUROBRAM focuses on one thing: getting the laboratory materials pharmaceutical and agrochemical companies need into Brazil, compliantly and on schedule.",
      exploreLink: "Explore Laboratory Materials",
    },
    industriesGrid: {
      eyebrow: "Industries Served",
      title: "Trusted across the pharmaceutical and life-science value chain.",
    },
    whyChoose: {
      eyebrow: "Why Choose EUROBRAM",
      title: "German precision. Brazilian market knowledge. One accountable partner.",
      capabilityCol: "Capability",
      eurobramCol: "EUROBRAM",
      brokerCol: "General Broker",
      rows: [
        "Certified equipment and consumables",
        "Dedicated teams in Germany and Brazil",
        "Direct access to European supplier network",
        "Materials verified against specification",
        "Named specialist for every inquiry",
        "Support for hard-to-source, difficult items",
        "Transparent, proactive shipment communication",
      ],
    },
    process: {
      eyebrow: "How It Works",
      title: "Four steps from inquiry to delivery.",
      description: "Every order moves through the same disciplined process — from your specification to a verified match in your hands.",
    },
    procurementCategories: {
      eyebrow: "Procurement Categories",
      title: "Not a catalog — a sourcing network.",
      description: "We don't hold inventory for sale. We identify, qualify and move the specific materials your laboratory or production line needs.",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What partners say about working with us.",
      items: [
        {
          quote: "Every shipment has matched the specification sheet exactly — no substitutions, no surprises when it reaches our bench.",
          role: "Quality Control Director",
          org: "Pharmaceutical Manufacturer",
        },
        {
          quote: "We had an HPLC column that two other suppliers couldn't locate. EUROBRAM found it and got it to us without the usual back-and-forth.",
          role: "Laboratory Manager",
          org: "Contract Research Organization",
        },
        {
          quote: "Having a single point of contact for sourcing simplified a process that used to involve three separate vendors.",
          role: "Procurement Lead",
          org: "Agrochemical Company",
        },
      ],
    },
    faqPreview: {
      eyebrow: "FAQ",
      title: "Answers before you have to ask.",
      viewAll: "View all questions",
    },
    insightsPreview: {
      eyebrow: "Latest Insights",
      title: "Notes on laboratory materials and equipment.",
      description: "Practical perspective from a team that sources this corridor every day.",
      allInsights: "All insights",
      readArticle: "Read article",
    },
    cta: {
      title: "Need laboratory materials delivered to Brazil?",
      description: "Let's discuss your requirements — sourcing, specifications, or availability.",
      button: "Contact EUROBRAM",
    },
  },

  about: {
    metaDescription:
      "How EUROBRAM was founded in Weimar, Germany, and how our teams in Germany and Brazil work together to source laboratory materials for the Brazilian pharmaceutical market.",
    hero: {
      eyebrow: "About EUROBRAM",
      title: "A laboratory materials partner built around one corridor, done properly.",
      description:
        "We don't try to be everything to everyone. EUROBRAM exists to source laboratory materials for pharmaceutical and agrochemical companies between Europe and Brazil — reliably, predictably, and with a named person accountable at every step.",
    },
    company: {
      eyebrow: "Company",
      title: "A service provider for the pharmaceutical and agrochemical industry.",
      description:
        "Our typical customer develops or manufactures products for the Brazilian market and needs urgently required laboratory items sourced quickly. Our core competence is the supply of laboratory materials — HPLC columns, consumables and specialty equipment — for and from Brazil.",
    },
    values: [
      { title: "Product Expertise", text: "Deep familiarity with the laboratory equipment and consumables our customers rely on." },
      { title: "Customer Focus", text: "The problem we were founded to solve — a lack of customer focus in procurement — stays central to how we operate." },
      { title: "Results", text: "Reliability is the method; measurable, on-time delivery is the outcome we're accountable for." },
    ],
    mission: {
      eyebrow: "Mission",
      quote: "“Quality and Results.”",
      text: "We believe that sourcing the right laboratory material — verified, reliable, and exactly to specification — is what creates real value for our customers. Materials that don't meet spec aren't a shortcut; they're a problem waiting to surface in your laboratory.",
    },
    story: {
      eyebrow: "Our Story",
      title: "How EUROBRAM began.",
      phases: [
        {
          label: "The Problem",
          title: "Procurement kept stalling — and it wasn't about distance",
          text: "Conversations with pharmaceutical and agrochemical companies kept surfacing the same issue: sourcing laboratory items from Brazil was slow, not because of geography, but because of unreliable suppliers and providers who weren't focused on the customer's actual timeline.",
        },
        {
          label: "The Founding",
          title: "EUROBRAM GmbH is established in Weimar",
          text: "EUROBRAM was founded in Weimar, Germany to close that gap — combining deep product knowledge with a genuine focus on the customer, rather than treating sourcing as an afterthought.",
        },
        {
          label: "Today",
          title: "A bilateral team built around one corridor",
          text: "We operate with dedicated teams in Germany and Brazil, focused specifically on the Germany–Brazil pharmaceutical and agrochemical corridor rather than spreading thin across unrelated markets.",
        },
      ],
    },
    team: {
      eyebrow: "Our Team",
      title: "Well-trained, experienced teams in Germany and Brazil.",
      description: "A named specialist on each side of the shipment — not a support queue.",
      germanyLabel: "Germany · Weimar",
      germanyDesc: "Primary contact for procurement and general inquiries from our Weimar headquarters.",
      brazilLabel: "Brazil · Partner Network",
      brazilDesc: "Coordinates local delivery and support on the Brazilian side of every order.",
    },
  },

  services: {
    backHome: "← Home",
    whatCovers: "What this covers",
    specificRequirementTitle: "Have a specific requirement?",
    specificRequirementText: "Tell us what you need sourced or shipped and we'll respond with a realistic assessment — including anything we think won't work.",
    contactButton: "Contact EUROBRAM",
    requestInquiry: "Request an Inquiry",
    data: [
      {
        slug: "laboratory-materials",
        name: "Laboratory Materials",
        short: "Consumables, columns and specialty equipment sourced on demand from qualified European suppliers.",
        description:
          "From HPLC columns to laboratory consumables and specialty equipment, EUROBRAM identifies and procures the materials pharmaceutical and agrochemical laboratories need — including items that are difficult to source through standard channels.",
        points: [
          "HPLC columns and chromatography consumables",
          "General laboratory consumables and specialty equipment",
          "Sourcing of hard-to-find or discontinued items",
          "Support for subsidiaries of international manufacturers",
          "Direct relationships with qualified European manufacturers",
          "Materials verified against your specification before delivery",
        ],
        icon: "package",
      },
    ],
  },

  industries: {
    metaDescription:
      "EUROBRAM serves pharmaceutical, biotechnology, agrochemical, research laboratory, quality control, R&D, university and CRO organizations across the Germany–Brazil corridor.",
    hero: {
      eyebrow: "Industries Served",
      title: "Built for organizations that can't afford a procurement delay.",
      description: "Every industry below shares the same constraint: specialized materials, tight timelines, and zero tolerance for the wrong part showing up.",
    },
    data: [
      { name: "Pharmaceutical", description: "Manufacturers sourcing laboratory materials for the Brazilian market." },
      { name: "Biotechnology", description: "Biotech developers requiring specialty lab equipment and consumables." },
      { name: "Agrochemical", description: "Agrochemical companies sourcing specialty lab equipment and materials." },
      { name: "Research Laboratories", description: "Laboratories needing dependable access to consumables and equipment." },
      { name: "Quality Control", description: "QC departments requiring HPLC columns and lab supplies on schedule." },
      { name: "R&D", description: "Research teams sourcing difficult-to-find lab equipment and parts." },
      { name: "Universities", description: "Academic institutions procuring laboratory materials for research programs." },
      { name: "Contract Research Organizations", description: "CROs coordinating multi-market lab material sourcing." },
    ],
  },

  procurementCategories: [
    "HPLC Columns",
    "Chromatography Consumables",
    "Laboratory Consumables",
    "Specialty Laboratory Equipment",
    "Replacement Parts & Accessories",
    "Difficult-to-Source Products",
  ],

  processSteps: [
    { title: "Inquiry", description: "You share what you need — a product, a specification, or a challenge you're facing sourcing it." },
    { title: "Sourcing", description: "Our network identifies qualified suppliers and available inventory across Europe." },
    { title: "Quality Check", description: "Materials are verified against your specification before they leave the supplier." },
    { title: "Delivery", description: "Materials arrive at your laboratory or facility, ready for use." },
  ],

  trustPoints: [
    { label: "Germany + Brazil", value: "Bilateral Presence", description: "Dedicated teams supporting customers in both regions." },
    { label: "Quality-First", value: "Certified Suppliers", description: "Every item sourced from qualified, reputable manufacturers." },
    { label: "Direct Network", value: "European Sourcing", description: "Established relationships with manufacturers and suppliers." },
    { label: "Personal Contact", value: "Direct Support", description: "A named specialist for every inquiry, not a ticket queue." },
  ],

  faq: {
    metaDescription: "Common questions about procurement timelines, sourcing hard-to-find materials and urgent requests for the Germany–Brazil pharmaceutical corridor.",
    hero: {
      eyebrow: "FAQ",
      title: "Frequently asked questions.",
      description: "If your question isn't answered here, it goes straight to a specialist — not a support form.",
    },
    items: [
      {
        q: "How long does procurement typically take?",
        a: "Timelines depend on product availability and supplier lead times at the time of your order. Once we understand your request, we provide a realistic estimate and keep you updated at every stage — we do not commit to timelines we cannot stand behind.",
      },
      {
        q: "Which countries do you serve?",
        a: "Our core corridor is Germany (and wider Europe) to Brazil, supporting pharmaceutical and agrochemical companies operating in or supplying the Brazilian market. Our teams are based in Weimar, Germany and in Brazil.",
      },
      {
        q: "Can you source difficult-to-find products?",
        a: "Yes — sourcing hard-to-find laboratory consumables, discontinued parts and specialty equipment is one of the reasons clients come to EUROBRAM in the first place. We use our supplier network to track down items that standard channels can't locate.",
      },
      {
        q: "Do you support urgent requests?",
        a: "Urgent laboratory needs are a common reason clients contact us. Tell us the constraint and we'll be direct about what's achievable.",
      },
    ],
  },

  insights: {
    metaDescription: "Perspective on laboratory materials, equipment and consumables for pharmaceutical procurement between Europe and Brazil.",
    hero: {
      eyebrow: "Insights",
      title: "Notes from the Germany–Brazil corridor.",
      description: "Practical perspective on laboratory materials and equipment — written by the team that sources this route.",
    },
    allInsightsLink: "← All Insights",
    readArticle: "Read article",
    moreInsights: "More insights",
    posts: [
      {
        slug: "choosing-the-right-hplc-column",
        title: "Choosing the Right HPLC Column for Your Application",
        excerpt: "Column chemistry, particle size and dimensions all shape your results. Here's how to narrow the choice.",
        date: "2026-05-12",
        readTime: "6 min read",
        category: "Laboratory Equipment",
        body: [
          "Selecting an HPLC column starts with the separation you're trying to achieve, not the catalog page you happen to be on. Column chemistry — C18, C8, phenyl, HILIC and beyond — determines which compounds resolve cleanly and which co-elute.",
          "Particle size trades resolution against backpressure and run time. Smaller particles generally sharpen peaks but demand more from your pump and system pressure limits, so the right choice depends as much on your instrument as your sample.",
          "Column dimensions — length and internal diameter — scale sensitivity and solvent consumption. A narrower column concentrates your analyte for better sensitivity, but it also narrows your margin for error in flow rate and dead volume. Matching all three variables to your method, rather than defaulting to what's already on the shelf, is what actually improves results.",
        ],
      },
      {
        slug: "laboratory-consumables-standardize-vs-customize",
        title: "Laboratory Consumables: What to Standardize vs. What to Customize",
        excerpt: "Standardizing every consumable sounds efficient — until it isn't. Here's how to tell the difference.",
        date: "2026-04-03",
        readTime: "5 min read",
        category: "Laboratory Consumables",
        body: [
          "Standardizing consumables across a laboratory reduces ordering complexity and keeps staff working with materials they already know. For general-purpose items — pipette tips, vials, filters — this is almost always the right call.",
          "But some consumables are tied tightly to a specific method or instrument, and forcing a standard substitute can quietly degrade results long before anyone traces the problem back to the supply closet.",
          "The practical rule: standardize what's interchangeable, and treat anything specified by a validated method as fixed. Reviewing your consumables list against your active methods — rather than against a catalog — is the fastest way to find where standardization is saving money and where it's costing accuracy.",
        ],
      },
      {
        slug: "extending-life-of-chromatography-columns",
        title: "Extending the Life of Your Chromatography Columns",
        excerpt: "A column's lifespan is shaped more by daily habits than by the manufacturer's spec sheet.",
        date: "2026-03-18",
        readTime: "5 min read",
        category: "Laboratory Equipment",
        body: [
          "Chromatography columns are a recurring cost for any analytical laboratory, and small habits in daily use have an outsized effect on how long one lasts. Sample cleanliness matters more than almost any other factor — particulates and strongly retained contaminants accumulate at the column head long before performance visibly degrades.",
          "Guard columns exist specifically to absorb this wear, and skipping them to save a small upfront cost is one of the most common ways labs shorten the life of an expensive column.",
          "Storage conditions between runs matter too. Columns left in the wrong solvent, or cycled through incompatible mobile phases without proper flushing, degrade faster than their rated lifetime would suggest. None of this requires exotic equipment — just consistency in a few specific habits.",
        ],
      },
      {
        slug: "sourcing-hard-to-find-specialty-equipment",
        title: "Sourcing Hard-to-Find Specialty Lab Equipment",
        excerpt: "When a part is discontinued or a supplier has gone quiet, where do you actually look next?",
        date: "2026-02-10",
        readTime: "4 min read",
        category: "Specialty Equipment",
        body: [
          "Every laboratory eventually runs into the same problem: a piece of equipment or a replacement part that the original supplier no longer stocks, and no obvious next step. This happens more often with specialty and legacy instrumentation than with commodity lab supplies.",
          "The first place to look is rarely the first result in a search engine. Manufacturer parts networks, secondary distributors and equipment refurbishers often carry components long after a product line is formally discontinued.",
          "Persistence matters more than any single channel. Tracking down a genuinely hard-to-find item is usually a matter of checking multiple sources in parallel rather than waiting on a single supplier to say yes — which is why laboratories with a broad sourcing network tend to find these items faster than those relying on one or two regular vendors.",
        ],
      },
    ],
  },

  contact: {
    metaDescription: "Request an inquiry or reach EUROBRAM's teams in Weimar, Germany and Brazil directly.",
    hero: {
      eyebrow: "Contact",
      title: "Request a Quote",
      description: "Tell us what you're trying to source or ship. A specialist — not a ticket queue — will get back to you.",
    },
    quickInquiryTitle: "Quick Inquiry",
    quickInquiryDesc: "Fields marked required are needed to route your inquiry correctly.",
    germanyHQ: "Germany · Headquarters",
    brazilPartner: "Brazil · Partner",
    contactLabel: "Contact",
    messageWhatsapp: "Message on WhatsApp",
    mapTitle: "EUROBRAM GmbH location",
    form: {
      fullName: "Full name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      topic: "Topic",
      topics: ["HPLC Columns", "Laboratory Consumables", "Specialty Laboratory Equipment", "Difficult-to-Source Products", "Brochure Request", "Other"],
      messageLabel: "What do you need?",
      required: "(required)",
      messagePlaceholder: "Product, quantity, timeline, destination — as much detail as you have.",
      submit: "Send Inquiry",
      receivedTitle: "Inquiry received.",
      receivedText: "Thank you — a member of our team will respond directly, usually within one business day.",
    },
  },

  legal: {
    updated: "July 2026",
    updatedLabel: "Last updated",
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "1. Controller",
          paragraphs: ["{{name}}, {{address}}, {{country}}. Email: {{email}}"],
        },
        {
          heading: "2. Data We Process",
          paragraphs: ["We process personal data in the following situations:"],
          list: [
            "When you submit our contact or inquiry form (name, company, email, phone, message content).",
            "When you subscribe to our newsletter (email address).",
            "When you contact us via WhatsApp, phone or email directly.",
            "Technical data automatically generated when you browse our website (e.g. via cookies, see our Cookie Policy).",
          ],
        },
        {
          heading: "3. Purpose and Legal Basis",
          paragraphs: [
            "We process this data to respond to inquiries, provide requested information, manage the newsletter, and operate and improve this website. The legal basis is Art. 6(1)(b) GDPR (contract / pre-contractual measures) for inquiries, and Art. 6(1)(a) GDPR (consent) for the newsletter and non-essential cookies.",
          ],
        },
        {
          heading: "4. International Transfers",
          paragraphs: [
            "As a company coordinating procurement between Germany, the EU and Brazil, certain order-related data may need to be shared with our Brazilian partner network to fulfil your request. Where this involves a transfer outside the EU/EEA, we take appropriate safeguards as required by GDPR.",
          ],
        },
        {
          heading: "5. Retention",
          paragraphs: ["We retain personal data only as long as necessary for the purposes described above, or as required by applicable statutory retention obligations."],
        },
        {
          heading: "6. Your Rights",
          paragraphs: [
            "Under GDPR you have the right to access, rectify, erase or restrict processing of your data, to object to processing, and to data portability. You may withdraw consent at any time. To exercise these rights, contact us at {{email}}. You also have the right to lodge a complaint with a supervisory authority.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: ["Questions about this policy can be directed to {{contactPerson}} at {{email}} or {{phone}}."],
        },
      ],
    },
    imprint: {
      title: "Imprint",
      sections: [
        { heading: "Information pursuant to § 5 TMG", paragraphs: ["{{name}}", "{{street}}", "{{postalCity}}", "{{country}}"] },
        { heading: "Contact", paragraphs: ["Phone: {{phone}}", "Fax: {{fax}}", "Email: {{email}}", "Contact person: {{contactPerson}}"] },
        { heading: "Responsible for Content", paragraphs: ["{{contactPerson}}, {{name}}, {{street}}, {{postalCity}}, {{country}}"] },
        {
          heading: "EU Dispute Resolution",
          paragraphs: [
            "The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/. We are not obliged and generally not willing to participate in dispute resolution proceedings before a consumer arbitration board.",
          ],
        },
        {
          heading: "Liability for Content",
          paragraphs: [
            "As a service provider, we are responsible for our own content on these pages in accordance with general law. We are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected.",
          ],
        },
        {
          heading: "Liability for Links",
          paragraphs: [
            "Our website contains links to external third-party websites over whose content we have no influence. We cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.",
          ],
        },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      sections: [
        {
          heading: "What Are Cookies",
          paragraphs: ["Cookies are small text files stored on your device when you visit a website. They help websites function properly and, where permitted, help us understand how the site is used."],
        },
        {
          heading: "Essential Cookies",
          paragraphs: ["These cookies are necessary for the website to function (for example, remembering your cookie consent choice) and cannot be disabled. They do not require consent under applicable law."],
        },
        {
          heading: "Optional Cookies",
          paragraphs: [
            "With your consent, we may use additional cookies to understand aggregate site usage and improve the website experience. You can accept or decline these using the cookie banner shown on your first visit, or by clearing your browser's stored consent to see the banner again.",
          ],
        },
        {
          heading: "Managing Cookies",
          paragraphs: ["Most browsers let you control cookies through their settings. Restricting cookies may affect the functionality of this and other websites you visit."],
        },
        { heading: "Contact", paragraphs: ["Questions about this policy can be directed to {{name}} at {{email}}."] },
      ],
    },
  },
};

export type Dictionary = typeof en;
