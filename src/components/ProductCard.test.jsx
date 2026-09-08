import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCart from "./ProductCard";

const mockProduct = {
  id: 1,
  title: "Fjallraven Backpack",
  price: "109.95",
  image: "rubbbbb.jpg",
};

describe("ProductCard", () => {
  it("render product title and price", () => {
    render(<ProductCart product={mockProduct} onAddToCart={() => {}} />);

    expect(screen.getByText("Fjallraven Backpack")).toBeInTheDocument();
    expect(screen.getByText("$109.95")).toBeInTheDocument();
  });

  it("calls onAddToCart function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<ProductCart product={mockProduct} onAddToCart={onClick} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
