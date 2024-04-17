import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const StorePage = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedShippingOption, setSelectedShippingOption] = useState(null);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  //Define array of products
  const products = [
    {
      id: 1,
      title: "Elegant Women Dress",
      description:
        "A classy and stylish outfit for any special occasion, perfect for making a graceful statement.",
      price: 119.99,
      image: "/Images/product1.jpg",
      colors: ["Red", "Blue", "Green"],
    },
    {
      id: 2,
      title: "Sleeveless Dress",
      description: "A nice summer dress",
      price: 249.99,
      image: "/Images/product2.jpg",
      colors: ["Black", "White", "Gray"],
    },
    {
      id: 3,
      title: "Men golf t-shirt",
      description: "Comfortable and nice t-shirt for men",
      price: 299.99,
      image: "/Images/product3.jpg",
      colors: ["Yellow", "Orange", "Pink"],
    },
    {
      id: 4,
      title: "Crop-top",
      description: "Girls nice crop top perfect for summer",
      price: 99.99,
      image: "/Images/product4.jpg",
      colors: ["Purple", "Indigo", "Violet"],
    },
    {
      id: 5,
      title: "Women long sleeve top",
      description: "Classy top ",
      price: 229.99,
      image: "/Images/product5.png",
      colors: ["Teal", "Turquoise", "Aqua"],
    },
    {
      id: 6,
      title: "Dress",
      description: "Perfect and comfortable dress",
      price: 399.99,
      image: "/Images/product6.jpg",
      colors: ["Lime", "Green", "Olive"],
    },
    {
      id: 7,
      title: "Topless Crop",
      description: "A nice topless crop-top for girls",
      price: 278.99,
      image: "/Images/product7.jpg",
      colors: ["Maroon", "Burgundy", "Crimson"],
    },
    {
      id: 8,
      title: "Chefs shirt",
      description: "Perfect shirt for chefs,comfortable and srtong ",
      price: 309.99,
      image: "/Images/product8.png",
      colors: ["Navy", "Royal Blue", "Sky Blue"],
    },
    {
      id: 9,
      title: "Girls jean",
      description: "High-rise jeans for girls",
      price: 349.99,
      image: "/Images/product9.jpg",
      colors: ["Beige", "Tan", "Khaki"],
    },
    {
      id: 10,
      title: "Jean",
      description: "A jean made of strong fabric to last longer",
      price: 699.99,
      image: "/Images/Product10.jpg",
      colors: ["Silver", "Gold", "Bronze"],
    },
  ];
  //Array containing shipping options
  const shippingOptions = [
    {
      id: 1,
      name: "Standard Shipping",
      description: "Delivery within 5-7 business days",
      cost: 149.99,
    },
    {
      id: 2,
      name: "Express Shipping",
      description: "Delivery within 2-3 business days",
      cost: 299.99,
    },
    {
      id: 3,
      name: "Next Day Delivery",
      description: "Delivery on the next business day",
      cost: 449.99,
    },
  ];
  // Function to add a product to the cart

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        color: selectedColor,
        quantity: 1,
        shippingOption: selectedShippingOption,
      },
    });
  };
  // Function to remove a product from the cart
  const handleRemoveFromCart = (productId, color) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: productId, color },
    });
  };

  // Function to calculate the total cost of the items in the cart

  const calculateTotalCost = () => {
    const cartTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shippingCost = selectedShippingOption
      ? selectedShippingOption.cost
      : 0;
    return cartTotal + shippingCost;
  };

  return (
    <div className="store-page">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            {/* ... (existing product item markup) */}
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: R{product.price}</p>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">Select Color</option>
              {product.colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={!selectedColor}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div>
        <h3>Select Shipping Method</h3>
        <select
          value={selectedShippingOption ? selectedShippingOption.id : ""}
          onChange={(e) =>
            setSelectedShippingOption(
              shippingOptions.find(
                (option) => option.id === parseInt(e.target.value)
              )
            )
          }
        >
          <option value="">Select an option</option>
          {shippingOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name} - R{option.cost}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={() => setShowHelpModal(true)}>Request Help</button>
        {showHelpModal && (
          <div className="help-modal">
            <h3>Shipping Options Help</h3>
            <ul>
              {shippingOptions.map((option) => (
                <li key={option.id}>
                  <h4>{option.name}</h4>
                  <p>{option.description}</p>
                  <p>Cost: R{option.cost}</p>
                </li>
              ))}
            </ul>
            <button onClick={() => setShowHelpModal(false)}>Close</button>
          </div>
        )}
      </div>
      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={`R{item.id}-R{item.color}`} className="cart-item">
                <p>
                  {item.title} ({item.color}) - Quantity: {item.quantity}
                </p>
                <button
                  onClick={() => handleRemoveFromCart(item.id, item.color)}
                >
                  Remove
                </button>
              </div>
            ))}
            <p>Total Cost: R{calculateTotalCost()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StorePage;
