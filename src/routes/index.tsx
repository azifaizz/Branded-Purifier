import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Factory, Droplets, Wrench, ShieldCheck } from "lucide-react";
import { Container } from "@/components/site/Container";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { BtnLink, CallLink } from "@/components/site/Btn";
import { CtaBand } from "@/components/site/CtaBand";
import { ProductCard } from "@/components/site/ProductCard";
import { SOLUTIONS } from "@/data/solutions";
import { PRODUCTS, CATEGORIES } from "@/data/catalog";
import { BRANCHES, INDUSTRIES } from "@/data/company";
import { BranchMap } from "@/components/site/BranchMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Branded Purifier — RO Plants, Purifiers & Water Treatment Components" },
      {
        name: "description",
        content:
          "Domestic, commercial and industrial reverse osmosis systems, softeners, DM plants and water treatment spares. Call 7530048763.",
      },
      { property: "og:title", content: "Branded Purifier — Complete Water Treatment Solutions" },
      {
        property: "og:description",
        content:
          "RO systems from household purifiers to 2000 LPH industrial plants, plus membranes, pumps, vessels and spares.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const STATS = [
  { value: "5", label: "Branches" },
  { value: "3000+", label: "Customers served" },
  { value: "2000 LPH", label: "Largest RO plant range" },
  { value: "ISO 9001", label: "2015 certified" },
];

const CAPABILITIES = [
  {
    icon: Droplets,
    title: "System supply",
    body: "Purifiers, skid-mounted commercial units and industrial RO plants sourced and configured for the site.",
  },
  {
    icon: Wrench,
    title: "Installation & commissioning",
    body: "Plumbing, electrical, panel wiring, trial runs and operator handover carried out by our own technicians.",
  },
  {
    icon: Factory,
    title: "Plant fabrication",
    body: "MS and SS skids, vessel assemblies, dosing arrangements and control panels built to the required capacity.",
  },
  {
    icon: ShieldCheck,
    title: "Service & spares",
    body: "Annual maintenance, membrane and media replacement, and component supply from branch stock.",
  },
];

function Home() {
  const featured = [
    ...PRODUCTS.filter((p) => p.scale === "industrial").slice(0, 2),
    ...PRODUCTS.filter((p) => p.scale === "commercial").slice(0, 1),
    ...PRODUCTS.filter((p) => p.category === "domestic-ro").slice(0, 1),
  ];
  const componentCategories = CATEGORIES.filter((c) => c.scale === "components").slice(0, 12);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid-lines absolute inset-0 opacity-30" aria-hidden="true" />
        <Container className="relative w-full grid items-center gap-14 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-0">
          <Reveal>
            <h1 className="mt-4 text-[34px] leading-[1.08] font-bold text-ink sm:text-[44px] lg:text-[54px]">
              Reliable Water Purification at Any Scale
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-8 text-muted-foreground">
              From compact home purifiers to heavy-duty 2000 LPH industrial reverse osmosis plants. We handle the supply, installation, and ongoing maintenance with a fully stocked spares division and a five-branch service network.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BtnLink to="/products">Browse Catalogue</BtnLink>
              <CallLink variant="outline">Call 7530048763</CallLink>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-[24px] font-extrabold text-brand">{s.value}</span>
                    <span className="mt-1 block text-[12px] tracking-[0.06em] text-muted-foreground">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative flex aspect-square items-center justify-center p-8 -mt-12 lg:-mt-24">
              <img
                src="/logo/logo.png"
                alt="Branded Purifier Logo"
                className="h-full w-full object-contain drop-shadow-lg scale-110"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Solutions */}
      <section className="border-b border-border py-18 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="Four divisions covering every scale of water treatment"
            intro="Each division carries its own product range, engineering approach and service scope."
            action={
              <BtnLink to="/solutions" variant="outline" size="sm">
                All solutions
              </BtnLink>
            }
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 90}>
                <Link
                  to="/solutions/$scale"
                  params={{ scale: s.slug }}
                  className="group flex h-full flex-col rounded-[8px] border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_20px_44px_-30px_rgba(47,128,201,0.6)]"
                >
                  <span className="font-display text-[13px] font-extrabold tracking-[0.14em] text-brand/50">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-[18px] font-semibold text-ink">{s.name}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-7 text-muted-foreground">{s.short}</p>
                  <span className="mt-6 border-t border-border pt-4 text-[11px] font-semibold tracking-[0.12em] text-ink uppercase">
                    {s.capacity}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-b border-border bg-brand-wash py-18 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Capabilities"
              title="Supply, fabrication, installation and lifetime service"
              intro="Branded Purifier handles the full lifecycle of a water treatment installation, from source water assessment through to annual maintenance."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Source water testing and system sizing",
                "Skid fabrication in MS and SS",
                "Control panel wiring and instrumentation",
                "Membrane, media and cartridge replacement",
                "Annual maintenance contracts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-7 text-ink-soft">
                  <CheckCircle2 size={17} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 80}>
                <div className="h-full rounded-[8px] border border-border bg-card p-6">
                  <c.icon size={22} className="text-brand" aria-hidden="true" />
                  <h3 className="mt-5 text-[16px] font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Featured products */}
      <section className="border-b border-border py-18 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Catalogue"
            title="Featured systems from the product range"
            intro={`${PRODUCTS.length} products and component groups across ${CATEGORIES.length} categories.`}
            action={
              <BtnLink to="/products" variant="outline" size="sm">
                Full catalogue
              </BtnLink>
            }
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 80} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Components strip */}
      <section className="border-b border-border bg-ink py-18 lg:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">Components Division</p>
            <h2 className="mt-3 text-[26px] leading-tight font-bold text-primary-foreground sm:text-[34px]">
              Membranes, pumps, vessels, media and panels held in stock
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-white/70">
              Every part required to build, service or upgrade a plant — from 80 GPD domestic membranes to 8040
              industrial elements and FRP pressure vessels.
            </p>
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-[8px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {componentCategories.map((c) => (
              <li key={c.id}>
                <Link
                  to="/products"
                  search={{ category: c.id }}
                  className="group flex h-full items-center justify-between gap-4 bg-ink p-5 transition-colors hover:bg-brand-deep"
                >
                  <span className="text-[14px] font-medium text-white/85">{c.name}</span>
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Industries + branches */}
      <section className="border-b border-border py-18 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Industries" title="Where our systems are installed" />
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {INDUSTRIES.map((ind) => (
                <li key={ind.title} className="py-5">
                  <h3 className="text-[15px] font-semibold text-ink">{ind.title}</h3>
                  <p className="mt-1 text-[13px] leading-6 text-muted-foreground">{ind.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Branch network"
              title="Five branches, one service standard"
              intro="Sales, installation and spares are handled locally through each branch."
              action={
                <BtnLink to="/branches" variant="outline" size="sm">
                  Branch details
                </BtnLink>
              }
            />
            <div className="mt-8 space-y-6">
              <BranchMap />
              <ul className="space-y-3">
                {BRANCHES.map((b, i) => (
                  <Reveal as="li" key={`${b.name}-${b.locality}`} delay={i * 70}>
                    <div className="flex items-center justify-between gap-4 rounded-[8px] border border-border bg-card p-5">
                      <div>
                        <h3 className="text-[15px] font-semibold text-ink">{b.name}</h3>
                        <p className="text-[13px] text-muted-foreground">{b.locality}</p>
                      </div>
                      <a
                        href={`tel:${b.phone}`}
                        className="text-[13px] font-semibold text-brand transition-colors hover:text-brand-deep"
                      >
                        {b.phone}
                      </a>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
