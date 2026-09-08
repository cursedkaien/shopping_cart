import { useState } from "react";

export default function ProductCart({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setQuantity(isNaN(val) || val < 1 ? 1 : val);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min={1}
        />
        <button onClick={handleIncrement}></button>

        <button onClick={() => onAddToCart(product, quantity)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
