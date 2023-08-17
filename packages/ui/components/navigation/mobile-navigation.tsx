import Link from "next/link";
import { FC, ReactNode } from "react";

import { Icons } from "@/components/icons";
import { useLockBody } from "@/library/hooks";
import { cn } from "@/library/utilities/classnames";
import { NavigationItem, SiteConfiguration } from "@/types";

interface MobileNavigationProps {
  configuration: SiteConfiguration;
  navigationItems: NavigationItem[];
  children?: ReactNode;
}

export const MobileNavigation: FC<MobileNavigationProps> = ({
  configuration,
  navigationItems,
  children,
}) => {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo />
          <span className="font-bold">{configuration.name}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
};
