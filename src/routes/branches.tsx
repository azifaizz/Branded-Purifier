import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { BRANCHES } from "@/data/company";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Branch Network — Branded Purifier" },
      {
        name: "description",
        content:
          "Branded Purifier branches in Kanchipuram (Keeraimandabam and Sangusapettai), Vanthavasi, Dusi and Uthiramerur.",
      },
      { property: "og:title", content: "Branch Network — Branded Purifier" },
      { property: "og:description", content: "Five branches for sales, installation, service and spares." },
      { property: "og:url", content: "/branches" },
    ],
    links: [{ rel: "canonical", href: "/branches" }],
  }),
  component: Branches,
});

function Branches() {
  return (
    <>
      <PageHeader
        eyebrow="Branch network"
        title="Five branches for sales, installation and service"
        intro="Each branch holds working stock of purifiers, cartridges, membranes and spares, and dispatches technicians locally."
        crumbs={[{ label: "Branches" }]}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BRANCHES.map((b, i) => (
              <Reveal as="li" key={`${b.name}-${b.locality}`} delay={i * 70}>
                <div className="h-full rounded-[8px] border border-border bg-card p-7">
                  {b.since && <p className="eyebrow">Since {b.since}</p>}
                  <h2 className="mt-3 text-[18px] font-semibold text-ink">{b.name}</h2>
                  <p className="mt-1 text-[14px] text-muted-foreground">{b.locality}</p>
                  <a
                    href={`tel:${b.phone}`}
                    className="mt-6 inline-flex items-center gap-2 border-t border-border pt-5 text-[14px] font-semibold text-brand transition-colors hover:text-brand-deep"
                  >
                    <Phone size={15} aria-hidden="true" />
                    {b.phone}
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
