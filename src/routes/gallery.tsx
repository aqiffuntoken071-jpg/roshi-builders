import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import workTiling from "@/assets/work-tiling.jpg";
import workPainting from "@/assets/work-painting.jpg";
import workFlooring from "@/assets/work-flooring.jpg";
import workPlastering from "@/assets/work-plastering.jpg";
import workGarden from "@/assets/work-garden.jpg";
import workLighting from "@/assets/work-lighting.jpg";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { cn } from "@/lib/utils";

const title = "Gallery | Completed Projects by Roshi Builders";
const description =
  "Browse completed Roshi Builders projects — media walls, tiled floors and bathrooms, plastering, ceiling lighting, decorating, flooring and landscaped gardens.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Item = { src: string; alt: string; category: string; tall?: boolean };

const ITEMS: Item[] = [
  { src: hero1, alt: "Bespoke media wall with electric fireplace, mounted TV and LED lighting", category: "Media Walls", tall: true },
  { src: workLighting, alt: "Recessed ceiling spotlights with cove strip lighting", category: "Lighting" },
  { src: workTiling, alt: "Large format porcelain tiled kitchen floor", category: "Tiling" },
  { src: hero3, alt: "Fully tiled modern bathroom with walk-in shower", category: "Bathrooms", tall: true },
  { src: workPainting, alt: "Painted hallway with wall panelling and crisp white woodwork", category: "Painting" },
  { src: workPlastering, alt: "Smoothly skimmed walls and ceiling ready for decoration", category: "Plastering" },
  { src: workFlooring, alt: "Newly fitted light oak laminate flooring", category: "Flooring" },
  { src: hero2, alt: "Loft conversion bedroom with skylights and laminate flooring", category: "Loft Conversions", tall: true },
  { src: workGarden, alt: "Landscaped garden with porcelain patio, lawn and new fencing", category: "Gardens" },
];

const CATEGORIES = ["All", ...Array.from(new Set(ITEMS.map((i) => i.category)))];

const HEADER_SLIDES = [hero1, hero3, workTiling, workGarden, hero2];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const id = window.setInterval(
      () => setSlide((s) => (s + 1) % HEADER_SLIDES.length),
      4500,
    );
    return () => window.clearInterval(id);
  }, []);

  const visible = useMemo(
    () => (filter === "All" ? ITEMS : ITEMS.filter((i) => i.category === filter)),
    [filter],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpenIndex((i) => (i === null ? null : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-charcoal text-charcoal-foreground">
        <div className="absolute inset-0 -z-10">
          {HEADER_SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              loading={i === 0 ? "eager" : "lazy"}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms]",
                i === slide ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
          <div className="absolute inset-0 bg-charcoal/75" />
        </div>
        <div className="container-x py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-primary-foreground/90">Portfolio</span>
            <h1 className="text-fluid-hero mt-3 uppercase">Our work</h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal-foreground/85 sm:text-lg">
              Real projects, real homes. Filter by trade and tap any photo to view it full size.
            </p>
            <div className="mt-8 flex gap-2" aria-hidden="true">
              {HEADER_SLIDES.map((src, i) => (
                <span
                  key={src}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === slide ? "w-8 bg-primary" : "w-3 bg-charcoal-foreground/40",
                  )}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x section-y">
        <div
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Filter gallery by category"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => {
                setFilter(c);
                setOpenIndex(null);
              }}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition-all duration-300",
                filter === c
                  ? "border-primary gradient-brand text-primary-foreground shadow-card"
                  : "border-border text-muted-foreground hover:border-primary hover:bg-accent hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((item, i) => (
            <Reveal key={item.src + item.category} delay={(i % 4) * 70}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`View larger: ${item.alt}`}
                className="group relative block w-full overflow-hidden rounded-xl border border-border bg-muted shadow-card card-hover"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1024}
                  height={item.tall ? 1280 : 1024}
                  loading="lazy"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, (max-width: 1280px) 31vw, 23vw"
                  className={cn(
                    "w-full object-cover transition-transform duration-[900ms] group-hover:scale-105",
                    item.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                  )}
                />
                <span className="pointer-events-none absolute inset-0 flex flex-col justify-end gradient-veil p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="mb-2 h-5 w-5 text-charcoal-foreground" />
                  <span className="text-left text-xs font-bold uppercase tracking-wider text-primary-foreground/80">
                    {item.category}
                  </span>
                  <span className="mt-1 text-left text-sm font-semibold text-charcoal-foreground">
                    {item.alt}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {current && mounted &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/95 p-4 animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-charcoal-foreground/25 text-charcoal-foreground transition-colors hover:bg-charcoal-foreground/15"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-charcoal-foreground/25 text-charcoal-foreground transition-colors hover:bg-charcoal-foreground/15 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-charcoal-foreground/25 text-charcoal-foreground transition-colors hover:bg-charcoal-foreground/15 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-full w-full max-w-4xl text-center"
          >
            <img
              src={current.src}
              alt={current.alt}
              className="mx-auto max-h-[75vh] w-auto rounded-xl object-contain shadow-card"
            />
            <figcaption className="mt-4 px-8 text-sm text-charcoal-foreground/80">
              <span className="font-display font-bold uppercase tracking-wider text-primary-foreground/80">
                {current.category}
              </span>
              <span className="mt-1 block">{current.alt}</span>
            </figcaption>
          </figure>
        </div>,
          document.body,
        )}

      <CtaBanner
        title="Like what you see?"
        subtitle="Book a free site visit and we'll show you exactly what's possible in your space."
      />
    </>
  );
}
