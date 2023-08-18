import { cn } from "./classnames";

describe("classnames", () => {
  it("should correctly merge classnames", () => {
    const classes = cn("bg-red-500", "hover:bg-blue-500", [
      "md:bg-green-500",
      "md:hover:bg-yellow-500",
    ]);

    const expectedClasses =
      "bg-red-500 hover:bg-blue-500 md:bg-green-500 md:hover:bg-yellow-500";

    expect(classes).toBe(expectedClasses);
  });

  it("should correctly merge classnames with falsy values", () => {
    const condition = false;
    const classes = cn("bg-red-500", condition && "hover:bg-blue-500", [
      "md:bg-green-500",
      condition && "md:hover:bg-yellow-500",
    ]);

    const expectedClasses = "bg-red-500 md:bg-green-500";

    expect(classes).toBe(expectedClasses);
  });
});
