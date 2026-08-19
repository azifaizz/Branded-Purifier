import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

type MenuItem = {
  label: string;
  to: string;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>, to: string) => void;
}

// Ensure compatibility with TanStack Router's Link
const MotionLink = motion.create(Link);

export const MenuVertical = ({
  menuItems = [],
  color = "#2F80C9", // Branded-Purifier brand color
  skew = 0,
  onLinkClick,
}: MenuVerticalProps) => {
  return (
    <div className="flex w-full flex-col gap-4 py-4">
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.to}-${index}`}
          className="group/nav flex items-center gap-2 cursor-pointer text-ink"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            variants={{
              initial: { x: "-100%", color: "inherit", opacity: 0 },
              hover: { x: 0, color, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-0"
          >
            <ArrowRight strokeWidth={3} className="size-6" />
          </motion.div>

          <MotionLink
            to={item.to}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => onLinkClick?.(e, item.to)}
            variants={{
              initial: { x: -30, color: "inherit" },
              hover: { x: 0, color, skewX: skew },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-semibold text-[28px] no-underline focus:outline-none"
          >
            {item.label}
          </MotionLink>
        </motion.div>
      ))}
    </div>
  );
};
