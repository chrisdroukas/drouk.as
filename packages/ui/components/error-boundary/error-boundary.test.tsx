import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./";

const NoErrorString = "No error thrown from ErrorComponent.";
const ErrorString = "Error thrown from ErrorComponent.";

/**
 * A component that throws an error.
 */
function TestComponent({ shouldThrow }: { shouldThrow?: boolean }) {
  if (shouldThrow) {
    throw new Error(ErrorString);
  }
  return <div>{NoErrorString}</div>;
}

describe("ErrorBoundary", () => {
  it("should render the child component when no error is thrown", () => {
    render(
      <ErrorBoundary errorChildren={<div />}>
        <TestComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(NoErrorString)).toBeInTheDocument();
  });

  it("should render the errorChildren prop when an error is thrown", () => {
    /**
     * A component that throws an error.
     */
    jest.spyOn(console, "error");
    // @ts-ignore
    global.console.error.mockImplementation(() => {});

    render(
      <ErrorBoundary errorChildren={<div>{ErrorString}</div>}>
        <TestComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText(ErrorString)).toBeInTheDocument();

    /**
     * Restore console.error.
     */
    // @ts-ignore
    global.console.error.mockRestore();
  });
});
