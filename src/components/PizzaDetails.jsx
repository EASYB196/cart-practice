import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pizzaData from "../data/PizzaData";
import { FaArrowLeft } from "react-icons/fa";

const PizzaDetails = ({ onAdd, cart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const selectedPizza = pizzaData.find((item) => item.id.toString() === id);
    setPizza(selectedPizza);

    const inCart = cart.find((item) => item.id.toString() === id);
    if (inCart) {
      setQuantity(inCart.qty);
    } else {
      setQuantity(1);
    }
  }, [id, cart]);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (pizza) {
      onAdd({ ...pizza, qty: quantity });
    }
  };

  if (!pizza) {
    return <div className="text-center text-gray-600 mt-10">Pizza not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-red-500 hover:underline mb-4"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-xl shadow-lg">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-72 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{pizza.name}</h2>
          <p className="text-gray-700 mb-4">{pizza.description}</p>
          <p className="text-xl text-red-600 font-semibold mb-4">
            ${pizza.price.toFixed(2)}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={handleDecrement}
              className="bg-gray-200 px-3 py-1 rounded text-lg"
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-gray-200 px-3 py-1 rounded text-lg"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;

// this appears in the cart and give details about the card of pizza added 
