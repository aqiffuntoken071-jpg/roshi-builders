import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import hero1 from "@/assets/hero-1.jpg";
import hero3 from "@/assets/hero-3.jpg";
import workLighting from "@/assets/work-lighting.jpg";
import workPainting from "@/assets/work-painting.jpg";
import { STATS, TESTIMONIALS } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const title = "Testimonials | What Roshi Builders' Customers Say";
const description =
  "Read genuine 5-star reviews from homeowners across London and the Home Counties about the quality, tidiness and reliability of Roshi Builders.";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/testimonials" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-primary" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function TestimonialsPage() {
  return (
    <>
      <PageHero images={[hero3, workLighting, hero1, workPainting]}>
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-primary-foreground/90">Testimonials</span>
          <h1 className="text-fluid-hero mt-3 uppercase">Trusted by homeowners</h1>
          <p className="mt-5 text-base leading-relaxed text-charcoal-foreground/85 sm:text-lg">
            We'd rather let our customers do the talking. Swipe through what they've said.
          </p>
        </Reveal>
      </PageHero>

      <section className="container-x section-y">
        <Reveal>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div>
                <span className="eyebrow">Reviews</span>
                <h2 className="text-fluid-h2 mt-3">Real words from real projects</h2>
              </div>
              <div className="flex gap-2 sm:justify-self-end">
                <CarouselPrevious className="static translate-y-0 h-11 w-11 border-border hover:bg-accent hover:text-primary" />
                <CarouselNext className="static translate-y-0 h-11 w-11 border-border hover:bg-accent hover:text-primary" />
              </div>
            </div>

            <CarouselContent className="mt-10 -ml-4">
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={t.name} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <figure className="card-hover flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-card sm:p-7">
                    <Quote className="h-8 w-8 text-primary/25" />
                    <Stars n={t.rating} />
                    <blockquote className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-6 border-t border-border pt-4 font-display text-sm font-bold">
                      {t.name}
                      <span className="ml-1 font-medium text-muted-foreground">· {t.location}</span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="mt-6 text-center text-xs text-muted-foreground sm:hidden">
            Swipe to see more reviews
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary">
        <div className="container-x grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
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

      <CtaBanner
        title="Be our next five-star review"
        subtitle="Tell us about your project and we'll get you an honest quote, fast."
      />
    </>
  );
}
