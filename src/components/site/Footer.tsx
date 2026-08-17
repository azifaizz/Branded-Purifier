import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { BRANCHES, COMPANY } from "@/data/company";
import { CATEGORIES } from "@/data/catalog";
import React, { type ComponentProps, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const SOLUTIONS = [
  { label: "Domestic RO Solutions", to: "/solutions/domestic" },
  { label: "Commercial RO Solutions", to: "/solutions/commercial" },
  { label: "Industrial RO Solutions", to: "/solutions/industrial" },
  { label: "Components & Spares", to: "/solutions/components" },
];

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Footer() {
  const topCategories = CATEGORIES.slice(0, 8);

  return (
    <div className="bg-ink text-white/70 pt-16">
      <footer className="md:rounded-t-[3rem] relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[2rem] border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
        <div className="bg-white/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

        <div className="grid w-full gap-12 xl:grid-cols-4 xl:gap-8">
          <AnimatedContainer className="space-y-6 xl:col-span-1">
            <div className="[&_span.text-ink]:text-white [&_span.text-muted-foreground]:text-white/55">
              <Logo />
            </div>
            <p className="text-sm leading-6 text-white/60">
              Branded Purifier supplies, installs and services domestic, commercial and industrial water
              treatment systems, along with the full range of components and spares.
            </p>
            <p className="text-[13px] leading-6 text-brand">
              Sales · Installation · Annual Maintenance · Spares
            </p>
            <div className="text-white/40 text-xs mt-8 space-y-1">
              <p>GSTIN: {COMPANY.gstin}</p>
              <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            </div>
          </AnimatedContainer>

          <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-3 xl:col-span-3 xl:mt-0 xl:pl-12">
            <AnimatedContainer delay={0.2}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-semibold tracking-widest text-white uppercase">Solutions</h3>
                <ul className="text-white/60 mt-6 space-y-4 text-sm">
                  {SOLUTIONS.map((s) => (
                    <li key={s.to}>
                      <Link to={s.to} className="hover:text-white transition-colors duration-300">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/projects" className="hover:text-white transition-colors duration-300">
                      Installations & Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/branches" className="hover:text-white transition-colors duration-300">
                      Branch Network
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.3}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-semibold tracking-widest text-white uppercase">Catalogue</h3>
                <ul className="text-white/60 mt-6 space-y-4 text-sm">
                  {topCategories.map((c) => (
                    <li key={c.id}>
                      <Link
                        to="/products"
                        search={{ category: c.id }}
                        className="hover:text-white transition-colors duration-300"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/products" className="hover:text-white transition-colors duration-300 font-semibold text-white/90">
                      View full catalogue
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimatedContainer>

            <AnimatedContainer delay={0.4}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-semibold tracking-widest text-white uppercase">Contact</h3>
                <ul className="text-white/60 mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      <a href={`tel:${COMPANY.primaryPhone}`} className="block hover:text-white transition-colors duration-300">
                        {COMPANY.primaryPhone}
                      </a>
                      <a href={`tel:${COMPANY.proprietor.phone}`} className="block hover:text-white transition-colors duration-300 mt-1">
                        {COMPANY.proprietor.phone}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    <span className="leading-5">
                      {BRANCHES.length} branches across Kanchipuram, Vanthavasi, Dusi and Uthiramerur.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </footer>
    </div>
  );
}
