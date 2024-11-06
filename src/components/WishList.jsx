import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const WishList = ({ wishlist, onAddToCart, setWishlist }) => {
  // Function to remove an item from the wishlist
  const handleRemoveItem = (index) => {
    setWishlist((prevWishlist) => prevWishlist.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="px-2 xl:px-36 lg:px-10 md:px-10 pb-10 pt-14">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">WishList</h1>
        </div>

        <div className="mt-12">
          {wishlist.map((item, index) => (
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
                  <button
                    onClick={() => onAddToCart(item)}
                    className="bg-purple text-white text-center text-sm px-3 py-1.5 font-bold rounded-full mt-4"
                  >
                    Add to Cart{" "}
                  </button>
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
    </>
  );
};

export default WishList;
