import { createStore } from "redux";

// Define initial state for the store
const initialState = {
  cart: [], // Array to store items in the cart
};

// Define the root reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Reducer case to add an item to the cart
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload], // Add the new item to the cart array
      };
    // Reducer case to remove an item from the cart
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            !(
              item.id === action.payload.id &&
              item.color === action.payload.color
            ) // Filter out the item to be removed from the cart
        ),
      };
    // Default case, return the current state
    default:
      return state;
  }
};

// Create the Redux store using the root reducer
const store = createStore(rootReducer);

// Export the store
export default store;
