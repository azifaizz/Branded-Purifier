import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProductCard } from "@/components/site/ProductCard";
import { BtnLink, CallLink } from "@/components/site/Btn";
import { CtaBand } from "@/components/site/CtaBand";
import { categoryName, findProduct, relatedProducts } from "@/data/catalog";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product, related: relatedProducts(product) };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — Branded Purifier" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — Branded Purifier`;
    return {
      meta: [
        { title },
        { name: "description", content: product.summary.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: product.summary.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product, related } = Route.useLoaderData();

  return (
    <>
      <PageHeader
        eyebrow={categoryName(product.category)}
        title={product.name}
        crumbs={[{ label: "Products", to: "/products" }, { label: product.name }]}
      />

      <section className="border-b border-border py-14 lg:py-18">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-[8px] border border-border bg-brand-wash">
              <img
                src={product.image}
                alt={`${product.name} supplied by Branded Purifier`}
                className="aspect-[4/3] w-full object-contain p-8"
              />
            </div>
            {product.gallery.length > 1 && (
              <ul className="mt-4 grid grid-cols-4 gap-3">
                {product.gallery.slice(0, 8).map((g) => (
                  <li key={g}>
                    <img
                      src={g}
                      alt={`${product.name} detail view`}
                      loading="lazy"
                      className="aspect-square w-full rounded-[6px] border border-border bg-brand-wash object-contain p-2"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <p className="text-[15px] leading-8 text-ink-soft">{product.summary}</p>

            {product.specs.length > 0 && (
              <dl className="mt-8 divide-y divide-border border-y border-border">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-6 py-4">
                    <dt className="text-[13px] tracking-[0.04em] text-muted-foreground">{s.label}</dt>
                    <dd className="text-[14px] font-semibold text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {product.models.length > 0 && (
              <div className="mt-8">
                <h2 className="text-[12px] font-semibold tracking-[0.16em] text-ink uppercase">
                  Models & variants available
                </h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {product.models.map((m) => (
                    <li
                      key={m}
                      className="rounded-[6px] border border-border bg-card px-4 py-3 text-[13px] text-ink-soft"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications.length > 0 && (
              <div className="mt-8">
                <h2 className="text-[12px] font-semibold tracking-[0.16em] text-ink uppercase">Typical applications</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <li key={a} className="rounded-[6px] bg-brand-tint px-3 py-2 text-[12px] text-brand-deep">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <BtnLink to="/contact">Request a Quote</BtnLink>
              <CallLink variant="outline">Call 7530048763</CallLink>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-b border-border py-14 lg:py-18">
          <Container>
            <SectionHeading eyebrow="Related" title={`More from ${categoryName(product.category)}`} />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <li key={p.slug} className="h-full">
                  <ProductCard product={p} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}
