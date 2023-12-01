import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Intro } from "./intro";

describe("Intro component", () => {
  it("renders the title and children", () => {
    render(<Intro title="Test title">Test children</Intro>);

    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test children")).toBeInTheDocument();
  });

  it("renders buttons when they are provided", () => {
    const buttons = [
      { href: "/test1", label: "Test 1" },
      { href: "/test2", label: "Test 2" },
    ];

    render(
      <Intro title="Test title" buttons={buttons}>
        Test children
      </Intro>
    );

    expect(screen.getByText("Test 1")).toBeInTheDocument();
    expect(screen.getByText("Test 2")).toBeInTheDocument();
  });

  it("does not render buttons when they are not provided", () => {
    render(<Intro title="Test title">Test children</Intro>);

    const buttonElement1 = screen.queryByText("Test 1");
    const buttonElement2 = screen.queryByText("Test 2");

    expect(buttonElement1).toBeNull();
    expect(buttonElement2).toBeNull();
  });
});
