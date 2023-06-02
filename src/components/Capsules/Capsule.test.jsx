import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Capsule from "./Capsule";

describe("Capsule component", () => {
  const mockCapsule = {
    id: "exampleId",
    serial: "exampleSerial",
    status: "active",
    last_update: "2023-06-01",
  };

  it("should render the component without errors", () => {
    render(<Capsule capsule={mockCapsule} setCapsuleId={jest.fn()} />);
    expect(screen.getByTestId('capsule')).toBeInTheDocument()
  });

  it("should display the capsule serial number", () => {
    render(<Capsule capsule={mockCapsule} setCapsuleId={jest.fn()} />);
    expect(screen.getByText(mockCapsule.serial)).toBeInTheDocument();
  });

  it("should display the last update date of the capsule", () => {
    render(<Capsule capsule={mockCapsule} setCapsuleId={jest.fn()} />);
    expect(screen.getByText(mockCapsule.last_update)).toBeInTheDocument();
  });

  it("should call the setCapsuleId function with the capsule id when clicked", () => {
    const setCapsuleId = jest.fn();
    render(<Capsule capsule={mockCapsule} setCapsuleId={setCapsuleId} />);
    const capsuleElement = screen.getByTestId("capsule");
    fireEvent.click(capsuleElement);
    expect(setCapsuleId).toHaveBeenCalledWith(mockCapsule.id);
  });
});
