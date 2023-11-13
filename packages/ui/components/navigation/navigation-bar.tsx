import { FC, ReactNode, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export interface NavigationBarProps {
  leadingItems?: ReactNode[];
  trailingItems?: ReactNode[];
  overlay?: boolean;
}

export const NavigationBar: FC<NavigationBarProps> = ({
  leadingItems,
  trailingItems,
  overlay,
}: NavigationBarProps) => {
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  const scrollThreshold = 32;

  const renderLeadingItems =
    leadingItems &&
    leadingItems.map((item) => {
      return item;
    });

  const renderTrailingItems =
    trailingItems &&
    trailingItems.map((item) => {
      return item;
    });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.header
      className={`${overlay ? "fixed" : "sticky"} ${
        scrolled ? "bg-background" : "bg-transparent"
      } w-full top-0 z-40 transition-all`}
    >
      <div className="flex container items-center justify-between py-6">
        <nav className="flex flex-1 justify-between select-none md:gap-10">
          <div className="flex gap-2">{renderLeadingItems}</div>
          <div className="flex gap-6">{renderTrailingItems}</div>
        </nav>
      </div>
    </motion.header>
  );
};
