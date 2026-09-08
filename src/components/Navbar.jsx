import { Link } from "react-router";

export default function Navbar({ itemCount = 0 }) {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">ShopCart</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart{" "}
              {itemCount > 0 && <span className="badge">({itemCount})</span>}
            </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
