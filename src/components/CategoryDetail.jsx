import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../data/data.json';

const CategoryDetail = ({ categoryName }) => {
    // Use the category name from URL if not provided as a prop
    const { categoryName: paramCategoryName } = useParams();
    const activeCategory = categoryName || paramCategoryName; // Check for prop, else fallback to useParams

    // Filter data based on the active category
    const filteredData = activeCategory === 'all' ? data : data.filter((product) => product.category === activeCategory);

    return (
        <div>
           
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 w-[313px] mx-auto xl:w-[950px] lg:w-[650px] md:w-[370px]'>
                {filteredData.length > 0 ? (
                    filteredData.map((product) => (
                        <div key={product.product_id} className='rounded-lg p-4 bg-white'>
                            <img src={product.product_image} alt={product.product_title} className='w-full h-48 object-cover rounded-lg' />
                            <h3 className='text-lg mb-2 font-semibold mt-2'>{product.product_title}</h3>
                            <p className='text-gray-600 mb-4'>${product.price}</p>
                            <Link to={`/product/${product.product_id}`} state={{ product }}>
                                <button className='border border-purple text-purple text-sm px-3 py-2 rounded-full'>
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No products available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryDetail;
