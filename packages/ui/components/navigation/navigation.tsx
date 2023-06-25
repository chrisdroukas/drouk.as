"use client";

import { FC, ReactNode, useState, useCallback } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { SiteConfiguration, NavigationItem } from "@/types";
import { classnames } from "@/library/utilities/classnames";
import { buttonVariants } from "@/components/button";
import { Icons } from "@/components/icons";
import { MobileNavigation } from "./mobile-navigation";

interface NavigationProps {
  configuration: SiteConfiguration;
  navigationItems?: NavigationItem[];
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
    className={classnames(
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
          className={classnames(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4"
          )}
        >
          Login
        </Link>
      </nav>

      {showMobileNavigation && navigationItems && (
        <MobileNavigation
          configuration={configuration}
          navigationItems={navigationItems}
        >
          {children}
        </MobileNavigation>
      )}
    </div>
  );
};
