import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, FileText } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Btn } from "@/components/site/Btn";
import { BRANCHES, COMPANY } from "@/data/company";
import { CATEGORIES } from "@/data/catalog";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Branded Purifier — Request a Quote" },
      {
        name: "description",
        content:
          "Request a quotation for RO systems, softeners, plants or spares. Call 7530048763 or send your requirement to the nearest Branded Purifier branch.",
      },
      { property: "og:title", content: "Contact Branded Purifier" },
      { property: "og:description", content: "Request a quotation or arrange a site visit." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request a quotation or site visit"
        intro="Share your requirement, feed water details and location. Our team will recommend the right system and capacity."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-16 lg:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-[12px] font-semibold tracking-[0.16em] text-ink uppercase">Enquiry form</h2>
            {sent ? (
              <div className="mt-6 rounded-[8px] border border-brand/40 bg-brand-tint p-8">
                <p className="text-[15px] leading-7 text-brand-deep">
                  Thank you — your enquiry details are ready. Please call{" "}
                  <a href={`tel:${COMPANY.primaryPhone}`} className="font-semibold underline">
                    {COMPANY.primaryPhone}
                  </a>{" "}
                  to confirm, and our team will follow up with a quotation.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-[13px] font-medium text-ink">
                  Name
                  <input
                    required
                    name="name"
                    className="h-11 rounded-[6px] border border-input bg-background px-4 text-[14px] font-normal text-ink outline-none focus:border-brand"
                  />
                </label>
                <label className="grid gap-2 text-[13px] font-medium text-ink">
                  Phone
                  <input
                    required
                    name="phone"
                    type="tel"
                    className="h-11 rounded-[6px] border border-input bg-background px-4 text-[14px] font-normal text-ink outline-none focus:border-brand"
                  />
                </label>
                <label className="grid gap-2 text-[13px] font-medium text-ink">
                  Location
                  <input
                    name="location"
                    className="h-11 rounded-[6px] border border-input bg-background px-4 text-[14px] font-normal text-ink outline-none focus:border-brand"
                  />
                </label>
                <label className="grid gap-2 text-[13px] font-medium text-ink">
                  Requirement
                  <select
                    name="requirement"
                    className="h-11 rounded-[6px] border border-input bg-background px-4 text-[14px] font-normal text-ink outline-none focus:border-brand"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-[13px] font-medium text-ink sm:col-span-2">
                  Details
                  <textarea
                    name="details"
                    rows={5}
                    placeholder="Capacity required, source water TDS, site conditions"
                    className="rounded-[6px] border border-input bg-background p-4 text-[14px] font-normal text-ink outline-none focus:border-brand"
                  />
                </label>
                <div className="sm:col-span-2">
                  <Btn type="submit">Send Enquiry</Btn>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-[8px] border border-border bg-brand-wash p-7">
              <h2 className="text-[12px] font-semibold tracking-[0.16em] text-ink uppercase">Direct contact</h2>
              <ul className="mt-5 space-y-4 text-[14px]">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-1 text-brand" aria-hidden="true" />
                  <span>
                    <a href={`tel:${COMPANY.primaryPhone}`} className="block font-semibold text-ink">
                      {COMPANY.primaryPhone}
                    </a>
                    <a href={`tel:${COMPANY.proprietor.phone}`} className="block text-muted-foreground">
                      {COMPANY.proprietor.phone} · {COMPANY.proprietor.name}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText size={16} className="mt-1 text-brand" aria-hidden="true" />
                  <span className="text-muted-foreground">GSTIN {COMPANY.gstin}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-[8px] border border-border p-7">
              <h2 className="text-[12px] font-semibold tracking-[0.16em] text-ink uppercase">Branches</h2>
              <ul className="mt-5 divide-y divide-border">
                {BRANCHES.map((b) => (
                  <li key={`${b.name}-${b.locality}`} className="flex items-start justify-between gap-4 py-4">
                    <span className="flex items-start gap-3">
                      <MapPin size={15} className="mt-1 text-brand" aria-hidden="true" />
                      <span>
                        <span className="block text-[14px] font-semibold text-ink">{b.name}</span>
                        <span className="block text-[13px] text-muted-foreground">{b.locality}</span>
                      </span>
                    </span>
                    <a href={`tel:${b.phone}`} className="text-[13px] font-semibold text-brand">
                      {b.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
