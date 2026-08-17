import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaBand } from "@/components/site/CtaBand";
import { findSolution } from "@/data/solutions";
import { categoryName, productsByCategory } from "@/data/catalog";

export const Route = createFileRoute("/solutions/$scale")({
  loader: ({ params }) => {
    const solution = findSolution(params.scale);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Solution not found — Branded Purifier" }, { name: "robots", content: "noindex" }] };
    }
    const { solution } = loaderData;
    return {
      meta: [
        { title: `${solution.name} — Branded Purifier` },
        { name: "description", content: solution.short },
        { property: "og:title", content: `${solution.name} — Branded Purifier` },
        { property: "og:description", content: solution.short },
        { property: "og:url", content: `/solutions/${params.scale}` },
      ],
      links: [{ rel: "canonical", href: `/solutions/${params.scale}` }],
    };
  },
  component: SolutionPage,
});

function SolutionPage() {
  const { solution } = Route.useLoaderData();

  return (
    <>
      <PageHeader
        eyebrow={solution.capacity}
        title={solution.name}
        intro={solution.intro}
        crumbs={[{ label: "Solutions", to: "/solutions" }, { label: solution.name }]}
      />

      <section className="border-b border-border py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading eyebrow="Scope" title="What this division covers" />
            <ul className="mt-8 space-y-4">
              {solution.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[14px] leading-7 text-ink-soft">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Process" title="How a project is delivered" />
            <ol className="mt-8 space-y-px overflow-hidden rounded-[8px] border border-border bg-border">
              {solution.process.map((p) => (
                <li key={p.step} className="flex gap-5 bg-card p-6">
                  <span className="font-display text-[13px] font-extrabold tracking-[0.12em] text-brand">{p.step}</span>
                  <span>
                    <span className="block text-[15px] font-semibold text-ink">{p.title}</span>
                    <span className="mt-1 block text-[13px] leading-6 text-muted-foreground">{p.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {solution.categories.map((catId) => {
        const items = productsByCategory(catId);
        if (items.length === 0) return null;
        return (
          <section key={catId} className="border-b border-border py-14 lg:py-18">
            <Container>
              <SectionHeading
                eyebrow={`${items.length} ${items.length === 1 ? "item" : "items"}`}
                title={categoryName(catId)}
              />
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((p, i) => (
                  <Reveal as="li" key={p.slug} delay={Math.min(i, 6) * 60} className="h-full">
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </ul>
            </Container>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
