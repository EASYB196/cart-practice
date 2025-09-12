import React, { useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { toast } from "react-hot-toast"; // make sure you installed react-hot-toast
import image from "../images/cheesse burger.jpg"; // Replace with correct BBQ chicken image

function BbqChicken({ onAdd }) {
  const [qty, setQty] = useState(1);

  // Pizza data
  const pizza = {
    id: 2, // give each pizza a unique id
    name: "BBQ Chicken Pizza",
    price: 15.99,
    image,
    desc:
      "Our BBQ Chicken Pizza is a smoky, savory delight that blends tender grilled chicken, rich BBQ sauce, melted mozzarella, and red onions on a hand-tossed golden crust. Topped with a hint of cilantro for that perfect final kick.",
    ingredients: [
      "Grilled Chicken",
      "BBQ Sauce",
      "Mozzarella Cheese",
      "Red Onions",
      "Cilantro",
      "Hand-Tossed Crust",
    ],
  };

  // Add to cart handler
  const handleAddToCart = () => {
    const newQty = qty === 0 ? 1 : qty;
    onAdd({ ...pizza, qty: newQty }); // pass to parent Cart
    toast.success(`${pizza.name} added to cart!`, { duration: 2000 });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Pizza Image */}
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-60 md:h-80"
        />

        {/* Pizza Info */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl font-bold text-red-600">{pizza.name}</h1>
          <p className="text-gray-700 text-base">{pizza.desc}</p>
          <p className="text-lg font-semibold text-green-600">
            ${pizza.price.toFixed(2)}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="bg-gray-200 px-3 py-1 rounded-full text-lg"
            >
              -
            </button>
            <span className="font-bold">{qty}</span>
            <button
              onClick={() => setQty(qty + 1)}
              className="bg-gray-200 px-3 py-1 rounded-full text-lg"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 shadow-md"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Ingredients */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600">
          {pizza.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Reviews */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Customer Reviews</h2>
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm space-y-3">
          <div>
            <p className="text-gray-700 italic">
              “So flavorful and cheesy — absolutely loved it!”
            </p>
            <div className="text-yellow-400 flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-700 italic">“Best BBQ pizza I've had in a while!”</p>
            <div className="text-yellow-400 flex gap-1 mt-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BbqChicken;
