import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

import Cards from "./Cards";
import BannerImagePart from "./BannerImagePart";
import ProductViewDetails from "./ProductViewDetails";
import Dashboard from "./Dashboard";
import WishList from "./WishList";
import { toast } from "react-toastify";

const Navbar = ({ wishlist, cartItems, setCartItems, setWishlist, setActiveComponent,activeComponent,cartCount }) => {
  const location = useLocation();
  const isProductViewDetails = location.pathname.startsWith("/product/");
  const isDashboardViewDetails = location.pathname.startsWith("/dashboard");
  const isStatisticsViewDetails = location.pathname.startsWith("/statistics");
  const isAboutUsViewDetails = location.pathname.startsWith("/about-us");
  // const [activeComponent, setActiveComponent] = useState("dashboard"); 
  // const [cartCount, setCartCount] = useState(cartItems.length);
  const [cart, setCart] = useState(cartItems);

  // const handleAddToCart = (item) => {
  //   setCart((prevCart) => [...prevCart, item]);
  //   setCartCount((prevCount) => prevCount + 1); // Increment the cart count
  //   toast.success(`Product has been added to the cart!`);
  // };

  const handleWishlistClick = () => {
    setActiveComponent("wishlist"); // Set active component to Wishlist
  };

  const handleCartClick = () => {
    setActiveComponent("dashboard"); // Set active component to Dashboard
  };

  // useEffect(() => {
  //   setCartCount(cartItems.length);
  //   setCart(cartItems);
  // }, [cartItems]);

  return (
    <>
      <header
        className={`${isProductViewDetails || isDashboardViewDetails || isStatisticsViewDetails || isAboutUsViewDetails
          ? "px-0 xl:px-0 lg:px-0 md:px-0 pt-0"
          : "px-2 xl:px-20 lg:px-20 md:px-8 pt-4"
          }`}
      >
        <div
          className={`${isProductViewDetails || isDashboardViewDetails || isStatisticsViewDetails || isAboutUsViewDetails
            ? ""
            : "p-1 border-l-2 border-r-2 rounded-xl border-gray-300"
            }`}
        >
          <div
            className={`rounded-xl  ${isProductViewDetails || isDashboardViewDetails || isStatisticsViewDetails || isAboutUsViewDetails
              ? " pb-0 xl:pb-0 lg:pb-0 md:pb-0 "
              : "bg-purple pb-28 xl:pb-60 lg:pb-60 md:pb-60"
              }`}
          >
            <div className="navbar px-2 xl:px-36 lg:px-10 md:px-10 pt-6">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex="0"
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex="0"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive
                            ? " bg-gray-500 focus:bg-transparent"
                            : "focus:bg-transparent"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/statistics"
                        className={({ isActive }) =>
                          isActive
                            ? " bg-gray-500 focus:bg-transparent"
                            : "focus:bg-transparent"
                        }
                      >
                        Statistics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                          isActive
                            ? " bg-gray-500 focus:bg-transparent"
                            : "focus:bg-transparent"
                        }
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                          isActive
                            ? " bg-gray-500 focus:bg-transparent"
                            : "focus:bg-transparent"
                        }
                      >
                        About Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <a
                  className={`btn btn-ghost text-md xl:text-xl lg:text-xl md:text-xl ${isProductViewDetails || isDashboardViewDetails || isStatisticsViewDetails || isAboutUsViewDetails
                    ? "text-black"
                    : "text-white"
                    }`}
                >
                  Gadget Heaven
                </a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `${isProductViewDetails || isDashboardViewDetails || isStatisticsViewDetails || isAboutUsViewDetails
                          ? "text-black"
                          : "text-white"
                        } ${isActive
                          ? "bg-gray-500 focus:bg-transparent"
                          : "focus:bg-transparent"
                        }`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/statistics"
                      className={({ isActive }) =>
                        `${isProductViewDetails || isDashboardViewDetails || isStatisticsViewDetails || isAboutUsViewDetails
                          ? "text-black"
                          : "text-white"
                        } ${isActive
                          ? "bg-gray-500 focus:bg-transparent"
                          : "focus:bg-transparent"
                        }`
                      }
                    >
                      Statistics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        `${isProductViewDetails || isDashboardViewDetails || isStatisticsViewDetails || isAboutUsViewDetails
                          ? "text-black"
                          : "text-white"
                        } ${isActive
                          ? "bg-gray-500 focus:bg-transparent"
                          : "focus:bg-transparent"
                        }`
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about-us"
                      className={({ isActive }) =>
                        `${isProductViewDetails || isDashboardViewDetails || isStatisticsViewDetails || isAboutUsViewDetails
                          ? "text-black"
                          : "text-white"
                        } ${isActive
                          ? "bg-gray-500 focus:bg-transparent"
                          : "focus:bg-transparent"
                        }`
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="navbar-end flex gap-2 xl:gap-3 lg:gap-3 md:gap-3">
                <div className="relative bg-white px-1.5 xl:px-2 lg:px-2 md:px-2 py-0.5 xl:py-1 lg:py-1 md:py-1 rounded-full">
                  <FontAwesomeIcon
                    className="text-sm xl:text-base lg:text-base md:text-base"
                    icon={faCartPlus}
                  />
                  {/* Display cart item count */}
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <a className="relative bg-white px-1.5 xl:px-2 lg:px-2 md:px-2 py-0.5 xl:py-1 lg:py-1 md:py-1 rounded-full">
                  <FontAwesomeIcon
                    className="text-sm xl:text-base lg:text-base md:text-base"
                    icon={faHeart}
                  />
                  {Array.isArray(wishlist) && wishlist.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </a>
              </div>
            </div>

            {/* Banner */}
            <div
              className={`${isProductViewDetails
                ? "pb-60 bg-purple"
                : (isDashboardViewDetails || isStatisticsViewDetails || isAboutUsViewDetails)
                  ? "pb-20 bg-purple"
                  : ""
                }`}
            >
              <div
                className={`w-full xl:w-2/5 lg:w-4/5 md:w-full px-3 xl:px-0 lg:px-6 md:px-6 mx-auto text-center ${isProductViewDetails ? "" : "mt-12"
                  }`}
              >
                {isProductViewDetails ? (
                  <>
                    <h1 className="text-2xl xl:text-3xl lg:text-3xl md:text-3xl text-white font-bold mb-4 pt-8">
                      Product Details
                    </h1>
                  </>
                ) : isDashboardViewDetails ? (
                  <>
                    <h1 className="text-2xl xl:text-3xl lg:text-3xl md:text-3xl text-white font-bold mb-4 pt-8">
                      Dashboard
                    </h1>
                  </>
                ) : isStatisticsViewDetails ? (
                  <>
                    <h1 className="text-2xl xl:text-3xl lg:text-3xl md:text-3xl text-white font-bold mb-4 pt-8">
                      Statistics
                    </h1>
                  </>
                ) : isAboutUsViewDetails ? (
                  <>
                    <h1 className="text-2xl xl:text-3xl lg:text-3xl md:text-3xl text-white font-bold mb-4 pt-8">
                      About Us
                    </h1>
                  </>
                ) : (
                  <>
                    <h1 className="text-2xl xl:text-4xl lg:text-4xl md:text-4xl text-white font-bold mb-8">
                      Upgrade Your Tech Accessorize with Gadget Heaven
                      Accessories
                    </h1>
                  </>
                )}
                <p
                  className={`${isProductViewDetails || isDashboardViewDetails || isStatisticsViewDetails || isAboutUsViewDetails
                    ? "text-sm text-white pb-8"
                    : "text-sm text-white mb-8"
                    }`}
                >
                  Explore the latest gadgets that will take your experience to
                  the next level. From smart devices to the coolest accessories,
                  we have it all!
                </p>
                {!isProductViewDetails && !isDashboardViewDetails && !isStatisticsViewDetails && !isAboutUsViewDetails && (
                  <button className="bg-white text-purple text-sm font-medium px-5 py-2 rounded-full">
                    Shop Now
                  </button>
                )}
                {isDashboardViewDetails && (
                  <div className="flex items-center gap-2 justify-center">
                    <button
                      className={`p-2 text-sm font-medium px-5 py-2 rounded-full ${activeComponent === "dashboard"
                        ? "bg-white text-purple"
                        : "border border-white text-white"
                        }`}
                      onClick={handleCartClick}
                    >
                      Cart
                    </button>
                    <button
                      className={`p-2 text-sm font-medium px-5 py-2 rounded-full ${activeComponent === "wishlist"
                        ? "bg-white text-purple"
                        : "border border-white text-white"
                        }`}
                      onClick={handleWishlistClick}
                    >
                      Wishlist
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* After Banner Image */}
        {!isProductViewDetails && !isDashboardViewDetails && !isStatisticsViewDetails && !isAboutUsViewDetails && (
          <BannerImagePart />
        )}
      </header>
      {/* {!isProductViewDetails && <Cards />} */}
      {/* {activeComponent === "wishlist"
        ?  (
          <WishList
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            setWishlist={setWishlist}
          />
        )
        : isDashboardViewDetails && (
          ""
         
        )} */}
    </>
  );
};

export default Navbar;
