"use client";

import { FC, useState, useLayoutEffect } from "react";

import { NavigationCompact } from "@/components/navigation/navigation-compact";

import { useBreakpoint } from "@/library/hooks";

import { NavigationItem, SiteConfiguration } from "@/types";
import { NavigationRegular } from "./navigation-regular";

export enum UIMode {
  Regular,
  Compact,
}

enum AuthenticationMode {
  Login,
  Register,
}

export interface NavigationProps {
  configuration: SiteConfiguration;
  navigationItems?: NavigationItem[];
  displayNavigationItems?: boolean;
  authenticationMode?: AuthenticationMode;
}

export const Navigation: FC<NavigationProps> = ({
  configuration,
  navigationItems,
  displayNavigationItems = true,
}: NavigationProps) => {
  const { isAboveSm } = useBreakpoint("sm");

  const [navigationUIMode, setNavigationUIMode] = useState<UIMode>(
    UIMode.Regular
  );

  useLayoutEffect(() => {
    if (isAboveSm) {
      setNavigationUIMode(UIMode.Regular);
    } else {
      setNavigationUIMode(UIMode.Compact);
    }
  }, [isAboveSm]);

  switch (navigationUIMode) {
    case UIMode.Regular: {
      return (
        <NavigationRegular
          configuration={configuration}
          displayNavigationItems={displayNavigationItems}
          navigationItems={navigationItems}
        />
      );
    }
    case UIMode.Compact: {
      return (
        <NavigationCompact
          configuration={configuration}
          navigationItems={navigationItems}
        />
      );
    }
  }
};
