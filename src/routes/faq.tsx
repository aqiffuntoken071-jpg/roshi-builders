import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import workFlooring from "@/assets/work-flooring.jpg";
import workGarden from "@/assets/work-garden.jpg";
import { FAQS, PHONE_DISPLAY, PHONE_TEL } from "@/data/site";
import { BtnAnchor, BtnLink } from "@/components/Btn";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

const title = "FAQ | Areas Covered, Quotes & Guarantees — Roshi Builders";
const description =
  "Answers to common questions about Roshi Builders: areas covered, free quotes, project timelines, materials, guarantees, insurance and how payments work.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/faq" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="container-x py-16 md:py-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-primary-foreground/90">FAQ</span>
            <h1 className="text-fluid-hero mt-3 uppercase">Good questions</h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal-foreground/80 sm:text-lg">
              Everything homeowners usually ask before we start — answered straight.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-border last:border-b"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-bold hover:text-primary hover:no-underline sm:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pr-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={120}>
            <aside className="sticky top-28 rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl">Still not sure?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Ask Roshi directly. No sales script, no pressure — just a straight answer about
                whether we can help and what it's likely to cost.
              </p>
              <div className="mt-6 grid gap-2.5">
                <BtnAnchor href={PHONE_TEL} full>
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </BtnAnchor>
                <BtnLink to="/contact" variant="outline" full>
                  Send a Message
                </BtnLink>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
