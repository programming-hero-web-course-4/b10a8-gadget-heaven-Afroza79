import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import successImage from "../assets/Group.png";
import WishList from "./WishList";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ cartItems, setCartItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalCostInModal, setTotalCostInModal] = useState(null);
  const navigate = useNavigate();

  // Function to open the modal
  const handlePurchaseClick = () => {
    const totalCost = cartItems?.reduce((total, item) => total + item.price, 0)?.toFixed(2);
    setTotalCostInModal(totalCost);
    setIsModalOpen(true);
    setCartItems([]);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

   // Function to sort items by price in descending order
   const handleSortByPrice = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedItems);
  };

  // Calculate total cost
  const totalCost = cartItems?.reduce((total, item) => total + item.price, 0)?.toFixed(2);

  return (
    <>
      <div className="px-2 xl:px-36 lg:px-10 md:px-10 pb-10 pt-14 ">
        <div className="xl:flex lg:flex md:flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 xl:mb-0 lg:mb-0 md:mb-0">Cart</h1>
          <div className="xl:flex lg:flex md:flex items-center gap-6">
            <p className="text-2xl font-bold mb-4 xl:mb-0 lg:mb-0 md:mb-0">Total Cost: $ {totalCost}</p>
            <div>
              <button onClick={handleSortByPrice} className="mr-3 border border-purple font-bold px-4 py-2 rounded-full text-sm text-purple">
                Sort by price <FontAwesomeIcon icon={faArrowUpWideShort} />{" "}
              </button>
              <button
                onClick={handlePurchaseClick}
                disabled={cartItems?.length === 0 || totalCost === "0.00"}
                className="bg-gradient-to-r from-purple to-pink-300 via-pink-400 bg-[length:200%_100%] bg-[position:10%] text-white text-sm font-bold px-4 py-2 rounded-full"
              >
                Purchase{" "}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          {cartItems?.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 xl:flex lg:flex md:flex justify-between rounded-xl items-center mb-4"
            >
              <div className="xl:flex lg:flex md:flex gap-6">
                <div>
                  <img
                    className="w-full xl:w-28 lg:w-28 md:w-28 h-40 xl:h-24 lg:h-24 md:h-24 rounded-xl"
                    src={item.product_image}
                    alt={item.product_title}
                  />
                </div>
                <div>
                  <h1 className="text-lg font-semibold mb-2">
                    {item.product_title}
                  </h1>
                  <p className="text-sm text-gray-400 mb-2">
                    {item.description}
                  </p>
                  <p>${item.price.toFixed(2)}</p>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-red-400 text-2xl cursor-pointer mt-4 xl:mt-0 lg:mt-0 md:mt-0"
                onClick={() => handleRemoveItem(index)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <WishList /> */}
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm mx-auto text-center w-[350px]">
            <img src={successImage} className="w-16 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-4">Payment Sucessfully</h2>
            <hr></hr>
            <p className="mb-2 mt-4 text-gray-500">Thanks for purchasing</p>
            <p className="text-gray-500">Total: $ {totalCostInModal}</p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-gray-200 text-black py-1 w-full rounded-full mt-4"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
