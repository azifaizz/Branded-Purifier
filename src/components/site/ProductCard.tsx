import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/catalog";
import { categoryName } from "@/data/catalog";

export function ProductCard({ product, eager = false }: { product: Product; eager?: boolean }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-sm"
    >
      {/* Realistic Water filling animation */}
      <div className="absolute inset-0 z-0 translate-y-[120%] transition-transform duration-[1800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:translate-y-[25%]" aria-hidden="true">
        {/* Squircles positioned at the top of the rising wrapper */}
        <div className="absolute left-1/2 top-[-15%] w-[250%] aspect-square -translate-x-1/2">
          {/* Back water layer (gentle waves) */}
          <div className="absolute inset-0 rounded-[43%] bg-brand/20 animate-[spin_7s_linear_infinite_reverse]" />
          {/* Middle water layer */}
          <div className="absolute inset-0 rounded-[38%] bg-brand/15 animate-[spin_5s_linear_infinite] scale-105" />
          {/* Main water body */}
          <div className="absolute inset-2 rounded-[40%] bg-brand-tint animate-[spin_10s_linear_infinite]" />
        </div>
        {/* Solid fill to ensure the bottom never shows a gap */}
        <div className="absolute inset-x-0 top-[20%] h-[200%] bg-brand-tint" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-transparent border-b border-border transition-colors duration-300 group-hover:border-transparent">
          <img
            src={product.image}
            alt={`${product.name} — ${categoryName(product.category)}`}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-[1.04] mix-blend-multiply dark:mix-blend-normal"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-[10px] font-semibold tracking-[0.16em] text-brand uppercase">
            {categoryName(product.category)}
          </p>
          <h3 className="mt-2 text-[15px] leading-snug font-semibold text-ink transition-colors duration-300 group-hover:text-brand-deep">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-ink-soft">{product.summary}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] text-ink uppercase transition-colors group-hover:text-brand-deep">
            View details
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
