import { Container } from "./Container";
import { BtnLink, CallLink } from "./Btn";

export function CtaBand({
  title = "Talk to our water treatment engineers",
  body = "Share your source water details, required output and site conditions. We will recommend the right system, capacity and installation approach.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-deep">
      <div className="grid-lines absolute inset-0 opacity-[0.18]" aria-hidden="true" />
      <Container className="relative flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div className="max-w-2xl">
          <h2 className="text-[24px] leading-tight font-bold text-primary-foreground sm:text-[30px]">{title}</h2>
          <p className="mt-4 text-[15px] leading-7 text-white/75">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <BtnLink to="/contact" variant="primary">
            Request a Quote
          </BtnLink>
          <CallLink variant="onDark">Call 7530048763</CallLink>
        </div>
      </Container>
    </section>
  );
}
