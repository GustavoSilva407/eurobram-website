export const company = {
  name: "EUROBRAM GmbH",
  tagline: "Laboratory Materials Sourcing for the Brazilian Pharmaceutical Market",
  address: {
    street: "Papiergraben 1",
    postal: "99425",
    city: "Weimar",
    country: "Germany",
  },
  phone: "+49-3643-8599989",
  fax: "+49-3643-8571996",
  email: "office@eurobram.de",
  website: "www.eurobram.de",
  contactPerson: "Dr. Monika Auer",
  brazilPartner: {
    name: "Flausino Batista",
    email: "batista@eurobramquality.com.br",
    phone: "+55-11-98539 2741",
  },
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  points: string[];
  icon: "package";
};

export const services: Service[] = [
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
];

export type Industry = {
  name: string;
  description: string;
};

export const industries: Industry[] = [
  { name: "Pharmaceutical", description: "Manufacturers sourcing laboratory materials for the Brazilian market." },
  { name: "Biotechnology", description: "Biotech developers requiring specialty lab equipment and consumables." },
  { name: "Agrochemical", description: "Agrochemical companies sourcing specialty lab equipment and materials." },
  { name: "Research Laboratories", description: "Laboratories needing dependable access to consumables and equipment." },
  { name: "Quality Control", description: "QC departments requiring HPLC columns and lab supplies on schedule." },
  { name: "R&D", description: "Research teams sourcing difficult-to-find lab equipment and parts." },
  { name: "Universities", description: "Academic institutions procuring laboratory materials for research programs." },
  { name: "Contract Research Organizations", description: "CROs coordinating multi-market lab material sourcing." },
];

export const procurementCategories = [
  "HPLC Columns",
  "Chromatography Consumables",
  "Laboratory Consumables",
  "Specialty Laboratory Equipment",
  "Replacement Parts & Accessories",
  "Difficult-to-Source Products",
];

export const processSteps = [
  { title: "Inquiry", description: "You share what you need — a product, a specification, or a challenge you're facing sourcing it." },
  { title: "Sourcing", description: "Our network identifies qualified suppliers and available inventory across Europe." },
  { title: "Quality Check", description: "Materials are verified against your specification before they leave the supplier." },
  { title: "Delivery", description: "Materials arrive at your laboratory or facility, ready for use." },
];

export const trustPoints = [
  { label: "Germany + Brazil", value: "Bilateral Presence", description: "Dedicated teams supporting customers in both regions." },
  { label: "Quality-First", value: "Certified Suppliers", description: "Every item sourced from qualified, reputable manufacturers." },
  { label: "Direct Network", value: "European Sourcing", description: "Established relationships with manufacturers and suppliers." },
  { label: "Personal Contact", value: "Direct Support", description: "A named specialist for every inquiry, not a ticket queue." },
];

export const faqs = [
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
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  body: string[];
};

export const posts: Post[] = [
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
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about#company", description: "Who we are and what we do" },
      { label: "Mission", href: "/about#mission", description: "Quality and reliability" },
      { label: "Our Team", href: "/about#team", description: "Germany and Brazil" },
      { label: "Our Story", href: "/about#story", description: "How EUROBRAM began" },
    ],
  },
  { label: "Services", href: "/services" },
  {
    label: "Industries",
    href: "/industries",
    children: industries.slice(0, 4).map((i) => ({ label: i.name, href: `/industries#${i.name.toLowerCase().replace(/\s+/g, "-")}` })),
  },
  {
    label: "Resources",
    href: "/insights",
    children: [
      { label: "Insights / Blog", href: "/insights", description: "Articles on laboratory materials and equipment" },
      { label: "FAQ", href: "/faq", description: "Common procurement questions" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
