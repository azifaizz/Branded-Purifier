import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { SOLUTIONS } from "@/data/solutions";
import { productsByScale } from "@/data/catalog";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Water Treatment Solutions — Branded Purifier" },
      {
        name: "description",
        content:
          "Domestic, commercial and industrial RO solutions plus a stocked components division, engineered and serviced by Branded Purifier.",
      },
      { property: "og:title", content: "Water Treatment Solutions — Branded Purifier" },
      {
        property: "og:description",
        content: "Four divisions covering household purifiers, commercial skids, industrial plants and spares.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Water treatment engineered to the scale of the site"
        intro="From a single household purifier to a 2000 LPH industrial plant, each division carries its own product range, sizing approach and service scope."
        crumbs={[{ label: "Solutions" }]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <ul className="grid gap-6 lg:grid-cols-2">
            {SOLUTIONS.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 90}>
                <Link
                  to="/solutions/$scale"
                  params={{ scale: s.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_22px_48px_-32px_rgba(47,128,201,0.6)]"
                >
                  <div className="grid grid-cols-3 gap-px bg-border">
                    {productsByScale(s.scale)
                      .slice(0, 3)
                      .map((p) => (
                        <img
                          key={p.slug}
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="aspect-[4/3] w-full bg-brand-wash object-contain p-4"
                        />
                      ))}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="eyebrow">{s.capacity}</p>
                    <h2 className="mt-3 text-[20px] font-semibold text-ink">{s.name}</h2>
                    <p className="mt-3 flex-1 text-[14px] leading-7 text-muted-foreground">{s.intro}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.1em] text-ink uppercase transition-colors group-hover:text-brand">
                      Explore division
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
