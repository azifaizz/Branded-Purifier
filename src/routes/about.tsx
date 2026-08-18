import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { BRANCHES, HISTORY, INDUSTRIES } from "@/data/company";
import { BranchMap } from "@/components/site/BranchMap";
import { BtnLink } from "@/components/site/Btn";
import { 
  Phone, MapPin, Network, Droplets, Factory,
  Home, Building2, UtensilsCrossed, HeartPulse, GraduationCap, Wrench
} from "lucide-react";

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
        align="center"
        uppercaseTitle={true}
      />

      <section className="border-b border-border py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl text-center flex flex-col items-center">
            <SectionHeading 
              eyebrow="Who we are" 
              title="Engineering, supply and service under one roof" 
              align="center"
              titleClassName="uppercase tracking-[0.02em] lg:whitespace-nowrap font-display"
            />
            <div className="mt-8 max-w-3xl space-y-5 text-[16px] leading-relaxed text-ink-soft text-center">
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

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="relative overflow-hidden rounded-[24px] bg-linear-to-br from-brand/5 via-white to-white dark:from-brand/10 dark:via-background dark:to-background p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(47,128,201,0.25)] border border-white/50 dark:border-white/5">
              {/* Background decoration */}
              <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-brand/10 blur-[80px] pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-brand-deep/5 blur-[80px] pointer-events-none" aria-hidden="true" />
              
              <h2 className="relative z-10 flex items-center justify-center gap-4 text-[14px] font-bold tracking-[0.16em] text-brand uppercase mb-10">
                <span className="h-px w-12 bg-brand/30 hidden sm:block"></span>
                At a glance
                <span className="h-px w-12 bg-brand/30 hidden sm:block"></span>
              </h2>
              
              <dl className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { icon: MapPin, k: "Head office", v: "Kanchipuram" },
                  { icon: Network, k: "Service network", v: "5 branches" },
                  { icon: Droplets, k: "Systems installed", v: "3000+" },
                  { icon: Factory, k: "Largest plant size", v: "2000 LPH" },
                ].map((r) => (
                  <div key={r.k} className="group relative flex flex-col items-center">
                    <dt className="flex flex-col items-center gap-3 text-[12px] font-medium tracking-[0.06em] text-muted-foreground uppercase">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand/80 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-md">
                        <r.icon size={22} aria-hidden="true" />
                      </div>
                      {r.k}
                    </dt>
                    <dd className="mt-3 font-display text-[26px] font-extrabold text-ink tracking-tight drop-shadow-sm transition-colors duration-300 group-hover:text-brand-deep">{r.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Growth"
            title="Branch by branch since 2021"
            intro="Customer figures below are as stated by the company in its profile."
            align="center"
            titleClassName="uppercase tracking-[0.02em] font-display"
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

      <section className="bg-brand-wash py-16 lg:py-24">
        <Container>
          <SectionHeading 
            eyebrow="Industries" 
            title="Where our systems are installed" 
            titleClassName="uppercase tracking-[0.02em] font-display"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {INDUSTRIES.map((ind, i) => {
              const icons = [Home, Building2, UtensilsCrossed, HeartPulse, GraduationCap, Factory, Wrench];
              const Icon = icons[i] || Droplets;
              
              return (
                <div 
                  key={ind.title}
                  className="group relative overflow-hidden rounded-[16px] bg-white p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] ring-1 ring-black/5 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(47,128,201,0.15)] hover:ring-brand/30 dark:bg-zinc-900 dark:ring-white/10 dark:hover:ring-brand/40"
                >
                  {/* Animated Pastel Blue Fill */}
                  <div className="absolute inset-0 origin-bottom translate-y-full bg-brand-wash transition-transform duration-500 ease-out group-hover:translate-y-0 dark:bg-brand/10" />

                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_20px_rgba(47,128,201,0.4)]">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-6 text-[18px] font-bold text-ink">{ind.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                      {ind.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 border-b border-border">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <SectionHeading
                eyebrow="Branch network"
                title="Five branches, one service standard"
                intro="Sales, installation and spares are handled locally through each branch."
                action={
                  <BtnLink to="/branches" variant="outline" size="sm" className="hidden sm:inline-flex">
                    Branch details
                  </BtnLink>
                }
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {BRANCHES.map((b, i) => (
                  <Reveal as="div" key={`${b.name}-${b.locality}`} delay={i * 70}>
                    <div className="group relative overflow-hidden rounded-[16px] border border-brand/10 bg-brand/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-[0_15px_30px_-10px_rgba(47,128,201,0.15)] dark:hover:bg-card">
                      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/10 transition-transform duration-500 group-hover:scale-150 blur-3xl pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col gap-4">
                        <div>
                          <h3 className="text-[16px] font-bold text-ink">{b.name}</h3>
                          <p className="text-[13px] font-medium text-muted-foreground mt-1">{b.locality}</p>
                        </div>
                        
                        <a
                          href={`tel:${b.phone}`}
                          className="inline-flex w-fit items-center gap-2 rounded-full bg-white dark:bg-background border border-border px-3 py-1.5 text-[13px] font-bold tracking-wide text-brand shadow-sm transition-all duration-300 hover:bg-brand hover:text-white hover:border-brand"
                        >
                          <Phone size={14} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                          {b.phone}
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            
            <div className="relative h-[450px] lg:h-[650px] rounded-[24px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-border/50 ring-1 ring-black/5 dark:ring-white/10">
              <BranchMap />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
