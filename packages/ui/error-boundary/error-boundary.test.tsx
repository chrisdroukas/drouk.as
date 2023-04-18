import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ErrorBoundary } from "./";

describe("ErrorBoundary", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    (console.error as jest.Mock).mockRestore();
  });

  describe("when an error occurs", () => {
    it("renders the errorChildren and logs an error message", () => {
      const ErrorComponent = () => {
        throw new Error("Test Error");
      };

      const { getByText } = render(
        <ErrorBoundary errorChildren={<div>Error!</div>}>
          <ErrorComponent />
        </ErrorBoundary>
      );

      expect(getByText("Error!")).toBeInTheDocument();
      expect(console.error).toHaveBeenCalledTimes(1);
    });
  });

  describe("when no error occurs", () => {
    it("renders the children", () => {
      const { getByText } = render(
        <ErrorBoundary errorChildren={<div>Error!</div>}>
          <div>Hello World</div>
        </ErrorBoundary>
      );

      expect(getByText("Hello World")).toBeInTheDocument();
    });
  });
});
