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

      <section className="border-b border-border py-20 lg:py-28 bg-gradient-to-b from-background to-brand-wash/30">
        <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Scope Section */}
          <div>
            <SectionHeading eyebrow="Scope" title="What this division covers" />
            <ul className="mt-10 grid gap-4">
              {solution.highlights.map((h, i) => (
                <Reveal as="li" key={h} delay={i * 80}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-md transition-all duration-300 hover:border-brand/40 hover:shadow-[0_8px_30px_rgba(47,128,201,0.12)] hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex items-start gap-4">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <CheckCircle2 size={14} className="opacity-80" aria-hidden="true" />
                      </div>
                      <p className="text-[14px] leading-relaxed text-ink-soft group-hover:text-ink transition-colors">
                        {h}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Process Section */}
          <div className="relative">
            <SectionHeading eyebrow="Process" title="How a project is delivered" />
            <div className="mt-12 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-gradient-to-b before:from-brand before:via-brand/20 before:to-transparent">
              <ul className="space-y-10">
                {solution.process.map((p, i) => (
                  <Reveal 
                    as="li" 
                    key={p.step} 
                    delay={i * 120} 
                    className="relative pl-12 sm:pl-16 group"
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-brand text-[13px] font-bold tracking-wider text-white shadow-[0_0_0_2px_rgba(47,128,201,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(47,128,201,0.5)]">
                      {p.step}
                    </div>
                    
                    <div className="rounded-2xl border border-border/40 bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-brand/20">
                      <h4 className="text-[17px] font-bold text-ink">{p.title}</h4>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{p.body}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
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
