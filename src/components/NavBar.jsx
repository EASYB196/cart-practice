import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ toggleCart, cartCount }) => {
  return (
    <nav className="flex  justify-between  items-center p-4 bg-red-600  text-white shadow-md">
      <h1 className="text-2xl font-bold">PizzaZone 🍕</h1>
      <button className="relative" onClick={toggleCart}>
        <FaShoppingCart className="text-2xl" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
