import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";

describe("Home Component", () => {
  it("renders welcome heading and navigation link", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /online/i }),
    ).toBeInTheDocument();

    const shopLink = screen.getByRole("link", { name: /shop now/i });
    expect(shopLink).toBeInTheDocument();
    expect(shopLink).toHaveAttribute("href", "/shop");
  });
});
