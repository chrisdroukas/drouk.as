"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FC } from "react";

import { Auth } from "@/components/navigation/auth";
import { Logo } from "@/components/navigation/logo";

import { NavigationProps, UIMode } from "@/components/navigation/navigation";
import { NavigationBar } from "@/components/navigation/navigation-bar";

import { cn } from "@/library/utilities/classnames";
import { NavigationItem } from "@/types";

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

export const NavigationRegular: FC<NavigationProps> = ({
  configuration,
  navigationItems,
  displayNavigationItems = true,
}: NavigationProps) => {
  const segment = useSelectedLayoutSegment();

  const isItemActive = (item: NavigationItem) =>
    item.href.startsWith(`/${segment}`);

  const renderLogo = <Logo title={configuration.name} />;

  const renderNavigationItems = displayNavigationItems
    ? navigationItems?.map((item, index) => (
        <NavigationItemComponent
          key={index}
          item={item}
          isActive={isItemActive(item)}
        />
      ))
    : null;

  const renderAuth = <Auth />;

  return (
    <NavigationBar
      leadingItems={[renderLogo]}
      trailingItems={[renderNavigationItems, renderAuth]}
    />
  );
};
