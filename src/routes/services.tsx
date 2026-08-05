import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import workTiling from "@/assets/work-tiling.jpg";
import workPainting from "@/assets/work-painting.jpg";
import workFlooring from "@/assets/work-flooring.jpg";
import workPlastering from "@/assets/work-plastering.jpg";
import workGarden from "@/assets/work-garden.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import { PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/data/site";
import { BtnAnchor, BtnLink } from "@/components/Btn";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Our Services | Tiling, Plastering & Media Walls — Roshi Builders";
const description =
  "Explore Roshi Builders' services: tiling, painting and decorating, laminate flooring, loft conversions, plastering, gardening work and bespoke media wall installation.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const imageBySlug: Record<string, string> = {
  tiling: workTiling,
  "painting-decorating": workPainting,
  "laminate-flooring": workFlooring,
  "loft-conversions": hero2,
  plastering: workPlastering,
  "gardening-work": workGarden,
  "media-wall-installation": hero1,
};

function ServicesPage() {
  return (
    <>
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container-x py-16 md:py-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-primary-foreground/90">Services</span>
            <h1 className="text-fluid-hero mt-3 uppercase">What we build</h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal-foreground/80 sm:text-lg">
              Seven core services, all delivered by the same team — so your finishes line up and
              your project stays on schedule.
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-md md:top-20">
        <div className="container-x flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="shrink-0 rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:border-primary hover:bg-accent hover:text-primary"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      <div className="container-x section-y space-y-14 md:space-y-20">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug}>
            <article
              id={s.slug}
              className="scroll-mt-40 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-xl border border-border shadow-card">
                  <img
                    src={imageBySlug[s.slug]}
                    alt={`${s.title} project by Roshi Builders`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] hover:scale-105"
                  />
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg gradient-brand text-primary-foreground">
                  <s.icon className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-2xl sm:text-3xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.long}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-medium">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                      <span className="min-w-0">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row">
                  <BtnLink to="/contact" search={{ service: s.title } as never}>
                    Quote for {s.title} <ArrowRight className="h-4 w-4" />
                  </BtnLink>
                  <BtnAnchor href={PHONE_TEL} variant="outline">
                    <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                  </BtnAnchor>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <CtaBanner
        title="Need something not on the list?"
        subtitle="If it's part of building or improving a home, there's a good chance we do it. Ask us."
      />
    </>
  );
}
