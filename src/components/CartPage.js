// src/components/CartPage.js
import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  // Select cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cost
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* Iterate over cart items and display each item */}
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
      <p>Total: R{totalCost}</p>
    </div>
  );
};

export default CartPage;
