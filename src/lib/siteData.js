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
  { name: "Tata Teleservices", logo: "/images/clients/client-tata-teleservices.png" },
  { name: "Reliance", logo: "/images/clients/client-reliance.png" },
  { name: "Computershare", logo: "/images/clients/client-computershare.png" },
  { name: "Tata Sky", logo: "/images/clients/client-tata-sky.png" },
  { name: "ANSR", logo: "/images/clients/client-ansr.png" },
  { name: "Inspire Retail Brands", logo: null },
  { name: "Sterimax", logo: "/images/clients/client-sterimax.png" },
  { name: "Oasis Fertility", logo: "/images/clients/client-oasis-fertility.png" },
  { name: "Inovalon", logo: "/images/clients/client-inovalon.png" },
  { name: "Deloitte", logo: "/images/clients/client-deloitte.png" },
  { name: "Amazon", logo: "/images/clients/client-amazon.png" },
  { name: "AbhiBus", logo: "/images/clients/client-abhibus.png" },
  { name: "Radio Mirchi", logo: "/images/clients/client-radio-mirchi.png" },
  { name: "Continental Hospitals", logo: "/images/clients/client-continental-hospitals.png" },
  { name: "Hala Mobility", logo: "/images/clients/client-hala-mobility.png" },
  { name: "Northern Tool", logo: null },
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
