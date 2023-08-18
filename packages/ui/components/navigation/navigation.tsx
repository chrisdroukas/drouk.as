"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FC, ReactNode, useCallback, useState } from "react";

import { Icons } from "@/components/icons";
import { MobileNavigationDialog } from "@/components/navigation/mobile-navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/library/utilities/classnames";
import { NavigationItem, SiteConfiguration } from "@/types";

enum AuthenticationMode {
  Login,
  Register,
}

interface NavigationProps {
  configuration: SiteConfiguration;
  navigationItems?: NavigationItem[];
  displayNavigationItems?: boolean;
  authenticationMode?: AuthenticationMode;
  children?: ReactNode;
}

interface NavigationItemProps {
  item: NavigationItem;
  isActive: boolean;
}

const NavigationItemComponent: FC<NavigationItemProps> = ({
  item,
  isActive,
}) => (
  <Link
    href={item.disabled ? "#" : item.href}
    className={cn(
      "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
      isActive ? "text-foreground" : "text-muted-foreground",
      item.disabled && "cursor-not-allowed opacity-80"
    )}
  >
    {item.title}
  </Link>
);

export const Navigation: FC<NavigationProps> = ({
  configuration,
  navigationItems,
  displayNavigationItems = true,
  authenticationMode = AuthenticationMode.Login,
  children,
}: NavigationProps) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileNavigation, setShowMobileNavigation] =
    useState<boolean>(false);

  const toggleMobileNavigation = useCallback(() => {
    setShowMobileNavigation((prevState) => !prevState);
  }, []);

  const isItemActive = (item: NavigationItem) =>
    item.href.startsWith(`/${segment}`);

  return (
    <div className="flex flex-1 justify-between select-none md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 sm:flex">
        <span className="hidden font-extrabold tracking-tight sm:inline-block">
          {configuration.name}
        </span>
      </Link>

      {displayNavigationItems ? (
        <div className="hidden sm:flex md:gap-10">
          {navigationItems?.length ? (
            <nav className="hidden gap-6 sm:flex">
              {navigationItems.map((item, index) => (
                <NavigationItemComponent
                  key={index}
                  item={item}
                  isActive={isItemActive(item)}
                />
              ))}
            </nav>
          ) : null}
        </div>
      ) : null}

      <button
        className="flex items-center space-x-2 sm:hidden"
        onClick={toggleMobileNavigation}
      >
        {showMobileNavigation ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">{configuration.name}</span>
      </button>

      <nav>
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4"
          )}
        >
          Login
        </Link>
      </nav>

      {navigationItems && (
        <MobileNavigationDialog
          open={showMobileNavigation}
          onOpenChange={toggleMobileNavigation}
          configuration={configuration}
          navigationItems={navigationItems}
        >
          {children}
        </MobileNavigationDialog>
      )}
    </div>
  );
};
