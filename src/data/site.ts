export const BUSINESS = {
  name: "Mirabellinks",
  legal: "Mirabellinks Advertising Catalogue Printing Services",
  tagline: "PRINTS AND DESIGN THAT SPEAK.",
  email: "mirabellinks@gmail.com",
  address: "101 A. Bonifacio Avenue, Barangka, Marikina City, Philippines",
  facebook: "https://www.facebook.com/share/19jsHnt8Kv/",
  instagram: "https://www.instagram.com/mirabellinks/",
  bio: "One-stop digital solutions corporation.",
  catalogue: "https://heyzine.com/flip-book/ce9661bf4f.html",
};

export const SERVICES = [
  { href: "/printing", title: "Printing services", blurb: "Catalogues, brochures, flyers, tarpaulins, and other commercial print." },
  { href: "/custom", title: "Customized products", blurb: "Items finished with your artwork, sizes, and finishing notes." },
  { href: "/shop", title: "Print store", blurb: "Order catalogues, flyers, tarps, cards, stickers, and shirts." },
  { href: "/branding", title: "Branding and graphic design", blurb: "Identity, layouts, and print-ready artwork." },
  { href: "/marketing", title: "Digital marketing and advertising", blurb: "Campaign creative and advertising materials." },
  { href: "/web", title: "Website development", blurb: "Sites planned and built for a Philippine business." },
  { href: "/ai", title: "AI creative services", blurb: "Concept exploration with a human designer in the loop." },
  { href: "/pod", title: "Print on demand", blurb: "A future module. Not accepting POD orders yet." },
] as const;

export type SampleProduct = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  variants: string[];
  note: string;
};

export const PRODUCTS: SampleProduct[] = [
  { slug: "catalogue", name: "Catalogue", category: "Printing", summary: "Multi-page catalogue for a product line or price list.", variants: ["A4 saddle stitch", "A4 perfect bind", "A5 saddle stitch"], note: "Sample listing. Request a quote for quantity, paper, and cover." },
  { slug: "brochure", name: "Brochure", category: "Printing", summary: "Folded brochure for a service, event, or showroom.", variants: ["Bi-fold", "Tri-fold"], note: "Sample listing. Finishing and stock are quoted per job." },
  { slug: "flyer", name: "Flyer", category: "Printing", summary: "Single-sheet flyer for a promotion or announcement.", variants: ["A5", "A4", "Half long"], note: "Sample listing. No published unit price." },
  { slug: "tarpaulin", name: "Tarpaulin", category: "Printing", summary: "Large-format tarp for a storefront or event.", variants: ["Standard", "Heavy"], note: "Sample listing. Size is custom; quote required." },
  { slug: "calling-card", name: "Calling card", category: "Customized", summary: "Business cards with your supplied or designed artwork.", variants: ["Standard card", "Rounded corners"], note: "Sample listing. Paper and spot finishes are quoted." },
  { slug: "sticker", name: "Sticker sheet", category: "Customized", summary: "Die-cut or kiss-cut stickers from your artwork.", variants: ["Kiss-cut sheet", "Die-cut singles"], note: "Sample listing. Not a stocked SKU." },
  { slug: "shirt", name: "Printed shirt", category: "Customized", summary: "Apparel print. Sizes collected as customization notes.", variants: ["Front print", "Front and back"], note: "Sample listing. Garment brand and sizes are confirmed on quote." },
  { slug: "logo-pack", name: "Logo and brand kit", category: "Branding", summary: "A design engagement, not a downloadable template.", variants: ["Wordmark", "Wordmark and mark"], note: "Sample service card. Scope is agreed before work starts." },
];

export const PORTFOLIO = [
  { title: "Catalogue spread", kind: "Conceptual layout", detail: "A sample page structure for a product catalogue. Not a client project." },
  { title: "Storefront tarp", kind: "Conceptual layout", detail: "A sample large-format composition. Not a photographed installation." },
  { title: "Social announcement", kind: "Conceptual layout", detail: "A sample square post for a print promo. Not a published campaign." },
];

export function findProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
