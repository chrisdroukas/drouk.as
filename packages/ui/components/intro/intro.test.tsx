import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Intro } from "./intro";

describe("Intro component", () => {
  it("renders the title and body", () => {
    render(<Intro title="Test title" body="Test body" />);

    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test body")).toBeInTheDocument();
  });

  it("renders buttons when they are provided", () => {
    const buttons = [
      { href: "/test1", label: "Test 1" },
      { href: "/test2", label: "Test 2" },
    ];

    render(<Intro title="Test title" body="Test body" buttons={buttons} />);

    expect(screen.getByText("Test 1")).toBeInTheDocument();
    expect(screen.getByText("Test 2")).toBeInTheDocument();
  });

  it("does not render buttons when they are not provided", () => {
    render(<Intro title="Test title" body="Test body" />);

    const buttonElement = screen.queryByText("Test 1");

    expect(buttonElement).toBeNull();
  });
});
