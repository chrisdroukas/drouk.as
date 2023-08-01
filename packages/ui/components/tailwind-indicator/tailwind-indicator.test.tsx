import { render } from "@testing-library/react";
import { TailwindIndicator } from "./tailwind-indicator";

describe("TailwindIndicator", () => {
  let originalEnv: typeof process.env.NODE_ENV;

  beforeEach(() => {
    originalEnv = process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
  });

  it("does not render in production environment", () => {
    process.env.NODE_ENV = "production";
    const { container } = render(<TailwindIndicator />);
    expect(container.firstChild).toBeNull();
  });

  it("renders in non-production environment", () => {
    process.env.NODE_ENV = "test";
    const { getByText } = render(<TailwindIndicator />);
    expect(getByText("Viewport: XS")).toBeInTheDocument();
    expect(getByText("Viewport: SM")).toBeInTheDocument();
    expect(getByText("Viewport: MD")).toBeInTheDocument();
    expect(getByText("Viewport: LG")).toBeInTheDocument();
    expect(getByText("Viewport: XL")).toBeInTheDocument();
    expect(getByText("Viewport: 2XL")).toBeInTheDocument();
  });
});
