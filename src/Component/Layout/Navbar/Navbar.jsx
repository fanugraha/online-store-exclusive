import "./Navbarstyle.css";
import React from "react";
import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <div className="container navbar">
      <img src="src/assets/Image/Logo.png" alt="" />{" "}
      {/* Gunakan tanda slash (/) sebagai pemisah direktori */}
      <ul className="NavList">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="NavRight">
        <div className="SearchBar">
          <img src="src/assets/Image/search.svg" alt="" />
          <input type="text" placeholder="Cari disini" />
        </div>
        <button>
          <img src="src/assets/Image/cart.svg" alt="" />
          <p>Cart</p>
        </button>
        <Button color="primary" className="btn-login">
          Login/Register
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
