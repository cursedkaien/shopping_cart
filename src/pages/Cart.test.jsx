import { render, screen } from "@testing-library/react";
import { MemoryRouter, useOutletContext } from "react-router";
import { describe, expect, it, vi } from "vitest";
import Cart from "./Cart";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return { ...actual, useOutletContext: vi.fn() };
});

const mockCartItems = [
  { id: 1, title: "Backpack", price: 50, quantity: 2, image: "bag.jpg" },
];

function renderCart(cart) {
  useOutletContext.mockReturnValue({
    cart,
    handleUpdateQuantity: vi.fn(),
    handleRemoveFromCart: vi.fn(),
  });

  render(
    <MemoryRouter>
      <Cart />
    </MemoryRouter>,
  );
}

describe("Cart Component", () => {
  it("renders empty cart message when items array is empty", () => {
    renderCart([]);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it("renders cart items and total cost", () => {
    renderCart(mockCartItems);

    expect(screen.getByText("Backpack")).toBeInTheDocument();
    expect(screen.getByText("Total: $100.00")).toBeInTheDocument();
  });
});
