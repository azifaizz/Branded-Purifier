import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs = [],
  align = "left",
  uppercaseTitle = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: { label: string; to?: string; params?: Record<string, string> }[];
  align?: "left" | "center";
  uppercaseTitle?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-brand-wash">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className={cn("relative py-14 lg:py-24", align === "center" && "flex flex-col items-center text-center")}>
        <nav aria-label="Breadcrumb">
          <ol className={cn("flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground", align === "center" && "justify-center")}>
            <li>
              <Link to="/" className="transition-colors hover:text-brand">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <ChevronRight size={12} aria-hidden="true" />
                {c.to ? (
                  <Link to={c.to} params={c.params as never} className="transition-colors hover:text-brand">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow mt-10">{eyebrow}</p>
        <h1 className={cn(
          "mt-4 max-w-4xl text-[30px] leading-[1.12] font-extrabold text-ink sm:text-[38px] lg:text-[46px]",
          uppercaseTitle && "uppercase tracking-[0.03em] font-display"
        )}>
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">{intro}</p>}
      </Container>
    </section>
  );
}
