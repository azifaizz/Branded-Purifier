import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background transition-shadow duration-300",
        scrolled ? "border-b border-border shadow-[0_1px_12px_rgba(17,17,17,0.06)]" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-[68px] items-center justify-between gap-6 lg:h-[76px]">
        <div className="flex flex-1 items-center justify-start">
          <Link to="/" aria-label="Branded Purifier — home" onClick={(e) => handleLinkClick(e, "/")}>
            <Logo />
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={(e) => handleLinkClick(e, item.to)}
                    className={cn(
                      "relative py-2 text-[14px] font-semibold tracking-wide transition-colors",
                      active ? "text-brand" : "text-ink-soft hover:text-brand",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-[6px] left-0 h-[2px] w-full bg-brand transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-6">
          <a
            href="tel:7530048763"
            aria-label="Call Branded Purifier"
            className="group relative flex h-[42px] w-[42px] items-center justify-center rounded-full bg-brand/10 text-brand transition-all duration-300 hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/30"
          >
            <span className="absolute inset-0 rounded-full animate-ping bg-brand/40 opacity-75 duration-1000"></span>
            <Phone size={18} aria-hidden="true" className="relative z-10 transition-transform group-hover:rotate-12 group-hover:scale-110" />
          </a>
          <Link
            to="/contact"
            onClick={(e) => handleLinkClick(e, "/contact")}
            className="inline-flex h-[42px] items-center rounded-[6px] bg-brand px-6 text-[13px] font-bold tracking-[0.08em] text-primary-foreground uppercase transition-colors hover:bg-brand-deep"
          >
            Get a Quote
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:7530048763"
            aria-label="Call Branded Purifier"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-border text-ink"
          >
            <Phone size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] border border-border text-ink"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <Container className="py-2">
            <ul className="divide-y divide-border">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link 
                    to={item.to} 
                    onClick={(e) => handleLinkClick(e, item.to)}
                    className="block py-4 text-[15px] font-semibold text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              onClick={(e) => handleLinkClick(e, "/contact")}
              className="my-4 inline-flex h-11 w-full items-center justify-center rounded-[6px] bg-brand text-[12px] font-semibold tracking-[0.1em] text-primary-foreground uppercase"
            >
              Get a Quote
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
