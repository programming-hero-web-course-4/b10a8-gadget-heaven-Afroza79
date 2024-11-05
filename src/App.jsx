import "./App.css";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Dashboard from "./components/Dashboard";
import ProductViewDetails from "./components/ProductViewDetails";
import CategoryDetail from "./components/CategoryDetail";
import Footer from "./components/Footer";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <>
      <div className="bg-gray-100 font-sora ">
        <Router>
          <Navbar
            cartCount={cartItems.length}
            cartItems={cartItems}
            wishlist={wishlist}
            setCartItems={setCartItems}
            setWishlist={setWishlist}
          />
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route
              path="/product/:productId"
              element={
                <ProductViewDetails
                  addToCart={addToCart}
                  wishlist={wishlist}
                  addToWishlist={addToWishlist}
                />
              }
            />
            <Route path="/category/:categoryName" element={<Home />} />
           
          </Routes>
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
          />
        </Router>
      </div>
    </>
  );
}

export default App;
