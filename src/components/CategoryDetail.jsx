import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../data/data.json';
import ProductViewDetails from './ProductViewDetails';

const CategoryDetail = () => {
    const { categoryName } = useParams();
    // Check if the category name is 'all', and display all products if true
    const filteredData = categoryName === 'all' ? data : data.filter((product) => product.category === categoryName);

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>
                {/* {categoryName === 'all' ? 'All Products' : categoryName} */}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[950px]'>
                {filteredData.length > 0 ? (
                    filteredData.map((product) => {

                       return (
                            <div key={product.product_id} className='rounded-lg p-4 bg-white'>
                                <img src={product.product_image} alt={product.product_title} className='w-full h-48 object-cover rounded-lg bg-gray-400' />
                                <h3 className='text-lg mb-2 font-semibold mt-2'>{product.product_title}</h3>
                                <p className='text-gray-600 mb-4'>${product.price}</p>
                                <Link to={`/product/${product.product_id}`}
                                state={{ product }}>
                                    <button className='border border-purple text-purple text-sm px-3 py-2 rounded-full'>
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        )
                    })
                ) : (
                    <p>No products available in this category.</p>
                )}
            </div>
           
        </div>
    );
};

export default CategoryDetail;
