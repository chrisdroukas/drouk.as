import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "./theme-provider";

describe("ThemeProvider", () => {
  it("renders children correctly", () => {
    const testId = "child-component";

    render(
      <ThemeProvider attribute="value">
        <div data-testid={testId} />
      </ThemeProvider>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
