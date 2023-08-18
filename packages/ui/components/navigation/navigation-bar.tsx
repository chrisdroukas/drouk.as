import { FC, ReactNode } from "react";

interface NavigationBarProps {
  leadingItems?: ReactNode[];
  trailingItems?: ReactNode[];
}

export const NavigationBar: FC<NavigationBarProps> = ({
  leadingItems,
  trailingItems,
}: NavigationBarProps) => {
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

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b">
      <div className="flex h-14 container items-center justify-between py-4">
        <nav className="flex flex-1 justify-between select-none md:gap-10">
          <div className="flex gap-2">{renderLeadingItems}</div>
          <div className="flex gap-4">{renderTrailingItems}</div>
        </nav>
      </div>
    </header>
  );
};
