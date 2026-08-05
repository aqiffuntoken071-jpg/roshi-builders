import {
  Grid2x2,
  PaintRoller,
  Layers,
  Home,
  Brush,
  Leaf,
  Tv,
  type LucideIcon,
} from "lucide-react";

export const PHONE_DISPLAY = "07918 208882";
export const PHONE_TEL = "tel:+447918208882";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "TikTok", href: "https://tiktok.com" },
] as const;

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  long: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "tiling",
    title: "Tiling",
    icon: Grid2x2,
    short: "Precision wall and floor tiling for kitchens, bathrooms and hallways.",
    long: "From large-format porcelain to intricate mosaic detail, we set every tile with laser-levelled accuracy. Waterproofing, levelling and grouting are all done properly so the finish lasts for decades, not seasons.",
    points: ["Wall & floor tiling", "Wet room tanking", "Large format porcelain", "Re-grouting & repairs"],
  },
  {
    slug: "painting-decorating",
    title: "Painting & Decorating",
    icon: PaintRoller,
    short: "Flawless interior and exterior finishes with clean, sharp lines.",
    long: "Careful preparation is where a great paint job is won. We fill, sand, mask and prime before a brush touches the wall, then apply premium trade paints for a deep, even, hard-wearing finish.",
    points: ["Interior & exterior", "Feature walls & panelling", "Wallpapering", "Woodwork & spraying"],
  },
  {
    slug: "laminate-flooring",
    title: "Laminate Flooring",
    icon: Layers,
    short: "Level, silent, beautifully fitted laminate, LVT and engineered floors.",
    long: "We prepare and level the subfloor, fit acoustic underlay and scribe every edge and doorway neatly. The result is a floor that feels solid underfoot with no creaks, gaps or lippage.",
    points: ["Laminate & LVT", "Subfloor levelling", "Underlay & acoustics", "Beading & thresholds"],
  },
  {
    slug: "loft-conversions",
    title: "Loft Conversions",
    icon: Home,
    short: "Turn unused roof space into a bedroom, office or en-suite.",
    long: "Full loft conversions managed end to end — structural work, staircase, insulation, velux windows, plastering and decoration. Building-regulation compliant and delivered with minimal disruption to the rest of your home.",
    points: ["Dormer & velux conversions", "Staircase installation", "Insulation & fire safety", "En-suite fit-out"],
  },
  {
    slug: "plastering",
    title: "Plastering",
    icon: Brush,
    short: "Glass-smooth skimming, rendering and full re-plastering.",
    long: "Whether it's a single patch or a whole house, our plastering leaves walls and ceilings dead flat and ready for paint. Old lath, damp patches and cracked ceilings are all in a day's work.",
    points: ["Skimming & re-skims", "Board & plaster", "Rendering", "Coving & repairs"],
  },
  {
    slug: "gardening-work",
    title: "Gardening Work",
    icon: Leaf,
    short: "Patios, fencing, decking, turfing and full garden makeovers.",
    long: "We rebuild tired outdoor spaces into gardens you'll actually use — porcelain paving, sleeper beds, fencing, artificial or real turf, drainage and lighting, all finished tidily.",
    points: ["Patios & paving", "Fencing & decking", "Turfing & planting", "Clearance & maintenance"],
  },
  {
    slug: "media-wall-installation",
    title: "Media Wall Installation",
    icon: Tv,
    short: "Bespoke media walls with fireplaces, LED lighting and hidden cabling.",
    long: "Our signature build. A fully bespoke media wall with recessed electric fireplace, flush-mounted TV, ambient LED lighting and every cable and socket hidden inside the framework. Designed around your room and finished to furniture standard.",
    points: ["Bespoke stud framework", "Electric fireplace recess", "Flush TV mounting", "LED & hidden cabling"],
  },
];

export const STATS = [
  { value: "450+", label: "Projects completed" },
  { value: "12+", label: "Years of experience" },
  { value: "98%", label: "Happy clients" },
  { value: "5.0", label: "Average review score" },
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Harrow",
    rating: 5,
    quote:
      "Roshi built our media wall with the fireplace and mounted TV and it has completely transformed the living room. Every cable hidden, every edge perfect. Turned up on time every single day.",
  },
  {
    name: "James & Kirsty T.",
    location: "Watford",
    rating: 5,
    quote:
      "Full loft conversion including the en-suite. Clear pricing, no surprises and the plastering is honestly the best we've seen. We now have a proper master bedroom.",
  },
  {
    name: "Priya K.",
    location: "Wembley",
    rating: 5,
    quote:
      "Bathroom tiling and floor tiling in the kitchen. Immaculate grout lines and they cleaned up the site every evening. Would not use anyone else now.",
  },
  {
    name: "David R.",
    location: "St Albans",
    rating: 5,
    quote:
      "Painted and decorated the whole downstairs including new panelling in the hallway. Sharp lines, no drips, brilliant colour advice. Great value for the quality.",
  },
  {
    name: "Ellie B.",
    location: "Barnet",
    rating: 5,
    quote:
      "Ceiling spotlights and cove lighting installed plus a full re-skim. The room looks like something out of a magazine. Polite, tidy and genuinely helpful throughout.",
  },
  {
    name: "Mo A.",
    location: "Enfield",
    rating: 5,
    quote:
      "Garden makeover with new porcelain patio and fencing. Quoted quickly, started when they said they would and finished a day early. Reliability you can count on.",
  },
];

export const FAQS = [
  {
    q: "Which areas do you cover?",
    a: "We're based in the UK and work across London and the Home Counties — including Harrow, Watford, Wembley, Barnet, Enfield, St Albans and the surrounding areas. If you're a little further out, give us a call and we'll let you know honestly whether we can help.",
  },
  {
    q: "Are quotes really free?",
    a: "Yes. Every quote is completely free and with no obligation. We'll visit, measure up, talk through the options and send a clear written breakdown of labour and materials — no hidden extras added later.",
  },
  {
    q: "How long will my project take?",
    a: "It depends on scope. Tiling a bathroom is typically 3–5 days, a full re-skim of a room 1–2 days, and a loft conversion 6–10 weeks. You'll get a realistic schedule with your quote, and we tell you straight away if anything changes.",
  },
  {
    q: "Do you supply the materials?",
    a: "We can supply everything at trade rates, or fit materials you've chosen yourself. We only use quality, well-known brands for adhesives, plaster, paints and underlays — the parts you never see are the ones that determine how long the finish lasts.",
  },
  {
    q: "Is your work guaranteed?",
    a: "All our workmanship is guaranteed, and manufacturer warranties on supplied materials are passed straight to you. If something isn't right, we come back and put it right.",
  },
  {
    q: "How do payments work?",
    a: "A small deposit secures your dates, with staged payments on larger projects at agreed milestones and the balance on completion once you're happy. Bank transfer or card, and you always get a receipt.",
  },
  {
    q: "Will you keep the site clean?",
    a: "Always. Floors and furniture are protected with sheeting, dust is contained, and we tidy at the end of every working day. You should be able to live in your home while we work.",
  },
  {
    q: "Are you insured?",
    a: "Yes, we carry full public liability insurance and are happy to share our certificate before work begins.",
  },
];
