import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const btn = cva(
  "inline-flex items-center justify-center gap-2 rounded-[6px] text-[12px] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-brand text-primary-foreground hover:bg-brand-deep",
        deep: "bg-brand-deep text-primary-foreground hover:bg-ink",
        outline: "border border-border bg-background text-ink hover:border-brand hover:text-brand",
        onDark: "border border-white/35 text-primary-foreground hover:border-white hover:bg-white/10",
      },
      size: {
        md: "h-11 px-6",
        sm: "h-9 px-4 text-[11px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Variants = VariantProps<typeof btn>;

export function Btn({ className, variant, size, ...props }: ComponentProps<"button"> & Variants) {
  return <button className={cn(btn({ variant, size }), className)} {...props} />;
}

export function BtnLink({
  to,
  params,
  search,
  className,
  variant,
  size,
  children,
}: {
  to: string;
  params?: Record<string, string>;
  search?: Record<string, unknown>;
  className?: string;
  children: ReactNode;
} & Variants) {
  return (
    <Link
      to={to}
      params={params as never}
      search={search as never}
      className={cn(btn({ variant, size }), className)}
    >
      {children}
    </Link>
  );
}

export function CallLink({ className, variant, size, children }: { className?: string; children: ReactNode } & Variants) {
  return (
    <a href="tel:7530048763" className={cn(btn({ variant, size }), className)}>
      {children}
    </a>
  );
}
