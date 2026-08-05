import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const btnVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-display font-bold tracking-tight whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "gradient-brand text-primary-foreground shadow-card hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
        onDark:
          "border-2 border-charcoal-foreground/45 text-charcoal-foreground backdrop-blur-sm hover:bg-charcoal-foreground hover:text-charcoal hover:-translate-y-0.5",
        ghost: "text-foreground hover:bg-secondary",
        white: "bg-card text-primary shadow-card hover:-translate-y-0.5 hover:bg-accent",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-7 text-base sm:px-8",
      },
      full: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "primary", size: "md", full: false },
  },
);

type Variants = VariantProps<typeof btnVariants>;

export function Btn({
  className,
  variant,
  size,
  full,
  ...props
}: ComponentProps<"button"> & Variants) {
  return <button className={cn(btnVariants({ variant, size, full }), className)} {...props} />;
}

export function BtnLink({
  className,
  variant,
  size,
  full,
  ...props
}: ComponentProps<typeof Link> & Variants) {
  return <Link className={cn(btnVariants({ variant, size, full }), className)} {...props} />;
}

export function BtnAnchor({
  className,
  variant,
  size,
  full,
  ...props
}: ComponentProps<"a"> & Variants) {
  return <a className={cn(btnVariants({ variant, size, full }), className)} {...props} />;
}
