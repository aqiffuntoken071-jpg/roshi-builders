import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";
const logo = "/images/logo.png";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/data/site";

const socialIcons = { Instagram, Facebook, TikTok: Music2 } as const;

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container-x grid gap-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-4 lg:gap-8">
        <div>
          <div className="flex min-w-0 items-center gap-2.5">
            <img
              src={logo}
              alt="Roshi Builders logo"
              width={44}
              height={44}
              loading="lazy"
              className="h-10 w-10 shrink-0"
            />
            <span className="font-display text-lg font-extrabold uppercase leading-none tracking-tight">
              Roshi Builders
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-foreground/70">
            A UK construction and home improvement team delivering quality craftsmanship you can
            trust — from a single tiled floor to a full loft conversion.
          </p>
          <div className="mt-5 flex gap-2.5">
            {(["Instagram", "Facebook", "TikTok"] as const).map((name) => {
              const Icon = socialIcons[name];
              const href =
                name === "Instagram"
                  ? "https://instagram.com"
                  : name === "Facebook"
                    ? "https://facebook.com"
                    : "https://tiktok.com";
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Roshi Builders on ${name}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-charcoal-foreground/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em]">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-charcoal-foreground/70 transition-colors hover:text-charcoal-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em]">Our Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="text-charcoal-foreground/70 transition-colors hover:text-charcoal-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em]">Get In Touch</h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li>
              <a
                href={PHONE_TEL}
                className="flex items-start gap-3 font-display text-lg font-bold transition-colors hover:text-primary"
              >
                <Phone className="mt-1 h-4 w-4 shrink-0" strokeWidth={2.5} />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3 text-charcoal-foreground/70">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="mailto:info@roshibuilders.co.uk" className="min-w-0 break-words hover:text-charcoal-foreground">
                info@roshibuilders.co.uk
              </a>
            </li>
            <li className="flex items-start gap-3 text-charcoal-foreground/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>London &amp; the Home Counties · Mon–Sat, 8am–6pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-charcoal-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Roshi Builders. All rights reserved.</p>
          <p>Fully insured · Workmanship guaranteed · Free no-obligation quotes</p>
        </div>
      </div>
    </footer>
  );
}
