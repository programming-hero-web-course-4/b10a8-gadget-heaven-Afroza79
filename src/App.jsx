import "./App.css";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Dashboard from "./components/Dashboard";
import ProductViewDetails from "./components/ProductViewDetails";
import CategoryDetail from "./components/CategoryDetail";
import Footer from "./components/Footer";
import ErrorComponent from "./components/ErrorComponent";
import AboutUs from "./components/AboutUs";
import WishList from "./components/WishList";

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const [cartCount, setCartCount] = useState(cartItems.length);
  const [cart, setCart] = useState(cartItems);

  
  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.product_id === product.product_id)) {
      setWishlist([...wishlist, product]);
    }
  };
 
  

  // Function to add item to cart
  const addToCart = (product) => {
    // setCartItems((prevItems) => [...prevItems, product]);
    setCart((prevCart) => [...prevCart, product]);
    setCartCount((prevCount) => prevCount + 1); // Increment the cart count
    toast.success(`Product has been added to the cart!`);
  };


  useEffect(() => {
    setCartCount(cartItems.length);
    setCart(cartItems);
  }, [cartItems]);

 

  return (
    <>
      <div className="bg-gray-100 font-sora ">
        <Router>
          <LocationHandler />
          <Navbar
            cartCount={cartCount}
            cartItems={cartItems}
            wishlist={wishlist}
            setCartItems={setCartItems}
            setWishlist={setWishlist}
            setActiveComponent={setActiveComponent}
            activeComponent={activeComponent}
          />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route
              path="/dashboard"
              element={
                activeComponent === "wishlist" ? (
                  <WishList
                    wishlist={wishlist}
                    onAddToCart={addToCart}
                    setWishlist={setWishlist}
                    />
                ) : (
                  <Dashboard cartItems={cart} setCartItems={setCartItems} />
                  
                )
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
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
            <Route path="*" element={<ErrorComponent />} />
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

function LocationHandler() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Gadget Heaven"; // Default title

    if (path === "/") {
      title = "Gadget Heaven | Home";
    } else if (path === "/statistics") {
      title = "Gadget Heaven | Statistics";
    } else if (path === "/about-us") {
      title = "Gadget Heaven | About Us";
    } else if (path.includes("/product/")) {
      title = "Gadget Heaven | Product Details";
    } else if (path.includes("/category/")) {
      title = "Gadget Heaven | Category";
    } else if (path.includes("/dashboard/")) {
      title = "Gadget Heaven | Dashboard";
    }

    // Set the document title dynamically
    document.title = title;
  }, [location]);

  return null; // This component doesn't render anything
}

export default App;
