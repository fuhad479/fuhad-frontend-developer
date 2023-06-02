import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner component", () => {
  it("should render the banner element", () => {
    render(<Banner />);
    const bannerElement = screen.getByTestId("banner");
    expect(bannerElement).toBeInTheDocument();
  });

  it("should render the heading element with the correct content", () => {
    render(<Banner />);
    const headingElement = screen.getByTestId("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.textContent).toBe(
      "Welcome to the Gateway of Space with SpaceX"
    );
  });

  it("should render the paragraph element with the correct content", () => {
    render(<Banner />);
    const paragraphElement = screen.getByText(
      "Experience the Future of Space Exploration with SpaceX. Discover groundbreaking technology, awe-inspiring missions, and a passion for pushing the boundaries of what’s possible. Join us on an extraordinary journey beyond Earth, where innovation meets the stars."
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render two button elements", () => {
    render(<Banner />);
    const buttonElements = screen.getAllByTestId("button");
    expect(buttonElements.length).toBe(2);
  });
});
