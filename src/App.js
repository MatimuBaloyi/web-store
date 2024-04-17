// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import "./App.css"; // Import your app.css file

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import StorePage from "./components/StorePage";
import CartPage from "./components/CartPage";
import LoginForm from "./components/LoginForm";
import Registration from "./components/Registration";

function App() {
  return (
    <Provider store={store}>
      {/* Provide the Redux store */}
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
