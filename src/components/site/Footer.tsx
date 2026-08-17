import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { BRANCHES, COMPANY } from "@/data/company";
import { CATEGORIES } from "@/data/catalog";

const SOLUTIONS = [
  { label: "Domestic RO Solutions", to: "/solutions/domestic" },
  { label: "Commercial RO Solutions", to: "/solutions/commercial" },
  { label: "Industrial RO Solutions", to: "/solutions/industrial" },
  { label: "Components & Spares", to: "/solutions/components" },
];

export function Footer() {
  const topCategories = CATEGORIES.slice(0, 8);

  return (
    <footer className="border-t border-border bg-ink text-white/70">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <div className="[&_span.text-ink]:text-white [&_span.text-muted-foreground]:text-white/55">
            <Logo />
          </div>
          <p className="mt-5 max-w-sm text-[14px] leading-7">
            Branded Purifier supplies, installs and services domestic, commercial and industrial water
            treatment systems, along with the full range of components and spares.
          </p>
          <p className="mt-4 text-[13px] leading-6 text-muted-foreground/80">
            Water treatment systems, components and maintenance.
          </p>
        </div>

        <div>
          <h2 className="text-[12px] font-semibold tracking-[0.16em] text-white uppercase">Solutions</h2>
          <ul className="mt-5 space-y-3 text-[14px]">
            {SOLUTIONS.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="transition-colors hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/projects" className="transition-colors hover:text-white">
                Installations & Projects
              </Link>
            </li>
            <li>
              <Link to="/branches" className="transition-colors hover:text-white">
                Branch Network
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[12px] font-semibold tracking-[0.16em] text-white uppercase">Catalogue</h2>
          <ul className="mt-5 space-y-3 text-[14px]">
            {topCategories.map((c) => (
              <li key={c.id}>
                <Link
                  to="/products"
                  search={{ category: c.id }}
                  className="transition-colors hover:text-white"
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="font-semibold text-white">
                View full catalogue
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[12px] font-semibold tracking-[0.16em] text-white uppercase">Contact</h2>
          <ul className="mt-5 space-y-4 text-[14px]">
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
              <span>
                <a href={`tel:${COMPANY.primaryPhone}`} className="block transition-colors hover:text-white">
                  {COMPANY.primaryPhone}
                </a>
                <a href={`tel:${COMPANY.proprietor.phone}`} className="block transition-colors hover:text-white">
                  {COMPANY.proprietor.phone}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {BRANCHES.length} branches across Kanchipuram, Vanthavasi, Dusi and Uthiramerur.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
              <span>GSTIN {COMPANY.gstin}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Branded Purifier. All rights reserved.</p>
          <p>Sales · Installation · Annual Maintenance · Spares</p>
        </Container>
      </div>
    </footer>
  );
}
