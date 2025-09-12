import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";

const PizzaCard = ({ pizza, onAdd }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    const newQty = quantity === 0 ? 1 : quantity;
    setQuantity(newQty);
    onAdd({ ...pizza, qty: newQty });

    // Use a unique toast ID (e.g., based on pizza name)
    toast.success(`${pizza.name} added to cart!`, {
      id: `cart-${pizza.name}`, // 👈 ensures only one toast per pizza
      duration: 2000,
    });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 relative w-full sm:w-[300px]">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3"
      />

      <button
        onClick={handleAddToCart}
        className="absolute top-[145px] sm:top-[170px] left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 flex items-center gap-2 transition text-sm sm:text-base"
      >
        <FaShoppingCart className="text-white" />
        Add to Cart
      </button>

      <div className="mt-6 text-center px-2">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          {pizza.name}
        </h2>
        <p className="text-lg font-bold  sm:text-lg sm:font-semibold text-gray-800 mt-1">{pizza.desc}</p>
        <p className="text-2xl sm:text-xl text-gray-700 font-medium mt-2">
          ${pizza.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default PizzaCard;
// this add the particular card of pizza added to cart here