import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Award, Eye, HandshakeIcon, Heart, Ruler, ShieldCheck } from "lucide-react";
import { STATS } from "@/data/site";
import { BtnLink } from "@/components/Btn";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { roshi, hero1, hero2, workPainting } from "@/assets/photos";

const title = "About Roshi Builders | 12+ Years of UK Home Improvement";
const description =
  "Meet Roshi Builders — a hands-on UK construction team with 12+ years' experience, 450+ completed projects and a reputation built on quality, reliability and attention to detail.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const reasons = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    copy: "We use trade-grade materials and proven methods. If a wall isn't flat or a grout line isn't straight, it gets redone — not signed off.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability You Can Plan Around",
    copy: "Agreed start dates, realistic timescales and daily updates. You'll always know who's coming and what's happening next.",
  },
  {
    icon: Eye,
    title: "Obsessive Attention to Detail",
    copy: "Mitred edges, hidden cabling, flush finishes. The small things nobody notices are exactly the things we spend the longest on.",
  },
];

const values = [
  { icon: HandshakeIcon, title: "Honest pricing", copy: "Itemised quotes, no surprise extras." },
  { icon: Heart, title: "Respect for your home", copy: "Dust-sheeted, protected, tidied daily." },
  { icon: Ruler, title: "Do it once, properly", copy: "Correct prep before any finish goes on." },
  { icon: Award, title: "Stand behind the work", copy: "Guaranteed, and we come back if needed." },
];

function AboutPage() {
  return (
    <>
      <PageHero images={[hero2, hero1, workPainting, roshi]}>
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-primary-foreground/90">About Us</span>
          <h1 className="text-fluid-hero mt-3 uppercase">Built on trust</h1>
          <p className="mt-5 text-base leading-relaxed text-charcoal-foreground/85 sm:text-lg">
            A decade of turning tired rooms into spaces people love coming home to — one honest
            job at a time.
          </p>
        </Reveal>
      </PageHero>

      {/* STATS BAR */}
      <section className="border-b border-border bg-secondary">
        <div className="container-x grid grid-cols-2 gap-6 py-9 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="text-center">
              <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="container-x section-y">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="text-fluid-h2 mt-3">From a single toolbox to a trusted local name</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Roshi Builders started the way most good trades do — one person, one van, and a
              refusal to leave a job half right. Word spread through neighbours and friends, and
              over twelve years that turned into a small, dependable team known across London and
              the Home Counties.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We deliberately stayed small. It means Roshi is still on site, still checking the
              level, still the person you speak to on the phone. Nothing gets subcontracted out to
              someone who doesn't care as much as we do.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today we handle everything from a re-skimmed ceiling to a full loft conversion, and
              our bespoke media walls have become the projects clients most often recommend us for.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-8">
              <div className="grid gap-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-center">
                <img
                  src={roshi}
                  alt="Bespoke media wall with electric fireplace and recessed lighting, built by Roshi"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  sizes="(max-width: 640px) 92vw, 9rem"
                  className="aspect-square w-full rounded-lg object-cover sm:w-36"
                />
                <div className="min-w-0">
                  <span className="eyebrow">Founder</span>
                  <h3 className="mt-2 text-2xl">Roshi</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Time-served builder, plasterer and tiler. On site most days, and the person who
                    signs off every project.
                  </p>
                </div>
              </div>
              <blockquote className="mt-6 rule-accent border-t border-border pt-6 text-base italic leading-relaxed text-foreground sm:text-lg">
                <p className="mt-4">
                  “I've never wanted to be the biggest builder in the area. I want to be the one
                  people recommend without hesitating.”
                </p>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-secondary">
        <div className="container-x section-y">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="text-fluid-h2 mt-3">Three reasons clients come back</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <article className="card-hover h-full rounded-xl border border-border bg-card p-6 shadow-card sm:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-brand text-primary-foreground">
                    <r.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x section-y">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Our Values</span>
          <h2 className="text-fluid-h2 mt-3">How we work, every single job</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="card-hover h-full rounded-xl border border-border bg-card p-6 shadow-card">
                <v.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-base font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          <BtnLink to="/services" size="lg">
            Explore Our Services <ArrowRight className="h-5 w-5" />
          </BtnLink>
          <BtnLink to="/gallery" variant="outline" size="lg">
            Browse the Gallery
          </BtnLink>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
