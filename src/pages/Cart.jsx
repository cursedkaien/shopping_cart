import { Link, useOutletContext } from "react-router";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart, handleUpdateQuantity, handleRemoveFromCart } =
    useOutletContext();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <Link to="/shop">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      <div className="cart-list">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemoveFromCart}
          />
        ))}
      </div>

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}
