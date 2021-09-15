import React from "react";
import "./Navbar.css";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// import shoppingCart from "../img/shopping-bags.png";
import logo from "../views/img/logo.jpeg";

function Navbar() {
  const totalQuantity = useSelector(
    (state) => state.cartReducer.totalCartQuantity
  );

  return (
    <div>
      <div className="containerLogo">
        <a href="http://www.localhost:3000">
          <img src={logo} className="logo" alt="company logo" height="140px" />
        </a>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            WildDog.se
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link" aria-current="page" to="/">
                  Hem
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  aria-current="page"
                  to="/products"
                >
                  Produkter
                </NavLink>
              </li>
              <li className="nav-item me-3 me-lg-0 dropdown">
                <span
                  className="nav-link dropdown-toggle hidden-arrow"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-shopping-cart"></i>
                  {totalQuantity > 0 && (
                    <span className="badge rounded-pill badge-notification bg-danger">
                      {totalQuantity}
                    </span>
                  )}
                </span>
                <ul
                  className="dropdown-menu dropdown-menu-lg-end"
                  aria-labelledby="navbarDropdown"
                >
                  <ShoppingCart />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// function Navbar() {
//   return (
//     <div className="container">
//       <div className="containerLogo">
//         <a href="http://www.localhost:3000">
//           <img src={logo} className="logo" alt="company logo" height="140px" />
//         </a>
//       </div>
//       <div className="links">
//         <ul>
//           <li>
//             <a href="http://www.localhost:3000">Home</a>
//           </li>
//           <li>
//             <a href="http://www.localhost:3000">Products</a>
//           </li>
//           <li>
//             <a href="http://www.localhost:3000">Brands</a>
//           </li>
//           <li>
//             <a href="http://www.localhost:3000">SALE</a>
//           </li>
//           <li>
//             <a href="http://www.localhost:3000">
//               <img
//                 src={shoppingCart}
//                 className="img"
//                 alt="shopping cart"
//                 height="30px"
//               />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

export default Navbar;
