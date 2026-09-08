import { Link } from "react-router";
import cartImage from "../assets/cart.jpeg";

export default function Home() {
  return (
    <div className="home-container">
      <main className="home-hero">
        <section className="hero-copy">
          <p className="eyebrow">YOUR EVERYDAY STORE</p>
          <h1>
            Online <span>Shopping</span>
          </h1>
          <p className="hero-text">
            Find the things you love, add them to your cart, and check out with
            ease.
          </p>

          <Link to="/shop">
            <button className="shop-now-btn">Shop now</button>
          </Link>
        </section>

        <section className="hero-visual" aria-hidden="true">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <img src={cartImage} alt="" />
        </section>
      </main>
    </div>
  );
}
