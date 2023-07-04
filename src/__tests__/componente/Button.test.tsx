import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("Test Button", () => {
  it("should render button", () => {
    render(<Button children="teste" data-testid="teste"></Button>);
    expect(screen.getByTestId("teste")).toBeTruthy();
  });
});
