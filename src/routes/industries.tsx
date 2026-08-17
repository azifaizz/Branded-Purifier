import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { INDUSTRIES } from "@/data/company";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served — Branded Purifier" },
      {
        name: "description",
        content:
          "Water treatment systems for homes, commercial buildings, hospitality, healthcare, education, industry and plant operators.",
      },
      { property: "og:title", content: "Industries Served — Branded Purifier" },
      { property: "og:description", content: "Where Branded Purifier water treatment systems are installed." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Sectors we supply and service"
        intro="System scale, pre-treatment and service intervals are matched to how the water is used on site."
        crumbs={[{ label: "Industries" }]}
      />
      <section className="py-16 lg:py-20">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal as="li" key={ind.title} delay={i * 70}>
                <div className="h-full rounded-[8px] border border-border bg-card p-7">
                  <span className="font-display text-[13px] font-extrabold tracking-[0.14em] text-brand/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 text-[17px] font-semibold text-ink">{ind.title}</h2>
                  <p className="mt-3 text-[14px] leading-7 text-muted-foreground">{ind.body}</p>
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
