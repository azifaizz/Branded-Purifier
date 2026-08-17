import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/catalog";
import { categoryName } from "@/data/catalog";

export function ProductCard({ product, eager = false }: { product: Product; eager?: boolean }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/45 hover:shadow-[0_18px_40px_-24px_rgba(47,128,201,0.55)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-wash">
        <img
          src={product.image}
          alt={`${product.name} — ${categoryName(product.category)}`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-border p-5">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-brand uppercase">
          {categoryName(product.category)}
        </p>
        <h3 className="mt-2 text-[15px] leading-snug font-semibold text-ink">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-muted-foreground">{product.summary}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] text-ink uppercase transition-colors group-hover:text-brand">
          View details
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
