import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge component", () => {
  it("should render the component without errors", () => {
    render(<Badge capsuleStatus="active" />);
    expect(screen.getByTestId("badge")).toBeInTheDocument();
  });
});
