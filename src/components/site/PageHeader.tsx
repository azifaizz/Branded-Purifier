import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: { label: string; to?: string; params?: Record<string, string> }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-brand-wash">
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className="relative py-14 lg:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground">
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
        <p className="eyebrow mt-8">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-[30px] leading-[1.12] font-bold text-ink sm:text-[38px] lg:text-[46px]">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground">{intro}</p>}
      </Container>
    </section>
  );
}
