// import React from "react";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const Cart = ({ cart = [], onClose, onDelete, onIncrement, onDecrement }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 transition-transform duration-300">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose}>
          <FaTimes className="text-xl text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4 overflow-y-auto max-h-[80vh]">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">🛒 Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start gap-4"
            >
              {/* Image + Info */}
              <div className="flex items-start gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <button
                      onClick={() => onDecrement(item.id)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>Qty: {item.qty}</span>
                    <button
                      onClick={() => onIncrement(item.id)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price + Delete */}
              <div className="flex flex-col items-end gap-2">
                <span className="text-gray-800 font-medium">
                  ${(item.qty * item.price).toFixed(2)}
                </span>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Cart Total */}
      {cart.length > 0 && (
        <div className="p-4 border-t font-bold text-lg text-right">
          Total: ${total.toFixed(2)}
        </div>
      )}
      {/* Proceed to Pay Button */}
{cart.length > 0 && (
  <div className="p-4">
    <button
      onClick={() => toast("Redirecting to payment...")}
      className="w-full bg-green-600 text-xl text-white py-2 rounded hover:bg-green-700 transition"
    >
      Proceed to Payment 💳
    </button>
  </div>
)}
    </div>
  );
};

export default Cart;


// Margherita
// Pepperoni
// BBQ Chicken
// Veggie Delight
// Hawaiian
// Cheese Burst
// Tandoori Paneer
// Meat Lovers
// Spinach Feta
// Mexican Wave