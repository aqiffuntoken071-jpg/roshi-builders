import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, SERVICES, STATS, TESTIMONIALS } from "@/data/site";
import { BtnAnchor, BtnLink } from "@/components/Btn";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { hero1, hero2, hero3, workTiling, workPainting, workFlooring, workGarden, workLighting, workPlastering } from "@/assets/photos";

const title = "Roshi Builders | Quality Craftsmanship You Can Trust";
const description =
  "UK builders for tiling, plastering, painting & decorating, laminate flooring, loft conversions, gardens and bespoke media walls. Free quotes — call 07918 208882.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const slides = [
  { src: hero1, alt: "Bespoke media wall with electric fireplace, mounted TV and blue LED lighting" },
  { src: hero2, alt: "Completed loft room with skylight, fresh plaster and new laminate flooring" },
  { src: hero3, alt: "Marble-effect tiled bathroom with new vanity unit and spotlights" },
];

const trustBadges = [
  { icon: ShieldCheck, title: "Fully Insured", copy: "Public liability cover on every job." },
  { icon: BadgeCheck, title: "Guaranteed Work", copy: "Workmanship backed, no quibbles." },
  { icon: Clock, title: "On Time, Every Time", copy: "We turn up when we say we will." },
  { icon: ThumbsUp, title: "5-Star Rated", copy: "Reviewed by hundreds of homeowners." },
];

const galleryPreview = [
  { src: workLighting, alt: "Drop ceiling with recessed spotlights and blue LED cove lighting" },
  { src: workTiling, alt: "Marble-effect tiled bathroom walls and floor" },
  { src: workPainting, alt: "Decorated living room with lit alcove shelving and LED coving" },
  { src: workFlooring, alt: "Laminate-clad staircase with brushed metal nosings" },
  { src: workPlastering, alt: "Freshly skimmed ceiling and walls with recessed lighting" },
  { src: workGarden, alt: "Finished living room with media wall, alcoves and LED coving" },
];

function HomePage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={1920}
              height={1280}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              sizes="100vw"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${
                i === active ? "slow-zoom opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 gradient-veil" />
        </div>

        <div className="container-x relative flex min-h-[36rem] flex-col justify-center py-20 md:min-h-[42rem] md:py-28 lg:min-h-[46rem]">
          <Reveal className="max-w-3xl text-charcoal-foreground">
            <span className="eyebrow text-primary-foreground/90">
              <Sparkles className="h-3.5 w-3.5" /> UK Construction &amp; Home Improvement
            </span>
            <h1 className="text-fluid-hero mt-4 uppercase">
              Quality Craftsmanship
              <span className="mt-1 block text-primary-foreground/70">You Can Trust</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-foreground/80 sm:text-lg">
              Roshi Builders is a small, hands-on team delivering tiling, plastering, decorating,
              flooring, loft conversions and bespoke media walls — finished to a standard we'd
              happily put in our own homes.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <BtnLink to="/contact" size="lg">
                Get a Free Quote <ArrowRight className="h-5 w-5" />
              </BtnLink>
              <BtnAnchor href={PHONE_TEL} variant="onDark" size="lg">
                <Phone className="h-5 w-5" strokeWidth={2.5} /> {PHONE_DISPLAY}
              </BtnAnchor>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-charcoal-foreground/75">
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-current text-primary-foreground" /> 5.0 average rating
              </span>
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4" /> 450+ projects completed
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" /> Fully insured
              </span>
            </div>
          </Reveal>

          <div className="mt-12 flex gap-2" role="tablist" aria-label="Hero project slides">
            {slides.map((s, i) => (
              <button
                key={s.src}
                role="tab"
                aria-selected={i === active}
                aria-label={`Show project ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active
                    ? "w-12 bg-primary-foreground"
                    : "w-6 bg-primary-foreground/35 hover:bg-primary-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-x section-y">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">About Roshi Builders</span>
            <h2 className="text-fluid-h2 mt-3">
              Local builders who treat your home like their own
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              For over a decade we've been transforming homes across London and the Home Counties.
              We're not a faceless contractor — Roshi is on site, hands on, making sure the detail is
              right before anyone calls a job finished.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              One team handles the lot: stripping out, plastering, tiling, flooring, lighting and
              decorating. That means fewer trades to chase, one clear price, and a finish that lines
              up perfectly from wall to floor.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row">
              <BtnLink to="/about" variant="primary">
                Our Story <ArrowRight className="h-4 w-4" />
              </BtnLink>
              <BtnLink to="/gallery" variant="outline">
                See Our Work
              </BtnLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="card-hover rounded-xl border border-border bg-card p-5 text-center shadow-card sm:p-6"
              >
                <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-secondary">
        <div className="container-x section-y">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What We Do</span>
            <h2 className="text-fluid-h2 mt-3">Seven trades, one trusted team</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whatever your project needs, it's covered under one roof and one price.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="card-hover group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg gradient-brand text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={420}>
              <Link
                to="/contact"
                className="card-hover group flex h-full min-h-[13rem] flex-col justify-between rounded-xl gradient-brand p-6 text-primary-foreground shadow-card"
              >
                <CalendarCheck className="h-8 w-8" />
                <div>
                  <h3 className="text-lg font-bold">Not sure what you need?</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Send us a photo and a few words — we'll tell you what's involved and what it
                    costs.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold">
                    Ask Roshi
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="container-x section-y">
        <Reveal className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div>
            <span className="eyebrow">Recent Projects</span>
            <h2 className="text-fluid-h2 mt-3">Finished work, photographed as-is</h2>
          </div>
          <BtnLink to="/gallery" variant="outline" className="justify-self-start sm:justify-self-end">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </BtnLink>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPreview.map((g, i) => (
            <Reveal key={g.src} delay={i * 70}>
              <Link
                to="/gallery"
                className="group relative block overflow-hidden rounded-xl border border-border bg-muted shadow-card"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 gradient-veil p-4 pt-10 text-sm font-semibold text-charcoal-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {g.alt}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container-x section-y">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <b.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold">{b.title}</h3>
                  <p className="mt-1 text-sm text-charcoal-foreground/70">{b.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL TEASER */}
      <section className="container-x section-y">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Kind Words</span>
          <h2 className="text-fluid-h2 mt-3">What our customers say</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="card-hover flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 font-display text-sm font-bold">
                  {t.name} <span className="text-muted-foreground">· {t.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <BtnLink to="/testimonials" variant="outline">
            Read All Reviews <ArrowRight className="h-4 w-4" />
          </BtnLink>
        </div>
      </section>

      <CtaBanner
        title="Ready to start? Get a free quote today"
        subtitle={`Call Roshi directly on ${PHONE_DISPLAY} or send a few details and we'll come back to you the same day.`}
      />
    </>
  );
}
