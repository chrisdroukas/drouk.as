"use client";

import { cn } from "@/library/utilities";
import * as OverlayNavigationPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const OverlayNavigation = OverlayNavigationPrimitive.Root;

const OverlayNavigationTrigger = OverlayNavigationPrimitive.Trigger;

const OverlayNavigationClose = OverlayNavigationPrimitive.Close;

const OverlayNavigationPortal = OverlayNavigationPrimitive.Portal;

const OverlayNavigationOverlay = React.forwardRef<
  React.ElementRef<typeof OverlayNavigationPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof OverlayNavigationPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <OverlayNavigationPrimitive.Overlay
    className={cn(
      "fixed inset-0 top-14 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
OverlayNavigationOverlay.displayName =
  OverlayNavigationPrimitive.Overlay.displayName;

const overlayNavigationVariants = cva(
  "fixed gap-4 bg-background transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-200",
  {
    variants: {
      side: {
        top: "inset-x-0 top-14 border-b data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      },
    },
    defaultVariants: {
      side: "top",
    },
  }
);

interface OverlayNavigationContentProps
  extends React.ComponentPropsWithoutRef<
      typeof OverlayNavigationPrimitive.Content
    >,
    VariantProps<typeof overlayNavigationVariants> {}

const OverlayNavigationContent = React.forwardRef<
  React.ElementRef<typeof OverlayNavigationPrimitive.Content>,
  OverlayNavigationContentProps
>(({ side = "top", className, children, ...props }, ref) => (
  <OverlayNavigationPortal>
    <OverlayNavigationOverlay />
    <OverlayNavigationPrimitive.Content
      ref={ref}
      className={cn(overlayNavigationVariants({ side }))}
      {...props}
    >
      {children}
    </OverlayNavigationPrimitive.Content>
  </OverlayNavigationPortal>
));
OverlayNavigationContent.displayName =
  OverlayNavigationPrimitive.Content.displayName;

const OverlayNavigationHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
OverlayNavigation.displayName = "OverlayNavigationHeader";

const OverlayNavigationFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
OverlayNavigationFooter.displayName = "OverlayNavigationFooter";

const OverlayNavigationTitle = React.forwardRef<
  React.ElementRef<typeof OverlayNavigationPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof OverlayNavigationPrimitive.Title>
>(({ className, ...props }, ref) => (
  <OverlayNavigationPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
OverlayNavigationTitle.displayName =
  OverlayNavigationPrimitive.Title.displayName;

const OverlayNavigationDescription = React.forwardRef<
  React.ElementRef<typeof OverlayNavigationPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof OverlayNavigationPrimitive.Description>
>(({ className, ...props }, ref) => (
  <OverlayNavigationPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
OverlayNavigationDescription.displayName =
  OverlayNavigationPrimitive.Description.displayName;

export {
  OverlayNavigation,
  OverlayNavigationClose,
  OverlayNavigationContent,
  type OverlayNavigationContentProps,
  OverlayNavigationDescription,
  OverlayNavigationFooter,
  OverlayNavigationHeader,
  OverlayNavigationTitle,
  OverlayNavigationTrigger,
};
