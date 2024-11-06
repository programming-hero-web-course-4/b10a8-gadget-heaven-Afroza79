import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";

const ProductViewDetails = ({ addToCart, wishlist, addToWishlist }) => {
  const location = useLocation();
  const product = location.state?.product;
  

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    
  };

  const isInWishlist = wishlist.some((item) => item.product_id === product.product_id); 
 
  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(product); 
      toast.success(`Product has been added to the wishlist!`);
    }
  };

  // Helper function to render stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // Get the whole number part of the rating
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Check for half star
    const emptyStars = 5 - fullStars - halfStar; // Calculate empty stars

    // Push full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <input
          key={`full-${i}`}
          type="radio"
          name="rating"
          className="mask mask-star bg-yellow-400"
          checked="checked"
          readOnly
        />
      );
    }

    // Push half star if applicable
    if (halfStar) {
      stars.push(
        <input
          key="half"
          type="radio"
          name="rating"
          className="mask mask-star bg-yellow-400"
          checked="checked"
          readOnly
        />
      );
    }

    // Push empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <input
          key={`empty-${i}`}
          type="radio"
          name="rating"
          className="mask mask-star bg-gray-400"
          readOnly
        />
      );
    }

    return stars;
  };
  

  return (
    <>
      <div className="pb-28">
        <div className="p-4 mt-[-230px] bg-white w-[350px] xl:w-[1000px] lg:w-[1000px] md:w-[690px] xl:h-[470px] lg:h-[470px] md:h-[470px] mx-auto rounded-xl">
          <div className="xl:flex gap-6">
            <div>
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full xl:w-[300px] lg:w-[300px] md:w-[300px] h-[215px] xl:h-[430px] lg:h-[430px] md:h-[430px] object-cover rounded-lg mb-4"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {product.product_title}
              </h2>
              <p className="text-lg text-gray-700 mb-2">
                Price: ${product.price}
              </p>
              <p
                className={`text-xs mb-4 ${
                  product.availability
                    ? "text-green-500 bg-green-100 w-16 text-center py-1 rounded-full border border-green-500"
                    : "text-red-500"
                }`}
              >
                {product.availability ? "In Stock" : "Out of Stock"}
              </p>
              <p className="text-md text-gray-500 mb-4">
                {product.description}
              </p>
              <div className="text-md text-gray-600 mb-4">
                <p className="font-bold mb-2">Specification:</p>
                <ul className="list-decimal list-inside">
                  {product.Specification.map((spec, index) => (
                    <li className="text-sm mb-2" key={index}>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-md text-gray-600 mb-2">
                <p className="font-bold">Rating:</p>
                <div className="rating flex items-center space-x-1 pt-2">
                  <span className="pr-3">{renderStars(product.rating)}</span>(
                  {product.rating})
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="bg-purple text-white text-center text-sm px-3 py-1.5 font-bold rounded-full"
                  >
                    Add to Cart{" "}
                    <FontAwesomeIcon
                      className="pl-2 text-sm"
                      icon={faCartPlus}
                    />
                  </button>
                  <div className="border px-1.5 xl:px-2 lg:px-2 md:px-2 py-0.5 xl:py-1 lg:py-1 md:py-1 rounded-full">
                    <FontAwesomeIcon
                      onClick={handleAddToWishlist}
                      className={`text-sm xl:text-base lg:text-base md:text-base ${
                        isInWishlist
                          ? "text-red-500"
                          : "text-gray-500 cursor-pointer"
                      }`}
                      icon={isInWishlist ? faHeart : faHeartRegular}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductViewDetails;
