import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
const logo = "/images/logo.png";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/data/site";
import { BtnAnchor, BtnLink } from "@/components/Btn";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="hidden bg-charcoal text-charcoal-foreground lg:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <p className="opacity-80">
            Tiling · Plastering · Loft Conversions · Media Walls — London &amp; Home Counties
          </p>
          <a href={PHONE_TEL} className="font-semibold transition-opacity hover:opacity-75">
            Free quotes · {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-border bg-background/90 shadow-card backdrop-blur-md"
            : "border-transparent bg-background",
        )}
      >
        <div className="container-x grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:h-20 lg:flex lg:justify-between">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Roshi Builders home">
            <img
              src={logo}
              alt="Roshi Builders logo"
              width={40}
              height={40}
              className="h-9 w-9 shrink-0 md:h-11 md:w-11"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-extrabold uppercase leading-none tracking-tight md:text-xl">
                Roshi <span className="text-primary">Builders</span>
              </span>
              <span className="mt-1 hidden text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground sm:block">
                Construction &amp; Home Improvement
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative rounded-md px-3 py-2 text-sm font-semibold text-foreground/75 transition-colors hover:text-primary data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 rounded-md px-2 py-2 font-display text-sm font-bold text-primary transition-colors hover:bg-accent sm:px-3"
            >
              <Phone className="h-4 w-4 shrink-0" strokeWidth={2.5} />
              <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
              <span className="sr-only sm:hidden">Call {PHONE_DISPLAY}</span>
            </a>
            <BtnLink to="/contact" size="sm" className="hidden xl:inline-flex">
              Free Quote
            </BtnLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden",
            open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="container-x flex flex-col py-3" aria-label="Mobile navigation">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="border-b border-border/60 py-3.5 font-display text-base font-bold text-foreground transition-colors last:border-0 hover:text-primary data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <div className="grid gap-2 py-4 sm:grid-cols-2">
              <BtnAnchor href={PHONE_TEL} variant="outline" full>
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </BtnAnchor>
              <BtnLink to="/contact" full>
                Get a Free Quote
              </BtnLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
