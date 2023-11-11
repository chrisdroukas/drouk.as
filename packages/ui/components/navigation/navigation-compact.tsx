"use client";
import Link from "next/link";
import { cn } from "@/library/utilities/classnames";

import { Logo } from "@/components/navigation/logo";
import { NavigationProps } from "@/components/navigation/navigation";
import { NavigationBar } from "@/components/navigation/navigation-bar";
import {
  OverlayNavigation,
  OverlayNavigationContent,
} from "@/components/navigation/overlay-navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

import { useBreakpoint } from "@/library/hooks";

import { DialogProps } from "@radix-ui/react-dialog";

import { FC, useCallback, useLayoutEffect, useState } from "react";

interface NavigationCompactProps extends DialogProps, NavigationProps {}

const NavigationCompactDialog = ({
  configuration,
  navigationItems,
  children,
  onOpenChange,
  ...props
}: NavigationCompactProps) => {
  const handleOnOpenChange = () => {
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  return (
    <OverlayNavigation open onOpenChange={onOpenChange} {...props}>
      <OverlayNavigationContent className="overflow-hidden p-0">
        <div
          className={cn(
            "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground"
          )}
        >
          <div className="relative z-20 grid gap-6 bg-popover py-6 text-popover-foreground container">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {navigationItems &&
                navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                    className={cn(
                      "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                      item.disabled && "cursor-not-allowed opacity-60"
                    )}
                    onClick={() => handleOnOpenChange()}
                  >
                    {item.title}
                  </Link>
                ))}
            </nav>
            {children}
          </div>
        </div>
      </OverlayNavigationContent>
    </OverlayNavigation>
  );
};

export const NavigationCompact: FC<NavigationCompactProps> = ({
  configuration,
  navigationItems,
  overlay,
  onOpenChange,
}) => {
  const { isAboveSm } = useBreakpoint("sm");

  const [showCompactMenu, setShowCompactMenu] = useState<boolean>(false);

  const toggleCompactMenu = useCallback(() => {
    setShowCompactMenu((prevState) => !prevState);
  }, []);

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

  const renderMenuAction = (
    <Button
      key={"navigation-menu-action"}
      variant="outline"
      size="sm"
      className="h-8 w-8 px-0"
      onClick={toggleCompactMenu}
    >
      {showCompactMenu ? <Icons.close /> : <Icons.menu />}
    </Button>
  );

  const renderLogo = (
    <Logo key={"navigation-logo"} title={configuration.name} />
  );

  // const renderAuth = <Auth />;

  return (
    <>
      <NavigationBar
        leadingItems={[renderLogo]}
        trailingItems={[renderMenuAction]}
        overlay={overlay}
      />
      <NavigationCompactDialog
        open={showCompactMenu}
        onOpenChange={toggleCompactMenu}
        configuration={configuration}
        navigationItems={navigationItems}
      />
    </>
  );
};
