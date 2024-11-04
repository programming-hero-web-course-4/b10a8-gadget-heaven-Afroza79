import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import data from '../data/data.json';

const ProductViewDetails = () => {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <p>Product not found</p>;
    }
  return (
    <>
      <div className='pb-10'>

      <div className='p-4 mt-[-400px] bg-white w-[1000px] h-[400px] mx-auto rounded-xl'>
        <div className='flex gap-6'>
          <div> <img src={product.product_image} alt={product.product_title} className='w-[300px] h-[365px] object-cover rounded-lg mb-4 bg-gray-400' />
          </div>
          <div>
          <h2 className='text-2xl font-bold mb-4'>{product.product_title}</h2>
            <p className='text-lg text-gray-700 mb-2'>Price: ${product.price}</p>
            <p className='text-md text-gray-600 mb-2'>Category: {product.category}</p>
            <p className='text-md text-gray-600 mb-2'>Rating: {product.rating}</p>
              <p className='text-md text-gray-600 mb-4'>{product.description}</p>
              <p className='text-md text-gray-600 mb-4'>{product.Specification}</p>
            <p className={`text-md font-semibold ${product.availability ? 'text-green-500' : 'text-red-500'}`}>
                {product.availability ? 'In Stock' : 'Out of Stock'}
            </p>
          </div>
        </div>
           
        </div>
      </div>
    </>
  )
}

export default ProductViewDetails
