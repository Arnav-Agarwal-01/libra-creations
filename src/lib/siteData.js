// Central site data — sourced from libracreations.in (real business data)

export const site = {
  name: "Libra Creations",
  tagline: "Perfect Balance for All Corporate Needs",
  motto: "Creativity that Builds Brands. Quality that Builds Trust.",
  established: 2005,
  reIncorporated: 2020,
  phone: "+91-9393220094",
  phoneHref: "tel:+919393220094",
  email: "Creations.libra@gmail.com",
  emailHref: "mailto:Creations.libra@gmail.com",
  whatsappNumber: "919393220094",
  address: "#5-5-844, Hindi Nagar, Goshamahal,",
  addressLine2: "Hyderabad – 500012, Telangana, India",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=%235-5-844%2C%20Hindi%20Nagar%2C%20Goshamahal%2C%20Hyderabad%20500012%2C%20Telangana%2C%20India",
  location: "Hyderabad • Telangana • Pan-India",
};

export const whatsappLink = (message) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const stats = [
  { label: "Years of Excellence", value: "20+" },
  { label: "Core Capabilities", value: "03" },
  { label: "Coverage", value: "Pan-India" },
  { label: "Since", value: "2005" },
];

export const services = [
  {
    id: "01",
    slug: "corporate-uniforms",
    title: "Corporate Uniforms",
    short:
      "Complete uniform solutions for formal, industrial, hospitality, healthcare and branded teamwear requirements.",
    image: "/images/uniforms-premium.webp",
    reference: "/images/uniforms-reference.webp",
    features: ["Design Consultation", "Logo Embroidery & Printing", "Nationwide Delivery"],
    whatsapp:
      "Hello Libra Creations, I would like to discuss a corporate uniform requirement.",
    products: [
      "Formal Shirts",
      "Formal Trousers",
      "Corporate T-Shirts",
      "Polo T-Shirts",
      "Hoodies",
      "Jackets",
      "Rainwear",
      "Aprons",
      "Industrial Workwear",
      "Hospitality Uniforms",
      "Healthcare Uniforms",
      "Safety Apparel",
      "Customized Fabrics",
      "Ready-made Uniforms",
      "Tailor-made Uniform Solutions",
    ],
    supportSteps: [
      "Design Consultation",
      "Fabric Selection",
      "Size Management",
      "Logo Embroidery",
      "Screen Printing",
      "Heat Transfer Printing",
      "Digital Printing",
      "Nationwide Delivery",
    ],
    process: [
      {
        title: "Design & Fabric",
        desc: "Align the uniform style, fabric and functional requirement with your brand and industry.",
      },
      {
        title: "Size Management",
        desc: "Plan sizing requirements for teams, locations and workforce categories.",
      },
      {
        title: "Branding",
        desc: "Apply embroidery, screen printing, heat transfer or digital printing based on the requirement.",
      },
      {
        title: "Delivery",
        desc: "Coordinate reliable delivery support for approved uniform orders across India.",
      },
    ],
  },
  {
    id: "02",
    slug: "corporate-gifting",
    title: "Corporate Gifting",
    short:
      "Thoughtful gifting, welcome kits, festive hampers, awards, merchandise and fully customized sourcing.",
    image: "/images/gifting-premium.webp",
    reference: "/images/gifting-reference.webp",
    features: ["Brand-Aligned Selection", "Customized Sourcing", "Presentation & Delivery"],
    whatsapp:
      "Hello Libra Creations, I would like to discuss a corporate gifting requirement.",
    quote: "If our clients can imagine it, we strive to source it.",
    tagline: "From a pin to a plane, no requirement is too small or too unique.",
    products: [
      "Premium Gift Sets",
      "Water Bottles & Drinkware",
      "Diaries & Planners",
      "Executive Stationery",
      "Office Accessories",
      "Mementoes & Awards",
      "Customized Trophies",
      "Bags & Backpacks",
      "Electronics & Gadgets",
      "Welcome Kits",
      "Festive Gifts",
      "Employee Joining Kits",
      "Promotional Merchandise",
      "Printing Solutions",
      "Customized Packaging",
      "Sustainable & Eco-friendly Gifts",
      "Luxury Corporate Gifts",
      "Fully Customized Sourcing Solutions",
    ],
    process: [
      {
        title: "Brand-Aligned Selection",
        desc: "Select products and packaging that reflect your organization's brand identity and purpose.",
      },
      {
        title: "Customized Sourcing",
        desc: "Explore regular, premium, festive, sustainable and fully customized gifting options.",
      },
      {
        title: "Presentation & Delivery",
        desc: "Support printing, packaging and delivery requirements for a more complete gifting experience.",
      },
    ],
  },
  {
    id: "03",
    slug: "event-management",
    title: "Corporate Events",
    short:
      "Concept-to-execution event management for conferences, launches, annual days, awards and employee engagement.",
    image: "/images/events-premium.webp",
    reference: "/images/events-reference.webp",
    features: ["Concept Development", "Stage & Backdrop Design", "Event Coordination"],
    whatsapp:
      "Hello Libra Creations, I would like to discuss a corporate event requirement.",
    products: [
      "Annual Day Celebrations",
      "Anniversary Celebrations",
      "Conferences",
      "Product Launches",
      "Town Halls",
      "Dealer Meets",
      "Award Ceremonies",
      "Employee Engagement Activities",
      "Theme-Based Decorations",
      "Office Branding",
      "Stage Design",
      "Exhibition Stalls",
      "Corporate Festivities",
      "Promotional Campaigns",
      "Social Events",
      "Family Day Celebrations",
    ],
    supportSteps: [
      "Concept Development",
      "Venue Branding",
      "Stage & Backdrop Design",
      "Audio Visual Solutions",
      "Photography & Videography",
      "Printing & Signage",
      "Gifting Solutions",
      "Event Coordination",
    ],
    process: [
      {
        title: "Concept",
        desc: "Define the event objective, theme and experience direction.",
      },
      {
        title: "Branding & Production",
        desc: "Coordinate venue branding, stage, backdrop, signage, printing and AV requirements.",
      },
      {
        title: "Experience",
        desc: "Integrate photography, videography, gifting and attendee touchpoints where required.",
      },
      {
        title: "Coordination",
        desc: "Manage execution details to keep the event organized and professionally delivered.",
      },
    ],
  },
];

// Curated highlights pulled straight from our brand catalogues (uniforms + gifting).
// Each entry carries an image, searchable tags and a factual spec note so visitors
// can search by brand, colour, fabric or use-case.
export const featuredCatalogue = [
  // ── Corporate Uniforms ──────────────────────────────────────────────
  {
    id: "sf-white-poplin",
    name: "Solo Formali Cotton-Rich Formal Shirt",
    detail: "White poplin",
    brand: "Solo Formali",
    service: "corporate-uniforms",
    image: "/images/catalogue/solo-formali-white.webp",
    tags: ["formal shirt", "white", "poplin", "cotton rich", "office wear", "events shirt"],
    note: "Cotton-rich poplin · sizes M–3XL for men & women · pre-shrunk, colour fast",
  },
  {
    id: "sf-blue-oxford",
    name: "Solo Formali Oxford Formal Shirt",
    detail: "Sky blue oxford weave",
    brand: "Solo Formali",
    service: "corporate-uniforms",
    image: "/images/catalogue/solo-formali-blue-oxford.webp",
    tags: ["formal shirt", "blue", "oxford", "cotton rich", "corporate shirt"],
    note: "Sky-blue oxford weave · breathable cotton-rich fabric · Sedex-certified unit",
  },
  {
    id: "sf-black-twill",
    name: "Solo Formali Formal Shirt",
    detail: "Textured black",
    brand: "Solo Formali",
    service: "corporate-uniforms",
    image: "/images/catalogue/solo-formali-black.webp",
    tags: ["formal shirt", "black", "textured", "office wear", "premium shirt"],
    note: "Textured self-weave · wrinkle-friendly drape · sizes M–3XL, unisex run",
  },
  {
    id: "sf-lavender-twill",
    name: "Solo Formali Formal Shirt",
    detail: "Soft lavender twill",
    brand: "Solo Formali",
    service: "corporate-uniforms",
    image: "/images/catalogue/solo-formali-lavender.webp",
    tags: ["formal shirt", "lavender", "purple", "cotton rich", "soft tone"],
    note: "Soft lavender twill · pre-shrunk and colour fast · staff & hospitality friendly",
  },
  {
    id: "sf-grey-oxford",
    name: "Solo Formali Oxford Formal Shirt",
    detail: "Blue-grey oxford",
    brand: "Solo Formali",
    service: "corporate-uniforms",
    image: "/images/catalogue/solo-formali-grey-zip.webp",
    tags: ["formal shirt", "grey", "oxford", "zip collar", "cotton rich"],
    note: "Blue-grey oxford with tonal detail · easy-care cotton-rich blend",
  },
  {
    id: "rr-vintage-zip-polo",
    name: "Rare Rabbit Vintage Zip Polo",
    detail: "White, navy zip placket",
    brand: "Rare Rabbit",
    service: "corporate-uniforms",
    image: "/images/catalogue/rr-vintage-zip-polo.webp",
    tags: ["polo", "zip polo", "white", "premium", "95% cotton", "lycra stretch", "unisex"],
    note: "Signature edition · 95% cotton / 5% lycra · XS–4XL · unisex tee",
  },
  {
    id: "rr-corp-zander-shirt",
    name: "Rare Rabbit Corp Zander Formal Shirt",
    detail: "Thomas black, self-weave",
    brand: "Rare Rabbit",
    service: "corporate-uniforms",
    image: "/images/catalogue/rr-corp-zander-black.webp",
    tags: ["formal shirt", "black", "100% cotton", "premium", "corporate shirt"],
    note: "100% cotton · tailored black formal · XS–4XL",
  },
  {
    id: "puma-ess-pique-polo",
    name: "Puma ESS Pique Tipping Polo",
    detail: "Sodalite blue with white tipping",
    brand: "Puma",
    service: "corporate-uniforms",
    image: "/images/catalogue/puma-ess-pique-polo.webp",
    tags: ["polo", "pique", "tipping", "navy blue", "220 gsm", "sportswear", "teamwear"],
    note: "60/40 cotton-poly pique knit · 220 GSM · XS–3XL",
  },
  {
    id: "skechers-turkish-polo",
    name: "Skechers Turkish Blue Tipping Polo",
    detail: "Turquoise with navy-white tipping",
    brand: "Skechers",
    service: "corporate-uniforms",
    image: "/images/catalogue/skechers-turkish-polo.webp",
    tags: ["polo", "turquoise", "100% cotton", "regular fit", "tipping", "unisex"],
    note: "100% cotton · regular fit collared tee · XS–3XL",
  },
  {
    id: "vh-dry-fit-polo",
    name: "Van Heusen Dry Fit Polo",
    detail: "Black with red placket contrast",
    brand: "Van Heusen",
    service: "corporate-uniforms",
    image: "/images/catalogue/vh-dry-fit-polo.webp",
    tags: ["polo", "dry fit", "polyester", "black", "red placket", "quick dry", "events"],
    note: "100% dry-fit polyester · contrast red placket · S–3XL",
  },
  {
    id: "vh-cvc-shirt",
    name: "Van Heusen Wrinkle-Free Formal Shirt",
    detail: "CVC blue",
    brand: "Van Heusen",
    service: "corporate-uniforms",
    image: "/images/catalogue/vh-wrinkle-free-shirt.webp",
    tags: ["formal shirt", "wrinkle free", "cvc", "blue", "easy care", "office wear"],
    note: "Wrinkle-free CVC (33% cotton / 67% poly) · sizes 38–48",
  },
  {
    id: "moonland-organic-polo",
    name: "Moonland Organic Polo",
    detail: "Navy — 9 colourways",
    brand: "Moonland",
    service: "corporate-uniforms",
    image: "/images/catalogue/moonland-organic-polo.webp",
    tags: ["polo", "organic cotton", "270 gsm", "biowashed", "bulk blanks", "customizable", "navy blue"],
    note: "100% premium cotton, 270 GSM, biowashed · Red/Sky/White/Maroon/Navy & more · S–3XL · ideal for logo printing",
  },

  // ── Corporate Gifting ───────────────────────────────────────────────
  {
    id: "uppercase-edge-backpack",
    name: "uppercase Edge Alphatech Pro Laptop Backpack",
    detail: "Black — 2nd gen",
    brand: "uppercase",
    service: "corporate-gifting",
    image: "/images/catalogue/uppercase-alphatech-backpack.webp",
    tags: ["backpack", "laptop bag", "travel", "black", "welcome kit", "water resistant"],
    note: "Padded laptop & tablet bays, air-mesh back support, trolley sleeve, tech pouch",
  },
  {
    id: "hrx-urban-traveller",
    name: "HRX Urban Traveller Cabin Trolley",
    detail: "Black hard-shell",
    brand: "HRX",
    service: "corporate-gifting",
    image: "/images/catalogue/hrx-urban-traveller.webp",
    tags: ["trolley", "cabin luggage", "travel", "black", "joining kit", "spinners"],
    note: "Cabin-size hard-shell from the HRX PC Collection",
  },
  {
    id: "hrx-parabola-trolley",
    name: "HRX Parabola Trolley",
    detail: "White · grey, black, blue options",
    brand: "HRX",
    service: "corporate-gifting",
    image: "/images/catalogue/hrx-parabola-trolley.webp",
    tags: ["trolley", "travel", "white", "joining kit", "hard-shell"],
    note: "From the HRX PP Collection · grey, black and blue options",
  },
  {
    id: "weekender-duffel",
    name: "Weekender Duffel-cum-Backpack",
    detail: "Olive green, dual function",
    brand: "Libra range",
    service: "corporate-gifting",
    image: "/images/catalogue/weekender-duffel-green.webp",
    tags: ["duffel", "weekender", "overnighter", "olive green", "travel", "water resistant"],
    note: "Dual-function large duffel with backpack straps · fits up to 15″ laptop · outside pockets",
  },
  {
    id: "croc-duffel",
    name: "Croc Duffel Executive Weekender",
    detail: "Tan croc-texture PU",
    brand: "Libra range",
    service: "corporate-gifting",
    image: "/images/catalogue/croc-duffel-tan.webp",
    tags: ["duffel", "weekender", "tan", "premium duffel", "croc finish", "19 inch"],
    note: "Croc-textured PU with contrast straps · 19″ length · metal branding plate",
  },
  {
    id: "matrix-duffel",
    name: "Matrix Duffel Executive Weekender",
    detail: "Black micro-grid PU",
    brand: "Libra range",
    service: "corporate-gifting",
    image: "/images/catalogue/matrix-duffel-black.webp",
    tags: ["duffel", "weekender", "black", "premium duffel", "19 inch", "embossed"],
    note: "Embossed micro-grid PU, 19″ length · super-premium finish · metal branding plate",
  },
  {
    id: "cork-gift-set",
    name: "Compact 5-Piece Cork Gift Set",
    detail: "Cork utilities in a gift tray",
    brand: "Libra range",
    service: "corporate-gifting",
    image: "/images/catalogue/cork-gift-set.webp",
    tags: ["joining kit", "onboarding kit", "eco friendly", "sustainable", "cork", "gift set"],
    note: "Cork notebook, cork pen, cork keychain, cork card holder & insulated steel bottle",
  },
  {
    id: "zencharge-bamboo",
    name: "ZenCharge Bamboo Wireless Charger",
    detail: "Phone stand + pen holder",
    brand: "Libra range",
    service: "corporate-gifting",
    image: "/images/catalogue/zencharge-bamboo.webp",
    tags: ["tech gift", "bamboo", "eco friendly", "wireless charger", "15w", "desk accessory"],
    note: "15W wireless charging · bamboo phone stand with pen holder",
  },
  {
    id: "coffee-warmer-set",
    name: "Coffee Warmer & SS Mug Set",
    detail: "SS mug with lid",
    brand: "Libra range",
    service: "corporate-gifting",
    image: "/images/catalogue/coffee-warmer-set.webp",
    tags: ["drinkware", "coffee", "desk accessory", "warmer plate", "office gift"],
    note: "Stainless-steel mug with lid on a warmer base · auto cut-off · 2 heat modes",
  },
  {
    id: "tokubox-trio",
    name: "TokuBox Trio Slim Lunch Box",
    detail: "Teal, SS inside",
    brand: "Libra range",
    service: "corporate-gifting",
    image: "/images/catalogue/tokubox-trio.webp",
    tags: ["lunch box", "stainless steel", "teal", "everyday gift", "insulated"],
    note: "Slim lunch box with SS inside, PU filling keeps food hot · 3 partitions with silicone seal",
  },
  {
    id: "tiltx-stand",
    name: "TiltX Serve Metal Mobile Stand",
    detail: "With 4 metal coasters",
    brand: "Libra range",
    service: "corporate-gifting",
    image: "/images/catalogue/tiltx-mobile-stand.webp",
    tags: ["desk accessory", "mobile stand", "metal", "coasters", "office gift"],
    note: "Large adjustable metal stand · ships with 4 metal coasters (soft foam base)",
  },
  {
    id: "winner-cup-trophy",
    name: "Winner Cup Desk Trophy",
    detail: "On black plate",
    brand: "Libra range",
    service: "corporate-gifting",
    image: "/images/catalogue/winner-cup-trophy.webp",
    tags: ["trophy", "award", "recognition", "annual day", "memento"],
    note: "Metal winners-cup on black plate · gift boxed",
  },
  {
    id: "snapcharge-duo",
    name: "SnapCharge Duo Car Charger",
    detail: "Retractable cables + voltage display",
    brand: "Libra range",
    service: "corporate-gifting",
    image: "/images/catalogue/snapcharge-duo.webp",
    tags: ["car charger", "fast charging", "usb c", "type c", "tech gift", "travelling gift"],
    note: "1 USB-A + 2 Type-C ports · built-in Type-C & Lightning leads · digital voltage display",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

export const getFeaturedForService = (slug) =>
  featuredCatalogue.filter((entry) => entry.service === slug);

export const catalogueItems = [
  ...services.flatMap((service) =>
    service.products.map((name) => ({
      id: `${service.slug}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      name,
      service,
    })),
  ),
  ...featuredCatalogue.map((entry) => ({
    id: entry.id,
    name: entry.name,
    service: getServiceBySlug(entry.service),
    featured: entry,
  })),
];

export const enquiryHref = (serviceSlug, item) => {
  const params = new URLSearchParams({ service: serviceSlug });
  if (item) params.set("item", item);
  return `/contact?${params.toString()}`;
};

export const industries = [
  { id: "01", name: "Information Technology", desc: "Uniforms, employee kits, branded merchandise and corporate events for technology teams." },
  { id: "02", name: "Telecommunications", desc: "Scalable uniform, gifting and event support for distributed operations and customer-facing teams." },
  { id: "03", name: "Healthcare", desc: "Professional uniform, recognition gifting and event solutions for healthcare organizations." },
  { id: "04", name: "Pharmaceuticals", desc: "Branded apparel, corporate merchandise and managed events aligned with professional standards." },
  { id: "05", name: "Retail", desc: "Customer-facing uniforms, promotional merchandise and engagement events for retail teams." },
  { id: "06", name: "Manufacturing", desc: "Industrial workwear, safety apparel, branded merchandise and workforce engagement support." },
  { id: "07", name: "Banking & Financial Services", desc: "Professional uniforms, executive gifting and corporate event solutions for financial institutions." },
  { id: "08", name: "E-commerce", desc: "Employee merchandise, joining kits, uniforms and event support for fast-moving teams." },
  { id: "09", name: "Education", desc: "Uniform, recognition, gifting and event solutions for institutions and education organizations." },
  { id: "10", name: "Hospitality", desc: "Hospitality uniforms, guest-facing apparel, gifting and professionally coordinated celebrations." },
  { id: "11", name: "Logistics", desc: "Functional workwear, branded merchandise and employee engagement solutions for logistics teams." },
  { id: "12", name: "Startups", desc: "Flexible, customized uniform, gifting and event solutions that can grow with emerging businesses." },
  { id: "13", name: "Government Organizations", desc: "Structured sourcing and corporate solution support aligned with approved organizational requirements." },
];

export const clients = [
  { name: "Tata Teleservices", logo: "/images/clients/logos/tata-teleservices.svg" },
  { name: "Reliance", logo: "/images/clients/logos/reliance.svg" },
  { name: "Computershare", logo: "/images/clients/logos/computershare.svg" },
  { name: "Tata Sky", logo: "/images/clients/logos/tata-sky.png" },
  { name: "ANSR", logo: "/images/clients/logos/ansr.png" },
  { name: "Inspire Retail Brands", logo: null },
  { name: "Sterimax", logo: "/images/clients/logos/sterimax.png" },
  { name: "Oasis Fertility", logo: "/images/clients/logos/oasis-fertility.png" },
  { name: "Inovalon", logo: "/images/clients/logos/inovalon.svg" },
  { name: "Deloitte", logo: "/images/clients/logos/deloitte.svg" },
  { name: "Amazon", logo: "/images/clients/logos/amazon.svg" },
  { name: "AbhiBus", logo: "/images/clients/logos/abhibus.png" },
  { name: "Radio Mirchi", logo: "/images/clients/logos/radio-mirchi.svg" },
  { name: "Continental Hospitals", logo: "/images/clients/logos/continental-hospitals.png" },
  { name: "Hala Mobility", logo: "/images/clients/logos/hala-mobility.png" },
  { name: "Northern Tool", logo: "/images/clients/logos/northern-tool.svg" },
];

export const journey = [
  {
    id: 1,
    year: "2005",
    title: "Began Operations",
    quote:
      "Started as Libra Creation with a focus on dependable corporate solutions — anchored by a nationwide uniform order for Tata Teleservices, our very first major assignment.",
    stat: "Pan-India uniform execution at scale",
  },
  {
    id: 2,
    year: "2020",
    title: "Re-incorporated",
    quote:
      "Re-incorporated as Libra Creations with renewed capability and a wider vision — carrying forward over two decades of experience, creativity and customer trust.",
    stat: "Renewed capability, wider vision",
  },
  {
    id: 3,
    year: "Today",
    title: "Serving Organizations Across India",
    quote:
      "Supporting multinational corporations, healthcare organizations, technology companies, manufacturing industries, educational institutions, retail chains, startups and government organizations.",
    stat: "Trusted across diverse sectors",
  },
];

export const whyUs = [
  "Creative and innovative thinking",
  "Customized branding solutions",
  "Superior product quality",
  "Reliable nationwide sourcing",
  "Competitive pricing",
  "On-time delivery",
  "Professional project management",
  "Strong vendor network across India",
  "Customer-first approach",
  "Long-term relationships built on trust and transparency",
];

export const vision =
  "To become India's most trusted and preferred corporate solutions company by consistently delivering innovative products, exceptional service and memorable experiences.";

export const mission =
  "To help organizations strengthen their brand identity through premium-quality uniforms, thoughtful corporate gifts and professionally managed events while building long-lasting business relationships based on trust, integrity and excellence.";

export const milestone = {
  title: "A Nationwide Uniform Assignment That Set the Standard",
  body:
    "One of our proudest milestones was successfully executing a nationwide uniform order for Tata Teleservices — our first major assignment. It established the foundation for our commitment to large-scale execution, quality, timely delivery and customer satisfaction.",
  stat: "Pan-India",
  statLabel: "Built for dependable large-scale execution",
};
