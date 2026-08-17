import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
  className,
  level = 2,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  level?: 1 | 2;
}) {
  const Title = level === 1 ? "h1" : "h2";
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Title className="mt-3 text-[26px] leading-[1.15] font-bold text-ink sm:text-[32px] lg:text-[38px]">
          {title}
        </Title>
        {intro && <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{intro}</p>}
      </div>
      {action}
    </div>
  );
}
