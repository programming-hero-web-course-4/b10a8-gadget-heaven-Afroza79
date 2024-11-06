import React from 'react';
import data from '../data/data.json';
import { Link, useParams } from 'react-router-dom';
import CategoryDetail from './CategoryDetail';

const Cards = () => {
    const { categoryName } = useParams(); // Get the category name from URL params
    
    return (
        <div className='px-2 xl:px-20 lg:px-20 md:px-8 py-20'>
            <h1 className='text-center pb-10 text-3xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            <div className='xl:flex lg:flex md:flex xl:w-[1200px] lg:w-full md:w-full mx-auto gap-6'>
                <aside className='p-4 bg-white mt-4 max-h-fit rounded-xl'>
                    <ul className='w-full xl:w-[150px] lg:w-[150px] md:w-[150px] grid grid-cols-2 xl:grid-cols-none lg:grid-cols-none md:grid-cols-none'>
                        <li  className={`mb-4 pl-3 py-2 rounded-full w-[160px] xl:w-full lg:w-full md:w-full  ${
                                !categoryName || categoryName === "all"
                                    ? "bg-purple text-white"
                                    : "bg-gray-200 text-gray-500"
                            }`}>
                            <Link to="/category/all" className='text-sm'>
                                All Products
                            </Link>
                        </li>
                        {Array.from(new Set(data.map((item) => item.category))).map((category) => (
                            <li key={category}  className={`mb-4 pl-3 py-2 rounded-full w-[160px] xl:w-full lg:w-full md:w-full ${
                                    categoryName === category
                                        ? "bg-purple text-white"
                                        : "bg-gray-200 text-gray-500"
                                }`}>
                                <Link to={`/category/${category}`} className='text-sm'>
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className='mt-8 xl:mt-0 lg:mt-0 md:mt-0'>
                    <CategoryDetail categoryName={categoryName || "all"} />
                </main>
            </div>
        </div>
    );
};

export default Cards;
