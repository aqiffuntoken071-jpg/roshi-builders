import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/site";
import { BtnAnchor, BtnLink } from "@/components/Btn";
import { Reveal } from "@/components/Reveal";

export function CtaBanner({
  title = "Contact Roshi today for a free quote",
  subtitle = "Tell us what you have in mind and we'll give you an honest, itemised price — no pressure, no obligation.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="gradient-brand text-primary-foreground">
      <div className="container-x section-y">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-fluid-h2">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <BtnAnchor href={PHONE_TEL} variant="white" size="lg">
              <Phone className="h-5 w-5" strokeWidth={2.5} /> {PHONE_DISPLAY}
            </BtnAnchor>
            <BtnLink to="/contact" variant="onDark" size="lg">
              Request a Free Quote
            </BtnLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
