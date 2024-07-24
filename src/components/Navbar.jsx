import { Link } from 'react-router-dom';
import "../App.css";


export default function Navbar() {
  return (
    <div>
      <div className="header-third-row">
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/products">Products</Link></li>
            <li><Link className="nav-link" to="blog/">Blog</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
    </div>
  )
}
