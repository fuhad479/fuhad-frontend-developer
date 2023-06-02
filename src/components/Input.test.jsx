import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("renders input component", () => {
  it("renders the component", () => {
    render(
      <Input placeholder="placeholder" value="value" onChange={jest.fn} />
    );

    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it('should call onChange callback on value change', () => {
    const onChangeMock = jest.fn();
    render(<Input onChange={onChangeMock} />);
  
    const inputElement = screen.getByTestId('input');
    const newValue = 'New Value';
  
    fireEvent.change(inputElement, { target: { value: newValue } });
  
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({ value: newValue })
    }));
  });
});
