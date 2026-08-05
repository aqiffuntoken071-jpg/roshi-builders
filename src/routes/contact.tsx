import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Music2,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/data/site";
import { Btn, BtnAnchor } from "@/components/Btn";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Contact Roshi Builders | Free Quotes — 07918 208882";
const description =
  "Contact Roshi Builders for a free, no-obligation quote. Call 07918 208882, send a message, or check our service areas across London and the Home Counties.";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search["service"] === "string" ? (search["service"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const AREAS = [
  "Harrow",
  "Watford",
  "Wembley",
  "Barnet",
  "Enfield",
  "St Albans",
  "Edgware",
  "Ruislip",
  "Borehamwood",
  "Hemel Hempstead",
  "Central London",
  "Uxbridge",
];

const socials = [
  { name: "Instagram", Icon: Instagram, href: "https://instagram.com" },
  { name: "Facebook", Icon: Facebook, href: "https://facebook.com" },
  { name: "TikTok", Icon: Music2, href: "https://tiktok.com" },
];

const fieldClass =
  "h-12 w-full rounded-md border border-input bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25";

function ContactPage() {
  const { service } = Route.useSearch();
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thanks — your enquiry has been sent", {
        description: `Roshi will be in touch shortly. Need us sooner? Call ${PHONE_DISPLAY}.`,
      });
    }, 700);
  }

  return (
    <>
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container-x py-16 md:py-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-primary-foreground/90">Contact</span>
            <h1 className="text-fluid-hero mt-3 uppercase">Let's talk</h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal-foreground/80 sm:text-lg">
              Free quotes, honest advice and a same-day reply. Call, message or fill in the form.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row">
              <BtnAnchor href={PHONE_TEL} size="lg">
                <Phone className="h-5 w-5" strokeWidth={2.5} /> {PHONE_DISPLAY}
              </BtnAnchor>
              <BtnAnchor href="mailto:info@roshibuilders.co.uk" variant="onDark" size="lg">
                <Mail className="h-5 w-5" /> Email Us
              </BtnAnchor>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          {/* FORM */}
          <Reveal>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
              <span className="eyebrow">Free Quote</span>
              <h2 className="text-fluid-h2 mt-3">Tell us about your project</h2>
              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-semibold">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className={fieldClass}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-semibold">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-semibold">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="07..."
                      className={fieldClass}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="service" className="text-sm font-semibold">
                      Service needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue={service ?? ""}
                      className={fieldClass}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Something else</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Rough size of the room, what you'd like done, and when you'd like it started."
                    className="w-full rounded-md border border-input bg-background p-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25"
                  />
                </div>

                <Btn type="submit" size="lg" full disabled={sending}>
                  {sending ? "Sending…" : "Send Enquiry"} <Send className="h-4 w-4" />
                </Btn>
                <p className="flex items-start gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  We only use your details to reply to this enquiry. No marketing, ever.
                </p>
              </form>
            </div>
          </Reveal>

          {/* DETAILS */}
          <Reveal delay={120} className="space-y-5">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl">Get in touch directly</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a
                    href={PHONE_TEL}
                    className="flex items-start gap-3 font-display text-lg font-bold text-primary transition-opacity hover:opacity-75"
                  >
                    <Phone className="mt-1 h-5 w-5 shrink-0" strokeWidth={2.5} />
                    {PHONE_DISPLAY}
                  </a>
                  <p className="ml-8 text-xs text-muted-foreground">Tap to call from your phone</p>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a
                    href="mailto:info@roshibuilders.co.uk"
                    className="min-w-0 break-words font-medium hover:text-primary"
                  >
                    info@roshibuilders.co.uk
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium">Monday – Saturday, 8am – 6pm</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium">London &amp; the Home Counties</span>
                </li>
              </ul>

              <h3 className="mt-7 font-display text-sm font-bold uppercase tracking-[0.16em]">
                Follow our work
              </h3>
              <div className="mt-3 flex gap-2.5">
                {socials.map(({ name, Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Roshi Builders on ${name}`}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-border text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <div className="p-6">
                <h2 className="text-xl">Service area</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We cover most of Greater London and the surrounding counties.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {AREAS.map((a) => (
                    <li
                      key={a}
                      className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <iframe
                title="Roshi Builders service area map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.55%2C51.40%2C0.15%2C51.72&amp;layer=mapnik"
                loading="lazy"
                className="h-64 w-full border-0 sm:h-72"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
