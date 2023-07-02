import { FC } from "react";

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

  /**
   * Render a viewport size indicator.
   * @note Hovering the viewport size indicator will hide it to
   * reveal content beneath.
   */
  return (
    <div
      className={
        "fixed bottom-5 left-5 z-50 flex items-center justify-center rounded-md bg-gray-800 p-3 font-mono text-xs text-white select-none transition ease-in-out delay-100 hover:opacity-0"
      }
    >
      {breakpoints.map(({ breakpoint, label }) => (
        <div key={label} className={breakpoint}>
          Viewport: {label}
        </div>
      ))}
    </div>
  );
};
