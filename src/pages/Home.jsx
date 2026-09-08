import { Link } from "react-router";

export default function Home() {
  return (
    <div className="home-container">
      <main>
        <h1>Online</h1>
        <h1>Shopping</h1>

        <Link to="/shop">
          <button className="shop=now-btn">SHOP NOW</button>
        </Link>
      </main>
    </div>
  );
}
