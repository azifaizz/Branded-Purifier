import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { BRANCHES, HISTORY } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Branded Purifier — Water Treatment Company" },
      {
        name: "description",
        content:
          "Branded Purifier is a water treatment company operating five branches across Kanchipuram, Vanthavasi, Dusi and Uthiramerur.",
      },
      { property: "og:title", content: "About Branded Purifier" },
      { property: "og:description", content: "Five branches, full-lifecycle water treatment supply and service." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A water treatment company built branch by branch"
        intro="Branded Purifier supplies, installs and services water treatment systems across domestic, commercial and industrial requirements, supported by a stocked component division."
        crumbs={[{ label: "About" }]}
      />

      <section className="border-b border-border py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeading eyebrow="Who we are" title="Engineering, supply and service under one roof" />
            <div className="mt-6 space-y-5 text-[15px] leading-8 text-ink-soft">
              <p>
                Branded Purifier is a water treatment company. The business covers
                household purifiers, commercial skid systems, industrial reverse osmosis plants, softening and
                demineralisation, along with the membranes, pumps, vessels, media and panels required to keep
                them running.
              </p>
              <p>
                Work is delivered end to end: source water assessment, system sizing, fabrication, installation,
                commissioning and ongoing maintenance. Because the component division is stocked locally,
                replacement membranes, cartridges, media and spares are available directly through the branch
                network.
              </p>
            </div>
          </div>
          <div className="rounded-[8px] border border-border bg-brand-wash p-8">
            <h2 className="text-[12px] font-semibold tracking-[0.16em] text-ink uppercase">At a glance</h2>
            <dl className="mt-6 space-y-5">
              {[
                { k: "Head office", v: "Kanchipuram, Tamil Nadu" },
                { k: "Service network", v: "5 branches" },
                { k: "Systems installed", v: "3000+" },
                { k: "Largest plant size", v: "2000 LPH" },
              ].map((r) => (
                <div key={r.k} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <dt className="text-[12px] tracking-[0.06em] text-muted-foreground">{r.k}</dt>
                  <dd className="mt-1 text-[15px] font-semibold text-ink">{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Growth"
            title="Branch by branch since 2021"
            intro="Customer figures below are as stated by the company in its profile."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[8px] border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
            {HISTORY.map((m, i) => (
              <Reveal as="li" key={`${m.year}-${m.title}`} delay={i * 80}>
                <div className="h-full bg-card p-6">
                  <span className="font-display text-[22px] font-extrabold text-brand">{m.year}</span>
                  <h3 className="mt-3 text-[15px] font-semibold text-ink">{m.title}</h3>
                  {m.note && <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{m.note}</p>}
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
