import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  it("renders navigation links and item count badge", () => {
    render(
      <MemoryRouter>
        <Navbar itemCount={5} />
      </MemoryRouter>,
    );

    expect(screen.getByText("ShopCart")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("(5)")).toBeInTheDocument();
  });
});
