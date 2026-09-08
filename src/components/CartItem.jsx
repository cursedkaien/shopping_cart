export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    onUpdateQuantity(item.id, Number.isNaN(val) || val < 1 ? 1 : val);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.item} width="60" />
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>

      <div className="quantity-controls">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
          -
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={handleInputChange}
          min="!"
        />
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
      </div>

      <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}
