import React, { useState } from "react";
import pizzaData from "../data/PizzaData.js";
import PizzaCard from "../components/PizzaCard";
import Cart from "../components/Cart";
import Navbar from "../components/NavBar.jsx";

const PizzaPage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const exists = cart.find((item) => item.id === pizza.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, qty: item.qty + pizza.qty } : item
        )
      );
    } else {
      setCart([...cart, { ...pizza }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const incrementQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );      
  };

  return (
    <div>
      <Navbar toggleCart={() => setCartOpen(!cartOpen)} cartCount={cart.length} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-4">
        {pizzaData.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} onAdd={addToCart} />
        ))}
      </div>

      {cartOpen && (
        <Cart
          cart={cart}
          onClose={() => setCartOpen(false)}
          onDelete={removeFromCart}
          onIncrement={incrementQty}
          onDecrement={decrementQty}
        />
      )}
      
    </div>
  );
};

export default PizzaPage;


// this is the whole homepage here we have all landing page