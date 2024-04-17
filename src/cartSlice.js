import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the cart slice
const initialState = {
  items: [], // Array to store cart items
};

// Create a slice for the cart
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer function to add an item to the cart
    addItem(state, action) {
      const newItem = action.payload; // New item to be added to the cart
      const existingItem = state.items.find((item) => item.id === newItem.id); // Check if item already exists in the cart
      if (existingItem) {
        // If item already exists in cart, increase its quantity
        existingItem.quantity += newItem.quantity;
      } else {
        // If item doesn't exist in cart, add it to the cart
        state.items.push(newItem);
      }
    },
    // Reducer function to remove an item from the cart
    removeItem(state, action) {
      const itemId = action.payload; // ID of the item to be removed
      state.items = state.items.filter((item) => item.id !== itemId); // Filter out the item to be removed from the cart
    },
    // Reducer function to clear the entire cart
    clearCart(state) {
      state.items = []; // Empty the items array to clear the cart
    },
  },
});

// Export action creators
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export the reducer function
export default cartSlice.reducer;
