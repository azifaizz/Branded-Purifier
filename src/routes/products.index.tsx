import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaBand } from "@/components/site/CtaBand";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";
import { cn } from "@/lib/utils";

type Search = { category?: string | undefined };

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    category: typeof search["category"] === "string" ? (search["category"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Product Catalogue — Branded Purifier" },
      {
        name: "description",
        content:
          "Full catalogue of RO purifiers, commercial and industrial plants, membranes, pumps, vessels, media, panels and water treatment spares.",
      },
      { property: "og:title", content: "Product Catalogue — Branded Purifier" },
      { property: "og:description", content: "RO systems and water treatment components across 22 categories." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  const { category } = Route.useSearch();
  const items = category ? PRODUCTS.filter((p) => p.category === category) : PRODUCTS;

  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Product catalogue"
        intro={`${PRODUCTS.length} systems, component groups and spares across ${CATEGORIES.length} categories.`}
        crumbs={[{ label: "Products" }]}
      />

      <section className="py-14 lg:py-18">
        <Container>
          <nav aria-label="Product categories" className="border-b border-border pb-6">
            <ul className="flex flex-wrap gap-2">
              <li>
                <Link
                  to="/products"
                  search={{}}
                  className={cn(
                    "inline-flex h-9 items-center rounded-[6px] border px-4 text-[12px] font-semibold tracking-[0.06em] transition-colors",
                    !category ? "border-brand bg-brand text-primary-foreground" : "border-border text-ink-soft hover:border-brand hover:text-brand",
                  )}
                >
                  All ({PRODUCTS.length})
                </Link>
              </li>
              {CATEGORIES.map((c) => {
                const count = PRODUCTS.filter((p) => p.category === c.id).length;
                if (count === 0) return null;
                const active = category === c.id;
                return (
                  <li key={c.id}>
                    <Link
                      to="/products"
                      search={{ category: c.id }}
                      className={cn(
                        "inline-flex h-9 items-center rounded-[6px] border px-4 text-[12px] font-semibold tracking-[0.06em] transition-colors",
                        active ? "border-brand bg-brand text-primary-foreground" : "border-border text-ink-soft hover:border-brand hover:text-brand",
                      )}
                    >
                      {c.name} ({count})
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={Math.min(i, 7) * 50} className="h-full">
                <ProductCard product={p} eager={i < 4} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
