import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("Test Header", () => {
  it("should render the Header component", () => {
    render(<Header data-testid="header"></Header>);
    expect(screen.getByTestId("header")).toBeTruthy();
  });
});
