import "../App.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-first-row">
          <div className="header-first-row-left">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-square-twitter"></i>
          </div>
          <div className="header-first-row-right">
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
              <p>+123 45 678 910</p>
            </div>
            <div className="mail">
              <i className="fa-solid fa-envelope"></i>
              <p>support@alatek.com</p>
            </div>
          </div>
        </div>
        <div className="header-second-row">
          <div className="first-row">
            <div className="logo">Alatek</div>
            <div className="searchbar">
              <input type="text" placeholder="Search..." />
              <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="header-second-row-right">
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-solid fa-envelope"></i>
              <button className="log-in" onClick>Log in</button>
              <button className="sign-up" onClick>Sign up</button>
            </div>
          </div>
          <Navbar />
        </div>
      </header>
    </>
  );
}
