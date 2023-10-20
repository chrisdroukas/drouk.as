import "@testing-library/jest-dom";
import { SiteConfiguration } from "@/types";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

const mockConfiguration: SiteConfiguration = {
  name: "Test Site",
  description: "This is a test site",
  author: { name: "Chris Droukas", url: "https://drouk.as" },
  creator: "Chris Droukas",
  keywords: ["test", "site"],
  links: {
    url: "https://drouk.as",
    twitter: "https://twitter.com/drouk.as",
    github: "https://github.com/drouk.as",
  },
};

describe("Footer", () => {
  it("should render without crashing", () => {
    render(<Footer configuration={mockConfiguration} />);

    // Check if the ThemeSelector is present
    expect(
      screen.getByRole("button", { name: /toggle theme/i })
    ).toBeInTheDocument();

    // Check if the links are present
    expect(screen.getByText(/drouk.as/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
  });
});
