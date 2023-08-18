"use client";

import { Icons } from "@/components/icons";
import { cn } from "@/library/utilities/classnames";
import * as OverlayNavigationPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const OverlayNavigation = OverlayNavigationPrimitive.Root;

const OverlayNavigationTrigger = OverlayNavigationPrimitive.Trigger;

const OverlayNavigationClose = OverlayNavigationPrimitive.Close;

const OverlayNavigationPortal = ({
  className,
  ...props
}: OverlayNavigationPrimitive.DialogPortalProps) => (
  <OverlayNavigationPrimitive.Portal className={cn(className)} {...props} />
);
OverlayNavigationPortal.displayName =
  OverlayNavigationPrimitive.Portal.displayName;

const OverlayNavigationOverlay = React.forwardRef<
  React.ElementRef<typeof OverlayNavigationPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof OverlayNavigationPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <OverlayNavigationPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
OverlayNavigationOverlay.displayName =
  OverlayNavigationPrimitive.Overlay.displayName;

const overlayNavigationVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-200",
  {
    variants: {
      side: {
        top: "inset-x-0 p-8 top-0 border-b data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
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
      className={cn(overlayNavigationVariants({ side }), className)}
      {...props}
    >
      {children}
      <OverlayNavigationPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <Icons.close className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </OverlayNavigationPrimitive.Close>
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
