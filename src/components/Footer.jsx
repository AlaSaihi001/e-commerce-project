import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-first-part">
        <div className="desc">
          <i className="fa-solid fa-scroll"></i>
          <div>
            <h2>Join our newslettre now!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum
              quibusdam, sint dicta provident voluptas.
            </p>
          </div>
        </div>
        <div className="join-space">
          <input type="text" />
          <button type="submit"> JOIN</button>
        </div>
      </div>
      <div className="footer-second-part">
        <div className="first-part">
          <h2 className="logo">Alatak</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
            consequatur? Magnam, doloribus.
          </p>
          <div>
            <i className="fa-solid fa-phone"></i>  +123 45 678 910
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i><> support@alatek.com</>
          </div>
        </div>
        <div className="second-part">
          <div>
            <h2>Company</h2>
            <ul>
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/about">About</Link></li>
              <li><Link className="nav-link" to="/products">Products</Link></li>
              <li><Link className="nav-link" to="blog/">Blog</Link></li>
              <li><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2>Information</h2>
            <ul>
              <li>Pricacy Policy</li>
              <li>Cookie Policy</li>
              <li>Do Not Sell My Personal Information</li>
              <li>Terms</li>
            </ul>
          </div>
          <div>
            <h2>Follow Us</h2>
            <div className="social-media">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-third-part">
        <p>Copyright © 2024 by Ala Eddine Saihi, Trademarks and brands are the property of their respective owners.</p>
      </div>
    </>
  );
}
