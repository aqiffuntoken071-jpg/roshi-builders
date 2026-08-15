import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  images: string[];
  children: ReactNode;
  /** ms between slides */
  interval?: number;
  className?: string;
  showDots?: boolean;
};

/**
 * Dark page header with a slow auto-rotating photo background.
 * Purely decorative — images are aria-hidden with empty alt text.
 */
export function PageHero({
  images,
  children,
  interval = 4500,
  className,
  showDots = true,
}: PageHeroProps) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => setSlide((s) => (s + 1) % images.length), interval);
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-charcoal text-charcoal-foreground",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10">
        {images.map((src, i) => (
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
        {children}
        {showDots && images.length > 1 && (
          <div className="mt-8 flex gap-2" aria-hidden="true">
            {images.map((src, i) => (
              <span
                key={src}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === slide ? "w-8 bg-primary" : "w-3 bg-charcoal-foreground/40",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
