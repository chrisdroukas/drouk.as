import React, { FC, forwardRef } from "react";

/**
 * Displays the current viewport size in accordance with Tailwind.
 * @note This component will only render in non-production environments.
 */
export const TailwindIndicator: FC = () => {
  /**
   * Return null in production environments.
   */
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  /**
   * Class definitions for each viewport size.
   */
  const breakpoints = [
    { breakpoint: "block sm:hidden", label: "XS" },
    { breakpoint: "hidden sm:block md:hidden", label: "SM" },
    { breakpoint: "hidden md:block lg:hidden", label: "MD" },
    { breakpoint: "hidden lg:block xl:hidden", label: "LG" },
    { breakpoint: "hidden xl:block 2xl:hidden", label: "XL" },
    { breakpoint: "hidden 2xl:block", label: "2XL" },
  ];

  return (
    <TailwindContainer>
      {breakpoints.map(({ breakpoint, label }) => (
        <ViewportLabel key={label} breakpoint={breakpoint}>
          Viewport: {label}
        </ViewportLabel>
      ))}
    </TailwindContainer>
  );
};

const TailwindContainer = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div
    ref={ref}
    {...props}
    className={
      "fixed bottom-5 mx-auto inset-x-0 max-w-max z-50 flex items-center justify-center rounded-md bg-gray-800 p-3 font-mono text-xs text-white select-none transition ease-in-out delay-100 hover:opacity-0"
    }
  />
));
TailwindContainer.displayName = "TailwindContainer";

const ViewportLabel = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { breakpoint: string }
>(({ breakpoint, children, ...props }, ref) => (
  <div ref={ref} {...props} className={breakpoint}>
    {children}
  </div>
));
ViewportLabel.displayName = "ViewportLabel";
