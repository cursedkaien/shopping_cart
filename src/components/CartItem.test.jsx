import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "./CartItem";

const mockItem = {
  id: 1,
  title: "Fjallraven Backpack",
  price: "109.95",
  quantity: 2,
  image: "rubbbbb.jpg",
};

describe("CartItem", () => {
  it("calls remove handler when remove button is clicked", async () => {
    const onRemove = vi.fn();
    const user = userEvent.setup();

    render(
      <CartItem
        item={mockItem}
        onUpdateQuantity={() => {}}
        onRemove={onRemove}
      />,
    );

    const removeBtn = screen.getByRole("button", { name: /remove/i });
    await user.click(removeBtn);

    expect(onRemove).toHaveBeenCalledWith(1);
  });
});
