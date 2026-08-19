import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Installations & Projects — Branded Purifier" },
      {
        name: "description",
        content:
          "Completed water treatment installations by Branded Purifier: 250 to 2000 LPH industrial RO plants, commercial systems and softening plants.",
      },
      { property: "og:title", content: "Installations & Projects — Branded Purifier" },
      { property: "og:description", content: "Industrial RO plants, commercial systems and softeners installed on site." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const PROJECTS = [
  {
    title: "250 LPH Industrial RO Plant",
    scope: "Pressure vessels, high-pressure pump set, dosing and control panel.",
    images: ["p7_1", "p7_2", "p7_3", "p7_4"],
  },
  {
    title: "500 LPH Industrial RO Plant",
    scope: "Skid-mounted plant with pre-treatment filters and multiport valves.",
    images: ["p8_1", "p8_2", "p8_3", "p8_4"],
  },
  {
    title: "1000 LPH Industrial RO Plant",
    scope: "Multi-vessel membrane array with instrumentation and panel control.",
    images: ["p9_1", "p9_2", "p9_3", "p9_4"],
  },
  {
    title: "2000 LPH Industrial RO Plant",
    scope: "High-capacity plant with FRP vessels, storage and distribution.",
    images: ["p10_1", "p10_2", "p10_3", "p10_4"],
  },
  {
    title: "50 LPH Commercial RO System",
    scope: "Frame-mounted commercial system with pre-filtration and pump set.",
    images: ["p11_1", "p11_2", "p11_3", "p11_4"],
  },
  {
    title: "100 LPH Commercial RO System",
    scope: "Open skid and cabinet configurations for institutional premises.",
    images: ["p12_1", "p12_2", "p12_3", "p12_4"],
  },
  {
    title: "Softener Treatment Systems",
    scope: "Manual and automatic softeners in single and dual vessel arrangements.",
    images: ["p6_1", "p6_2", "p6_3", "p6_4"],
  },
];

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="INSTALLATIONS DELIVERED ON SITE"
        intro="Plants supplied, erected and commissioned by Branded Purifier across capacities from 50 LPH to 2000 LPH."
        crumbs={[{ label: "Projects" }]}
        align="center"
      />
      <section className="py-16 lg:py-20">
        <Container className="space-y-14">
          {PROJECTS.map((p, i) => (
            <Reveal as="article" key={p.title} delay={i * 60}>
              <div className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="eyebrow">Installation {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 text-[20px] font-semibold text-ink">{p.title}</h2>
                  <p className="mt-3 text-[14px] leading-7 text-muted-foreground">{p.scope}</p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {p.images.map((img) => (
                    <li key={img}>
                      <img
                        src={`/catalog/${img}.webp`}
                        alt={`${p.title} installed by Branded Purifier`}
                        loading="lazy"
                        className="aspect-square w-full rounded-[6px] border border-border bg-brand-wash object-cover"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
