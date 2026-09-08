import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Shop from "./Shop";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

const mockProducts = [
  { id: 1, title: "Test Product 1", price: 29.99, image: "test1.jpg" },
  { id: 2, title: "Test Product 2", price: 49.99, image: "test2.jpg" },
];

describe("Shop Component", () => {
  beforeEach(() => {
    useOutletContext.mockReturnValue({ handleAddToCart: vi.fn() });

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockProducts,
      }),
    );
  });

  it("fetches and renders products successfully", async () => {
    render(<Shop />);

    const product1 = await screen.findByText("Test Product 1");
    const product2 = await screen.findByText("Test Product 2");

    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });
});
