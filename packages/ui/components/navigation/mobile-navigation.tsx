"use client";

import { Icons } from "@/components/icons";
import {
  OverlayNavigation,
  OverlayNavigationContent,
} from "@/components/navigation/overlay-navigation";
import { buttonVariants } from "@/components/ui/button";

import { useBreakpoint, useLockBody } from "@/library/hooks";
import { cn } from "@/library/utilities/classnames";
import { NavigationItem, SiteConfiguration } from "@/types";
import { DialogProps } from "@radix-ui/react-dialog";
import Link from "next/link";
import { FC, ReactNode, useLayoutEffect } from "react";

interface MobileNavigationProps extends DialogProps {
  configuration: SiteConfiguration;
  navigationItems: NavigationItem[];
  children?: ReactNode;
}

const MobileNavigationDialog = ({
  configuration,
  navigationItems,
  children,
  onOpenChange,
  ...props
}: MobileNavigationProps) => {
  return (
    <OverlayNavigation onOpenChange={onOpenChange} {...props}>
      <OverlayNavigationContent className="overflow-hidden p-0">
        <MobileNavigation
          configuration={configuration}
          navigationItems={navigationItems}
          onOpenChange={onOpenChange}
        >
          {children}
        </MobileNavigation>
      </OverlayNavigationContent>
    </OverlayNavigation>
  );
};

const MobileNavigation: FC<MobileNavigationProps> = ({
  configuration,
  navigationItems,
  children,
  onOpenChange,
}) => {
  const { isAboveSm } = useBreakpoint("sm");
  useLockBody();

  const handleOnOpenChange = () => {
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  useLayoutEffect(() => {
    if (isAboveSm) {
      handleOnOpenChange();
    }
  }, [isAboveSm]);

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground"
      )}
    >
      <div className="relative z-20 grid gap-6 bg-popover py-6 text-popover-foreground container">
        <div className="flex flex-1 justify-between select-none md:gap-10">
          <button
            className="flex items-center space-x-2 sm:hidden"
            onClick={handleOnOpenChange}
          >
            <Icons.close />
            <span className="font-bold">{configuration.name}</span>
          </button>
          <nav>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
              onClick={handleOnOpenChange}
            >
              Login
            </Link>
          </nav>
        </div>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
              onClick={handleOnOpenChange}
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

export { MobileNavigation, MobileNavigationDialog };
